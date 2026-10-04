// Visual + behaviour QA for the portfolio. node check.mjs <baseUrl> [outDir]
import { chromium } from 'playwright';
import fs from 'node:fs';
const BASE = (process.argv[2] || 'http://127.0.0.1:4321').replace(/\/$/, '');
const OUT = process.argv[3] || 'shots';
fs.mkdirSync(OUT, { recursive: true });
const b = await chromium.launch(process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {});
const pages = ['/', '/kavvi', '/robotics-corner', '/nope-404'];
const widths = [360, 390, 768, 1280];
const problems = [];
for (const theme of ['light', 'dark']) {
  for (const w of widths) {
    const c = await b.newContext({ viewport: { width: w, height: 900 }, colorScheme: theme, deviceScaleFactor: 1, isMobile: w < 500, hasTouch: w < 500 });
    const p = await c.newPage();
    const errs = [];
    p.on('pageerror', e => errs.push(e.message));
    p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
    for (const path of pages) {
      await p.goto(BASE + path, { waitUntil: 'networkidle' });
      // scroll through so lazy images load
      await p.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 600) { scrollTo(0, y); await new Promise(r => setTimeout(r, 150)); } scrollTo(0, 0); });
      await p.waitForTimeout(900);
      const r = await p.evaluate(() => {
        const out = { sw: document.documentElement.scrollWidth, iw: innerWidth, wide: [], clipped: [], brokenImg: [] };
        for (const e of document.querySelectorAll('body *')) {
          const rc = e.getBoundingClientRect();
          if (rc.width && rc.right > innerWidth + 1 && !e.closest('.scroll')) out.wide.push(e.tagName + '.' + String(e.className).slice(0, 40));
        }
        for (const e of document.querySelectorAll('.btn, .chips li, .status, .label, h1, h2, h3')) {
          if (e.scrollWidth > e.clientWidth + 1 && getComputedStyle(e).overflow !== 'visible') out.clipped.push(e.textContent.trim().slice(0, 40));
        }
        for (const i of document.images) if (i.complete && i.naturalWidth === 0) out.brokenImg.push(i.currentSrc || i.src);
        out.wide = out.wide.slice(0, 5);
        return out;
      });
      const tag = `${path === '/' ? 'home' : path.slice(1)}-${w}-${theme}`;
      if (r.sw > w || r.iw > w) problems.push(`${tag}: horizontal scroll sw=${r.sw} iw=${r.iw} w=${w} ${r.wide.join(' ')}`);
      if (r.clipped.length) problems.push(`${tag}: clipped ${r.clipped.join(' | ')}`);
      if (r.brokenImg.length) problems.push(`${tag}: broken images ${r.brokenImg.join(' ')}`);
      if ((w === 390 || w === 1280) && path !== '/nope-404') await p.screenshot({ path: `${OUT}/${tag}.png`, fullPage: true });
    }
    if (errs.length) problems.push(`${w}-${theme}: console ${[...new Set(errs)].join(' | ')}`);
    await c.close();
  }
}
// theme toggle persists, copy button works
{
  const c = await b.newContext({ colorScheme: 'light', viewport: { width: 1280, height: 800 } });
  await c.grantPermissions(['clipboard-read', 'clipboard-write'], { origin: BASE });
  const p = await c.newPage();
  await p.goto(BASE + '/');
  await p.click('[data-theme-toggle]');
  await p.reload();
  const t = await p.evaluate(() => document.documentElement.dataset.theme);
  if (t !== 'dark') problems.push(`theme toggle did not persist (got ${t})`);
  await p.click('.hero [data-copy]');
  const clip = await p.evaluate(() => navigator.clipboard.readText());
  const label = await p.textContent('.hero [data-copy] span');
  if (!clip.includes('@') || label !== 'Copied') problems.push(`copy email failed (${clip}, ${label})`);
  const nf = await p.goto(BASE + '/nope-404');
  console.log('404 status', nf.status());
  await c.close();
}
await b.close();
console.log(problems.length ? 'PROBLEMS:\n' + problems.join('\n') : 'ALL CHECKS OK');
