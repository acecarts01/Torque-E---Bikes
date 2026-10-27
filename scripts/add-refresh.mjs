// Registers a refresh patch file in the meta and body indexes. Usage: node scripts/add-refresh.mjs <slug> [<slug> ...]
import fs from 'node:fs'
const camel = s => s.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase()).replace(/^(\d)/, '_$1')
for (const slug of process.argv.slice(2)) {
  for (const [file, kind] of [['meta-index.js', 'meta'], ['body-index.js', 'body']]) {
    const p = `src/content/blog/refresh/${file}`
    let s = fs.readFileSync(p, 'utf8')
    if (s.includes(`'${slug}'`)) continue
    const v = camel(slug)
    s = s.replace(/\n\nexport const/, `\nimport { ${kind} as ${v} } from './${slug}.js'\n\nexport const`)
    s = s.replace(/\n}\n$/, `\n  '${slug}': ${v},\n}\n`)
    fs.writeFileSync(p, s)
  }
  console.log('registered', slug)
}
