// One-off edit of allocate.cjs: a blog whose slug gives no topic anchor must still get an electric-bike keyword; plus a hand-curated reject list.
const fs = require('fs')
const f = 'scripts/phase-c/allocate.cjs'
let s = fs.readFileSync(f, 'utf8')
const a = "(role !== 'tag' || anchors[0] === '*') && !isElectricTerm(kw)) return false"
if (!s.includes(a)) throw new Error('anchor line not found')
s = s.replace(a, () => "((/(^|-)(electric|ebike|ebikes|e-bike|e-bikes)(-|$)/.test(slug) && role !== 'tag') || anchors[0] === '*') && !isElectricTerm(kw)) return false")
// the slug-level check above that line is now redundant for '*' anchors; keep the original guard
s = s.replace("if (/(^|-)(electric|ebike|ebikes|e-bike|e-bikes)(-|$)/.test(slug) && (role !== 'tag' || anchors[0] === '*') && !isElectricTerm(kw)) return false", () => "")
// hand-curated rejects (read from docs/phase-c/rejects.json: { "<url>": ["keyword", ...], "*": ["keyword", ...] })
if (!s.includes('rejects.json')) {
  s = s.replace("const relevant = (pg, kw, role) => {", () => "const REJ = fs.existsSync('docs/phase-c/rejects.json') ? JSON.parse(fs.readFileSync('docs/phase-c/rejects.json', 'utf8')) : {}\nconst relevant = (pg, kw, role) => {\n  if ((REJ['*'] || []).includes(kw) || (REJ[pg.url] || []).includes(kw)) return false")
}
fs.writeFileSync(f, s)
console.log('ok')
