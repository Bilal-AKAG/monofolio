export const portfolioConfig = {
	name: "Alex Chen",
  shortName:"Alex",
  role: "Full Stack Developer",
  location: "Based in San Francisco",
  welcome: "Welcome to my portfolio",
  announcement: {
    enabled: true,
    label: "Not available for opportunities",
    linkLabel: "Email me",
    href: "mailto:alex@example.com",
  },
  bio: "I'm a full-stack developer based in San Francisco with a passion for building minimal, performant, and accessible web applications. I specialize in React, TypeScript, and Node.js, with experience working at scale. When I'm not coding, you'll find me contributing to open-source projects, exploring new technologies, or hiking the California trails.",
  socials: {
    github: "https://github.com/Bilal-AKAG",
    x: "https://x.com/alexchen_dev",
    linkedin: "https://www.linkedin.com/in/alexchen-dev",
    email: "mailto:alex@example.com",
  },
  github: {
    enabled: true,
    username: "Bilal-AKAG",
  },
  experience: [
    {
      company: "Vercel",
      role: "Senior Frontend Engineer",
      period: "2023 — Present",
      summary: "Working on Next.js and the frontend infrastructure team to improve developer experience.",
    },
    {
      company: "Stripe",
      role: "Full Stack Developer",
      period: "2021 — 2023",
      summary: "Built internal developer tools and improved CI/CD pipelines for faster deployments.",
    },
  ],
  projects: [
    {
      title: "OpenCode",
      description: "An AI-powered code editor built for the modern developer workflow.",
      link: "https://opencode.ai",
      stack: ["Astro", "TypeScript", "LLM"],
    },
    {
      title: "Tailwind CSS",
      description: "A utility-first CSS framework for rapid UI development.",
      link: "https://tailwindcss.com",
      stack: ["CSS", "PostCSS", "Node.js"],
    },
  ],
 
} as const;

export type PortfolioConfig = typeof portfolioConfig;
