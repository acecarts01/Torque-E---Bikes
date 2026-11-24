import fs from 'node:fs'
const KW = 'electric motorcycle for sale'
let csv = fs.readFileSync('docs/used-keywords.csv', 'utf8')
csv = csv.replace('/,home,primary,torque ebikes,3600,20,Navigational,competitor', `/,home,primary,${KW},320,25,Transactional,semrush-2026-11\n/,home,secondary,torque ebikes,3600,20,Navigational,competitor`)
fs.writeFileSync('docs/used-keywords.csv', csv)
const p = 'src/config/seo.generated.json'
const s = JSON.parse(fs.readFileSync(p, 'utf8'))
Object.assign(s['/'], {
  title: 'Electric Motorcycle for Sale Australia | Torque E-Bikes',
  h1: 'Electric motorcycle for sale: electric dirt bikes, e-bikes and parts shipped Australia-wide',
  meta: 'Electric motorcycle for sale in Australia: electric dirt bikes, e-bikes, conversion kits and parts, shipped Australia-wide from Brisbane. Dirt bikes are off-road only.',
  alt: 'Electric motorcycle for sale at Torque E-Bikes: electric dirt bike range',
  kw: [KW, 'torque ebikes', 'torque e bikes conversion kit', 'torque e-bikes australia', 'torque e-bikes brisbane'],
})
fs.writeFileSync(p, JSON.stringify(s))
