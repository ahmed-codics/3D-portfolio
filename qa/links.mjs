// Check every href/src in the built HTML, plus the banned-phrase list. node links.mjs <distDir> <baseUrl>
import fs from 'node:fs';
import path from 'node:path';
const [dist, base] = process.argv.slice(2);
const files = fs.readdirSync(dist, { recursive: true }).filter(f => f.endsWith('.html')).map(f => path.join(dist, f));
const urls = new Set(); const problems = [];
const banned = [/lead robotics/i, /10\+ engineers/i, /22%/, /50,000/, /kubernetes/i, /300%/, /\bsenior\b/i, /SYS_/, /protocol/i, /lorem/i, /\bTODO\b/, /unlimited/i, /Robotics Corner[^<]{0,40}Present/i];
for (const f of files) {
  const html = fs.readFileSync(f, 'utf8');
  for (const m of html.matchAll(/(?:href|src|poster|data-src)="([^"#]+)/g)) urls.add(m[1]);
  for (const m of html.matchAll(/srcset="([^"]+)"/g)) m[1].split(',').forEach(s => urls.add(s.trim().split(' ')[0]));
  const text = html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, '').replace(/<[^>]+>/g, ' ');
  for (const re of banned) if (re.test(text)) problems.push(`${path.basename(path.dirname(f))}/${path.basename(f)}: banned phrase ${re}`);
}
let checked = 0;
for (const u of urls) {
  if (u.startsWith('mailto:')) continue;
  const full = u.startsWith('http') ? u : new URL(u, base).href;
  try {
    let r = await fetch(full, { method: 'GET', redirect: 'follow', headers: { 'user-agent': 'Mozilla/5.0 link-check' } });
    if (r.status === 999 || (full.includes('linkedin.com') && r.status >= 400)) { console.log(`skip (LinkedIn blocks bots): ${full} ${r.status}`); continue; }
    if (!r.ok) problems.push(`${r.status} ${full}`);
    checked++;
  } catch (e) { problems.push(`ERR ${full} ${e.message}`); }
}
const cv = await fetch(new URL('/Ahmed-Mansour-CV.pdf', base));
console.log('CV content-type:', cv.headers.get('content-type'));
console.log(`checked ${checked} urls in ${files.length} pages`);
console.log(problems.length ? 'PROBLEMS:\n' + problems.join('\n') : 'LINKS + TRUTH OK');
