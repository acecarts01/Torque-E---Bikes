// Adds new post modules to src/content/blog/new/index.js (import + POSTS array). Safe to re-run.
// Usage: node scripts/register-blog-index.mjs <slug> [<slug> ...]
import fs from 'node:fs'

const f = 'src/content/blog/new/index.js'
let t = fs.readFileSync(f, 'utf8')
for (const slug of process.argv.slice(2)) {
  if (!fs.existsSync(`src/content/blog/new/${slug}.js`)) throw new Error('missing post file: ' + slug)
  const id = 'p_' + slug.replace(/[^a-z0-9]/gi, '_')
  if (t.includes(`from './${slug}.js'`)) { console.log('already registered:', slug); continue }
  t = t.replace(/(\r?\n)(\r?\n)const POSTS = \[/, (m, a, b) => `${a}import * as ${id} from './${slug}.js'${a}${b}const POSTS = [`)
  t = t.replace(/(const POSTS = \[[^\]]*)\]/, (m, a) => `${a}, ${id}]`)
  console.log('registered', slug)
}
fs.writeFileSync(f, t)
