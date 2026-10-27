// Refresh of /blog/flight-risk-fr505-and-fr555/ written to the blog-post rule (27 Oct 2026).
// Prices from the catalogue (fat-tyre-and-scrambler-e-bikes: FR505 $2,429, FR888 $3,419, FR777 $4,849); the FR555 is not listed and the post says so.
// Tag exception agreed with the owner: Semrush AU has only 6 relevant unused Flight Risk tags (the rest are film queries such as "flight risk rotten tomatoes").
// Any bike with a motor above 250W is off-road and private property use only. Rules from qld.gov.au and Transport for NSW (checked 27 Oct 2026).
export const slug = 'flight-risk-fr505-and-fr555'

export const meta = {
  title: 'Flight Risk Electric Bike: FR505, FR777 and FR888 Compared',
  seoTitle: 'Flight Risk Electric Bike: FR505, FR777, FR888',
  excerpt: 'Flight Risk electric bike guide: FR505 $2,429, FR888 $3,419 and FR777 $4,849 compared, what to check on a fat-tyre e-bike and the rules for riding.',
  updated: '2026-10-27',
  focus: 'flight risk electric bike',
  secondary: ['flight risk e bikes', 'flight risk e-bike', 'flight risk electric bikes', 'flightrisk ebike', 'flight risk fr333'],
  tags: ['flight risk bike', 'flight risk 505', 'flight risk ebikes', 'flight risk 303', 'ebike flight risk', 'fr777 electric bike'],
  tagsShortReason: 'only 6 relevant unused Flight Risk keywords in Semrush AU',
  imageAlt: 'Close-up of a bike tyre on a trail, the grip a Flight Risk electric bike is built around',
  related: [
    { href: '/shop/fat-tyre-and-scrambler-e-bikes/flight-risk-fr505/', name: 'Flight Risk FR505', price: 2429, note: 'The lowest-priced Flight Risk we list.' },
    { href: '/shop/fat-tyre-and-scrambler-e-bikes/flight-risk-fr888/', name: 'Flight Risk FR888', price: 3419, note: 'The mid-priced Flight Risk.' },
    { href: '/shop/fat-tyre-and-scrambler-e-bikes/flight-risk-fr777/', name: 'Flight Risk FR777', price: 4849, note: 'The top Flight Risk we list.' },
    { href: '/shop/fat-tyre-and-scrambler-e-bikes/', name: 'All fat-tyre and scrambler e-bikes', note: '41 models.' },
  ],
  links: {
    to: [
      ['/brands/flight-risk/', 'Flight Risk'],
      ['/shop/fat-tyre-and-scrambler-e-bikes/', 'fat-tyre e-bikes'],
      ['/blog/fat-tyre-e-bikes/', 'fat tyre e bike guide'],
      ['/blog/off-road-vs-street-legal-australia/', 'legal electric bike rules'],
      ['/blog/helmets-and-protective-gear-for-e-bikes/', 'e bike helmet and protective gear'],
    ],
    from: [
      ['/brands/flight-risk/', 'Flight Risk electric bike guide'],
      ['/shop/fat-tyre-and-scrambler-e-bikes/flight-risk-fr505/', 'how to choose a Flight Risk electric bike'],
      ['/shop/fat-tyre-and-scrambler-e-bikes/flight-risk-fr777/', 'Flight Risk electric bikes compared'],
    ],
  },
}

export const body = {
  intro: [
    'A Flight Risk electric bike is a fat-tyre e-bike, and the FR505 and FR555 are two of the names people search for. They are different bikes, so compare their specifications rather than relying on the name. We list three Flight Risk models: the FR505 at $2,429, the FR888 at $3,419 and the FR777 at $4,849. The FR555 is not currently listed.',
    'This guide shows how the models we list compare on price, what to check on any fat-tyre bike, and what the rules say about riding a powerful e-bike in Australia.',
  ],
  prepend: [
    {
      h: 'Flight Risk electric bike models and prices we list',
      p: [
        'These are the Flight Risk bikes in our [fat-tyre and scrambler e-bikes](/shop/fat-tyre-and-scrambler-e-bikes/) range. The listings do not publish motor power, battery size or range, so ask us for the figures and the compliance label before you order, because a motor above 250W makes a bike off-road and private property use only.',
      ],
      table: {
        head: ['Model', 'Price', 'Notes'],
        rows: [
          ['[Flight Risk FR505](/shop/fat-tyre-and-scrambler-e-bikes/flight-risk-fr505/)', '$2,429', 'Listed'],
          ['[Flight Risk FR888](/shop/fat-tyre-and-scrambler-e-bikes/flight-risk-fr888/)', '$3,419', 'Listed'],
          ['[Flight Risk FR777](/shop/fat-tyre-and-scrambler-e-bikes/flight-risk-fr777/)', '$4,849', 'Listed'],
          ['Flight Risk FR555', 'Not listed', 'Ask us what can be sourced'],
        ],
      },
    },
  ],
  rename: {
    'The Flight Risk range': 'The Flight Risk electric bike range',
  },
  drop: ['Quick recap', 'Where to see them', 'A note on honesty about models we do not list'],
  append: [
    {
      h: 'Are Flight Risk bikes legal to ride? What the rules say',
      p: [
        'It depends on the model\'s motor and your state. The Queensland Government\'s [e-bike rules page](https://www.qld.gov.au/transport/safety/rules/wheeled-devices/electric-bicycle-rules) says a legal e-bike must have a motor of no more than 250 watts maximum continuous rated power, assist up to 25 km/h, allow throttle use only up to 6 km/h and carry an EN 15194 compliance label. Bikes with more powerful motors are illegal devices on public paths and roads, and a bike locked by software is still an illegal device.',
        'Transport for NSW\'s [e-bike page](https://www.transport.nsw.gov.au/roadsafety/bicycle-riders/ebikes) says road-legal e-bikes in NSW have a maximum continuous rated power of 500 watts now (250 watts from 1 March 2029), throttle-only power that cuts out at 6 km/h and no power above 25 km/h. Any Flight Risk with a motor above 250W is for off-road and private property use only, so ask us for the exact rating of the model you want, and check your own road authority.',
      ],
    },
    {
      h: 'Battery safety for a fat-tyre e-bike',
      p: [
        'A Flight Risk carries a large lithium-ion battery. The ACCC\'s [lithium-ion batteries guide](https://www.productsafety.gov.au/consumers/be-safe-around-the-home/safely-use-batteries-and-technology/lithium-ion-batteries-guide) advises charging on non-flammable surfaces, disconnecting once the battery is full, using the charger that came with the bike and never using damaged chargers or cables. For fat-tyre care see our [fat tyre e bike guide](/blog/fat-tyre-e-bikes/), and for protective gear see our [e bike helmet guide](/blog/helmets-and-protective-gear-for-e-bikes/).',
      ],
    },
  ],
  faqAppend: [
    {
      q: 'How much is a Flight Risk electric bike?',
      a: 'In our range, the Flight Risk FR505 is $2,429, the FR888 is $3,419 and the FR777 is $4,849. The FR555 is not listed. Ask us for the motor rating, battery size and compliance label before you order. Delivery is 10% of the goods total and free from $9,900.',
    },
    {
      q: 'Is the Flight Risk FR777 road legal?',
      a: 'It depends on its motor rating and your state, and we need to confirm the exact figure for the model year. A motor above 250W makes a bike off-road and private property use only. Queensland requires 250W and an EN 15194 label, and NSW allows 500W until 1 March 2029. Ask us before you buy.',
    },
  ],
  keywords: { primary: 'flight risk electric bike', supporting: ['flight risk e bikes', 'flight risk e-bike', 'flight risk electric bikes', 'flightrisk ebike', 'flight risk fr333'] },
}
