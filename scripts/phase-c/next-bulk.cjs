// Phase C: writes docs/phase-c/next-bulk.js, one line of JavaScript for a logged-in Semrush Keyword Overview > Bulk Analysis tab
// (open https://<host>.semrush.com.in/analytics/keywordoverview/bulk/?q=x&db=au first). It pastes each batch of up to 100 keywords,
// clicks Analyze, parses intent/volume/KD, and after the last batch navigates to the local receiver which saves
// docs/semrush-raw/phaseC-bulk-NNN.txt ("#bulk-bNNN" headings, then "keyword|intent|volume|kd" rows; "#nodata-bNNN" lists keywords with no row).
// Usage: node scripts/phase-c/next-bulk.cjs [batchesPerFile=4]   (a batch is done when its "#bulk-bNNN" heading exists in a saved file)
const fs = require('fs'), path = require('path')
const ROOT = path.resolve(__dirname, '../..')
const RAW = path.join(ROOT, 'docs/semrush-raw'), PC = path.join(ROOT, 'docs/phase-c')
const per = +process.argv[2] || 4
const queue = JSON.parse(fs.readFileSync(path.join(PC, 'bulk-queue.json'), 'utf8'))
const done = new Set()
for (const f of fs.readdirSync(RAW).filter(f => /^phaseC-bulk-\d+\.txt$/.test(f))) for (const l of fs.readFileSync(path.join(RAW, f), 'utf8').split(/\r?\n/)) { const m = l.match(/^#bulk-(b\d+)/); if (m) done.add(m[1]) }
const todo = queue.filter(b => !done.has(b.id)), chunk = todo.slice(0, per)
const n = fs.readdirSync(RAW).filter(f => /^phaseC-bulk-\d+\.txt$/.test(f)).length + 1
const name = 'phaseC-bulk-' + String(n).padStart(3, '0')
const code = `(() => { const NL = String.fromCharCode(10), Z = String.fromCharCode(8203); const sleep = ms => new Promise(r => setTimeout(r, ms)); const txt = () => (document.body && document.body.innerText) || '';
const editor = () => document.querySelector('[contenteditable=true]');
const analyze = () => { const bs = [...document.querySelectorAll('button')].filter(b => (b.innerText || '').trim() === 'Analyze'); return bs[bs.length - 1] };
const parse = (set) => { const L = txt().split(NL).map(s => s.trim()).filter(Boolean); const out = {}; const i0 = L.findIndex(x => /^Bulk Keyword Analysis/.test(x)); for (let i = Math.max(0, i0); i < L.length - 1; i++) { if (L[i] === L[i + 1] && set.has(L[i]) && !out[L[i]]) { let j = i + 2; const it = []; while (j < L.length && !/^([0-9][0-9.,]*K?|n\\/a)$/.test(L[j])) { if (/^[INCT]$/.test(L[j])) it.push(L[j]); j++ } out[L[i]] = [it.join(''), L[j], L[j + 1]]; } } return out };
window.__B = {}; window.__BS = { i: 0, total: 0, done: false, err: '' };
window.__runBulk = async (batches) => { window.__BS = { i: 0, total: batches.length, done: false, err: '' };
 for (const b of batches) { try { const ed = editor(), btn = analyze(); if (!ed || !btn) { window.__BS.err = 'no editor/button at ' + b.id; break } ed.focus(); document.execCommand('selectAll'); const dt = new DataTransfer(); dt.setData('text/plain', b.kws.join(NL)); ed.dispatchEvent(new ClipboardEvent('paste', { clipboardData: dt, bubbles: true, cancelable: true })); await sleep(800); analyze().click(); const set = new Set(b.kws); await sleep(6000); let got = {}, last = -1; for (let t = 0; t < 40; t++) { got = parse(set); const n = Object.keys(got).length; if (n > 0 && n === last) break; last = n; await sleep(1500) } window.__B[b.id] = { got, nodata: b.kws.filter(k => !got[k]) } } catch (e) { window.__B[b.id] = { got: {}, nodata: [], err: String(e) } } window.__BS.i++ }
 window.__BS.done = true };
window.__sendBulk = (name) => { const parts = []; for (const [id, r] of Object.entries(window.__B)) { parts.push('#bulk-' + id); for (const [k, v] of Object.entries(r.got)) parts.push([k, v[0], v[1], v[2]].join('|')); parts.push('#nodata-' + id + ' ' + r.nodata.join(';')) } location.href = 'http://localhost:3999/g?n=' + encodeURIComponent(name) + '&d=' + encodeURIComponent(parts.join(NL)) };
return 'bulk loop installed' })(); window.__runBulk(${JSON.stringify(chunk)}).then(() => window.__sendBulk(${JSON.stringify(name)})); 'started ${name}: ${chunk.map(b => b.id).join(',')}'`
fs.writeFileSync(path.join(PC, 'next-bulk.js'), code.replace(/\n/g, ' '))
console.log(`batches total ${queue.length}, done ${queue.length - todo.length}, remaining ${todo.length}; next file ${name}: ${chunk.map(b => b.id).join(',')}; code length ${code.length}`)
