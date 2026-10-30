// Lists parts-only product pages with no supplier specifications and no inbound link from a blog post: candidates for noindex.
import fs from 'node:fs'
import { execSync } from 'node:child_process'
import { PRODUCTS } from '../src/config/products.js'
const copy = JSON.parse(fs.readFileSync('src/config/product-copy.generated.json', 'utf8'))
const linked = new Set(execSync('grep -rhoE "/shop/[a-z0-9-]+/[a-z0-9-]+/" src/content/blog', { encoding: 'utf8' }).split('\n').map(x => x.split('/')[3]).filter(Boolean))
const BRANDS = new Set(['79Bike', 'Fatboy', 'Sur-Ron', 'Talaria', 'TBC', 'E Ride Pro', 'Torque', 'Gobike', 'EBMX', 'EBMX / 79Bike', 'DHZ', 'Mamba', 'Strike', 'Kristall', 'Velectrix'])
const PARTS = new Set(['sur-ron-spares', 'motors-drivetrain-and-sprockets', 'suspension-and-forks', 'controls-grips-and-pedals', 'brakes', 'wheels-tyres-and-tubes', 'batteries-chargers-and-electronics', 'seats-fenders-and-body', 'lights-and-horns', 'racks-bags-and-trailers', 'care-tools-and-hydration', 'phone-mounts-mirrors-and-audio', 'helmets-gloves-and-protection', 'locks-and-security'])
const out = PRODUCTS.filter(p => PARTS.has(p.category) && BRANDS.has(p.brand) && !/Specifications as listed/.test((copy[p.slug] || []).join(' ')) && !linked.has(p.slug))
if (process.argv[2] === '--json') console.log(JSON.stringify(out.map(p => p.slug)))
else { const by = {}; for (const p of out) by[p.brand + ' / ' + p.category] = (by[p.brand + ' / ' + p.category] || 0) + 1; console.log(out.length, 'candidates of', PRODUCTS.length); console.log(by) }
