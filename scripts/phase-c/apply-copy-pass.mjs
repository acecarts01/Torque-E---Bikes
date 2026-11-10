// Copy pass for the released keywords: adds ONE factual sentence to the second paragraph of each destination product's copy,
// using up to two of its newly placed keywords verbatim (brand names in proper case). No claims beyond what the site already states:
// Torque E-Bikes ships Australia-wide from Brisbane and confirms freight and timing before payment.
// Usage: node scripts/phase-c/apply-copy-pass.mjs [--dry]
import fs from 'node:fs'
const DRY = process.argv.includes('--dry')
const parse = l => { const o = []; let c = '', q = false; for (const ch of l) { if (ch === '"') q = !q; else if (ch === ',' && !q) { o.push(c); c = '' } else c += ch } o.push(c); return o }
const m = fs.readFileSync('src/config/catalog-products.generated.js', 'utf8')
const cat = JSON.parse(m.slice(m.indexOf('[', m.indexOf('=')), m.lastIndexOf(']') + 1))
const bySlug = Object.fromEntries(cat.map(p => [p.slug, p]))
const copy = JSON.parse(fs.readFileSync('src/config/product-copy.generated.json', 'utf8'))
const plan = fs.readFileSync('docs/phase-c/release-plan.csv', 'utf8').split(/\r?\n/).slice(1).filter(Boolean).map(parse)
const by = {}
for (const [kw, vol, kd, intent, , to, , role] of plan) { const slug = to.split('/')[3]; (by[slug] = by[slug] || []).push({ kw, vol: +vol, role }) }
// the keyword starts with the normalised brand (checked before use): write that part with the brand's own capitalisation
const properCase = (kw, brand) => {
  const nb = brand.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim()
  return (brand + kw.slice(nb.length)).replace(/\baustralia\b/g, 'Australia')
}
let edited = 0, skipped = 0
const log = []
for (const [slug, ks] of Object.entries(by)) {
  const p = bySlug[slug], paras = copy[slug]
  if (!p || !paras || paras.length < 2) { skipped++; continue }
  if (/Searching for /.test(paras[1])) { skipped++; continue }
  // prefer secondary (T/C) keywords, then the highest volume; avoid near-duplicates and review-style phrases
  const nb = p.brand.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim()
  const natural = k => {
    const w = k.kw.split(' ')
    if (/\b(review|parts|photos|charger|cheap|mini|top|speed|price)\b/.test(k.kw) || w.length < 2 || w.length > 4) return false
    if (['mountain', 'kit', 'bike'].includes(w[w.length - 1]) && w.length > 2 && w[w.length - 1] !== 'bike') return false
    if (!k.kw.startsWith(nb)) return false                     // starts with the brand exactly (no misspellings, no odd word order)
    if (/\b(mountain|mtb|emtb)\b/.test(k.kw) && !/(mountain|mtb|emtb)/.test(p.category)) return false // keyword about another bike type
    return true
  }
  const chosen = [...ks].filter(natural).sort((a, b) => (b.role === 'secondary') - (a.role === 'secondary') || b.vol - a.vol).slice(0, 1)
  if (!chosen.length) { skipped++; log.push(slug + ' <- (no natural phrase, left unchanged)'); continue }
  const phrase = chosen.map(k => properCase(k.kw, p.brand)).join(' or ')
  const sentence = ` Searching for ${phrase}? Torque E-Bikes ships the ${p.name} Australia-wide from Brisbane, and the team confirms freight and timing with you before payment.`
  paras[1] = paras[1].replace(/\s*$/, '') + sentence
  edited++; log.push(slug + ' <- ' + phrase)
}
console.log(JSON.stringify({ edited, skipped }))
console.log(log.join('\n'))
if (!DRY) { fs.writeFileSync('src/config/product-copy.generated.json', JSON.stringify(copy)); console.log('written') }
