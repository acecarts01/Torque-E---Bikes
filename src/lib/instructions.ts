// src/lib/instructions.ts
// "What happens next" steps for each product on a quote or invoice. Written per product from its category, compliance flag and name,
// so a customer buying a helmet, a battery and an electric dirt bike gets three different sets of instructions. The admin can edit
// every line before sending. Nothing here states a fact the site does not already state (see /shipping-returns/ and the product pages).
import { CONTACT, REPLY } from '@/src/config/site'

export type InstructionProduct = { slug: string; name: string; category: string; compliance?: string }

const LITHIUM_CATEGORIES = new Set([
  'electric-dirt-bikes', 'kids-electric-dirt-and-balance-bikes', 'electric-mountain-bikes', 'commuter-and-urban-e-bikes',
  'road-and-gravel-e-bikes', 'fat-tyre-and-scrambler-e-bikes', 'kids-and-youth-e-bikes', 'folding-e-bikes',
  'cargo-bikes-and-e-trikes', 'batteries-chargers-and-electronics',
])
const PART_CATEGORIES = new Set([
  'seats-fenders-and-body', 'wheels-tyres-and-tubes', 'motors-drivetrain-and-sprockets', 'suspension-and-forks', 'brakes',
  'controls-grips-and-pedals', 'sur-ron-spares', 'phone-mounts-mirrors-and-audio', 'lights-and-horns', 'racks-bags-and-trailers',
])
const BIKE_CATEGORIES = new Set([
  'electric-dirt-bikes', 'kids-electric-dirt-and-balance-bikes', 'electric-mountain-bikes', 'commuter-and-urban-e-bikes',
  'road-and-gravel-e-bikes', 'fat-tyre-and-scrambler-e-bikes', 'kids-and-youth-e-bikes', 'folding-e-bikes', 'cargo-bikes-and-e-trikes',
])

const has = (name: string, re: RegExp) => re.test(name)

/** Steps that apply to this product, in the order the customer should follow them. */
export function productInstructions(p: InstructionProduct): string[] {
  const out: string[] = []
  const n = p.name
  const offRoad = p.compliance === 'off-road'
  const isBike = BIKE_CATEGORIES.has(p.category)
  const kids = p.category.startsWith('kids-')
  const isBattery = p.category === 'batteries-chargers-and-electronics' && has(n, /battery|batt\b|pack/i)
  const isCharger = p.category === 'batteries-chargers-and-electronics' && has(n, /charger/i)

  // Delivery
  if (LITHIUM_CATEGORIES.has(p.category) || isBattery) {
    out.push('Delivery: this item contains or is supplied with a lithium battery, which is Class 9 Dangerous Goods. It travels only with carriers approved for dangerous goods freight, so delivery times can be longer and some remote postcodes may be affected. Please make sure someone can receive it at the delivery address.')
  } else if (p.category === 'racks-bags-and-trailers' && has(n, /trailer/i)) {
    out.push('Delivery: trailers and other large items are sent by freight. Please make sure someone can receive it at the delivery address.')
  } else {
    out.push('Delivery: we ship Australia-wide. Please make sure the delivery address and your mobile number on this document are correct so the carrier can reach you.')
  }

  // Before riding / using
  if (isBike) {
    out.push('On arrival: check the box and the item straight away. If anything is damaged, faulty or not as ordered, email us within 48 hours of delivery with your order number and photos.')
    out.push('Assembly: some bikes are supplied partly assembled, so a front wheel, handlebars, pedals or a seat may need fitting. Follow the manufacturer manual, or have a qualified bicycle mechanic assemble and check it before the first ride.')
    out.push('Battery: charge it fully with the charger supplied before the first ride, and use only the supplied charger. Store and charge it indoors, away from heat and flammable items, and never leave it charging unattended.')
  } else if (isBattery) {
    out.push('Compatibility: confirm that the voltage, connector and fitting match your bike or controller before installing. Reply with your bike make, model and year if you want us to confirm it first.')
    out.push('Battery: charge it with a compatible charger only. Store and charge it indoors, away from heat and flammable items, and never leave it charging unattended.')
  } else if (isCharger) {
    out.push('Compatibility: confirm that the charger voltage and plug match your battery before use. Reply with your battery details if you want us to confirm it first.')
  } else if (PART_CATEGORIES.has(p.category)) {
    out.push('Fitment: reply with your bike make, model and year so we can confirm this part fits before it is dispatched.')
    out.push('On arrival: check the part straight away. If anything is damaged, faulty or not as ordered, email us within 48 hours of delivery with your order number and photos.')
    out.push('Installation: have the part fitted by a qualified mechanic if you are not experienced with bike repairs, especially brakes, suspension, wheels and electrical parts.')
  } else if (p.category === 'helmets-gloves-and-protection') {
    out.push('Sizing: check the size against the manufacturer size chart before you pay, if the item comes in sizes. Reply to this email if you want help choosing.')
    out.push('On arrival: check the item straight away. If anything is damaged, faulty or not as ordered, email us within 48 hours of delivery with your order number and photos.')
    if (has(n, /helmet/i)) out.push('Safety: a helmet that has been dropped or in a crash should be replaced, even if it looks undamaged.')
  } else if (p.category === 'locks-and-security') {
    out.push('On arrival: check the lock and keys straight away. Keep the key code card and spare keys somewhere safe, away from the bike.')
  } else if (p.category === 'care-tools-and-hydration') {
    out.push('On arrival: check the item straight away. If anything is damaged, faulty or not as ordered, email us within 48 hours of delivery with your order number and photos.')
  } else {
    out.push('On arrival: check the item straight away. If anything is damaged, faulty or not as ordered, email us within 48 hours of delivery with your order number and photos.')
  }

  // Where it can be used
  if (offRoad && !isBike) {
    out.push('Off-road use only: this item is for off-road, private property use. It is not for use on public roads or paths.')
  } else if (offRoad) {
    out.push('Off-road use only: this machine is for private property. It is not for use on public roads or paths, and it is not registrable or road legal in Australia. Check your state or territory rules before you ride.')
    out.push('Safety: wear a helmet, gloves, eye protection and boots every ride.')
  } else if (isBike && !kids) {
    out.push('Road use: a helmet is compulsory when riding a bicycle or e-bike in Australia. Check your state or territory rules for where and how you can ride.')
  }
  if (kids) out.push('Children: an adult should supervise every ride and check the bike, battery and fittings regularly. A helmet must be worn.')

  // Product specific
  if (has(n, /conversion|\bkit\b/i) && p.category !== 'care-tools-and-hydration') {
    out.push('Conversion kits: fit by a qualified person only. Motors above 250W are for off-road, private property use only and must not be used on public roads or paths.')
  }
  if (has(n, /trailer/i)) out.push('Towing: follow the maximum load and speed limits in the manufacturer manual, and check the hitch and wheels before every trip.')
  return out
}

/** Steps that apply to every document, after the product steps. */
export function generalAfterPayment(ref: string): string[] {
  return [
    `Pay the exact amount shown, using ${ref} as your payment reference, so we can match your payment straight away.`,
    `Once you have paid, reply to this email or message us on WhatsApp ${CONTACT.whatsapp} with ${ref}, and a receipt or screenshot if you have one.`,
    'Confirm your delivery address and a mobile number for the carrier, if they are not already on this document.',
    REPLY.dispatchLine,
  ]
}
