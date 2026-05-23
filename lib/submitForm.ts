export type SubmitResult = { ok: true } | { ok: false; error: string };

// POST a form's fields to the email API route. Used by the register and
// get-involved forms.
export async function submitForm(
  kind: "register" | "involve",
  form: HTMLFormElement,
): Promise<SubmitResult> {
  const data = Object.fromEntries(new FormData(form));
  try {
    const res = await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ kind, ...data }),
    });
    const json = (await res.json().catch(() => ({}))) as { error?: string };
    if (!res.ok) {
      return { ok: false, error: json.error ?? "Something went wrong. Please try again." };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: "Network error. Please check your connection and try again." };
  }
}

// A visually-hidden honeypot field. Bots fill it; the server drops those.
export const honeypotProps = {
  type: "text" as const,
  name: "hp",
  tabIndex: -1,
  autoComplete: "off",
  "aria-hidden": true,
};
