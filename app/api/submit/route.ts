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
  } catch (err) {
    console.error("Submit handler error:", err);
    return NextResponse.json(
      { error: `Couldn't send right now. Please email ${TO}.` },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
