import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { Faq } from "@/components/Faq";
import { Stripes, Badge, Sunburst } from "@/components/Retro";
import {
  event,
  stats,
  divisions,
  schedule,
  eventHours,
  prizes,
  competitions,
  heritage,
  notableLocals,
  creativeScene,
  involveTracks,
} from "@/lib/content";

const divisionStyles: Record<string, { chip: string; dot: string; bar: string }> = {
  gold: { chip: "bg-gold-soft text-gold", dot: "bg-gold", bar: "bg-gold" },
  sage: { chip: "bg-sage-soft text-sage", dot: "bg-sage", bar: "bg-sage" },
  accent: { chip: "bg-accent-soft text-accent-strong", dot: "bg-accent", bar: "bg-accent" },
  plum: { chip: "bg-plum-soft text-plum", dot: "bg-plum", bar: "bg-plum" },
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
        <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
        <Sunburst className="left-1/2 top-[-30%] h-[60rem] w-[60rem] -translate-x-1/2" />
        <Container className="relative py-20 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-7" />
            <h1 className="font-display text-balance text-5xl font-semibold leading-[1.04] tracking-tight sm:text-7xl">
              A town of makers.
              <br />
              <span className="text-accent">Now it&apos;s the kids&apos; turn.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              South Orange & Maplewood have always been full of artists, musicians,
              marketers, and builders. {event.name} is a one-day challenge that hands that
              creative spirit to the next generation — spot a problem, build it, pitch it.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/register" className="px-6 py-3 text-base">
                Register a student
              </Button>
              <Button href="/get-involved" variant="secondary" className="px-6 py-3 text-base">
                Advise · judge · sponsor
              </Button>
            </div>
            <p className="mt-5 text-sm text-ink-faint">
              {event.dateLabel} · {eventHours} · {event.location}
            </p>
          </div>
        </Container>

        <Container className="relative pb-16">
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl2 border border-line bg-line text-center md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-paper px-4 py-6">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">{s.value}</dd>
                <p className="mt-1 text-xs text-ink-faint">{s.label}</p>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Why it matters — concise mission */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <SectionHeading
              kicker="Why it matters"
              title="The hardest part isn't ability. It's exposure."
              intro="Most kids have never been handed a framework for how an idea becomes something real. SOMA Startup gives them that — early, in a way that feels exciting and genuinely accessible — so they grow up seeing technology and startups as things they can shape, not just consume."
            />
            <ul className="grid gap-3 sm:grid-cols-1">
              {[
                ["For every age", "Four divisions, from young kids through college."],
                ["No experience needed", "No coding, no prep — ideas matter more than polish."],
                ["Something to show for it", "A deck, a prototype, a pitch, and continued mentorship."],
              ].map(([t, b]) => (
                <li key={t} className="flex gap-3 rounded-xl2 border border-line bg-cream px-5 py-4">
                  <Check />
                  <span>
                    <span className="block font-medium">{t}</span>
                    <span className="block text-sm text-ink-soft">{b}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Our Town — heritage & creative community */}
      <section id="town" className="scroll-mt-20 border-y border-line bg-cream py-20 sm:py-24">
        <Container>
          <Stripes className="mb-10 max-w-[12rem]" />
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="kicker mb-3">Our town</p>
              <h2 className="font-display text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-[2.75rem]">
                {heritage.lead}
              </h2>
              <p className="mt-5 leading-relaxed text-ink-soft">{heritage.body}</p>

              <p className="kicker mt-8 mb-3 text-ink-faint">A few who grew up here</p>
              <ul className="flex flex-wrap gap-2">
                {notableLocals.map((p) => (
                  <li
                    key={p.name}
                    className="rounded-full border border-line bg-paper px-3 py-1.5 text-sm"
                  >
                    <span className="font-medium">{p.name}</span>
                    <span className="text-ink-faint"> · {p.note}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl2 border border-line bg-line">
                {heritage.facts.map((f) => (
                  <div key={f.label} className="bg-paper p-5">
                    <dt className="font-display text-2xl font-semibold text-accent-strong">{f.value}</dt>
                    <dd className="mt-1 text-sm leading-snug text-ink-soft">{f.label}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-4 grid gap-3">
                {creativeScene.map((c) => (
                  <div key={c.name} className="rounded-xl2 border border-line bg-paper px-5 py-4">
                    <p className="font-medium">{c.name}</p>
                    <p className="mt-0.5 text-sm leading-snug text-ink-soft">{c.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Divisions */}
      <section id="divisions" className="scroll-mt-20 py-20 sm:py-24">
        <Container>
          <SectionHeading
            kicker="Four divisions"
            title="Everyone competes on a level playing field."
            intro="Age-based divisions keep expectations and judging developmentally appropriate. Younger builders are rewarded for creativity; older students are held to a higher bar."
            align="center"
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-2">
            {divisions.map((d) => {
              const style = divisionStyles[d.color];
              return (
                <div
                  key={d.id}
                  className="card-lift flex flex-col overflow-hidden rounded-xl2 border border-line bg-paper"
                >
                  <span className={`h-1.5 w-full ${style.bar}`} aria-hidden />
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-display text-xl font-semibold">{d.name}</h3>
                      <span className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${style.chip}`}>
                        {d.grades}
                      </span>
                    </div>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{d.focus}</p>
                    <p className="mt-4 border-t border-line pt-3 text-xs text-ink-faint">
                      <span className="font-medium text-ink-soft">Judged on:</span> {d.judgedOn}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* How the day works */}
      <section id="day" className="scroll-mt-20 border-y border-line bg-ink py-20 text-paper sm:py-24">
        <Container>
          <div className="max-w-2xl">
            <p className="kicker mb-3 text-accent-soft">How the day works</p>
            <h2 className="font-display text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-[2.75rem]">
              One day, four parts — {eventHours}.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              A clear beginning, middle, and end. No coding required at any point.
            </p>
          </div>

          <ol className="mt-12 grid gap-px overflow-hidden rounded-xl2 border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {schedule.map((block, i) => (
              <li key={block.title} className="flex flex-col bg-ink p-6">
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-lg font-semibold text-accent-soft">{block.time}</span>
                  <span className="font-display text-2xl text-white/25">{i + 1}</span>
                </div>
                <h3 className="mt-3 font-display text-lg font-semibold leading-snug">{block.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{block.body}</p>
              </li>
            ))}
          </ol>

          <p className="mt-6 text-sm text-white/45">
            Curious about the worksheet, pitch template, and rubric?{" "}
            <a href="/resources" className="text-accent-soft underline-offset-4 hover:underline">
              See the participant toolkit →
            </a>
          </p>
        </Container>
      </section>

      {/* Prizes */}
      <section id="prizes" className="scroll-mt-20 py-20 sm:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                kicker="Prizes & incentives"
                title="A winner and a runner-up in every division."
                intro="So a 4th grader and a college senior both walk away recognized — and winners keep getting guidance long after the closing ceremony."
              />
              <ul className="mt-8 space-y-4">
                {prizes.map((p) => (
                  <li key={p} className="flex gap-3 text-[15px] leading-relaxed text-ink-soft">
                    <Check />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {divisions.map((d) => {
                const style = divisionStyles[d.color];
                return (
                  <div key={d.id} className="card-lift rounded-xl2 border border-line bg-paper p-6">
                    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${style.chip}`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
                      {d.name}
                    </span>
                    <p className="mt-3 font-display text-3xl font-semibold tracking-tight">
                      ${event.prizePerDivision.toLocaleString()}
                    </p>
                    <p className="text-xs text-ink-faint">winner + mentorship</p>
                    <p className="mt-2 border-t border-line pt-2 text-xs text-ink-soft">
                      Runner-up recognized
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Where it leads — feeder system */}
      <section id="feeder" className="scroll-mt-20 border-y border-line bg-cream py-20 sm:py-24">
        <Container>
          <SectionHeading
            kicker="Where it leads"
            title="An on-ramp into bigger entrepreneurship pathways."
            intro="We don't compete with the major student competitions — we prepare kids for them, including a serious one right in our own backyard at Seton Hall."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {competitions.map((c) => (
              <a
                key={c.name}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-xl2 border border-line bg-paper p-6 transition-colors hover:border-accent/40"
              >
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-display font-semibold">{c.name}</h3>
                  {c.local && (
                    <span className="rounded-full bg-accent px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-paper">
                      Local
                    </span>
                  )}
                </div>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{c.blurb}</p>
                <p className="mt-4 flex items-center justify-between text-xs text-ink-faint">
                  <span>{c.audience}</span>
                  <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>→</span>
                </p>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* Get involved */}
      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            kicker="Get involved"
            title="The day runs on its people."
            intro="A warm bench of local founders, creatives, and builders is what makes SOMA Startup real — and shows kids the range of paths a maker can take."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {involveTracks.map((t) => (
              <div key={t.id} className="card-lift flex flex-col rounded-xl2 border border-line bg-cream p-7">
                <h3 className="font-display text-lg font-semibold">{t.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{t.body}</p>
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

      {/* FAQ */}
      <section className="border-t border-line py-20 sm:py-24">
        <Container className="max-w-3xl">
          <SectionHeading kicker="FAQ" title="Questions, answered." align="center" className="mb-12" />
          <Faq />
        </Container>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-accent py-20 text-paper sm:py-24">
        <Sunburst className="left-1/2 top-1/2 h-[50rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 opacity-50" />
        <Container className="relative text-center">
          <h2 className="font-display text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Ready to build something this summer?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">
            {event.dateLabel} · {eventHours} · {event.location}. Bring an idea or find one in the room.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/register" variant="secondary" className="px-6 py-3 text-base">
              Register a student
            </Button>
            <Button
              href="/get-involved"
              className="border border-white/40 bg-transparent px-6 py-3 text-base text-paper hover:bg-white/10"
            >
              Get involved
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
