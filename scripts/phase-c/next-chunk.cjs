// Phase C (keyword mapping): prints the next chunk of Semrush queries that have not been saved yet, and writes
// docs/phase-c/next-chunk.js, one line of JavaScript to paste into the Semrush Keyword Magic tab (installs the
// in-page loop, runs the chunk, then sends the results to the local receiver which saves docs/semrush-raw/phaseC-cNNN.txt).
// Usage: node scripts/phase-c/next-chunk.cjs [size=25]
// Resume rule: a query counts as done when a "#query" heading for it exists in any docs/semrush-raw/phaseC-*.txt file.
const fs = require('fs'), path = require('path')
const ROOT = path.resolve(__dirname, '../..')
const RAW = path.join(ROOT, 'docs/semrush-raw'), PC = path.join(ROOT, 'docs/phase-c')
const size = +process.argv[2] || 25
const done = new Set()
for (const f of fs.readdirSync(RAW).filter(f => /^phaseC-.*\.txt$/.test(f))) {
  for (const l of fs.readFileSync(path.join(RAW, f), 'utf8').split(/\r?\n/)) if (l[0] === '#') done.add(l.slice(1).replace(/ \[nothing found\]$/, '').trim().toLowerCase())
}
const order = ['queries-brand.json', 'queries-A.json', 'queries-B.json', 'queries-extra.json']
const all = []
for (const f of order) {
  const p = path.join(PC, f)
  if (fs.existsSync(p)) for (const q of JSON.parse(fs.readFileSync(p, 'utf8'))) if (!all.includes(q)) all.push(q)
}
const todo = all.filter(q => !done.has(q.toLowerCase()))
const chunk = todo.slice(0, size)
const n = fs.readdirSync(RAW).filter(f => /^phaseC-c\d+\.txt$/.test(f)).length + 1
const name = 'phaseC-c' + String(n).padStart(3, '0')
const loop = fs.readFileSync(path.join(__dirname, 'loop.js'), 'utf8').replace(/^\s*\/\/[^\n]*$/gm, '').replace(/\s*\n\s*/g, ' ').trim().replace(/;$/, '')
const js = `${loop}; window.__R = {}; window.__run(${JSON.stringify(chunk)}).then(() => window.__send(${JSON.stringify(name)})); 'started ${name} with ${chunk.length} queries'`
fs.writeFileSync(path.join(PC, 'next-chunk.js'), js)
console.log(`total ${all.length}, done ${all.length - todo.length}, remaining ${todo.length}; next file ${name}, ${chunk.length} queries; code length ${js.length}`)
