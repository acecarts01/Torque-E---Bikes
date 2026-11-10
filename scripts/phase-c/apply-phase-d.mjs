// Phase D: applies the owner-approved Phase C mapping to the register (docs/used-keywords.csv), src/config/seo.generated.json
// and the blog post modules. Usage: node scripts/phase-c/apply-phase-d.mjs [--dry]
// Rule: a register row is replaced only when it is truly bad: generated, volume 0, KD above 28, or (for primary/secondary rows
// outside brand hubs) intent with no Transactional or Commercial label. Real Semrush rows with a T or C label stay.
// Products with no usable Semrush keyword (NO DATA) are not touched (owner decision: keep).
import fs from 'node:fs'

const DRY = process.argv.includes('--dry')
const parse = l => { const o = []; let c = '', q = false; for (const ch of l) { if (ch === '"') q = !q; else if (ch === ',' && !q) { o.push(c); c = '' } else c += ch } o.push(c); return o }
const qcsv = s => (/[",\n]/.test(String(s)) ? '"' + String(s).replace(/"/g, '""') + '"' : String(s))
const read = f => fs.readFileSync(f, 'utf8').split(/\r?\n/)
const INTENT = { T: 'Transactional', C: 'Commercial', I: 'Informational', N: 'Navigational' }
const intentWords = letters => String(letters).split('').filter(c => INTENT[c]).map(c => INTENT[c]).join(', ')
const SRC = 'semrush-2026-11-10'

// ---- register
const regLines = read('docs/used-keywords.csv')
const head = regLines[0]
let rows = regLines.slice(1).filter(Boolean).map(parse).map(r => ({ url: r[0], type: r[1], role: r[2], kw: r[3], vol: r[4], kd: r[5], intent: r[6], src: r[7] }))
const key = r => r.url + '|' + r.kw.toLowerCase()
const trulyBad = r => {
  const vol = parseFloat(r.vol), kd = parseFloat(r.kd)
  if (/generated/i.test(r.src) || !(vol > 0) || !(kd <= 28)) return true
  if (r.role === 'tag' || r.role === 'lsi' || r.type === 'brand-hub' || r.type === 'home') return false
  return !/Transactional|Commercial/.test(r.intent)
}
const used = new Set(rows.filter(r => r.role !== 'lsi' || true).map(r => r.kw.toLowerCase()))
const stats = { removed: 0, added: 0, skippedFine: 0, skippedNoRow: 0, noReplacement: 0, dupBlocked: 0 }
const touched = new Set(), primaryChanged = new Map()
const log = []

const addRow = (url, type, role, kw, vol, kd, letters) => {
  if (used.has(kw.toLowerCase())) { stats.dupBlocked++; log.push(`DUP BLOCKED ${url} ${kw}`); return false }
  rows.push({ url, type, role, kw, vol: String(vol), kd: String(kd), intent: intentWords(letters), src: SRC }); used.add(kw.toLowerCase()); stats.added++; touched.add(url); return true
}
const dropRow = r => { rows = rows.filter(x => x !== r); used.delete(r.kw.toLowerCase()); stats.removed++; touched.add(r.url) }

// ---- non-product pages (brand hubs, categories, blogs, local, hubs): one replacement per bad row
const other = read('docs/phase-c/proposal-other-pages.csv').slice(1).filter(Boolean).map(parse)
for (const [url, ptype, role, oldKw, , newKw, vol, kd, it] of other) {
  if (url === '/') continue // home page keywords stay (owner-approved mapping gave no on-topic replacement)
  const old = rows.find(r => r.url === url && r.kw.toLowerCase() === oldKw.toLowerCase())
  if (!newKw) { stats.noReplacement++; continue }
  if (!old) { stats.skippedNoRow++; log.push(`NO ROW ${url} ${oldKw}`); continue }
  if (!trulyBad(old)) { stats.skippedFine++; continue }
  const oldRole = old.role, oldType = old.type
  if (used.has(newKw.toLowerCase())) { stats.dupBlocked++; log.push(`DUP BLOCKED ${url} ${newKw}`); continue }
  const idx = rows.indexOf(old)
  rows.splice(idx, 1); used.delete(old.kw.toLowerCase()); stats.removed++
  rows.splice(idx, 0, { url, type: oldType, role: oldRole, kw: newKw, vol: String(vol), kd: String(kd), intent: intentWords(it), src: SRC })
  used.add(newKw.toLowerCase()); stats.added++; touched.add(url)
  if (oldRole === 'primary') primaryChanged.set(url, { from: old.kw, to: newKw })
}

// ---- product pages
const PREJ = new Set(JSON.parse(fs.readFileSync('docs/phase-c/product-rejects.json', 'utf8')).keywords.map(s => s.toLowerCase()))
const prods = read('docs/phase-c/proposal-products.csv').slice(1).filter(Boolean).map(parse)
for (const p of prods) {
  const [url, , , , , removeList, propPrimary, , newList, status] = p
  if (/NO DATA/.test(status)) continue
  const remove = new Set(String(removeList).split('; ').filter(Boolean).map(s => s.toLowerCase()))
  const mine = () => rows.filter(r => r.url === url)
  const news = String(newList).split('; ').filter(Boolean).map(s => { const m = s.match(/^(.*) (\d+)\/(\d+)\/([A-Z]+)$/); return m ? { kw: m[1], vol: m[2], kd: m[3], it: m[4] } : null }).filter(Boolean).filter(n => !PREJ.has(n.kw.toLowerCase()))
  // a page is only touched when it still has at least one real Semrush keyword afterwards (kept rows or vetted new ones)
  const keptReal = mine().filter(r => !(remove.has(r.kw.toLowerCase()) && trulyBad(r)) && !trulyBad(r))
  if (!keptReal.length && !news.length) { stats.productsSkipped = (stats.productsSkipped || 0) + 1; continue }
  for (const r of mine()) if (remove.has(r.kw.toLowerCase()) && trulyBad(r)) dropRow(r)
  const ptype = (mine()[0] || {}).type || 'product'
  for (const n of news) addRow(url, ptype, 'secondary', n.kw, n.vol, n.kd, n.it)
  // exactly one primary: the proposed primary if the page lost its primary
  if (!mine().some(r => r.role === 'primary')) {
    const cand = mine().find(r => r.kw.toLowerCase() === propPrimary.toLowerCase()) || mine().filter(r => r.role === 'secondary').sort((a, b) => b.vol - a.vol)[0]
    if (cand) { cand.role = 'primary'; primaryChanged.set(url, { from: '', to: cand.kw }) }
  }
  // at most 5 secondaries: the rest become lsi
  const secs = mine().filter(r => r.role === 'secondary').sort((a, b) => parseFloat(b.vol) - parseFloat(a.vol))
  secs.slice(5).forEach(r => { r.role = 'lsi' })
}

// ---- hand-set promotions: a blog whose title and H1 are built on a phrase keeps that wording; the closest compliant secondary becomes the primary
const PROMOTE = { '/blog/electric-motorcycle-bikes/': 'electric motorcycle bike' }
for (const [url, kw] of Object.entries(PROMOTE)) {
  const cand = rows.find(r => r.url === url && r.kw.toLowerCase() === kw)
  const cur = rows.find(r => r.url === url && r.role === 'primary')
  if (cand && cur && cand !== cur) { cur.role = 'secondary'; cand.role = 'primary'; touched.add(url); primaryChanged.set(url, { from: cur.kw, to: cand.kw }) }
}
// ---- write the register (stable order: keep file order, new rows were inserted in place or appended)
const out = [head, ...rows.map(r => [r.url, r.type, r.role, qcsv(r.kw), r.vol, r.kd, qcsv(r.intent), r.src].join(','))].join('\n') + '\n'

// ---- seo.generated.json: kw = primary then secondaries (register order), for touched URLs; keyword-led meta and alt follow a new primary
const seo = JSON.parse(fs.readFileSync('src/config/seo.generated.json', 'utf8'))
let seoChanged = 0
const cap = s => s.charAt(0).toUpperCase() + s.slice(1)
const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
for (const url of touched) {
  const e = seo[url]; if (!e) continue
  const mine = rows.filter(r => r.url === url)
  const prim = mine.find(r => r.role === 'primary'); if (!prim) continue
  const kw = [prim.kw, ...mine.filter(r => r.role === 'secondary').map(r => r.kw)]
  const before = JSON.stringify(e.kw)
  const pc = primaryChanged.get(url)
  if (pc && pc.from && /^\/(brands|shop)\/[^/]+\/$/.test(url)) {
    // category and brand hub copy leads with the primary keyword: "<Primary>: shop ..." and alt "<primary> — ..."
    const metaRe = new RegExp('^' + esc(pc.from) + '(?=:)', 'i'), altRe = new RegExp('^' + esc(pc.from) + '(?= — )', 'i')
    if (metaRe.test(e.meta)) e.meta = e.meta.replace(metaRe, cap(pc.to))
    if (altRe.test(e.alt)) e.alt = e.alt.replace(altRe, pc.to)
  }
  e.kw = kw
  if (JSON.stringify(e.kw) !== before) seoChanged++
}

// ---- blog posts: focus, secondary and tags in the post module (refresh/ or new/)
const q = s => "'" + String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'"
const blogEdits = []
for (const url of touched) {
  const m = url.match(/^\/blog\/([^/]+)\/$/); if (!m) continue
  const slug = m[1]
  const files = [`src/content/blog/refresh/${slug}.js`, `src/content/blog/new/${slug}.js`].filter(f => fs.existsSync(f))
  if (!files.length) { log.push(`NO MODULE for ${url}`); continue }
  const mine = rows.filter(r => r.url === url)
  const focus = mine.find(r => r.role === 'primary'); const sec = mine.filter(r => r.role === 'secondary').map(r => r.kw), tags = mine.filter(r => r.role === 'tag').map(r => r.kw)
  for (const f of files) {
    let t = fs.readFileSync(f, 'utf8'); const orig = t
    const arr = a => '[' + a.map(q).join(', ') + ']'
    if (focus) t = t.replace(/^(\s*focus: )'(?:[^'\\]|\\.)*'/m, (_, a) => a + q(focus.kw))
    if (sec.length) t = t.replace(/^(\s*secondary: )\[[^\n]*\]/m, (_, a) => a + arr(sec))
    if (tags.length) t = t.replace(/^(\s*tags: )\[[^\n]*\]/m, (_, a) => a + arr(tags))
    if (focus && sec.length) t = t.replace(/^(\s*keywords: \{ primary: )'(?:[^'\\]|\\.)*'(, supporting: )\[[^\n]*\](?= \})/m, (_, a, b) => a + q(focus.kw) + b + arr(sec))
    if (t !== orig) { blogEdits.push(f); if (!DRY) fs.writeFileSync(f, t) }
  }
}

console.log(JSON.stringify({ ...stats, touchedUrls: touched.size, seoKwChanged: seoChanged, blogFilesEdited: blogEdits.length, primaryChanges: primaryChanged.size }))
for (const [u, v] of primaryChanged) console.log('PRIMARY', u, v.from || '(promoted)', '->', v.to)
if (log.length) console.log(log.slice(0, 40).join('\n'))
if (!DRY) {
  fs.writeFileSync('docs/used-keywords.csv', out)
  fs.writeFileSync('src/config/seo.generated.json', JSON.stringify(seo))
  console.log('written')
} else console.log('dry run: nothing written')
