export const portfolioConfig = {
  name: "Your Name",
  role: "Full Stack Developer",
  location: "Based in Somewhere",
  welcome: "Welcome to my portfolio",
  announcement: {
    enabled: true,
    label: "Available for new opportunities",
    linkLabel: "Email me",
    href: "mailto:you@example.com",
  },
  bio: "I build minimal, focused interfaces and thoughtful web experiences.",
  socials: {
    github: "https://github.com/Bilal-AKAG",
    x: "https://x.com/your-handle",
    linkedin: "https://www.linkedin.com/in/your-handle",
    email: "mailto:you@example.com",
  },
  github: {
    enabled: true,
    username: "Bilal-AKAG",
  },
  experience: [
    {
      company: "Company Name",
      role: "Senior Developer",
      period: "2023 — Present",
      summary: "Working on modern web applications with a focus on DX and UX.",
    },
  ],
  projects: [
    {
      title: "Project Name",
      description: "Short description of what this project does and why it exists.",
      link: "https://project.link",
      stack: ["Astro", "Bearnie", "Tailwind"],
    },
  ],
  analytics: {
    provider: "loglib",
    id: "",
  },
} as const;

export type PortfolioConfig = typeof portfolioConfig;
