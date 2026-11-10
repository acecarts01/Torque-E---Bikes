// Releases the junk keyword rows (generated, no volume, KD above 28) held by the hidden (noindex) accessory product pages,
// keeps their few real Semrush rows on the page, moves three real rows to indexed pages where they fit, and syncs seo.generated.json.
// Usage: node scripts/phase-c/release-noindex.mjs [--dry]
import fs from 'node:fs'
const DRY = process.argv.includes('--dry')
const parse = l => { const o = []; let c = '', q = false; for (const ch of l) { if (ch === '"') q = !q; else if (ch === ',' && !q) { o.push(c); c = '' } else c += ch } o.push(c); return o }
const qcsv = s => (/[",\n]/.test(String(s)) ? '"' + String(s).replace(/"/g, '""') + '"' : String(s))
const regLines = fs.readFileSync('docs/used-keywords.csv', 'utf8').split(/\r?\n/)
const head = regLines[0]
let rows = regLines.slice(1).filter(Boolean).map(parse)
const noindex = new Set(JSON.parse(fs.readFileSync('src/config/noindex-products.json', 'utf8')))
const hidden = r => /^\/shop\/[^/]+\/[^/]+\/$/.test(r[0]) && noindex.has(r[0].split('/')[3])
const real = r => !/generated/i.test(r[7]) && +r[4] > 0 && +r[5] <= 28
// real rows that fit an indexed page
const MOVE = {
  'sur ron charging': ['/shop/batteries-chargers-and-electronics/sur-ron-60v-10a-charger/', 'secondary'],
  '79 bike falcon pro gt': ['/shop/electric-dirt-bikes/79bike-falcon-pro/', 'secondary'],
  '79bike falcon pro gt': ['/shop/electric-dirt-bikes/79bike-falcon-pro/', 'lsi'],
}
const stats = { junkRemoved: 0, realKept: 0, moved: 0, pagesEmptied: 0, primariesPromoted: 0 }
const touched = new Set()
const out = []
for (const r of rows) {
  if (!hidden(r)) { out.push(r); continue }
  touched.add(r[0])
  if (!real(r)) { stats.junkRemoved++; continue }
  const mv = MOVE[r[3].toLowerCase()]
  if (mv) { out.push([mv[0], 'product', mv[1], r[3], r[4], r[5], r[6], 'semrush-2026-11-10']); touched.add(mv[0]); stats.moved++; continue }
  stats.realKept++; out.push(r)
}
rows = out
// every page that still has rows needs exactly one primary
for (const u of touched) {
  const mine = rows.filter(r => r[0] === u)
  if (!mine.length) { stats.pagesEmptied++; continue }
  if (!mine.some(r => r[2] === 'primary')) {
    const best = mine.filter(r => r[2] === 'secondary').sort((a, b) => +b[4] - +a[4])[0]
    if (best) { best[2] = 'primary'; stats.primariesPromoted++ }
  }
}
// seo kw arrays follow the register (primary then secondaries) for every touched page
const seo = JSON.parse(fs.readFileSync('src/config/seo.generated.json', 'utf8'))
let seoChanged = 0
for (const u of touched) {
  const e = seo[u]; if (!e) continue
  const mine = rows.filter(r => r[0] === u)
  const kw = [...mine.filter(r => r[2] === 'primary').map(r => r[3]), ...mine.filter(r => r[2] === 'secondary').map(r => r[3])]
  if (JSON.stringify(kw) !== JSON.stringify(e.kw)) { e.kw = kw; seoChanged++ }
}
console.log(JSON.stringify({ ...stats, hiddenPages: touched.size, seoKwChanged: seoChanged, registerRowsAfter: rows.length }))
if (!DRY) {
  fs.writeFileSync('docs/used-keywords.csv', [head, ...rows.map(r => r.map(qcsv).join(','))].join('\n') + '\n')
  fs.writeFileSync('src/config/seo.generated.json', JSON.stringify(seo))
  console.log('written')
}
