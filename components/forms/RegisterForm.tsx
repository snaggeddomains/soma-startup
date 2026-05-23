"use client";

import { useState } from "react";
import { Label, Input, Textarea, Select } from "@/components/forms/fields";
import { divisions, event } from "@/lib/content";

// SCAFFOLD: this form holds local state and shows a success screen.
// To go live, POST `data` to a form service (Formspree, Google Forms,
// Airtable, a Next.js route handler, etc.) inside handleSubmit.
export function RegisterForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    // TODO: send `data` to your backend / form service here.
    console.log("Registration (demo):", data);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-xl2 border border-line bg-cream p-8 text-center">
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-accent text-paper">✓</div>
        <h3 className="mt-4 text-xl font-semibold">You&apos;re on the list.</h3>
        <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-ink-soft">
          Thanks for registering interest in {event.name}. We&apos;ll be in touch at the email
          you provided with logistics, the participant toolkit, and next steps.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-medium text-accent hover:underline"
        >
          Register another participant
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="participantName">Participant name</Label>
          <Input id="participantName" name="participantName" required placeholder="First and last name" />
        </div>
        <div>
          <Label htmlFor="division">Division</Label>
          <Select id="division" name="division" required defaultValue="">
            <option value="" disabled>
              Select a division
            </option>
            {divisions.map((d) => (
              <option key={d.id} value={d.id}>
                {d.name} — {d.grades}
              </option>
            ))}
          </Select>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="gradeSchool">Grade & school</Label>
          <Input id="gradeSchool" name="gradeSchool" required placeholder="e.g. 7th grade, Columbia HS" />
        </div>
        <div>
          <Label htmlFor="teamName" optional>
            Team name
          </Label>
          <Input id="teamName" name="teamName" placeholder="Coming solo? Leave blank." />
        </div>
      </div>

      <div className="rounded-xl2 border border-line bg-cream p-5">
        <p className="text-sm font-medium">Parent / guardian contact</p>
        <p className="mb-4 mt-0.5 text-xs text-ink-faint">
          Required for participants under 18. We&apos;ll send all logistics here.
        </p>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor="contactName">Contact name</Label>
            <Input id="contactName" name="contactName" required placeholder="Parent or guardian" />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required placeholder="you@example.com" />
          </div>
        </div>
      </div>

      <div>
        <Label htmlFor="idea" optional>
          A problem or idea you&apos;re curious about
        </Label>
        <Textarea id="idea" name="idea" placeholder="No idea yet? Totally fine — you can find one on the day." />
      </div>

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-xs text-ink-faint">
          By registering you&apos;ll receive event updates. Spots and any fees will be confirmed
          by email.
        </p>
        <button
          type="submit"
          className="inline-flex shrink-0 items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent"
        >
          Complete registration
        </button>
      </div>
    </form>
  );
}
