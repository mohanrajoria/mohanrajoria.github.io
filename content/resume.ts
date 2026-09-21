const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const profile = {
  name: "Mohan Lal",
  role: "Senior / Lead Frontend Engineer",
  location: "Gurugram, India",
  // Public contact. Phone deliberately left off the public site — recruiters can reach you by email first.
  email: "rajoria7@gmail.com",
  linkedin: "https://linkedin.com/in/mohanrajoria",
  github: "https://github.com/mohanrajoria",
  resumeHref: `${BASE}/Mohan_Lal_Resume.pdf`,
  positioning:
    "I build the front end of products people work in all day — design systems that hold up, screens that stay fast at data scale, and the tooling that keeps a team shipping.",
  intro: [
    "Eleven years in, most of my work looks the same from the outside: a product that was getting slower and harder to change, and a front end that needed re-architecting without stopping delivery. I've done that for an AI bookkeeping platform, a telehealth network, and a digital publishing house.",
    "The parts I care about are the unglamorous ones — a typography scale that removes a hundred one-off overrides, a state model that makes a table 3× faster, a GitHub Action that gives every engineer back half an hour a week. I've also spent the last two years folding Cursor and Copilot into how I actually plan migrations and refactor at scale, not just as autocomplete.",
  ],
};

export const ledger = [
  { value: "3×", label: "faster transaction categorization", where: "ZeniAI" },
  { value: "1k+", label: "rows rendered per dashboard view", where: "ZeniAI" },
  { value: "~30%", label: "cut from dashboard load time", where: "ZeniAI" },
  { value: "~70%", label: "less effort per email template", where: "HealthTap" },
  { value: "~22%", label: "lift in signups from new auth", where: "HealthTap" },
  { value: "~50%", label: "faster app after React migration", where: "Juggernaut" },
];

export const pillars = [
  {
    title: "Frontend architecture",
    body: "State models, module boundaries and rendering strategies that survive the next two years of features. Tab-scoped Redux, route-level data fetching, virtualised data surfaces.",
  },
  {
    title: "Design systems",
    body: "Centralised typography and spacing, component APIs people actually reach for, and version migrations run across many repositories without freezing product work.",
  },
  {
    title: "Performance at data scale",
    body: "Profiling real screens with real volumes. Render cost, fetch waterfalls, bundle weight and Core Web Vitals — measured before and after, never guessed.",
  },
  {
    title: "Developer productivity",
    body: "CI/CD automation, release workflows, dependency governance and internal tooling. The goal is fewer manual steps between a merged PR and a shipped version.",
  },
];

export type Role = {
  company: string;
  descriptor: string;
  title: string;
  period: string;
  years: string;
  context: string;
  groups: { heading: string; points: string[] }[];
  stack: string[];
  outcomes: { value: string; label: string }[];
};

export const roles: Role[] = [
  {
    company: "ZeniAI",
    descriptor: "AI-powered bookkeeping and finance platform",
    title: "Senior Software Engineer",
    period: "Aug 2024 – May 2026",
    years: "2024–26",
    context:
      "ZeniAI's users are bookkeepers and FinOps teams who live inside the product for hours at a time, reviewing and categorising thousands of transactions. That makes the front end the whole product experience: if a table stalls at a thousand rows, or a category control behaves differently on two screens, it costs real money in operator time. My work sat at the intersection of design system health, rendering performance and the automation that kept four-plus repositories releasable.",
    groups: [
      {
        heading: "Design system and architecture",
        points: [
          "Re-architected the design system around a centralised responsive typography scale, replacing scattered one-off font declarations with a single source of truth and removing a long tail of UI inconsistencies across the application.",
          "Led the MUI v6 → v7 migration across four repositories, coordinated with a design refresh so the upgrade shipped as a visible improvement rather than a silent dependency bump.",
          "Architected a tab-scoped Redux state management system for bookkeeping workflows, isolating state per working tab so operators could keep several reconciliation contexts open at once — this delivered 3× faster categorisation.",
        ],
      },
      {
        heading: "Performance and scalability",
        points: [
          "Delivered the Dashboard V3 migration: efficient rendering of 1,000+ transaction rows while increasing visible transaction density by 40%, so operators see more per screen and scroll less.",
          "Reduced Cockpit dashboard load time by roughly 30% by restructuring data fetching — collapsing request waterfalls, deduplicating overlapping queries and moving work off the critical path.",
        ],
      },
      {
        heading: "Developer productivity",
        points: [
          "Automated version approval workflows across six repositories, saving about 30 minutes per developer per publishing iteration.",
          "Built automated Dependabot ownership and alert-management workflows, routing alerts to the right owners and reclaiming roughly two hours a week of triage.",
          "Developed internal tooling and GitHub Actions workflows to raise delivery velocity across the engineering team.",
        ],
      },
      {
        heading: "AI-augmented engineering",
        points: [
          "Championed AI-augmented workflows using Cursor and GitHub Copilot as part of the real process — architecture planning, large-scale refactoring, test scaffolding, debugging, technical investigation and documentation — and shared the patterns that worked with the rest of the team.",
        ],
      },
      {
        heading: "Product impact",
        points: [
          "Built the Expense Transfer workflow, removing about two hours a week of manual bookkeeping effort.",
          "Built transaction split provisioning workflows, reducing FinOps operational effort by roughly three hours a week.",
        ],
      },
    ],
    stack: [
      "React",
      "TypeScript",
      "Redux",
      "MUI v7",
      "Emotion",
      "Storybook",
      "GitHub Actions",
      "Jest",
      "Statsig",
      "Sentry",
    ],
    outcomes: [
      { value: "3×", label: "faster categorisation" },
      { value: "40%", label: "more rows visible" },
      { value: "~30%", label: "faster dashboard load" },
      { value: "~5 hrs", label: "manual work removed weekly" },
    ],
  },
  {
    company: "HealthTap",
    descriptor: "Virtual primary care and telehealth platform",
    title: "Lead Software Engineer",
    period: "Dec 2018 – Jun 2024",
    years: "2018–24",
    context:
      "Five and a half years leading front end across three very different surfaces: the patient app, the provider console clinicians use during consultations, and the SEO-driven marketing and content pages that brought people in. Healthcare raises the floor on everything — a dropped video call or a broken claim form is not a minor bug — so a lot of the job was setting technical direction other engineers could build on safely.",
    groups: [
      {
        heading: "Technical leadership",
        points: [
          "Led frontend initiatives end to end: technical direction, code review and mentoring engineers on the team.",
          "Partnered closely with product, design and backend to take customer-facing features from concept through to release.",
        ],
      },
      {
        heading: "Platform engineering",
        points: [
          "Built a reusable React email platform that reduced template development effort by around 70%, turning a bespoke engineering task into something the team could compose from existing pieces.",
          "Contributed to the migration from React Static to Next.js for SEO-critical experiences, improving both build ergonomics and search indexing.",
          "Built and scaled patient-facing and provider-facing React applications, improving development velocity and runtime performance together.",
        ],
      },
      {
        heading: "Growth and conversion",
        points: [
          "Implemented Apple and Google authentication, increasing signups by roughly 22% by removing friction at the top of the funnel.",
          "Integrated an experimentation framework that cut operational overhead for running tests by about 50%, so product could ship experiments without engineering time per test.",
        ],
      },
      {
        heading: "Realtime systems and performance",
        points: [
          "Developed WebRTC consultation experiences and the realtime notification systems around them.",
          "Ran ongoing Core Web Vitals, SEO and page performance work across the public surfaces.",
        ],
      },
      {
        heading: "Business impact",
        points: [
          "Delivered an insurance claim portal serving healthcare users at scale.",
        ],
      },
    ],
    stack: [
      "React",
      "Next.js",
      "Redux",
      "RxJS",
      "TypeScript",
      "WebRTC",
      "React Hook Form",
      "Mixpanel",
      "Node.js",
    ],
    outcomes: [
      { value: "~70%", label: "less effort per email template" },
      { value: "~22%", label: "more signups" },
      { value: "~50%", label: "less experiment overhead" },
      { value: "5.5 yrs", label: "leading frontend" },
    ],
  },
  {
    company: "Juggernaut Books",
    descriptor: "Mobile-first digital publishing and e-reading platform",
    title: "Senior Software Engineer",
    period: "Apr 2016 – Nov 2018",
    years: "2016–18",
    context:
      "Juggernaut let writers self-publish and readers read on phones and the web. Two audiences, two products: an authoring and editorial system on one side, a reading and commerce experience on the other. It's also where I first ran a full framework migration on a live product.",
    groups: [
      {
        heading: "Product development",
        points: [
          "Built real-time publishing workflows and custom authoring experiences that let writers self-publish digital content directly.",
          "Developed the content ingestion, editing and publishing systems used day to day by editorial and operations teams.",
          "Contributed to the RailYatri reading experience, putting ebooks in front of millions of travellers.",
        ],
      },
      {
        heading: "Frontend modernisation and performance",
        points: [
          "Contributed to migrating the Juggernaut platform from AngularJS to React, improving application performance by approximately 50%.",
          "Implemented SEO and metadata optimisation to improve discoverability and search indexing for the catalogue.",
        ],
      },
      {
        heading: "Platform and commerce",
        points: [
          "Integrated Paytm payment workflows to simplify digital purchases and improve transaction reliability.",
          "Implemented Facebook and Google social sign-in to streamline onboarding.",
          "Built administrative tooling to manage content and personalise experiences across web, Android and iOS.",
        ],
      },
    ],
    stack: ["React", "Redux", "AngularJS", "Node.js", "Express.js", "SCSS", "Paytm"],
    outcomes: [
      { value: "~50%", label: "performance gain post-migration" },
      { value: "Millions", label: "of readers reached" },
      { value: "3", label: "platforms served from one CMS" },
    ],
  },
];

export const earlier = [
  {
    company: "Voodoo.in",
    title: "Software Engineer",
    points: [
      "Built a Chrome extension delivering real-time product recommendations and deal discovery to a large consumer user base.",
      "Built Node.js automation services that monitored and notified updates across 30+ Android applications.",
    ],
  },
  {
    company: "Townrush",
    title: "Software Engineer",
    points: [
      "Built real-time logistics tracking for live monitoring of field executives and delivery operations.",
      "Developed operational dashboards for workforce visibility, activity tracking and route management, serving 3,000+ users.",
    ],
  },
  {
    company: "PropTiger",
    title: "Intern",
    points: [
      "Developed interactive apartment selectors and 3D floor-plan exploration to improve property discovery.",
      "Built Selenium and Node.js marketing automation that cut manual posting effort by roughly 75% across 25+ websites.",
    ],
  },
];

export const toolkit = [
  {
    group: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Redux",
      "RxJS",
      "React Hook Form",
    ],
  },
  {
    group: "Architecture & design systems",
    items: ["Design systems", "MUI", "Storybook", "Tailwind CSS", "Emotion", "SCSS"],
  },
  {
    group: "AI-augmented engineering",
    items: ["Cursor", "Claude", "GitHub Copilot", "Codemods & refactoring", "Migration planning"],
  },
  {
    group: "Tooling & productivity",
    items: ["GitHub Actions", "CI/CD", "Webpack", "Jest", "Git"],
  },
  {
    group: "Analytics & monitoring",
    items: ["Mixpanel", "Statsig", "Sentry", "Core Web Vitals"],
  },
  {
    group: "Backend & other",
    items: ["Node.js", "Express.js", "Python", "WebRTC", "Google Maps", "Chrome extensions", "SEO"],
  },
];

export const education = {
  degree: "B.Tech, Information Technology",
  school: "Indian Institute of Information Technology (IIIT), Allahabad",
  year: "2015",
  note: "CGPA 7.12",
};
