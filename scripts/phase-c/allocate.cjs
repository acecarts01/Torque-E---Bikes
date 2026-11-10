// Phase C: builds the keyword mapping PROPOSAL for product pages (and brand hubs) from real Semrush rows.
// Reads: docs/used-keywords.csv (current register), docs/phase-c/prodmap.json, src/config/catalog-products.generated.js,
// Semrush rows (docs/semrush-raw/phaseC-*.txt and the older pools). Writes docs/phase-c/proposal-products.csv,
// docs/phase-c/proposal-brands.csv and docs/phase-c/no-data-products.csv. It never edits the site or the register.
// Usage: node scripts/phase-c/allocate.cjs
const fs = require('fs'), path = require('path')
const ROOT = path.resolve(__dirname, '../..'); process.chdir(ROOT)
const NL = String.fromCharCode(10)
const parse = l => { const o = []; let c = '', q = false; for (const ch of l) { if (ch === '"') q = !q; else if (ch === ',' && !q) { o.push(c); c = '' } else c += ch } o.push(c); return o }
const num = v => { v = String(v || '').replace(/,/g, ''); return /K$/i.test(v) ? parseFloat(v) * 1000 : parseFloat(v) || 0 }
const csv = rows => rows.map(r => r.map(x => { x = String(x == null ? '' : x); return /[",\n]/.test(x) ? '"' + x.replace(/"/g, '""') + '"' : x }).join(',')).join(NL) + NL
// ---- register
const reg = fs.readFileSync('docs/used-keywords.csv', 'utf8').split(/\r?\n/).slice(1).filter(Boolean).map(parse).map(r => ({ url: r[0], type: r[1], role: r[2], kw: r[3].toLowerCase().trim(), vol: +r[4], kd: +r[5], intent: r[6], src: r[7] }))
const isGood = (r, tcOnly) => !/generated/i.test(r.src) && r.vol > 0 && r.kd <= 28 && (!tcOnly || /^(Commercial|Transactional)(, (Commercial|Transactional))?$/.test(r.intent))
const owner = new Map() // keyword -> url that holds it as a GOOD row (stays taken)
for (const r of reg) if (isGood(r, false)) owner.set(r.kw, r.url)
// ---- pool of real Semrush rows
const pool = new Map()
const BAD = /\b(townsville|toowoomba|adelaide|melbourne|sydney|perth|gold coast|canberra|hobart|darwin|cairns|newcastle|wollongong|geelong|nz|usa|uk|bunnings|kmart|big w|amazon|ebay|gumtree|decathlon|supercheap|rebel|anaconda|bcf|repco|aldi|costco|woolworths|coles|free|near me|discount code|stockists|second hand|used|hire|rental|rent|repair|service|manual|pdf|jobs|login|review|reviews|vs)\b/
const add = (kw, vol, kd, it, src) => {
  kw = String(kw || '').toLowerCase().trim(); vol = num(vol); kd = parseFloat(kd); it = String(it || '').replace(/[^A-Z]/g, '')
  if (!kw || !(vol > 0) || isNaN(kd) || !Number.isInteger(kd) || kd > 28 || !it || BAD.test(kw) || /[^\x20-\x7e]/.test(kw) || /\b(\w+) \1\b/.test(kw)) return
  const e = pool.get(kw); if (!e || vol > e.vol) pool.set(kw, { kw, vol, kd, it, src })
}
const RAW = 'docs/semrush-raw'
for (const f of fs.readdirSync(RAW).filter(f => /^(phaseC-|blog-topics-2026-11-06)/.test(f))) for (const l of fs.readFileSync(path.join(RAW, f), 'utf8').split(/\r?\n/)) { if (!l || l[0] === '#') continue; const [kw, it, vol, kd] = l.split('|'); add(kw, vol, kd, it, f) }
const rd = f => { const L = fs.readFileSync(f, 'utf8').split(/\r?\n/).filter(Boolean); const h = parse(L.shift()); return L.map(parse).map(r => Object.fromEntries(h.map((k, i) => [k, r[i]]))) }
for (const f of ['docs/keyword-bank.csv', 'docs/keyword-gaps.csv', 'docs/competitor-gaps-untapped-2026-11-04.csv']) if (fs.existsSync(f)) rd(f).forEach(r => add(r.keyword, r.volume, r.kd, r.intent, f))
// ---- catalogue and model tokens
const m = fs.readFileSync('src/config/catalog-products.generated.js', 'utf8')
const cat = JSON.parse(m.slice(m.indexOf('[', m.indexOf('=')), m.lastIndexOf(']') + 1))
const norm = s => s.toLowerCase().replace(/[+:()/&,'"]/g, ' ').replace(/[-_]/g, ' ').replace(/\s+/g, ' ').trim()
const GENERIC = new Set(['e', 'bike', 'ebike', 'electric', 'the', 'and', 'with', 'for', 'new', 'step', 'through', 'folding', 'st', 'black', 'white', 'blue', 'red', 'green', 'orange', 'grey', 'gray', 'silver', 'yellow', 'purple', 'pink', 'tbc', 'small', 'medium', 'large', 'xl', 'size', 'edition', 'pro', 'max', 'plus'].filter(x => !['pro', 'max', 'plus'].includes(x)))
const info = {}
for (const p of cat) {
  const brand = norm(p.brand), nm = norm(p.name)
  const rest = nm.startsWith(brand) ? nm.slice(brand.length).trim() : nm
  const toks = rest.split(' ').filter(x => x && !GENERIC.has(x)).slice(0, 3)
  info[p.slug] = { slug: p.slug, url: '/shop/' + p.category + '/' + p.slug + '/', name: p.name, brand, bt: brand.split(' '), toks, price: p.price, category: p.category }
}
const hasAll = (kw, toks) => toks.every(t => kw.includes(t))
// a product claims a keyword when brand tokens and all of its model tokens are present; the claimant with the most model tokens wins
const claimants = kw => Object.values(info).filter(p => p.toks.length && hasAll(kw, p.bt) && hasAll(kw, p.toks.slice(0, Math.min(p.toks.length, 2)))).sort((a, b) => b.toks.length - a.toks.length || b.price - a.price)
const brandKw = (kw, b) => hasAll(kw, b.split(' '))
// ---- product proposals
const taken = new Set(owner.keys())
const regByUrl = {}; for (const r of reg) (regByUrl[r.url] = regByUrl[r.url] || []).push(r)
const prodRows = [], noData = [], released = []
const inv = JSON.parse(fs.readFileSync('docs/phase-c/inventory.json', 'utf8'))
const needUrls = new Set(inv.pages.filter(p => p.type === 'product' && p.bad).map(p => p.url))
const order = Object.values(info).filter(p => needUrls.has(p.url)).sort((a, b) => b.toks.length - a.toks.length || b.price - a.price)
const proposed = {}
for (const p of order) {
  const cur = regByUrl[p.url] || []
  // a kept row must still name the brand plus one of the product's own model tokens, otherwise it is released for another page
  const onModel = r => p.toks.length > 0 && ((hasAll(r.kw, p.bt) && p.toks.slice(0, 2).some(t => r.kw.includes(t))) || (p.toks.length > 1 && p.toks.slice(0, 2).every(t => r.kw.includes(t))))
  const keep = cur.filter(r => isGood(r, true)) // real, T/C, KD<=28 rows stay on their page; off-model ones are only FLAGGED for the owner
  for (const r of cur) if (isGood(r, true) && !onModel(r)) released.push([p.url, r.role, r.kw, r.vol, r.kd, r.intent])
  const keepKw = new Set(keep.map(r => r.kw))
  const cands = [...pool.values()].filter(e => /^[TC]+$/.test(e.it) && !taken.has(e.kw) && !keepKw.has(e.kw) && hasAll(e.kw, p.bt) && p.toks.length && hasAll(e.kw, p.toks.slice(0, Math.min(p.toks.length, 2))) && claimants(e.kw)[0] === p)
    .sort((a, b) => (/T/.test(b.it) - /T/.test(a.it)) || b.vol - a.vol || a.kd - b.kd)
  const hasPrimary = keep.some(r => r.role === 'primary')
  const need = 6 - keep.length
  const pick = cands.slice(0, Math.max(0, need))
  for (const e of pick) taken.add(e.kw)
  const out = []
  let primary = keep.find(r => r.role === 'primary') ? keep.find(r => r.role === 'primary').kw : null
  const picked = pick.map(e => e.kw)
  if (!primary && pick[0]) primary = pick[0].kw
  const secs = [...keep.filter(r => r.role !== 'primary').map(r => r.kw), ...picked.filter(k => k !== primary)].slice(0, 5)
  proposed[p.url] = { primary, secs }
  prodRows.push([p.url, p.name, p.brand, p.price, cur.find(r => r.role === 'primary') ? cur.find(r => r.role === 'primary').kw + ' (' + (/generated/i.test(cur.find(r => r.role === 'primary').src) ? 'generated' : cur.find(r => r.role === 'primary').src) + ')' : '', cur.filter(r => !isGood(r, true)).map(r => r.kw).join('; '), primary || '', secs.join('; '), pick.map(e => `${e.kw} ${e.vol}/${e.kd}/${e.it}`).join('; '), primary ? (secs.length >= 5 ? 'full' : 'thin ' + (secs.length + 1) + '/6') : 'NO DATA'])
  if (!primary) noData.push([p.url, p.name, p.brand, p.price, 'no unused T/C Semrush keyword names this product'])
}
fs.writeFileSync('docs/phase-c/proposal-products.csv', csv([['url', 'product', 'brand', 'price', 'current primary', 'current rows to remove', 'proposed primary', 'proposed secondaries', 'new keywords (vol/KD/intent)', 'status'], ...prodRows]))
fs.writeFileSync('docs/phase-c/no-data-products.csv', csv([['url', 'product', 'brand', 'price', 'reason'], ...noData]))
const st = { pages: prodRows.length, full: prodRows.filter(r => r[9] === 'full').length, thin: prodRows.filter(r => /^thin/.test(r[9])).length, noData: noData.length, poolSize: pool.size }
fs.writeFileSync('docs/phase-c/allocate-summary.json', JSON.stringify(st, null, 1))
console.log(JSON.stringify(st))
// ---- non-product pages: brand hubs, categories, blogs, home/shop/local/hubs and the pages with no keywords
// Each bad row (generated, zero volume or KD > 28) gets the closest unused Semrush row (token overlap with the bad keyword and the page slug).
const STOP = new Set(['e', 'bike', 'bikes', 'ebike', 'ebikes', 'electric', 'the', 'and', 'for', 'in', 'a', 'of', 'to', 'best', 'buy', 'price', 'australia', 'cheap', 'online', 'sale'])
const toks = s => String(s).toLowerCase().replace(/[^a-z0-9. ]/g, ' ').split(/\s+/).filter(x => x && !STOP.has(x))
const overlap = (a, b) => { const A = new Set(a), B = new Set(b); let n = 0; for (const x of A) if (B.has(x)) n++; return n / Math.max(1, Math.min(A.size, B.size)) }
const okIntent = (t, it, role) => t === 'blog' && role === 'tag' ? true : t === 'brand-hub' ? /^[CNIT]+$/.test(it) : t === 'blog' || t === 'home' ? /^[TCNI]+$/.test(it) && /[TC]/.test(it) || t === 'blog' && /^[TC]+$/.test(it) : /^[TC]+$/.test(it)
const otherRows = [], otherNoMatch = []
const pageSlug = u => u.split('/').filter(Boolean).slice(-1)[0] || 'home'
const nonProd = inv.pages.filter(p => p.type !== 'product' && p.bad > 0)
// ---- relevance gate (curation): a replacement must be about the page and use only words that fit it
const WORDS = new Set('e bike bikes ebike ebikes e-bike e-bikes electric emtb mtb mountain road gravel fat tyre tyres tire tires scrambler commuter urban city step through cargo trike trikes e-trike e-trikes tricycle kids kid youth boys girls light lights horn horns headlight rack racks trailer trailers bag bags carrier hitch lock locks alarm brake brakes pad pads seat seats motor motors kit kits conversion drivetrain sprocket sprockets battery batteries charger price sale for buy cheap best online shop store australia australian brisbane 250w 500w 750w 1000w 1500w 48v 52v 60v 72v folding foldable throttle mens ladies womens full suspension hardtail road balance models model'.split(' '))
const VOCAB = (() => { const cnt = new Map(); const addText = t => { for (const w of String(t).toLowerCase().replace(/[^a-z0-9. ]+/g, ' ').split(' ')) if (w) cnt.set(w, (cnt.get(w) || 0) + 1) }
  addText(fs.readFileSync('src/config/catalog-products.generated.js', 'utf8'))
  const walk = d => { for (const f of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, f.name); if (f.isDirectory()) walk(p); else if (/\.(js|ts)$/.test(f.name)) addText(fs.readFileSync(p, 'utf8')) } }
  walk('src/content/blog')
  return new Set([...cnt].filter(([, n]) => n >= 4).map(([w]) => w)) })()
const catTopic = { 'electric-mountain-bikes': /mountain|mtb|emtb/, 'commuter-and-urban-e-bikes': /commuter|urban|city|step/, 'road-and-gravel-e-bikes': /road|gravel/, 'fat-tyre-and-scrambler-e-bikes': /fat|scrambler/, 'kids-and-youth-e-bikes': /kid|youth|boy|girl/, 'cargo-bikes-and-e-trikes': /cargo|trike|tricycle/, 'lights-and-horns': /light|horn|headlight/, 'racks-bags-and-trailers': /rack|bag|trailer|carrier|hitch/, 'motors-drivetrain-and-sprockets': /motor|kit|conversion|sprocket|drivetrain/, 'locks-and-security': /lock|alarm/, 'brakes': /brake|pad|rotor|disc/, 'seats-fenders-and-body': /seat|fender|saddle/ }
const needElectric = new Set(['electric-mountain-bikes', 'commuter-and-urban-e-bikes', 'road-and-gravel-e-bikes', 'fat-tyre-and-scrambler-e-bikes', 'kids-and-youth-e-bikes', 'cargo-bikes-and-e-trikes'])
const catVocab = new Set(); for (const p of cat) for (const t of norm(p.brand + ' ' + p.name).split(' ')) catVocab.add(t)
const brandModelTok = {}; for (const p of cat) { const b = norm(p.brand).replace(/\s+/g, '-'); (brandModelTok[b] = brandModelTok[b] || new Set()); for (const t of norm(p.name).split(' ')) brandModelTok[b].add(t) }
const brandTok = new Set(); for (const p of cat) for (const t of norm(p.brand).split(' ')) if (!WORDS.has(t) && t.length > 2) brandTok.add(t)
const noBrand = (words, slug) => words.every(w => !brandTok.has(w) || slug.split('-').includes(w))
const isElectricTerm = k => /\b(e bike|ebike|e-bike|electric|emtb|e mtb|e mountain|e gravel|e trike|e-trike|e cargo|e-kit)/.test(k) || /\be[ -]?(bike|trike|mtb)/.test(k)
const REJ = fs.existsSync('docs/phase-c/rejects.json') ? JSON.parse(fs.readFileSync('docs/phase-c/rejects.json', 'utf8')) : {}
const relevant = (pg, kw, role) => {
  if ((REJ['*'] || []).includes(kw) || (REJ[pg.url] || []).includes(kw)) return false
  const t = pg.type, slug = pageSlug(pg.url), words = kw.replace(/-/g, ' ').split(' '), slugSet = new Set(slug.split('-'))
  if (/(^|-)(electric|ebike|ebikes|e-bike|e-bikes)(-|$)/.test(slug) && (t === 'blog' || t === 'category') && !isElectricTerm(kw)) return false
  if (t === 'brand-hub') {
    const b = slug.replace(/-/g, ' ').split(' '), extras = words.filter(w => !b.includes(w))
    if (!hasAll(kw, b)) return false
    const ok = brandModelTok[slug] || new Set()
    return extras.every(w => WORDS.has(w) || ok.has(w) || /^\d+$/.test(w))
  }
  if (t === 'local') return /brisbane/.test(kw) && /bike/.test(kw) && words.every(w => WORDS.has(w))
  if (t === 'home') return /torque/.test(kw)
  if (t === 'shop' || pg.url === '/electric-bikes/') return isElectricTerm(kw) && /(buy|sale|shop|store|online|price|australia)/.test(kw) && noBrand(words, slug) && words.every(w => WORDS.has(w) || slugSet.has(w) || w === 'au')
  if (t === 'category') {
    const cs = slug, topic = catTopic[cs]
    if (topic && !topic.test(kw)) return false
    if (needElectric.has(cs) && !isElectricTerm(kw)) return false
    return noBrand(words, slug) && words.every(w => WORDS.has(w) || slugSet.has(w) || w === 'au')
  }
  if (t === 'blog') {
    const SYN = { tyre: ['tyre', 'tyres', 'tire', 'tires'], moto: ['moto', 'motorbike', 'motorbikes', 'motorcycle', 'motorcycles'], kids: ['kid', 'kids', 'child', 'childs', 'childrens', 'children', 'youth'], lights: ['light', 'lights', 'lamp', 'lamps', 'headlight'], panniers: ['pannier', 'panniers'], padlock: ['padlock', 'padlocks', 'lock', 'locks'], chain: ['chain'], cargo: ['cargo'], conversion: ['conversion', 'convert', 'kit', 'kits'], accessories: ['accessories', 'accessory', 'parts'], grips: ['grip', 'grips', 'pedal', 'pedals', 'handlebar', 'controls', 'throttle'], pedals: ['pedal', 'pedals', 'grip', 'grips'], handlebar: ['handlebar', 'handlebars', 'throttle', 'controls'], headphones: ['headphone', 'headphones', 'earphones', 'earbuds'], conduction: ['conduction'], mountain: ['mountain', 'mtb', 'emtb'], road: ['road', 'gravel'], dirt: ['dirt', 'dirtbike'], brands: ['brand', 'brands'], legal: ['legal', 'law', 'laws', 'licence', 'license', 'registration', 'regulations'], folding: ['folding', 'foldable', 'fold'], price: ['price', 'prices', 'cost', 'cheap', 'cheapest'], sale: ['sale', 'deals', 'buy', 'cheap', 'online', 'shop'], hybrid: ['hybrid'], australia: ['australia', 'australian', 'au'] }
    const DENY = /\b(knee|door|toys?|petrol|gas|games?|mini|bmx|mouse|meaning|definition|jobs?|hire|rental|repairs?|manual|pdf|symptoms?|haircut|wheelchair|mobility|skateboard|hoverboard)\b/
    const own = new Set(slug.split('-'))
    const deny = kw.match(DENY)
    if (deny && !own.has(deny[1])) return false
    if (/\b(\w+ \w+) \1\b/.test(kw) || /\b(\w+) \1\b/.test(kw)) return false
    if ((/\b(scooters?|trailers?|locks?|helmets?|tricycles?|trikes?)\b/.test(kw)) && !/(scooter|trailer|lock|padlock|helmet|trike|tricycle)/.test(slug)) return false
    const key = toks(slug.replace(/-/g, ' ')).filter(w => !['guide', 'explained', 'buying', 'vs', 'what', 'how', 'which', 'models', 'model', '2026', 'legal', 'street', 'is', 'an', 'in', 'on', 'do', 'my', 'top', 'rated', 'diy', 'finder', 'brands', 'best', 'off', 'road', 'sale', 'price', 'australia'].includes(w) || own.has(w) && ['legal', 'brands', 'road', 'sale', 'price', 'australia', 'top', 'rated'].includes(w) && false)
    const anchors = key.length ? key : ['*']
    const hits = anchors.filter(a => a === '*' || (SYN[a] || [a]).some(x => words.includes(x) || kw.includes(a))).length
    if (hits / anchors.length < 0.99 && !(anchors.length > 2 && hits / anchors.length >= 0.67)) return false
    if (/(^|-)(electric|ebike|ebikes|e-bike|e-bikes)(-|$)/.test(slug) && ((/(^|-)(electric|ebike|ebikes|e-bike|e-bikes)(-|$)/.test(slug) && role !== 'tag') || anchors[0] === '*') && !isElectricTerm(kw)) return false
    return noBrand(words, slug) && words.every(w => VOCAB.has(w) || /^d+$/.test(w))
  }
  return false
}
for (const pg of nonProd) {
  const cur = (regByUrl[pg.url] || [])
  const badRows = cur.filter(r => !isGood(r, pg.type !== 'brand-hub' && pg.type !== 'home'))
  const goodKw = new Set(cur.filter(r => isGood(r, pg.type !== 'brand-hub' && pg.type !== 'home')).map(r => r.kw))
  const slugT = toks(pageSlug(pg.url).replace(/-/g, ' '))
  for (const br of badRows) {
    const bt = toks(br.kw), key = [...new Set([...bt, ...slugT])]
    let best = null
    for (const e of pool.values()) {
      if (taken.has(e.kw) || goodKw.has(e.kw) || !okIntent(pg.type, e.it, br.role)) continue
      if (!relevant(pg, e.kw, br.role)) continue
      const sc = overlap(e.tk || (e.tk = toks(e.kw)), key) + Math.min(e.vol, 2000) / 20000 - e.kd / 2000
      if (sc >= 0.4 && (!best || sc > best.sc) && (pg.type === 'brand-hub' || !claimants(e.kw)[0])) best = { e, sc } // a product page owns keywords naming its model
    }
    if (best) { taken.add(best.e.kw); otherRows.push([pg.url, pg.type, br.role, br.kw, /generated/i.test(br.src) ? 'generated' : br.vol + '/' + br.kd, best.e.kw, best.e.vol, best.e.kd, best.e.it]) }
    else { otherRows.push([pg.url, pg.type, br.role, br.kw, /generated/i.test(br.src) ? 'generated' : br.vol + '/' + br.kd, '', '', '', '']); otherNoMatch.push(pg.url) }
  }
}
fs.writeFileSync('docs/phase-c/proposal-other-pages.csv', csv([['url', 'type', 'role', 'current keyword to remove', 'current (vol/kd or generated)', 'proposed Semrush replacement', 'volume', 'kd', 'intent'], ...otherRows]))
// pages with no keywords: closest pool keywords by slug
const nk = []
for (const u of inv.noKw) {
  const t = toks(pageSlug(u).replace(/-/g, ' ')), p = info[pageSlug(u)]
  const cand = [...pool.values()].filter(e => !taken.has(e.kw) && /^[TCNI]+$/.test(e.it) && (p ? hasAll(e.kw, p.bt) && p.toks.length && hasAll(e.kw, p.toks.slice(0, 2)) : overlap(toks(e.kw), t) >= 0.99 && t.length && /brands|compare|faq/.test(u))).sort((a, b) => b.vol - a.vol || a.kd - b.kd).slice(0, 6)
  nk.push([u, p ? 'product' : 'info page', cand.map(e => `${e.kw} ${e.vol}/${e.kd}/${e.it}`).join('; ') || 'none found in Semrush data (owner decision: leave without keywords)'])
}
fs.writeFileSync('docs/phase-c/proposal-no-keyword-pages.csv', csv([['url', 'kind', 'proposed keywords (vol/KD/intent)'], ...nk]))
const filled = otherRows.filter(r => r[5]).length
console.log('other pages: bad rows ' + otherRows.length + ', replaced ' + filled + ', no match ' + (otherRows.length - filled) + '; no-keyword pages ' + nk.length + ', with candidates ' + nk.filter(r => !/^none/.test(r[2])).length)

fs.writeFileSync('docs/phase-c/released-keywords.csv', csv([['page holding it (flag only: row stays)','role','keyword (real Semrush row, does not name the product model)','volume','kd','intent'], ...released]))
console.log('flagged off-model rows kept on product pages: ' + released.length)
if (process.env.DEBUG_BLOG) {
  for (const u of ['/blog/fat-tyre-e-bikes/', '/blog/electric-cargo-bikes/', '/blog/kids-electric-dirt-bikes/']) {
    const pg = { type: 'blog', url: u }
    const all = [...pool.values()], notTaken = all.filter(e => !taken.has(e.kw)), rel = notTaken.filter(e => relevant(pg, e.kw))
    const topical = notTaken.filter(e => u.includes('fat') ? /fat/.test(e.kw) : u.includes('cargo') ? /cargo/.test(e.kw) : /kid|child/.test(e.kw))
    console.log(u, 'pool', all.length, 'untaken', notTaken.length, 'relevant', rel.length, 'topical untaken', topical.length, '| sample topical:', topical.slice(0, 12).map(e => e.kw + '(' + e.it + ')').join('; '), '| rejected topical:', topical.filter(e => !relevant(pg, e.kw)).slice(0, 8).map(e => e.kw).join('; '))
  }
}
if (process.env.DEBUG_REL) console.log('REL', relevant({ type: 'blog', url: '/blog/e-bike-lights/' }, 'electric scooter lights', 'tag'), relevant({ type: 'blog', url: '/blog/e-bike-lights/' }, 'ebike lights', 'tag'), inv.pages.find(p => p.url === '/blog/e-bike-lights/').type)
