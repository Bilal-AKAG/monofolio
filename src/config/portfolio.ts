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
  name: "Sarah Mitchell",           // Your full name (displayed prominently)
  shortName: "Sarah",             // Short name for mobile/small spaces
  role: "Senior Software Engineer", // Your job title
  location: "Seattle",           // Location with / prefix (e.g., /Berlin, /Tokyo)

  /* ------------------------------------------
  BIO / ABOUT ME
  ------------------------------------------
  Use ~text~ syntax to highlight words with underline style.
  Example: "I'm a ~full-stack developer~ who loves ~building~"
  ------------------------------------------ */
  bio: "I'm a ~senior software engineer~ with 6+ years of experience building scalable web applications. I specialize in ~distributed systems~ and ~cloud architecture~, with a focus on ~developer productivity~. Outside work, I mentor junior developers and contribute to open-source.",

  /* ------------------------------------------
  SOCIAL LINKS
  ------------------------------------------
  Leave any field empty or remove it to hide that link.
  Use full URLs (https://... or mailto:...)
  ------------------------------------------ */
  socials: {
    github: "https://github.com/Bilal-AKAG",
    x: "https://x.com/sarahmitchell",
    linkedin: "https://www.linkedin.com/in/sarahmitchell-dev",
    email: "mailto:sarah@example.com",
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
      company: "Amazon Web Services",         // Company name
      role: "Senior Software Engineer",       // Job title
      period: "2022 — Present",              // Time period (any format works)
      summary: "Leading the development of serverless compute platforms, serving 100M+ requests daily.",
    },
    {
      company: "Netflix",
      role: "Software Engineer",
      period: "2019 — 2022",
      summary: "Built microservices for content recommendation engine, improving latency by 40%.",
    },
    {
      company: "Startup",
      role: "Full Stack Developer",
      period: "2017 — 2019",
      summary: "Developed MVP from scratch, scaled from 0 to 10K users within 6 months.",
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
      title: "Lambda Cold Start Optimizer",                              // Project name
      description: "Tool for reducing AWS Lambda cold start times by 60% through intelligent pre-warming strategies.",  // Brief description
      link: "https://github.com",                          // Project URL
      stack: ["Rust", "AWS Lambda", "Python"],                    // Tech stack (array of strings)
    },
    {
      title: "Service Mesh Dashboard",
      description: "Internal observability dashboard for monitoring microservices health and inter-service communication.",
      link: "https://github.com",
      stack: ["React", "Go", "Prometheus"],
    },
    {
      title: "CI Pipeline Accelerator",
      description: "Build optimization tool that reduced CI/CD pipeline execution time by 45% through caching strategies.",
      link: "https://github.com",
      stack: ["TypeScript", "Docker", "GitHub Actions"],
    },
    // Add more projects as needed
  ],

} as const;

// TypeScript type export (do not edit)
export type PortfolioConfig = typeof portfolioConfig;
