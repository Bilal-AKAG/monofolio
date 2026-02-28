<img width="4800" height="2700" alt="screenshot-studio-1772309282527" src="https://github.com/user-attachments/assets/6149f475-1d24-4e85-98dc-fbc9f8428f4f" /># Portfolio Template

A minimal, monochromatic, beautiful portfolio template built with Astro, Tailwind CSS, and Bearnie components.

<img width="4800" height="2700" alt="screenshot-studio-1772309282527" src="https://github.com/user-attachments/assets/cb4795af-4b9c-474f-ada9-a370adaad786" />


## Features

- **Minimal Design** - Clean, monochromatic aesthetic that puts your content first
- **Fast Performance** - Built with Astro for blazing-fast static output
- **Dark/Light Mode** - Seamless theme switching with persistent preference
- **Customizable** - Edit a single config file to personalize everything
- **Blog Support** - MDX-based blog with easy post creation
- **GitHub Integration** - Automatic contribution graph display
- **Responsive** - Looks great on all devices

## Quick Start

```bash
# Clone the repository
git clone https://github.com/Bilal-AKAG/monofolio.git
cd portfolio

# Install dependencies
bun install

# Start development server
bun run dev
```

That's it! Open `http://localhost:4321` to see your portfolio.

## Configuration

All customization happens in a single file: `src/config/portfolio.ts`

### Personal Info

```typescript
name: "Your Name",           // Full name
shortName: "Your",         // Short name for mobile
role: "Full Stack Developer", // Job title
location: "City",          // Location
```

### Bio (with Highlights)

Use `~text~` syntax to highlight words in your bio:

```typescript
bio: "I'm a ~full-stack developer~ specializing in React and TypeScript.",
```

This will render "full-stack developer" with an underline style.

### Social Links

```typescript
socials: {
  github: "https://github.com/username",
  x: "https://x.com/username",
  linkedin: "https://linkedin.com/in/username",
  email: "mailto:email@example.com",
},
```

Leave any field empty to hide that link.

### Projects

```typescript
projects: [
  {
    title: "Project Name",
    description: "Brief description of what it does.",
    link: "https://project-url.com",
    stack: ["React", "TypeScript", "Node.js"],
  },
],
```

### Experience

```typescript
experience: [
  {
    company: "Company Name",
    role: "Your Job Title",
    period: "2023 — Present",
    summary: "Brief description of your work.",
  },
],
```

### GitHub Integration

```typescript
github: {
  enabled: true,
  username: "your-github-username",
},
```

## Project Structure

```
portfolio/
├── src/
│   ├── components/       # Astro components
│   │   ├── Profile.astro     # Profile section
│   │   ├── Projects.astro   # Projects showcase
│   │   ├── Experience.astro # Work experience
│   │   ├── Footer.astro    # Site footer
│   │   ├── Navigation.astro # Navigation bar
│   │   └── bearnie/        # Bearnie UI components
│   ├── config/
│   │   └── portfolio.ts    # Main configuration
│   ├── content/
│   │   └── blog/          # Blog posts (MDX)
│   ├── layouts/
│   │   └── BaseLayout.astro # Base layout
│   ├── pages/
│   │   ├── index.astro   # Home page
│   │   └── blog/          # Blog pages
│   └── styles/
│       └── global.css     # Global styles
├── public/
│   └── fonts/             # Custom fonts
├── astro.config.mjs
├── package.json
└── README.md
```

## Adding Blog Posts

Create a new `.mdx` file in `src/content/blog/`:

```mdx
---
title: "Your Post Title"
description: "A brief description for the listing page"
pubDate: "2024-01-15"
---

# Your Post Title

Your content here...
```

## Customization

### Colors

The color scheme is defined in `src/styles/global.css`. The template uses semantic color variables that work in both light and dark modes.

### Fonts

Custom fonts are stored in `public/fonts/`. The template uses Ioskeley Mono by default. To change fonts:

1. Add your font files to `public/fonts/`
2. Update the `@font-face` rules in `src/styles/global.css`
3. Update `--font-mono` in the `@theme` section

### Theme Toggle

The theme toggle is built into the navigation bar. It automatically:
- Respects user preference (`prefers-color-scheme`)
- Persists choice in localStorage
- Works without JavaScript flash on page load

## Tech Stack

- **[Astro](https://astro.build/)** - The web framework for content-driven websites
- **[Tailwind CSS](https://tailwindcss.com)** - A utility-first CSS framework
- **[Bearnie](https://bearnie.dev/docs/)** - Beautiful, accessible UI components

## Deployment

### Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

### Static Build

```bash
bun run build
```

The static files will be in the `dist/` folder - ready to deploy to any static host.

## Credits

Built with:

- [Astro](https://astro.build/) - The web framework for content-driven websites
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Bearnie](https://bearnie.dev/docs/) - Beautiful, accessible UI components by [Michael Andreuzza](https://x.com/Mike_Andreuzza)

Designed and built with care by [Michael Andreuzza](https://x.com/Mike_Andreuzza).

---

MIT License - Feel free to use this template for your own portfolio.
