import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/Button";
import { PrintButton } from "@/components/PrintButton";
import {
  resources,
  buildFramework,
  pitchTemplate,
  judgingCriteria,
  olderCriteria,
  schedule,
  slideOutline,
  exampleConcepts,
  event,
} from "@/lib/content";

export function generateStaticParams() {
  return resources.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const r = resources.find((x) => x.slug === slug);
  if (!r) return {};
  return { title: r.title, description: r.body };
}

function NumBadge({ n }: { n: number }) {
  return (
    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent-soft font-display text-sm font-semibold text-accent-strong">
      {n}
    </span>
  );
}

function Lines({ n = 2 }: { n?: number }) {
  return (
    <div className="mt-4 space-y-6">
      {Array.from({ length: n }).map((_, i) => (
        <div key={i} className="border-b border-line" />
      ))}
    </div>
  );
}

function IdeaWorksheet() {
  return (
    <div className="space-y-8">
      <p className="leading-relaxed text-ink-soft">
        Work through these six questions in order — each one makes the next easier. Write,
        sketch, or talk it out. There are no wrong answers.
      </p>
      {buildFramework.map((f, i) => (
        <div key={f.q}>
          <div className="flex items-start gap-3">
            <NumBadge n={i + 1} />
            <div>
              <h3 className="font-display text-lg font-semibold">{f.q}</h3>
              <p className="text-sm text-ink-soft">{f.hint}</p>
            </div>
          </div>
          <Lines n={2} />
        </div>
      ))}
    </div>
  );
}

function PitchTemplateResource() {
  return (
    <div className="space-y-8">
      <p className="leading-relaxed text-ink-soft">
        Answer these five and you have a complete pitch. Aim for about two minutes total —
        roughly 25 seconds per part. Clarity beats polish.
      </p>
      {pitchTemplate.map((p, i) => (
        <div key={p.title}>
          <div className="flex items-start gap-3">
            <NumBadge n={i + 1} />
            <div>
              <h3 className="font-display text-lg font-semibold">{p.title}</h3>
              <p className="text-sm text-ink-soft">{p.prompt}</p>
            </div>
          </div>
          <Lines n={2} />
        </div>
      ))}
      <p className="rounded-xl2 border border-dashed border-line bg-cream px-5 py-4 text-sm text-ink-soft">
        <span className="font-medium text-ink">Tip:</span> practice it out loud at least
        twice. End on your most exciting line — that&apos;s what judges remember.
      </p>
    </div>
  );
}

function JudgingRubric() {
  return (
    <div className="space-y-8">
      <p className="leading-relaxed text-ink-soft">
        Judges score each criterion from 1 to 5, scaled to the team&apos;s division — younger
        builders are judged on creativity and effort, older students on a higher bar.
      </p>
      <div className="overflow-hidden rounded-xl2 border border-line">
        <table className="w-full text-left text-sm">
          <thead className="bg-cream text-ink-soft">
            <tr>
              <th className="px-5 py-3 font-medium">Criterion</th>
              <th className="hidden px-5 py-3 font-medium sm:table-cell">What it means</th>
              <th className="px-5 py-3 text-right font-medium">Score</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {judgingCriteria.map((c) => (
              <tr key={c.title}>
                <td className="px-5 py-4 align-top font-medium">{c.title}</td>
                <td className="hidden px-5 py-4 align-top text-ink-soft sm:table-cell">{c.body}</td>
                <td className="whitespace-nowrap px-5 py-4 text-right font-mono text-ink-faint">
                  1&nbsp; 2&nbsp; 3&nbsp; 4&nbsp; 5
                </td>
              </tr>
            ))}
            <tr className="bg-cream">
              <td className="px-5 py-3 font-semibold" colSpan={2}>
                Total
              </td>
              <td className="px-5 py-3 text-right font-mono text-ink-faint">&nbsp;&nbsp;&nbsp; / 30</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="rounded-xl2 border border-dashed border-line bg-cream px-5 py-4">
        <p className="text-sm font-medium">For the High School division, judges also weigh:</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {olderCriteria.map((c) => (
            <span key={c} className="rounded-full bg-paper px-3 py-1 text-xs text-ink-soft ring-1 ring-line">
              {c}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function DaySchedule() {
  return (
    <div className="space-y-8">
      <p className="leading-relaxed text-ink-soft">
        Doors open at 9:00 AM and awards wrap by 6:00 PM, all at {event.venueLabel} in{" "}
        {event.location}. One high-energy day, four parts.
      </p>
      <ol className="relative space-y-8 border-l border-line pl-8">
        {schedule.map((block) => (
          <li key={block.title} className="relative">
            <span className="absolute -left-[2.55rem] grid h-7 w-auto min-w-7 place-items-center rounded-full border border-line bg-paper px-1 font-mono text-[10px] font-medium text-accent-strong">
              {block.time}
            </span>
            <h3 className="font-display text-lg font-semibold">{block.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-ink-soft">{block.body}</p>
          </li>
        ))}
      </ol>
      <p className="text-sm text-ink-faint">Times are approximate and may shift slightly on the day.</p>
    </div>
  );
}

function SlideTemplate() {
  return (
    <div className="space-y-8">
      <p className="leading-relaxed text-ink-soft">
        A clean six-slide deck — one idea per slide. Recreate it in Google Slides, Canva, or
        Keynote. A prototype photo or sketch beats a wall of text every time.
      </p>
      <ol className="grid gap-4 sm:grid-cols-2">
        {slideOutline.map((s, i) => (
          <li key={s.title} className="flex flex-col rounded-xl2 border border-line bg-paper p-5">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-ink-faint">
                Slide {i + 1}
              </span>
              <span className="h-px flex-1 bg-line" />
            </div>
            <h3 className="mt-2 font-display text-lg font-semibold">{s.title}</h3>
            <p className="mt-1 flex-1 text-sm leading-relaxed text-ink-soft">{s.body}</p>
          </li>
        ))}
      </ol>
      <p className="rounded-xl2 border border-dashed border-line bg-cream px-5 py-4 text-sm text-ink-soft">
        <span className="font-medium text-ink">Tip:</span> big words, few of them. Read every
        slide from the back of the room — if you can&apos;t, make the text bigger.
      </p>
    </div>
  );
}

function ExampleConcepts() {
  return (
    <div className="space-y-10">
      <p className="leading-relaxed text-ink-soft">
        Starting points, not a box to fit inside. The best ideas usually come from something
        you&apos;ve actually noticed — at school, at home, or around town.
      </p>
      {exampleConcepts.map((group) => (
        <div key={group.division}>
          <div className="flex items-baseline gap-3">
            <h3 className="font-display text-xl font-semibold">{group.division}</h3>
            <span className="text-sm text-ink-faint">{group.grades}</span>
          </div>
          <ul className="mt-4 grid gap-4 sm:grid-cols-3">
            {group.ideas.map((idea) => (
              <li key={idea.name} className="rounded-xl2 border border-line bg-paper p-5">
                <p className="font-display font-semibold">{idea.name}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{idea.blurb}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function ResourceBody({ slug }: { slug: string }) {
  switch (slug) {
    case "idea-worksheet":
      return <IdeaWorksheet />;
    case "pitch-template":
      return <PitchTemplateResource />;
    case "judging-rubric":
      return <JudgingRubric />;
    case "day-schedule":
      return <DaySchedule />;
    case "slide-template":
      return <SlideTemplate />;
    case "example-concepts":
      return <ExampleConcepts />;
    default:
      return null;
  }
}

export default async function ResourcePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resource = resources.find((r) => r.slug === slug);
  if (!resource) notFound();

  return (
    <>
      <PageHeader kicker="Participant toolkit" title={resource.title} intro={resource.body} />

      <section className="py-14 sm:py-16">
        <Container className="max-w-3xl">
          <div className="mb-8 flex items-center justify-between gap-4 print:hidden">
            <Link
              href="/resources"
              className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              ← All resources
            </Link>
            <PrintButton />
          </div>

          <ResourceBody slug={slug} />

          <div className="mt-14 flex flex-col items-center gap-3 border-t border-line pt-10 text-center print:hidden">
            <p className="text-ink-soft">Ready to put it to work on {event.dateLabel.split(",")[0]}?</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/register" className="px-6 py-3 text-base">
                Register a student
              </Button>
              <Button href="/resources" variant="secondary" className="px-6 py-3 text-base">
                Back to the toolkit
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
