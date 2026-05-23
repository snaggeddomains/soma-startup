// Centralized event content. Edit values here to update the whole site.
// Many fields are first-draft assumptions — see values marked TODO.

export const event = {
  name: "SOMA Startup",
  tagline: "A one-day startup challenge for South Orange & Maplewood students.",
  // Aug 27, 2026 falls on a Thursday, matching the brief.
  dateLabel: "Thursday, August 27, 2026",
  dateISO: "2026-08-27",
  format: "All-day, single-day event",
  // TODO: confirm venue. Strong local candidates: SOPAC, Seton Hall, the public libraries.
  location: "South Orange / Maplewood, NJ",
  venueLabel: "Venue to be announced",
  // TODO: replace with a real address before launch.
  contactEmail: "hello@somastartup.org",
  prizePerDivision: 1000,
  divisionsCount: 4,
};

export const nav = [
  { label: "The Event", href: "/#about" },
  { label: "Divisions", href: "/#divisions" },
  { label: "Schedule", href: "/#schedule" },
  { label: "Prizes", href: "/#prizes" },
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
  "Introduce students to entrepreneurship and startup thinking early.",
  "Build confidence in idea generation and public speaking.",
  "Encourage creativity, initiative, and real-world problem solving.",
  "Foster a healthy, active relationship with technology and innovation.",
  "Show students that building is not reserved for adults.",
  "Create a local pipeline of young builders headed for bigger stages.",
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
    color: "amber",
    focus:
      "Imagination first. Spot a problem, dream up a fix, and show it off with a drawing, model, or story.",
    judgedOn: "Creativity, clarity, and enthusiasm.",
  },
  {
    id: "middle",
    name: "Middle School",
    grades: "Grades 6–8",
    color: "emerald",
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
    color: "violet",
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

export const schedule: ScheduleBlock[] = [
  {
    time: "Morning",
    title: "Welcome & Kickoff",
    body: "What a startup really is, how founders spot problems, and how a simple observation becomes a real opportunity — with student-friendly examples.",
  },
  {
    time: "Morning",
    title: "Idea Generation & Team Formation",
    body: "Arrive with an idea or find one on site. Work solo, bring a team, or form one in the room. Teams stay small and focused.",
  },
  {
    time: "Midday",
    title: "Build Session",
    body: "Work through a simple guided framework — no coding needed. Sketch, map a workflow, mock up a screen, or build a few slides.",
  },
  {
    time: "Midday",
    title: "Mentor Support",
    body: "Founders, operators, designers, and engineers circulate to ask sharp questions, simplify your thinking, and strengthen your story.",
  },
  {
    time: "Afternoon",
    title: "Pitch Presentations",
    body: "Each team presents to judges: the problem, the solution, who it's for, why it matters, and what makes it exciting.",
  },
  {
    time: "Afternoon",
    title: "Deliberation, Awards & Closing",
    body: "Judges deliberate, winners are recognized in every division, and the day closes with real next-step momentum.",
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
  "One winner per division — every age group is recognized.",
  "A $1,000 cash prize for each division winner.",
  "Continued mentorship from founders, operators, investors, and builders.",
];

export type Competition = {
  name: string;
  blurb: string;
  audience: string;
  href: string;
  local?: boolean;
};

// Programs SOMA Startup prepares students for. Researched & sourced.
export const competitions: Competition[] = [
  {
    name: "Seton Hall Pirates Pitch",
    blurb:
      "A high school startup pitch competition run right here in South Orange by Seton Hall's Stillman School of Business, with $50K+ in prizes and scholarships.",
    audience: "High school (sophomore–senior)",
    href: "https://www.shu.edu/undergraduate-admissions/pirates-pitch-competition.html",
    local: true,
  },
  {
    name: "Diamond Challenge",
    blurb:
      "A global high school entrepreneurship competition with Business Innovation and Social Innovation tracks, run by Horn Entrepreneurship at the University of Delaware.",
    audience: "High school, ages 14–18",
    href: "https://diamondchallenge.org/",
  },
  {
    name: "Blue Ocean Competition",
    blurb:
      "The world's largest virtual pitch competition for high schoolers, drawing thousands of students from across the globe each year.",
    audience: "High school, ages 14–18",
    href: "https://blueoceancompetition.org/",
  },
  {
    name: "NFTE World Series of Innovation",
    blurb:
      "A free, online challenge from the Network for Teaching Entrepreneurship where youth pitch solutions tied to the UN Sustainable Development Goals.",
    audience: "Ages 5–24",
    href: "https://innovation.nfte.com/",
  },
  {
    name: "Conrad Challenge",
    blurb:
      "A multi-stage innovation competition where student teams build commercially viable solutions to real-world problems across science and tech categories.",
    audience: "Ages 13–18",
    href: "https://www.conradchallenge.org/",
  },
];

export const localValue = [
  {
    title: "SOMA's own entrepreneurship event",
    body: "A visible, recurring moment that puts South Orange & Maplewood on the map for youth innovation.",
  },
  {
    title: "A bridge between schools and startup culture",
    body: "Connecting Columbia High School and SOMSD students with founders, operators, and local businesses.",
  },
  {
    title: "Build, don't just consume",
    body: "A constructive outlet that helps families turn screen time and AI curiosity into creation.",
  },
  {
    title: "Spotting talent early",
    body: "Surfacing students with real initiative, creativity, and leadership — and encouraging them.",
  },
  {
    title: "A natural higher-ed partner next door",
    body: "Seton Hall University sits in South Orange, a ready bridge to college-level entrepreneurship.",
  },
  {
    title: "An annual tradition in the making",
    body: "Designed from day one to grow into a flagship local brand and a year-round pipeline.",
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
    title: "Mentor",
    body: "Spend the day with teams, asking sharp questions and helping them sharpen their thinking.",
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
    title: "Event Schedule",
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
    a: "Not at all. No coding or prior experience is required. You can sketch, map a workflow, mock up a screen, or make a few slides — whatever fits your idea.",
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
    q: "How can I help as a mentor, judge, or sponsor?",
    a: "We'd love that. Head to the Get Involved page and tell us how you'd like to contribute.",
  },
];
