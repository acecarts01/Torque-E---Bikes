// Fetches each new post from a running server and checks structure + that every internal link answers 200.
const base = process.argv[2] || 'http://localhost:3200'
const slugs = ['lubricant-for-bike-chains', 'e-bike-batteries', 'e-bike-battery-charger', 'childs-electric-bike', 'sur-ron-for-sale']
for (const s of slugs) {
  const h = await (await fetch(`${base}/blog/${s}/`)).text()
  const count = re => (h.match(re) || []).length
  const links = [...new Set([...h.matchAll(/href="(\/[^"#]*)"/g)].map(m => m[1]))].filter(l => /^\/(shop|blog)\//.test(l))
  const bad = []
  for (const l of links) { const r = await fetch(base + l, { method: 'HEAD' }); if (r.status !== 200) bad.push(l + ' ' + r.status) }
  const ld = [...h.matchAll(/application\/ld\+json">(.*?)<\/script>/g)].map(m => JSON.parse(m[1])['@type'])
  const toc = count(/aria-label="In this guide"/)
  const tagsItems = (h.match(/aria-label="Tags".*?<\/ul>/s) || [''])[0].split('<li').length - 1
  const anchors = [...h.matchAll(/href="#([^"]+)"/g)].map(m => m[1]).filter(a => !h.includes(`id="${a}"`))
  console.log(s, '| h1', count(/<h1[ >]/g), '| toc', toc, '| tags', tagsItems, '| ld', ld.join(','), '| links', links.length, 'bad', JSON.stringify(bad), '| broken toc anchors', anchors.length)
}
const idx = await (await fetch(`${base}/blog/`)).text()
console.log('blog index lists:', slugs.filter(s => idx.includes(`/blog/${s}/`)).length, '/ 5')
for (const [p, s] of [['/shop/care-tools-and-hydration/', 'lubricant-for-bike-chains'], ['/shop/batteries-chargers-and-electronics/', 'e-bike-batteries'], ['/shop/kids-and-youth-e-bikes/', 'childs-electric-bike'], ['/shop/electric-dirt-bikes/', 'sur-ron-for-sale'], ['/shop/batteries-chargers-and-electronics/fatboy-charger-52v/', 'e-bike-battery-charger']]) {
  const h = await (await fetch(base + p)).text()
  console.log('inbound', p, '->', s, h.includes(`/blog/${s}/`))
}
const sm = await (await fetch(`${base}/sitemap.xml`)).text()
console.log('sitemap has', slugs.filter(s => sm.includes(`/blog/${s}/`)).length, '/ 5')
