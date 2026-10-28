// Blog post written to the blog-post rule (see ~/.claude/skills/blog-post/SKILL.md).
// Keywords: volume / KD / intent from the competitor keyword gap list (docs/keyword-gap.csv, Semrush competitor positions, 27 Oct 2026), recorded in docs/used-keywords.csv. People search the brand as Amps, Amp, Amped and Ampd Bros.
// Competitor analysis (docs/competitor-notes.md): the maker's own pages and a directory page are promotional, show different prices and model names and give no legal explanation or cross-brand comparison; this post lists models with our current prices and categories and makes no unsourced rating or range claims.
// Sources opened 27 Oct 2026: Queensland Government electric bicycle rules page and the Transport for NSW e-bike page (opened in a browser).
// Product pages publish no motor, battery or range figures, so the post claims only names, brand and prices.
export const meta = {
  id: 'amps-ebikes',
  slug: 'amps-ebikes',
  url: '/blog/amps-ebikes/',
  title: 'Amps Ebikes: Ampd Bros ACE, Riptide, Stubbie and Chubbie Compared',
  seoTitle: 'Amps Ebikes: Ampd Bros ACE, Riptide and Stubbie',
  excerpt: 'Looking at Amps ebikes? Compare Ampd Bros ACE, Riptide, Stubbie, Chubbie and Taipan electric bikes from $2,059 with our current prices, fit and legal checks.',
  category: 'Buying Guides',
  date: '2026-10-28',
  readTime: '10 min',
  focus: 'amps ebikes',
  secondary: ['amp ebikes', 'amp e bikes', 'ace e-bike', 'amps electric bike', 'ace ebike'],
  tags: ['amped ebike', 'amped electric bike', 'amped bikes', 'ace electric bikes', 'amp electric bike', 'amp ebike', 'ace bike', 'amp brothers electric cycles', 'ace ebikes', 'ace e bikes'],
  image: {
    file: 'blog/amps-ebikes.webp',
    alt: 'Ampd Bros Riptide 3, Stubbie-S and ACE Pro, Amps ebikes from our range',
    query: 'amps ebikes',
    credit: null,
  },
  related: [
    { href: '/shop/fat-tyre-and-scrambler-e-bikes/riptide-3-electric-bike/', name: 'Riptide 3 Electric Bike', price: 2059, note: 'The lowest-priced Ampd Bros e-bike in this guide.' },
    { href: '/shop/fat-tyre-and-scrambler-e-bikes/stubbie-s-s3-electric-bike/', name: 'Stubbie-S S3 Electric Bike', price: 2459, note: 'A compact fat-tyre Ampd Bros.' },
    { href: '/shop/fat-tyre-and-scrambler-e-bikes/ampd-bros-chubbie-s-2-electric-bike/', name: 'Ampd Bros Chubbie-s 2 Electric Bike', price: 2649, note: 'A Chubbie-s 2.' },
    { href: '/shop/fat-tyre-and-scrambler-e-bikes/ace-pro-electric-bike/', name: 'ACE Pro Electric Bike', price: 2879, note: 'An ACE Pro.' },
    { href: '/shop/fat-tyre-and-scrambler-e-bikes/ampd-bros-taipan-electric-bike/', name: 'Ampd Bros Taipan Electric Bike', price: 3599, note: 'A Taipan.' },
    { href: '/shop/fat-tyre-and-scrambler-e-bikes/', name: 'All fat tyre and scrambler e-bikes', note: 'Fat-tyre and scrambler e-bikes.' },
  ],
  links: {
    to: [
      ['/shop/fat-tyre-and-scrambler-e-bikes/', 'fat tyre and scrambler e-bikes'],
      ['/blog/fat-tyre-e-bikes/', 'fat tyre e-bikes guide'],
      ['/blog/e-cruiser/', 'e cruiser guide'],
      ['/blog/e-bike-brands-in-australia/', 'e-bike brands in Australia guide'],
    ],
    from: [
      ['/shop/fat-tyre-and-scrambler-e-bikes/', 'amps ebikes buying guide'],
      ['/shop/fat-tyre-and-scrambler-e-bikes/ace-pro-electric-bike/', 'ace e-bike: what to check'],
      ['/shop/fat-tyre-and-scrambler-e-bikes/riptide-3-electric-bike/', 'amp electric bike: how to choose'],
    ],
  },
  kind: 'post',
}

export const body = {
  hook: 'Amps ebikes, more properly Ampd Bros, are wide-tyre electric bikes with names like ACE, Riptide, Stubbie and Chubbie. Choose by size and style, then check the motor rating and the legal label before you ride on a road.',
  intro: [
    'People search for Amps ebikes, Amp e bikes and Amped electric bikes, and they usually mean Ampd Bros, a brand of wide-tyre electric bikes with model names such as ACE, Riptide, Stubbie, Chubbie and Taipan. This guide explains how the families differ, compares the Ampd Bros e-bikes in our range from $2,059 with our current prices, and covers fit, accessories, legal limits and care.',
    'We cover seven models, how to choose between them and what to ask us before you order. Prices are current Torque E-Bikes prices. Product pages publish the model name and price but not motor, battery or range, and the maker\'s own pages and other sites show different prices and names, so ask us for the specification of the exact model.',
  ],
  sections: [
    {
      h: 'Amps ebikes in our range and their prices',
      p: [
        'Our range includes Ampd Bros e-bikes, mostly in the [fat tyre and scrambler e-bikes](/shop/fat-tyre-and-scrambler-e-bikes/) category. Ask us about sizes, colours and stock.',
      ],
      table: {
        head: ['Ampd Bros e-bike', 'Category', 'Price', 'Family'],
        rows: [
          ['[Riptide 3 Electric Bike](/shop/fat-tyre-and-scrambler-e-bikes/riptide-3-electric-bike/)', 'Fat tyre and scrambler', '$2,059', 'Riptide'],
          ['[Stubbie-S S3 Electric Bike](/shop/fat-tyre-and-scrambler-e-bikes/stubbie-s-s3-electric-bike/)', 'Fat tyre and scrambler', '$2,459', 'Stubbie'],
          ['[Ampd Bros Chubbie-s 2 Electric Bike](/shop/fat-tyre-and-scrambler-e-bikes/ampd-bros-chubbie-s-2-electric-bike/)', 'Fat tyre and scrambler', '$2,649', 'Chubbie'],
          ['[ACE Pro Electric Bike](/shop/fat-tyre-and-scrambler-e-bikes/ace-pro-electric-bike/)', 'Fat tyre and scrambler', '$2,879', 'ACE'],
          ['[Ampd Bros ACE Adventure Series 5](/shop/fat-tyre-and-scrambler-e-bikes/ampd-bros-ace-adventure-electric-bike-series-5/)', 'Fat tyre and scrambler', '$3,029', 'ACE'],
          ['[Ampd Bros Taipan Electric Bike](/shop/fat-tyre-and-scrambler-e-bikes/ampd-bros-taipan-electric-bike/)', 'Fat tyre and scrambler', '$3,599', 'Taipan'],
          ['[ACE-X Demon S5 Dual Electric Bike](/shop/fat-tyre-and-scrambler-e-bikes/ace-x-demon-s5-dual-electric-bike/)', 'Fat tyre and scrambler', '$4,649', 'ACE-X'],
        ],
      },
    },
    {
      h: 'What is an Amps ebike? Ampd Bros, Amp Brothers and Amped explained',
      p: [
        'The brand is written Ampd Bros, and riders search for it in many ways: amps ebikes, amp ebikes, amped electric bike, amp brothers electric cycles and amps bros. They all point to the same family of bikes. If you see a listing for an Amped bike, check that it is the Ampd Bros model you mean.',
        'The bikes are wide-tyre electric bikes. Several are listed with our fat tyre e-bikes, which tells you they use wide tyres for grip and comfort on sand, gravel and rough paths. Our [fat tyre e-bikes guide](/blog/fat-tyre-e-bikes/) explains what wide tyres bring and cost.',
        'The maker\'s own pages, and other sites, list prices and model names that differ from one page to another, and some may be out of date. Use our prices and ask us to confirm the current specification.',
      ],
    },
    {
      h: 'The ACE family: ACE Pro, ACE Adventure and ACE-X Demon',
      ul: [
        '**ACE Pro at $2,879.** An ACE with Pro-level fittings. Ask us what the Pro adds.',
        '**ACE Adventure Series 5 at $3,029.** An adventure-style ACE from the fifth series; ask what changed in Series 5.',
        '**ACE-X Demon S5 Dual at $4,649.** The top of the ACE range here. Ask us what Dual means for this model, since the product page does not say.',
        '**ACE Mini bikes.** Smaller ACE models sit in our kids and youth range. See our [mini ebike guide](/blog/mini-ebike/).',
        '**Choosing.** Decide your budget and your size first, then compare battery, motor and fittings.',
        '**Rider and load limits.** Ask for the maker\'s figures, especially if you plan to carry a passenger.',
      ],
      img: { file: 'blog/amps-ebikes-ace-pro.webp', alt: 'ACE Pro electric bike from Ampd Bros, an ace e-bike', w: 720, h: 540 },
    },
    {
      h: 'Riptide, Stubbie, Chubbie and Taipan: the cruisers and compacts',
      p: [
        'The **Riptide 3 at $2,059** is the lowest-priced Ampd Bros e-bike in this guide and sits in the cruiser style. The **Stubbie-S S3 at $2,459** and the **Chubbie-s 2 at $2,649** are compact, wide-tyre bikes; their names suggest a short, chunky frame, which suits shorter riders and tight spaces. The **Taipan at $3,599** is a larger model.',
        'These suit relaxed riding: beach paths, town and weekend trips. See our [e cruiser guide](/blog/e-cruiser/) for the cruiser style. For all of them, ask us about frame size and step-through or step-over options.',
      ],
    },
    {
      h: 'Accessories and upgrades for Ampd Bros bikes',
      ul: [
        '**Throttle kits.** Our Ampd Bros thumb throttle kit is $85 and the twist throttle kit is $99; see our [e bike throttle guide](/blog/e-bike-throttle/) for the rules on throttles.',
        '**Rear cargo rack.** The Ampd Bros ACE rear cargo rack is $99.',
        '**Footpegs.** The ACE rear alloy folding footpeg set is $61.95; check that the bike was made to carry a passenger.',
        '**Trailers.** The Beach Deluxe trailer at $469 and Cargo Deluxe at $659. See our [bicycle trailers guide](/blog/bicycle-trailers/).',
        '**Safety gear.** A helmet, lights and a lock. See our [ebike accessories guide](/blog/ebike-accessories/).',
      ],
    },
    {
      h: 'Power limits and road rules for an Ampd Bros e-bike',
      p: [
        'The Queensland Government\'s [electric bicycle rules page](https://www.qld.gov.au/transport/safety/rules/wheeled-devices/electric-bicycle-rules) says a legal e-bike has a motor with a maximum continuous rated power output of 250 watts, is pedal powered with motor assistance up to 25 km/h and may use a throttle only up to 6 km/h. It must meet EN 15194 and display a compliance label, and it says after-market conversion kits are not compliant with the standard. Passengers can only be carried if the bike was made to carry them.',
        'Transport for NSW\'s [e-bike page](https://www.transport.nsw.gov.au/roadsafety/bicycle-riders/ebikes) allows 500 watts at present and requires 250 watts with an EN 15194 label from 1 March 2029. Ask us to confirm the motor rating, throttle behaviour and compliance label of any Ampd Bros bike before you order. Rules differ by state.',
      ],
    },
    {
      h: 'Amps ebikes checklist before you buy',
      ul: [
        '**Choose the family.** ACE, Riptide, Stubbie, Chubbie or Taipan.',
        '**Check the size.** Send us your height and inseam.',
        '**Ask for specifications.** Motor, battery watt-hours, brakes and weight, since product pages do not list them.',
        '**Confirm the legal label.** Look for EN 15194 labelling for road use.',
        '**Ask about the throttle.** Queensland limits throttle assistance on a legal e-bike to 6 km/h.',
        '**Ask about service and parts.** Who services the bike, and are spares available.',
        '**Budget for safety gear and a lock.**',
      ],
    },
    {
      h: 'Amps ebike mistakes to avoid',
      ul: [
        '**Trusting an old price.** Prices and names differ between sites.',
        '**Assuming every model carries a passenger.** Check the maker\'s limits.',
        '**Skipping the legal check.** Confirm the motor rating and label.',
        '**Fitting a throttle or a motor upgrade on a road bike.** It can make the bike non-compliant.',
        '**Ignoring weight.** Wide-tyre bikes are heavy.',
        '**Forgetting a lock.** Lock it every time.',
      ],
    },
    {
      h: "Choosing the size and position on a wide-tyre bike",
      ul: [
        "Check the standover height, since wide tyres and a battery can make the frame taller than it looks.",
        "Check the reach to the handlebar and the saddle height, and adjust the seat and bars to suit.",
        "Compact models such as the Stubbie and Chubbie suit shorter riders; ask us for the frame measurements.",
        "Check the weight, since wide-tyre e-bikes are heavy to lift.",
        "Check the maker's rider and load limits.",
        "Send us your height and inseam and the model you are considering.",
      ],
    },
    {
      h: "Riding a wide-tyre e-bike on sand, gravel and paths",
      p: [
        "Wide tyres give grip and comfort, but they also add weight and rolling resistance. On soft sand, lower the tyre pressure a little within the maker's range and ride smoothly. On gravel, keep your weight back and avoid sudden braking.",
        "On shared paths, keep your speed in check, ring a bell or call out before you overtake and give walkers room. A heavy bike takes longer to stop. After coastal rides, rinse the bike and dry the connectors, since salt air speeds up corrosion.",
      ],
    },
    {
      h: "Looking after an Ampd Bros e-bike",
      ul: [
        "Charge the battery on a hard surface and not overnight; see our [lithium battery guide](/blog/electric-moto-maintenance-lithium-safety/).",
        "Clean and lubricate the chain; see our [lubricant for bike chains guide](/blog/lubricant-for-bike-chains/).",
        "Check tyre pressure often, since wide tyres hide slow leaks.",
        "Check brake pads and rotors regularly.",
        "Tighten bolts after the first few rides and check them monthly.",
        "Lock the bike properly; see our [bike chain padlock guide](/blog/bike-chain-padlock/).",
      ],
    },
    {
      h: "Passengers, racks and loads",
      p: [
        "Some Ampd Bros bikes are sold with a rack or footpeg set, and we list a rear cargo rack at $99 and a folding footpeg set at $61.95. Check the maker's load and passenger limits before you carry anything, and remember the Queensland rule: passengers can only be carried if the bike was made to carry them.",
        "Spread the weight low and balanced, keep lights and reflectors visible and check the rack's rated load. Our [bike panniers guide](/blog/bike-panniers/) and [bicycle basket guide](/blog/bicycle-basket/) cover carrying things on a bike.",
      ],
    },
    {
      h: "Comparing Ampd Bros with other wide-tyre e-bikes",
      p: [
        "Compare on motor and battery, frame quality, brakes, warranty and service, and price, as with any brand. Wide-tyre e-bikes from other makers in our range include the Cruzr family and the Aventon Aventure; see our [e cruiser guide](/blog/e-cruiser/) and [Aventon e bike guide](/blog/aventon-e-bike/).",
        "Two bikes with a similar price can differ in battery size, motor and fittings, so ask us for the specifications side by side and choose by what you will use.",
      ],
    },
    {
      h: "Your first week with a new wide-tyre e-bike",
      p: [
        "When the bike arrives, check it over before the first ride: tyres, brakes, bolts, lights and battery charge. Charge the battery on a hard surface and read the manual. Adjust the seat and bars, and take a short ride in a quiet place on the lowest assist level.",
        "Over the first week, tighten the bolts again, check the tyre pressure and note how far a charge takes you. If anything looks wrong, photograph it and contact us at once.",
      ],
    },
    {
      h: 'Which Amps ebike should you buy?',
      p: [
        'For the lowest price, the [Riptide 3 at $2,059](/shop/fat-tyre-and-scrambler-e-bikes/riptide-3-electric-bike/) is the entry. The [Stubbie-S S3 at $2,459](/shop/fat-tyre-and-scrambler-e-bikes/stubbie-s-s3-electric-bike/) and the [Chubbie-s 2 at $2,649](/shop/fat-tyre-and-scrambler-e-bikes/ampd-bros-chubbie-s-2-electric-bike/) are the compacts, and the [ACE Pro at $2,879](/shop/fat-tyre-and-scrambler-e-bikes/ace-pro-electric-bike/) is the ACE entry. At the top, look at the [ACE-X Demon S5 Dual at $4,649](/shop/fat-tyre-and-scrambler-e-bikes/ace-x-demon-s5-dual-electric-bike/).',
        'Send us your height, your riding and your budget and we will confirm the specification and fit. You can also browse the full [fat tyre and scrambler e-bikes range](/shop/fat-tyre-and-scrambler-e-bikes/).',
      ],
    },
  ],
  faq: [
    { q: 'What are Amps ebikes?', a: 'Amps ebikes, also written Amp or Amped, usually means Ampd Bros, a brand of wide-tyre electric bikes with ACE, Riptide, Stubbie, Chubbie and Taipan models.' },
    { q: 'Which Ampd Bros e-bike is cheapest?', a: 'In our range the Riptide 3 at $2,059 is the lowest-priced in this guide. Prices change, so check the product pages.' },
    { q: 'Are Ampd Bros e-bikes road legal in Australia?', a: 'Check each model. Queensland requires a 250W motor, assistance up to 25 km/h, a throttle only up to 6 km/h and an EN 15194 label. Ask us to confirm the motor rating and label before you order.' },
    { q: 'Can I carry a passenger on an ACE?', a: 'Only if the bike was made to carry one. Queensland says passengers can only be carried if the bike was made to carry them. Check the maker\'s limits and ask us.' },
    { q: 'Do you ship Ampd Bros e-bikes across Australia?', a: 'Yes. We ship Australia-wide with dangerous-goods certified shipping because of the lithium battery. Ask us for timing to your postcode and the sizes in stock.' },
    { q: 'Why do prices differ between sites?', a: 'Models are updated, bundles differ and some pages are out of date. Use our current price and ask us to confirm the exact model and specification.' },
  ],
  keywords: { primary: 'amps ebikes', supporting: ['amp ebikes', 'amp e bikes', 'ace e-bike', 'amps electric bike', 'ace ebike'] },
  words: 0,
}
