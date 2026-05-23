import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { InvolveForm } from "@/components/forms/InvolveForm";
import { event, involveTracks } from "@/lib/content";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Mentor, judge, or sponsor SOMA Startup — and help build a lasting local institution for youth entrepreneurship.",
};

export default function GetInvolvedPage() {
  return (
    <>
      <PageHeader
        kicker="Get involved"
        title="Help build the next generation of founders."
        intro="A strong, warm bench of local and regional talent is what makes SOMA Startup feel real. Lend a few hours, your judgment, or your support."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            {involveTracks.map((t) => (
              <div key={t.id} className="flex flex-col rounded-xl2 border border-line bg-cream p-7">
                <h2 className="text-lg font-semibold">{t.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{t.body}</p>
                <ul className="mt-5 space-y-2.5">
                  {t.bullets.map((b) => (
                    <li key={b} className="flex gap-2.5 text-sm text-ink-soft">
                      <span className="text-accent">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-16 sm:py-20">
        <Container className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight">Tell us how you&apos;d like to help</h2>
          <p className="mt-2 text-ink-soft">
            We&apos;ll follow up personally to find the right fit — whether that&apos;s a single afternoon
            of judging or an ongoing partnership.
          </p>
          <div className="mt-8">
            <InvolveForm />
          </div>
          <p className="mt-6 text-sm text-ink-faint">
            Prefer email? Reach us at{" "}
            <a href={`mailto:${event.contactEmail}`} className="text-accent hover:underline">
              {event.contactEmail}
            </a>
            .
          </p>
        </Container>
      </section>
    </>
  );
}
