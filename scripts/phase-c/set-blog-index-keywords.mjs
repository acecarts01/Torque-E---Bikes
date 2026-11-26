import fs from 'node:fs'
const rows = [
 ['primary','buying e bike',110,26,'Transactional'],
 ['secondary','best e bike brands',4400,21,'Commercial'],['secondary','electric bicycle reviews',260,25,'Commercial'],['secondary','ebikes best',170,17,'Commercial'],
 ['secondary','best electric bikes in australia',140,8,'Commercial'],['secondary','electric bike review australia',140,11,'Commercial'],
 ['secondary','best value electric bike',110,14,'Commercial'],['secondary','best budget ebike',110,27,'Commercial'],
 ['secondary','electric bike brands australia',90,8,'Commercial'],['secondary','longest range electric bike australia',70,6,'Commercial'],
 ['secondary','lightweight electric bike australia',110,18,'Commercial']]
let csv = fs.readFileSync('docs/used-keywords.csv', 'utf8').replace(/\r\n/g, '\n')
const have = new Set(csv.split('\n').slice(1).map(l => l.split(',')[3]))
for (const r of rows) if (have.has(r[1])) throw new Error('already used: ' + r[1])
if (!csv.endsWith('\n')) csv += '\n'
csv += rows.map(r => `/blog/,blog-index,${r[0]},${r[1]},${r[2]},${r[3]},${r[4]},semrush-2026-11`).join('\n') + '\n'
fs.writeFileSync('docs/used-keywords.csv', csv)
const p = 'src/config/seo.generated.json'
const s = JSON.parse(fs.readFileSync(p, 'utf8'))
s['/blog/'] = {
  title: 'Buying E Bike Guides, Reviews & Best Brands',
  h1: 'Buying e bike guides and electric bicycle reviews for Australia',
  meta: 'Buying e bike guides, electric bicycle reviews and the best e bike brands in Australia, with conversion kit and off-road rules explained.',
  alt: 'Buying e bike guides and electric bicycle reviews from Torque E-Bikes',
  kw: rows.map(r => r[1]),
}
fs.writeFileSync(p, JSON.stringify(s))
console.log(s['/blog/'].title.length + 17, s['/blog/'].meta.length)
