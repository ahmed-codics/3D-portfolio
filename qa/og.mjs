// Render the 1200x630 link-preview image for the portfolio.
import { chromium } from 'playwright';
import fs from 'node:fs';
const fontFile = new URL('../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2', import.meta.url);
const font = 'http://og.local/inter.woff2';
const html = `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face { font-family: Inter; src: url('${font}') format('woff2'); font-weight: 100 900; }
* { box-sizing: border-box; margin: 0; }
body { width: 1200px; height: 630px; background: #f6f5f0; font-family: Inter; color: #16201d; position: relative; overflow: hidden; }
.grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(31,90,66,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(31,90,66,.08) 1px, transparent 1px); background-size: 30px 30px;
  -webkit-mask-image: radial-gradient(ellipse 70% 90% at 85% 15%, #000 20%, transparent 70%); }
.in { position: absolute; inset: 72px 80px; display: flex; flex-direction: column; justify-content: space-between; }
.top { display: flex; align-items: center; gap: 16px; }
.mark { width: 56px; height: 56px; border-radius: 14px; background: #1f5a42; color: #f6f5f0; display: grid; place-items: center; font: 700 20px Consolas, monospace; }
.name { font-size: 28px; font-weight: 650; letter-spacing: -.02em; }
.label { font: 500 17px Consolas, monospace; letter-spacing: .08em; text-transform: uppercase; color: #1f5a42; }
h1 { font-size: 76px; line-height: 1.04; letter-spacing: -.035em; font-weight: 650; max-width: 900px; }
.foot { display: flex; justify-content: space-between; align-items: flex-end; border-top: 1px solid #c4ccc7; padding-top: 22px; font-size: 24px; color: #3e4a46; }
.foot b { color: #16201d; font-weight: 600; }
.url { font: 500 20px Consolas, monospace; color: #66736e; }
</style></head><body><div class="grid"></div><div class="in">
<div class="top"><div class="mark">AM</div><div><div class="name">Ahmed Mansour</div><div class="label">AI &amp; full-stack engineer · open to remote</div></div></div>
<h1>I build AI products and ship them to real users.</h1>
<div class="foot"><div>Built and launched <b>Kavvi</b>, an AI study platform, on my own.</div><div class="url">ahmedmansour.vercel.app</div></div>
</div></body></html>`;
const b = await chromium.launch(process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {});
const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.route('http://og.local/**', r => r.request().url().endsWith('.woff2') ? r.fulfill({ body: fs.readFileSync(fontFile), contentType: 'font/woff2' }) : r.fulfill({ body: html, contentType: 'text/html; charset=utf-8' }));
await p.goto('http://og.local/', { waitUntil: 'load' });
await p.evaluate(() => document.fonts.ready);
console.log('inter loaded', await p.evaluate(() => document.fonts.check('600 20px Inter')));
await p.screenshot({ path: new URL('../public/og.png', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1') });
await b.close();
