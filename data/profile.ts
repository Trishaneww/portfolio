export type Repo = {
  name: string;
  description: string;
  language: string;
  languageColor: string;
  stars?: number;
  visibility?: "Public" | "Private";
  url?: string;
};

export type Job = {
  title: string;
  company: string;
  companyUrl?: string;
  period: string;
  description: string | string[];
};

export type CurrentlyWorkingOn = {
  name: string;
  description: string;
  status?: string;
  url?: string;
};

export type ShippedProject = {
  name: string;
  summary: string;
  url?: string;
  stack?: string[];
  highlights?: string[];
  status?: string;
};

export type SocialLink = {
  icon: "location" | "mail" | "link" | "linkedin" | "github" | "twitter";
  label: string;
  href?: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export const LANGUAGE_COLORS = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Go: "#00ADD8",
  Rust: "#dea584",
  Java: "#b07219",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Shell: "#89e051",
  Swift: "#F05138",
  Solidity: "#AA6746",
  C: "#555555",
} as const;

export const profile = {
  name: "Trishane",
  username: "trishaneww",
  avatar: "/profile-photo.jpeg" as string | undefined,
  tagline: "Software Engineer",
  bio: "Software engineer building at the intersection of complex integrations and real-world workflows. TypeScript and Next.js, with a soft spot for Go.",
  location: "Toronto, Ontario, Canada",
  email: "trishaneww@gmail.com",
  website: "https://trishane.com",
  resumeUrl: "/trishane-resume.pdf",

  readme: {
    heading: "Hi, I'm Trishane 👋",
    paragraphs: [
      "I'm a software engineer with experience building production software for startups and agencies across Toronto. I specialize in TypeScript, Next.js, and Go, with a focus on scalable web applications, backend systems, and complex integrations.",
      "I've worked on multi-tenant platforms, identity and financial verification systems, payment infrastructure, and internal tools that support real-world business workflows.",
      "Outside of my day-to-day work, I'm always building, exploring new technologies, shipping side projects, and looking for better ways to solve complex problems through thoughtful software.",
      "Feel free to reach out if you'd like to chat about engineering, startups, or what you're building.",
    ],
  },

  links: [
    { icon: "location", label: "Toronto, Ontario, Canada" },
    {
      icon: "mail",
      label: "trishaneww@gmail.com",
      href: "mailto:trishaneww@gmail.com",
    },
    { icon: "link", label: "trishane.com", href: "https://trishane.com" },
    {
      icon: "github",
      label: "github.com/Trishaneww",
      href: "https://github.com/Trishaneww",
    },
    {
      icon: "linkedin",
      label: "linkedin.com/in/tw11",
      href: "https://www.linkedin.com/in/tw11/",
    },
  ] satisfies SocialLink[],

  pinned: [
    {
      name: "inkspace-web",
      description:
        "Next.js frontend for InkSpace — the booking dashboard, public artist intake links, and lead-to-booking review flows for tattoo artists.",
      language: "TypeScript",
      languageColor: LANGUAGE_COLORS.TypeScript,
      visibility: "Private",
      url: "https://github.com/Trishaneww/inkspace-web",
    },
    {
      name: "inkspace-api",
      description:
        "Go backend powering InkSpace — multi-provider auth, AI lead triage, scheduling, Stripe Connect deposits, and waiver e-signing.",
      language: "Go",
      languageColor: LANGUAGE_COLORS.Go,
      visibility: "Private",
      url: "https://github.com/Trishaneww/inkspace-api",
    },
    {
      name: "wize-lead-pipeline",
      description:
        "Internal lead-gen pipeline for a web design agency — durable Inngest jobs that source, audit, and draft AI cold outreach with a human-in-the-loop review dashboard.",
      language: "TypeScript",
      languageColor: LANGUAGE_COLORS.TypeScript,
      visibility: "Private",
      url: "https://github.com/Trishaneww/wize-lead-pipeline",
    },
    {
      name: "praecid-api",
      description:
        "A multi-tenant SaaS that mines unstructured safety and maintenance text (incident logs, CMMS work orders) and uses NLP to codify it against regulatory schemes like OSHA and WSIB, surfacing hidden hazards. Built on an event-sourced Postgres core with a jurisdiction-aware rules engine and per-tenant consent lineage that seeds a pooled cross-company predictive model.",
      language: "Go",
      languageColor: LANGUAGE_COLORS.Go,
      visibility: "Private",
      url: "https://github.com/Trishaneww/praecid-api",
    },
  ] satisfies Repo[],

  currentlyWorkingOn: [] as CurrentlyWorkingOn[],

  shipped: [
    {
      name: "InkSpace",
      url: "https://inkspace.dev",
      status: "Live",
      summary:
        "Architected and built an AI-powered management suite for 40+ tattoo artists using Go, Next.js, PostgreSQL, RabbitMQ, and Docker, replacing fragmented Instagram DM and spreadsheet workflows with a structured lead pipeline and booking system.",
      stack: ["Go", "Next.js", "PostgreSQL", "RabbitMQ", "Docker"],
      highlights: [
        "Built a multi-provider authentication service in Go supporting Google OAuth 2.0 and Microsoft OAuth 2.0.",
        "Developed a public artist intake link system with AI-driven lead triage that ranks inquiries and auto-drafts replies in the artist's voice, kanban pipeline management, scheduling with proposal/confirmation flows and Google Calendar sync, Stripe Connect deposits with cash/e-transfer reconciliation, and waiver e-signing with audit trail.",
      ],
    },
    {
      name: "Lead Generation Pipeline",
      status: "Internal",
      summary:
        "An internal lead-gen tool for a web design agency that automates the top of the sales funnel as a chain of durable Inngest jobs, taking a local business from discovery to a human-ready cold-outreach draft.",
      stack: [
        "TypeScript",
        "Inngest",
        "Next.js",
        "PostgreSQL",
        "Drizzle",
        "Playwright",
        "Claude",
      ],
      highlights: [
        "Sources local businesses via the Google Places API, then audits each site with cheerio and serverless Chromium (playwright-core) to score concrete weaknesses.",
        "Uses Claude — Haiku to qualify leads and Sonnet to draft — to produce personalized cold-outreach email anchored to a real problem found on each business's site.",
        "Surfaces every lead in a Next.js review dashboard backed by Postgres/Drizzle. The system never auto-sends — each draft is human-reviewed and pushed to Gmail as a draft for manual sending.",
      ],
    },
  ] satisfies ShippedProject[],

  experience: [
    {
      title: "Software Engineer",
      company: "RentZoro",
      period: "May 2025 — Present",
      description: [
        "Architected and led development of core platform features in Next.js and TypeScript, designing scalable multi-tenant workflows supporting thousands of tenant screenings across Canada.",
        "Designed and launched Express Screen, a real-time tenant verification system integrating TransUnion, Plaid, Veriff, Bynn, and AWS Bedrock for automated identity, financial, and document analysis.",
        "Engineered asynchronous workflows orchestrating external API calls for reliable aggregation of credit, income, identity, and background data.",
        "Built components of the proprietary ZoroScore risk-scoring system, turning financial, identity, and behavioral data into automated decisions.",
        "Led engineering initiatives supporting SOC 2 Type II certification — audit logging, access controls, and secure infrastructure workflows.",
        "Mentored developers and led architectural decisions, improving code quality, engineering standards, and sprint execution across the team.",
      ],
    },
    {
      title: "Founder & Software Engineer",
      company: "WizeStudios",
      companyUrl: "https://www.wizestudios.ca/",
      period: "2024 — Present",
      description:
        "Run a software solutions agency building custom websites and scalable, full-stack software for clients end-to-end.",
    },
    {
      title: "Software Engineer",
      company: "Bracer EV",
      period: "Apr 2024 — Apr 2025",
      description:
        "Contributed to a full-stack inventory management platform in Next.js, TypeScript, and PostgreSQL, integrating the Amazon SP-API and WooCommerce Admin API for real-time syncing of inventory, listings, and orders across all selling channels.",
    },
    {
      title: "Software Engineer Intern (Frontend)",
      company: "YA Solutions Inc",
      period: "Apr 2023 — Aug 2023",
      description: [
        "Built and deployed high-performance marketing websites with Next.js, Tailwind CSS, and Vercel, improving load times by 40% and increasing lead conversion by 20% through SEO and analytics optimization.",
        "Developed cross-platform desktop tools for client-specific internal automation and data visualization.",
      ],
    },
  ] satisfies Job[],

  skills: [
    {
      title: "Languages",
      items: ["TypeScript", "JavaScript", "Go"],
    },
    {
      title: "Frontend",
      items: ["React", "Next.js", "React Native", "Tailwind CSS"],
    },
    {
      title: "Backend",
      items: [
        "Node.js",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Prisma",
        "RabbitMQ",
      ],
    },
    {
      title: "Infra & Tools",
      items: ["Docker", "AWS", "GitHub Actions"],
    },
  ] satisfies SkillGroup[],

  interests: [
    "AI-native developer tooling",
    "Distributed systems",
    "LLM agents",
    "WebAssembly",
    "Performance",
  ],
} as const;

export type Profile = typeof profile;
