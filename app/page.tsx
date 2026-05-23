import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { Faq } from "@/components/Faq";
import { Stripes, Badge, Sunburst } from "@/components/Retro";
import { JudgeAvatar } from "@/components/JudgeAvatar";
import {
  event,
  divisions,
  schedule,
  eventHours,
  competitions,
  heritage,
  notableLocals,
  creativeScene,
  involveTracks,
  judges,
} from "@/lib/content";

const avatarColors = ["bg-accent", "bg-gold", "bg-sage", "bg-plum", "bg-accent-strong"];

function initials(name: string): string {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
}

const divisionStyles: Record<string, { chip: string; dot: string; bar: string }> = {
  gold: { chip: "bg-gold-soft text-gold", dot: "bg-gold", bar: "bg-gold" },
  sage: { chip: "bg-sage-soft text-sage", dot: "bg-sage", bar: "bg-sage" },
  accent: { chip: "bg-accent-soft text-accent-strong", dot: "bg-accent", bar: "bg-accent" },
  plum: { chip: "bg-plum-soft text-plum", dot: "bg-plum", bar: "bg-plum" },
};

function Globe() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
    </svg>
  );
}

function Pin() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function Calendar() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <rect x="3" y="4.5" width="18" height="16" rx="2" />
      <path d="M3 9.5h18M8 3v3M16 3v3" />
    </svg>
  );
}

function Clock() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5V12l3 2" strokeLinecap="round" />
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
                Advise or sponsor
              </Button>
            </div>
          </div>

          {/* Prominent date / time / location */}
          <div className="mx-auto mt-14 max-w-4xl">
            <div className="card-lift grid divide-y divide-line overflow-hidden rounded-xl2 border border-line bg-paper sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {[
                { Icon: Calendar, label: "When", value: event.dateLabel, sub: "One high-energy day" },
                { Icon: Clock, label: "Time", value: eventHours, sub: "No coding required" },
                { Icon: Pin, label: "Where", value: event.venueLabel, sub: event.location },
              ].map(({ Icon, label, value, sub }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 px-5 py-5 text-left sm:flex-col sm:gap-3 sm:px-6 sm:py-9 sm:text-center"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-accent-soft text-accent-strong sm:h-12 sm:w-12">
                    <Icon />
                  </span>
                  <div>
                    <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-ink-faint">
                      {label}
                    </p>
                    <p className="font-display text-lg font-semibold leading-tight sm:mt-1 sm:text-xl">
                      {value}
                    </p>
                    <p className="mt-0.5 text-sm text-ink-soft sm:mt-1.5">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Divisions & prizes */}
      <section id="divisions" className="scroll-mt-20 py-20 sm:py-24">
        <Container>
          <SectionHeading
            kicker="Divisions & prizes"
            title="Four divisions — the same prize for each."
            intro="Age-based divisions keep it fair: younger builders rewarded for creativity, older students held to a higher bar. Every team leaves with something real — a working prototype, a website, or a deck."
            align="center"
          />

          {/* One prize, every division */}
          <div className="mx-auto mt-10 max-w-3xl rounded-xl2 border border-accent/25 bg-accent-soft/50 px-6 py-6">
            <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-center sm:gap-5">
              <span className="font-display text-4xl font-semibold leading-none text-accent-strong">
                ${event.prizePerDivision.toLocaleString()}
              </span>
              <span className="text-ink-soft sm:text-left">
                <span className="font-medium text-ink">to the winner of every division</span>, plus
                continued mentorship — with a runner-up recognized in each.
              </span>
            </div>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl gap-5 sm:grid-cols-2">
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
      <section id="day" className="scroll-mt-20 bg-ink py-20 text-paper sm:py-24">
        <Container>
          <div className="max-w-2xl">
            <p className="kicker mb-3 text-accent-soft">How the day works</p>
            <h2 className="font-display text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-[2.75rem]">
              One day, four parts — {eventHours}.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              A clear beginning, middle, and end — built for any age.
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

      {/* Judges */}
      <section id="judges" className="scroll-mt-20 py-20 sm:py-24">
        <Container>
          <SectionHeading
            kicker="Meet the judges"
            title="Kids pitch to people who've actually built it."
            intro="From Reddit and DoorDash to our own Columbia High School and Village Hall — a panel of local and world-class builders, weighing in with warmth."
            align="center"
          />
          <ul className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {judges.map((j, i) => (
              <li key={j.name}>
                <a
                  href={j.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-lift group flex h-full flex-col items-center rounded-xl2 border border-line bg-paper p-6 text-center transition-colors hover:border-accent/40"
                >
                  <JudgeAvatar
                    src={j.image}
                    initials={initials(j.name)}
                    colorClass={avatarColors[i % avatarColors.length]}
                  />
                  <h3 className="mt-4 font-display text-base font-semibold leading-snug">{j.name}</h3>
                  <p className="mt-1 flex-1 text-sm leading-snug text-ink-soft">{j.title}</p>
                  {j.local && (
                    <span className="mt-3 rounded-full bg-accent-soft px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-accent-strong">
                      SOMA local
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
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
              <ul className="grid gap-2 sm:grid-cols-2">
                {notableLocals.map((p) => (
                  <li
                    key={p.name}
                    className="flex items-baseline gap-1.5 rounded-xl border border-line bg-paper px-3.5 py-2 text-sm"
                  >
                    <span className="font-medium">{p.name}</span>
                    <span className="text-ink-faint">· {p.note}</span>
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

      {/* Why it matters */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="kicker mb-3">Why it matters</p>
            <h2 className="font-display text-balance text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl">
              The hardest part isn&apos;t ability. It&apos;s exposure.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              Most kids have never been handed a framework for how an idea becomes something
              real. We give them that early — so they grow up seeing startups as things they
              can shape, not just consume.
            </p>
          </div>
        </Container>
      </section>

      {/* Where it leads */}
      <section id="feeder" className="scroll-mt-20 border-y border-line bg-cream py-20 sm:py-24">
        <Container>
          {(() => {
            const featured = competitions.find((c) => c.local);
            const others = competitions.filter((c) => !c.local);
            return (
              <div className="mx-auto max-w-4xl">
                <div className="mx-auto max-w-2xl text-center">
                  <p className="kicker mb-3">Where it leads</p>
                  <h2 className="font-display text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-[2.75rem]">
                    An on-ramp to bigger stages.
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-ink-soft">
                    We don&apos;t compete with the major student competitions — we get kids ready for
                    them, starting in our own backyard.
                  </p>
                </div>

                <div className="mt-10 space-y-4">
                  {featured && (
                    <a
                      href={featured.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-lift group flex items-center gap-5 rounded-xl2 border border-accent/30 bg-accent-soft/60 p-6 transition-colors hover:border-accent/60"
                    >
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-accent text-paper">
                        <Pin />
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-display text-lg font-semibold">{featured.name}</h4>
                          <span className="rounded-full bg-accent px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-paper">
                            Local
                          </span>
                        </div>
                        <p className="mt-0.5 text-sm text-ink-soft">{featured.tag}</p>
                      </div>
                      <span className="hidden text-2xl text-accent transition-transform group-hover:translate-x-0.5 sm:block" aria-hidden>
                        →
                      </span>
                    </a>
                  )}

                  <p className="pt-2 text-center text-sm text-ink-faint">
                    …then national & global programs we prepare you for:
                  </p>

                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {others.map((c) => (
                      <a
                        key={c.name}
                        href={c.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center rounded-xl2 border border-line bg-paper p-5 text-center transition-colors hover:border-accent/40"
                      >
                        <span className="grid h-10 w-10 place-items-center rounded-full bg-cream text-ink-soft transition-colors group-hover:text-accent">
                          <Globe />
                        </span>
                        <h4 className="mt-3 font-display text-sm font-semibold leading-snug">{c.name}</h4>
                        <p className="mt-1 flex-1 text-xs leading-snug text-ink-soft">{c.tag}</p>
                        <p className="mt-2 text-[11px] text-ink-faint">{c.audience}</p>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}
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
          <div className="mx-auto mt-12 grid max-w-3xl gap-5 sm:grid-cols-2">
            {involveTracks.map((t) => (
              <div key={t.id} className="card-lift flex flex-col rounded-xl2 border border-line bg-paper p-7">
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
      <section className="border-t border-line bg-cream py-20 sm:py-24">
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
            {event.dateLabel} · {eventHours} · {event.venueLabel}. Bring an idea or find one in the room.
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
