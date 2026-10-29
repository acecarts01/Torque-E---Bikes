// Blog post written to the blog-post rule (see ~/.claude/skills/blog-post/SKILL.md).
// Keywords: volume / KD / intent from Semrush AU Keyword Magic (29 Oct 2026), KD 28 or lower, recorded in docs/used-keywords.csv. 15 relevant unused keywords exist at KD 28 or lower, which gives a focus keyword, 5 secondary keywords and 9 tags (documented short list). Muc-Off terms are tags because shoppers search for them; we do not stock Muc-Off and the post says so.
// Topic source: competitor blogs and parts pages (Ampd Bros parts and accessories posts, 99 Bikes tools and maintenance). Our chain lube guide exists; the degreaser and cleaning step was not covered.
// Competitor review 29 Oct 2026 (retailer category pages, Muc-Off and Park Tool pages): weaknesses are product lists with no method, no wear check before cleaning, no mention of keeping degreaser off brake rotors, no e-bike drivetrain notes, no cost per clean. Plan: Park Tool method, wear check first, rotor and bearing cautions, items we stock.
// Sources opened 29 Oct 2026: Park Tool "How to Clean and Lubricate a Chain" (wear check, bike-specific degreaser, 30 backward revolutions, rinse, dry, one small drop of lube per rivet, wipe excess), Park Tool "How to Wash a Bicycle" (low pressure, no solvent into bearings, dry, lube).
// Product pages publish only names and prices, so the post claims only names, brands and prices. We do not claim what the Krush degreaser is made of.
export const meta = {
  id: 'bike-chain-degreaser',
  slug: 'bike-chain-degreaser',
  url: '/blog/bike-chain-degreaser/',
  title: 'Bike Chain Degreaser: How to Clean a Drivetrain Safely',
  seoTitle: 'Bike Chain Degreaser: How to Clean a Drivetrain Safely',
  excerpt: 'Choosing a bike chain degreaser? Learn the Park Tool method, why to check chain wear first, how to protect rotors and bearings, and the Krush degreaser we stock at $23.95.',
  category: 'Buying Guides',
  date: '2026-10-29',
  readTime: '10 min',
  focus: 'bike chain degreaser',
  secondary: ['bicycle chain degreaser', 'bicycle degreaser', 'bike specific degreaser', 'degreaser bike', 'bike cleaning products'],
  tags: ['muc off drivetrain cleaner', 'bicycle cleaning machine', 'bike cleaning station', 'cleaning kit for bicycle', 'muc off nano tech bike cleaner', 'best bicycle cleaner', 'chain cleaner bike', 'chain degreaser bike', 'muc-off bio drivetrain cleaner'],
  tagsShortReason: 'only 15 relevant unused degreaser keywords exist in Semrush AU at KD 28 or lower, which gives a focus keyword, 5 secondary keywords and 9 tags',
  image: {
    file: 'blog/bike-chain-degreaser.webp',
    alt: 'Krush Ultra Drivetrain Degreaser, Krush Rotor Revive and Rock N Roll chain lube, a bike chain degreaser set',
    query: 'bike chain degreaser',
    credit: null,
  },
  related: [
    { href: '/shop/care-tools-and-hydration/krush-ultra-drivetrain-degreaser/', name: 'Krush Ultra Drivetrain Degreaser', price: 23.95, note: 'A drivetrain degreaser.' },
    { href: '/shop/care-tools-and-hydration/krush-rotor-revive/', name: 'Krush Rotor Revive', price: 32.95, note: 'A rotor care product.' },
    { href: '/shop/care-tools-and-hydration/rock-n-roll-gold-chain-lube-117ml/', name: 'Rock N Roll Gold Chain Lube 117ml', price: 18.95, note: 'A chain lube.' },
    { href: '/shop/care-tools-and-hydration/rock-n-roll-extreme-blue-chain-lube-117ml/', name: 'Rock N Roll Extreme Blue Chain Lube 117ml', price: 18.95, note: 'A chain lube for tougher conditions.' },
    { href: '/shop/care-tools-and-hydration/', name: 'All care, tools and hydration', note: 'Lubes, degreasers and bottles.' },
  ],
  links: {
    to: [
      ['/shop/care-tools-and-hydration/', 'care, tools and hydration'],
      ['/blog/lubricant-for-bike-chains/', 'lubricant for bike chains guide'],
      ['/blog/bike-tool-kit/', 'bike tool kit guide'],
      ['/blog/e-bike-and-dirt-bike-brakes/', 'e-bike and dirt bike brakes guide'],
    ],
    from: [
      ['/shop/care-tools-and-hydration/', 'bike chain degreaser buying guide'],
      ['/shop/care-tools-and-hydration/krush-ultra-drivetrain-degreaser/', 'bicycle chain degreaser: how to use it'],
      ['/shop/care-tools-and-hydration/rock-n-roll-gold-chain-lube-117ml/', 'chain cleaner bike steps'],
    ],
  },
  kind: 'post',
}

export const body = {
  hook: 'A bike chain degreaser cuts old grease and grit off the drivetrain so the new lube can work. Check chain wear first, keep degreaser off brake rotors and bearings, and relube straight after.',
  intro: [
    'A bike chain degreaser is a cleaner made to strip old lube, dirt and grime from the chain, cassette and chainrings. Used with a brush or a chain scrubber, it restores shifting and extends the life of the drivetrain. It is not a lube, and a chain cleaned with degreaser must be lubed straight away.',
    'This guide sets out the Park Tool method, explains why to measure the chain before you clean it, shows what to protect, covers e-bike drivetrains and lists what we stock with prices. Prices are current Torque E-Bikes prices. For the lube step, see our [lubricant for bike chains guide](/blog/lubricant-for-bike-chains/).',
  ],
  sections: [
    {
      h: 'The cleaning method, step by step',
      p: [
        'Park Tool\'s [guide to cleaning and lubricating a chain](https://www.parktool.com/en-int/blog/repair-help/chain-cleaning-with-a-park-tool-chain-scrubber) is the clearest method we found. Follow the same order every time.',
      ],
      ul: [
        '**Check the chain for wear first.** Park Tool says to check with a wear indicator, and if the chain is worn past its service life, replace it instead of cleaning it.',
        '**Use a bicycle-specific degreaser.** Park Tool recommends one to cut through grime and oil build-up on used chains.',
        '**Shift to the smallest cog and front chainring.** This puts the chain in a position that is easy to reach.',
        '**Scrub the chain.** Use a chain scrubber or a stiff brush, and turn the cranks backwards for at least thirty revolutions.',
        '**Rinse with soapy water.** Repeat until the chain is clean and the water runs clear.',
        '**Let it dry.** Wipe the chain with a clean rag and let it dry fully.',
        '**Lube each rivet.** Apply one small drop of purpose-made lube to each rivet, then wipe off the excess so dirt does not stick.',
      ],
    },
    {
      h: 'Degreaser, bike wash or both?',
      p: [
        'A degreaser is for the drivetrain, and a bike wash is for the frame and wheels. Using one product on everything is common, but it is not ideal. A strong degreaser on paint, rubber or brake parts can cause damage, and a gentle bike wash will not shift baked-on chain grime.',
      ],
      table: {
        head: ['Product', 'Use it on', 'Avoid on'],
        rows: [
          ['Drivetrain degreaser', 'Chain, cassette, chainrings, derailleur pulleys', 'Brake rotors, pads, bearings, paint'],
          ['Bike wash or soapy water', 'Frame, wheels, mudguards', 'Open bearings and electrical connections'],
          ['Rotor care product', 'Disc brake rotors, as the label directs', 'Chain and drivetrain'],
          ['Chain lube', 'Clean, dry chain only', 'Rotors, pads, rims'],
        ],
      },
    },
    {
      h: 'Why check chain wear before you clean',
      p: [
        'A chain stretches as it wears, and a worn chain damages the cassette and chainrings. Cleaning a worn chain makes it look better but does not make it last longer. Park Tool says to check with a wear indicator before cleaning and to replace a chain that is worn past its service life. A new chain costs far less than a new cassette and chainrings, so replace it on time.',
        'On an e-bike the drivetrain carries more torque, and the chain and sprockets can wear faster. Ask your dealer how often to check yours, and keep the chain clean and lubed between checks.',
      ],
      img: { file: 'blog/bike-chain-degreaser-krush.webp', alt: 'Krush Ultra Drivetrain Degreaser, a bicycle degreaser for the chain and cassette', w: 720, h: 540 },
    },
    {
      h: 'Protect the rotors, pads and bearings',
      ul: [
        '**Keep degreaser off brake rotors and pads.** Contamination ruins braking. Remove the wheel or cover the rotor if you spray near it, and clean any splash straight away.',
        '**Keep solvent out of bearings.** Park Tool\'s [guide to washing a bicycle](https://www.parktool.com/en-us/blog/repair-help/bike-washing-and-cleaning) says to avoid cleaning solvent dripping into the bearings.',
        '**Use low water pressure.** Park Tool says to keep hose pressure low with a wide spray.',
        '**Protect the electrics on an e-bike.** Do not spray the motor, the battery connections or the display, and never clean while the battery is charging.',
        '**Dispose of used degreaser properly.** Park Tool advises checking with local authorities on solvent disposal. Do not pour it down a drain or onto the ground.',
        '**Wear gloves and work in the open.** Follow the label for safe use.',
      ],
    },
    {
      h: 'Cleaning tools and kits',
      p: [
        'You can clean a chain with only a brush, a rag and a container, which is how Park Tool describes the no-scrubber method: dip a stiff brush in degreaser and scrub the chain as you hold it. A chain scrubber or a cleaning station holds the degreaser against the chain while you turn the cranks and is tidier. A cleaning kit for a bicycle usually adds brushes and a bottle.',
        'Products from brands such as Muc-Off are popular, and shoppers search for names such as a Muc-Off drivetrain cleaner. We do not stock Muc-Off. Our care range covers the Krush degreaser and rotor care and the Rock N Roll chain lubes below.',
      ],
    },
    {
      h: 'Degreaser and care products we stock',
      p: [
        'Product pages publish the name, brand and price only, so read the label for use and safety instructions.',
      ],
      table: {
        head: ['Product', 'Brand', 'Price', 'Use'],
        rows: [
          ['[Krush Ultra Drivetrain Degreaser](/shop/care-tools-and-hydration/krush-ultra-drivetrain-degreaser/)', 'Krush', '$23.95', 'Drivetrain degreaser'],
          ['[Krush Rotor Revive](/shop/care-tools-and-hydration/krush-rotor-revive/)', 'Krush', '$32.95', 'Rotor care'],
          ['[Rock N Roll Gold Chain Lube 117ml](/shop/care-tools-and-hydration/rock-n-roll-gold-chain-lube-117ml/)', 'Rock N Roll', '$18.95', 'Chain lube'],
          ['[Rock N Roll Absolute Dry Chain Lube 117ml](/shop/care-tools-and-hydration/rock-n-roll-absolute-dry-chain-lube-117ml/)', 'Rock N Roll', '$18.95', 'Dry chain lube'],
          ['[Rock N Roll Extreme Blue Chain Lube 117ml](/shop/care-tools-and-hydration/rock-n-roll-extreme-blue-chain-lube-117ml/)', 'Rock N Roll', '$18.95', 'Chain lube for tougher conditions'],
        ],
      },
    },
    {
      h: 'How often to clean the chain',
      ul: [
        '**After wet or muddy rides.** Water and grit wash the lube away and wear the chain quickly.',
        '**After dusty rides.** Dust sticks to the lube and forms a grinding paste.',
        '**When it squeaks or looks black.** A noisy, dirty chain needs cleaning and lube.',
        '**Before a long trip or a race.** Start with a clean, fresh drivetrain.',
        '**On a regular schedule.** Many riders clean monthly and wipe and lube more often.',
        '**After a beach ride.** Rinse, dry and lube. See our [electric beach cruiser bicycle guide](/blog/electric-beach-cruiser-bicycle/).',
      ],
    },
    {
      h: 'E-bike and dirt bike drivetrains',
      p: [
        'E-bikes and electric dirt bikes put more torque through the chain than pedal bikes. Chains on those machines can be thicker and some use belts or sealed chains, so check the manual before you use degreaser, and ask the maker what is safe on your drivetrain. A sealed or belt drive may need only a wipe.',
        'Mud and sand are hard on chains, so clean after a dirty ride, then lube. Our [e-bike and dirt bike brakes guide](/blog/e-bike-and-dirt-bike-brakes/) explains how to keep contamination off the brakes while you work.',
      ],
    },
    {
      h: 'A complete drivetrain clean in order',
      ul: [
        '**1. Set up.** Put the bike in a stand or lean it where it will not fall, and lay down a rag or tray to catch drips.',
        '**2. Check the chain.** Measure wear with an indicator and replace the chain if it is past its limit.',
        '**3. Protect the brakes.** Keep degreaser away from rotors and pads, and remove or shield the wheel if needed.',
        '**4. Degrease the chain.** Use a scrubber or brush and turn the cranks backwards.',
        '**5. Clean the cogs and chainrings.** Use a brush to get between the teeth and clean the derailleur pulleys.',
        '**6. Rinse.** Use soapy water and low pressure, and keep water away from the electrics.',
        '**7. Dry.** Wipe the chain with a clean rag and let it air dry.',
        '**8. Lube.** One small drop per rivet, then wipe off the excess.',
        '**9. Test.** Spin the cranks, shift through the gears and check the brakes before you ride.',
      ],
    },
    {
      h: 'Choosing a lube after degreasing',
      p: [
        'A degreased chain is bare, so the lube you choose matters. Dry conditions and dust suit a dry lube that does not attract dirt, and wet or muddy conditions suit a heavier lube that stays on in the rain. We stock Rock N Roll lubes in gold, absolute dry and extreme blue versions at $18.95 each, and our [lubricant for bike chains guide](/blog/lubricant-for-bike-chains/) explains how to choose.',
        'Whatever lube you pick, apply it to a dry chain and wipe the excess, as Park Tool advises. A chain with too much lube collects grit and wears faster than a lightly lubed one.',
      ],
    },
    {
      h: 'Storing degreaser safely',
      p: [
        'Keep degreaser in its original, labelled container with the lid closed, away from children, pets, heat and open flame. Park Tool\'s chain cleaning guidance is to check with local authorities on solvent disposal, so do not pour used fluid down a drain. Wipe up spills at once and wash your hands after use.',
        'Read the label on any product you buy for storage, ventilation and first-aid advice, because products differ. If you are unsure, ask the maker or the shop.',
      ],
    },
    {
      h: 'Bike chain degreaser mistakes to avoid',
      ul: [
        '**Cleaning a worn chain.** Measure it first and replace it if it is worn.',
        '**Skipping the relube.** A clean, dry chain rusts and wears fast.',
        '**Over-lubing.** Wipe off the excess so dirt does not stick.',
        '**Getting degreaser on the brakes.** Cover or remove the wheel and clean up splashes.',
        '**Using flammable solvents carelessly.** Use a bicycle-specific product and follow the label.',
        '**Blasting with a pressure washer.** Use low pressure and avoid bearings and electrics.',
        '**Pouring waste down the drain.** Dispose of it properly.',
      ],
    },
    {
      h: 'Which bike chain degreaser should you buy?',
      p: [
        'For most riders, the [Krush Ultra Drivetrain Degreaser at $23.95](/shop/care-tools-and-hydration/krush-ultra-drivetrain-degreaser/) plus a chain lube from the Rock N Roll range at $18.95 covers the clean-and-lube job. If you ride with disc brakes, the [Krush Rotor Revive at $32.95](/shop/care-tools-and-hydration/krush-rotor-revive/) is the rotor care product we stock. Browse the full [care, tools and hydration range](/shop/care-tools-and-hydration/).',
        'Tell us what you ride and the conditions, and we will suggest the right products. All orders ship Australia-wide with dangerous-goods certified dispatch.',
      ],
    },
  ],
  faq: [
    { q: 'What is the best bike chain degreaser?', a: 'Use a bicycle-specific degreaser, as Park Tool advises. We stock the Krush Ultra Drivetrain Degreaser at $23.95. Read the label for use and safety instructions, and relube the chain after cleaning.' },
    { q: 'How do I clean a bike chain with degreaser?', a: 'Check chain wear, shift to the smallest cog and chainring, scrub with a chain scrubber or stiff brush while turning the cranks backwards for at least thirty revolutions, rinse with soapy water, dry the chain, then lube each rivet and wipe off the excess.' },
    { q: 'Can I use degreaser on the whole bike?', a: 'No. Use drivetrain degreaser only on the chain, cassette and chainrings. Keep it off brake rotors, pads, bearings and paint, and use soapy water for the frame and wheels.' },
    { q: 'How often should I degrease my chain?', a: 'After wet, muddy or dusty rides, when the chain is noisy or black and before long trips. Many riders do a full clean monthly and wipe and lube more often.' },
    { q: 'Can I use degreaser on an e-bike chain?', a: 'Usually yes on a standard chain, but check the manual and ask the maker, because some e-bikes use sealed chains or belts. Never spray the motor, battery connections or display.' },
    { q: 'Do you stock Muc-Off?', a: 'No. We stock the Krush Ultra Drivetrain Degreaser at $23.95, Krush Rotor Revive at $32.95 and Rock N Roll chain lubes at $18.95.' },
  ],
  keywords: { primary: 'bike chain degreaser', supporting: ['bicycle chain degreaser', 'bicycle degreaser', 'bike specific degreaser', 'degreaser bike', 'bike cleaning products'] },
  words: 0,
}
