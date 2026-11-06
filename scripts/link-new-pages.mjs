// Adds inbound links from relevant existing guides to the new scooter / go-kart pages (anchor = one of the target page's own T/C keywords)
// and records them in docs/link-plan.csv. Safe to re-run (a link already present is skipped).
// Usage: node scripts/link-new-pages.mjs [--apply]
import fs from 'node:fs'

const ROOT = process.cwd().replace(/\\/g, '/') + '/'
const APPLY = process.argv.includes('--apply')
const NL = String.fromCharCode(10)
const seo = JSON.parse(fs.readFileSync(ROOT + 'src/config/seo.generated.json', 'utf8'))

// [blog file, target page, anchor]
const PLAN = [
  ['new/childs-helmet', '/shop/kids-electric-scooters/', 'kids electric scooter'],
  ['new/childs-helmet', '/shop/kids-electric-scooters/segway-ninebot-c2-pro/', 'segway c2 pro'],
  ['new/childs-electric-bike', '/shop/kids-electric-scooters/', 'electric scooter for kids'],
  ['refresh/kids-electric-dirt-bikes', '/shop/kids-electric-scooters/', 'kids e scooter'],
  ['refresh/helmets-and-protective-gear-for-e-bikes', '/shop/electric-scooters/', 'best electric scooter'],
  ['refresh/how-to-lock-an-e-bike', '/shop/electric-scooters/', 'cheap electric scooter'],
  ['new/low-cost-e-bikes', '/shop/electric-scooters/segway-ninebot-e2-pro/', 'segway electric kickscooter e2 pro'],
  ['new/mini-ebike', '/shop/electric-go-karts/', 'electric go kart'],
  ['refresh/electric-moto-maintenance-lithium-safety', '/shop/electric-scooters/', 'adult electric scooter'],
]
const rows = []
for (const [file, target, anchor] of PLAN) {
  const kws = (seo[target] && seo[target].kw) || []
  if (!kws.includes(anchor)) throw new Error(`anchor "${anchor}" is not one of ${target}'s keywords`)
  const f = ROOT + `src/content/blog/${file}.js`
  let t = fs.readFileSync(f, 'utf8')
  if (t.includes(`'${target}'`)) { console.log('already linked:', file, target); continue }
  const marker = NL + '    to: [' + NL
  if (!t.includes(marker)) throw new Error('no links.to array in ' + file)
  t = t.replace(marker, marker + `      ['${target}', '${anchor}'],` + NL)
  if (APPLY) fs.writeFileSync(f, t)
  rows.push([target, anchor, anchor, '/blog/' + file.split('/')[1] + '/', 'Guide “related” links', 'secondary'].join(','))
}
const lp = fs.readFileSync(ROOT + 'docs/link-plan.csv', 'utf8')
const add = rows.filter(r => !lp.includes(r))
if (APPLY && add.length) fs.writeFileSync(ROOT + 'docs/link-plan.csv', lp.replace(/\s+$/, '') + NL + add.join(NL) + NL)
console.log(APPLY ? 'APPLIED' : 'DRY RUN', rows.length, 'links added,', add.length, 'plan rows')
