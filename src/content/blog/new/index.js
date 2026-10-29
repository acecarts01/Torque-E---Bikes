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

import * as hybrid from './hybrid-ebike.js'
import * as cube from './cube-e-bike.js'

import * as merida from './merida-e-bike.js'
import * as ncm from './ncm-ebike.js'
import * as cruiser from './e-cruiser.js'
import * as aventon from './aventon-e-bike.js'
import * as roadbike from './electric-road-bicycle.js'

import * as fastest from './fastest-e-bike.js'
import * as forsale from './electric-bikes-for-sale.js'
import * as sale from './e-bike-sale.js'
import * as aus from './electric-bike-australia.js'
import * as accs from './ebike-accessories.js'

import * as price from './electric-bike-price.js'
import * as mini from './mini-ebike.js'
import * as emoto from './electric-motorcycle-bikes.js'
import * as toprated from './top-rated-ebike.js'
import * as parts from './ebike-parts.js'
import * as secondhand from './2nd-hand-electric-bikes.js'
import * as used from './used-electric-bicycles.js'
import * as ampd from './amps-ebikes.js'

import * as gpsT from './gps-tracker-for-bike.js'
import * as foldbag from './folding-bike-bag.js'
import * as carrack from './car-bike-rack.js'
import * as toolkit from './bike-tool-kit.js'
import * as puncture from './bike-puncture-repair-kit.js'

import * as susp from './suspension-seat-post.js'
import * as hbag from './bag-for-handlebars.js'
import * as dualsus from './dual-suspension-electric-bike.js'
import * as fatboy from './fatboy-electric-bike.js'
import * as specz from './specialized-e-bike.js'

import * as varg from './stark-varg.js'
import * as cruiserbeach from './electric-beach-cruiser-bicycle.js'
import * as degreaser from './bike-chain-degreaser.js'
import * as tubes from './bike-tubes.js'
import * as pump from './bike-pump.js'

const POSTS = [lubricant, batteries, charger, kids, surron, panniers, mirror, bone, bottle, cover, trailers, basket, gloves, goggles, alarm, seatcover, pedals, throttle, helmet, seat, lowcost, women, razor, light, padlock, motor, kit, trike3, middrive, stepthru, hybrid, cube, merida, ncm, cruiser, aventon, roadbike, fastest, forsale, sale, aus, accs, price, mini, emoto, toprated, parts, secondhand, used, ampd, gpsT, foldbag, carrack, toolkit, puncture, susp, hbag, dualsus, fatboy, specz, varg, cruiserbeach, degreaser, tubes, pump]

export const NEW_META = POSTS.map(p => p.meta)
export const NEW_BODIES = Object.fromEntries(POSTS.map(p => [p.meta.slug, p.body]))
