// Fills the keyword placeholders of a drafted post from the approved plan (docs/blog-plan-assignments-2026-11-06.json).
// In the draft use: focus: '__FOCUS__', secondary: __SEC__, tags: __TAGS__
// Usage: node scripts/fill-blog-keywords.mjs <slug> [<slug> ...]
import fs from 'node:fs'

const plan = JSON.parse(fs.readFileSync('docs/blog-plan-assignments-2026-11-06.json', 'utf8'))
const q = k => "'" + k.replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'"
for (const slug of process.argv.slice(2)) {
  const p = plan.find(x => x.slug === slug)
  if (!p) throw new Error('not in plan: ' + slug)
  const f = `src/content/blog/new/${slug}.js`
  let t = fs.readFileSync(f, 'utf8')
  if (!t.includes('__FOCUS__')) { console.log('already filled:', slug); continue }
  t = t.replace("'__FOCUS__'", () => q(p.main.kw)).replace('__SEC__', () => '[' + p.sec.map(e => q(e.kw)).join(', ') + ']').replace('__TAGS__', () => '[' + p.tags.map(e => q(e.kw)).join(', ') + ']')
  fs.writeFileSync(f, t)
  console.log('filled', slug, '|', p.main.kw, '|', p.sec.length, 'secondary |', p.tags.length, 'tags')
}
