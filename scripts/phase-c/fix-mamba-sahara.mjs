// Moves the Mamba Sahara Fat-Tyre E-Bike (2026) out of "Racks, Bags & Trailers" into "Fat-Tyre & Scrambler E-Bikes", makes it indexable,
// moves its SEO entry and register rows to the new URL, adds a 308 redirect from the old URL, and rewrites its copy to the fat-tyre template.
// Usage: node scripts/phase-c/fix-mamba-sahara.mjs [--dry]   (then: node scripts/refresh-derived-copy.mjs --apply to recompute counts and neighbours)
import fs from 'node:fs'
const DRY = process.argv.includes('--dry')
const NL = String.fromCharCode(10)
const SLUG = 'mamba-sahara-fat-tyre-e-bike-2026', OLD_CAT = 'racks-bags-and-trailers', NEW_CAT = 'fat-tyre-and-scrambler-e-bikes'
const oldUrl = `/shop/${OLD_CAT}/${SLUG}/`, newUrl = `/shop/${NEW_CAT}/${SLUG}/`
const out = {}
const readJ = f => JSON.parse(fs.readFileSync(f, 'utf8'))
const put = (f, s) => { out[f] = s }

// 1. catalogue
const cf = 'src/config/catalog-products.generated.js'
const ct = fs.readFileSync(cf, 'utf8')
const cat = JSON.parse(ct.slice(ct.indexOf('[', ct.indexOf('=')), ct.lastIndexOf(']') + 1))
const p = cat.find(x => x.slug === SLUG)
if (!p || p.category !== OLD_CAT) throw new Error('product not in the expected category')
p.category = NEW_CAT
p.shortDescription = p.shortDescription.replace('racks, bags & trailers', 'fat-tyre & scrambler e-bikes')
p.description = p.description.replace('Racks, Bags & Trailers range', 'Fat-Tyre & Scrambler E-Bikes range')
put(cf, ct.slice(0, ct.indexOf('export const CATALOG_PRODUCTS')) + 'export const CATALOG_PRODUCTS = ' + JSON.stringify(cat) + NL)

// 2. indexable
const nf = 'src/config/noindex-products.json'
put(nf, JSON.stringify(readJ(nf).filter(s => s !== SLUG)))

// 3. SEO entry: new key, fat-tyre wording, primary keyword first
const sf = 'src/config/seo.generated.json'
const seo = readJ(sf)
const old = seo[oldUrl]
if (!old) throw new Error('no seo entry at the old url')
delete seo[oldUrl]
const name = p.name, price = '$' + Math.round(p.price).toLocaleString('en-AU')
seo[newUrl] = {
  title: `${name} — Buy in Australia`,
  h1: `${name} — shipped Australia-wide`,
  meta: `${name}: fat-tyre & scrambler e-bike from ${price} at Torque E-Bikes. Shipped Australia-wide from Brisbane. Ask the team on WhatsApp. Order now.`,
  alt: `${name} — fat-tyre & scrambler e-bikes side view`,
  kw: ['mamba sahara', 'mamba sahara ebike', 'mamba sahara fat tyre', 'mamba sahara 2025', 'mamba sahara 2024'],
}
put(sf, JSON.stringify(seo))

// 4. register rows: new URL, primary = the highest-volume keyword
const rf = 'docs/used-keywords.csv'
const lines = fs.readFileSync(rf, 'utf8').split(/\r?\n/)
const res = lines.map(l => {
  if (!l.startsWith(oldUrl + ',')) return l
  const parts = l.split(',')
  parts[0] = newUrl
  const kw = parts[3]
  parts[2] = kw === 'mamba sahara' ? 'primary' : 'secondary'
  return parts.join(',')
})
put(rf, res.join(NL))

// 5. redirect from the old URL
const rd = 'src/config/product-redirects.generated.json'
const red = readJ(rd)
if (!red.some(r => r.source === oldUrl.replace(/\/$/, ''))) red.push({ source: oldUrl.replace(/\/$/, ''), destination: newUrl })
put(rd, JSON.stringify(red, null, 1) + NL)

// 6. copy in the fat-tyre template (same wording as the Mamba Kalahari copy), numbers recomputed by refresh-derived-copy afterwards
const cpf = 'src/config/product-copy.generated.json'
const copy = readJ(cpf)
const sib = cat.filter(x => x.category === NEW_CAT).sort((a, b) => a.price - b.price || a.name.localeCompare(b.name))
const i = sib.findIndex(x => x.slug === SLUG)
const ord = n => n + (['th', 'st', 'nd', 'rd'][(n % 100 > 10 && n % 100 < 14) ? 0 : n % 10 < 4 ? n % 10 : 0])
const below = sib[i - 1], above = sib[i + 1]
const lk = x => `[${x.name}](/shop/${NEW_CAT}/${x.slug}/) at ${'$' + Math.round(x.price).toLocaleString('en-AU')}`
const k = copy['mamba-kalahari']
copy[SLUG] = [
  `You can order the ${name} from Torque E-Bikes for ${price} AUD. This fat-tyre e-bike from Mamba is available now, and orders ship Australia-wide from our Brisbane base once freight has been agreed with you. Before you ride it on a public road, confirm that the motor rating and assist behaviour meet your state’s pedal-assist rules, because bikes outside those limits are off-road only.`,
  `Price-wise, the ${name} sits ${ord(i + 1)} out of ${sib.length} in Fat-Tyre & Scrambler E-Bikes, between the ${lk(below)} and the ${lk(above)}. ${k[1].split('Torque E-Bikes lists')[1] ? 'Torque E-Bikes lists' + k[1].split('Torque E-Bikes lists')[1] : ''}`.trim(),
  k[2],
  'Riders often pair it with the [Azur Performance Halo](/shop/lights-and-horns/azur-performance-halo/) ($76) and the [Mastiff Chain-Lock Keyed](/shop/locks-and-security/mastiff-chain-lock-keyed/) ($99), which we can include in the same order and freight booking.',
  k[4],
]
put(cpf, JSON.stringify(copy))

console.log('product', p.slug, '->', p.category, '| rank', i + 1, 'of', sib.length, '| neighbours', below.name, '/', above.name)
if (!DRY) { for (const [f, s] of Object.entries(out)) fs.writeFileSync(f, s); console.log('written', Object.keys(out).length, 'files') } else console.log('dry run')
