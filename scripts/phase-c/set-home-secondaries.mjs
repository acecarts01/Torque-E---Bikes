import fs from 'node:fs'
const rows = [
 ['electric motorbikes for sale',210,24,'Transactional'],['for sale ebike',140,28,'Transactional'],['cheap e bikes for sale',110,21,'Transactional'],
 ['e bike with price',110,26,'Transactional'],['e bikes on sale',70,17,'Transactional'],['electric bicycle deals',50,11,'Transactional'],['e-bike sale',50,16,'Transactional'],
 ['e bike australia',1900,20,'Commercial'],['cheap e bikes',1300,18,'Commercial'],['electric motorbike australia',1300,22,'Commercial']]
let csv = fs.readFileSync('docs/used-keywords.csv', 'utf8').replace(/\r\n/g, '\n')
const have = new Set(csv.split('\n').slice(1).map(l => l.split(',')[3]))
for (const r of rows) if (have.has(r[0])) throw new Error('already used: ' + r[0])
const anchor = '/,home,secondary,torque ebikes,3600,20,Navigational,competitor'
csv = csv.replace(anchor, rows.map(r => `/,home,secondary,${r[0]},${r[1]},${r[2]},${r[3]},semrush-2026-11`).join('\n') + '\n' + anchor)
fs.writeFileSync('docs/used-keywords.csv', csv)
const p = 'src/config/seo.generated.json'
const s = JSON.parse(fs.readFileSync(p, 'utf8'))
s['/'].kw = [s['/'].kw[0], ...rows.map(r => r[0]), ...s['/'].kw.slice(1)]
fs.writeFileSync(p, JSON.stringify(s))
console.log(s['/'].kw)
