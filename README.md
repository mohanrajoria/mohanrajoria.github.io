# Mohan Lal — portfolio

A single-page engineering portfolio built with Next.js 15 (App Router) and TypeScript.
No CSS framework, no component library — one hand-written stylesheet with design tokens,
so there's nothing to fight when you want to change something.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export into ./out
```

## Where things live

```
content/resume.ts      ← all copy, roles, metrics, skills. Edit this, not the JSX.
app/page.tsx           ← page composition
app/globals.css        ← design tokens + every style
app/layout.tsx         ← <head>, fonts, metadata, no-flash theme script
components/ThemeToggle.tsx
public/Mohan_Lal_Resume.pdf
```

Almost every change you'll want to make is in `content/resume.ts`. Add a role to the
`roles` array and it renders with its own expandable case study, outcome figures and
stack chips.

## Design notes

- **Palette** — ink navy base with a periwinkle signal colour (`--sig`), used only for
  numbers, links and focus. Light theme swaps the same tokens. Both live at the top of
  `globals.css`; change `--sig` and the whole site re-tunes.
- **Type** — Instrument Serif for display, Inter for everything else. Loaded from Google
  Fonts via `<link>` in `layout.tsx`.
- **The ledger** — the metric grid under the hero. Your resume is full of measured
  outcomes, so the hero hands those over immediately rather than describing you in
  adjectives.
- **Case studies** — native `<details>`/`<summary>`, so expansion works without
  JavaScript, is keyboard accessible, and is findable by browser find-in-page.
- **Motion** — deliberately minimal: one status pulse and the expand reveal. Everything
  respects `prefers-reduced-motion`.

## Deploy

### Vercel (recommended)

1. Push this folder to a new GitHub repo.
2. On [vercel.com](https://vercel.com) → **Add New → Project** → import the repo.
3. Accept the defaults (Vercel detects Next.js) and deploy. ~40 seconds.
4. Add a custom domain under **Settings → Domains**.

Or from the terminal:

```bash
npm i -g vercel
vercel        # preview
vercel --prod # production
```

### GitHub Pages

A workflow is included at `.github/workflows/deploy.yml`.

1. Create a repo and push this folder to its `main` branch.
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push again (or run the workflow from the Actions tab). The site goes live at
   `https://<user>.github.io/<repo>/`, or at `https://<user>.github.io/` if the repo
   is named `<user>.github.io`. The base path is worked out automatically.

### Anything else

`npm run build` writes a fully static site to `out/`. Drop that folder on Netlify,
Cloudflare Pages, GitHub Pages or S3 — no server required.

> If you later add API routes, server actions or ISR, remove `output: "export"` from
> `next.config.mjs` and deploy on Vercel.

## Before you go live

- [ ] Set your real domain in `SITE` at the top of `app/layout.tsx` (drives OG tags).
- [ ] Add `public/og.png` (1200×630) and reference it in `metadata.openGraph.images`.
- [ ] Replace `public/Mohan_Lal_Resume.pdf` whenever the resume changes.
- [ ] Decide whether to keep your phone number off the public site (it currently is off —
      email and LinkedIn only, which is the safer default against scrapers).
