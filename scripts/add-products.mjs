// Adds the products in scripts/new-products.json (and the three new scooter / go-kart categories) to the site.
// Prices: 5% under the supplier feed price. Keywords: Semrush only, T/C intent only, KD <= 28, volume > 0, unused on the site.
// Usage: node scripts/add-products.mjs <feed.json>            (dry run)
//        node scripts/add-products.mjs <feed.json> --apply
import fs from 'node:fs'

const ROOT = process.cwd().replace(/\\/g, '/') + '/'
const APPLY = process.argv.includes('--apply')
const FEED = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'))
const NL = String.fromCharCode(10), CR = String.fromCharCode(13)
const read = f => fs.readFileSync(ROOT + f, 'utf8')
const write = (f, s) => { if (APPLY) fs.writeFileSync(ROOT + f, s) }
const aud = n => '$' + Math.round(n).toLocaleString('en-AU')
const ord = n => n + (['th', 'st', 'nd', 'rd'][(n % 100 > 10 && n % 100 < 14) ? 0 : n % 10 < 4 ? n % 10 : 0])
const SRC = 'semrush-2026-11-06'

const parse = s => { const rows = []; let r = [], c = '', q = false; for (let i = 0; i < s.length; i++) { const ch = s[i]; if (q) { if (ch === '"') { if (s[i + 1] === '"') { c += '"'; i++ } else q = false } else c += ch } else if (ch === '"') q = true; else if (ch === ',') { r.push(c); c = '' } else if (ch === NL || ch === CR) { if (ch === CR && s[i + 1] === NL) i++; r.push(c); c = ''; if (r.length > 1 || r[0]) rows.push(r); r = [] } else c += ch } if (c || r.length) { r.push(c); rows.push(r) } return rows }
const tab = f => { const a = parse(read(f)); const h = a.shift(); return a.map(r => Object.fromEntries(h.map((k, i) => [k, r[i]]))) }
const num = v => { v = String(v || '').replace(/,/g, ''); return /K$/i.test(v) ? parseFloat(v) * 1000 : parseFloat(v) || 0 }

// ---------- keyword pool (strict: T and/or C only, KD<=28, volume>0, not used on the site)
const used = new Set(read('docs/used-keywords.csv').toLowerCase().split(NL).map(l => (l.split(',')[3] || '').trim()))
const pool = new Map()
const add = (kw, vol, kd, intent) => {
  kw = String(kw).toLowerCase().trim(); vol = num(vol); kd = parseFloat(kd)
  if (!kw || vol <= 0 || isNaN(kd) || kd > 28 || !/^[TC]+$/.test(String(intent).replace(/[^A-Z]/g, '')) || used.has(kw) || /segw-|jbhifi|^[0-9]/.test(kw)) return
  const e = pool.get(kw); if (!e || vol > e.vol) pool.set(kw, { kw, vol, kd, intent: String(intent).replace(/[^A-Z]/g, '') })
}
tab('docs/keyword-bank.csv').forEach(r => add(r.keyword, r.volume, r.kd, r.intent))
tab('docs/keyword-gaps.csv').forEach(r => add(r.keyword, r.volume, r.kd, r.intent))
tab('docs/competitor-gaps-untapped-2026-11-04.csv').forEach(r => add(r.keyword, r.volume, r.kd, r.intent))
tab('docs/competitor-gaps-missing-2026-11-04.csv').forEach(r => add(r.keyword, r.volume, r.kd, r.intent))
for (const l of read('docs/semrush-raw/product-adds-2026-11-06.txt').split(NL)) {
  const data = l.split('|').pop(); if (!/:[TC]:/.test(data)) continue
  data.replace(/ \[.*$/, '').split(';').forEach(s => { const m = s.match(/^(.*):([TC]+):([0-9.,K]+):(\d+)$/); if (m) add(m[1], m[3], m[4], m[2]) })
}
// fresh Groups-view pulls of 6 Nov 2026 (model rows only)
const EXTRA = 'segway f3 pro:C:720:20;f3 pro:C:390:16;zt3 pro scooter:C:320:18;segway zt3 pro e-scooter:C:260:17;segway zt3 pro electric scooter:C:260:17;segway ninebot zt3 pro:C:140:16;ninebot zt3:C:90:17;segway zt3 pro electric kick scooter:C:90:11;segway electric kickscooter e2 pro:C:590:23;e2 pro e scooter:C:390:17;segway c2 pro:C:480:14;ninebot c2 pro:C:260:23'
EXTRA.split(';').forEach(s => { const m = s.match(/^(.*):([TC]+):([0-9.,K]+):(\d+)$/); add(m[1], m[3], m[4], m[2]) })
const taken = new Set()
const pick = (re, not, n = 6) => {
  const R = new RegExp(re, 'i'), N = not ? new RegExp(not, 'i') : null
  const out = [...pool.values()].filter(e => R.test(e.kw) && !(N && N.test(e.kw)) && !taken.has(e.kw)).sort((a, b) => b.vol - a.vol || (a.intent === 'T' ? -1 : 1)).slice(0, n)
  out.forEach(e => taken.add(e.kw))
  return out
}

// ---------- catalogue
const catMod = await import('file:///' + ROOT + 'src/config/catalog-products.generated.js')
const cats0 = (await import('file:///' + ROOT + 'src/config/catalog.generated.js')).CATALOG_CATEGORIES
const specs = JSON.parse(read('scripts/new-products.json'))
const GROUP = 'Scooters & Karts'
const CATS = {
  'electric-scooters': { name: 'Electric Scooters', kind: 'electric scooters', kws: ['^(cheap e scooter|best electric scooter( australia)?|electric kick scooter|adult electric scooter|electric scooter for adults|electric scooters for adults|e scooter price|electric scooter price|electric scooter for sale|electric scooters for sale|cheap electric scooters?|best e scooter)$'], notRe: 'seat|kid|child|moped|segway|ninebot|dragon' },
  'kids-electric-scooters': { name: 'Kids Electric Scooters', kind: 'kids electric scooters', kws: ['(kid|child|junior|teen)'], notRe: 'moped|motorcycle|go ?kart|dirt|bike|helmet|ride shotgun|segway|ninebot|gyroor' },
  'electric-go-karts': { name: 'Electric Go-Karts', kind: 'electric go-karts', kws: ['go ?kart|go ?cart|gokart|e go kart|electric karts?'], notRe: 'segway|gokart pro|adelaide|melbourne|drift' },
}
const products = []
for (const s of specs) {
  const f = FEED.find(p => p.handle === s.feed)
  if (!f) throw new Error('feed item missing: ' + s.feed)
  const pedl = parseFloat(f.variants[0].price)
  const imgs = []; for (let i = 1; i <= 4; i++) if (fs.existsSync(ROOT + `public/products/${s.slug}-${i}.webp`)) imgs.push(`/products/${s.slug}-${i}.webp`)
  if (!imgs.length) { console.log('SKIP (no clean photo):', s.slug); continue }
  products.push({
    slug: s.slug, name: s.name, brand: s.brand, price: Math.round(pedl * 0.95), comparePrice: Math.round(pedl), bestPrice: true, category: s.category,
    shortDescription: `${s.brand} ${s.name.replace(new RegExp('^' + s.brand + '\\s*', 'i'), '')} — ${CATS[s.category].kind} with Australia-wide delivery.`,
    description: `${s.name} from ${s.brand}, supplied by Torque E-Bikes in the ${CATS[s.category].name} range. ${s.offroad ? 'Off-road / private property use only — not registrable or road legal in Australia.' : 'Rules for e-scooters differ between states and territories, so check your state road authority before riding on public paths or roads.'} Specifications are those published by the manufacturer; contact us to confirm stock and delivery to your postcode.`,
    compliance: s.offroad ? 'off-road' : '', badge: '', power: 'N/A', voltage: 'N/A', compatibility: [], featured: false, images: imgs, stock: 'In Stock', _spec: s,
  })
}
const existing = new Set(catMod.CATALOG_PRODUCTS.map(p => p.slug))
if (products.some(p => existing.has(p.slug))) throw new Error('a new product slug already exists')
const all = [...catMod.CATALOG_PRODUCTS, ...products.map(({ _spec, ...p }) => p)]
const byCat = c => all.filter(p => p.category === c).sort((a, b) => a.price - b.price)
const median = a => a[Math.floor(a.length / 2)].price

// ---------- keyword packages
const reg = []
const kwOf = {}
for (const p of products) {
  const pk = pick(p._spec.kw, p._spec.kwNot, 6)
  kwOf[p.slug] = pk
}
const seoNew = {}, faqNew = {}, copyNew = {}
const url = p => `/shop/${p.category}/${p.slug}/`
const helmets = all.filter(p => p.category === 'helmets-gloves-and-protection').sort((a, b) => a.price - b.price)
const locks = all.filter(p => p.category === 'locks-and-security').sort((a, b) => a.price - b.price)
const link = p => `[${p.name}](${url(p)}) (${aud(p.price)})`
for (const p of products) {
  const s = p._spec, c = CATS[p.category], list = byCat(p.category), idx = list.findIndex(x => x.slug === p.slug)
  const nb = [list[idx - 1], list[idx + 1]].filter(Boolean)
  const brandCount = all.filter(x => x.brand === p.brand).length
  const rules = s.offroad
    ? 'Please note it is off-road equipment for private property: it is not road legal in Australia and is not registrable, so check where you can ride it before ordering.'
    : 'Rules for e-scooters differ between states and territories, covering speed, power, rider age and where you may ride, so check your state road authority before riding on public paths or roads.'
  const check = p.category === 'kids-electric-scooters'
    ? 'Before you buy a kids electric scooter, check the maker’s age and weight limits; how fast it goes and whether the speed can be limited; and how the folding and braking work for a child. Fit a helmet and supervise young riders. We list the specification we hold on the product page, and we will chase the maker for anything missing.'
    : p.category === 'electric-go-karts'
      ? 'Before you buy an electric go-kart, check the rider weight and height limits; the battery capacity and charging time; and where you will drive it, because it is for private property only. We list the specification we hold on the product page, and we will chase the maker for anything missing.'
      : 'Before you buy an electric scooter like this, compare the claimed range with your daily trip; the motor rating and the tyre and suspension type; and the weight you will need to carry or lift. We list the specification we hold on the product page, and we will chase the maker for anything missing.'
  const comp = [helmets[0], locks[0]].filter(Boolean)
  const paras = [
    `You can order the ${p.name} from Torque E-Bikes for ${aud(p.price)} AUD. This ${s.kind} from ${p.brand} is available now, and orders ship Australia-wide from our Brisbane base once freight has been agreed with you. ${rules}`,
    `In our ${c.name} range of ${list.length} product${list.length > 1 ? 's' : ''} it is the ${ord(idx + 1)} lowest priced${nb.length ? `, next to ${nb.map(x => `the [${x.name}](${url(x)}) at ${aud(x.price)}`).join(' and ')}` : ''}. Torque E-Bikes lists ${brandCount} ${p.brand} product${brandCount > 1 ? 's' : ''}, and you can browse the range in the [${c.name}](/shop/${p.category}/) category.`,
    check,
    comp.length ? `Good companions for it include the ${comp.map(link).join(' and the ')}, and adding them to one order saves a second delivery.` : 'We can add accessories to the same order and freight booking.',
    ...(s.facts ? [`From the supplier’s listing of the maker’s specifications (read 6 Nov 2026), the ${p.name} ${/^(riders|a rider range)/.test(s.facts) ? 'is listed for' : 'has'} ${s.facts}`] : []),
    'You can pay by bank transfer, PayID or crypto (10% off for crypto), subject to the $499.99 minimum order, or message the team on WhatsApp on 0480 804 189 for a quote.',
  ]
  copyNew[p.slug] = paras
  const kw = kwOf[p.slug].map(e => e.kw)
  seoNew[url(p)] = {
    title: `${p.name} — Buy in Australia`.slice(0, 60),
    h1: `${p.name} — shipped Australia-wide`,
    meta: `${p.name}: ${s.kind} from ${aud(p.price)} at Torque E-Bikes. Shipped Australia-wide from Brisbane. Order now.`,
    alt: `${p.name} — ${c.name.toLowerCase()} side view`,
    kw,
  }
  faqNew[url(p)] = [{ q: `How much is the ${p.name} in Australia?`, a: `The ${p.name} from ${p.brand} costs ${aud(p.price)} AUD, listed in our ${c.name} range. Paying by crypto takes 10% off the order total.` }]
  kwOf[p.slug].forEach((e, i) => reg.push([url(p), 'product', i === 0 ? 'primary' : 'secondary', e.kw, e.vol, e.kd, e.intent === 'T' ? 'Transactional' : e.intent === 'C' ? 'Commercial' : 'Transactional', SRC].join(',')))
}

// ---------- categories
const catEntries = [], catCopy = {}, catSeo = {}, catFaq = {}
for (const [slug, c] of Object.entries(CATS)) {
  const list = byCat(slug)
  if (!list.length) continue
  const brands = {}; list.forEach(p => { brands[p.brand] = (brands[p.brand] || 0) + 1 })
  const brandTxt = Object.entries(brands).sort((a, b) => b[1] - a[1]).map(([b, n]) => `${b} (${n})`).join(' and ')
  const kws = pick(CATS[slug].kws[0], CATS[slug].notRe, 14)
  const low = list[0].price, high = list[list.length - 1].price
  const rule = slug === 'electric-go-karts'
    ? 'Go-karts are for private property use only in Australia and are not road legal or registrable.'
    : slug === 'kids-electric-scooters'
      ? 'Check the maker’s age and weight limits, fit a helmet and supervise young riders; rules on where e-scooters may be ridden differ between states and territories.'
      : 'Rules for e-scooters differ between states and territories, including limits on speed, power, rider age and where you can ride, so check your state road authority before riding on public paths or roads.'
  catCopy[slug] = [
    `Torque E-Bikes lists ${list.length} ${c.kind}, priced from ${aud(low)} to ${aud(high)} with a typical price near ${aud(median(list))}. Brands include ${brandTxt}, with the number of products in brackets. Every price is in Australian dollars, and orders ship Australia-wide from Brisbane with freight confirmed before payment.`,
    `${rule} When you compare ${c.kind} in this range, look at the claimed range against your usual trip, the motor rating, the tyre and brake type, and the weight you will need to lift. The team can confirm stock and the total cost to your postcode before you order.`,
  ]
  catEntries.push({ slug, name: c.name, group: GROUP, description: `Shop ${list.length} ${c.kind} from leading brands. Australia-wide shipping from Brisbane, with Class 9 DG certified battery freight.`, image: list[0].images[0], count: list.length })
  const primary = kws[0] ? kws[0].kw : c.name.toLowerCase()
  const T = primary.replace(/\b\w/g, m => m.toUpperCase())
  catSeo[`/shop/${slug}/`] = {
    title: `${c.name} — ${T}`.slice(0, 60), h1: `${c.name} in Australia — ${list.length} product${list.length > 1 ? 's' : ''}`,
    meta: `${primary}: shop ${list.length} ${c.kind} from ${aud(low)} to ${aud(high)} across ${Object.keys(brands).length} brand${Object.keys(brands).length > 1 ? 's' : ''}. Shipped Australia-wide from Brisbane. Shop now.`.slice(0, 160),
    alt: `${primary} — ${c.name} range at Torque E-Bikes`, kw: kws.map(e => e.kw),
  }
  catFaq[`/shop/${slug}/`] = [
    { q: `What ${c.kind} does Torque E-Bikes list?`, a: `Torque E-Bikes currently lists ${list.length} ${c.kind}, priced from ${aud(low)} to ${aud(high)} with a typical price near ${aud(median(list))}. Every price is in Australian dollars and shown on the product page, and the team can confirm stock and total cost before you order.` },
    { q: `Does Torque E-Bikes ship ${c.kind} across Australia?`, a: `Yes. We ship ${c.kind} Australia-wide from Brisbane, and shipping is 10% of the order total (free from $9,900) and the team confirms delivery timing with you before dispatch. Message the team on WhatsApp with your postcode and the products you want for a firm quote.` },
  ]
  kws.forEach((e, i) => reg.push([`/shop/${slug}/`, 'category', i === 0 ? 'primary' : 'secondary', e.kw, e.vol, e.kd, e.intent === 'T' ? 'Transactional' : 'Commercial', SRC].join(',')))
}

// ---------- brand hub for any brand that now reaches 5 products and has no hub yet
const seoNow = JSON.parse(read('src/config/seo.generated.json')), faqNow = JSON.parse(read('src/config/faq.generated.json'))
const brandCounts = {}; all.filter(p => p.brand && p.brand !== 'TBC').forEach(p => { brandCounts[p.brand] = (brandCounts[p.brand] || 0) + 1 })
const slugify = s => s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
const hubSeo = {}, hubFaq = {}
for (const [b, n] of Object.entries(brandCounts)) {
  const bs = slugify(b); if (n < 5 || seoNow[`/brands/${bs}/`]) continue
  const items = all.filter(p => p.brand === b).sort((a, c) => a.price - c.price)
  const kws = pick(`^${b.toLowerCase()} (scooter|scooters|e scooter|e scooters|e bike|electric scooter|electric scooters)$|^electric scooter ${b.toLowerCase()}$`, null, 8)
  const catsOf = [...new Set(items.map(p => p.category))]
  hubSeo[`/brands/${bs}/`] = { title: `${b} Scooters & E-Bikes — ${n} Models`.slice(0, 60), h1: `${b} in Australia — ${n} products`, meta: `${kws[0] ? kws[0].kw : b + ' range'}: shop ${n} ${b} products from ${aud(items[0].price)}. Shipped Australia-wide from Brisbane. Browse the range.`.slice(0, 160), alt: `${kws[0] ? kws[0].kw : b} — ${b} range at Torque E-Bikes`, kw: kws.map(e => e.kw) }
  hubFaq[`/brands/${bs}/`] = [
    { q: `Which ${b} products does Torque E-Bikes sell?`, a: `Torque E-Bikes lists ${n} ${b} products across ${catsOf.length} categories. Open a product page for specifications and the current price in Australian dollars. The team can confirm details on WhatsApp.` },
    { q: `Does Torque E-Bikes ship ${b} products Australia-wide?`, a: `Yes. ${b} products ship Australia-wide from Brisbane, and shipping is 10% of the order total (free from $9,900) with delivery timing confirmed before dispatch. Message the team on WhatsApp for a quote.` },
  ]
  kws.forEach((e, i) => reg.push([`/brands/${bs}/`, 'brand-hub', i === 0 ? 'primary' : 'secondary', e.kw, e.vol, e.kd, e.intent === 'T' ? 'Transactional' : 'Commercial', SRC].join(',')))
}

// ---------- report
console.log('products to add:', products.length, '| categories:', catEntries.map(c => c.slug + ':' + c.count).join(', '), '| new brand hubs:', Object.keys(hubSeo).join(', ') || 'none')
for (const p of products) { const k = kwOf[p.slug]; console.log(`${p.name.padEnd(34)} ${aud(p.price).padStart(7)} (supplier ${aud(p.comparePrice)}) | ${k.length} keywords${k.length < 6 ? ' (THIN)' : ''}: ${k.map(e => e.kw + ' ' + e.vol).join('; ')}`) }
for (const [s, c] of Object.entries(catSeo)) console.log(`CATEGORY ${s}: ${c.kw.length} keywords: ${c.kw.slice(0, 5).join('; ')}`)
const words = a => a.join(' ').split(/\s+/).length
console.log('copy words per product:', Object.entries(copyNew).map(([s, a]) => words(a)).join(', '))

if (!APPLY) { console.log('DRY RUN'); process.exit(0) }
write('src/config/catalog-products.generated.js', '// AUTO-GENERATED by scripts/import-catalog.mjs — do not edit by hand' + NL + 'export const CATALOG_PRODUCTS = ' + JSON.stringify(all) + NL)
const cats = [...cats0.filter(c => !catEntries.some(e => e.slug === c.slug)), ...catEntries]
write('src/config/catalog.generated.js', '// AUTO-GENERATED by scripts/import-catalog.mjs — do not edit by hand' + NL + 'export const CATALOG_CATEGORIES = ' + JSON.stringify(cats, null, 1) + NL + NL)
const jf = (f, fn) => { const o = JSON.parse(read(f)); fn(o); write(f, JSON.stringify(o)) }
jf('src/config/seo.generated.json', o => Object.assign(o, seoNew, catSeo, hubSeo))
jf('src/config/faq.generated.json', o => Object.assign(o.pages, faqNew, catFaq, hubFaq))
jf('src/config/product-copy.generated.json', o => Object.assign(o, copyNew))
jf('src/config/category-copy.generated.json', o => Object.assign(o, catCopy))
write('docs/used-keywords.csv', read('docs/used-keywords.csv').replace(/\s+$/, '') + NL + reg.join(NL) + NL)
write('docs/added-products-2026-11-06.csv', 'slug,name,brand,category,price,supplier_price,keywords_assigned' + NL + products.map(p => [p.slug, `"${p.name}"`, p.brand, p.category, p.price, p.comparePrice, kwOf[p.slug].length].join(',')).join(NL) + NL)
console.log('APPLIED')
