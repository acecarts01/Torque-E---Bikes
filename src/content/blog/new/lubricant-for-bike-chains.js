// Blog post written to the blog-post rule (see ~/.claude/skills/blog-post/SKILL.md).
// Keywords: volume / KD / intent from Semrush AU Keyword Magic (27 Oct 2026), recorded in docs/used-keywords.csv.
export const meta = {
  id: 'lubricant-for-bike-chains',
  slug: 'lubricant-for-bike-chains',
  url: '/blog/lubricant-for-bike-chains/',
  title: 'Lubricant for Bike Chains: Wet vs Dry and What to Buy',
  seoTitle: 'Lubricant for Bike Chains: Wet vs Dry and What to Buy',
  excerpt: 'Choosing a lubricant for bike chains? Compare wet, dry and all-round lubes, how to apply them and e-bike chain care, with Rock N Roll options from $18.95.',
  category: 'Buying Guides',
  date: '2026-10-27',
  readTime: '9 min',
  focus: 'lubricant for bike chains',
  secondary: ['cycle chain grease', 'chain oil bicycle', 'chain lube cycling', 'chain lube bicycle', 'cycling lube'],
  tags: ['bicycle chain lubricants', 'chain oil for cycle', 'lube bicycle', 'lube for bicycle', 'bike chain grease', 'lube ebike chain', 'bike chain lube', 'cycle chain lube', 'lubricant for chain', 'lubricant bicycle'],
  image: {
    file: 'blog/lubricant-for-bike-chains.webp',
    alt: 'Rock N Roll Gold, Absolute Dry and Extreme Blue 117ml bottles, a lubricant for bike chains',
    query: 'rock n roll chain lube bottles',
    credit: null,
  },
  related: [
    { href: '/shop/care-tools-and-hydration/rock-n-roll-gold-chain-lube-117ml/', name: 'Rock N Roll Gold Chain Lube 117ml', price: 18.95, note: 'The all-rounder: made for both mountain and road chains.' },
    { href: '/shop/care-tools-and-hydration/rock-n-roll-absolute-dry-chain-lube-117ml/', name: 'Rock N Roll Absolute Dry Chain Lube 117ml', price: 18.95, note: 'Positioned by the maker for road bikes and dry rides.' },
    { href: '/shop/care-tools-and-hydration/rock-n-roll-extreme-blue-chain-lube-117ml/', name: 'Rock N Roll Extreme Blue Chain Lube 117ml', price: 18.95, note: 'Positioned by the maker for mountain bikes.' },
    { href: '/shop/care-tools-and-hydration/krush-ultra-drivetrain-degreaser/', name: 'Krush Ultra Drivetrain Degreaser', price: 23.95, note: 'Strip the old grime before you re-lube.' },
    { href: '/shop/care-tools-and-hydration/', name: 'All bike care, tools and hydration', note: 'Lubes, degreaser, tools and bottles in one place.' },
  ],
  links: {
    to: [
      ['/shop/care-tools-and-hydration/', 'bike care and tools'],
      ['/blog/e-bike-tyres-and-tubes/', 'e-bike tyres and tubes guide'],
    ],
    from: [
      ['/shop/care-tools-and-hydration/', 'lubricant for bike chains'],
      ['/shop/care-tools-and-hydration/rock-n-roll-gold-chain-lube-117ml/', 'how to choose a chain lube'],
      ['/shop/care-tools-and-hydration/krush-ultra-drivetrain-degreaser/', 'how to clean and lube a chain'],
    ],
  },
  kind: 'post',
}

export const body = {
  hook: 'The right lubricant for bike chains depends on where you ride: a thin dry lube for dusty, dry trails and roads, a thicker wet lube for rain and mud, or a Gold-style all-rounder if you want one bottle that does both.',
  intro: [
    'The best lubricant for bike chains is the one that matches your weather and your terrain, applied to a clean, dry chain and wiped back so only a thin film is left on the rollers. For most Australian riders that means choosing between a dry lube for dusty or fair-weather riding and a wet lube for rain, mud and creek crossings, with an all-rounder as the sensible one-bottle option.',
    'This guide compares the three lube types, explains how the Rock N Roll range we stock differs by use, walks through the cleaning and lubing steps the tool makers recommend, and covers what changes on an e-bike, where the chain carries more torque. Prices are the current Torque E-Bikes prices.',
  ],
  sections: [
    {
      h: 'Which lubricant for bike chains should you buy?',
      p: [
        'If you only read one section, read this one. Match the lube to the conditions you ride in most, not the worst day you can imagine. A chain that gets a quick wipe and a fresh drop every few rides will always outlast a chain that was drenched in the wrong product once.',
        'Our [chain lube](/shop/care-tools-and-hydration/rock-n-roll-gold-chain-lube-117ml/) range comes from Rock N Roll, and the maker sorts its three lubes by bike type: Extreme for mountain bikes, Absolute Dry for road bikes and Gold for both. You can read that positioning on the [Rock N Roll about page](https://www.rocklube.com/about-us), which also states that all three are formulated to clean and lube at the same time.',
      ],
      table: {
        head: ['Your riding', 'Lube type to look for', 'Our pick', 'Price'],
        rows: [
          ['Mixed riding, one bottle', 'All-rounder', '[Rock N Roll Gold](/shop/care-tools-and-hydration/rock-n-roll-gold-chain-lube-117ml/)', '$18.95'],
          ['Dry roads, dusty paths', 'Dry lube', '[Rock N Roll Absolute Dry](/shop/care-tools-and-hydration/rock-n-roll-absolute-dry-chain-lube-117ml/)', '$18.95'],
          ['Mountain trails, wet weather', 'Wet lube', '[Rock N Roll Extreme Blue](/shop/care-tools-and-hydration/rock-n-roll-extreme-blue-chain-lube-117ml/)', '$18.95'],
          ['Heavily fouled chain', 'Degreaser first', '[Krush Ultra Drivetrain Degreaser](/shop/care-tools-and-hydration/krush-ultra-drivetrain-degreaser/)', '$23.95'],
        ],
      },
    },
    {
      h: 'Wet, dry or all-round: how bicycle chain lubricants differ',
      p: [
        'Every lubricant for bike chains has the same job: keep a thin film between the pins, rollers and plates so metal does not grind on metal, and push water and grit out of the links. The differences are in how thick that film is and how well it survives weather.',
        '**Dry lubes** are thinner. They go on easily, stay cleaner in dust and sand, and suit roads, gravel paths and dry trails. The trade-off is that a thin film washes off faster, so they need reapplying more often if the weather turns.',
        '**Wet lubes** are thicker and cling to the chain through rain, puddles and mud. They protect better in wet conditions but attract more dirt, so the chain needs wiping and cleaning regularly or the grit builds into a paste that wears the chain and cassette.',
        '**All-round lubes** sit in the middle. They are the practical choice for riders who commute in the morning, ride a trail on the weekend and do not want to keep three bottles in the garage.',
        'You will also see grease and oil sold for chains. A cycle chain grease is far thicker than a drip lube, and it is better suited to bearings, threads and seat posts than to the inside of a roller. Plain chain oil for a bicycle is thinner than most dedicated lubes and tends to run off. For everyday riding, a purpose-made chain lube is the better tool.',
      ],
    },
    {
      h: 'Rock N Roll Gold, Absolute Dry and Extreme Blue compared',
      p: [
        'All three bottles are 117ml, which is plenty for many months of regular riding because you only need a small drop on each roller. Here is how the maker positions them.',
      ],
      table: {
        head: ['Product', 'Maker positioning', 'Best for', 'Price'],
        rows: [
          ['[Gold](/shop/care-tools-and-hydration/rock-n-roll-gold-chain-lube-117ml/)', 'Mountain and road bikes', 'Riders who want one bottle', '$18.95'],
          ['[Absolute Dry](/shop/care-tools-and-hydration/rock-n-roll-absolute-dry-chain-lube-117ml/)', 'Road bikes', 'Dry weather, clean roads', '$18.95'],
          ['[Extreme Blue](/shop/care-tools-and-hydration/rock-n-roll-extreme-blue-chain-lube-117ml/)', 'Mountain bikes', 'Trail riding, wet and muddy days', '$18.95'],
        ],
      },
      img: { file: 'blog/lubricant-for-bike-chains-rock-n-roll-gold.webp', alt: 'Rock N Roll Gold 117ml bottle, an all-round chain lube for bicycle drivetrains', w: 720, h: 540 },
      ul: [
        'Choose **Gold** if you ride both on and off the pavement, or you simply want the safest single choice.',
        'Choose **Absolute Dry** if your riding is mostly road and fair-weather commuting and you like a clean-running chain.',
        'Choose **Extreme Blue** if you ride trails, or you know your chain spends time in water and mud.',
      ],
    },
    {
      h: 'How to clean and lube a bike chain step by step',
      p: [
        'Park Tool, one of the best-known workshop tool makers, publishes a clear method in its [guide to cleaning and lubricating a chain](https://www.parktool.com/en-us/blog/repair-help/chain-cleaning-with-a-park-tool-chain-scrubber). The steps below follow the same order, because the order is what matters.',
      ],
      ul: [
        '**Check wear first.** If the chain is past its service life, replace it instead of cleaning it. Lubricating a worn chain only delays the cost.',
        '**Degrease.** Work a drivetrain degreaser such as the [Krush Ultra drivetrain degreaser](/shop/care-tools-and-hydration/krush-ultra-drivetrain-degreaser/) through the chain with a brush or chain cleaner, turning the cranks backwards, then rinse with soapy water.',
        '**Dry completely.** Run the chain through a clean rag and let it air-dry or blow it off. Lube applied to a wet chain cannot get into the rollers properly.',
        '**Apply a small drop to each roller.** Turn the cranks backwards slowly and work around the full length of the chain. Aim for the inner face of the chain, where it meets the cassette and chainring.',
        '**Wipe off the excess.** Wait a few minutes for the lube to work into the links, then wipe the outside with a clean, dry rag. Lube left on the outside of the plates only collects dirt.',
      ],
      img: { file: 'blog/lubricant-for-bike-chains-drivetrain-degreaser.webp', alt: 'Krush Ultra drivetrain degreaser bottle used to clean a bicycle chain before lubing', w: 720, h: 540 },
    },
    {
      h: 'E-bike chain care: what changes with a motor',
      p: [
        'An e-bike chain works harder than a standard bike chain because the motor adds torque on top of your own pedalling. Bosch eBike Systems says in its [care guide for e-bikes](https://www.bosch-ebike.com/en/news/care-of-ebikes) that how often you lubricate depends on how you use the bike rather than on whether it is electric, and that off-road riding and rough gear shifting put more stress on the chain.',
        'So the same method applies, with a few extra habits. Lube where the chain runs freely rather than directly on the sprockets, and wipe off the excess. Take care that no lube reaches the brake discs, because contaminated discs lose braking power. Bosch also advises against pressure washers or steam cleaners on e-bike components, because water can get into the motor, hub and bearings. Use bike shampoo, a brush and a sponge instead.',
        'If you ride hard, shift under load or carry cargo, check chain wear more often and replace the chain before it wears the cassette and chainring. A fresh chain is much cheaper than replacing the whole drivetrain. For more upkeep tips, see our guide to [e-bike tyres and tubes](/blog/e-bike-tyres-and-tubes/) and browse the [bike care and tools range](/shop/care-tools-and-hydration/).',
      ],
    },
    {
      h: 'How often to lube a chain and the signs it is time',
      p: [
        'There is no single mileage that suits every rider, and any number that ignores your conditions is a guess. Use the chain itself as the guide.',
        'A simple routine works for most people: wipe the chain with a rag after a dirty ride, add a small drop of lube to the rollers when it starts to look or sound dry, and do a full degrease and re-lube when the chain is visibly grimy. Doing a little often is easier on the chain, and on you, than doing a big clean twice a year.',
        'Before a long weekend ride or a trip, lubing the night before gives the lube time to settle into the links, which is especially helpful with a dry lube. If the bike has been parked for weeks, check the chain for rust spots before you ride, because a stiff or rusty link will not recover with lube alone.',
      ],
      ul: [
        'The chain squeaks, chirps or sounds dry under load.',
        'The chain looks dull and metallic with no sheen between the links.',
        'You have just ridden in rain, through a creek or along a dusty track.',
        'The chain feels gritty or looks black and gummy, which means it needs a degrease and a fresh application, not another coat on top.',
      ],
    },
    {
      h: 'Common chain lube mistakes to avoid',
      ul: [
        '**Using too much.** More is not better. Excess lube on the outside of the chain collects grit and speeds wear.',
        '**Lubing a dirty chain.** Adding a drop over old grime turns it into grinding paste. Degrease first.',
        '**Spraying near the brakes.** Keep lube away from rotors and pads. If a disc is contaminated, the bike should not be ridden until it has been properly cleaned.',
        '**Using the wrong product.** General-purpose sprays are not made to stay in chain rollers. A purpose-made cycling lube is designed for that job.',
        '**Skipping the dry time.** If you use a dry lube, give it time to settle before you ride.',
        '**Never checking wear.** A lubricated worn chain still wears your cassette and chainring.',
      ],
    },
    {
      h: 'What a chain care kit costs',
      p: [
        'You do not need a workshop. A basic kit is one bottle of lube, a degreaser, a brush and a clean rag. At current Torque E-Bikes prices, a Rock N Roll 117ml bottle is $18.95 and the Krush Ultra drivetrain degreaser is $23.95, so a complete starter kit costs $42.90 before shipping. Delivery is 10% of the goods total and is free for orders from $9,900, and we ship Australia-wide.',
        'Because you only use a drop per roller, one 117ml bottle lasts a long time for most riders. If you ride in mixed conditions, an all-round bottle plus the degreaser is the most economical set-up. If you want help matching a lube to your bike, message the team on WhatsApp and tell us what you ride and where.',
      ],
    },
  ],
  faq: [
    {
      q: 'What is the best lubricant for bike chains?',
      a: 'The best lubricant for bike chains is the one that suits your conditions: a dry lube for dust and fair weather, a wet lube for rain and mud, or an all-round lube like Rock N Roll Gold if you want one bottle. Whatever you choose, apply it to a clean, dry chain and wipe off the excess.',
    },
    {
      q: 'Can I use WD-40 or cooking oil on my chain?',
      a: 'It is better not to. General-purpose sprays are designed to displace water and clean, not to stay in the chain rollers, and cooking oil gums up and attracts dirt. A purpose-made cycling lube is formulated to stay on the chain and keep working, so it is the safer choice for your drivetrain.',
    },
    {
      q: 'Do e-bike chains need a different lube?',
      a: 'The type of lube is the same, but the care matters more. An e-bike chain carries extra torque, so keep it clean, lube where it runs freely, keep lube off the brake discs and replace the chain before it wears the cassette. Bosch says frequency depends on use, not on the bike being electric.',
    },
    {
      q: 'How much chain lube should I put on?',
      a: 'Use a small drop on each roller while turning the cranks backwards slowly, then wipe the outside of the chain with a clean, dry rag. Park Tool recommends a small drop per rivet. If the chain looks wet or shiny on the outside after wiping, you have used too much.',
    },
    {
      q: 'Is chain grease better than chain lube?',
      a: 'Not for the chain. Cycle chain grease is thick and is better suited to bearings, threads and seat posts. It does not flow into the rollers the way a drip lube does. For the chain itself, use a lube made for bicycle chains and keep grease for the parts that need it.',
    },
  ],
  keywords: { primary: 'lubricant for bike chains', supporting: ['cycle chain grease', 'chain oil bicycle', 'chain lube cycling', 'chain lube bicycle', 'cycling lube'] },
  words: 0,
}
