import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { Faq } from "@/components/Faq";
import { Badge, Sunburst } from "@/components/Retro";
import { JudgeAvatar } from "@/components/JudgeAvatar";
import { ShirtPhoto } from "@/components/ShirtPhoto";
import {
  event,
  divisions,
  schedule,
  eventHours,
  competitions,
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

const SITE = "https://somastartup.com";
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE}/#organization`,
      name: "SOMA Startup",
      url: SITE,
      logo: `${SITE}/icon.svg`,
      description:
        "A one-day youth entrepreneurship and startup pitch competition for South Orange & Maplewood students.",
      areaServed: "South Orange & Maplewood, New Jersey",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      name: "SOMA Startup",
      url: SITE,
      publisher: { "@id": `${SITE}/#organization` },
    },
    {
      "@type": "EducationEvent",
      name: "SOMA Startup",
      description:
        "A one-day youth entrepreneurship and startup pitch competition for South Orange & Maplewood students in grades 4–12. Teams build a deck and a working prototype, then pitch to judges.",
      url: SITE,
      image: `${SITE}/opengraph-image`,
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      // TODO: add `startDate` once the date is confirmed to unlock Event rich results.
      location: {
        "@type": "Place",
        name: "South Orange & Maplewood, NJ",
        address: {
          "@type": "PostalAddress",
          addressLocality: "South Orange",
          addressRegion: "NJ",
          addressCountry: "US",
        },
      },
      organizer: { "@id": `${SITE}/#organization` },
      audience: { "@type": "EducationalAudience", educationalRole: "student" },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-cream">
        <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
        <Sunburst className="left-1/2 top-[-30%] h-[60rem] w-[60rem] -translate-x-1/2" />
        <Container className="relative py-12 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-5 sm:mb-7" />
            <h1 className="font-display text-balance text-5xl font-semibold leading-[1.04] tracking-tight sm:text-7xl">
              Tomorrow&apos;s founders
              <br />
              <span className="text-accent">are growing up in SOMA.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-soft sm:mt-6">
              South Orange & Maplewood have always been full of artists, musicians,
              marketers, and builders. {event.name} is a one-day challenge that hands that
              creative spirit to the next generation — spot a problem, build it, pitch it.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row">
              <Button href="/register" className="px-6 py-3 text-base">
                Register a student
              </Button>
              <Button href="/get-involved" variant="secondary" className="px-6 py-3 text-base">
                Advise or sponsor
              </Button>
            </div>
          </div>

          {/* Prominent date / time / location */}
          <div className="mx-auto mt-10 max-w-4xl sm:mt-14">
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
            kicker="Divisions"
            title="Three divisions, one shared goal."
            intro="Age-based divisions keep it fair — younger builders rewarded for creativity, older students held to a higher bar."
            align="center"
          />

          {/* Same build, same prize — for every division */}
          <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
            <div className="rounded-xl2 border border-line bg-paper p-6 text-center">
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-ink-faint">
                Every team builds
              </p>
              <p className="mt-2 font-display text-xl font-semibold">A deck + a working prototype</p>
            </div>
            <div className="rounded-xl2 border border-accent/25 bg-accent-soft/50 p-6 text-center">
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-ink-faint">
                Every winner gets
              </p>
              <p className="mt-2 font-display text-xl font-semibold">
                ${event.prizePerDivision.toLocaleString()} + mentorship
              </p>
              <p className="mt-0.5 text-sm text-ink-soft">runner-up recognized in each</p>
            </div>
          </div>

          <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-3">
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
            <Link href="/resources" className="text-accent-soft underline-offset-4 hover:underline">
              See the participant toolkit →
            </Link>
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
          <ul className="mx-auto mt-12 grid max-w-6xl gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {judges.map((j, i) => (
              <li key={j.name}>
                <a
                  href={j.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-lift group flex h-full flex-col overflow-hidden rounded-xl2 border border-line bg-paper text-center transition-colors hover:border-accent/40"
                >
                  <JudgeAvatar
                    src={j.image}
                    initials={initials(j.name)}
                    colorClass={avatarColors[i % avatarColors.length]}
                  />
                  <div className="flex flex-1 flex-col p-4">
                    <h3 className="font-display text-base font-semibold leading-snug">{j.name}</h3>
                    <p className="mt-1 flex-1 text-sm leading-snug text-ink-soft">{j.title}</p>
                    {j.local && (
                      <span className="mx-auto mt-3 w-fit rounded-full bg-accent-soft px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-accent-strong">
                        SOMA local
                      </span>
                    )}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Why it matters */}
      <section id="why" className="scroll-mt-20 border-y border-line bg-cream py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="kicker mb-3">Why it matters</p>
            <h2 className="font-display text-balance text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl">
              The hardest part isn&apos;t ability. It&apos;s exposure.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              Most kids have never been handed a framework for how an idea becomes something
              real. We give them that early, so they grow up seeing startups as things they can
              shape, not just consume, and get them ready for a lifetime of entrepreneurship.
              We get kids ready for even larger startup competitions, too, starting in our own
              backyard.
            </p>
          </div>

          {(() => {
            const featured = competitions.find((c) => c.local);
            const others = competitions.filter((c) => !c.local);
            return (
              <div className="mx-auto mt-12 max-w-3xl space-y-4">
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
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-display text-lg font-semibold">{featured.name}</h3>
                        <span className="rounded-full bg-accent px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-paper">
                          Local
                        </span>
                      </div>
                      <p className="mt-0.5 text-sm text-ink-soft">{featured.tag}</p>
                      {featured.when && (
                        <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-strong">
                          {featured.when}
                        </p>
                      )}
                    </div>
                    <span className="hidden text-2xl text-accent transition-transform group-hover:translate-x-0.5 sm:block" aria-hidden>
                      →
                    </span>
                  </a>
                )}

                <p className="pt-3 text-center text-sm text-ink-faint">
                  …and the national & global stages beyond:
                </p>

                <ul className="divide-y divide-line overflow-hidden rounded-xl2 border border-line bg-paper">
                  {others.map((c) => (
                    <li key={c.name}>
                      <a
                        href={c.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-cream"
                      >
                        <span className="shrink-0 text-ink-faint transition-colors group-hover:text-accent">
                          <Globe />
                        </span>
                        <div className="min-w-0 flex-1">
                          <span className="font-display font-semibold">{c.name}</span>
                          <span className="text-ink-soft"> — {c.tag}</span>
                        </div>
                        <span className="hidden shrink-0 text-xs text-ink-faint sm:block">{c.audience}</span>
                        <span className="shrink-0 text-accent transition-transform group-hover:translate-x-0.5" aria-hidden>
                          →
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
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

      {/* The 2026 shirt */}
      <section className="border-y border-line bg-ink py-16 text-paper sm:py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="kicker mb-3 text-accent-soft">Wear it proud</p>
              <h2 className="font-display text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl">
                Every builder takes home the 2026 shirt.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-white/70">
                Soft heather gray, stamped with the soma&nbsp;/&nbsp;startup mark — yours the moment
                you step up and pitch.
              </p>
            </div>
            <ShirtPhoto src="/judges/soma_startup_2026_shirt.jpg" />
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
            Date &amp; venue TBD · {eventHours} · {event.location}. Bring an idea or find one in the room.
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
