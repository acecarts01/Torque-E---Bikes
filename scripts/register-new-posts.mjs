// Adds the new posts' keywords (volume/KD/intent from Semrush AU Keyword Magic, 27 Oct 2026) to docs/used-keywords.csv.
import fs from 'node:fs'
import { NEW_META } from '../src/content/blog/new/index.js'
const sets = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'))
const lookup = {}
for (const s of Object.values(sets)) for (const k of ['main', 'sec', 'tags']) for (const [kw, v, kd, i] of s[k]) lookup[kw] = [v, kd, i]
const csv = fs.readFileSync('docs/used-keywords.csv', 'utf8')
const rows = []
const q = s => (/,/.test(s) ? `"${s}"` : s)
for (const m of NEW_META) {
  if (csv.includes(`${m.url},`)) { console.log('already registered', m.url); continue }
  const add = (kw, role) => { const d = lookup[kw]; if (!d) throw new Error('no data for ' + kw); rows.push([m.url, 'blog', role, kw, d[0], d[1], q(d[2]), 'semrush-keyword-magic-2026-10-27'].join(',')) }
  add(m.focus, 'primary'); m.secondary.forEach(k => add(k, 'secondary')); m.tags.forEach(k => add(k, 'tag'))
}
if (rows.length) fs.appendFileSync('docs/used-keywords.csv', (csv.endsWith('\n') ? '' : '\n') + rows.join('\n') + '\n')
console.log('added', rows.length)
