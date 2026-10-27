// Refresh of /blog/off-road-vs-street-legal-australia/ written to the blog-post rule (27 Oct 2026).
// Rules from qld.gov.au "E-Bike rules in Queensland" (page says new age and licence rules apply from 31 Aug 2026; checked 27 Oct 2026).
// The old age/licence and teenagers sections were replaced because they pre-dated the 2026 Queensland changes.
export const slug = 'off-road-vs-street-legal-australia'

export const meta = {
  title: 'Legal Electric Bike in Australia: Road Legal vs Off-Road Only',
  seoTitle: 'Legal Electric Bike in Australia: Road or Off-Road?',
  excerpt: 'What makes a legal electric bike in Australia: the 250W rule, the 2026 Queensland age and licence changes, and which bikes are off-road only.',
  updated: '2026-10-27',
  readTime: '14 min',
  focus: 'legal electric bike',
  secondary: ['street legal electric bike', 'road legal electric bike', 'road legal electric motorbike', 'street legal e bike', 'electric street legal dirt bike'],
  tags: ['street legal ebike australia', 'street legal electric bikes australia', 'e motorcycle australia', 'australia electric motorbike', 'australian e-bikes', 'australian e-bike', 'ev bikes australia', 'electric bikes aus', 'aus electric bikes', 'australian e bike'],
  imageAlt: 'Person riding an electric bike across a crosswalk, a legal electric bike on a coastal promenade',
  related: [
    { href: '/shop/commuter-and-urban-e-bikes/dyu-c6-electric-bike/', name: 'DYU C6 Electric Bike', price: 849, note: 'Road-style commuter e-bike. Ask us for the compliance label.' },
    { href: '/shop/commuter-and-urban-e-bikes/reid-let-s-roll/', name: "Reid Let's Roll", price: 1229, note: 'Road-style commuter e-bike. Ask us for the compliance label.' },
    { href: '/shop/electric-dirt-bikes/79bike-viper-s-electric-dirt-bike/', name: '79Bike Viper S Electric Dirt Bike', price: 949, note: 'Off-road and private property only.' },
    { href: '/shop/electric-dirt-bikes/sur-ron-light-bee-x/', name: 'Sur-Ron Light Bee X', price: 6169, note: 'Off-road and private property only.' },
    { href: '/shop/commuter-and-urban-e-bikes/', name: 'All commuter and urban e-bikes', note: '77 models.' },
  ],
  links: {
    to: [
      ['/shop/commuter-and-urban-e-bikes/', 'road-legal commuter e-bikes'],
      ['/shop/electric-dirt-bikes/', 'electric dirt bikes (off-road only)'],
      ['/shop/motors-drivetrain-and-sprockets/', 'e-bike conversion kits'],
      ['/faq/', 'e-bike legal questions'],
      ['/blog/e-bike-conversion-kits-explained/', 'e bike conversion kit guide'],
    ],
    from: [
      ['/shop/electric-dirt-bikes/', 'legal electric bike rules in Australia'],
      ['/shop/commuter-and-urban-e-bikes/', 'legal electric bike'],
      ['/electric-bikes/', 'is an electric bike legal in Australia'],
    ],
  },
}

export const body = {
  intro: [
    'A legal electric bike in Australia is a pedal-assist e-bike that meets the 250W standard: it can be used on public roads and paths, subject to state and territory rules. Electric dirt bikes and e-bikes with more powerful motors are for off-road and private property use only. The rules have been tightening, and Queensland changed its age and licence rules from 31 August 2026.',
    'That one line settles most buying decisions, but the details matter: what counts as pedal assist, who can ride, and what changes from state to state. This guide explains the difference in plain language, using the Queensland Government\'s published rules, and points you to the regulators who write them.',
  ],
  prepend: [
    {
      h: 'Legal electric bike or off-road only: the quick answer',
      p: [
        'Use this table as a first check. It reflects the Queensland Government\'s rules and the general approach across Australia, but rules vary by state and territory, so always confirm with your own road authority. Prices are current Torque E-Bikes prices.',
      ],
      table: {
        head: ['Type of bike', 'Public roads and paths?', 'Example from our range'],
        rows: [
          ['Pedal-assist e-bike, 250W, EN 15194 label', 'Yes, subject to state rules', '[DYU C6 Electric Bike](/shop/commuter-and-urban-e-bikes/dyu-c6-electric-bike/) $849'],
          ['E-bike with a motor over 250W', 'Not on Queensland public roads or paths; NSW allows up to 500W until 1 March 2029; our bikes above 250W are private property only', 'Ask us for the motor rating before you buy'],
          ['Electric dirt bike or e-moto (no pedals)', 'No: off-road and private property only', '[79Bike Viper S](/shop/electric-dirt-bikes/79bike-viper-s-electric-dirt-bike/) $949'],
          ['Conversion kit fitted to a bicycle', 'No: not compliant with EN 15194 in Queensland', '[E bike conversion kit guide](/blog/e-bike-conversion-kits-explained/)'],
        ],
      },
    },
  ],
  rename: {
    'Road-legal e-bikes: the 250W pedal-assist rule': 'Legal electric bike rules: the 250W pedal-assist rule',
  },
  drop: [
    'Quick recap',
    'A short history of why the rules look the way they do',
    'How a police officer or inspector would assess your bike',
    'Age, licence and helmet requirements',
    'Teenagers, young riders and supervision',
  ],
  append: [
    {
      h: 'Queensland rules from 31 August 2026: age, licence and helmets',
      p: [
        'Queensland\'s rules are the most recent published example, and they show where other states may head. The Queensland Government\'s [e-bike rules page](https://www.qld.gov.au/transport/safety/rules/wheeled-devices/electric-bicycle-rules) says that from 31 August 2026 you must be 16 and hold a valid driver licence, at least Learner level, to ride an e-bike in Queensland. No registration or insurance is currently needed for a legal e-bike.',
        'Exemptions apply. A rider under 16, or aged 16 to 17 without a licence, can ride if supervised by a parent, grandparent or legal guardian within a safe distance to give instructions. In recreational areas with low pedestrian traffic, such as rail trails, mountain bike trails and private recreational bicycle facilities, no specific age or licence is required. There is also a medical or disability exemption.',
        'The page also says riders must always wear a helmet, that footpath speed is limited to 12 km/h, and that from 1 July 2026 parents and guardians can be fined for allowing a child to ride an illegal device. It states that after-market conversion kits are not compliant with EN 15194 and make the device illegal to ride in public, and that a high-powered bike locked by software is still an illegal device.',
        'Other states and territories have their own rules, so check your state road authority before you buy or ride.',
      ],
    },
    {
      h: 'New South Wales rules: 500W now, 250W from 1 March 2029',
      p: [
        'Transport for NSW\'s [e-bike page](https://www.transport.nsw.gov.au/roadsafety/bicycle-riders/ebikes) shows how much the rules differ by state. It says road-legal e-bikes in NSW must have a maximum continuous rated power of 500 watts, a throttle-only function that cuts out at 6 km/h, and a motor that provides no power above 25 km/h, and that from 1 March 2029 the limit becomes 250 watts and only EN 15194 certified e-bikes will be allowed on NSW roads.',
        'It also says an e-bike that exceeds any limit is illegal even if its power or speed is restricted by an app, switch or code, that hacking or tampering can make an e-bike illegal, that riders must wear an approved, securely fitted helmet and may only carry the passengers the bike is designed for, and that new seizure and crushing laws came into effect on 21 August 2026. It recommends choosing a bike that complies with EN 15194, which it says is legal now and in the future.',
        'Whatever your state, our e-bikes above 250W are sold for off-road and private property use only, so ask us for the motor rating and compliance label before you buy anything for public roads.',
      ],
    },
    {
      h: 'Electric motorbikes and dirt bikes: what the rules say',
      p: [
        'The same page explains that some electric vehicles look like e-bikes but are electric motorcycles: they have no pedals, can go very fast under throttle power and look like mopeds or dirt bikes. On a Queensland road they need registration, insurance and a licence, and they are not allowed on paths. If a device does not meet the rules it must only be used on private property, and police can seize and destroy illegal devices from 1 July 2026.',
        'The electric dirt bikes we sell are for off-road and private property use only and are not registrable or road legal. See our guides to the [electric motorbike](/blog/what-is-an-e-moto/) and [Sur Ron for sale in Australia](/blog/sur-ron-for-sale/) for models and prices.',
      ],
    },
    {
      h: 'Battery rules and safety that apply to every bike',
      p: [
        'Lithium-ion batteries have their own safety guidance. The ACCC\'s [lithium-ion batteries guide](https://www.productsafety.gov.au/consumers/be-safe-around-the-home/safely-use-batteries-and-technology/lithium-ion-batteries-guide) says there is no mandatory safety standard for these batteries or the products that contain them, and advises buying from a reputable supplier and using the charger that came with the product. See our [e bike batteries guide](/blog/e-bike-batteries/).',
      ],
    },
  ],
  faqAppend: [
    {
      q: 'What makes a legal electric bike in Australia?',
      a: 'In general, a motor of no more than 250W continuous power, assistance only while you pedal (a throttle is allowed only at very low speed in some states) that cuts out at 25 km/h, and EN 15194 compliance. Queensland requires a compliance label. Check your own state, and ask us for the label of any bike.',
    },
    {
      q: 'Can I ride an electric dirt bike on the road in Australia?',
      a: 'No, not the electric dirt bikes we sell. They are for off-road and private property use only. The Queensland Government says bikes without pedals are treated as motorcycles that need registration, insurance and a licence, and that devices that do not meet the rules can only be used on private property.',
    },
  ],
  keywords: { primary: 'legal electric bike', supporting: ['street legal electric bike', 'road legal electric bike', 'road legal electric motorbike', 'street legal e bike', 'electric street legal dirt bike'] },
}
