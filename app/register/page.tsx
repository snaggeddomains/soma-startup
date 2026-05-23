import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { RegisterForm } from "@/components/forms/RegisterForm";
import { divisions, event, principles } from "@/lib/content";

export const metadata: Metadata = {
  title: "Register",
  description: `Register a student for ${event.name} on ${event.dateLabel}.`,
};

export default function RegisterPage() {
  return (
    <>
      <PageHeader
        kicker="Registration"
        title="Register for SOMA Startup"
        intro={`${event.dateLabel} · ${event.venueLabel}, ${event.location}. Bring an idea or find one in the room — every age group has a place.`}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <div className="order-2 lg:order-1">
              <RegisterForm />
            </div>

            <aside className="order-1 space-y-8 lg:order-2">
              <div className="rounded-xl2 border border-line bg-cream p-6">
                <p className="kicker mb-4">Choose your division</p>
                <ul className="space-y-3">
                  {divisions.map((d) => (
                    <li key={d.id} className="flex items-baseline justify-between gap-3 text-sm">
                      <span className="font-medium">{d.name}</span>
                      <span className="text-ink-faint">{d.grades}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="kicker mb-4">Good to know</p>
                <ul className="space-y-2.5 text-sm text-ink-soft">
                  {principles.slice(0, 4).map((p) => (
                    <li key={p} className="flex gap-2.5">
                      <span className="text-accent">•</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="rounded-lg border border-dashed border-line p-4 text-xs leading-relaxed text-ink-faint">
                Questions about eligibility or group registration?{" "}
                <a href={`mailto:${event.contactEmail}`} className="text-accent hover:underline">
                  {event.contactEmail}
                </a>
              </p>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
