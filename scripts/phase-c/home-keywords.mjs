// Homepage keyword candidates: the best UNUSED store-level keywords from the Semrush AU data already on disk.
// Rules: real Semrush row, volume above 0, KD 28 or lower, Transactional first then Commercial, never already in docs/used-keywords.csv,
// no brand or model names (those belong to product and brand pages), no places, retailers or informational phrasing.
// Usage: node scripts/phase-c/home-keywords.mjs
import fs from 'node:fs'
import path from 'node:path'

const parse = l => { const o = []; let c = '', q = false; for (const ch of l) { if (ch === '"') q = !q; else if (ch === ',' && !q) { o.push(c); c = '' } else c += ch } o.push(c); return o }
const num = v => { v = String(v || '').replace(/,/g, ''); return /K$/i.test(v) ? parseFloat(v) * 1000 : parseFloat(v) || 0 }
const used = new Set(fs.readFileSync('docs/used-keywords.csv', 'utf8').split(/\r?\n/).slice(1).filter(Boolean).map(l => parse(l)[3].toLowerCase().trim()))
const m = fs.readFileSync('src/config/catalog-products.generated.js', 'utf8')
const cat = JSON.parse(m.slice(m.indexOf('[', m.indexOf('=')), m.lastIndexOf(']') + 1))
const brandTok = new Set(cat.flatMap(p => String(p.brand).toLowerCase().replace(/[^a-z0-9 ]/g, ' ').split(/\s+/)).filter(t => t.length > 2 && !['bike', 'bikes', 'electric', 'and', 'the', 'pro', 'max', 'plus', 'kit'].includes(t)))
const pool = new Map()
const add = (kw, vol, kd, it, src) => {
  kw = String(kw || '').toLowerCase().trim(); vol = num(vol); kd = parseFloat(kd); it = String(it || '').replace(/[^A-Za-z, ]/g, '')
  if (!kw || !(vol > 0) || isNaN(kd) || !Number.isInteger(kd) || kd > 28) return
  const T = /T|Transactional/.test(it), C = /C|Commercial/.test(it)
  if (!T && !C) return
  const e = pool.get(kw); if (!e || vol > e.vol) pool.set(kw, { kw, vol, kd, T, C, src })
}
const RAW = 'docs/semrush-raw'
for (const f of fs.readdirSync(RAW).filter(f => /^(phaseC-|blog-topics)/.test(f))) for (const l of fs.readFileSync(path.join(RAW, f), 'utf8').split(/\r?\n/)) { if (!l || l[0] === '#') continue; const [kw, it, vol, kd] = l.split('|'); add(kw, vol, kd, it, f) }
if (fs.existsSync('docs/keyword-bank.csv')) {
  const L = fs.readFileSync('docs/keyword-bank.csv', 'utf8').split(/\r?\n/); const h = parse(L.shift())
  for (const l of L.filter(Boolean)) { const r = Object.fromEntries(parse(l).map((v, i) => [h[i], v])); add(r.keyword, r.volume, r.kd, r.intent, 'keyword-bank') }
}
const STORE = /\b(electric bikes?|e ?bikes?|e-bikes?|electric bicycles?|electric dirt bikes?|electric motorbikes?|electric motorcycles?|e ?moto|electric scooters?|electric trikes?|conversion kits?)\b/
const BUY = /\b(buy|shop|store|stores|for sale|online|price|prices|cheap|cheapest|deals?|sale|australia|australian|au)\b/
const BAD = /\b(townsville|toowoomba|adelaide|melbourne|sydney|perth|brisbane|gold coast|canberra|hobart|darwin|cairns|newcastle|wollongong|geelong|nsw|qld|vic|wa|nz|usa|uk|bunnings|kmart|big w|amazon|ebay|gumtree|decathlon|supercheap|rebel|anaconda|bcf|repco|aldi|costco|woolworths|coles|free|near me|second hand|used|hire|rental|rent|repair|service|manual|pdf|jobs|login|review|reviews|vs|how|what|why|which|can|does|is|are|legal|licence|license|registration|diy|kids?|children|youth|toddler|girls?|boys?|mens|womens|ladies|adult|adults|bmx|kit|kits|fines?|tyres?|tires?|2nd|friday|christmas|boxing|cyber|price for)\b/
// words that belong to a category page (one keyword, one page): the homepage keeps store-level terms only
const CATWORD = /\b(scooters?|mountain|mtb|emtb|folding|foldable|fat|trikes?|tricycles?|dirt|cargo|road|gravel|commuter|parts?|battery|batteries|charger|helmets?|locks?|lights?|racks?|trailers?|emoto|motors?)\b/
const stem = t => t.replace(/ies$/, 'y').replace(/s$/, '')
const keyOf = kw => kw.split(/\s+/).map(stem).filter(t => !['for', 'in', 'a', 'the', 'au', 'australia', 'australian', 'online'].includes(t)).sort().join(' ')
const cands = [...pool.values()].filter(e => !used.has(e.kw) && STORE.test(e.kw) && BUY.test(e.kw) && !BAD.test(e.kw) && !CATWORD.test(e.kw) && !e.kw.split(/\s+/).some(t => brandTok.has(t)) && !/[^\x20-\x7e]/.test(e.kw) && !/\b(\w+) \1\b/.test(e.kw))
const seen = new Set(), picked = []
for (const e of cands.sort((a, b) => (b.T - a.T) || b.vol - a.vol || a.kd - b.kd)) {
  const k = keyOf(e.kw); if (seen.has(k)) continue; seen.add(k); picked.push(e)
}
// secondaries are also ordered T first, then volume; show intent letters
const row = e => `${e.kw} | ${e.vol} | ${e.kd} | ${e.T ? 'T' : ''}${e.C ? 'C' : ''}`
console.log('candidates after filters:', cands.length, '| after removing near-duplicates:', picked.length)
console.log('PRIMARY:', row(picked[0]))
console.log('SECONDARY 1-10:\n' + picked.slice(1, 11).map(row).join('\n'))
console.log('BATCH A (11-20):\n' + picked.slice(11, 21).map(row).join('\n'))
console.log('BATCH B (21-30):\n' + picked.slice(21, 31).map(row).join('\n'))
console.log('NEXT (31-40):\n' + picked.slice(31, 41).map(row).join('\n'))
fs.writeFileSync('docs/phase-c/home-keyword-candidates.json', JSON.stringify(picked.slice(0, 60), null, 1))
