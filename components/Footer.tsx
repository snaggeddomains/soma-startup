import Link from "next/link";
import { Container } from "@/components/Container";
import { Stripes } from "@/components/Retro";
import { event, nav } from "@/lib/content";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-cream">
      <Stripes className="rounded-none" />
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5 tracking-tight">
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-accent font-display text-[15px] font-semibold text-paper">
                S
              </span>
              <span className="font-display text-[17px] font-semibold">
                SOMA <span className="text-accent">Startup</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
              {event.tagline} {event.dateLabel} · {event.venueLabel}, {event.location}.
            </p>
          </div>

          <div>
            <p className="kicker mb-4">Explore</p>
            <ul className="space-y-2.5 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-ink-soft hover:text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="kicker mb-4">Take part</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/register" className="text-ink-soft hover:text-ink">
                  Register a student
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="text-ink-soft hover:text-ink">
                  Mentor, judge, or sponsor
                </Link>
              </li>
              <li>
                <a href={`mailto:${event.contactEmail}`} className="text-ink-soft hover:text-ink">
                  {event.contactEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} SOMA Startup. A South Orange & Maplewood community initiative.</p>
          <p>Built for young builders.</p>
        </div>
      </Container>
    </footer>
  );
}
