// Phase C: builds candidate keywords for every product page that needs work and splits them into batches of 100
// for Semrush Keyword Overview > Bulk Analysis (returns intent, volume and KD for each keyword in one report).
// Keywords already checked in saved bulk files (docs/semrush-raw/phaseC-bulk-NNN.txt) are not asked again; batch ids continue after the last saved one.
// Writes docs/phase-c/bulk-queue.json ([{id, kws}]) and docs/phase-c/bulk-candidates.json (product -> candidates).
const fs = require('fs'), path = require('path')
const ROOT = path.resolve(__dirname, '../..'); process.chdir(ROOT)
const m = fs.readFileSync('src/config/catalog-products.generated.js', 'utf8')
const cat = JSON.parse(m.slice(m.indexOf('[', m.indexOf('=')), m.lastIndexOf(']') + 1))
const inv = JSON.parse(fs.readFileSync('docs/phase-c/inventory.json', 'utf8'))
const need = new Set(inv.pages.filter(p => p.type === 'product' && p.bad).map(p => p.url))
const norm = s => s.toLowerCase().replace(/[+:()/&,'"]/g, ' ').replace(/[-_]/g, ' ').replace(/\s+/g, ' ').trim()
const GENERIC = new Set(['e', 'bike', 'ebike', 'electric', 'the', 'and', 'with', 'for', 'new', 'step', 'through', 'st', 'black', 'white', 'blue', 'red', 'green', 'orange', 'grey', 'gray', 'silver', 'yellow', 'purple', 'pink', 'tbc', 'small', 'medium', 'large', 'xl', 'size', 'edition'])
const cand = {}, all = new Set()
for (const p of cat) {
  const url = '/shop/' + p.category + '/' + p.slug + '/'
  if (!need.has(url)) continue
  const brand = norm(p.brand), nm = norm(p.name)
  const rest = nm.startsWith(brand) ? nm.slice(brand.length).trim() : nm
  const toks = rest.split(' ').filter(x => x && !GENERIC.has(x))
  const full = [brand, ...toks].join(' ')
  const v = new Set()
  v.add(full); v.add(nm)
  if (toks.length) { v.add(toks.join(' ')); v.add([brand, toks[0]].join(' ')) }
  if (toks.length > 1) { v.add([brand, toks[0], toks[1]].join(' ')); v.add(toks.slice(0, 2).join(' ')) }
  if (toks.length > 2) v.add([brand, toks[0], toks[1], toks[2]].join(' '))
  if (toks.length > 1) v.add([brand, ...toks.slice(0, -1)].join(' '))
  const core = [brand, ...toks.slice(0, 3)].join(' ')
  for (const x of [core, full]) v.add(x + ' australia') // price / for sale / buy variants returned no data in the first test batch
  cand[p.slug] = [...v].filter(x => x.length >= 4 && !/tbc/.test(x) && (x.split(' ').length >= 2 || /d/.test(x)))
  for (const x of cand[p.slug]) all.add(x)
}
const RAW = 'docs/semrush-raw', checked = new Set(); let maxId = 0
for (const f of fs.readdirSync(RAW).filter(f => /^phaseC-bulk-\d+\.txt$/.test(f))) {
  for (const l of fs.readFileSync(path.join(RAW, f), 'utf8').split(/\r?\n/)) {
    const mm = l.match(/^#bulk-b(\d+)/); if (mm) maxId = Math.max(maxId, +mm[1])
    if (l[0] === '#') { const nd = l.match(/^#nodata-b\d+ (.*)$/); if (nd) nd[1].split(';').forEach(k => checked.add(k)); continue }
    const k = l.split('|')[0]; if (k) checked.add(k)
  }
}
const kws = [...all].filter(k => !checked.has(k))
const batches = []
for (let i = 0; i < kws.length; i += 100) batches.push({ id: 'b' + String(maxId + batches.length + 1).padStart(3, '0'), kws: kws.slice(i, i + 100) })
fs.writeFileSync('docs/phase-c/bulk-candidates.json', JSON.stringify(cand))
fs.writeFileSync('docs/phase-c/bulk-queue.json', JSON.stringify(batches))
console.log('products', Object.keys(cand).length, 'unique candidate keywords', all.size, 'still to check', kws.length, 'batches', batches.length)
