// Blog post written to the blog-post rule (see ~/.claude/skills/blog-post/SKILL.md).
// Keywords: volume / KD / intent from Semrush AU Keyword Magic (27-28 Oct 2026), recorded in docs/used-keywords.csv.
// Sources opened 27 Oct 2026: Queensland Government electric bicycle rules page and the Transport for NSW e-bike page (opened in a browser on 27 Oct 2026).
// Product pages publish no motor makes, torque or battery figures; the post claims only names, brands, prices and the words mid-drive and Bosch where they appear in product names.
export const meta = {
  id: 'mid-drive-ebike',
  slug: 'mid-drive-ebike',
  url: '/blog/mid-drive-ebike/',
  title: 'Mid Drive Ebike: How Mid-Drive Motors Compare to Hub Motors',
  seoTitle: 'Mid Drive Ebike: How Mid-Drive Motors Compare to Hub',
  excerpt: 'Considering a mid drive ebike? Learn how mid-drive motors work, how they compare with hub motors on hills and servicing, and see mid-drive bikes from $2,999.',
  category: 'Buying Guides',
  date: '2026-10-28',
  readTime: '10 min',
  focus: 'mid drive ebike',
  secondary: ['mid drive electric bike', 'mid drive ebikes', 'mid drive electric bikes', 'electric bicycle mid drive motor', 'mid drive ebike motor'],
  tags: ['mid drive', 'mid drive e bike', 'mid motor ebike', 'electric mid drive bicycle', 'mid drive ebike australia', 'mid drive electric bicycles', 'mid drive motors', 'mid motor electric bike', 'mid drive e bike conversion kit', 'e bike with motor'],
  image: {
    file: 'blog/mid-drive-ebike.webp',
    alt: 'SmartMotion Pacer, full-suspension e-MTB and Cannondale Cargowagen Neo, a mid drive ebike range',
    query: 'mid drive ebike',
    credit: null,
  },
  related: [
    { href: '/shop/commuter-and-urban-e-bikes/smartmotion-pacer-mid-drive-step-through-e-bike/', name: 'SmartMotion Pacer Mid-Drive Step-Through E-Bike', price: 2999, note: 'A mid-drive step-through e-bike.' },
    { href: '/shop/electric-mountain-bikes/full-suspension-e-mtb-orange-motinova-mid-drive/', name: 'Full-Suspension E-MTB Orange (Motinova mid-drive)', price: 3899, note: 'A full-suspension e-MTB with a mid-drive motor.' },
    { href: '/shop/cargo-bikes-and-e-trikes/cannondale-cargowagen-neo-bosch-e-bike/', name: 'Cannondale Cargowagen Neo Bosch E-Bike', price: 6299, note: 'A Bosch-equipped cargo e-bike.' },
    { href: '/shop/electric-mountain-bikes/', name: 'All electric mountain bikes', note: 'E-MTBs from our range.' },
  ],
  links: {
    to: [
      ['/shop/electric-mountain-bikes/', 'electric mountain bikes'],
      ['/blog/e-bike-motor/', 'e bike motor buying guide'],
      ['/blog/electric-mountain-bike-buying-guide/', 'electric mountain bike buying guide'],
      ['/blog/pedal-assist-vs-throttle/', 'pedal assist vs throttle guide'],
    ],
    from: [
      ['/shop/electric-mountain-bikes/', 'mid drive ebike buying guide'],
      ['/shop/commuter-and-urban-e-bikes/smartmotion-pacer-mid-drive-step-through-e-bike/', 'how to choose a mid drive ebike'],
      ['/shop/electric-mountain-bikes/full-suspension-e-mtb-orange-motinova-mid-drive/', 'mid drive electric bike: what to check'],
    ],
  },
  kind: 'post',
}

export const body = {
  hook: 'A mid drive ebike puts the motor at the cranks and drives the chain, so it uses the bike\'s gears and climbs well. It costs more than a hub-motor bike and wears the drivetrain faster, so match it to your hills and your budget.',
  intro: [
    'A mid drive ebike has its motor in the middle of the bike, at the bottom bracket, where the pedals attach. The motor turns the cranks, and the chain and gears carry that power to the rear wheel. That is different from a hub motor, which sits in a wheel. This guide explains how a mid drive electric bike works, how it compares with a hub motor on climbing, handling, servicing and cost, and which mid-drive bikes are in our range from $2,999.',
    'We cover the pros and cons, who each motor suits, riding technique, drivetrain care and the Queensland and NSW power limits. Prices are current Torque E-Bikes prices. Product pages publish the model name and price but not motor specifications, so ask us for the maker\'s figures before you order.',
  ],
  sections: [
    {
      h: 'Mid drive ebikes in our range and their prices',
      p: [
        'Our range includes mid-drive e-bikes across commuter, mountain and cargo categories. Where the product name says mid-drive or Bosch, that is stated below. Ask us for the motor make, torque rating and battery details of any bike before you order.',
      ],
      table: {
        head: ['E-bike', 'Category', 'Price', 'Notes'],
        rows: [
          ['[SmartMotion Pacer Mid-Drive Step-Through E-Bike](/shop/commuter-and-urban-e-bikes/smartmotion-pacer-mid-drive-step-through-e-bike/)', 'Commuter', '$2,999', 'Named mid-drive, step-through'],
          ['[Full-Suspension E-MTB Orange (Motinova mid-drive)](/shop/electric-mountain-bikes/full-suspension-e-mtb-orange-motinova-mid-drive/)', 'Electric mountain', '$3,899', 'Named mid-drive, full suspension'],
          ['[Cannondale Cargowagen Neo Bosch E-Bike](/shop/cargo-bikes-and-e-trikes/cannondale-cargowagen-neo-bosch-e-bike/)', 'Cargo', '$6,299', 'Bosch named in the product title'],
        ],
      },
    },
    {
      h: 'How a mid drive electric bike works',
      p: [
        'In a mid-drive system the motor is mounted in or near the bottom bracket. It adds torque to the crank, and that torque goes through the chain to the rear cassette like your own pedalling. A sensor measures how hard you pedal, so the motor adds power in proportion. Many mid-drive systems use a torque sensor, which feels natural because the assist follows your effort.',
        'Because the power goes through the gears, you can change gear to keep the motor in its best range. Low gears on a steep climb let the motor spin at a good speed and deliver strong torque to the wheel. That is the main reason mid-drive bikes are popular on hills and on e-mountain bikes.',
        'A mid-drive bike is a pedal-assist system by design. The motor responds to your pedalling, so it fits the road rules that call for assistance only when you pedal. Check the model\'s details for any throttle feature.',
      ],
    },
    {
      h: 'Mid drive vs hub motor: the key differences',
      ul: [
        '**Climbing.** A mid-drive uses the bike\'s gears, so it can climb steep and long hills efficiently. A hub motor has a fixed ratio to the wheel and can struggle on steep climbs without help from the gears.',
        '**Weight balance.** The mid-drive motor sits low and central, which helps the bike handle. A hub motor adds weight to the wheel, which can affect steering at the front or the rear.',
        '**Drivetrain wear.** Mid-drive power goes through the chain and gears, so chains, cassettes and chainrings wear faster. A hub motor spares the chain.',
        '**Servicing.** A hub motor makes wheel and tyre changes simple. A mid-drive can make removing the rear wheel and servicing the drivetrain a bit more complex.',
        '**Cost.** Mid-drive bikes usually cost more than hub-motor bikes. Our mid-drive models start at $2,999.',
        '**Feel.** A mid-drive with a torque sensor feels like having stronger legs. A hub motor can feel more like being pushed, depending on the sensor.',
        '**Conversion.** You can add a hub-motor kit to many bikes, but mid-drive kits are less common. Queensland says after-market conversion kits are not compliant.',
      ],
      img: { file: 'blog/mid-drive-ebike-smartmotion-pacer.webp', alt: 'SmartMotion Pacer mid-drive step-through e-bike', w: 720, h: 540 },
    },
    {
      h: 'Who should choose a mid drive electric bicycle',
      p: [
        '**Hilly riders.** If your commute or trails include steep climbs, a mid-drive helps because you can use low gears. **Mountain bikers.** Many e-mountain bikes are mid-drive because the low, central motor suits handling on rough terrain. Our [electric mountain bike buying guide](/blog/electric-mountain-bike-buying-guide/) explains how they work off-road.',
        '**Heavier loads and cargo.** A mid-drive helps a loaded bike start and climb. The Cannondale Cargowagen Neo in our range, which names Bosch in its title, is a cargo example; see our [electric cargo bikes guide](/blog/electric-cargo-bikes/).',
        '**Riders who like gears.** If you enjoy changing gear to match the terrain, a mid-drive uses that skill.',
        '**Hub motor riders.** A hub-motor bike can be the better choice for flat commutes, low maintenance and a lower price. Our [e bike motor guide](/blog/e-bike-motor/) covers hub motors in detail.',
      ],
    },
    {
      h: 'Mid drive ebike buying checklist',
      ul: [
        '**Motor make and torque.** Ask who makes the motor and what its torque rating is. Higher torque helps on steep hills.',
        '**Battery capacity.** Check the watt-hours and whether it is removable. See our [e bike batteries guide](/blog/e-bike-batteries/).',
        '**Drivetrain quality.** A mid-drive needs a robust chain and cassette. Ask about the components.',
        '**Sensor type.** Torque sensors feel natural; cadence sensors can feel less refined.',
        '**Support and servicing.** Ask who services the motor and what warranty covers it.',
        '**Weight.** Mid-drive bikes can be heavy; check you can lift the bike if needed.',
        '**Legal label.** For road use, look for the EN 15194 compliance label and a 250W motor.',
      ],
    },
    {
      h: 'Riding a mid drive ebike: gears, cadence and care',
      p: [
        'Because the motor drives the chain, use the gears. Shift down before a hill, not on it, and ease the pedal pressure for a moment as you change gear so the chain and cassette do not take a shock. Keep a steady cadence rather than grinding in a high gear, which wears the drivetrain and wastes battery.',
        'Choose a lower assist level on flat ground and a higher one on climbs. Stop pedalling before you stop the bike so the motor does not push you forward as you slow. Our [pedal assist vs throttle guide](/blog/pedal-assist-vs-throttle/) explains how assist works.',
        'Look after the drivetrain: clean and lube the chain often, replace the chain before it wears out the cassette and check the chainring. See our [lubricant for bike chains guide](/blog/lubricant-for-bike-chains/).',
      ],
    },
    {
      h: 'Power limits: what Queensland and NSW say',
      p: [
        'The Queensland Government\'s [electric bicycle rules page](https://www.qld.gov.au/transport/safety/rules/wheeled-devices/electric-bicycle-rules) says a legal e-bike has a motor with a maximum continuous rated power output of 250 watts, is pedal powered with motor assistance up to 25 km/h, and displays an EN 15194 compliance label. It adds that bikes with motors above 250 watts are not allowed even if they can be unlocked for private property use.',
        'Transport for NSW\'s [e-bike page](https://www.transport.nsw.gov.au/roadsafety/bicycle-riders/ebikes) allows 500 watts at present and requires 250 watts with an EN 15194 label from 1 March 2029. Many mid-drive bikes are built to the 250W road rule, but check the model.',
        'Ask us to confirm the motor rating and the compliance label of any bike before you order. Our [off-road vs street legal guide](/blog/off-road-vs-street-legal-australia/) explains the categories.',
      ],
    },
    {
      h: 'Servicing and warranty for a mid drive ebike',
      p: [
        'Mid-drive motors are more integrated into the frame than hub motors, and servicing often needs the maker\'s tools and software. Ask who services the bike you are buying and where. A local service point can make the difference between a short wait and a long one.',
        'Check the warranty terms for the motor, the battery and the frame, and keep your receipt. Australian consumer guarantees apply to every purchase. Regular servicing of the drivetrain keeps the system running well.',
        'Fire and Rescue NSW advises that battery repairs and servicing should be done by an experienced e-bike mechanic. Do not open the motor or the battery yourself.',
      ],
    },
    {
      h: 'Mid drive ebike mistakes to avoid',
      ul: [
        '**Grinding in a high gear.** It wears the chain and cassette and wastes battery.',
        '**Shifting under full power.** Ease off as you change gear.',
        '**Ignoring chain wear.** A worn chain damages the cassette.',
        '**Buying on motor name alone.** Check support, weight and fit as well.',
        '**Assuming all mid-drives are 250W.** Check the rating and the label.',
        '**DIY motor repairs.** Leave them to an experienced mechanic.',
      ],
    },
    {
      h: "Running costs of a mid drive vs a hub motor",
      p: [
        "A mid-drive bike costs more to buy, and its drivetrain parts wear faster, so expect to replace chains and cassettes more often. A hub-motor bike spares the chain but has more weight in the wheel, and a flat tyre can be a bigger job.",
        "Over a few years, the cost difference depends on how far you ride, how hilly the route is and how well you look after the drivetrain. A rider who changes gear well and keeps the chain clean can reduce wear a lot.",
        "Ask for prices of common replacement parts, such as the chain, the cassette and the battery, before you buy. The cheapest bike to buy is not always the cheapest to own.",
      ],
    },
    {
      h: 'Which mid drive ebike should you buy?',
      p: [
        'For a mid-drive commuter with a step-through frame, the [SmartMotion Pacer at $2,999](/shop/commuter-and-urban-e-bikes/smartmotion-pacer-mid-drive-step-through-e-bike/) is the entry option. For off-road riding, the [full-suspension e-MTB with a Motinova mid-drive at $3,899](/shop/electric-mountain-bikes/full-suspension-e-mtb-orange-motinova-mid-drive/) is the mountain bike pick. For hauling loads, the [Cannondale Cargowagen Neo Bosch at $6,299](/shop/cargo-bikes-and-e-trikes/cannondale-cargowagen-neo-bosch-e-bike/) is the cargo option.',
        'Send us your hills, your budget and your riding plans and we will help you choose. You can also browse the full [electric mountain bikes range](/shop/electric-mountain-bikes/) and read our [e bike motor guide](/blog/e-bike-motor/).',
      ],
    },
  ],
  faq: [
    { q: 'What is a mid drive ebike?', a: 'A mid drive ebike has its motor at the crank, in the middle of the bike. The motor adds torque to the pedals, and the chain and gears carry the power to the rear wheel, so you can use gears to climb.' },
    { q: 'Is a mid drive better than a hub motor?', a: 'Mid-drives climb steep hills well and balance weight, but cost more and wear the drivetrain faster. Hub motors are simpler, cheaper and spare the chain. The better one depends on your hills, budget and maintenance.' },
    { q: 'Are mid drive e-bikes road legal in Australia?', a: 'Many are built to the road rules, but check the model. Queensland requires a 250W motor, assistance up to 25 km/h and an EN 15194 label. NSW currently allows 500W and moves to 250W with a label from 1 March 2029.' },
    { q: 'Can I convert my bike to mid drive?', a: 'Mid-drive conversion kits exist but are less common than hub kits. Queensland says after-market conversion kits are not compliant with the standard, so a converted bike may not be legal on public roads.' },
    { q: 'Does a mid drive wear out the chain faster?', a: 'Yes, because the motor\'s power goes through the chain and cassette. Keep the chain clean and lubed, replace it before it is badly worn and use the right gear to reduce strain.' },
    { q: 'Who services a mid drive motor?', a: 'It depends on the make. Ask the seller who services the motor and where. Do not open the motor or battery yourself, and use an experienced e-bike mechanic.' },
  ],
  keywords: { primary: 'mid drive ebike', supporting: ['mid drive electric bike', 'mid drive ebikes', 'mid drive electric bikes', 'electric bicycle mid drive motor', 'mid drive ebike motor'] },
  words: 0,
}
