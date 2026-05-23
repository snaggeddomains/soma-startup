import { event, eventHours, resources } from "@/lib/content";

const BASE = "https://somastartup.com";

export const dynamic = "force-static";

export function GET() {
  const prize = `$${event.prizePerDivision.toLocaleString()}`;
  const lines = [
    "# SOMA Startup",
    "",
    `> A one-day youth entrepreneurship and startup pitch competition for students in ${event.location} (grades 4–12). No coding or experience required — teams spot a problem, build a deck and a working prototype, then pitch to a panel of local and world-class judges.`,
    "",
    `SOMA Startup runs ${eventHours} in ${event.location} (date and venue to be announced). It has three age divisions — Young Builders (grades 4–5), Middle School (grades 6–8), and High School (grades 9–12) — each awarding a ${prize} winner plus a runner-up, with continued mentorship. The event prepares students for larger competitions, starting with the Seton Hall Pirates Pitch (held every November in South Orange).`,
    "",
    "## Key pages",
    `- [Home](${BASE}/): event overview, divisions and prizes, the run of the day, judges, and FAQ`,
    `- [Register](${BASE}/register): student registration (open to South Orange & Maplewood residents, grades 4–12)`,
    `- [Get Involved](${BASE}/get-involved): apply to advise/mentor a team or sponsor the event`,
    `- [Resources](${BASE}/resources): the participant toolkit`,
    "",
    "## Participant toolkit",
    ...resources.map((r) => `- [${r.title}](${BASE}/resources/${r.slug}): ${r.body}`),
    "",
    "## Contact",
    `- Email: ${event.contactEmail}`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
