# Priyadharshini J — Portfolio

A production-ready personal portfolio built with Next.js 15 (App Router), TypeScript, Tailwind CSS,
Framer Motion, and shadcn/ui-style components.

## Stack

- **Framework:** Next.js 15 (App Router, static generation for project case studies)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with CSS-variable-based design tokens (light/dark mode)
- **Animation:** Framer Motion (`Reveal` scroll-in components, hero entrance)
- **Components:** shadcn/ui-pattern primitives (`Button`, `Card`, `Badge`, `Accordion`) built on Radix UI
- **Icons:** lucide-react
- **Theming:** next-themes (class-based dark mode, system-aware, no flash of wrong theme)

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, featured projects, snapshot, CTA |
| `/about` | Career timeline and personal narrative |
| `/skills` | Skills grouped by category, mapped to projects used in |
| `/projects` | All project cards |
| `/projects/[slug]` | Full case study per project (problem, objective, architecture, workflow, challenges, lessons, future work) |
| `/experience` | Foundever role and transferable skills |
| `/training` | NSTI Chennai AIPA program detail |
| `/education` | B.Tech degree detail |
| `/certifications` | All certifications |
| `/achievements` | Awards and leadership roles |
| `/contact` | Contact form (mailto-based, no backend) and direct contact info |

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm run start
```

## Deploying to Vercel

1. Push this repository to GitHub.
2. Import the repo at https://vercel.com/new.
3. Vercel auto-detects Next.js — no extra configuration needed (`vercel.json` is included for clarity).
4. Set the `NEXT_PUBLIC_SITE_URL` environment variable if you change the domain (used in `data/profile.ts`'s `siteUrl` field — update that value directly, or wire it to an env var, before going live).

## Content

All resume content lives in `/data` as typed TypeScript modules (`profile.ts`, `projects.ts`, `skills.ts`,
`experience.ts`, `achievements.ts`). To update site content, edit these files directly — no CMS is wired up.

## Assets

`/public` contains generated favicon, app icons, and an Open Graph image. Replace `public/resume.pdf`
with an actual exported resume PDF before deploying (the Resume download button on the hero links to
this path).

## SEO

- Per-page metadata via the Next.js Metadata API (`app/**/page.tsx` exports)
- `app/sitemap.ts` and `app/robots.ts` for crawlers
- JSON-LD `Person` structured data in `app/layout.tsx`
- Open Graph + Twitter card metadata, backed by `public/og-image.png`
