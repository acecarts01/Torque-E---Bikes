// Refresh of /blog/chain-alignment-high-torque-motors/ written to the blog-post rule (27 Oct 2026).
// Motors, drivetrain and sprockets category products and prices from the catalogue. Sources checked 27 Oct 2026: Park Tool chain-cleaning guide
// (degrease, dry, small drop per rivet, wipe) and Bosch eBike "Care of eBikes" (lube where the chain runs freely, no high-pressure washers).
export const slug = 'chain-alignment-high-torque-motors'

export const meta = {
  title: 'Bike Chains and Sprockets: Care and Alignment for E-Bikes',
  seoTitle: 'Bike Chains and Sprockets: E-Bike Care and Alignment',
  excerpt: 'Bike chains and sprockets for e-bikes and electric dirt bikes: alignment, tension, cleaning and lube, wear checks and chain and sprocket prices from $28.95.',
  updated: '2026-10-27',
  focus: 'bike chains',
  secondary: ['bicycle sprocket', 'chain for bike', 'chain bike', 'bicycle chains', 'bicycle sprockets'],
  tags: ['bike and chain', 'bike sprocket', 'cycle sprocket', 'sprocket in bike', 'bicycle chain link', 'bike chain locked', 'chain wheel', 'chains for bike', 'dirt bike sprocket', 'front sprocket'],
  imageAlt: 'Close-up of a gold bicycle sprocket on one of the bike chains that high-torque motors wear fast',
  related: [
    { href: '/shop/motors-drivetrain-and-sprockets/fatboy-galvanised-chain-scrambler-harlem-v2/', name: 'Fatboy Galvanised Chain Scrambler / Harlem V2', price: 28.95, note: 'A galvanised chain for Fatboy Scrambler and Harlem V2.' },
    { href: '/shop/motors-drivetrain-and-sprockets/bonnell-775-mx-custom-sprockets/', name: 'Bonnell 775 MX Custom Sprockets', price: 47.95, note: 'Custom sprockets. Off-road only.' },
    { href: '/shop/motors-drivetrain-and-sprockets/79bike-drive-chain/', name: '79Bike Drive Chain', price: 79.95, note: 'Drive chain for 79Bike. Off-road only.' },
    { href: '/shop/motors-drivetrain-and-sprockets/79bike-rear-sprocket/', name: '79Bike Rear Sprocket', price: 79.95, note: 'Rear sprocket for 79Bike. Off-road only.' },
    { href: '/shop/motors-drivetrain-and-sprockets/', name: 'All motors, drivetrain and sprockets', note: 'Kits, motors, chains and sprockets.' },
  ],
  links: {
    to: [
      ['/shop/motors-drivetrain-and-sprockets/', 'motors, drivetrain and sprockets'],
      ['/shop/care-tools-and-hydration/', 'chain lube and tools'],
      ['/blog/lubricant-for-bike-chains/', 'lubricant for bike chains'],
      ['/blog/e-bike-conversion-kits-explained/', 'e bike conversion kit guide'],
    ],
    from: [
      ['/shop/motors-drivetrain-and-sprockets/', 'bike chains and sprockets guide'],
      ['/shop/motors-drivetrain-and-sprockets/fatboy-galvanised-chain-scrambler-harlem-v2/', 'how to care for bike chains'],
      ['/shop/motors-drivetrain-and-sprockets/79bike-rear-sprocket/', 'chain and sprocket alignment explained'],
    ],
  },
}

export const body = {
  intro: [
    'Motor torque stresses bike chains and sprockets far more than pedalling does, so e-bike and electric dirt bike drivetrains wear faster. A clean, correctly tensioned and aligned chain lasts longer and runs quieter. Chains in our range start at $28.95, and sprockets at $47.95.',
    'This guide covers cleaning, lubrication, tension and alignment, how to check wear, and when to replace the chain and sprockets as a set, with real prices.',
  ],
  prepend: [
    {
      h: 'Bike chains and sprockets: prices from our range',
      p: [
        'These are examples from our [motors, drivetrain and sprockets](/shop/motors-drivetrain-and-sprockets/) range. Match chains and sprockets to your bike and replace them as a set. Ask us to confirm fit for your model before you order.',
      ],
      table: {
        head: ['Product', 'Price', 'Use'],
        rows: [
          ['[Fatboy Galvanised Chain Scrambler / Harlem V2](/shop/motors-drivetrain-and-sprockets/fatboy-galvanised-chain-scrambler-harlem-v2/)', '$28.95', 'Fatboy chain'],
          ['[Bonnell 775 MX Custom Sprockets](/shop/motors-drivetrain-and-sprockets/bonnell-775-mx-custom-sprockets/)', '$47.95', 'Off-road only'],
          ['[79Bike Drive Chain](/shop/motors-drivetrain-and-sprockets/79bike-drive-chain/)', '$79.95', '79Bike (off-road only)'],
          ['[79Bike Rear Sprocket](/shop/motors-drivetrain-and-sprockets/79bike-rear-sprocket/)', '$79.95', '79Bike (off-road only)'],
          ['[Rock N Roll Gold Chain Lube 117ml](/shop/care-tools-and-hydration/rock-n-roll-gold-chain-lube-117ml/)', '$18.95', 'Chain lube'],
          ['[Krush Ultra Drivetrain Degreaser](/shop/care-tools-and-hydration/krush-ultra-drivetrain-degreaser/)', '$23.95', 'Degreaser'],
        ],
      },
    },
  ],
  rename: {
    'Why chains wear faster on motorised bikes': 'Why bike chains wear faster on motorised bikes',
  },
  drop: ['Quick recap', 'Parts and related guides', 'A last word on drivetrain care', 'Choosing the right chain lube', 'Cleaning without damaging the motor or battery'],
  append: [
    {
      h: 'Cleaning and lubricating bike chains: what the experts say',
      p: [
        'Park Tool\'s [guide to cleaning and lubricating a chain](https://www.parktool.com/en-us/blog/repair-help/chain-cleaning-with-a-park-tool-chain-scrubber) says to check wear first and replace the chain instead of cleaning it if it is past its service life, then degrease it, dry it completely, apply a small drop of lube to each rivet and wipe off the excess so dirt will not stick.',
        'Bosch eBike Systems adds in its [care guide for e-bikes](https://www.bosch-ebike.com/en/news/care-of-ebikes) that lubrication frequency depends on how you use the bike rather than on whether it is electric, that off-road riding and rough gear shifting put more stress on the chain, that you should lube where the chain runs freely rather than directly on the sprockets, and that you should never use a high-pressure washer or steam cleaner on an e-bike. Our [lubricant for bike chains guide](/blog/lubricant-for-bike-chains/) compares dry, wet and all-round lubes.',
      ],
    },
    {
      h: 'Conversion kits and high-torque builds',
      p: [
        'If you are fitting a motor to a bike, the chain and sprockets are part of the system. Fire and Rescue NSW warns on its [e-bike battery safety page](https://www.fire.nsw.gov.au/fire-safety/home-fire-safety/topics/ebikes-escooters-battery-safety) that a significant proportion of lithium battery incidents involve equipment built by inexperienced people, so have a professional check high-power builds. Our [e bike conversion kit guide](/blog/e-bike-conversion-kits-explained/) covers fit checks, torque arms and the rules.',
      ],
    },
  ],
  faqAppend: [
    {
      q: 'How much are bike chains and sprockets?',
      a: 'In our range, the Fatboy Galvanised Chain for Scrambler and Harlem V2 is $28.95, Bonnell 775 MX custom sprockets are $47.95, and the 79Bike drive chain and rear sprocket are $79.95 each. Replace chain and sprockets as a set, and ask us to confirm fit for your model.',
    },
    {
      q: 'How should I lube bike chains on an e-bike?',
      a: 'Degrease the chain, dry it completely, apply a small drop to each roller and wipe off the excess, as Park Tool advises. Bosch says to lube where the chain runs freely, not directly on the sprockets, and never to use a high-pressure washer. A Rock N Roll chain lube is $18.95.',
    },
  ],
  keywords: { primary: 'bike chains', supporting: ['bicycle sprocket', 'chain for bike', 'chain bike', 'bicycle chains', 'bicycle sprockets'] },
}
