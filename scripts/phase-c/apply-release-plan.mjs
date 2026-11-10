// Places the approved released keywords on their product pages: register rows (secondary or lsi) and the seo.generated.json kw arrays.
// Source: docs/phase-c/release-plan.csv. Usage: node scripts/phase-c/apply-release-plan.mjs [--dry]
import fs from 'node:fs'
const DRY = process.argv.includes('--dry')
const parse = l => { const o = []; let c = '', q = false; for (const ch of l) { if (ch === '"') q = !q; else if (ch === ',' && !q) { o.push(c); c = '' } else c += ch } o.push(c); return o }
const qcsv = s => (/[",\n]/.test(String(s)) ? '"' + String(s).replace(/"/g, '""') + '"' : String(s))
const regLines = fs.readFileSync('docs/used-keywords.csv', 'utf8').split(/\r?\n/)
const head = regLines[0]
const lines = regLines.slice(1).filter(Boolean)
const reg = lines.map(parse)
const used = new Set(reg.map(r => r[3].toLowerCase()))
const seo = JSON.parse(fs.readFileSync('src/config/seo.generated.json', 'utf8'))
const plan = fs.readFileSync('docs/phase-c/release-plan.csv', 'utf8').split(/\r?\n/).slice(1).filter(Boolean).map(parse)
const stats = { placed: 0, secondary: 0, lsi: 0, dup: 0, secondaryFullToLsi: 0 }, newLines = [], touched = new Set()
const secCount = u => reg.filter(r => r[0] === u && r[2] === 'secondary').length + newLines.filter(l => l[0] === u && l[2] === 'secondary').length
for (const [kw, vol, kd, intent, , to, , role] of plan) {
  if (used.has(kw.toLowerCase())) { stats.dup++; continue }
  let r = role
  if (r === 'secondary' && secCount(to) >= 5) { r = 'lsi'; stats.secondaryFullToLsi++ }
  const hasPrimary = reg.some(x => x[0] === to && x[2] === 'primary') || newLines.some(x => x[0] === to && x[2] === 'primary')
  newLines.push([to, 'product', r, kw, vol, kd, intent, 'semrush-2026-11-10']); used.add(kw.toLowerCase()); touched.add(to)
  stats.placed++; stats[r]++
  if (!hasPrimary && r === 'secondary') newLines[newLines.length - 1][2] = 'primary'
}
let seoChanged = 0
for (const u of touched) {
  const e = seo[u]; if (!e) continue
  const rows = [...reg.filter(r => r[0] === u), ...newLines.filter(r => r[0] === u)]
  const prim = rows.find(r => r[2] === 'primary')
  const kw = [...(prim ? [prim[3]] : []), ...rows.filter(r => r[2] === 'secondary').map(r => r[3])]
  if (JSON.stringify(kw) !== JSON.stringify(e.kw)) { e.kw = kw; seoChanged++ }
}
console.log(JSON.stringify({ ...stats, pages: touched.size, seoKwChanged: seoChanged }))
if (!DRY) {
  fs.writeFileSync('docs/used-keywords.csv', [head, ...lines, ...newLines.map(r => r.map(qcsv).join(','))].join('\n') + '\n')
  fs.writeFileSync('src/config/seo.generated.json', JSON.stringify(seo))
  console.log('written')
}
