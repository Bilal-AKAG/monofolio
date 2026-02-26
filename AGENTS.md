# AGENTS.md - Developer Guide for AI Agents

## Project Overview

This is an Astro-based portfolio website using Tailwind CSS v4 for styling. The project uses Bun as the package manager and TypeScript with strict mode.

## Build & Development Commands

### Core Commands

```bash
# Start development server (hot reload)
bun run dev

# Build for production
bun run build

# Preview production build locally
bun run preview

# Type check (Astro provides this via TypeScript)
npx astro check
```

### Running Tests

No test framework is currently configured. If adding tests, use:

```bash
# Install Vitest for unit/component testing
bun add -d vitest

# Run tests
bun run test

# Run a single test file
bun run test -- filename.test.ts

# Run tests in watch mode
bun run test -- --watch
```

### Linting

No linter is currently configured. If adding one:

```bash
# ESLint (if added)
bun run lint

# Fix linting issues
bun run lint --fix
```

## Code Style Guidelines

### General Conventions

- Use **2 spaces** for indentation
- Use **single quotes** for strings in JavaScript/TypeScript
- Use **path aliases** instead of relative imports (see below)
- Add **type annotations** where TypeScript cannot infer types
- Use **const** by default, only use **let** when reassignment is needed

### Imports

Use path aliases configured in `tsconfig.json`:

```typescript
// Components
import BaseLayout from '@/layouts/BaseLayout.astro';
import Profile from '@/components/Profile.astro';

// Config
import {portfolioConfig} from '@/config/portfolio';
```

Available aliases:

- `@/*` → `./src/*`
- `@/components/*` → `./src/components/*`
- `@/layouts/*` → `./src/layouts/*`
- `@/config/*` → `./src/config/*`

### TypeScript

- Extends `astro/tsconfigs/strict` - follow strict TypeScript practices
- Export types explicitly when used across files: `export type PortfolioConfig = typeof portfolioConfig`
- Use `as const` for configuration objects that shouldn't be mutated

### Astro Components

- Frontmatter (between `---`) goes at the top of the file
- Order imports alphabetically within frontmatter
- Use conditional rendering with `{condition && <Component />}` for optional content
- Always use `rel="noreferrer"` with `target="_blank"` on external links

### Tailwind CSS v4

- Uses `@theme` directive for custom properties (see `src/styles/global.css`)
- Uses **OKLCH** color space for colors
- Supports dark mode via `.dark` class on root element
- Use semantic color classes: `text-muted-foreground`, `bg-primary`, `border-border`
- Use Tailwind's arbitrary value syntax sparingly: `[11px]`, `[5px]`

### Naming Conventions

- **Components**: PascalCase (e.g., `Profile.astro`, `GithubContribution.astro`)
- **Files**: kebab-case (e.g., `global.css`, `portfolio.ts`)
- **Variables**: camelCase
- **Constants**: camelCase with descriptive names
- **CSS classes**: Tailwind utility classes (kebab-case)

### Error Handling

- Use optional chaining (`?.`) for potentially undefined properties
- Use nullish coalescing (`??`) for default values
- Validate configuration objects at runtime if critical

### Project Structure

```
src/
├── components/     # Astro components
├── config/         # Configuration (portfolio.ts)
├── layouts/        # Layout components
├── pages/          # Astro pages (index.astro)
└── styles/         # Global CSS
```

### Configuration

- Main configuration in `src/config/portfolio.ts`
- Theme customization in `src/styles/global.css`
- Astro config in `astro.config.mjs`
- TypeScript config in `tsconfig.json`

### Dark Mode

The project uses CSS-based dark mode. Colors are defined with CSS custom properties using OKLCH color space. Toggle dark mode by adding/removing the `.dark` class on the root element.

### External Links

Always include `rel="noreferrer"` when using `target="_blank"`:

```astro
<a href="https://example.com" target="_blank" rel="noreferrer">
```

## MCP Server

A bearnie MCP server is configured in `.cursor/mcp.json` for Cursor IDE integration.
