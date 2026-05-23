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
  divisionsCount: 3,
};

export const nav = [
  { label: "Divisions", href: "/#divisions" },
  { label: "The Day", href: "/#day" },
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
};

export const divisions: Division[] = [
  {
    id: "young",
    name: "Young Builders",
    grades: "Grades 4–5",
    color: "gold",
    focus:
      "Imagination first. Spot a problem, dream up a fix, and bring it to life with a simple prototype and a few slides.",
  },
  {
    id: "middle",
    name: "Middle School",
    grades: "Grades 6–8",
    color: "sage",
    focus:
      "Turn an idea into a simple concept: who it helps, what it does, and what a first version looks like.",
  },
  {
    id: "high",
    name: "High School",
    grades: "Grades 9–12",
    color: "accent",
    focus:
      "Define a real problem, shape a solution, and pitch it with market thinking and a believable next step.",
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
    slug: "idea-worksheet",
    title: "Idea Worksheet",
    body: "A one-page guide that walks any age from a problem they've noticed to a simple solution.",
  },
  {
    slug: "pitch-template",
    title: "Pitch Template",
    body: "The five-part structure: problem, solution, who it's for, why it matters, and what's exciting.",
  },
  {
    slug: "judging-rubric",
    title: "Judging Rubric",
    body: "The same criteria judges use, so teams know exactly what they're being recognized for.",
  },
  {
    slug: "day-schedule",
    title: "Day Schedule",
    body: "The full run of the day, from kickoff energy to the closing awards.",
  },
  {
    slug: "slide-template",
    title: "Slide Template",
    body: "A clean, six-slide deck outline so teams can present with confidence — polish is never required.",
  },
  {
    slug: "example-concepts",
    title: "Example Concepts",
    body: "Student-friendly startup ideas, by division, to spark thinking without boxing anyone in.",
  },
];

// Pitch template — the five parts of a two-minute pitch.
export const pitchTemplate = [
  { title: "The problem", prompt: "What did you notice that bugs people?" },
  { title: "The solution", prompt: "Your idea, in one clear sentence." },
  { title: "Who it's for", prompt: "Who has this problem most?" },
  { title: "Why it matters", prompt: "What changes if your idea exists?" },
  { title: "What's exciting", prompt: "What makes it different or surprising?" },
];

// Slide template — a six-slide deck outline (works in Slides, Canva, or Keynote).
export const slideOutline = [
  { title: "Title", body: "Your idea's name, your team, and your division. One bold line that says what it is." },
  { title: "The problem", body: "The thing you noticed that bugs people. Make us feel it." },
  { title: "The solution", body: "Your idea in one sentence, plus a sketch or screenshot of your prototype." },
  { title: "Who it's for", body: "The one person who has this problem most — give them a name and a face." },
  { title: "Why it matters", body: "What changes if your idea exists? Why should anyone care?" },
  { title: "What's next", body: "Your first version and the very next step you'd take. End with one memorable line." },
];

// Example concepts by division — starting points, not a box to fit inside.
export const exampleConcepts = [
  {
    division: "Young Builders",
    grades: "Grades 4–5",
    ideas: [
      { name: "Chore Robot", blurb: "Dream up a robot that does the one chore everyone hates — and show how it works." },
      { name: "Lemonade for a Cause", blurb: "A new spin on the lemonade stand where part of every sale helps something you care about." },
      { name: "Critter Care", blurb: "A gadget or app that helps people take better care of their pets." },
    ],
  },
  {
    division: "Middle School",
    grades: "Grades 6–8",
    ideas: [
      { name: "Fridge Rescue", blurb: "An app that turns food about to expire into recipe ideas, so less gets thrown out." },
      { name: "Local Loop", blurb: "Borrow tools, gear, and gadgets from neighbors instead of buying new." },
      { name: "Game for Good", blurb: "A mobile game that secretly teaches a real skill — budgeting, coding, or a new language." },
    ],
  },
  {
    division: "High School",
    grades: "Grades 9–12",
    ideas: [
      { name: "Heat Map", blurb: "Low-cost sensors that show a town which streets run hottest, so it knows where to plant trees." },
      { name: "Refill", blurb: "Household staples delivered in reusable containers — groceries with zero packaging waste." },
      { name: "CareMatch", blurb: "A trusted marketplace connecting families with vetted local caregivers." },
    ],
  },
];

export const faqs = [
  {
    q: "Who can participate?",
    a: "Students who live in South Orange or Maplewood, from 4th grade through 12th grade. There are three age-based divisions so everyone competes fairly.",
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
    q: "How can I help as an advisor or sponsor?",
    a: "We'd love that. Head to the Get Involved page and tell us how you'd like to contribute.",
  },
];
