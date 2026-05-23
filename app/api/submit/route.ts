import { NextResponse } from "next/server";
import { Resend } from "resend";
import { event } from "@/lib/content";

const TO = process.env.CONTACT_EMAIL ?? event.contactEmail;
// somastartup.com is verified in Resend, so we send from it by default.
// Override with RESEND_FROM if you'd prefer a different verified address.
const FROM = process.env.RESEND_FROM ?? "SOMA Startup <noreply@somastartup.com>";

const labels: Record<string, string> = {
  participantName: "Participant name",
  division: "Division",
  grade: "Grade",
  school: "School",
  teamName: "Team name",
  contactName: "Parent / guardian",
  email: "Email",
  idea: "Idea / problem",
  role: "Role",
  name: "Name",
  org: "Organization",
  roleTitle: "Title",
  linkedin: "LinkedIn",
  background: "Background",
};

function clean(value: unknown): string {
  return String(value ?? "").replace(/\s+/g, " ").slice(0, 2000).trim();
}

// Best-effort: append the submission to a Google Sheet via an Apps Script
// webhook. Never blocks or fails the response — email is the source of truth.
async function logToSheet(kind: string, fields: Record<string, string>) {
  const url = process.env.SHEETS_WEBHOOK_URL;
  if (!url) return;
  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ kind, ...fields, submittedAt: new Date().toISOString() }),
    });
  } catch (err) {
    console.error("Sheet log error:", err);
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function firstNameOf(full: string): string {
  const first = (full || "").trim().split(/\s+/)[0];
  return first || "there";
}

// Auto-reply sent to the person who submitted, styled to match the site so it
// reads as part of SOMA Startup rather than a generic system email.
function confirmationEmail(
  kind: "register" | "involve",
  fields: Record<string, string>,
): { subject: string; text: string; html: string } {
  const isRegister = kind === "register";
  const greet = firstNameOf(isRegister ? fields.contactName || fields.participantName : fields.name);

  const subject = isRegister
    ? `You're on the list — ${event.name}`
    : `Thanks for stepping up — ${event.name}`;

  const lead = isRegister
    ? `Thanks for registering ${fields.participantName || "your young builder"} for ${event.name}.`
    : `Thanks for offering to help with ${event.name}${fields.role ? ` as ${fields.role}` : ""}.`;

  const detail = isRegister
    ? "We've got the details and we'll follow up at this address with logistics, the participant toolkit, and next steps as the date and venue are confirmed. No coding or experience required — just bring curiosity."
    : "We're building a warm bench of advisors, mentors, and partners — and we'll reach out shortly to talk through how you'd like to plug in.";

  const text = [
    `Hi ${greet},`,
    "",
    lead,
    "",
    detail,
    "",
    "Questions in the meantime? Just reply to this email.",
    "",
    `— The ${event.name} team`,
    event.tagline,
    event.contactEmail,
  ].join("\n");

  const stripe = ["#ee4a2a", "#b07d18", "#5d7345", "#8a4a6b", "#c4371b"]
    .map((c) => `<td style="background:${c};height:6px;font-size:0;line-height:0">&nbsp;</td>`)
    .join("");

  const html = `<!doctype html><html><body style="margin:0;padding:0;background:#ece4d2">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#ece4d2;padding:32px 16px">
    <tr><td align="center">
      <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:480px;background:#f7f3e8;border:1px solid #e2dac4;border-radius:16px;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,system-ui,sans-serif">
        <tr><td style="padding:0"><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>${stripe}</tr></table></td></tr>
        <tr><td style="padding:28px 32px 0">
          <div style="font-size:20px;font-weight:700;letter-spacing:-0.03em;color:#0e0e0c">soma<span style="color:#ee4a2a;font-weight:400">/</span>startup</div>
        </td></tr>
        <tr><td style="padding:20px 32px 4px">
          <p style="margin:0 0 16px;font-size:16px;color:#0e0e0c">Hi ${escapeHtml(greet)},</p>
          <p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#2a2620">${escapeHtml(lead)}</p>
          <p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#2a2620">${escapeHtml(detail)}</p>
          <p style="margin:0;font-size:14px;line-height:1.6;color:#6b675e">Questions in the meantime? Just reply to this email.</p>
        </td></tr>
        <tr><td style="padding:24px 32px 32px">
          <div style="border-top:1px solid #e2dac4;padding-top:16px">
            <p style="margin:0;font-size:14px;color:#0e0e0c">— The ${escapeHtml(event.name)} team</p>
            <p style="margin:4px 0 0;font-size:13px;font-style:italic;color:#6b675e">${escapeHtml(event.tagline)}</p>
            <p style="margin:10px 0 0;font-size:13px"><a href="mailto:${event.contactEmail}" style="color:#c4371b;text-decoration:none">${escapeHtml(event.contactEmail)}</a></p>
          </div>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;

  return { subject, text, html };
}

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: `Email isn't configured yet. Please write to ${TO} directly.` },
      { status: 503 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot — bots fill hidden fields, humans don't. Silently accept and drop.
  if (clean(body.hp)) return NextResponse.json({ ok: true });

  const kind =
    body.kind === "register" ? "register" : body.kind === "involve" ? "involve" : null;
  if (!kind) return NextResponse.json({ error: "Unknown form." }, { status: 400 });

  const fields = Object.fromEntries(
    Object.entries(body)
      .filter(([k]) => k !== "kind" && k !== "hp")
      .map(([k, v]) => [k, clean(v)])
      .filter(([, v]) => v),
  ) as Record<string, string>;

  const replyTo = /.+@.+\..+/.test(fields.email ?? "") ? fields.email : undefined;

  await logToSheet(kind, fields);

  const heading =
    kind === "register"
      ? `New registration — ${fields.participantName || "Unnamed"}`
      : `New ${fields.role || "volunteer"} interest — ${fields.name || "Unnamed"}`;

  const text = [heading, "", ...Object.entries(fields).map(([k, v]) => `${labels[k] ?? k}: ${v}`)].join("\n");

  const html =
    `<h2 style="font-family:system-ui,sans-serif">${escapeHtml(heading)}</h2>` +
    `<table style="font-family:system-ui,sans-serif;border-collapse:collapse;font-size:14px">` +
    Object.entries(fields)
      .map(
        ([k, v]) =>
          `<tr><td style="padding:4px 14px 4px 0;color:#777;vertical-align:top;white-space:nowrap">${escapeHtml(
            labels[k] ?? k,
          )}</td><td style="padding:4px 0">${escapeHtml(v)}</td></tr>`,
      )
      .join("") +
    `</table>`;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo,
      subject: heading,
      text,
      html,
    });
    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: `Couldn't send right now. Please email ${TO}.` },
        { status: 502 },
      );
    }

    // Branded confirmation to the submitter — best-effort, never blocks success.
    if (replyTo) {
      try {
        const conf = confirmationEmail(kind, fields);
        const { error: confError } = await resend.emails.send({
          from: FROM,
          to: replyTo,
          replyTo: TO,
          subject: conf.subject,
          text: conf.text,
          html: conf.html,
        });
        if (confError) console.error("Confirmation email error:", confError);
      } catch (err) {
        console.error("Confirmation email error:", err);
      }
    }
  } catch (err) {
    console.error("Submit handler error:", err);
    return NextResponse.json(
      { error: `Couldn't send right now. Please email ${TO}.` },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
