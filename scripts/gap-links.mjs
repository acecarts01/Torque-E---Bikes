// Builds src/config/gap-links.generated.json: planned anchor text for product-page links (source product page -> target URL), from the 2026-11-04 dirt-bike gap batch in docs/link-plan.csv.
// Only rows whose source is a product page are used here; category and brand sources already link to products by product name. Usage: node scripts/gap-links.mjs
import fs from 'node:fs'
const rows = fs.readFileSync('docs/link-plan.csv', 'utf8').split(/\r?\n/).slice(1).filter(Boolean)
const parse = l => { const o = []; let f = '', q = false; for (const c of l) { if (c === '"') q = !q; else if (c === ',' && !q) { o.push(f); f = '' } else f += c } o.push(f); return o }
const gapKw = new Set(fs.readFileSync('docs/used-keywords.csv', 'utf8').split(/\r?\n/).filter(l => l.includes('semrush-keyword-gap-2026-11-04')).map(l => parse(l)[3]))
const out = {}
for (const l of rows) {
  const [target, keyword, anchor, source] = parse(l)
  if (!gapKw.has(keyword) || !/^\/shop\/[^/]+\/[^/]+\/$/.test(source)) continue
  ;(out[source] ||= {})[target] = anchor.replace(/ details and range$/, ' in Australia')
}
fs.writeFileSync('src/config/gap-links.generated.json', JSON.stringify(out, null, 1) + '\n')
console.log(Object.keys(out).length, 'source pages,', Object.values(out).reduce((n, o) => n + Object.keys(o).length, 0), 'links')
