import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { Faq } from "@/components/Faq";
import {
  event,
  stats,
  objectives,
  divisions,
  schedule,
  buildFramework,
  judgingCriteria,
  olderCriteria,
  prizes,
  competitions,
  localValue,
  principles,
  involveTracks,
} from "@/lib/content";

const divisionStyles: Record<string, { chip: string; dot: string }> = {
  amber: { chip: "bg-amber-soft text-amber", dot: "bg-amber" },
  emerald: { chip: "bg-emerald-soft text-emerald", dot: "bg-emerald" },
  accent: { chip: "bg-accent-soft text-accent-strong", dot: "bg-accent" },
  violet: { chip: "bg-violet-soft text-violet", dot: "bg-violet" },
};

function Check() {
  return (
    <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 shrink-0 text-accent" fill="none" aria-hidden>
      <path d="M5 10.5 8.5 14 15 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-cream">
        <div className="absolute inset-0 bg-grid opacity-70" aria-hidden />
        <div
          className="pointer-events-none absolute -top-40 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(closest-side, #3b49df, transparent)" }}
          aria-hidden
        />
        <Container className="relative py-20 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-paper/70 px-3 py-1 text-xs text-ink-soft backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {event.dateLabel} · {event.location}
            </span>
            <h1 className="mt-6 text-balance text-5xl font-semibold tracking-tight sm:text-6xl">
              Spot a problem. Build a solution.{" "}
              <span className="text-accent">Pitch it.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              {event.name} is a one-day startup challenge for South Orange & Maplewood
              students — from young kids through college. No coding, no experience
              required. Just your ideas.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/register" className="px-6 py-3 text-base">
                Register a student
              </Button>
              <Button href="/get-involved" variant="secondary" className="px-6 py-3 text-base">
                Mentor · judge · sponsor
              </Button>
            </div>
          </div>
        </Container>

        {/* Stats bar */}
        <Container className="relative pb-16">
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl2 border border-line bg-line text-center md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-paper px-4 py-6">
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-2xl font-semibold tracking-tight sm:text-3xl">{s.value}</dd>
                <p className="mt-1 text-xs text-ink-faint">{s.label}</p>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* About / Why it matters */}
      <section id="about" className="scroll-mt-20 py-20 sm:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeading
                kicker="What it is"
                title="A structured, inspiring on-ramp into entrepreneurship."
                intro="The goal isn't to launch a finished company in a day. It's to give students a place to identify a problem, imagine a solution, shape it into a simple concept, and pitch it clearly — in an environment that feels ambitious, modern, and genuinely accessible."
              />
              <p className="mt-6 leading-relaxed text-ink-soft">
                For many students, the hardest part isn&apos;t ability — it&apos;s exposure. They&apos;ve
                never been handed a framework for how an idea becomes a product, or how a
                simple observation becomes a real opportunity. {event.name} normalizes that
                way of thinking early, so students see technology and startups not just as
                things they consume, but as things they can shape.
              </p>
            </div>

            <div className="rounded-xl2 border border-line bg-cream p-8">
              <p className="kicker mb-5">Why it matters</p>
              <ul className="space-y-4">
                {objectives.map((o) => (
                  <li key={o} className="flex gap-3 text-[15px] leading-relaxed text-ink-soft">
                    <Check />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Divisions */}
      <section id="divisions" className="scroll-mt-20 border-y border-line bg-cream py-20 sm:py-28">
        <Container>
          <SectionHeading
            kicker="Four divisions"
            title="Everyone competes on a level playing field."
            intro="Age-based divisions keep expectations and judging developmentally appropriate. Younger builders are rewarded for creativity and enthusiasm; older students are held to a higher bar on feasibility and market thinking."
            align="center"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {divisions.map((d) => {
              const style = divisionStyles[d.color];
              return (
                <div
                  key={d.id}
                  className="group flex flex-col rounded-xl2 border border-line bg-paper p-6 transition-shadow hover:shadow-[0_1px_0_0_rgba(11,11,15,0.04),0_12px_30px_-12px_rgba(11,11,15,0.18)]"
                >
                  <span className={`inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${style.chip}`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
                    {d.grades}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{d.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{d.focus}</p>
                  <p className="mt-4 border-t border-line pt-4 text-xs text-ink-faint">
                    <span className="font-medium text-ink-soft">Judged on:</span> {d.judgedOn}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* How it works — schedule + framework */}
      <section id="schedule" className="scroll-mt-20 py-20 sm:py-28">
        <Container>
          <SectionHeading
            kicker="How the day works"
            title="A clear beginning, middle, and end."
            intro="Morning inspiration and idea development, midday team work and mentor support, afternoon pitches — then deliberation, awards, and a strong close."
          />

          <div className="mt-12 grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            {/* Timeline */}
            <ol className="relative space-y-8 border-l border-line pl-8">
              {schedule.map((block, i) => (
                <li key={block.title} className="relative">
                  <span className="absolute -left-[2.6rem] grid h-7 w-7 place-items-center rounded-full border border-line bg-paper text-xs font-medium text-ink-soft">
                    {i + 1}
                  </span>
                  <p className="kicker mb-1 normal-case tracking-wider text-ink-faint">{block.time}</p>
                  <h3 className="text-lg font-semibold">{block.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{block.body}</p>
                </li>
              ))}
            </ol>

            {/* Build framework */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-xl2 border border-line bg-ink p-8 text-paper">
                <p className="kicker mb-2 text-accent-soft">The build framework</p>
                <h3 className="text-xl font-semibold">Six questions. That&apos;s the whole startup.</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  No coding required. Sketch, map a workflow, mock up a screen, or build slides —
                  whatever fits your idea and age.
                </p>
                <ol className="mt-6 space-y-4">
                  {buildFramework.map((f, i) => (
                    <li key={f.q} className="flex gap-3">
                      <span className="font-mono text-sm text-accent-soft">{String(i + 1).padStart(2, "0")}</span>
                      <span>
                        <span className="block text-sm font-medium">{f.q}</span>
                        <span className="block text-xs text-white/55">{f.hint}</span>
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Prizes */}
      <section id="prizes" className="scroll-mt-20 border-y border-line bg-cream py-20 sm:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeading
                kicker="Prizes & incentives"
                title="Four winners. Real prizes. Lasting support."
                intro="Every division has its own winner — so a 4th grader and a college senior both walk away recognized."
              />
              <ul className="mt-8 space-y-4">
                {prizes.map((p) => (
                  <li key={p} className="flex gap-3 text-[15px] leading-relaxed text-ink-soft">
                    <Check />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-faint">
                The mentorship piece matters most: it signals that strong ideas keep getting
                guidance after the event, and that promising students are encouraged well
                beyond the closing ceremony.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {divisions.map((d) => {
                const style = divisionStyles[d.color];
                return (
                  <div key={d.id} className="rounded-xl2 border border-line bg-paper p-6 text-center">
                    <p className="text-3xl font-semibold tracking-tight">
                      ${event.prizePerDivision.toLocaleString()}
                    </p>
                    <span className={`mt-3 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${style.chip}`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
                      {d.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Judging */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            kicker="Judging"
            title="Simple, clear, and age-aware."
            intro="The same spirit across every division — with a higher bar for older students."
            align="center"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {judgingCriteria.map((c) => (
              <div key={c.title} className="rounded-xl2 border border-line p-6">
                <h3 className="text-base font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.body}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-3 rounded-xl2 border border-dashed border-line bg-cream px-6 py-5 text-center">
            <span className="text-sm font-medium">For high school & college, judges also weigh:</span>
            {olderCriteria.map((c) => (
              <span key={c} className="rounded-full bg-paper px-3 py-1 text-xs text-ink-soft ring-1 ring-line">
                {c}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* Feeder system */}
      <section id="feeder" className="scroll-mt-20 border-y border-line bg-ink py-20 text-paper sm:py-28">
        <Container>
          <div className="max-w-2xl">
            <p className="kicker mb-3 text-accent-soft">Where it leads</p>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              An early-stage feeder into bigger entrepreneurship pathways.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              {event.name} doesn&apos;t compete with the major student competitions — it prepares
              students for them. We help young builders learn the vocabulary, confidence, and
              mindset to go further, including a serious competition right in our own backyard.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {competitions.map((c) => (
              <a
                key={c.name}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-xl2 border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-white/25 hover:bg-white/[0.07]"
              >
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-semibold">{c.name}</h3>
                  {c.local && (
                    <span className="rounded-full bg-accent px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide">
                      Local
                    </span>
                  )}
                </div>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">{c.blurb}</p>
                <p className="mt-4 flex items-center justify-between text-xs text-white/45">
                  <span>{c.audience}</span>
                  <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>→</span>
                </p>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* Local value proposition */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            kicker="Local & regional value"
            title="An investment in SOMA's own talent."
            intro="More than a one-day contest — a bridge between our schools, our community, and startup culture."
          />
          <div className="mt-12 grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {localValue.map((v) => (
              <div key={v.title}>
                <div className="mb-3 h-px w-10 bg-accent" />
                <h3 className="text-base font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{v.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Get involved strip */}
      <section className="border-y border-line bg-cream py-20 sm:py-28">
        <Container>
          <SectionHeading
            kicker="Get involved"
            title="The event runs on its people."
            intro="A strong, warm bench of local and regional talent makes SOMA Startup feel real — and shows students the range of paths a builder can take."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {involveTracks.map((t) => (
              <div key={t.id} className="flex flex-col rounded-xl2 border border-line bg-paper p-7">
                <h3 className="text-lg font-semibold">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{t.body}</p>
                <ul className="mt-5 space-y-2.5">
                  {t.bullets.map((b) => (
                    <li key={b} className="flex gap-2.5 text-sm text-ink-soft">
                      <Check />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/get-involved" className="px-6 py-3 text-base">
              Volunteer or partner with us
            </Button>
          </div>
        </Container>
      </section>

      {/* Principles + resources teaser */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeading kicker="Design principles" title="Accessible by design." />
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {principles.map((p) => (
                  <li key={p} className="flex gap-2.5 rounded-lg border border-line bg-cream px-4 py-3 text-sm text-ink-soft">
                    <Check />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl2 border border-line bg-cream p-8">
              <p className="kicker mb-3">Participant toolkit</p>
              <h3 className="text-2xl font-semibold tracking-tight">
                Everything a team needs to show up ready.
              </h3>
              <p className="mt-3 leading-relaxed text-ink-soft">
                A lightweight kit — idea worksheet, pitch template, judging rubric, schedule,
                and an optional slide deck — so any student can walk in and start building.
              </p>
              <div className="mt-6">
                <Button href="/resources" variant="secondary">
                  Explore the toolkit →
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-t border-line py-20 sm:py-28">
        <Container className="max-w-3xl">
          <SectionHeading kicker="FAQ" title="Questions, answered." align="center" className="mb-12" />
          <Faq />
        </Container>
      </section>

      {/* Final CTA */}
      <section className="bg-accent py-20 text-paper sm:py-24">
        <Container className="text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Ready to build something this summer?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            {event.dateLabel}. {event.location}. Bring an idea or find one in the room.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/register" variant="secondary" className="px-6 py-3 text-base">
              Register a student
            </Button>
            <Button
              href="/get-involved"
              className="border border-white/30 bg-transparent px-6 py-3 text-base text-paper hover:bg-white/10"
            >
              Get involved
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
