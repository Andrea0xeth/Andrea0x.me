# CLAUDE.md

Guidance for Claude Code working in this repo. Focuses on what is **non-obvious**.

## Commands

```bash
npm run dev      # Next.js dev server on http://localhost:3000
npm run build    # Production build (Next.js 15, output: 'standalone')
npm run start    # Run the production build
npm run lint     # ESLint (next/core-web-vitals + next/typescript)
```

No test runner. Path alias: `@/*` → `src/*` (`tsconfig.json`).

## Architecture

Next.js 15 App Router portfolio with **i18n** (Italian + English) via `next-intl`.

### Routing — `[locale]` is mandatory

All user-facing pages live under `src/app/[locale]/...`:

- `/[locale]` — home
- `/[locale]/about` — long bio
- `/[locale]/services` — Fractional CTO offer
- `/[locale]/work` — case study index
- `/[locale]/work/[slug]` — individual case study

Locale-free routes:
- `/api/cv?lang={it|en}` — server-side PDF generation via `@react-pdf/renderer`
- `/opengraph-image` (edge), `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest`

`src/middleware.ts` (next-intl middleware) handles locale negotiation and redirects unprefixed paths. Edits to routing config go in `src/i18n/routing.ts`; the request config is in `src/i18n/request.ts`.

`src/app/[locale]/layout.tsx` owns:
- `generateMetadata` (locale-aware title/description/OG/Twitter, pulls description from `personal.shortBio[locale]`)
- `<NextIntlClientProvider>` wrapper
- JSON-LD `Person` schema injected once per page

`src/app/layout.tsx` is intentionally minimal: html shell, fonts, ThemeProvider.

### Content — `src/data/portfolio.ts` + `src/data/types.ts`

Single typed `portfolioData` object. The schema in `types.ts` is the source of truth — bilingual content uses the `BilingualString = { it: string; en: string }` shape.

Top-level keys (all required, see `PortfolioData`): `personal, social, taglines, pillars, caseStudies, experience, education, skills, services, collaborations, projects, trustedBy, techStack, stats, languages`.

Notable fields:
- `pillars[]` — 6 capability pillars (`traditional-dev | ai-eng | cloud-devops | web3 | it-mgmt | business`); IDs are typed via `PillarId`.
- `caseStudies[]` — full case studies with bilingual `problem / architecture / decisions / results` and a `pillarsTouched: PillarId[]` cross-reference into pillars. Drives `/work/[slug]` and `<FeaturedCaseStudies>`.
- `services[]` — engagement offers for the `/services` page.
- `collaborations[]` — Tier 2 logos (advisor / community / contributor).
- `techStack[]` — Tier 3 dense tag cloud, grouped by `TechStackCategory`.

### Translations

UI strings live in `messages/{it,en}.json`. Components access them via `useTranslations('namespace')` (client) or `getTranslations('namespace')` (server). The schema must stay symmetric between locales.

Locale type comes from `import type { Locale } from '@/data/types'`. Read locale via `useLocale()` (client) or via the route param (server).

### Design system — `src/components/ui/*`

Primitives:
- `<Surface>` — bordered/glass card variants, replaces direct `GlassCard` usage in new sections.
- `<MetricNumber>` — big stat number (uses `.metric` class for tabular numerals).
- `<TagPill>` — uniform tag chip (variants `default | accent`).
- `<SectionHeader>` — section title rhythm: `number="01"` (mono caption), title (h2), optional summary.

Legacy primitives still in use: `<GlassCard>`, `<AnimatedButton>`, `<PortfolioImage>`. Prefer `<Surface>` in new code.

Section ordinal numbering on the home page is **monotonic** — keep in sync when reordering:

```
01 WhatIDoMatrix · 02 DomainsProjectsMatrix · 03 FeaturedCaseStudies
04 PortfolioSection · 05 ExperienceSection · 06 SkillsSection
07 WhoIsThisFor · 08 CollaborationsSection · 09 TechStackSection
```

### Typography & color

Typography utility classes are defined in `src/app/globals.css`:
`.text-display .text-h1 .text-h2 .text-h3 .text-body .text-caption .text-tag .metric`.

The single decorative accent is `--accent-primary` (CSS var; theme-aware). `--accent-secondary` / `--accent-tertiary` are reserved tokens — do **not** introduce new accent hues without justification.

Theme: light/dark via `class` on `<html>`. `ThemeProvider` (`src/contexts/theme-context.tsx`) defaults to dark, persists in `localStorage["theme"]`, ignores `prefers-color-scheme`.

### CV PDF generation — `/api/cv`

`src/app/api/cv/route.ts` returns a generated PDF using `@react-pdf/renderer`. The document is `src/components/cv-document.tsx`. Query string `?lang=it|en` selects locale; defaults to `en`. The download button is `<CVDownloadButton>`.

### Easter egg — Anon Miladi avatar

`<HeroSection>` listens for **Ctrl/Cmd+Shift+A** and toggles between `personal.avatarReal` and `personal.avatarAnon`. No periodic glitch / random toggle anymore — keystroke only.

### Animations

- `framer-motion` is in `next.config.js` `experimental.optimizePackageImports`; the framer-motion chunk is split via `splitChunks` in webpack config.
- Reduced-motion respect is centralized: `src/lib/use-reduced-motion.ts` (`useReducedMotion`) + `getMotionProps()`. Presets in `src/lib/motion-presets.ts`. Always use these — do **not** hand-roll motion variants in new code.

### SEO

- Metadata in `src/app/[locale]/layout.tsx` (locale-aware via `generateMetadata`). Title template: `%s · Andrea Ritondale`. Site title: "Andrea Ritondale — Principal Engineer · IT Architect · AI Builder".
- OG image: `src/app/opengraph-image.tsx` (edge runtime, `next/og`).
- JSON-LD Person schema rendered inside the locale layout body.
- `src/app/sitemap.ts`, `src/app/manifest.ts`, `src/app/robots.ts` — App Router metadata routes.

### Images

`next.config.js` allowlists remote hosts (`images.remotePatterns`). Add new external image sources there.

`<PortfolioImage>` and `<RotatingAvatar>` use native `<img>` (not `next/image`) because they swap `src` for hover-GIF / rotation; do not migrate them naively.

## Conventions

- `'use client'` on any component using state, effects, `framer-motion`, or `next-intl` client hooks. Server data fetching (translations, params) stays server.
- React 19 + Next 15. `ref` is a regular prop — no `forwardRef`.
- TypeScript `strict: true`. Don't widen with `any`.
- `cn()` from `src/lib/utils.ts` (clsx + tailwind-merge) for conditional classes.
- Bilingual fields: always read with `field[locale]` — never hardcode language in components.
