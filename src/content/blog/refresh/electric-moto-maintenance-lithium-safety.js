// Refresh of /blog/electric-moto-maintenance-lithium-safety/ written to the blog-post rule (27 Oct 2026).
// Battery prices from the catalogue (batteries, chargers and electronics). Sources checked 27 Oct 2026: ACCC lithium-ion batteries guide, Fire and Rescue NSW e-bike
// battery safety page and Bosch eBike battery safety page.
// Keyword notes: "72v battery", "48v electric bicycle battery" and "battery electric bicycle" come from the competitor keyword gap (docs/keyword-gap.csv).
// Tag exception agreed with the owner: only 8 relevant unused tags exist. We do not list a repair or servicing service: the post points readers to an experienced
// e-bike mechanic, as Fire and Rescue NSW advises.
export const slug = 'electric-moto-maintenance-lithium-safety'

export const meta = {
  title: '72V Battery Care: E-Bike Charging and Lithium Safety',
  seoTitle: '72V Battery Care: E-Bike Charging and Lithium Safety',
  excerpt: '72V battery care guide: how to charge, store and check an e-bike or electric dirt bike battery, packs from $539, lithium safety and when to see a mechanic.',
  updated: '2026-10-27',
  focus: '72v battery',
  secondary: ['48v electric bicycle battery', 'battery electric bicycle', 'e bike battery charging', 'e bike repair', 'electric bicycle service'],
  tags: ['e bike service', 'ebike service', 'e-bike repairs', 'electric bike motor repair', 'ebike maintenance', 'electric bike repairing', 'ebike motor repair', 'e bike safety australia'],
  tagsShortReason: 'only 8 relevant unused battery and maintenance keywords in Semrush AU',
  imageAlt: 'Black and red bicycle near a red wall, an e-bike that depends on its 72v battery or smaller pack',
  related: [
    { href: '/shop/batteries-chargers-and-electronics/vamos-hefe-battery-48v-15ah/', name: 'Vamos Hefe Battery (48V 15Ah Silverfish)', price: 539, note: 'The lowest-priced pack per watt-hour in our range.' },
    { href: '/shop/batteries-chargers-and-electronics/vamos-battery-52v-20ah-samsung-cells/', name: 'Vamos Battery 52V 20Ah (Samsung Cells)', price: 1039, note: 'A 1,040Wh pack.' },
    { href: '/shop/batteries-chargers-and-electronics/e-ride-pro-e6154-72v-30ah-battery-mini/', name: 'E Ride Pro E6154 72V 30Ah Battery (Mini)', price: 1989, note: 'A 72V pack. Off-road only.' },
    { href: '/shop/batteries-chargers-and-electronics/e-ride-pro-e7271-72v-50ah-150a-battery-e7-3-0/', name: 'E Ride Pro E7271 72V 50Ah 150A Battery', price: 2979, note: 'A 72V pack. Off-road only.' },
    { href: '/shop/batteries-chargers-and-electronics/', name: 'All batteries, chargers and electronics', note: 'Packs, chargers and electronics.' },
  ],
  links: {
    to: [
      ['/shop/batteries-chargers-and-electronics/', 'batteries and chargers'],
      ['/blog/e-bike-batteries/', 'e bike batteries guide'],
      ['/blog/e-bike-battery-charger/', 'e bike battery charger guide'],
      ['/blog/lubricant-for-bike-chains/', 'lubricant for bike chains'],
    ],
    from: [
      ['/shop/batteries-chargers-and-electronics/', '72v battery care guide'],
      ['/shop/batteries-chargers-and-electronics/e-ride-pro-e6154-72v-30ah-battery-mini/', 'how to care for a 72v battery'],
      ['/shop/batteries-chargers-and-electronics/vamos-hefe-battery-48v-15ah/', 'e-bike battery care and lithium safety'],
    ],
  },
}

export const body = {
  intro: [
    'The battery is the most valuable and most safety-critical part of an e-bike or electric dirt bike, and a 72V battery is a big one. Looking after it extends its life, and following simple safety rules reduces fire risk. Battery packs in our range start at $539, and the 72V packs for off-road bikes run from $1,989 to $3,549.',
    'This guide covers charging, storage, signs of trouble, how to read the volts and amp hours, and when to hand a problem to an experienced mechanic. Lithium batteries are Class 9 dangerous goods, so they ship under special rules.',
  ],
  prepend: [
    {
      h: '72V battery and other packs: prices from our range',
      p: [
        'These are examples from our [batteries, chargers and electronics](/shop/batteries-chargers-and-electronics/) range. A 72V battery must match your bike\'s controller, connector and charger, and 72V packs belong to high-power bikes that are for off-road and private property use only. Ask us to confirm fit before you order.',
      ],
      table: {
        head: ['Pack', 'Price', 'Use'],
        rows: [
          ['[Vamos Hefe Battery 48V 15Ah](/shop/batteries-chargers-and-electronics/vamos-hefe-battery-48v-15ah/)', '$539', '48V pack'],
          ['[Vamos Battery 52V 20Ah (Samsung Cells)](/shop/batteries-chargers-and-electronics/vamos-battery-52v-20ah-samsung-cells/)', '$1,039', '52V pack'],
          ['E Ride Pro E6024 60V 30Ah Battery (Mini)', '$1,839', '60V pack, off-road only'],
          ['[E Ride Pro E6154 72V 30Ah Battery (Mini)](/shop/batteries-chargers-and-electronics/e-ride-pro-e6154-72v-30ah-battery-mini/)', '$1,989', '72V pack, off-road only'],
          ['[E Ride Pro E7271 72V 50Ah 150A Battery](/shop/batteries-chargers-and-electronics/e-ride-pro-e7271-72v-50ah-150a-battery-e7-3-0/)', '$2,979', '72V pack, off-road only'],
          ['E Ride Pro E7289 72V 50Ah Battery for E7 SR', '$3,549', '72V pack, off-road only'],
        ],
      },
    },
  ],
  rename: {
    'Understanding volts, amp-hours and watt-hours': 'Understanding 72V battery volts, amp-hours and watt-hours',
  },
  drop: ['Quick recap', 'Quick answers', 'Buying a replacement', 'A last word on batteries'],
  append: [
    {
      h: 'Charging and storage: what the safety agencies advise',
      p: [
        'The ACCC\'s [lithium-ion batteries guide](https://www.productsafety.gov.au/consumers/be-safe-around-the-home/safely-use-batteries-and-technology/lithium-ion-batteries-guide) says to allow a battery to cool after use before recharging, store batteries in cool, dry places out of direct sunlight, charge on non-flammable surfaces such as concrete, ceramic or steel, disconnect once fully charged, and never use a battery or charger that shows signs of failure such as denting, overheating, swelling, leaking or venting gas. It also says never to modify a battery or use one in the wrong product.',
        'Fire and Rescue NSW\'s [e-bike battery safety page](https://www.fire.nsw.gov.au/fire-safety/home-fire-safety/topics/ebikes-escooters-battery-safety) adds that you should charge in an open area such as a garage or shed away from exits, only on hard surfaces that cannot burn, with a working smoke alarm nearby, and never while you sleep or are away from home. A damaged battery should be kept outside in a ventilated area, at least 3 metres from structures, and never put in household bins.',
        'Bosch eBike Systems recommends in its [battery safety advice](https://www.bosch-ebike.com/us/service/battery-safety) charging in a dry, well-ventilated area between about 0 and 40 degrees Celsius, storing the battery in a dry place with a smoke detector at roughly 30 to 60 per cent charge, cleaning it with a damp cloth and never opening the battery housing.',
      ],
    },
    {
      h: 'E bike repair and servicing: when to use a mechanic',
      p: [
        'Battery repairs are not a home job. Fire and Rescue NSW says battery repairs, servicing and installations should always be carried out by an experienced e-bike mechanic, and that cheap, unprotected and second-hand batteries used in DIY projects have led to severe fires. We supply bikes, batteries and parts and give guidance, but for e bike repair, an electric bicycle service or motor work, use an experienced e-bike mechanic.',
        'For the drivetrain side of upkeep, see our guide to [lubricant for bike chains](/blog/lubricant-for-bike-chains/), and for choosing and matching packs see our [e bike batteries guide](/blog/e-bike-batteries/) and the [e bike battery charger guide](/blog/e-bike-battery-charger/).',
      ],
    },
  ],
  faqAppend: [
    {
      q: 'How much is a 72V battery?',
      a: 'In our range, 72V packs for off-road bikes are $1,989 for the E Ride Pro E6154 30Ah, $2,979 for the E7271 50Ah and $3,549 for the E7289 50Ah. They are for high-power bikes that are off-road and private property use only. Ask us to confirm the pack matches your controller and charger.',
    },
    {
      q: 'Can I repair an e-bike battery myself?',
      a: 'No. Fire and Rescue NSW says battery repairs, servicing and installations should always be carried out by an experienced e-bike mechanic, and warns that cheap, unprotected and second-hand batteries in DIY projects have led to severe fires. Never open or modify a lithium-ion battery yourself.',
    },
  ],
  keywords: { primary: '72v battery', supporting: ['48v electric bicycle battery', 'battery electric bicycle', 'e bike battery charging', 'e bike repair', 'electric bicycle service'] },
}
