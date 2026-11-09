const fs = require('fs')
process.chdir(require('path').resolve(__dirname, '../../docs/phase-c'))
const ROOT = require('path').resolve(__dirname, '../..') + '/'
const m = fs.readFileSync(ROOT + 'src/config/catalog-products.generated.js', 'utf8')
const a = JSON.parse(m.slice(m.indexOf('[', m.indexOf('=')), m.lastIndexOf(']') + 1))
const inv = JSON.parse(fs.readFileSync('inventory.json', 'utf8'))
const bad = new Set(inv.pages.filter(p => p.type === 'product' && p.bad).map(p => p.url))
const need = a.filter(p => bad.has('/shop/' + p.category + '/' + p.slug + '/'))
const norm = s => s.toLowerCase().replace(/[+:()/&,'"]/g, ' ').replace(/[-_]/g, ' ').replace(/\s+/g, ' ').trim()
const GENERIC = new Set(['e', 'bike', 'ebike', 'electric', 'the', 'and', 'with', 'for', 'new', 'step', 'through', 'folding'])
const A = new Set(), B = new Set(), BR = new Set(), map = {}
for (const p of need) {
  const brand = norm(p.brand), bw = brand.split(' ').length
  const nameN = norm(p.name)
  let w = nameN.split(' ')
  if (nameN.startsWith(brand)) w = nameN.slice(brand.length).trim().split(' ').filter(Boolean)
  const model = w.filter(x => x && !GENERIC.has(x))
  BR.add(brand)
  const qa = [brand, model[0]].filter(Boolean).join(' ')
  const qb = [brand, model[0], model[1]].filter(Boolean).join(' ')
  A.add(qa); if (model[1]) B.add(qb)
  map[p.slug] = { brand, qa, qb, name: p.name, category: p.category, price: p.price }
}
const brandQ = [...BR]
const aQ = [...A].filter(q => !BR.has(q))
console.log('products', need.length, 'brands', brandQ.length, 'A', aQ.length, 'B', B.size)
fs.writeFileSync('queries-brand.json', JSON.stringify(brandQ))
fs.writeFileSync('queries-A.json', JSON.stringify(aQ))
fs.writeFileSync('queries-B.json', JSON.stringify([...B].filter(q => !A.has(q) && !BR.has(q))))
fs.writeFileSync('prodmap.json', JSON.stringify(map))
console.log(brandQ.slice(0, 30).join(' | '))
