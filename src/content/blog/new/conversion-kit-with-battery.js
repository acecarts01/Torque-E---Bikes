// Blog post written to the blog-post rule (see ~/.claude/skills/blog-post/SKILL.md).
// Keywords: volume / KD / intent from Semrush AU Keyword Magic (6 Nov 2026), recorded in docs/used-keywords.csv and docs/blog-plan-batches-2026-11-06.html.
// Sources opened 6 Nov 2026: Queensland Government electric bicycle rules page (250 W limit, EN 15194, after-market conversion kits not compliant, private property only); Fire and Rescue NSW e-bike and e-scooter battery safety page (opened in the browser pane: DIY builds, conversions and unprotected batteries).
// Product pages publish names and prices only: no kit contents, motor voltage or battery detail is claimed. Every kit here is above 250 W so is described as off-road and private property use only.
export const meta = {
  id: 'conversion-kit-with-battery',
  slug: 'conversion-kit-with-battery',
  url: '/blog/conversion-kit-with-battery/',
  title: 'Conversion Kit Bike Guide: E-Bike Kits and Batteries',
  seoTitle: 'Conversion Kit Bike Guide: E-Bike Kits and Batteries',
  excerpt: 'Planning a conversion kit bike? See Torque e-bike conversion kits from $819, how to pair a kit with a battery, safety checks and the Queensland rules.',
  category: 'Buying Guides',
  date: '2026-11-06',
  readTime: '9 min',
  focus: 'conversion kit bike',
  secondary: ['ebike conversion kit with battery', 'e bike conversion kit with battery', 'electric motor conversion kits', 'electric bike conversion kits', 'e-bike conversion kit'],
  tags: ['conversion kit', 'electric ebike kit', 'conversion kits e bike', 'mid drive ebike kit', 'electric bike conversion kit with battery australia', 'conversion kits for bikes', 'battery conversion kit', 'cheapest electric bicycle conversion kit', 'conversion kit mtb', 'electric bike kits'],
  image: {
    file: 'blog/conversion-kit-with-battery.webp',
    alt: 'Conversion kit bike: Torque 500W and 1000W e-bike conversion kit combos with torque arms and throttle kits',
    query: 'conversion kit bike',
    credit: null,
  },
  related: [
    { href: '/shop/motors-drivetrain-and-sprockets/torque-1000w-e-bike-conversion-combo/', name: 'Torque 1000W E-Bike Conversion Combo', price: 819, note: 'A kit combo for off-road use.' },
    { href: '/shop/motors-drivetrain-and-sprockets/torque-500w-e-bike-conversion-kit-combo/', name: 'Torque 500W E-Bike Conversion Kit Combo', price: 859, note: 'A kit combo for off-road use.' },
    { href: '/shop/motors-drivetrain-and-sprockets/torque-arms-1500w-5000w-kits/', name: 'Torque Arms (1500W-5000W Kits)', price: 51.95, note: 'Axle support for powerful hub motors.' },
    { href: '/shop/controls-grips-and-pedals/ampd-bros-twist-throttle-kit/', name: 'Ampd Bros Twist Throttle Kit', price: 99, note: 'A twist throttle.' },
    { href: '/shop/controls-grips-and-pedals/ampd-bros-thumb-throttle-kit/', name: 'Ampd Bros Thumb Throttle Kit', price: 85, note: 'A thumb throttle.' },
    { href: '/shop/motors-drivetrain-and-sprockets/', name: 'All motors, drivetrain and sprockets', note: 'Motors, kits and drivetrain parts.' },
  ],
  links: {
    to: [
      ['/shop/motors-drivetrain-and-sprockets/', 'motors, drivetrain and sprockets'],
      ['/shop/batteries-chargers-and-electronics/', 'batteries, chargers and electronics'],
      ['/blog/1000w-conversion-kit/', '1000W conversion kit guide'],
      ['/blog/e-bike-batteries/', 'e-bike batteries guide'],
      ['/blog/e-bike-battery-charger/', 'e-bike battery charger guide'],
      ['/blog/e-bike-throttle/', 'e-bike throttle guide'],
    ],
    from: [
      ['/shop/motors-drivetrain-and-sprockets/', 'electric bike conversion kits guide'],
      ['/shop/motors-drivetrain-and-sprockets/torque-500w-e-bike-conversion-kit-combo/', 'conversion kit with battery: what to check'],
      ['/shop/motors-drivetrain-and-sprockets/torque-1000w-e-bike-conversion-combo/', 'e-bike conversion kit buying guide'],
    ],
  },
  kind: 'post',
}

export const body = {
  hook: 'Our Torque conversion kit combos start at $819, but a kit is only half the job: you also need a battery, a throttle and the right bike. Here is what to check, and why kits above 250W are for private property only.',
  intro: [
    'A conversion kit bike starts as an ordinary pedal bike and gets a motor wheel, a controller, a throttle and a battery added to it. For a rider who already owns a good frame, a kit can be a cheaper route to an electric bike than buying a complete one, and for an off-road enthusiast it is a way to build something to suit. It is also a project that needs care, because the battery is the most dangerous part and the rules are strict.',
    'This guide covers the kits in our range with prices, what to ask about a kit with a battery, how to match motor, battery and frame, the accessories you will need, the safety points from Fire and Rescue NSW and what the Queensland Government says about conversion kits on public roads. Prices are in Australian dollars as listed on 6 November 2026. Our product pages publish names and prices only, so we do not state what each combo includes or its motor and battery specification: ask us before you order.',
  ],
  sections: [
    {
      h: 'Conversion kit bike basics: what a kit contains',
      p: [
        'A typical e-bike conversion kit replaces one wheel with a hub motor wheel, or adds a motor at the cranks, and supplies a controller that manages power, a throttle or pedal sensor, wiring and sometimes a display. The battery is often sold separately, and a kit that says it comes with a battery should list its voltage and capacity, because a kit and battery must be matched. A motor that expects one voltage can be damaged or can overheat when fed another.',
        'Hub kits are the simplest to fit because they replace a wheel. Mid-drive kits attach to the bottom bracket and drive the chain, which uses the bike\'s gears but needs a compatible frame. Electric motor conversion kits are sold in many power levels, and the power level decides what you can legally do with the bike, which is the first thing to settle.',
      ],
    },
    {
      h: 'Electric bike conversion kits in our range',
      p: [
        'We list two Torque kit combos and the parts that go with a powerful kit. The table shows each item with its price on 6 November 2026. We do not publish the contents of each combo on the product page, so message the team on WhatsApp to confirm what is included, whether a battery is part of the price and which bikes it suits.',
      ],
      table: {
        head: ['Item', 'Price (AUD)', 'Use'],
        rows: [
          ['Torque 1000W E-Bike Conversion Combo', '$819', 'Kit combo, off-road and private property only'],
          ['Torque 500W E-Bike Conversion Kit Combo', '$859', 'Kit combo, off-road and private property only'],
          ['Torque Arms (1500W-5000W Kits)', '$51.95', 'Axle support for powerful hub motors'],
          ['Ampd Bros Thumb Throttle Kit', '$85', 'Thumb throttle'],
          ['Ampd Bros Twist Throttle Kit', '$99', 'Twist throttle'],
        ],
      },
    },
    {
      h: 'Choosing between the Torque 500W and 1000W combos',
      img: { file: 'blog/conversion-kit-with-battery-torque-500w-e-bike-conversion-kit-combo.webp', alt: 'Torque 500W e-bike conversion kit combo for off-road builds', w: 720, h: 540 },
      p: [
        'The [Torque 1000W E-Bike Conversion Combo](/shop/motors-drivetrain-and-sprockets/torque-1000w-e-bike-conversion-combo/) is $819 and the [Torque 500W E-Bike Conversion Kit Combo](/shop/motors-drivetrain-and-sprockets/torque-500w-e-bike-conversion-kit-combo/) is $859. The higher-rated kit is the cheaper of the two, which is a reminder that the name alone does not say what is in the box, so ask us what each includes before you compare them.',
        'Both kits are rated above 250 watts, so both are for off-road and private property use only. If you want a bike you can ride on Queensland paths and roads, a complete e-bike that carries an EN 15194 label is the safe choice, and our [commuter and urban e-bikes](/shop/commuter-and-urban-e-bikes/) range lists those. Our [1000W conversion kit guide](/blog/1000w-conversion-kit/) goes deeper into the higher-power kits.',
      ],
    },
    {
      h: 'The rules: conversion kits and public roads in Queensland',
      p: [
        'The Queensland Government\'s [electric bicycle rules page](https://www.qld.gov.au/transport/safety/rules/wheeled-devices/electric-bicycle-rules) says that to be legal in public places, an e-bike must have a motor with a maximum continuous rated power output of 250 watts, be pedal powered with assistance up to 25 km/h, and meet the European Standard EN 15194 with a compliance label. The page says that modifications like after-market conversion kits are not compliant with the standard and would make the device illegal to ride in public.',
        'It also says that if a device does not meet the rules, it must only be used on private property. For that reason we describe every kit above 250 watts as off-road and private property use only, and we never describe a conversion as street legal. If you ride a converted bike, keep it on private land, and do not rely on a seller\'s claim that a kit can be switched to a legal mode.',
      ],
    },
    {
      h: 'Matching the battery to the kit',
      p: [
        'Battery choice is where most conversion projects succeed or fail. The kit\'s controller is designed for a voltage range, and the battery must fit that range and supply enough current for the motor. A battery that is too small will cut out under load, and one that is incompatible can damage the controller. Ask for the kit\'s voltage and current rating and match the battery to it, not just to the price.',
        'We stock many batteries, but those listed for particular models, such as Vamos and Fatboy batteries, are made for those bikes and may not suit a conversion kit. Message us with the kit you are considering and we will say which batteries are compatible. Our [e-bike batteries guide](/blog/e-bike-batteries/) explains voltage, capacity and ageing, and our [batteries, chargers and electronics](/shop/batteries-chargers-and-electronics/) category lists the range.',
      ],
    },
    {
      h: 'Battery safety for a conversion project',
      p: [
        'Fire and Rescue NSW\'s [battery safety page](https://www.fire.nsw.gov.au/fire-safety/home-fire-safety/topics/ebikes-escooters-battery-safety) says a significant proportion of incidents involving lithium-ion batteries are from equipment built or engineered by inexperienced people, that cheap, unprotected and second-hand batteries used in DIY projects have led to severe fires, and that battery repairs, servicing and installations should be carried out by an experienced e-bike mechanic. It also says to use only approved chargers that comply with Australian Standards and not to charge while sleeping or away from home.',
        'In practice, that means buying a new battery from a supplier who can state its specification, not building a pack from loose cells, using the charger that matches the battery and charging on a hard surface away from where you sleep. Our [e-bike battery charger guide](/blog/e-bike-battery-charger/) covers charger choice. Lithium batteries are Class 9 dangerous goods, so shipping needs certified handling, and we confirm freight with you before payment.',
      ],
    },
    {
      h: 'Parts you will need besides the kit',
      img: { file: 'blog/conversion-kit-with-battery-ampd-bros-thumb-throttle-kit.webp', alt: 'Ampd Bros thumb throttle kit, a part for an e-bike conversion kit', w: 720, h: 540 },
      ul: [
        '**A throttle.** The [Ampd Bros Thumb Throttle Kit](/shop/controls-grips-and-pedals/ampd-bros-thumb-throttle-kit/) is $85 and the [Ampd Bros Twist Throttle Kit](/shop/controls-grips-and-pedals/ampd-bros-twist-throttle-kit/) is $99. Our [e-bike throttle guide](/blog/e-bike-throttle/) compares the types.',
        '**A torque arm.** The [Torque Arms (1500W-5000W Kits)](/shop/motors-drivetrain-and-sprockets/torque-arms-1500w-5000w-kits/) are $51.95 and hold the axle in the frame of a powerful hub motor.',
        '**Strong brakes.** A faster, heavier bike needs brakes that cope; check yours before you start.',
        '**A charger and battery.** Matched to the kit, as above.',
        '**A sturdy frame and fork.** A hub motor puts load on the dropouts, so check the frame is strong enough.',
        '**A helmet.** Queensland says to always wear one on an e-bike.',
      ],
    },
    {
      h: 'Will my bike take a conversion kit?',
      p: [
        'Not every bike suits a kit. A hub motor needs a rear or front dropout width that matches the motor, and a steel or strong aluminium frame handles the torque better than a thin carbon one. A suspension fork can be a problem for a front hub motor, and a bike with rim brakes may need new brakes. Disc brakes and a hub motor can clash over space, so check that the rotor and the motor fit together.',
        'Weigh the bike as well. The motor and battery add several kilograms, so a light road bike may feel very different afterwards. If your frame is not suited, it is often cheaper and safer to buy a complete electric bike than to modify a poor donor. For an off-road project, a sturdy mountain bike frame is the usual starting point, and our [electric mountain bikes](/shop/electric-mountain-bikes/) show what a complete build looks like.',
      ],
    },
    {
      h: 'Running costs and looking after a converted bike',
      p: [
        'A converted bike has two sets of wear to watch. The pedal parts, the chain, tyres and brake pads, wear as they did before, but faster, because the extra power and weight put more load on them. Check the chain and the brake pads more often than you would on an unpowered bike, and replace tyres that are cracked or worn, because a motor wheel puts more stress on them.',
        'The electrical side needs a regular look as well. Check the connectors are tight and dry, the cables are not rubbing and the battery mounting is secure. Keep the battery out of heat and direct sun, and charge it as the maker describes. If the bike is stored for weeks, ask us what charge level suits the battery, and do not leave it flat. These checks take minutes, and they catch the small faults that grow into big ones.',
      ],
    },
    {
      h: 'Common mistakes with a conversion kit bike',
      ul: [
        '**Assuming the kit is street legal.** Queensland says after-market conversion kits are not compliant for public roads.',
        '**Buying a cheap, unlabelled battery.** Fire and Rescue NSW warns about cheap and unprotected batteries.',
        '**Mismatching voltage.** Check kit and battery voltage before you buy.',
        '**Skipping the torque arm on a powerful hub motor.** The axle can spin in the dropout.',
        '**Forgetting the brakes.** More power means more stopping.',
        '**Fitting it yourself without experience.** Ask a qualified e-bike mechanic to check the battery and wiring.',
      ],
    },
  ],
  faq: [
    { q: 'How much is an e-bike conversion kit?', a: 'In our range the Torque 1000W E-Bike Conversion Combo is $819 and the Torque 500W E-Bike Conversion Kit Combo is $859, as listed on 6 November 2026. We do not publish what each includes, so ask us whether a battery is part of the price before you order.' },
    { q: 'Is a conversion kit street legal in Queensland?', a: 'No. Queensland says legal e-bikes need a 250 watt maximum motor and an EN 15194 compliance label, and that after-market conversion kits are not compliant. Both of our Torque kits are above 250 watts, so they are for off-road and private property use only.' },
    { q: 'Does a conversion kit come with a battery?', a: 'It depends on the kit. Many kits are sold without one. Our product pages show names and prices only, so message us on WhatsApp to confirm what the combo includes and which battery suits it. The battery must match the controller voltage.' },
    { q: 'What do I need besides the kit?', a: 'You need a battery, a throttle, a charger, good brakes and a frame that can take the motor. We list the Ampd Bros Thumb Throttle Kit at $85, the Twist Throttle Kit at $99 and Torque Arms at $51.95. Ask us for compatible batteries.' },
    { q: 'Is it safe to build my own e-bike battery?', a: 'Fire and Rescue NSW says cheap, unprotected and second-hand batteries in DIY projects have led to severe fires and that installations should be done by an experienced e-bike mechanic. Buy a complete, labelled battery and use the matching charger.' },
  ],
  keywords: { primary: 'conversion kit bike', supporting: ['ebike conversion kit with battery', 'e bike conversion kit with battery', 'electric motor conversion kits', 'electric bike conversion kits', 'e-bike conversion kit'] },
  words: 0,
}
