// Refresh of /blog/e-bike-and-dirt-bike-brakes/ written to the blog-post rule (27 Oct 2026).
// Brakes category: 19 products, $22.95 to $409 (catalogue). Sources checked 27 Oct 2026: Park Tool "Disc Brake Pad Removal & Installation"
// (pad wear about 1mm, contamination symptoms, after-install steps) and qld.gov.au "Helmets and equipment" (at least one working brake and a bell/horn).
export const slug = 'e-bike-and-dirt-bike-brakes'

export const meta = {
  title: 'Bicycle Brake Pads and Brakes for E-Bikes and Dirt Bikes',
  seoTitle: 'Bicycle Brake Pads: E-Bike and Dirt Bike Brakes Guide',
  excerpt: 'Bicycle brake pads and brakes for e-bikes and electric dirt bikes: pad types, prices from $22.95, wear limits, contamination and when to upgrade.',
  updated: '2026-10-27',
  focus: 'bicycle brake pads',
  secondary: ['disk brake pads for bikes', 'cycle disk brake pads', 'brake pads bike', 'bicycle disc brake pads', 'bicycle disk brake pads'],
  tags: ['bicycle brakes', 'cycle brake pad', 'bike disk brake pads', 'bike brake pad', 'brake bike pads', 'brake pads mtb', 'kool stop brake pads', 'brake pads for bicycle disc brakes', 'carbon rim brake pads', 'mtb bike brake pads'],
  imageAlt: 'Bicycle rear wheel with disc brake, where bicycle brake pads wear',
  related: [
    { href: '/shop/brakes/brake-pads-sram-avid-zoom-sport-organic/', name: 'Brake Pads SRAM/Avid/Zoom Sport Organic', price: 22.95, note: 'Our lowest-priced brake pads.' },
    { href: '/shop/brakes/jagwire-mountain-sport-semi-metallic-disc-brake-pads-shimano-rst-tektro-trp/', name: 'Jagwire Mountain Sport Semi-Metallic Disc Brake Pads', price: 23.95, note: 'Semi-metallic disc pads for Shimano, RST, Tektro and TRP.' },
    { href: '/shop/brakes/nutt-hydraulic-brake-pads-with-cooling-fins/', name: 'Nutt Hydraulic Brake Pads With Cooling Fins', price: 27.95, note: 'Hydraulic pads with cooling fins.' },
    { href: '/shop/brakes/79-bike-falcon-pro-brake-pads/', name: '79 Bike Falcon Pro Brake Pads', price: 32.95, note: 'For the 79Bike Falcon Pro.' },
    { href: '/shop/brakes/', name: 'All brakes', note: '19 products.' },
  ],
  links: {
    to: [
      ['/shop/brakes/', 'e-bike brakes'],
      ['/shop/care-tools-and-hydration/', 'brake cleaner and tools'],
      ['/blog/e-bike-tyres-and-tubes/', 'e-bike tyres and tubes'],
      ['/blog/chain-alignment-high-torque-motors/', 'chain alignment guide'],
    ],
    from: [
      ['/shop/brakes/', 'bicycle brake pads guide'],
      ['/shop/brakes/brake-pads-sram-avid-zoom-sport-organic/', 'how to choose bicycle brake pads'],
      ['/shop/brakes/nutt-hydraulic-brake-pads-with-cooling-fins/', 'e-bike brake pads explained'],
    ],
  },
}

export const body = {
  intro: [
    'Bicycle brake pads do more work on an e-bike or an electric dirt bike, because these bikes are heavier and faster than a normal bike. Good brakes are one of the most useful safety upgrades you can make, and pads in our range start at $22.95 a set.',
    'This guide explains the main brake types, how to choose and check pads and rotors, what real prices look like and when to upgrade.',
  ],
  prepend: [
    {
      h: 'Bicycle brake pads: prices and options from our range',
      p: [
        'These are examples from our [brakes](/shop/brakes/) range, which has 19 products from $22.95 to $409. Match pads to your exact caliper, because pad shapes differ. Ask us if you are unsure what fits.',
      ],
      table: {
        head: ['Product', 'Price', 'Fits'],
        rows: [
          ['[Brake Pads SRAM/Avid/Zoom Sport Organic](/shop/brakes/brake-pads-sram-avid-zoom-sport-organic/)', '$22.95', 'SRAM, Avid, Zoom'],
          ['[Jagwire Mountain Sport Semi-Metallic Disc Brake Pads](/shop/brakes/jagwire-mountain-sport-semi-metallic-disc-brake-pads-shimano-rst-tektro-trp/)', '$23.95', 'Shimano, RST, Tektro, TRP'],
          ['[Nutt Hydraulic Brake Pads With Cooling Fins](/shop/brakes/nutt-hydraulic-brake-pads-with-cooling-fins/)', '$27.95', 'Hydraulic brakes'],
          ['[79 Bike Falcon Pro Brake Pads](/shop/brakes/79-bike-falcon-pro-brake-pads/)', '$32.95', '79Bike Falcon Pro'],
          ['79Bike Falcon GT Brake Pads', '$34.95', '79Bike Falcon GT (off-road only)'],
          ['79Bike Front & Rear Brake Disc', '$43.95', '79Bike (off-road only)'],
        ],
      },
    },
  ],
  rename: {
    'Pads: organic or sintered': 'Bicycle brake pads: organic or sintered',
  },
  drop: ['Quick recap', 'Browse brakes', 'Brakes on a high-power bike'],
  append: [
    {
      h: 'When to replace bicycle brake pads, and what ruins them',
      p: [
        'Park Tool\'s guide to [disc brake pad removal and installation](https://www.parktool.com/en-int/blog/repair-help/disc-brake-pad-removal-installation) says pad material should generally be at least 1 mm thick, and suggests stacking three business cards as a rough 1 mm gauge, while advising you to check the pad maker\'s wear specification and use a caliper for an accurate reading.',
        'It also warns that oil, grease and brake fluid can ruin pads and are not always easy to see. The symptoms are squeal, more lever effort to slow down, and dark rotor and pad surfaces that smear when rubbed with a finger. Find and fix the source, such as aerosol lubricant overspray or a hydraulic leak, before you fit new pads. After installing new pads on hydraulic brakes, pump the lever until the pads firmly contact the rotor, then spin the wheel and check for rubbing; on mechanical brakes, align the calipers.',
        'Keep chain lube well away from rotors and pads: our [lubricant for bike chains guide](/blog/lubricant-for-bike-chains/) explains how.',
      ],
    },
    {
      h: 'The legal minimum: brakes and warning devices',
      p: [
        'The Queensland Government\'s [helmets and equipment page](https://www.qld.gov.au/transport/public/bicycle-riding/safety/helmets-and-equipment) says it is a legal requirement that every time you ride, your bike has at least one working brake and a bell, horn or other warning device, and advises checking your bell and brakes each time before you ride. On a heavy e-bike, check both brakes work properly, not just one. For tyres, which share the braking job, see our [e-bike tyres and tubes guide](/blog/e-bike-tyres-and-tubes/).',
      ],
    },
  ],
  faqAppend: [
    {
      q: 'How thick should bicycle brake pads be?',
      a: 'Park Tool says pad material should generally be at least 1 mm thick, and suggests three stacked business cards as a rough gauge. Check the maker\'s wear specification for your pads and use a caliper for an accurate measurement. Replace pads sooner if they are contaminated with oil, grease or brake fluid.',
    },
    {
      q: 'How much are bicycle brake pads?',
      a: 'In our range, brake pads start at $22.95 for the SRAM/Avid/Zoom Sport Organic set, with the Jagwire Mountain Sport semi-metallic set at $23.95, the Nutt hydraulic pads with cooling fins at $27.95 and the 79 Bike Falcon Pro pads at $32.95. Match the pad to your caliper before you order.',
    },
  ],
  keywords: { primary: 'bicycle brake pads', supporting: ['disk brake pads for bikes', 'cycle disk brake pads', 'brake pads bike', 'bicycle disc brake pads', 'bicycle disk brake pads'] },
}
