// Sends to IndexNow every page whose keyword rows changed in the Phase D commit, plus the sitemap.
// Usage: node scripts/phase-c/indexnow-touched.mjs [base-commit]   (default: the commit before HEAD)
import { execSync } from 'node:child_process'
const base = process.argv[2] || 'HEAD~1'
const host = 'torquee-bikesaustralia.com.au', key = '3d25546c539db77eb90afb071f5a39b5'
const diff = execSync(`git diff ${base} HEAD -U0 -- docs/used-keywords.csv`, { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 })
const urls = new Set()
for (const l of diff.split('\n')) {
  if (!/^[+-]\//.test(l)) continue
  const u = l.slice(1).split(',')[0]
  if (u === '/' || u.startsWith('/')) urls.add(u)
}
const list = [`https://${host}/sitemap.xml`, ...[...urls].map(u => `https://${host}${u}`)]
const r = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST', headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ host, key, keyLocation: `https://${host}/${key}.txt`, urlList: list }),
})
console.log(list.length, 'urls ->', r.status, await r.text())
