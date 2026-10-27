// Refresh of /blog/what-is-an-e-bike/ written to the blog-post rule (27 Oct 2026).
// Price ranges computed from the catalogue per category (min to max, model counts). Queensland rules from qld.gov.au (checked 27 Oct 2026).
// Main keyword is a Commercial question ("how much are e bikes"); the generic head terms "electric bike" / "e bike" are tags only.
export const slug = 'what-is-an-e-bike'

export const meta = {
  title: 'How Much Are E Bikes? What an E-Bike Is, Costs and Rules',
  seoTitle: 'How Much Are E Bikes? What an E-Bike Is and Costs',
  excerpt: 'How much are e bikes in Australia? What an e-bike is, how it works, prices from $659 to $18,999 by type, and what makes an e-bike legal to ride.',
  updated: '2026-10-27',
  focus: 'how much are e bikes',
  secondary: ['how much is an e bike', 'e-bike', 'bicycles e bike', 'electric bikes', 'e bikes'],
  tags: ['electric bike', 'e bike', 'electric bike au', 'australia e bikes', 'electric e bikes', 'mini e bike australia', 'top 5 electric bikes australia for adults', 'buy ebike australia', 'ebike price in australia', 'e bike au'],
  imageAlt: 'Black bicycle leaning against a railing, a plain-looking e-bike when you ask how much are e bikes',
  related: [
    { href: '/shop/commuter-and-urban-e-bikes/dyu-c6-electric-bike/', name: 'DYU C6 Electric Bike', price: 849, note: 'Our lowest-priced commuter e-bike.' },
    { href: '/shop/folding-e-bikes/dyu-d3-smart-electric-bike-black/', name: 'DYU D3+ Smart Electric Bike Black', price: 659, note: 'Our lowest-priced folding e-bike.' },
    { href: '/shop/commuter-and-urban-e-bikes/reid-let-s-roll/', name: "Reid Let's Roll", price: 1229, note: 'A mid-priced commuter e-bike.' },
    { href: '/shop/electric-mountain-bikes/shogun-etrail-breaker-1/', name: 'Shogun eTrail Breaker 1', price: 1039, note: 'Our lowest-priced electric mountain bike.' },
    { href: '/electric-bikes/', name: 'All electric bikes', note: 'Every road-style e-bike category.' },
  ],
  links: {
    to: [
      ['/electric-bikes/', 'electric bikes'],
      ['/blog/off-road-vs-street-legal-australia/', 'legal electric bike rules'],
      ['/blog/how-to-choose-an-e-bike/', 'how to choose e bikes for adults'],
      ['/blog/best-electric-bikes-in-australia/', 'best electric bikes'],
    ],
    from: [
      ['/electric-bikes/', 'how much are e bikes'],
      ['/shop/commuter-and-urban-e-bikes/dyu-c6-electric-bike/', 'what an e-bike is and what it costs'],
      ['/shop/folding-e-bikes/dyu-d3-smart-electric-bike-black/', 'how much is an e bike'],
    ],
  },
}

export const body = {
  intro: [
    'How much are e bikes in Australia? In our range, folding e-bikes start at $659, commuter e-bikes at $849 and electric mountain bikes at $1,039, with premium models costing many times more. An e-bike is a bicycle with an electric motor and battery that helps you pedal: you still ride the bike, but the motor adds power so hills, headwinds and longer trips take less effort.',
    'This guide shows what e-bikes cost by type, explains how an e-bike works and what the main parts are, and sets out what makes an e-bike legal to ride in Australia.',
  ],
  prepend: [
    {
      h: 'How much are e bikes? Prices by type from our range',
      p: [
        'These are the lowest and highest current Torque E-Bikes prices in each category. The right type depends on how you ride, so use the table to see where your budget fits, then open a category to compare models.',
      ],
      table: {
        head: ['Type', 'Price range', 'Models', 'Start with'],
        rows: [
          ['[Folding e-bikes](/shop/folding-e-bikes/)', '$659 to $2,999', '21', '[DYU D3+ Smart](/shop/folding-e-bikes/dyu-d3-smart-electric-bike-black/) $659'],
          ['[Commuter and urban](/shop/commuter-and-urban-e-bikes/)', '$849 to $16,499', '77', '[DYU C6](/shop/commuter-and-urban-e-bikes/dyu-c6-electric-bike/) $849'],
          ['[Cargo bikes and e-trikes](/shop/cargo-bikes-and-e-trikes/)', '$899 to $15,269', '25', 'Sunmono Mars 20 $899'],
          ['[Kids and youth e-bikes](/shop/kids-and-youth-e-bikes/)', '$949 to $4,399', '11', 'VelectriX Hurricane 24" $949'],
          ['[Electric mountain bikes](/shop/electric-mountain-bikes/)', '$1,039 to $18,999', '57', '[Shogun eTrail Breaker 1](/shop/electric-mountain-bikes/shogun-etrail-breaker-1/) $1,039'],
          ['[Road and gravel e-bikes](/shop/road-and-gravel-e-bikes/)', '$3,999 to $13,500', '7', 'Trek Checkpoint SL 5 $3,999'],
        ],
      },
    },
  ],
  drop: ['Quick recap', 'Where to learn more', 'What you need to get started', 'The different kinds of e-bike'],
  append: [
    {
      h: 'What makes an e-bike legal in Australia',
      p: [
        'The Queensland Government\'s [e-bike rules page](https://www.qld.gov.au/transport/safety/rules/wheeled-devices/electric-bicycle-rules) defines an e-bike as a bike that has pedals as the primary source of power but a small electric motor that helps you start riding, climb hills and ride against the wind. To be legal to ride in public places it must have a motor with a maximum continuous rated power of 250 watts, give pedal-powered assistance up to 25 km/h, allow throttle use only up to 6 km/h to help you start moving, and meet the European standard EN 15194 with a compliance label.',
        'It also says riders must always wear a helmet, and that from 31 August 2026 a rider must be 16 and hold at least a Learner licence, with exemptions for supervised riding and recreational trails. Electric bikes with more powerful motors are illegal devices on public paths and roads. Rules differ between states, so check your own road authority. Our guide to [legal electric bike rules](/blog/off-road-vs-street-legal-australia/) explains the detail.',
      ],
    },
    {
      h: 'The battery: what every e-bike owner should know',
      p: [
        'Every e-bike carries a lithium-ion battery. The ACCC\'s [lithium-ion batteries guide](https://www.productsafety.gov.au/consumers/be-safe-around-the-home/safely-use-batteries-and-technology/lithium-ion-batteries-guide) advises buying from a reputable supplier, charging on a non-flammable surface such as concrete, ceramic or steel, disconnecting once the battery is full and never using damaged chargers or cables. Our guides to [e bike batteries](/blog/e-bike-batteries/) and the [e bike battery charger](/blog/e-bike-battery-charger/) explain volts, amp hours and matching a charger.',
      ],
    },
  ],
  faqAppend: [
    {
      q: 'How much are e bikes in Australia?',
      a: 'In our range, folding e-bikes start at $659, commuter e-bikes at $849, cargo e-bikes at $899 and electric mountain bikes at $1,039, with premium models far higher. Add a helmet, a lock and, if you ride a lot, a spare charger. Delivery is 10% of the goods total and free from $9,900.',
    },
    {
      q: 'Is an e-bike legal to ride on the road?',
      a: 'Only if it meets the legal tests: in Queensland a motor of no more than 250 watts, pedal-powered assistance up to 25 km/h, a throttle only up to 6 km/h and EN 15194 compliance with a label. More powerful bikes are for private property only. Check your own state road authority.',
    },
  ],
  keywords: { primary: 'how much are e bikes', supporting: ['how much is an e bike', 'e-bike', 'bicycles e bike', 'electric bikes', 'e bikes'] },
}
