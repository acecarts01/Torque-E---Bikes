// Finds every place the ABN is shown on the live site and whether it is a link that opens the official ABN Lookup profile.
// A link is good when its href is /abn-lookup/ (which redirects to the profile with the ABN already filled in) or the ABN Lookup profile URL itself.
// Usage: node scripts/phase-c/abn-links-check.mjs
const base = 'https://torquee-bikesaustralia.com.au'
const xml = await (await fetch(base + '/sitemap.xml')).text()
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1])
const ABN = /27\s?126\s?064\s?668|126\s?064\s?668/
const good = h => /^\/abn-lookup\/?$/.test(h) || /abr\.business\.gov\.au\/ABN\/View\?abn=27126064668/.test(h)
const rows = []
const run = async url => {
  let html = ''
  for (let t = 0; t < 3; t++) { try { html = await (await fetch(url)).text(); break } catch { await new Promise(r => setTimeout(r, 700)) } }
  const body = html.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ')
  const anchors = [...body.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)]
  const linked = anchors.filter(a => ABN.test(a[2].replace(/<[^>]+>/g, ' ')) || /abn/i.test((a[1].match(/aria-label="([^"]*)"/) || [])[1] || ''))
  const anchorsWithAbnHref = anchors.filter(a => /abn-lookup|abr\.business\.gov\.au/.test(a[1]))
  const stripped = body.replace(/<a\b[\s\S]*?<\/a>/g, ' ').replace(/<[^>]+>/g, ' ')
  const plain = (stripped.match(new RegExp(ABN.source, 'g')) || []).length
  const bad = anchorsWithAbnHref.filter(a => !good((a[1].match(/href="([^"]*)"/) || [])[1] || '')).map(a => (a[1].match(/href="([^"]*)"/) || [])[1])
  if (plain || bad.length || anchorsWithAbnHref.length) rows.push({ url: url.replace(base, '') || '/', linkedToAbn: anchorsWithAbnHref.length, plainTextAbn: plain, badHrefs: bad })
}
const queue = [...urls]
await Promise.all(Array.from({ length: 5 }, async () => { while (queue.length) await run(queue.shift()) }))
const withLink = rows.filter(r => r.linkedToAbn), plainOnly = rows.filter(r => r.plainTextAbn)
console.log('pages crawled', urls.length, '| pages with an ABN link', withLink.length, '| pages with ABN as plain text (not linked)', plainOnly.length, '| bad hrefs', rows.reduce((a, r) => a + r.badHrefs.length, 0))
console.log('plain-text pages:', JSON.stringify(plainOnly.slice(0, 40).map(r => r.url + ' x' + r.plainTextAbn)))
console.log('bad hrefs:', JSON.stringify(rows.filter(r => r.badHrefs.length).slice(0, 10)))
