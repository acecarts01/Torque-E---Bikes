// One-off clean-up of src/config/faq.generated.json:
//  1. Product pages: replace the repeated shipping/payment/safety FAQs with product-specific answers built from the
//     product's own data (price, saving, range, compliance), and keep the existing "compare with similar bikes" answer.
//  2. All pages: remove a sentence that repeats the shipping rule inside the same answer.
import fs from 'node:fs'

const ROOT = 'C:/VERCEL PROJECTS/Aussie Bikes/Torque-E---Bikes/'
const { PRODUCTS } = await import('file:///' + ROOT + 'src/config/products.js')
const { CATALOG_CATEGORIES: CATS } = await import('file:///' + ROOT + 'src/config/catalog.generated.js')
const file = ROOT + 'src/config/faq.generated.json'
const bank = JSON.parse(fs.readFileSync(file, 'utf8'))

const money = n => '$' + Number(n).toLocaleString('en-AU', { minimumFractionDigits: n % 1 ? 2 : 0, maximumFractionDigits: 2 })
const catName = slug => (CATS.find(c => c.slug === slug) || {}).name || slug

let rebuilt = 0, kept = 0
for (const key of Object.keys(bank.pages)) {
  const m = key.match(/^\/shop\/([^/]+)\/([^/]+)\/$/)
  if (!m) continue
  const p = PRODUCTS.find(x => x.slug === m[2] && x.category === m[1])
  if (!p) continue
  const saving = p.comparePrice && p.comparePrice > p.price ? ` That is ${money(p.comparePrice - p.price)} below the compare-at price of ${money(p.comparePrice)}.` : ''
  const price = {
    q: `How much is the ${p.name} in Australia?`,
    a: `The ${p.name} from ${p.brand} costs ${money(p.price)} AUD including GST, listed in our ${catName(p.category)} range.${saving} Paying by crypto takes 10% off the order total.` +
       (p.compliance === 'off-road' ? ' It is for off-road and private property use only.' : ''),
  }
  const compare = (bank.pages[key] || []).find(x => /^How does the .* compare with similar/.test(x.q))
  bank.pages[key] = compare ? [price, compare] : [price]
  rebuilt++; if (compare) kept++
}

// remove repeated shipping sentences within one answer
const dedupe = a => {
  const parts = a.split(/(?<=\.)\s+/)
  let seen = false
  return parts.filter(s => {
    if (/Shipping is 10% of (your|the) order total/i.test(s)) { if (seen) return false; seen = true }
    return true
  }).join(' ')
}
let deduped = 0
const fix = items => items.forEach(x => { const d = dedupe(x.a); if (d !== x.a) { x.a = d; deduped++ } })
fix(bank.home); bank.groups.forEach(g => fix(g.items)); Object.values(bank.pages).forEach(fix)

fs.writeFileSync(file, JSON.stringify(bank))
const prod = Object.keys(bank.pages).filter(k => /^\/shop\/[^/]+\/[^/]+\/$/.test(k))
const answers = new Set(); let n = 0
prod.forEach(k => bank.pages[k].forEach(x => { n++; answers.add(x.a) }))
console.log('product pages rebuilt:', rebuilt, '| kept compare answer on:', kept, '| answers de-duplicated elsewhere:', deduped)
console.log('product FAQ items now:', n, '| distinct answers:', answers.size)
console.log('sample:', JSON.stringify(bank.pages['/shop/electric-dirt-bikes/sur-ron-light-bee-x/'], null, 1))
