// After the catalogue changed: (1) refresh the product / model counts in blog related-card notes, (2) add live product cards where a post fell below two product links.
// Usage: node scripts/fix-blog-after-removal.mjs [--apply]
import fs from 'node:fs'

const ROOT = process.cwd().replace(/\\/g, '/') + '/'
const APPLY = process.argv.includes('--apply')
const NL = String.fromCharCode(10)
const { PRODUCTS } = await import('file:///' + ROOT + 'src/config/products.js')
const bySlug = Object.fromEntries(PRODUCTS.map(p => [p.slug, p]))
const count = {}; PRODUCTS.forEach(p => { count[p.category] = (count[p.category] || 0) + 1 })

// [post file, [product slug, note]...]
const ADD = {
  'refresh/helmets-and-protective-gear-for-e-bikes': [['hidrop-helmet-shiny-black', 'A full-coverage style helmet.'], ['79bike-protective-armour', 'Body protection for faster riding.']],
  'refresh/flight-risk-fr505-and-fr555': [['fatboy-scrambler-e-bike', 'Another scrambler-style fat-tyre e-bike.'], ['cruzr-stoke-electric-bike', 'A fat-tyre e-bike in the same range.']],
  'refresh/e-bike-seats-saddles-kickstands-and-mudguards': [['79bike-seat', 'A replacement seat for 79Bike models.'], ['79bike-underseat-plastic', 'Underseat plastic for 79Bike models.']],
  'new/bicycle-gloves': [['79bike-protective-armour', 'Body protection to wear with gloves.'], ['79bike-quick-dry-riding-apparel-set', 'A riding apparel set.']],
  'new/bike-seat-cover': [['79bike-seat', 'A replacement seat for 79Bike models.'], ['79bike-underseat-plastic', 'Underseat plastic for 79Bike models.']],
  'new/flat-pedals': [['79bike-handlebar-grips', 'Grips to match new pedals.']],
  'new/child-bike-seat': [['gobike-12-ebike-for-kids', 'A kids e-bike for when a child outgrows a bike seat.'], ['gobike-16-electric-bike-for-kids', 'A larger kids e-bike.']],
  'new/car-bike-rack': [['car-rack-ezigrip-e-rack-2-deluxe-foldable', 'A foldable car rack in our range.']],
  'new/suspension-seat-post': [['79bike-rear-shock', 'A rear shock for 79Bike models.']],
  'new/bike-repair-stand': [['rock-n-roll-absolute-dry-chain-lube-117ml', 'A chain lube for bench work.']],
}
const files = []
const walk = d => { for (const e of fs.readdirSync(ROOT + d, { withFileTypes: true })) { const p = d + '/' + e.name; if (e.isDirectory()) walk(p); else if (e.name.endsWith('.js')) files.push(p) } }
walk('src/content/blog')
let notes = 0, cards = 0
for (const f of files) {
  let t = fs.readFileSync(ROOT + f, 'utf8'); const orig = t
  // (1) counts in category-card notes
  t = t.split(NL).map(l => {
    const m = l.match(/href: '\/shop\/([^/']+)\/'.*note: '(?:[^']*?)(\d+) (products|models)\.?'/)
    if (!m || !count[m[1]]) return l
    return l.replace(/(note: '[^']*?)(\d+) (products|models)(\.?')/, (mm, a, n, u, z) => `${a}${count[m[1]]} ${u}${z}`)
  }).join(NL)
  if (t !== orig) notes++
  // (2) product cards
  const key = f.replace('src/content/blog/', '').replace('.js', '')
  if (ADD[key]) {
    const marker = NL + '  related: [' + NL
    if (!t.includes(marker)) throw new Error('no related block in ' + key)
    const lines = ADD[key].filter(([s]) => bySlug[s] && !t.includes(`'/shop/${bySlug[s].category}/${s}/'`)).map(([s, note]) => `    { href: '/shop/${bySlug[s].category}/${s}/', name: '${bySlug[s].name.replace(/'/g, "\\'")}', price: ${bySlug[s].price}, note: '${note}' },`)
    if (lines.length) { t = t.replace(marker, () => marker + lines.join(NL) + NL); cards += lines.length }
  }
  if (t !== orig && APPLY) fs.writeFileSync(ROOT + f, t)
}
console.log(APPLY ? 'APPLIED' : 'DRY RUN', '| files with refreshed counts:', notes, '| product cards added:', cards)
