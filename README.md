# FlowChain — Animation showcase

A single-page marketing site for **FlowChain**, a fictional supply-chain and embedded-finance platform. Built to demonstrate **GSAP**, **ScrollTrigger**, and polished **CSS** motion on a dark, premium fintech aesthetic—suitable as portfolio proof for animation-heavy frontend roles.

## Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **GSAP 3** (including ScrollTrigger)

No Framer Motion—animations are GSAP-first with `prefers-reduced-motion` respected.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`  | Dev server (Turbopack)   |
| `npm run build`| Production build         |
| `npm run start`| Serve production build   |
| `npm run lint` | ESLint                   |

## Deploy to Vercel

1. Push this folder to a Git repository (GitHub, GitLab, or Bitbucket).
2. Import the repo in [Vercel](https://vercel.com/new).
3. Use defaults: **Framework Preset: Next.js**, **Build Command:** `npm run build`, **Output:** Next.js default.

Alternatively, with the [Vercel CLI](https://vercel.com/docs/cli):

```bash
npm i -g vercel
vercel
```

## App routes

| Path | Purpose |
|------|--------|
| `/` | Marketing landing |
| `/get-started` | Onboarding steps + links to signup & demo |
| `/demo` | Request demo / strategy session (form; `?intent=strategy` preselects session type) |
| `/signup` | Create workspace |
| `/login` | Sign in |

Forms are client-side only (success states for portfolio demo)—wire to your API when deploying.

## Project structure

- `src/app/` — App Router layout, global styles, home page composition
- `src/components/` — Shell UI (navbar, intro loader, mouse glow, scroll refresh)
- `src/sections/` — Page sections (hero, flows, features, dashboard mock, metrics, CTA)
- `src/lib/gsap-client.ts` — Client-only GSAP + ScrollTrigger registration
- `src/hooks/usePrefersReducedMotion.ts` — Accessibility hook for motion

## Notes

- **FlowChain** and metrics are fictional; the footer states the page is for portfolio use.
- Contact links use placeholder `hello@flowchain.example`—replace for production.
- Animations refresh on window resize via `GsapScrollRefresh` so ScrollTrigger stays aligned after layout changes.

## License

Private / portfolio use. Adjust as needed for your application materials.
