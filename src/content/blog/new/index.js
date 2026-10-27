// New posts written to the blog-post rule. One file per post exporting { meta, body }.
import * as lubricant from './lubricant-for-bike-chains.js'
import * as batteries from './e-bike-batteries.js'
import * as charger from './e-bike-battery-charger.js'
import * as kids from './childs-electric-bike.js'
import * as surron from './sur-ron-for-sale.js'

import * as panniers from './bike-panniers.js'
import * as mirror from './bike-mirror.js'
import * as bone from './bone-conduction-headphones.js'
import * as bottle from './bicycle-water-bottle.js'
import * as cover from './bicycle-cover.js'

const POSTS = [lubricant, batteries, charger, kids, surron, panniers, mirror, bone, bottle, cover]

export const NEW_META = POSTS.map(p => p.meta)
export const NEW_BODIES = Object.fromEntries(POSTS.map(p => [p.meta.slug, p.body]))
