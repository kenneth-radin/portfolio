# Kenneth Radin — Portfolio (v2)

LinkedIn-style portfolio rebuilt with **Next.js 15 (App Router) + TypeScript + Tailwind CSS v4**.

## Layout

- **Sticky top nav** with section links + Resume button
- **Left sidebar** — profile card (photo, headline, GitHub/LinkedIn/email) and quick contact card
- **Main feed** — About, Projects (card grid with tech tags + repo links), Skills (grouped: Languages / Frontend / Backend & Database / Tools), Certificates (click-to-zoom modal), Education, Contact form

All project/skill/certificate/education data lives in [`lib/data.ts`](lib/data.ts) — edit that single file to update content.

## Develop

```bash
npm install
npm run dev    # http://localhost:3000
```

## Build / Deploy

```bash
npm run build  # static production build
```

Deploy free on [Vercel](https://vercel.com) — just import the repo.

## TODO for you

1. **`lib/data.ts`** — fill in real project descriptions/screenshots, and your Education entry
2. **`public/resume.pdf`** — drop your resume here so the Resume button works
3. **Contact form (optional)** — sign up at [formspree.io](https://formspree.io), then create `.env.local`:
   ```
   NEXT_PUBLIC_FORMSPREE_ID=your_id_here
   ```
   Without it, the form gracefully falls back to opening your mail client.

## Legacy site

The previous HTML/CSS/JS portfolio is preserved in [`legacy/`](legacy/).
