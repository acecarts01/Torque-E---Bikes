// Refresh of /blog/electric-mountain-bike-buying-guide/ written to the blog-post rule (27 Oct 2026).
// Prices and bike names from the catalogue (type taken from the product name). Queensland rules from qld.gov.au (checked 27 Oct 2026).
export const slug = 'electric-mountain-bike-buying-guide'

export const meta = {
  title: 'E-Mountain Bike Buying Guide: Hardtail vs Full-Suspension',
  seoTitle: 'E-Mountain Bike Buying Guide: Hardtail vs Full Suspension',
  excerpt: 'E-mountain bike buying guide: hardtail or full suspension, motor and battery, brakes and frame size, with electric MTBs from $1,039 and the trail rules.',
  updated: '2026-10-27',
  focus: 'e-mountain bike',
  secondary: ['mountain electric bicycle', 'e mountain bicycle', 'e-bike mountain bikes', 'lightweight e mountain bike', 'mtb e bikes'],
  tags: ['mountain e cycle', 'mt ebike', 'e bike mountain bikes', 'e-bike mountain bike', 'best electric mtb', 'electronic mountain bike', 'hardtail e mountain bike', 'mtb bikes electric', 'best e mountain bikes 2026', 'e bikes mountain bike'],
  imageAlt: 'Bicycle on a mountain trail among pine trees, the kind of trail an e-mountain bike is built for',
  related: [
    { href: '/shop/electric-mountain-bikes/shogun-etrail-breaker-1/', name: 'Shogun eTrail Breaker 1', price: 1039, note: 'Our lowest-priced electric mountain bike.' },
    { href: '/shop/electric-mountain-bikes/hardtail-e-mtb-black/', name: 'Hardtail E-MTB Black', price: 2199, note: 'A hardtail e-MTB.' },
    { href: '/shop/electric-mountain-bikes/smartmotion-pacer-hardtail-e-mtb/', name: 'SmartMotion Pacer Hardtail E-MTB', price: 2999, note: 'A hardtail e-MTB.' },
    { href: '/shop/electric-mountain-bikes/full-suspension-e-mtb-silver/', name: 'Full-Suspension E-MTB Silver', price: 3699, note: 'A full-suspension e-MTB.' },
    { href: '/shop/electric-mountain-bikes/', name: 'All electric mountain bikes', note: '57 models.' },
  ],
  links: {
    to: [
      ['/shop/electric-mountain-bikes/', 'electric mountain bikes'],
      ['/shop/helmets-gloves-and-protection/', 'MTB helmets and protection'],
      ['/shop/suspension-and-forks/', 'suspension forks'],
      ['/blog/helmets-and-protective-gear-for-e-bikes/', 'e-bike helmets and protective gear'],
    ],
    from: [
      ['/shop/electric-mountain-bikes/', 'e-mountain bike buying guide'],
      ['/electric-bikes/', 'electric mountain bike guide'],
      ['/shop/electric-mountain-bikes/hardtail-e-mtb-black/', 'how to choose an e-mountain bike'],
    ],
  },
}

export const body = {
  intro: [
    'An e-mountain bike is a mountain bike with a pedal-assist motor and battery. The motor adds power as you pedal, which makes climbs easier and lets you ride further on trails. Our electric mountain bike range has 57 models, starting at $1,039, so the big decisions are the type of suspension, the motor and battery, the brakes and the frame size.',
    'This guide covers those choices, shows real prices for hardtail and full-suspension models, and sets out the trail rules and battery safety you need to know before you buy.',
  ],
  prepend: [
    {
      h: 'E-mountain bike prices: hardtail and full suspension',
      p: [
        'These are examples from our [electric mountain bikes](/shop/electric-mountain-bikes/) range, with the suspension type taken from the product name. Ask us for the motor rating, battery size and compliance label of any bike before you order, because the listings do not publish a full specification.',
      ],
      table: {
        head: ['Bike', 'Type', 'Price'],
        rows: [
          ['[Shogun eTrail Breaker 1](/shop/electric-mountain-bikes/shogun-etrail-breaker-1/)', 'Entry e-MTB', '$1,039'],
          ['[Hardtail E-MTB Black](/shop/electric-mountain-bikes/hardtail-e-mtb-black/)', 'Hardtail', '$2,199'],
          ['[SmartMotion Pacer Hardtail E-MTB](/shop/electric-mountain-bikes/smartmotion-pacer-hardtail-e-mtb/)', 'Hardtail', '$2,999'],
          ['Full-Suspension Fat E-MTB Blue', 'Full suspension, fat tyre', '$2,999'],
          ['[Full-Suspension E-MTB Silver](/shop/electric-mountain-bikes/full-suspension-e-mtb-silver/)', 'Full suspension', '$3,699'],
        ],
      },
    },
  ],
  rename: {
    'Hardtail or full suspension': 'Hardtail or full suspension: which e-mountain bike suits you',
  },
  drop: ['Quick recap', 'Quick answers', 'Transporting an e-MTB', 'A last word on e-mountain bikes'],
  append: [
    {
      h: 'Trail rules and safety for e-mountain bike riders',
      p: [
        'Where you can ride an e-mountain bike depends on the land manager as well as the road rules. The Queensland Government\'s [e-bike rules page](https://www.qld.gov.au/transport/safety/rules/wheeled-devices/electric-bicycle-rules) says riders must always wear a helmet and follow the bicycle rules, and it lists mountain bike trails and rail trails among recreational places where no specific age or licence applies. To be legal in public places an e-bike must have a motor of no more than 250 watts, assist up to 25 km/h and meet EN 15194 with a compliance label.',
        'Always check the trail manager\'s rules before you ride: some trails restrict e-bikes. Bikes with more powerful motors are for private property and approved off-road areas only. Rules differ between states, so check your own road authority.',
        'An e-mountain bike carries a large lithium-ion battery. The ACCC\'s [lithium-ion batteries guide](https://www.productsafety.gov.au/consumers/be-safe-around-the-home/safely-use-batteries-and-technology/lithium-ion-batteries-guide) advises using the charger that came with the bike, charging on a non-flammable surface and never using damaged batteries or cables. See our [e bike batteries guide](/blog/e-bike-batteries/) and [helmet and protective gear guide](/blog/helmets-and-protective-gear-for-e-bikes/).',
      ],
    },
  ],
  faqAppend: [
    {
      q: 'How much does an e-mountain bike cost in Australia?',
      a: 'In our range, electric mountain bikes start at $1,039, with hardtail models such as the Hardtail E-MTB Black at $2,199 and full-suspension models from about $2,999 to $3,699, and premium bikes costing far more. Budget extra for a helmet, protective gear and servicing.',
    },
    {
      q: 'Is a hardtail or full-suspension e-MTB better?',
      a: 'A hardtail is usually cheaper, lighter and simpler, and suits smoother trails and commuting. Full suspension costs more but gives more control and comfort on rough, technical terrain. Choose by the trails you ride most, then check the motor, battery and brakes suit that riding.',
    },
  ],
  keywords: { primary: 'e-mountain bike', supporting: ['mountain electric bicycle', 'e mountain bicycle', 'e-bike mountain bikes', 'lightweight e mountain bike', 'mtb e bikes'] },
}
