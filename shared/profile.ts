export const identity = {
  name: "Vikram Parmar",
  title: "Senior Backend Developer",
  location: "Gujarat, India",
  timezone: "UTC+5:30",
  availability: "Open to remote roles — global, async-friendly",
  email: "vikramparmar385@gmail.com",
  phone: "+91 6353688399",
  phoneHref: "tel:+916353688399",
  linkedin:
    "https://www.linkedin.com/in/vikram-parmar-5458b316a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
};

export const summary = {
  lead: "I build and scale the systems behind production platforms — Laravel and PHP services serving 50k+ users and handling 1M+ requests, with the caching, queueing and replication strategy to keep them fast under load.",
  sub: "4.5+ years in. Most recently leading a cross-functional team of six across backend, frontend, mobile and AI/ML.",
  full: "Backend-focused engineer with 4.5+ years of experience building and scaling production systems using Laravel and PHP, on platforms serving 50k+ users. Led a cross-functional team of 6 developers spanning backend, frontend, mobile and AI/ML on a multi-service production platform. Strong in REST API design, multi-tenant architecture, database optimization at scale, and distributed system design — sharding, read replicas, caching strategy and failover — for systems handling 1M+ requests.",
};

export const stats = [
  { value: "50k+", label: "Users served" },
  { value: "1M+", label: "Requests handled" },
  { value: "~35%", label: "Faster API response" },
  { value: "6", label: "Developers led" },
];

export const skills: Record<string, string[]> = {
  Languages: ["PHP", "JavaScript"],
  Backend: ["Laravel", "Filament", "Livewire", "Laravel Octane"],
  Databases: ["MySQL", "PostgreSQL", "MongoDB"],
  "Caching & Queues": ["Redis", "Horizon", "Supervisor"],
  "System Design": [
    "Multi-tenant architecture",
    "Query optimization & indexing",
    "Read replicas",
    "DB replication & failover",
    "Sharding",
    "Event-driven design",
  ],
  "Reliability & Security": [
    "Rate limiting & API abuse protection (Cloudflare)",
    "Test-gated CI/CD",
  ],
  Observability: ["Sentry", "Nightwatch", "Slack-integrated build alerts"],
  "AI / LLM": ["FastAPI-based AI services", "Multi-service orchestration"],
  DevOps: ["Docker", "Laravel Forge", "Laravel Sail", "AWS (EC2, RDS, S3)"],
  "Version Control": ["Git", "GitHub", "GitLab"],
};

export const experience = [
  {
    company: "Vivansh Infotech",
    role: "Software Developer — Backend",
    period: "Oct 2023 — Present",
    location: "Ahmedabad, India",
    highlights: [
      "Designed and maintain REST APIs in Laravel powering core product features in production.",
      "Introduced Redis caching and queue-based processing, reducing average API response time by ~35% and cutting database load during peak traffic.",
      "Built and maintained Horizon/Supervisor-monitored background job pipelines, improving job reliability to ~99% uptime.",
      "Implemented a test-gated CI/CD pipeline — changes deploy automatically only after passing test suites, with Slack notifications on failure.",
      "Informally mentored 2 developers and contributed to backend architecture decisions across Docker-based, AWS-hosted environments.",
    ],
  },
  {
    company: "eSparkBiz",
    role: "Software Developer",
    period: "Jan 2022 — Oct 2023",
    location: "Ahmedabad, India",
    highlights: [
      "Developed and maintained backend systems using Laravel and MySQL for client production applications.",
      "Integrated payment gateways including Stripe, Callpay, Clover and VALR, enabling secure multi-currency transactions.",
      "Built and hardened financial transaction workflows with zero critical security incidents.",
    ],
  },
];

export const featuredProjects = [
  {
    title: "Capability",
    kicker: "Team lead · 6 devs",
    subtitle: "Training & workforce development platform",
    summary:
      "A multi-tenant, multi-service platform serving 50k+ users. I led a cross-functional team of six — backend, frontend, mobile and AI/ML — and owned the architecture that holds it together.",
    tech: [
      "Laravel",
      "Redis",
      "Horizon",
      "Node.js / WebSockets",
      "FastAPI",
      "React / Next.js",
    ],
    points: [
      "Designed the Redis caching and Horizon queue architecture, cutting average response times ~30% and database load ~40%.",
      "Built a real-time chat system on Node.js and WebSockets supporting 50k+ users.",
      "Improved database performance through indexing and query refactoring — slow query incidents down ~50%.",
      "Achieved zero-downtime deployments across every service on the platform.",
    ],
    metrics: [
      { value: "−30%", label: "Response time" },
      { value: "−40%", label: "Database load" },
      { value: "−50%", label: "Slow queries" },
    ],
  },
  {
    title: "Letting a Property",
    kicker: "Full stack · UK market",
    subtitle: "UK property management platform",
    summary:
      "Backend for the full letting lifecycle — listings, applications, contracts and money movement — with open banking and payment rails wired in end to end.",
    tech: ["Laravel", "Filament", "Livewire", "Lloyds Bank API", "Stripe", "Laravel Forge"],
    points: [
      "Built backend workflows for listings, applications and contract handling using Laravel, Filament and Livewire; owned deployment via Laravel Forge.",
      "Integrated Lloyds Bank APIs for automated rent collection and payouts.",
      "Integrated Stripe for secure payment processing, plus Google GeoLocation and PropertyData APIs.",
    ],
    metrics: [],
  },
];

export const additionalProjects = [
  {
    title: "CHARGD",
    tag: "Backend lead",
    description: "Multi-tenant SaaS platform. Backend lead on a 3–4 developer team.",
    stack: "Laravel · React",
  },
  {
    title: "Yaalago",
    tag: "Revamp",
    description: "Led the backend revamp of an existing platform, deployed via Laravel Sail.",
    stack: "Laravel · React · Sail",
  },
  {
    title: "Lifesthought",
    tag: "Architecture",
    description:
      "Multi-tenant SaaS. Backend architecture parallel to Capability's tenancy model.",
    stack: "Laravel · React",
  },
  {
    title: "Seedlr",
    tag: "Fintech",
    description:
      "Crypto gifting platform (South Africa). Backend integrating Callpay and VALR for currency conversion and Bitcoin transactions.",
    stack: "Laravel · Callpay · VALR",
  },
  {
    title: "One For All Social",
    tag: "6 platform APIs",
    description:
      "Social media management platform. Backend APIs across Facebook, X, LinkedIn, TikTok, YouTube and Pinterest with scheduled-post job processing.",
    stack: "Laravel · Queues",
  },
];

export const education = {
  degree: "Bachelor of Engineering",
  year: "2022",
  institution: "Gujarat Technological University",
};
