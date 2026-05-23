import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/Button";
import { resources, event } from "@/lib/content";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "The SOMA Startup participant toolkit — idea worksheet, pitch template, judging rubric, schedule, slide template, and example concepts.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        kicker="Participant toolkit"
        title="Everything you need to show up ready."
        intro="A lightweight kit so any student — at any age — can walk in and start building. Open any one to read it, print it, or save it as a PDF."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((r) => (
              <Link
                key={r.slug}
                href={`/resources/${r.slug}`}
                className="card-lift group flex flex-col rounded-xl2 border border-line bg-paper p-6 transition-colors hover:border-accent/40"
              >
                <h2 className="font-display text-lg font-semibold">{r.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{r.body}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent-strong">
                  Open
                  <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-cream py-16 text-center">
        <Container>
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            Got the gist? Come build with us.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-ink-soft">
            {event.location} · date &amp; venue to be announced
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/register" className="px-6 py-3 text-base">
              Register a student
            </Button>
            <Button href="/get-involved" variant="secondary" className="px-6 py-3 text-base">
              Get involved
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
