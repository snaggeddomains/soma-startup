"use client";

import { useState } from "react";
import { Label, Input, Textarea, Select } from "@/components/forms/fields";
import { involveTracks } from "@/lib/content";
import { submitForm, honeypotProps } from "@/lib/submitForm";

export function InvolveForm({ defaultRole }: { defaultRole?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    setError(null);
    const result = await submitForm("involve", e.currentTarget);
    setPending(false);
    if (result.ok) setSubmitted(true);
    else setError(result.error);
  }

  if (submitted) {
    return (
      <div className="rounded-xl2 border border-line bg-cream p-8 text-center">
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-accent text-paper">✓</div>
        <h3 className="mt-4 text-xl font-semibold">Thank you.</h3>
        <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-ink-soft">
          We&apos;re building a warm bench of advisors and partners — and we&apos;ll reach out
          shortly to talk through how you&apos;d like to help.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <Label htmlFor="role">How would you like to help?</Label>
        <Select id="role" name="role" required defaultValue={defaultRole ?? ""}>
          <option value="" disabled>
            Choose a role
          </option>
          {involveTracks.map((t) => (
            <option key={t.id} value={t.id}>
              {t.title}
            </option>
          ))}
        </Select>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required placeholder="Your name" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required placeholder="you@example.com" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="org">Company / organization</Label>
          <Input id="org" name="org" required placeholder="Where you work" />
        </div>
        <div>
          <Label htmlFor="role-title">Your role</Label>
          <Input id="role-title" name="roleTitle" required placeholder="Founder, designer, investor…" />
        </div>
      </div>

      <div>
        <Label htmlFor="linkedin">LinkedIn URL</Label>
        <Input
          id="linkedin"
          name="linkedin"
          type="url"
          required
          placeholder="https://www.linkedin.com/in/your-profile"
        />
      </div>

      <div>
        <Label htmlFor="background">A little about your background</Label>
        <Textarea
          id="background"
          name="background"
          required
          placeholder="What you'd bring, what excites you about SOMA Startup, or how you'd like to partner."
        />
      </div>

      <input {...honeypotProps} className="hidden" />

      {error && (
        <p className="rounded-lg border border-accent/30 bg-accent-soft px-4 py-3 text-sm text-accent-strong">
          {error}
        </p>
      )}

      <div className="flex justify-end pt-2">
        <button
          type="submit"
          disabled={pending}
          className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending ? "Sending…" : "Submit interest"}
        </button>
      </div>
    </form>
  );
}
