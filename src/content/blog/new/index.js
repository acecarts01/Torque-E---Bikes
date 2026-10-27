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

import * as trailers from './bicycle-trailers.js'
import * as basket from './bicycle-basket.js'
import * as gloves from './bicycle-gloves.js'
import * as goggles from './motorbike-goggles.js'
import * as alarm from './bike-alarm.js'

import * as seatcover from './bike-seat-cover.js'
import * as pedals from './flat-pedals.js'
import * as throttle from './e-bike-throttle.js'
import * as helmet from './childs-helmet.js'
import * as seat from './child-bike-seat.js'

const POSTS = [lubricant, batteries, charger, kids, surron, panniers, mirror, bone, bottle, cover, trailers, basket, gloves, goggles, alarm, seatcover, pedals, throttle, helmet, seat]

export const NEW_META = POSTS.map(p => p.meta)
export const NEW_BODIES = Object.fromEntries(POSTS.map(p => [p.meta.slug, p.body]))
