# Ahmed Mansour: portfolio

My portfolio site, live at **[ahmedmansour.vercel.app](https://ahmedmansour.vercel.app)**.

It shows my work as a full-stack and AI engineer: a case study of [Kavvi](https://kavvi.io) (the AI learning platform I built and run), my other live projects, and my experience.

## Built with

- Vite and React 19
- framer-motion for scroll animations, the floating navigation and tilt cards
- A canvas particle network drawn behind the hero
- Plain CSS, deployed on Vercel

## Run it locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build
```

## Structure

- `src/data.js` holds all the content: stats, experience, Kavvi features and projects
- `src/App.jsx` holds the sections
- `src/Network.jsx` is the particle background
- `public/` holds screenshots and the downloadable CV
