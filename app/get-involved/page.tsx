import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { InvolveForm } from "@/components/forms/InvolveForm";
import { event, involveTracks } from "@/lib/content";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Advise a team or sponsor SOMA Startup — and help build a lasting local institution for youth entrepreneurship.",
};

export default function GetInvolvedPage() {
  return (
    <>
      <PageHeader
        kicker="Get involved"
        title="Help build the next generation of founders."
        intro="A strong, warm bench of local and regional talent is what makes SOMA Startup feel real. Lend a few hours as an advisor, or back it as a sponsor."
      />

      <section className="py-14 sm:py-16">
        <Container>
          <div className="mx-auto grid max-w-3xl gap-5 sm:grid-cols-2">
            {involveTracks.map((t) => (
              <div key={t.id} className="card-lift rounded-xl2 border border-line bg-cream p-6">
                <h2 className="font-display text-lg font-semibold">{t.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{t.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-16 sm:py-20">
        <Container className="max-w-2xl">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Tell us how you&apos;d like to help
          </h2>
          <p className="mt-2 text-ink-soft">
            We&apos;ll follow up personally to find the right fit.
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
