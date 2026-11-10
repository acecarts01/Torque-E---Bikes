// Releases the register rows held by brand hubs that now 308-redirect (merged hubs) and plans where each real keyword will be used.
// Usage: node scripts/phase-c/release-merged.mjs [--apply]   (without --apply it only writes the plan files)
// Plan files: docs/phase-c/release-plan.csv, docs/phase-c/release-plan.html. --apply removes the released rows from docs/used-keywords.csv.
// Four brands have no product yet (mondraker, thule, yozma, electro-and-co): the owner will source products, so their rows are RESERVED (kept as they are).
import fs from 'node:fs'
const APPLY = process.argv.includes('--apply')
const parse = l => { const o = []; let c = '', q = false; for (const ch of l) { if (ch === '"') q = !q; else if (ch === ',' && !q) { o.push(c); c = '' } else c += ch } o.push(c); return o }
const qcsv = s => (/[",\n]/.test(String(s)) ? '"' + String(s).replace(/"/g, '""') + '"' : String(s))
const esc = s => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const regLines = fs.readFileSync('docs/used-keywords.csv', 'utf8').split(/\r?\n/)
const head = regLines[0]
const rows = regLines.slice(1).filter(Boolean).map(parse).map(r => ({ url: r[0], type: r[1], role: r[2], kw: r[3], vol: +r[4], kd: +r[5], intent: r[6], src: r[7] }))
const nonLive = JSON.parse(fs.readFileSync('docs/phase-c/nonlive-register-urls.json', 'utf8'))
const hubs = new Map(nonLive.filter(n => n[1] === 308 && /^\/brands\/[^/]+\/$/.test(n[0])).map(n => [n[0], n[2]]))
const m = fs.readFileSync('src/config/catalog-products.generated.js', 'utf8')
const cat = JSON.parse(m.slice(m.indexOf('[', m.indexOf('=')), m.lastIndexOf(']') + 1))
const noindex = new Set(JSON.parse(fs.readFileSync('src/config/noindex-products.json', 'utf8')))
const slugify = s => String(s).toLowerCase().replace(/&/g, ' ').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
const norm = s => s.toLowerCase().replace(/[^a-z0-9. ]/g, ' ').replace(/\s+/g, ' ').trim()
const GENERIC = new Set(['e', 'bike', 'bikes', 'ebike', 'ebikes', 'electric', 'the', 'and', 'with', 'for', 'australia', 'buy', 'price', 'sale', 'review', 'new', 'best', 'cheap', 'models', 'pro', 'max', 'plus', 'kit', 'mini', 'top', 'speed'])
const DESC = new Set('mountain mtb emtb dirt pit balance kids kid children childrens child motorbike motorcycle moto scooter scooters charger battery controller helmet trike tricycle cargo folding fat tyre tire road gravel commuter city urban step through cruiser throttle motor kit parts part holder mount lock chain rack pannier light lights pump inch dual suspension full hardtail adults adult youth teen teens trail off roll frame cover headphones earbuds bone conduction swim carbon'.split(' '))
const byBrand = {}
for (const p of cat) (byBrand[slugify(p.brand)] = byBrand[slugify(p.brand)] || []).push({ ...p, url: `/shop/${p.category}/${p.slug}/` })
const prodRows = u => rows.filter(r => r.url === u)
const plan = [], dropped = [], reserved = []
const isReal = r => !/generated/i.test(r.src) && r.vol > 0 && r.kd <= 28
const tc = r => /Transactional|Commercial/.test(r.intent)
const slotsLeft = {}
for (const [hub, target] of hubs) {
  const slug = hub.split('/')[2]
  const prods = (byBrand[slug] || []).filter(p => !noindex.has(p.slug)).sort((a, b) => b.price - a.price)
  const hubRows = rows.filter(r => r.url === hub)
  if (!prods.length) { reserved.push(...hubRows.map(r => [hub, r.kw, r.role])); continue }
  const brandToks = new Set(slug.split('-'))
  for (const r of hubRows) {
    if (!isReal(r)) { dropped.push([hub, r.kw, r.role, /generated/i.test(r.src) ? 'generated' : r.vol > 0 ? 'KD above 28' : 'no volume']); continue }
    const toks = norm(r.kw).split(' ').filter(t => !GENERIC.has(t) && !brandToks.has(t))
    // a word that is neither a bike descriptor nor part of any stocked product name of the brand is a model we do not stock
    const stockedWords = new Set((byBrand[slug] || []).flatMap(p => norm(p.name).split(' ')))
    const unknown = toks.filter(t => !DESC.has(t) && ![...stockedWords].some(w => w === t || (w.length > 3 && t.length > 3 && (w.startsWith(t) || t.startsWith(w)))))
    if (unknown.length) { dropped.push([hub, r.kw, r.role, 'names a model we do not stock: ' + unknown.join(' ')]); continue }
    let best = null
    for (const p of prods) {
      const pt = new Set(norm(p.name).split(' '))
      const hit = toks.filter(t => pt.has(t) || [...pt].some(x => x.length > 3 && (x.startsWith(t) || t.startsWith(x)))).length
      if (hit && (!best || hit > best.hit)) best = { p, hit }
    }
    let dest, role, why
    if (best && toks.length && best.hit === toks.length) { dest = best.p; why = 'names the model: ' + best.p.name; role = tc(r) ? 'secondary' : 'lsi' }
    else if (!toks.length) { dest = prods[0]; why = 'brand-level term, flagship product: ' + dest.name; role = tc(r) ? 'secondary' : 'lsi' }
    else if (best) { dest = best.p; why = 'partly names ' + best.p.name; role = 'lsi' }
    else { dest = prods[0]; why = 'no model match, flagship product: ' + dest.name; role = 'lsi' }
    const k = dest.url
    slotsLeft[k] = slotsLeft[k] ?? (5 - prodRows(k).filter(x => x.role === 'secondary').length)
    if (role === 'secondary') { if (slotsLeft[k] > 0) slotsLeft[k]--; else { role = 'lsi'; why += ' (secondary slots full)' } }
    plan.push({ kw: r.kw, vol: r.vol, kd: r.kd, intent: r.intent, from: hub, to: dest.url, product: dest.name, role, why, redirectsTo: target })
  }
}
fs.writeFileSync('docs/phase-c/release-plan.csv', [['keyword', 'volume', 'kd', 'intent', 'was on (redirecting hub)', 'will be used on', 'product', 'role', 'why'].join(','), ...plan.map(p => [p.kw, p.vol, p.kd, p.intent, p.from, p.to, p.product, p.role, p.why].map(qcsv).join(','))].join('\n') + '\n')
const by = {}
for (const p of plan) (by[p.to] = by[p.to] || []).push(p)
const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Release plan: keywords from merged brand hubs</title>
<style>body{font:14px/1.45 system-ui,Arial,sans-serif;margin:0;background:#101214;color:#e8e8e8}header{padding:12px 16px;background:#16181b;border-bottom:1px solid #333;position:sticky;top:0}h1{font-size:16px;margin:0}h2{margin:22px 16px 8px;color:#ff6a1a;font-size:17px}.note{margin:6px 16px;color:#bbb;max-width:980px}
.pg{margin:6px 16px;background:#16181b;border:1px solid #2a2d31;border-radius:6px}summary{padding:8px 10px;cursor:pointer}table{border-collapse:collapse;width:calc(100% - 20px);margin:0 10px 10px;font-size:13px}th,td{border-bottom:1px solid #2a2d31;padding:4px 6px;text-align:left}th{color:#aaa}.sec b{color:#7fdc8f}.lsi{color:#bbb}input{width:min(420px,90%);padding:6px 10px;background:#0b0c0d;border:1px solid #444;color:#fff;border-radius:6px;margin-top:6px}</style></head><body>
<header><h1>Keywords released from ${hubs.size} merged brand hubs (they 308-redirect, so their keywords were tied to dead URLs)</h1><input placeholder="Filter by page or keyword..." oninput="var q=this.value.toLowerCase();document.querySelectorAll('.pg').forEach(function(e){e.style.display=(e.dataset.q||'').toLowerCase().indexOf(q)<0?'none':''})"></header>
<p class="note"><b>${plan.length}</b> real Semrush keywords get a destination (${plan.filter(p => p.role === 'secondary').length} as product secondary keywords that drive the hero alt text and internal-link anchors, ${plan.filter(p => p.role === 'lsi').length} as registered supporting terms). <b>${dropped.length}</b> junk rows (generated, no volume or KD above 28) are simply dropped. <b>${reserved.length}</b> rows on the four brands with no product yet (mondraker, thule, yozma, electro-and-co) stay reserved until you source their products. Nothing is placed on the site until you approve.</p>
<h2>Where each keyword will be used</h2>
${Object.entries(by).sort((a, b) => b[1].length - a[1].length).map(([u, ps]) => `<details class="pg" data-q="${esc(u)} ${esc(ps.map(p => p.kw).join(' '))}"><summary><b>${esc(ps[0].product)}</b> <small>${esc(u)}</small> &nbsp; ${ps.length} keywords</summary><table><tr><th>keyword</th><th>vol</th><th>KD</th><th>intent</th><th>role</th><th>was on</th><th>why</th></tr>${ps.map(p => `<tr class="${p.role === 'secondary' ? 'sec' : 'lsi'}"><td><b>${esc(p.kw)}</b></td><td>${p.vol}</td><td>${p.kd}</td><td>${esc(p.intent)}</td><td>${p.role}</td><td>${esc(p.from)}</td><td>${esc(p.why)}</td></tr>`).join('')}</table></details>`).join('\n')}
<h2>Dropped junk rows (${dropped.length})</h2><p class="note">${esc(dropped.map(d => d[1] + ' (' + d[3] + ')').slice(0, 400).join('; '))}</p>
<h2>Reserved for future products (${reserved.length})</h2><p class="note">${esc([...new Set(reserved.map(r => r[0]))].join(', '))}</p>
</body></html>`
fs.writeFileSync('docs/phase-c/release-plan.html', html)
console.log(JSON.stringify({ hubsRedirecting: hubs.size, planned: plan.length, asSecondary: plan.filter(p => p.role === 'secondary').length, asLsi: plan.filter(p => p.role === 'lsi').length, droppedJunk: dropped.length, reservedRows: reserved.length, destinations: Object.keys(by).length }))
if (APPLY) {
  const rel = new Set([...plan.map(p => p.from + '|' + p.kw.toLowerCase()), ...dropped.map(d => d[0] + '|' + d[1].toLowerCase())])
  const lines = regLines.slice(1).filter(Boolean)
  const keep = lines.filter(l => { const c = parse(l); return !rel.has(c[0] + '|' + c[3].toLowerCase()) })
  fs.writeFileSync('docs/used-keywords.csv', [head, ...keep].join('\n') + '\n')
  console.log('applied: removed', lines.length - keep.length, 'rows from the register')
}
