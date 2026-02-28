/**
 * ==========================================
 * PORTFOLIO CONFIGURATION
 * ==========================================
 * 
 * This file contains all the configuration for your portfolio.
 * Edit the values below to customize your site.
 * 
 * ------------------------------------------
 * QUICK REFERENCE:
 * ------------------------------------------
 * • name, shortName, role, location - Personal info
 * • bio - Supports ~highlight~ syntax for underlined text
 * • socials - Links to your profiles (leave empty to hide)
 * • github - GitHub username for contribution graph
 * • experience - Work history array
 * • projects - Projects showcase array
 * 
 * ------------------------------------------
 * CONFIG OPTIONS:
 * ------------------------------------------
 */

export const portfolioConfig = {

  /* ------------------------------------------
  PERSONAL INFO
  ------------------------------------------ */
  name: "Alex Chen",           // Your full name (displayed prominently)
  shortName: "Alex",          // Short name for mobile/small spaces
  role: "Full Stack Developer", // Your job title
  location: "/San Francisco", // Location with / prefix (e.g., /Berlin, /Tokyo)

  /* ------------------------------------------
  BIO / ABOUT ME
  ------------------------------------------
  Use ~text~ syntax to highlight words with underline style.
  Example: "I'm a ~full-stack developer~ who loves ~building~"
  ------------------------------------------ */
  bio: "I'm a ~full-stack developer~ specializing in React, TypeScript, and Node.js. I build ~minimal, performant~ web applications and love crafting ~great developer experiences~. When not coding, I'm hiking trails or contributing to open-source.",

  /* ------------------------------------------
  SOCIAL LINKS
  ------------------------------------------
  Leave any field empty or remove it to hide that link.
  Use full URLs (https://... or mailto:...)
  ------------------------------------------ */
  socials: {
    github: "https://github.com/Bilal-AKAG",
    x: "https://x.com/alexchen_dev",
    linkedin: "https://www.linkedin.com/in/alexchen-dev",
    email: "mailto:alex@example.com",
  },

  /* ------------------------------------------
  GITHUB INTEGRATION
  ------------------------------------------ */
  github: {
    enabled: true,           // Show GitHub contribution graph
    username: "Bilal-AKAG",  // Your GitHub username
  },

  /* ------------------------------------------
  WORK EXPERIENCE
  ------------------------------------------
  Add entries for each job/position.
  All fields are required for each entry.
  ------------------------------------------ */
  experience: [
    {
      company: "Vercel",                    // Company name
      role: "Senior Frontend Engineer",    // Job title
      period: "2023 — Present",           // Time period (any format works)
      summary: "Working on Next.js and the frontend infrastructure team to improve developer experience.",
    },
    {
      company: "Stripe",
      role: "Full Stack Developer",
      period: "2021 — 2023",
      summary: "Built internal developer tools and improved CI/CD pipelines for faster deployments.",
    },
    // Add more experience entries as needed
  ],

  /* ------------------------------------------
  PROJECTS SHOWCASE
  ------------------------------------------
  Add your projects with title, description, link, and tech stack.
  ------------------------------------------ */
  projects: [
    {
      title: "OpenCode",                               // Project name
      description: "An AI-powered code editor built for the modern developer workflow.",  // Brief description
      link: "https://opencode.ai",                     // Project URL
      stack: ["Astro", "TypeScript", "LLM"],           // Tech stack (array of strings)
    },
    {
      title: "Tailwind CSS",
      description: "A utility-first CSS framework for rapid UI development.",
      link: "https://tailwindcss.com",
      stack: ["CSS", "PostCSS", "Node.js"],
    },
    // Add more projects as needed
  ],

} as const;

// TypeScript type export (do not edit)
export type PortfolioConfig = typeof portfolioConfig;
