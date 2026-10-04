# ahmedmansour.vercel.app

Personal site of Ahmed Mansour, AI & full-stack engineer. A static [Astro](https://astro.build) site with no client framework. It ships about 2 KB of its own JavaScript, for the theme toggle, the copy-email button and the lazy video.

## Run it

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview
```

Node 22.12 or newer.

## Where things are

| Path | What |
|---|---|
| `src/data/` | All facts: contact links, Kavvi figures (`stats.ts`), experience, skills. Keep them identical to the CV. |
| `src/pages/` | Home, the `/kavvi` and `/robotics-corner` case studies, 404 |
| `src/components/` | Header, browser/phone frames, copy-email, architecture diagram |
| `src/styles/global.css` | Design tokens (light and dark) and shared styles |
| `src/assets/work/` | Screenshots (served as AVIF/WebP at several widths) |
| `public/` | CV PDF, launch video, favicon, `og.png` link preview |
| `vercel.json` | Astro preset, old-CV-link redirects, cache headers |

## Keeping it true

Every number or claim on the site must appear in the CV or come from a dated query. When the Kavvi figures change:
1. Update `src/data/stats.ts` (`asOf` too).
2. Update the CV to the same numbers and replace `public/Ahmed-Mansour-CV.pdf`.

## QA (needs a Playwright install: `npm i -D playwright` or set `CHROME_PATH`)

```sh
node qa/check.mjs http://127.0.0.1:4321 qa/shots   # no sideways scroll or clipped text at 360-1280px, light and dark; theme toggle; copy button
node qa/links.mjs dist http://127.0.0.1:4321        # every link resolves; banned-claims scan
node qa/og.mjs                                      # re-render public/og.png
```

The previous 3D "terminal" version is kept at git tag `v1-terminal`.
