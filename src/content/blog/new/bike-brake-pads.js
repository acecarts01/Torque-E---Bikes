// Blog post written to the blog-post rule (see ~/.claude/skills/blog-post/SKILL.md).
// Keywords: volume / KD / intent from Semrush AU Keyword Magic (host 5, 7 Nov 2026), recorded in docs/used-keywords.csv and docs/semrush-raw/blog-topics-2026-11-06g.txt.
// Sources opened 7 Nov 2026: Park Tool "Disc Brake Pad Removal & Installation" (materials metallic, organic, semi-metallic; pad material at least 1 mm; contamination; rotor and pad compatibility); SRAM "Brake Pad Overview" (sintered excel in wet and mud, louder, more bedding-in; organic less noise, more consistent initial bite, not best in wet or mud, wear faster than sintered especially when wet); Queensland Government bicycle rules page (at least 1 working brake every ride).
// Product pages publish names and prices only, so no pad size, caliper fit or compound is claimed beyond what the product name says. Cables and fluid are not stocked, so the post says so and does not target them.
export const meta = {
  id: 'bike-brake-pads',
  slug: 'bike-brake-pads',
  url: '/blog/bike-brake-pads/',
  title: 'Brake Blocks for Cycles: Disc Brake Pads From $22.95',
  seoTitle: 'Brake Blocks for Cycles: Disc Brake Pads From $22.95',
  excerpt: 'Choosing brake blocks for cycles? Compare organic, semi-metallic and sintered disc pads, see our pads from $22.95 and learn when to replace them.',
  category: 'Buying Guides',
  date: '2026-11-07',
  readTime: '9 min',
  focus: 'brake blocks for cycles',
  secondary: ['tektro brake pads', 'bike brake lever', 'sintered brake pads', 'brake pad price', 'childrens bike brakes'],
  tags: ['tektro brakes', 'bike brakes', 'disc brake pads', 'bike brake', 'bike disc brakes', 'cycle brake rotor', 'cycle with disc brakes', 'brake pads for bike', 'disc brake pad', 'bike brake disc'],
  image: {
    file: 'blog/bike-brake-pads.webp',
    alt: 'Brake blocks for cycles: SRAM Avid organic, Jagwire semi-metallic and Nutt disc brake pads',
    query: 'brake blocks for cycles',
    credit: null,
  },
  related: [
    { href: '/shop/brakes/brake-pads-sram-avid-zoom-sport-organic/', name: 'Brake Pads SRAM Avid Zoom Sport Organic', price: 22.95, note: 'The lowest-priced pads we list.' },
    { href: '/shop/brakes/jagwire-mountain-sport-semi-metallic-disc-brake-pads-shimano-rst-tektro-trp/', name: 'Jagwire Mountain Sport Semi-Metallic Disc Brake Pads', price: 23.95, note: 'Named for Shimano, RST, Tektro and TRP.' },
    { href: '/shop/brakes/nutt-hydraulic-brake-pads-with-cooling-fins/', name: 'Nutt Hydraulic Brake Pads with Cooling Fins', price: 27.95, note: 'Pads with cooling fins.' },
    { href: '/shop/brakes/79-bike-falcon-pro-brake-pads/', name: '79Bike Falcon Pro Brake Pads', price: 32.95, note: 'Pads for the 79Bike Falcon Pro.' },
    { href: '/shop/brakes/79bike-front-and-rear-brake-disc/', name: '79Bike Front and Rear Brake Disc', price: 43.95, note: 'A rotor for off-road 79Bike models.' },
    { href: '/shop/brakes/', name: 'All brakes', note: 'Pads, levers, rotors and brake sets.' },
  ],
  links: {
    to: [
      ['/shop/brakes/', 'bike brakes and brake parts'],
      ['/blog/e-bike-and-dirt-bike-brakes/', 'e-bike and dirt bike brakes guide'],
      ['/blog/bike-tool-kit/', 'bike tool kit guide'],
      ['/blog/ebike-parts/', 'e-bike parts guide'],
      ['/blog/kids-bike-sizes/', 'kids bike sizes guide'],
    ],
    from: [
      ['/shop/brakes/', 'brake blocks for cycles guide'],
      ['/shop/brakes/jagwire-mountain-sport-semi-metallic-disc-brake-pads-shimano-rst-tektro-trp/', 'tektro brake pads: what to check'],
      ['/blog/e-bike-and-dirt-bike-brakes/', 'bike brake pad price and types'],
    ],
  },
  kind: 'post',
}

export const body = {
  hook: 'We list disc brake pads from $22.95 in organic, semi-metallic and branded sets. Here is how the pad types differ, how to tell when pads are worn and what to check before you order.',
  intro: [
    'Brake blocks for cycles used to mean rubber blocks that squeezed the rim, but most e-bikes and mountain bikes now use disc brakes, and the part that wears out is the brake pad. A worn pad is the quickest way to lose stopping power, and an e-bike is heavier and faster than an ordinary bike, so the pads work harder.',
    'This guide explains the pad materials, how to match pads to your calipers, what we stock with prices, how to tell when a pad is worn, how to fit and bed in a new pair and what Queensland requires. Our product pages publish names and prices only, so we do not quote pad sizes or caliper lists and ask you to confirm fit before you order. Prices are in Australian dollars as listed on 7 November 2026.',
  ],
  sections: [
    {
      h: 'Brake blocks for cycles: what the pads do',
      p: [
        'A disc brake squeezes a pad on each side of a metal rotor attached to the wheel. Friction between pad and rotor slows the wheel, and the pad material wears away as it does so. When the pad material is gone, the metal backing plate meets the rotor, which scores the rotor and can leave you with almost no braking.',
        'Most pad sets come as a pair with a spring or retaining pin, one set for each caliper. Pad shapes differ between brake makers and models, so a pad must match the caliper as well as the rotor. That is why the first step in any pad purchase is to identify your brake.',
      ],
    },
    {
      h: 'Organic, semi-metallic and sintered pads compared',
      p: [
        'Park Tool\'s [disc brake pad guide](https://www.parktool.com/en-int/blog/repair-help/disc-brake-pad-removal-installation) says pads come in different materials: metallic, organic and semi-metallic, each with its own trade-offs. SRAM\'s [brake pad overview](https://www.sram.com/en/learn/brake-welcome-guide/brake-pads) says organic pads produce less noise and can give a more consistent initial bite without needing to warm up, but they are not the best choice for wet or muddy conditions and tend to wear faster than sintered pads, especially when wet.',
        'SRAM says sintered pads excel in all conditions, especially wet and muddy ones, and suit heavy or extreme duty, and that once warmed up they deliver consistent performance. The trade-off is that they tend to be louder and need a more thorough bedding-in process. Terminology varies by maker, so check what the pad box says. As a rule, organic suits dry, quiet commuting and sintered suits wet, steep or heavy riding.',
      ],
      table: {
        head: ['Pad type', 'Strengths', 'Trade-offs'],
        rows: [
          ['Organic', 'Quieter, consistent initial bite', 'Wear faster, weaker in wet and mud'],
          ['Semi-metallic', 'A middle ground between the two', 'Terms vary by maker'],
          ['Sintered (metallic)', 'Strong in wet and mud, suits heavy use', 'Louder, longer bedding-in'],
        ],
      },
    },
    {
      h: 'Disc brake pads in our range, with prices',
      img: { file: 'blog/bike-brake-pads-79-bike-falcon-pro-brake-pads.webp', alt: '79Bike Falcon Pro brake pads, bike disc brake pads for 79Bike models', w: 720, h: 540 },
      p: [
        'We list several pads, and our product pages publish the name and price only. The cheapest is the [Brake Pads SRAM Avid Zoom Sport Organic](/shop/brakes/brake-pads-sram-avid-zoom-sport-organic/) at $22.95, and the [Jagwire Mountain Sport Semi-Metallic Disc Brake Pads](/shop/brakes/jagwire-mountain-sport-semi-metallic-disc-brake-pads-shimano-rst-tektro-trp/) are $23.95 and are named for Shimano, RST, Tektro and TRP calipers. The [Nutt Hydraulic Brake Pads with Cooling Fins](/shop/brakes/nutt-hydraulic-brake-pads-with-cooling-fins/) are $27.95.',
        'For 79Bike models, the [79Bike Falcon Pro Brake Pads](/shop/brakes/79-bike-falcon-pro-brake-pads/) are $32.95 and the 79Bike Falcon GT Brake Pads are $34.95, and the [79Bike Front and Rear Brake Disc](/shop/brakes/79bike-front-and-rear-brake-disc/) is $43.95. The 79Bike items are sold for off-road models. Message us with your bike and brake model before you order, and we will confirm which pad suits it.',
      ],
      table: {
        head: ['Product', 'Price (AUD)', 'What the name tells you'],
        rows: [
          ['Brake Pads SRAM Avid Zoom Sport Organic', '$22.95', 'Organic compound, SRAM Avid Zoom'],
          ['Jagwire Mountain Sport Semi-Metallic Disc Brake Pads', '$23.95', 'Semi-metallic, Shimano, RST, Tektro, TRP'],
          ['Nutt Hydraulic Brake Pads with Cooling Fins', '$27.95', 'Hydraulic pads with cooling fins'],
          ['79Bike Falcon Pro Brake Pads', '$32.95', 'For 79Bike Falcon Pro'],
          ['79Bike Falcon GT Brake Pads', '$34.95', 'For 79Bike Falcon GT'],
          ['79Bike Front and Rear Brake Disc', '$43.95', 'Rotor for 79Bike models'],
        ],
      },
    },
    {
      h: 'How to choose tektro brake pads and other compatible sets',
      ul: [
        '**Identify the brake.** Find the brand and model on the caliper or lever, because pad shapes differ between makers.',
        '**Match the compound to your riding.** Organic for dry, quiet riding; sintered for wet, steep or heavy use.',
        '**Check the rotor.** Park Tool says some pad and rotor material combinations are incompatible, so check before mixing.',
        '**Count the pistons.** Two-piston and four-piston calipers take different pads.',
        '**Check the name.** A listing that names Shimano, RST, Tektro and TRP tells you which shapes it covers.',
        '**Weight and speed.** An e-bike is heavier than an ordinary bike, so consider a stronger compound.',
        '**Buy a pair for each caliper.** Replace front and rear pads at a similar time.',
        '**Ask us.** Send a photo of the caliper and we will confirm fit.',
      ],
    },
    {
      h: 'Brake pad price: what you pay and what to budget',
      p: [
        'In our range a pair of pads costs between $22.95 and $34.95. The price difference reflects the maker and the model more than the quality of stopping, so choose for fit and compound first. A pair of pads is a small cost compared with a rotor, a caliper or a crash.',
        'Pads are a wear item, so plan to replace them. An e-bike ridden hard in hills or wet weather puts more load on a set, and a set that is nearly used up is a good moment to check the rotor too. If a rotor is worn, scored or bent, the 79Bike Front and Rear Brake Disc at $43.95 is the rotor we list for those models. Our [brakes category](/shop/brakes/) lists the full range of pads, levers and brake sets.',
      ],
    },
    {
      h: 'How to tell when pads are worn',
      p: [
        'Park Tool says that generally the pad material should measure at least 1 mm thick, and it suggests stacking three business cards as a rough 1 mm gauge. It also recommends checking the pad maker\'s wear specifications and using a caliper for accuracy. Look into the caliper with a torch, and replace the pair if either pad is at or below that limit.',
        'Other signs are a squeal or grinding noise, a lever that pulls closer to the grip than it used to, a longer stopping distance and a pad that has worn unevenly. Metal-on-metal grinding means the pad is gone, so stop riding and replace it. Check both sides, because one pad can wear faster than the other.',
      ],
    },
    {
      h: 'Contamination, noise and bedding in new pads',
      p: [
        'Park Tool warns that brake fluid, oil or grease can ruin pads and are not always easy to see. Symptoms include squeal, extra lever effort and a darkness on the rotor and pads that smears when rubbed. The fix is to find the source, such as aerosol lubricant overspray or a hydraulic leak, because replacing pads without fixing the cause only repeats the problem. Keep chain lubricant away from the rotor when you clean the bike.',
        'New pads need bedding in, which SRAM says is more thorough for sintered pads. Follow the pad maker\'s instructions, which usually mean a series of controlled stops from moderate speed on a safe, flat road or path. Expect a little noise and reduced power until the pad surface has bedded to the rotor.',
      ],
    },
    {
      h: 'Replacing pads and checking the bike brake lever',
      img: { file: 'blog/bike-brake-pads-79bike-front-and-rear-brake-disc.webp', alt: '79Bike front and rear brake disc, a cycle brake rotor for off-road 79Bike models', w: 720, h: 540 },
      p: [
        'Remove the wheel, take out the retaining pin or bolt, slide out the old pads and spring, clean the caliper with a dry cloth, push the pistons back gently and fit the new pads and spring. Refit the wheel, pump the lever until it firms and check there is no rubbing. Our [bike tool kit guide](/blog/bike-tool-kit/) lists the hex keys and tools for the job.',
        'While the wheel is out, check the bike brake lever, the hose and the rotor. A lever that feels spongy, a hose with a crack or a rotor with a bend needs attention before you ride. We list the 79Bike Falcon Pro Brake Lever at $23.95 and other levers and brake sets in our [brakes category](/shop/brakes/). If you are not confident, ask a bike mechanic, because brakes are not a place for guesses.',
      ],
    },
    {
      h: 'Childrens bike brakes and smaller bikes',
      p: [
        'Childrens bike brakes are smaller and lighter than adult brakes, and many first bikes use simple rim or coaster brakes rather than discs. If a child\'s bike has disc brakes, the same pad rules apply, but the lever reach matters: a child must be able to pull the lever hard enough to stop. Check the lever reach is adjusted for small hands.',
        'Our [kids bike sizes guide](/blog/kids-bike-sizes/) explains which bike size fits each age, and the brake is as important as the frame. Check a child\'s bike before every ride, and replace pads or rotors that are worn. For off-road electric dirt bikes, our [e-bike and dirt bike brakes guide](/blog/e-bike-and-dirt-bike-brakes/) covers the heavier-duty parts.',
      ],
    },
    {
      h: 'Queensland rules: brakes on every ride',
      p: [
        'The Queensland Government\'s [bicycle rules page](https://www.qld.gov.au/transport/safety/rules/wheeled-devices/bicycle) says your bicycle must have at least one working brake every time you ride. That page applies to e-bikes as well as ordinary bikes, and a worn pad is a working-brake problem as much as a mechanical one.',
        'Check your pads as part of every pre-ride check, especially before long descents and wet rides. If a brake feels weak, noisy or inconsistent, do not ride until it is fixed. Our [e-bike parts guide](/blog/ebike-parts/) lists the other parts that wear on an electric bike.',
      ],
    },
    {
      h: 'Common mistakes when buying brake pads',
      ul: [
        '**Buying by price alone.** A pad that does not fit the caliper is useless.',
        '**Mixing compounds without checking the rotor.** Some combinations are incompatible.',
        '**Ignoring contamination.** Fix the source before fitting new pads.',
        '**Riding on worn pads.** Metal on metal ruins the rotor.',
        '**Skipping bedding in.** New pads need a few controlled stops.',
        '**Replacing only one side.** Check both pads and both brakes.',
      ],
    },
  ],
  faq: [
    { q: 'Which brake pads do you sell?', a: 'We list the Brake Pads SRAM Avid Zoom Sport Organic at $22.95, the Jagwire Mountain Sport Semi-Metallic Disc Brake Pads at $23.95, the Nutt Hydraulic Brake Pads with Cooling Fins at $27.95 and 79Bike pads at $32.95 and $34.95. Send us your brake model to confirm fit.' },
    { q: 'How thick should brake pads be?', a: 'Park Tool says the pad material should generally measure at least 1 mm thick, and suggests stacking three business cards as a rough 1 mm gauge. Check the pad maker\'s own wear specification and replace the pair if either pad is at the limit.' },
    { q: 'Are sintered pads better than organic pads?', a: 'It depends on how you ride. SRAM says sintered pads excel in wet and muddy conditions and suit heavy duty but are louder and need more bedding-in, while organic pads are quieter, give a consistent initial bite and wear faster, especially when wet.' },
    { q: 'Do I need a working brake by law?', a: 'Yes. The Queensland Government says your bicycle must have at least one working brake every time you ride. That includes e-bikes. A worn pad that cannot stop the bike is a safety problem, so replace it before riding.' },
    { q: 'Do you sell brake cables or brake fluid?', a: 'No, we list pads, levers, rotors and brake sets in our brakes category, but not cables or fluid. Message us if you are unsure what your brake needs, and a bike mechanic can advise on parts we do not stock.' },
  ],
  keywords: { primary: 'brake blocks for cycles', supporting: ['tektro brake pads', 'bike brake lever', 'sintered brake pads', 'brake pad price', 'childrens bike brakes'] },
  words: 0,
}
