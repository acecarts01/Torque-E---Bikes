// Registers the keywords of new blog posts (main, 5 secondaries, 10 tags) in docs/used-keywords.csv with volume, KD and intent from the Semrush pulls.
// Refuses a keyword that is already used on another page, has no data, or breaks KD <= 28. Safe to re-run.
// Usage: node scripts/register-blog-batch.mjs <slug> [<slug> ...]
import fs from 'node:fs'

const NL = String.fromCharCode(10), CR = String.fromCharCode(13)
const SLUGS = process.argv.slice(2)
const parse = s => { const rows = []; let r = [], c = '', q = false; for (let i = 0; i < s.length; i++) { const ch = s[i]; if (q) { if (ch === '"') { if (s[i + 1] === '"') { c += '"'; i++ } else q = false } else c += ch } else if (ch === '"') q = true; else if (ch === ',') { r.push(c); c = '' } else if (ch === NL || ch === CR) { if (ch === CR && s[i + 1] === NL) i++; r.push(c); c = ''; if (r.length > 1 || r[0]) rows.push(r); r = [] } else c += ch } if (c || r.length) { rows.push(r.concat([c])) } return rows }
const tab = f => { const a = parse(fs.readFileSync(f, 'utf8')); const h = a.shift(); return a.map(r => Object.fromEntries(h.map((k, i) => [k, r[i]]))) }
const num = v => { v = String(v || '').replace(/,/g, ''); return /K$/i.test(v) ? parseFloat(v) * 1000 : parseFloat(v) || 0 }
const WORD = { C: 'Commercial', T: 'Transactional', I: 'Informational', N: 'Navigational' }
const data = new Map()
const add = (kw, vol, kd, intent) => { kw = String(kw).toLowerCase().trim(); const it = String(intent).replace(/[^A-Z]/g, ''); if (!kw || !it) return; const e = data.get(kw); if (!e || num(vol) > e.vol) data.set(kw, { vol: num(vol), kd: parseFloat(kd), it }) }
tab('docs/keyword-bank.csv').forEach(r => add(r.keyword, r.volume, r.kd, r.intent))
tab('docs/keyword-gaps.csv').forEach(r => add(r.keyword, r.volume, r.kd, r.intent))
tab('docs/competitor-gaps-untapped-2026-11-04.csv').forEach(r => add(r.keyword, r.volume, r.kd, r.intent))
tab('docs/competitor-gaps-missing-2026-11-04.csv').forEach(r => add(r.keyword, r.volume, r.kd, r.intent))
for (const l of JSON.parse('[' + fs.readFileSync('scripts/.km-cache.jsonl', 'utf8').trim().split(NL).join(',') + ']')) for (const r of l.rows) add(r.kw, r.vol, r.kd, r.intent)
for (const l of fs.readFileSync('docs/semrush-raw/product-adds-2026-11-06.txt', 'utf8').split(NL)) {
  const d = l.split('|').pop(); if (!/:[TC]:/.test(d)) continue
  d.replace(/ \[.*$/, '').split(';').forEach(s => { const m = s.match(/^(.*):([TC]+):([0-9.,K]+):(\d+)$/); if (m) add(m[1], m[3], m[4], m[2]) })
}
// Blog topic pulls of 6 Nov 2026: lines are "keyword|intent|volume|kd" under "#query" headings.
for (const f of fs.readdirSync('docs/semrush-raw').filter(x => /^blog-topics-2026-11-06/.test(x))) {
  for (const l of fs.readFileSync('docs/semrush-raw/' + f, 'utf8').split(NL)) { if (!l || l[0] === '#') continue; const [kw, it, vol, kd] = l.split('|'); if (kw && it) add(kw, vol, kd, it) }
}
const reg = fs.readFileSync('docs/used-keywords.csv', 'utf8')
const regRows = reg.toLowerCase().split(NL).map(l => l.split(','))
const rows = []
for (const slug of SLUGS) {
  const m = (await import('file:///' + process.cwd().replace(/\\/g, '/') + `/src/content/blog/new/${slug}.js`)).meta
  if (reg.includes(m.url + ',blog,')) { console.log('already registered:', m.url); continue }
  const list = [[m.focus, 'primary'], ...m.secondary.map(k => [k, 'secondary']), ...m.tags.map(k => [k, 'tag'])]
  if (list.length !== 16) throw new Error(slug + ': expected 16 keywords, got ' + list.length)
  for (const [kw, role] of list) {
    const d = data.get(kw.toLowerCase())
    if (!d) throw new Error(`no Semrush data for "${kw}" (${slug})`)
    if (d.kd > 28) throw new Error(`KD ${d.kd} above 28: "${kw}"`)
    if (role !== 'tag' && !/^[TC]+$/.test(d.it)) throw new Error(`"${kw}" is ${d.it}, not T/C only (${role})`)
    const clash = regRows.find(r => r[3] === kw.toLowerCase() && r[0] !== m.url)
    if (clash) throw new Error(`"${kw}" already used on ${clash[0]}`)
    if (rows.some(r => r.split(',')[3] === kw.toLowerCase())) throw new Error(`"${kw}" repeated inside this batch`)
    rows.push([m.url, 'blog', role, kw.toLowerCase(), d.vol, d.kd, [...d.it].map(c => WORD[c]).join(' '), 'semrush-2026-11-06'].join(','))
  }
}
if (rows.length) fs.writeFileSync('docs/used-keywords.csv', reg.replace(/\s+$/, '') + NL + rows.join(NL) + NL)
console.log('registered', rows.length, 'rows for', SLUGS.length, 'posts')
