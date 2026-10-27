// Refresh of /blog/what-is-an-e-moto/ written to the blog-post rule (27 Oct 2026).
// Category stats computed from the catalogue (electric-dirt-bikes 49 models $949-$19,990; kids-electric-dirt-and-balance-bikes 29 models $499-$8,495).
// Queensland wording from qld.gov.au "E-Bike rules in Queensland" (checked 27 Oct 2026): pedal-less electric vehicles are treated as motorcycles.
export const slug = 'what-is-an-e-moto'

export const meta = {
  title: 'Electric Motorbike or E-Moto? What It Is and What It Costs',
  seoTitle: 'Electric Motorbike or E-Moto: What It Is and Costs',
  excerpt: 'Electric motorbike or e-moto explained: how it differs from an e-bike, prices from $499 to $19,990 in our range, and what the Australian rules mean.',
  updated: '2026-10-27',
  focus: 'electric motorbike',
  secondary: ['electric motorcycle', 'electric motor bike', 'electric motorbikes', 'e motorcycle', 'e motorbike'],
  tags: ['motorcycle electric motorcycle', 'electric motorcycles', 'electric motorbikes australia', 'australia electric motorcycle', 'ev motorcycle', 'electric motorbikes for adults', 'e motorbike australia', 'electric moto', 'electric motobike', 'e bike motorcycle'],
  imageAlt: 'White and black motorcycle against a dark background, the look of an electric motorbike',
  related: [
    { href: '/shop/electric-dirt-bikes/79bike-viper-s-electric-dirt-bike/', name: '79Bike Viper S Electric Dirt Bike', price: 949, note: 'Our lowest-priced electric dirt bike. Off-road only.' },
    { href: '/shop/electric-dirt-bikes/talaria-sting-r-mx-tl4000-electric-off-road-motorbike/', name: 'Talaria Sting R-mx TL4000', price: 4749, note: 'Electric off-road motorbike. Off-road only.' },
    { href: '/shop/electric-dirt-bikes/sur-ron-light-bee-x/', name: 'Sur-Ron Light Bee X', price: 6169, note: 'A popular lightweight e-moto. Off-road only.' },
    { href: '/shop/kids-electric-dirt-and-balance-bikes/ktm-sx-e-5/', name: 'KTM SX-E 5', price: 8495, note: 'A kids electric motorbike. Off-road only.' },
    { href: '/shop/electric-dirt-bikes/', name: 'All electric dirt bikes', note: '49 models.' },
  ],
  links: {
    to: [
      ['/shop/electric-dirt-bikes/', 'electric dirt bikes'],
      ['/shop/kids-electric-dirt-and-balance-bikes/', 'kids electric dirt bikes'],
      ['/blog/off-road-vs-street-legal-australia/', 'e-bike laws'],
      ['/blog/sur-ron-for-sale/', 'Sur Ron for sale'],
    ],
    from: [
      ['/shop/electric-dirt-bikes/', 'electric motorbike guide'],
      ['/shop/electric-dirt-bikes/79bike-viper-s-electric-dirt-bike/', 'what an electric motorbike is'],
      ['/shop/kids-electric-dirt-and-balance-bikes/', 'electric motorbike for kids explained'],
    ],
  },
}

export const body = {
  intro: [
    'An electric motorbike, often called an e-moto, is a battery-powered two-wheeler that looks and rides more like a motorbike than a bicycle. Many have no pedals, and they use a throttle rather than pedal assist. In our range, electric dirt bikes run from $949 to $19,990, and every one is for off-road and private property use only.',
    'The term covers everything from small kids\' bikes to powerful off-road machines. Understanding how an e-moto differs from an e-bike matters because the rules are different, and this guide explains the difference, what an electric motorbike costs and what to check before you buy.',
  ],
  prepend: [
    {
      h: 'Electric motorbike prices: what an e-moto costs',
      p: [
        'Prices below are current Torque E-Bikes prices. All of these bikes are for off-road and private property use only, and none is road legal or registrable in Australia. Ask us for the motor, battery and weight figures of any model before you order.',
      ],
      table: {
        head: ['Range', 'Price range', 'Models', 'Example'],
        rows: [
          ['[Electric dirt bikes](/shop/electric-dirt-bikes/)', '$949 to $19,990', '49', '[79Bike Viper S](/shop/electric-dirt-bikes/79bike-viper-s-electric-dirt-bike/) $949'],
          ['[Kids electric dirt and balance bikes](/shop/kids-electric-dirt-and-balance-bikes/)', '$499 to $8,495', '29', 'Razor MX350 $499'],
          ['Mid-range off-road e-moto', 'from $4,749', '', '[Talaria Sting R-mx TL4000](/shop/electric-dirt-bikes/talaria-sting-r-mx-tl4000-electric-off-road-motorbike/) $4,749'],
          ['Popular lightweight e-moto', '$6,169', '', '[Sur-Ron Light Bee X](/shop/electric-dirt-bikes/sur-ron-light-bee-x/) $6,169'],
        ],
      },
    },
  ],
  rename: {
    'E-moto, e-bike and electric dirt bike': 'Electric motorbike, e-moto and e-bike: what is the difference',
  },
  drop: ['Quick recap', 'A last word on e-motos', 'The future of electric motorbikes'],
  append: [
    {
      h: 'What the rules say about an electric motorbike in Australia',
      p: [
        'The Queensland Government\'s [e-bike rules page](https://www.qld.gov.au/transport/safety/rules/wheeled-devices/electric-bicycle-rules) draws the line clearly. Some electric vehicles look like e-bikes but are actually electric motorcycles: they have no pedals, can go very fast under throttle power and look like mopeds or dirt bikes. If used on a Queensland road they need registration, insurance and a licence, and they are not allowed on paths.',
        'The page adds that not all electric motorcycles can be registered, and that a device that does not meet the safety standards for registration cannot be used on roads, paths or any public place and must only be used on private property. It also says electric bikes with motors more powerful than 250 watts are illegal devices on public paths and roads. Rules differ between states, so check your own road authority.',
        'Every bike we list as an electric motorbike is for off-road and private property use only. See our guide to [e-bike laws in Australia](/blog/off-road-vs-street-legal-australia/) for the wider picture.',
      ],
    },
    {
      h: 'Battery safety for an electric motorbike',
      p: [
        'An e-moto battery is a large lithium-ion pack. The ACCC\'s [lithium-ion batteries guide](https://www.productsafety.gov.au/consumers/be-safe-around-the-home/safely-use-batteries-and-technology/lithium-ion-batteries-guide) advises charging on non-flammable surfaces, disconnecting when the battery is full, using the charger that came with the bike, and never using damaged batteries or cables. Our [e bike battery charger guide](/blog/e-bike-battery-charger/) explains matching a charger to a pack.',
      ],
    },
  ],
  faqAppend: [
    {
      q: 'How much is an electric motorbike in Australia?',
      a: 'In our range, electric dirt bikes cost from $949 to $19,990, and kids electric dirt and balance bikes from $499 to $8,495. A popular lightweight model, the Sur-Ron Light Bee X, is $6,169. Delivery is 10% of the goods total and free from $9,900. All are off-road and private property use only.',
    },
    {
      q: 'Can I register an electric dirt bike for the road?',
      a: 'The electric dirt bikes we list are not registrable or road legal in Australia and are for off-road and private property use only. The Queensland Government also says not all electric motorcycles can be registered, so check your own road authority before you buy anything for road use.',
    },
  ],
  keywords: { primary: 'electric motorbike', supporting: ['electric motorcycle', 'electric motor bike', 'electric motorbikes', 'e motorcycle', 'e motorbike'] },
}
