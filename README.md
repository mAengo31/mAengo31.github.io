# mingeon.kim

Personal website for Mingeon Kim — founder, research engineer, builder.

Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Dark-mode-first. Static export deployed to GitHub Pages.

## Live

[https://maengo31.github.io](https://maengo31.github.io)

## Project Structure

```
site/                   # Next.js source code
  app/                  # App Router pages and layout
  components/           # React components (Nav, Hero, About, etc.)
  lib/data.ts           # All editable content — projects, timeline, writings, principles
  public/               # Static assets
  deploy.sh             # Build + copy to repo root

index.html              # Built output (served by GitHub Pages)
_next/                  # Built static assets
```

## Development

```bash
cd site
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing Content

All site content lives in `site/lib/data.ts`:

- **Projects** — add/edit entries in the `projects` array
- **Principles** — edit the `principles` array
- **Timeline** — edit the `timeline` array
- **Writing** — add essay entries to the `writings` array
- **Contact info** — edit `siteConfig` at the top

## Deploy

```bash
cd site
bash deploy.sh
cd ..
git add -A && git commit -m "deploy" && git push
```

## Tech

- Next.js 15 (App Router, static export)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Geist font family
