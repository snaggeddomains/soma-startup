import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/Button";
import { resources, buildFramework, judgingCriteria, event } from "@/lib/content";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "The SOMA Startup participant toolkit — idea worksheet, pitch template, judging rubric, and more.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        kicker="Participant toolkit"
        title="Everything you need to show up ready."
        intro="A lightweight kit so any student — at any age — can walk in and start building. No prep required, but it helps."
      />

      {/* Toolkit grid */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((r) => (
              <div key={r.title} className="flex flex-col rounded-xl2 border border-line p-6">
                <h2 className="font-display text-base font-semibold">{r.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{r.body}</p>
                {/* TODO: link these to real PDFs/Google Docs once the toolkit is produced. */}
                <span className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-cream px-3 py-1 text-xs text-ink-faint ring-1 ring-line">
                  Coming soon
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* The pitch template + idea worksheet, inline */}
      <section className="border-t border-line bg-cream py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="kicker mb-3">Idea worksheet</p>
              <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                From a hunch to a concept.
              </h2>
              <p className="mt-3 leading-relaxed text-ink-soft">
                The six questions your advisor will help you answer — in order.
              </p>
              <ol className="mt-6 space-y-4">
                {buildFramework.map((f, i) => (
                  <li key={f.q} className="flex gap-3.5">
                    <span className="font-display text-lg font-semibold text-accent-strong">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className="block text-sm font-medium">{f.q}</span>
                      <span className="block text-sm text-ink-soft">{f.hint}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <p className="kicker mb-3">Pitch template</p>
              <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Five slides. Two minutes. Done.
              </h2>
              <p className="mt-3 leading-relaxed text-ink-soft">
                Answer these five and you have a complete pitch — clarity over polish.
              </p>
              <ol className="mt-6 space-y-4">
                {[
                  ["The problem", "What did you notice that bugs people?"],
                  ["The solution", "Your idea, in one clear sentence."],
                  ["Who it's for", "Who has this problem most?"],
                  ["Why it matters", "What changes if your idea exists?"],
                  ["What's exciting", "What makes it different or surprising?"],
                ].map(([title, hint], i) => (
                  <li key={title} className="flex gap-3.5">
                    <span className="font-display text-lg font-semibold text-accent-strong">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className="block text-sm font-medium">{title}</span>
                      <span className="block text-sm text-ink-soft">{hint}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </section>

      {/* Rubric */}
      <section className="py-16 sm:py-20">
        <Container>
          <p className="kicker mb-3">Judging rubric</p>
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Exactly what judges look for.
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-ink-soft">
            No surprises — teams are scored against these, scaled to their division.
          </p>
          <div className="mt-8 overflow-hidden rounded-xl2 border border-line">
            <table className="w-full text-left text-sm">
              <thead className="bg-cream text-ink-soft">
                <tr>
                  <th className="px-5 py-3 font-medium">Criterion</th>
                  <th className="px-5 py-3 font-medium">What it means</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {judgingCriteria.map((c) => (
                  <tr key={c.title}>
                    <td className="px-5 py-3 font-medium">{c.title}</td>
                    <td className="px-5 py-3 text-ink-soft">{c.body}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="border-t border-line bg-cream py-16 text-center">
        <Container>
          <h2 className="text-2xl font-semibold tracking-tight">Got the gist? Come build with us.</h2>
          <p className="mx-auto mt-3 max-w-md text-ink-soft">
            {event.dateLabel} · {event.location}.
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
