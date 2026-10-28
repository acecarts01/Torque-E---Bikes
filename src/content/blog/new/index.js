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

import * as lowcost from './low-cost-e-bikes.js'
import * as women from './e-bike-women.js'
import * as razor from './razor-e-bike.js'
import * as light from './bicycle-light.js'
import * as padlock from './bike-chain-padlock.js'
import * as motor from './e-bike-motor.js'
import * as kit from './1000w-conversion-kit.js'
import * as trike3 from './3-wheel-electric-bike.js'
import * as middrive from './mid-drive-ebike.js'
import * as stepthru from './e-bike-step-thru.js'

const POSTS = [lubricant, batteries, charger, kids, surron, panniers, mirror, bone, bottle, cover, trailers, basket, gloves, goggles, alarm, seatcover, pedals, throttle, helmet, seat, lowcost, women, razor, light, padlock, motor, kit, trike3, middrive, stepthru]

export const NEW_META = POSTS.map(p => p.meta)
export const NEW_BODIES = Object.fromEntries(POSTS.map(p => [p.meta.slug, p.body]))
