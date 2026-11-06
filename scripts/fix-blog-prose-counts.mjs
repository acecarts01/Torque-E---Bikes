// Refreshes catalogue counts and price bounds written into blog prose ("our range has 49 models from $949 to $19,990") after the catalogue changed.
// Usage: node scripts/fix-blog-prose-counts.mjs [--apply]
import fs from 'node:fs'

const ROOT = process.cwd().replace(/\\/g, '/') + '/'
const APPLY = process.argv.includes('--apply')
const { PRODUCTS } = await import('file:///' + ROOT + 'src/config/products.js')
const stat = c => { const l = PRODUCTS.filter(p => p.category === c).map(p => p.price).sort((a, b) => a - b); return { n: l.length, lo: l[0], hi: l[l.length - 1] } }
const money = v => '$' + (Number.isInteger(v) ? v.toLocaleString('en-AU') : v.toFixed(2))

// [file, category, regex, builder(match, stats)]
const RULES = [
  ['new/childs-electric-bike', 'kids-and-youth-e-bikes', /has \d+ models, from/, (m, s) => `has ${s.n} models, from`],
  ['refresh/e-bike-and-dirt-bike-brakes', 'brakes', /has \d+ products from \$[\d,.]+ to \$[\d,.]+/, (m, s) => `has ${s.n} products from ${money(s.lo)} to ${money(s.hi)}`],
  ['refresh/e-bike-grips-pedals-and-handlebar-controls', 'controls-grips-and-pedals', /has \d+ products\./, (m, s) => `has ${s.n} products.`],
  ['refresh/e-bike-seats-saddles-kickstands-and-mudguards', 'seats-fenders-and-body', /has \d+ products including/, (m, s) => `has ${s.n} products including`],
  ['refresh/e-bike-tyres-and-tubes', 'wheels-tyres-and-tubes', /has \d+ products\./, (m, s) => `has ${s.n} products.`],
  ['refresh/electric-balance-bikes', 'kids-electric-dirt-and-balance-bikes', /has \d+ models from \$[\d,.]+ to \$[\d,.]+/, (m, s) => `has ${s.n} models from ${money(s.lo)} to ${money(s.hi)}`],
  ['refresh/kids-electric-dirt-bikes', 'kids-electric-dirt-and-balance-bikes', /has \d+ models from \$[\d,.]+ to \$[\d,.]+/, (m, s) => `has ${s.n} models from ${money(s.lo)} to ${money(s.hi)}`],
  ['refresh/electric-cargo-bikes', 'cargo-bikes-and-e-trikes', /has \d+ cargo bikes and e-trikes, starting at \$[\d,.]+/, (m, s) => `has ${s.n} cargo bikes and e-trikes, starting at ${money(s.lo)}`],
  ['refresh/electric-mountain-bike-buying-guide', 'electric-mountain-bikes', /has \d+ models, starting at \$[\d,.]+/, (m, s) => `has ${s.n} models, starting at ${money(s.lo)}`],
  ['refresh/electric-vs-petrol-dirt-bikes', 'electric-dirt-bikes', /has \d+ models from \$[\d,.]+ to \$[\d,.]+/, (m, s) => `has ${s.n} models from ${money(s.lo)} to ${money(s.hi)}`],
  ['refresh/fat-tyre-e-bikes', 'fat-tyre-and-scrambler-e-bikes', /has \d+ models from \$[\d,.]+/, (m, s) => `has ${s.n} models from ${money(s.lo)}`],
  ['refresh/folding-electric-bikes', 'folding-e-bikes', /has \d+ folding e-bikes from \$[\d,.]+ to \$[\d,.]+/, (m, s) => `has ${s.n} folding e-bikes from ${money(s.lo)} to ${money(s.hi)}`],
  ['refresh/helmets-and-protective-gear-for-e-bikes', 'helmets-gloves-and-protection', /protection range has \d+ products/, (m, s) => `protection range has ${s.n} products`],
]
let changed = 0
for (const [file, cat, re, build] of RULES) {
  const f = ROOT + `src/content/blog/${file}.js`
  const t = fs.readFileSync(f, 'utf8')
  if (!re.test(t)) { console.log('NO MATCH', file); continue }
  const out = t.replace(re, m => build(m, stat(cat)))
  if (out !== t) { changed++; if (APPLY) fs.writeFileSync(f, out) }
  console.log(file.padEnd(60), t.match(re)[0], '->', build(null, stat(cat)))
}
console.log(APPLY ? 'APPLIED' : 'DRY RUN', changed, 'files')
