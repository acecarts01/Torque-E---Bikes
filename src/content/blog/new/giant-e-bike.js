// Blog post written to the blog-post rule (see ~/.claude/skills/blog-post/SKILL.md).
// Keywords: volume / KD / intent from Semrush AU Keyword Magic (6 Nov 2026), recorded in docs/used-keywords.csv and docs/blog-plan-batches-2026-11-06.html.
// Sources opened 6 Nov 2026: Giant Fathom E+ page (electric hardtail, 130 mm, 29-inch wheels); Giant Trance X E+ page (140 mm rear, 150 mm front); Giant Reign E+ page (160 mm rear, SyncDrive Pro 85 Nm; an older page, so model year must be checked); Giant Australia Revolt E+ page (roads, gravel or dirt); Queensland Government electric bicycle rules (updated 2 Nov 2026).
// Giant specifications vary by model year and region, so only family-level figures are quoted and buyers are told to confirm the exact bike with us.
export const meta = {
  id: 'giant-e-bike',
  slug: 'giant-e-bike',
  url: '/blog/giant-e-bike/',
  title: 'Mountain Giant Bikes: Giant Electric Bikes From $5,499',
  seoTitle: 'Mountain Giant Bikes: Giant Electric Bikes From $5,499',
  excerpt: 'Comparing mountain Giant bikes? See five Giant electric bikes from $5,499 to $11,999: Fathom hardtail, Trance X, Reign and Revolt, with travel figures from Giant.',
  category: 'Buying Guides',
  date: '2026-11-06',
  readTime: '10 min',
  focus: 'mountain giant bikes',
  secondary: ['giant mountain bicycles', 'giant reign', 'giant electric bicycles', 'giant electric bike', 'giant dual suspension'],
  tags: ['mountain bike giant bicycles', 'giant trance', 'giant e bike', 'giant gravel bike', 'giant ebike', 'giant bikes mountain bikes', 'giant mtb', 'giant revolt 1', 'giant bicycle size', 'giant bike sizing'],
  image: {
    file: 'blog/giant-e-bike.webp',
    alt: 'Mountain Giant bikes: Giant Fathom E+ 1 Pro, Trance X E+ 1 Pro and Reign E+ Pro electric bikes',
    query: 'mountain giant bikes',
    credit: null,
  },
  related: [
    { href: '/shop/electric-mountain-bikes/giant-fathom-e-1-pro/', name: 'Giant Fathom E+ 1 Pro', price: 5499, note: 'The hardtail trail e-MTB.' },
    { href: '/shop/electric-mountain-bikes/giant-trance-x-e-1-pro/', name: 'Giant Trance X E+ 1 Pro', price: 8999, note: 'A 140 mm rear, 150 mm front trail bike.' },
    { href: '/shop/electric-mountain-bikes/giant-reign-e-pro/', name: 'Giant Reign E+ Pro', price: 9999, note: 'The long-travel enduro e-MTB.' },
    { href: '/shop/road-and-gravel-e-bikes/giant-revolt-e-pro/', name: 'Giant Revolt E+ Pro', price: 6999, note: 'The electric gravel bike.' },
    { href: '/brands/giant/', name: 'All Giant e-bikes', note: 'Giant range on one page.' },
  ],
  links: {
    to: [
      ['/shop/electric-mountain-bikes/', 'electric mountain bikes'],
      ['/blog/enduro-electric-mountain-bike/', 'enduro bikes guide'],
      ['/blog/hardtail-electric-mountain-bike/', 'hardtail mtb bikes guide'],
      ['/blog/gravel-bikes-for-sale/', 'bikes for gravel guide'],
    ],
    from: [
      ['/shop/electric-mountain-bikes/', 'Giant electric bikes'],
      ['/shop/electric-mountain-bikes/giant-trance-x-e-1-pro/', 'Giant Trance e bike: how it compares'],
      ['/shop/electric-mountain-bikes/giant-reign-e-pro/', 'Giant Reign: what to check'],
    ],
  },
  kind: 'post',
}

export const body = {
  hook: 'Our Giant electric bikes are five models from $5,499 to $11,999: the Fathom hardtail, the Trance X trail bike, the Reign enduro bike and the Revolt gravel bike. Choose by terrain, then confirm the exact specification with us.',
  intro: [
    'Mountain Giant bikes are among the most common e-MTBs on Australian trails, and for good reason: Giant builds its own frames, motors and batteries, and it offers a clear ladder from a trail hardtail to a long-travel enduro bike. If you are comparing Giant electric bikes, the main question is which of its families matches your riding.',
    'This guide covers the five Giant electric bikes in our range, shows the travel and motor figures that Giant publishes for each family, explains how to choose between them, and sets out the Queensland e-bike rules and the safety basics. Giant changes specifications by model year and region, so we quote family-level figures and confirm the exact bike with you before you pay. Prices are in Australian dollars as listed on 6 November 2026.',
  ],
  sections: [
    {
      h: 'Mountain Giant bikes in our range: prices and families',
      p: [
        'We list five Giant electric bikes. The [Giant Fathom E+ 1 Pro](/shop/electric-mountain-bikes/giant-fathom-e-1-pro/) is $5,499, the [Giant Revolt E+ Pro](/shop/road-and-gravel-e-bikes/giant-revolt-e-pro/) is $6,999, the [Giant Trance X E+ 1 Pro](/shop/electric-mountain-bikes/giant-trance-x-e-1-pro/) is $8,999, the [Giant Reign E+ Pro](/shop/electric-mountain-bikes/giant-reign-e-pro/) is $9,999 and the Giant Trance X E+ Elite is $11,999. They cover four jobs: trail hardtail, gravel, trail dual suspension and enduro.',
        'The table shows how the families differ. Travel and motor figures are Giant\'s published family figures, and our product pages publish the name and price only, so ask us for the specification of the exact bike.',
      ],
      table: {
        head: ['Model', 'Price', 'Type', 'What Giant publishes'],
        rows: [
          ['Fathom E+ 1 Pro', '$5,499', 'Trail hardtail', 'Electric hardtail frame, 130 mm travel, 29-inch wheels'],
          ['Revolt E+ Pro', '$6,999', 'Electric gravel', 'Versatile e-bike for roads, gravel or dirt'],
          ['Trance X E+ 1 Pro', '$8,999', 'Trail dual suspension', '140 mm rear and 150 mm front travel'],
          ['Reign E+ Pro', '$9,999', 'Enduro', '160 mm rear travel, SyncDrive Pro 85 Nm'],
          ['Trance X E+ Elite', '$11,999', 'Trail dual suspension, higher spec', 'Same Trance X E+ family'],
        ],
      },
    },
    {
      h: 'Giant Fathom E+: the electric hardtail',
      p: [
        'Giant\'s [Fathom E+ page](https://www.giant-bicycles.com/global/fathom-e) describes an electric hardtail with a hardtail frame, 130 mm of travel and 29-inch wheels, and mentions SyncDrive motors. It is the simplest and lowest-priced Giant e-MTB in our range, with no rear shock to service. It suits riders who want a capable trail bike without the cost and maintenance of full suspension.',
        'Our [hardtail mtb bikes guide](/blog/hardtail-electric-mountain-bike/) explains who should buy a hardtail and who should not. In short, the Fathom suits smooth to moderate trails and a rider who values simplicity, and a rider who regularly meets rough descents will be happier on a Trance or Reign.',
      ],
    },
    {
      h: 'Giant Trance X E+: the trail bike',
      img: { file: 'blog/giant-e-bike-giant-trance-x-e-1-pro.webp', alt: 'Giant Trance X E+ 1 Pro trail e-bike from the mountain Giant bikes range', w: 720, h: 540 },
      p: [
        'Giant\'s [Trance X E+ page](https://www.giant-bicycles.com/nz/showcase/trance-x-e) lists Maestro suspension for 29-inch wheels with 140 mm of rear and 150 mm of front travel, which is a trail-bike figure. It is the all-rounder of the range: capable on descents and still light enough to pedal well on climbs.',
        'We list two: the Trance X E+ 1 Pro at $8,999 and the Trance X E+ Elite at $11,999. The Elite sits higher in the family, with the extra cost going into the specification, so ask us for the component differences before you choose. If you are unsure whether you need more travel, the Trance is the safe middle path.',
      ],
    },
    {
      h: 'Giant Reign E+: the long-travel enduro bike',
      p: [
        'Giant\'s [Reign E+ page](https://www.giant-bicycles.com/discover/en-us/e-biking/electric-mountain-biking/reign-e) lists 160 mm of Maestro rear travel and a SyncDrive Pro motor with 85 Nm of torque. That page is older, so check the exact specification for the model year you buy. The Reign is built for steep, rough descents, which is where an e-MTB makes the biggest difference because the motor takes care of the climbs.',
        'It is heavier and more bike than most riders need. If your trails are steep, technical and long, it is the right tool; if they are mixed or gentle, the Trance is lighter and easier to live with. Our [enduro bikes guide](/blog/enduro-electric-mountain-bike/) explains the difference between trail and enduro bikes in more detail.',
      ],
    },
    {
      h: 'Giant Revolt E+: the electric gravel bike',
      img: { file: 'blog/giant-e-bike-giant-revolt-e-pro.webp', alt: 'Giant Revolt E+ Pro electric gravel bike, one of the Giant electric bikes we list', w: 720, h: 540 },
      p: [
        'Giant Australia\'s Revolt E+ page describes a versatile, smooth-riding e-bike for roads, gravel or dirt. The [Giant Revolt E+ Pro](/shop/road-and-gravel-e-bikes/giant-revolt-e-pro/) at $6,999 is the road and gravel option in the range, and it suits riders who want one bike for commuting, fitness and fire trails.',
        'Giant\'s drive systems and battery sizes vary by model year, so confirm the configuration with us. See our [bikes for gravel guide](/blog/gravel-bikes-for-sale/) for how a gravel e-bike differs from a road or mountain bike, including tyres, range and rules.',
      ],
    },
    {
      h: 'Giant bike sizing: how to choose a frame size',
      p: [
        'Frame size matters more than almost anything else on a Giant. Giant publishes size charts for each model, usually by rider height, but standover height and reach vary between families, so use the chart as a starting point and check it against your inside leg. A bike that is too big is hard to control, and one that is too small cramps your riding position.',
        'Because you may buy online, message the team on WhatsApp with your height, inside leg and the terrain you plan to ride, and we will suggest a size and confirm availability. If you are between sizes, choose the smaller frame for technical trails and the larger for long, flat rides.',
      ],
    },
    {
      h: 'Queensland rules for a Giant e-bike',
      p: [
        'The Queensland Government\'s [electric bicycle rules](https://www.qld.gov.au/transport/safety/rules/wheeled-devices/electric-bicycle-rules) (updated 2 November 2026) say a legal e-bike has a motor with a maximum continuous rated power output of 250 watts, assistance that stops above 25 km/h and a throttle limited to starting up to 6 km/h, and must meet EN 15194 and display a compliance label. The page lists mountain bikes as an example of a legal e-bike and cites mountain bike trails as a recreational riding area.',
        'From 31 August 2026, riders must be 16 and hold a valid driver licence, with exemptions for supervised riders and recreational riding areas, and must always wear a helmet. We confirm the compliance label of the exact Giant before you pay. Lithium batteries are Class 9 dangerous goods for freight, which is why we confirm delivery details with you first.',
      ],
    },
    {
      h: 'Safety gear and accessories for a Giant e-MTB',
      p: [
        'A helmet that meets the standard is required, and aggressive riding calls for a full-face helmet; see our [full face helmet guide](/blog/full-face-mtb-helmet/). Our [helmets, gloves and protection](/shop/helmets-gloves-and-protection/) range includes the Hidrop Helmet at $279, the 79Bike Protective Armour at $189 and the 79Bike Off-Road Goggles at $119.',
        'A strong lock matters for a bike of this value; see our [how to lock an e-bike guide](/blog/how-to-lock-an-e-bike/). If you carry the bike on a car, see our [tow bar and bike rack guide](/blog/tow-bar-bike-rack/) for how to do the weight sums.',
      ],
    },
    {
      h: 'Battery, range and charging on a Giant e-bike',
      p: [
        'Range on any Giant depends on the battery capacity, the assist level, the terrain, your weight and the temperature. Steep, technical riding on the highest assist drains a battery far faster than a flat path on the lowest, so treat any range figure as a guide and plan a margin. If you ride long days, ask us whether a second battery or a range extender is offered for the model you are considering.',
        'Charge with the charger supplied, on a hard surface away from flammable items, and never while you sleep or are out. Stop using a battery that swells, overheats or smells. Lithium batteries are Class 9 dangerous goods for freight, so we confirm delivery details with you before you pay, and we recommend you store the battery indoors at a moderate temperature.',
      ],
    },
    {
      h: 'Servicing a Giant electric bike',
      ul: [
        '**Clean and lubricate the chain often.** Motor torque wears a chain faster than a regular bike; see our [lubricant for bike chains guide](/blog/lubricant-for-bike-chains/).',
        '**Check brake pads and discs.** A heavier bike needs more from its brakes.',
        '**Service the fork and shock.** Follow the maker\'s intervals, and more often if you ride hard or in dust.',
        '**Check tyres and pressure.** Pressure changes grip and puncture resistance.',
        '**Keep software and firmware up to date.** Follow the maker\'s guidance on updates.',
        '**Ask about warranty terms.** Confirm what is covered and how to claim before you buy.',
      ],
    },
    {
      h: 'What to check before you buy a Giant e-bike',
      ul: [
        '**Model year and specification.** Giant changes motors, batteries and parts between years; ask us for the exact bike.',
        '**Frame size.** Check the size chart and your inside leg.',
        '**Travel for your terrain.** Match hardtail, trail or enduro to your trails.',
        '**Battery and range.** Ask about capacity and a second battery for long days.',
        '**Weight.** Check you can lift it onto a rack.',
        '**Compliance label.** Confirm the 250 W rating and EN 15194 label.',
        '**Service.** Ask who services the motor and where parts come from.',
      ],
    },
    {
      h: 'Which Giant electric bike should you choose?',
      ul: [
        '**Simple trail bike on a budget:** the Fathom E+ 1 Pro at $5,499.',
        '**Roads, gravel and fire trails:** the Revolt E+ Pro at $6,999.',
        '**Do-it-all trail bike:** the Trance X E+ 1 Pro at $8,999.',
        '**Steep, rough descents:** the Reign E+ Pro at $9,999.',
        '**Higher-spec trail bike:** the Trance X E+ Elite at $11,999.',
      ],
    },
  ],
  faq: [
    { q: 'Which Giant electric bikes do you sell?', a: 'We list the Fathom E+ 1 Pro at $5,499, the Revolt E+ Pro at $6,999, the Trance X E+ 1 Pro at $8,999, the Reign E+ Pro at $9,999 and the Trance X E+ Elite at $11,999. Ask us for the exact specification of any model before you order.' },
    { q: 'How much travel do Giant e-MTBs have?', a: 'Giant lists 130 mm for the Fathom E+ hardtail, 140 mm rear and 150 mm front for the Trance X E+ and 160 mm rear for the Reign E+. Specifications vary by model year and region, so we confirm the exact bike with you.' },
    { q: 'Is the Giant Fathom a hardtail?', a: 'Yes. Giant describes the Fathom E+ as an electric hardtail with a hardtail frame, 130 mm of travel and 29-inch wheels. It has no rear shock, which keeps it simpler and cheaper than the Trance or Reign.' },
    { q: 'Are Giant e-bikes legal in Queensland?', a: 'A compliant e-bike with a 250 watt rated motor, assistance that stops above 25 km/h and an EN 15194 label is legal. We confirm the label of the exact bike before you pay. Riders must wear a helmet, and from 31 August 2026 must be 16 with a licence unless an exemption applies.' },
    { q: 'Which Giant should I choose for trail riding?', a: 'The Trance X E+ is the all-rounder with 140 mm rear and 150 mm front travel. Choose the Fathom for a simpler hardtail, or the Reign for steep, rough descents. Ask us for advice on frame size and specification.' },
  ],
  keywords: { primary: 'mountain giant bikes', supporting: ['giant mountain bicycles', 'giant reign', 'giant electric bicycles', 'giant electric bike', 'giant dual suspension'] },
  words: 0,
}
