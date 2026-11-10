// Phase E: crawls every URL in the live sitemap and checks status, canonical, one H1, meta description length, and JSON-LD validity.
// Usage: node scripts/phase-c/live-verify.mjs
const base = 'https://torquee-bikesaustralia.com.au'
const xml = await (await fetch(base + '/sitemap.xml')).text()
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1])
console.log('sitemap urls', urls.length)
const problems = [], stats = { ok: 0 }
const check = async url => {
  let html = '', status = 0
  for (let t = 0; t < 3; t++) { try { const r = await fetch(url, { redirect: 'manual' }); status = r.status; html = await r.text(); break } catch { await new Promise(r => setTimeout(r, 800)) } }
  const p = []
  if (status !== 200) p.push('status ' + status)
  else {
    const h1 = (html.match(/<h1[\s>]/g) || []).length
    if (h1 !== 1) p.push('h1 count ' + h1)
    const canon = (html.match(/<link rel="canonical" href="([^"]+)"/) || [])[1]
    if (!canon) p.push('no canonical'); else if (canon !== url) p.push('canonical ' + canon)
    const d = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1]
    if (!d) p.push('no meta description'); else if (d.length < 70 || d.length > 175) p.push('meta length ' + d.length)
    for (const m of html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) { try { JSON.parse(m[1]) } catch { p.push('bad JSON-LD'); break } }
    const text = html.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ')
    if (/\bGST\b/.test(text)) p.push('GST wording')
  }
  if (p.length) problems.push(url.replace(base, '') + ' :: ' + p.join('; ')); else stats.ok++
}
const queue = [...urls]
await Promise.all(Array.from({ length: 8 }, async () => { while (queue.length) await check(queue.shift()) }))
console.log('ok', stats.ok, 'problems', problems.length)
console.log(problems.slice(0, 60).join('\n'))
