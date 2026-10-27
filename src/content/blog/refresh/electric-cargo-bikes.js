// Refresh of /blog/electric-cargo-bikes/ written to the blog-post rule (27 Oct 2026).
// Cargo category: 25 models, $899 to $15,269 (catalogue). No specifications claimed. Passenger rule from qld.gov.au e-bike rules (checked 27 Oct 2026).
export const slug = 'electric-cargo-bikes'

export const meta = {
  title: 'Electric Cargo Bikes: Types, Prices and What to Buy',
  seoTitle: 'Electric Cargo Bikes: Types and Prices',
  excerpt: 'Electric cargo bikes from $899: longtail vs front-loader, load ratings, motor and battery checks, family use, and prices for 25 cargo e-bikes and trikes.',
  updated: '2026-10-27',
  focus: 'cargo bikes',
  secondary: ['cargo e bike', 'e bike cargo', 'ebike cargo', 'cargo bicycle australia', 'cargo bikes australia'],
  tags: ['cargo e cycle', 'longtail cargo bike', 'e bike with cargo', 'cargo e bikes', 'cargo ebikes', 'e bikes cargo', 'e-cargo bike', 'ebike with cargo', 'long tail cargo bike', 'cargo cycling'],
  imageAlt: 'Bike with a front basket parked next to a pole, a light version of what cargo bikes carry',
  related: [
    { href: '/shop/cargo-bikes-and-e-trikes/sunmono-mars-20-electric-cargo-bike/', name: 'Sunmono Mars 20 Electric Cargo Bike', price: 899, note: 'Our lowest-priced cargo e-bike.' },
    { href: '/shop/cargo-bikes-and-e-trikes/moov8-c2-cargo-ebike-with-torque-sensor/', name: 'Moov8 C2 Cargo eBike with Torque Sensor', price: 2279, note: 'Cargo e-bike with a torque sensor.' },
    { href: '/shop/cargo-bikes-and-e-trikes/aventon-abound-sr-electric-cargo-bike/', name: 'Aventon Abound SR Electric Cargo Bike', price: 2999, note: 'Aventon cargo e-bike.' },
    { href: '/shop/cargo-bikes-and-e-trikes/ncm-cg7-cargo/', name: 'NCM CG7 Cargo', price: 3129, note: 'NCM cargo e-bike.' },
    { href: '/shop/cargo-bikes-and-e-trikes/', name: 'All cargo bikes and e-trikes', note: '25 models.' },
  ],
  links: {
    to: [
      ['/shop/cargo-bikes-and-e-trikes/', 'electric cargo bikes'],
      ['/shop/racks-bags-and-trailers/', 'cargo racks and panniers'],
      ['/shop/locks-and-security/', 'bike locks'],
      ['/blog/electric-trikes-for-adults/', 'electric tricycle guide'],
      ['/blog/bike-racks-baskets-and-trailers/', 'bike racks, baskets and trailers'],
    ],
    from: [
      ['/shop/cargo-bikes-and-e-trikes/', 'cargo bikes guide'],
      ['/shop/cargo-bikes-and-e-trikes/sunmono-mars-20-electric-cargo-bike/', 'how to choose cargo bikes'],
      ['/shop/cargo-bikes-and-e-trikes/aventon-abound-sr-electric-cargo-bike/', 'electric cargo bikes explained'],
    ],
  },
}

export const body = {
  intro: [
    'Electric cargo bikes carry shopping, tools, equipment or children with the help of a motor. For short local trips they can replace many car journeys, but they need more space and a stronger frame than a normal bike. Our range has 25 cargo bikes and e-trikes, starting at $899.',
    'This guide covers the main types, real prices, what to check before you choose, and the rules for carrying passengers.',
  ],
  prepend: [
    {
      h: 'Electric cargo bikes: prices and models in our range',
      p: [
        'These are examples from our [cargo bikes and e-trikes](/shop/cargo-bikes-and-e-trikes/) range, from $899 to $15,269 across 25 models. The listings do not publish load ratings, motor figures or weights, so ask us for them and for the compliance label before you order.',
      ],
      table: {
        head: ['Model', 'Price', 'Type'],
        rows: [
          ['[Sunmono Mars 20 Electric Cargo Bike](/shop/cargo-bikes-and-e-trikes/sunmono-mars-20-electric-cargo-bike/)', '$899', 'Cargo e-bike'],
          ['Max-Cargo Folding Cargo E-Bike', '$2,199', 'Folding cargo'],
          ['[Moov8 C2 Cargo eBike with Torque Sensor](/shop/cargo-bikes-and-e-trikes/moov8-c2-cargo-ebike-with-torque-sensor/)', '$2,279', 'Cargo e-bike'],
          ['Eunorau G30 Cargo Electric Bike', '$2,589', 'Cargo e-bike'],
          ['[Aventon Abound SR Electric Cargo Bike](/shop/cargo-bikes-and-e-trikes/aventon-abound-sr-electric-cargo-bike/)', '$2,999', 'Cargo e-bike'],
          ['[NCM CG7 Cargo](/shop/cargo-bikes-and-e-trikes/ncm-cg7-cargo/)', '$3,129', 'Cargo e-bike'],
          ['Tebco Transporter', '$3,319', 'Cargo e-bike'],
          ['Vamos Papa Grande Pro 2026', '$6,079', 'Premium cargo'],
        ],
      },
    },
  ],
  rename: {
    'Longtail and front-loader types': 'Longtail cargo bike and front-loader types',
  },
  drop: ['Quick recap', 'Browse and compare', 'Costs to plan for', 'Carrying children safely', 'Accessories that make a cargo bike more useful'],
  append: [
    {
      h: 'Carrying passengers and kids on cargo bikes: the rules',
      p: [
        'Never carry a passenger unless the bike is made for it. The Queensland Government\'s [e-bike rules page](https://www.qld.gov.au/transport/safety/rules/wheeled-devices/electric-bicycle-rules) says you should only carry passengers if the bike is made for it, that passengers must wear a helmet too, and that riders must always wear a helmet and follow the bicycle rules. To be legal in public places an e-bike must have a motor of no more than 250 watts, assist up to 25 km/h and meet EN 15194 with a label.',
        'Ask us whether a cargo bike is designed to carry children, what seats and load it is rated for, and whether it carries a compliance label. Rules differ between states, so check your own road authority. For racks, panniers and trailers see our guide to [bike racks, baskets and trailers](/blog/bike-racks-baskets-and-trailers/), and for three-wheel options see the [electric tricycle guide](/blog/electric-trikes-for-adults/).',
      ],
    },
    {
      h: 'Charging a heavy cargo bike safely',
      p: [
        'Cargo bikes carry big batteries, so charging safety matters. The ACCC\'s [lithium-ion batteries guide](https://www.productsafety.gov.au/consumers/be-safe-around-the-home/safely-use-batteries-and-technology/lithium-ion-batteries-guide) advises charging on non-flammable surfaces, disconnecting when the battery is full, using the charger that came with the bike and never using damaged chargers or cables. See our [e bike battery charger guide](/blog/e-bike-battery-charger/).',
      ],
    },
  ],
  faqAppend: [
    {
      q: 'How much do electric cargo bikes cost in Australia?',
      a: 'In our range, cargo e-bikes start at $899 for the Sunmono Mars 20 and run to premium models above $6,000, with many at $2,200 to $3,300, such as the Moov8 C2 at $2,279 and the Aventon Abound SR at $2,999. Check load ratings and compliance labels before you buy.',
    },
    {
      q: 'Are cargo bikes legal on the road in Australia?',
      a: 'Only a cargo e-bike that meets the legal e-bike rules can be ridden in public places: a motor of no more than 250W continuous power, assistance up to 25 km/h and EN 15194 compliance in Queensland. Check your own state, and ask us for the compliance label of any model.',
    },
  ],
  keywords: { primary: 'cargo bikes', supporting: ['cargo e bike', 'e bike cargo', 'ebike cargo', 'cargo bicycle australia', 'cargo bikes australia'] },
}
