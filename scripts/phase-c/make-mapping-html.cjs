// Phase C: builds docs/phase-c/mapping.html from the proposal CSVs so the whole mapping can be reviewed in the browser pane.
// Nothing is inserted into the website by this script.
const fs = require('fs'), path = require('path')
const ROOT = path.resolve(__dirname, '../..'); process.chdir(ROOT)
const parse = l => { const o = []; let c = '', q = false; for (const ch of l) { if (ch === '"') q = !q; else if (ch === ',' && !q) { o.push(c); c = '' } else c += ch } o.push(c); return o }
const read = f => fs.readFileSync(f, 'utf8').split(/\r?\n/).slice(1).filter(Boolean).map(parse)
const esc = s => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const other = read('docs/phase-c/proposal-other-pages.csv')
const prods = read('docs/phase-c/proposal-products.csv')
const nokw = read('docs/phase-c/proposal-no-keyword-pages.csv')
const nodata = read('docs/phase-c/no-data-products.csv')
const rel = read('docs/phase-c/released-keywords.csv')
const group = t => other.filter(r => t.includes(r[1]))
const otherTable = rows => {
  const by = {}; for (const r of rows) (by[r[0]] = by[r[0]] || []).push(r)
  return Object.entries(by).map(([u, rs]) => {
    const ok = rs.filter(r => r[5]).length
    return `<details class="pg" data-q="${esc(u)} ${esc(rs.map(r => r[3] + ' ' + r[5]).join(' '))}"><summary><b>${esc(u)}</b> <span class="n">${ok}/${rs.length} replaced</span></summary>
<table><tr><th>role</th><th>remove (current)</th><th>current</th><th>proposed replacement (Semrush AU)</th><th>vol</th><th>KD</th><th>intent</th></tr>
${rs.map(r => `<tr class="${r[5] ? 'ok' : 'none'}"><td>${esc(r[2])}</td><td>${esc(r[3])}</td><td>${esc(r[4])}</td><td>${r[5] ? '<b>' + esc(r[5]) + '</b>' : '<i>no valid on-topic Semrush row found</i>'}</td><td>${esc(r[6])}</td><td>${esc(r[7])}</td><td>${esc(r[8])}</td></tr>`).join('')}</table></details>`
  }).join('\n')
}
const prodRows = prods.filter(r => r[9] && !/NO DATA/.test(r[9]))
const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Phase C keyword mapping (proposal, nothing inserted)</title>
<style>
body{font:14px/1.45 system-ui,Segoe UI,Arial,sans-serif;margin:0;background:#101214;color:#e8e8e8}
header{position:sticky;top:0;background:#16181b;border-bottom:1px solid #333;padding:10px 16px;z-index:5}
h1{font-size:16px;margin:0 0 6px}h2{margin:28px 16px 8px;font-size:18px;color:#ff6a1a}
nav a{color:#9cc;margin-right:14px;text-decoration:none}input{width:min(420px,90%);padding:6px 10px;background:#0b0c0d;border:1px solid #444;color:#fff;border-radius:6px}
.pg{margin:6px 16px;background:#16181b;border:1px solid #2a2d31;border-radius:6px}summary{padding:8px 10px;cursor:pointer}.n{color:#9a9;margin-left:8px;font-size:12px}
table{border-collapse:collapse;width:calc(100% - 20px);margin:0 10px 10px;font-size:13px}th,td{border-bottom:1px solid #2a2d31;padding:4px 6px;text-align:left;vertical-align:top}th{color:#aaa}
tr.none td{color:#c88}tr.ok td b{color:#7fdc8f}.note{margin:6px 16px;color:#bbb;max-width:980px}.big{overflow-x:auto}
</style></head><body>
<header><h1>Phase C keyword mapping: proposal for review (nothing has been inserted into the website)</h1>
<nav><a href="#blogs">Blogs</a><a href="#cats">Categories</a><a href="#brands">Brand hubs</a><a href="#core">Home / shop / local</a><a href="#products">Products</a><a href="#nodata">No-demand products (kept)</a><a href="#utility">Utility pages</a></nav>
<input id="f" placeholder="Filter by page or keyword..." oninput="var q=this.value.toLowerCase();document.querySelectorAll('.pg').forEach(function(e){e.style.display=(e.dataset.q||'').toLowerCase().indexOf(q)<0?'none':''})"></header>
<p class="note">Rules applied: Semrush AU rows only, volume above 0, KD 28 or lower, one keyword on one page, no model we do not stock, nothing implying a bike over 250 W is road legal. Green = proposed replacement, red = no valid on-topic Semrush row was found (the keyword is left for your decision).</p>
<h2 id="blogs">Blogs and tools (tags and secondaries)</h2><div>${otherTable(group(['blog']))}</div>
<h2 id="cats">Category pages</h2><div>${otherTable(group(['category']))}</div>
<h2 id="brands">Brand hubs (kept as is: four have no product yet: electro-and-co, mondraker, thule, yozma)</h2><div>${otherTable(group(['brand-hub']))}</div>
<h2 id="core">Home, shop, local and hubs</h2><div>${otherTable(group(['home', 'shop', 'local', 'new-hub']))}</div>
<h2 id="products">Products with proposed keywords (${prodRows.length} of ${prods.length} pages)</h2>
<div class="big"><table><tr><th>page</th><th>current primary</th><th>proposed primary</th><th>proposed secondaries</th><th>new keywords (vol/KD/intent)</th><th>status</th></tr>
${prodRows.map(r => `<tr><td>${esc(r[1])}<br><small>${esc(r[0])}</small></td><td>${esc(r[4])}</td><td><b>${esc(r[6])}</b></td><td>${esc(r[7])}</td><td>${esc(r[8])}</td><td>${esc(r[9])}</td></tr>`).join('')}</table></div>
<h2 id="nodata">Products with no usable Semrush keyword (${nodata.length}): owner decision = KEEP, no change</h2>
<p class="note">They keep their current keywords. Full list: docs/phase-c/no-data-products.csv.</p>
<h2 id="utility">Pages with no keywords (13)</h2>
<div class="big"><table><tr><th>page</th><th>kind</th><th>proposal</th></tr>${nokw.map(r => `<tr><td>${esc(r[0])}</td><td>${esc(r[1])}</td><td>${/^\/(brands|compare|faq)\/$/.test(r[0]) || r[1] === 'product' ? esc(r[2]) : 'No keywords (approved by owner for utility and policy pages)'}</td></tr>`).join('')}</table></div>
<p class="note">Flagged but kept: ${rel.length} real keywords on product pages that do not name the product model (docs/phase-c/released-keywords.csv).</p>
</body></html>`
fs.writeFileSync('docs/phase-c/mapping.html', html)
console.log('mapping.html', Math.round(html.length / 1024) + ' KB')
