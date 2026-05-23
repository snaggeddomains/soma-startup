// Centralized event content. Edit values here to update the whole site.
// Many fields are first-draft assumptions — see values marked TODO.

export const event = {
  name: "SOMA Startup",
  tagline: "A town of makers — now it's the kids' turn.",
  // Aug 27, 2026 falls on a Thursday, matching the brief.
  dateLabel: "Thursday, August 27, 2026",
  dateISO: "2026-08-27",
  format: "All-day, single-day event",
  location: "South Orange + Maplewood, NJ",
  venueLabel: "Columbia High School",
  // TODO: replace with a real address before launch.
  contactEmail: "hello@somastartup.com",
  prizePerDivision: 1000,
  divisionsCount: 4,
};

export const nav = [
  { label: "The Day", href: "/#day" },
  { label: "Divisions", href: "/#divisions" },
  { label: "Our Town", href: "/#town" },
  { label: "Judges", href: "/#judges" },
  { label: "Where It Leads", href: "/#feeder" },
  { label: "Resources", href: "/resources" },
];

export const stats = [
  { value: "1", label: "high-energy day" },
  { value: "4", label: "age divisions" },
  { value: "4 × $1,000", label: "cash prizes" },
  { value: "No code", label: "required" },
];

export const objectives = [
  "Pass our town's creative, build-it-yourself spirit to the next generation.",
  "Introduce students to entrepreneurship and what building looks like in 2026.",
  "Build confidence in dreaming up ideas — and saying them out loud.",
  "Reward creativity, initiative, and real-world problem solving.",
  "Show kids that founders, makers, and artists can come from right here.",
  "Grow a local pipeline of young builders headed for bigger stages.",
];

export type Division = {
  id: string;
  name: string;
  grades: string;
  color: string; // tailwind token suffix used for accents
  focus: string;
  judgedOn: string;
};

export const divisions: Division[] = [
  {
    id: "young",
    name: "Young Builders",
    grades: "Up to 5th grade",
    color: "gold",
    focus:
      "Imagination first. Spot a problem, dream up a fix, and show it off with a drawing, model, or story.",
    judgedOn: "Creativity, clarity, and enthusiasm.",
  },
  {
    id: "middle",
    name: "Middle School",
    grades: "Grades 6–8",
    color: "sage",
    focus:
      "Turn an idea into a simple concept: who it helps, what it does, and what a first version looks like.",
    judgedOn: "Problem understanding, clarity, and effort.",
  },
  {
    id: "high",
    name: "High School",
    grades: "Grades 9–12",
    color: "accent",
    focus:
      "Define a real problem, shape a solution, and pitch it with market thinking and a believable next step.",
    judgedOn: "Problem definition, feasibility, and pitch quality.",
  },
  {
    id: "college",
    name: "College",
    grades: "Undergraduate",
    color: "plum",
    focus:
      "Push toward venture thinking: differentiation, feasibility, and a clear path from idea to first users.",
    judgedOn: "Market understanding, differentiation, and realistic next steps.",
  },
];

export type ScheduleBlock = {
  time: string;
  title: string;
  body: string;
};

// The focus of the day, in four parts. Doors at 9 AM, awards by 6 PM.
export const eventHours = "9:00 AM – 6:00 PM";

export const schedule: ScheduleBlock[] = [
  {
    time: "9:00 AM",
    title: "What building looks like in 2026",
    body: "How founders spot problems — and what tools, including AI, now put within anyone's reach.",
  },
  {
    time: "10:15 AM",
    title: "Your competition, explained",
    body: "Each division learns exactly what's expected for their age bracket.",
  },
  {
    time: "11:00 AM",
    title: "Team up and build with an advisor",
    body: "Small teams work with a dedicated advisor to build a deck and a simple prototype.",
  },
  {
    time: "4:00 PM",
    title: "The pitch competition",
    body: "Pitch to the judges. Winners and runners-up named by 6:00 PM.",
  },
];

export const buildFramework = [
  { q: "What problem are you solving?", hint: "Start with something you've actually noticed." },
  { q: "Who has this problem?", hint: "Picture one real person it affects." },
  { q: "What is your solution?", hint: "Keep the first version simple." },
  { q: "Why is it useful or interesting?", hint: "What makes someone care?" },
  { q: "What would the first version look like?", hint: "A sketch, a screen, a story." },
  { q: "How would you explain it to others?", hint: "One clear, confident sentence." },
];

export const judgingCriteria = [
  { title: "Originality & creativity", body: "A fresh angle, an unexpected idea, or a clever twist." },
  { title: "Understanding of the problem", body: "Real insight into who hurts and why it matters." },
  { title: "Clarity of solution", body: "A solution that's easy to grasp and clearly connected to the problem." },
  { title: "Communication & pitch", body: "A confident, clear, and engaging presentation." },
  { title: "Thoughtfulness & effort", body: "Care, curiosity, and genuine work put into the idea." },
  { title: "Age-appropriate potential", body: "How far the idea could go, judged against the division." },
];

export const olderCriteria = [
  "Market understanding",
  "Feasibility",
  "Differentiation",
  "Realistic next steps",
];

export const prizes = [
  "A winner and a runner-up in every division.",
  "A $1,000 cash prize for each division winner.",
  "Continued mentorship for winners from founders, operators, and builders.",
];

export type Competition = {
  name: string;
  tag: string;
  audience: string;
  href: string;
  local?: boolean;
};

// Programs SOMA Startup prepares students for. Researched & sourced.
export const competitions: Competition[] = [
  {
    name: "Seton Hall Pirates Pitch",
    tag: "$50K+ in prizes, here in South Orange",
    audience: "High school",
    href: "https://www.shu.edu/undergraduate-admissions/pirates-pitch-competition.html",
    local: true,
  },
  {
    name: "Diamond Challenge",
    tag: "Global business & social innovation",
    audience: "Ages 14–18",
    href: "https://diamondchallenge.org/",
  },
  {
    name: "Blue Ocean",
    tag: "World's largest virtual pitch",
    audience: "Ages 14–18",
    href: "https://blueoceancompetition.org/",
  },
  {
    name: "NFTE World Series",
    tag: "UN Global Goals challenge",
    audience: "Ages 5–24",
    href: "https://innovation.nfte.com/",
  },
  {
    name: "Conrad Challenge",
    tag: "Build real-world solutions",
    audience: "Ages 13–18",
    href: "https://www.conradchallenge.org/",
  },
];

// Local heritage — warm, sourced facts about South Orange & Maplewood.
export const heritage = {
  lead: "South Orange and Maplewood have been a town of builders since the railroad arrived.",
  body: "A short ride from New York, our towns filled with artists, writers, musicians, and makers — earning the nickname \"Brooklyn West.\" SOMA Startup hands that build-it-yourself spirit to the kids growing up here now.",
  facts: [
    { value: "1837", label: "the railroad reached Maplewood and the building began" },
    { value: "1856", label: "Seton Hall University founded in South Orange" },
    { value: "“Brooklyn West”", label: "the towns' name for their artsy, creative character" },
    { value: "30 min", label: "to New York on the Midtown Direct line (since 1996)" },
  ],
};

export type Local = {
  name: string;
  note: string;
  town: string;
};

// Verified creatives connected to SOMA (all attended Columbia High School).
export const notableLocals: Local[] = [
  { name: "SZA", note: "Grammy-winning singer-songwriter", town: "Maplewood" },
  { name: "Lauryn Hill", note: "Grammy-winning musician", town: "South Orange" },
  { name: "Zach Braff", note: "Actor & filmmaker", town: "South Orange" },
  { name: "Andre Braugher", note: "Acclaimed actor", town: "South Orange" },
];

export const creativeScene = [
  { name: "SOPAC", note: "Performing arts center, since 2006" },
  { name: "Maplewoodstock", note: "Free music festival, since 2004" },
  { name: "Midtown Direct Rep", note: "Theater by local Broadway pros" },
];

export type Judge = {
  name: string;
  title: string;
  href: string;
  // Drop a headshot at this path in /public to replace the monogram fallback.
  image?: string;
  local?: boolean;
};

// Judging panel — a mix of local and international builders.
export const judges: Judge[] = [
  {
    name: "Alexis Ohanian",
    title: "Co-founder of Reddit",
    href: "https://en.wikipedia.org/wiki/Alexis_Ohanian",
    image: "/judges/AO2.webp",
  },
  {
    name: "Kofi Amoo-Gottfried",
    title: "Former CMO of DoorDash",
    href: "https://www.linkedin.com/in/kofi-amoo-gottfried/",
    image: "/judges/kofi.jpeg",
  },
  {
    name: "Zach Braff",
    title: "Actor & filmmaker · Columbia HS",
    href: "https://en.wikipedia.org/wiki/Zach_Braff",
    image: "/judges/zb.jpeg",
    local: true,
  },
  {
    name: "Rob Schutz",
    title: "Co-founder of Ro",
    href: "https://www.linkedin.com/in/robschutz/",
    image: "/judges/schutz.jpeg",
  },
  {
    name: "Sheena C. Collum",
    title: "Mayor of South Orange",
    href: "https://www.southorange.org/315/Mayor-Sheena-C-Collum",
    image: "/judges/sheena.jpeg",
    local: true,
  },
];

export const localValue = [
  {
    title: "Built on a creative town",
    body: "SOMA already overflows with artists, founders, and makers. This is how we pass that spirit down.",
  },
  {
    title: "A bridge between schools and builders",
    body: "Connecting Columbia High School and SOMSD students with the founders and creatives who live next door.",
  },
  {
    title: "Build, don't just consume",
    body: "A constructive outlet that helps families turn screen time and AI curiosity into real creation.",
  },
  {
    title: "Spotting talent early",
    body: "Surfacing students with real initiative, creativity, and leadership — and encouraging them.",
  },
  {
    title: "A higher-ed partner next door",
    body: "Seton Hall University has anchored South Orange since 1856 — a ready bridge to college-level entrepreneurship.",
  },
  {
    title: "An annual tradition in the making",
    body: "Designed from day one to grow into a flagship local event and a year-round pipeline.",
  },
];

export const principles = [
  "No coding required.",
  "No prior startup experience required.",
  "Ideas matter more than polish.",
  "Age-appropriate scaffolding and expectations.",
  "Simple templates and clear guidance.",
  "Entrepreneurship as creative problem solving — not hype.",
];

export type InvolveTrack = {
  id: string;
  title: string;
  body: string;
  bullets: string[];
};

export const involveTracks: InvolveTrack[] = [
  {
    id: "mentor",
    title: "Advisor / Mentor",
    body: "Spend the day with a team, helping them shape a problem into a pitch, a deck, and a simple prototype.",
    bullets: [
      "Founders, operators, designers, marketers, engineers",
      "Light, encouraging guidance — never taking over",
      "A few hours on event day",
    ],
  },
  {
    id: "judge",
    title: "Judge",
    body: "Watch the pitches and help recognize the strongest ideas with warmth and credibility.",
    bullets: [
      "Investors, founders, educators, local business leaders",
      "Score against a simple, age-aware rubric",
      "Afternoon commitment on event day",
    ],
  },
  {
    id: "sponsor",
    title: "Sponsor / Partner",
    body: "Fund prizes, provide a venue, or supply resources — and help build a lasting local institution.",
    bullets: [
      "Local businesses, community partners, civic organizations",
      "Underwrite the $1,000 division prizes or the venue",
      "Reach engaged SOMA families and students",
    ],
  },
];

export const resources = [
  {
    title: "Idea Worksheet",
    body: "A one-page guide that walks any age from a problem they've noticed to a simple solution.",
  },
  {
    title: "Pitch Template",
    body: "The five-part structure: problem, solution, who it's for, why it matters, and what's exciting.",
  },
  {
    title: "Judging Rubric",
    body: "The same criteria judges use, so teams know exactly what they're being recognized for.",
  },
  {
    title: "Day Schedule",
    body: "The full run of the day, from kickoff energy to the closing awards.",
  },
  {
    title: "Slide Template",
    body: "An optional, clean deck so teams can present with confidence — polish is never required.",
  },
  {
    title: "Example Concepts",
    body: "Student-friendly startup ideas, by division, to spark thinking without boxing anyone in.",
  },
];

export const faqs = [
  {
    q: "Who can participate?",
    a: "Any student in South Orange & Maplewood, from young kids through college. There are four age-based divisions so everyone competes fairly.",
  },
  {
    q: "Do I need a team or an idea to start?",
    a: "No. You can come solo or with a team, and you can develop your idea entirely on site. We'll help you find both.",
  },
  {
    q: "Do I need to know how to code or build apps?",
    a: "Not at all. No coding or prior experience is required. With an advisor's help you'll build a simple deck and prototype — sketches, slides, and clear thinking all count.",
  },
  {
    q: "What does it cost?",
    a: "Registration details and any fees will be announced soon. The goal is to keep SOMA Startup highly accessible.",
  },
  {
    q: "What do winners receive?",
    a: "Each division has one winner who receives a $1,000 cash prize plus continued mentorship from founders, operators, and builders.",
  },
  {
    q: "How can I help as an advisor, judge, or sponsor?",
    a: "We'd love that. Head to the Get Involved page and tell us how you'd like to contribute.",
  },
];
