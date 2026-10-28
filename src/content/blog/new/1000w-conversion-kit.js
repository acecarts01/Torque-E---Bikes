// Blog post written to the blog-post rule (see ~/.claude/skills/blog-post/SKILL.md).
// Keywords: volume / KD / intent from Semrush AU Keyword Magic (27-28 Oct 2026), recorded in docs/used-keywords.csv.
// Sources opened 27 Oct 2026: Queensland Government electric bicycle rules page, Transport for NSW e-bike page (opened in a browser) and the Fire and Rescue NSW e-bike battery safety page (opened in a browser).
// Product pages publish no motor voltages, battery contents or what each combo includes, so the post claims only names, brand and prices; every kit above 250W is described as off-road and private property use only.
export const meta = {
  id: '1000w-conversion-kit',
  slug: '1000w-conversion-kit',
  url: '/blog/1000w-conversion-kit/',
  title: '1000W Conversion Kit: E-Bike Kits, Batteries and the Rules',
  seoTitle: '1000W Conversion Kit: E-Bike Kits, Batteries and the Rules',
  excerpt: 'Considering a 1000w conversion kit? See Torque kits from $819, what a kit includes, battery and brake needs, and why kits above 250W are off-road only.',
  category: 'Buying Guides',
  date: '2026-10-28',
  readTime: '10 min',
  focus: '1000w conversion kit',
  secondary: ['1500w ebike conversion kit', 'electric bike conversion kit 1000w', '5kw conversion kit', 'electric bicycle kit with battery', '1000w ebike kit'],
  tags: ['electric bike kit with battery', 'e bike conversion kit 1000w', '1000w electric bike kit', '1000w ebike kit with battery', '1000w electric bike kit with battery', 'e bike kit 1500w', '1.5kw conversion kit', 'hub motor ebike conversion kit', 'hub motor electric bike kit', '250 watts ebike'],
  image: {
    file: 'blog/1000w-conversion-kit.webp',
    alt: 'Torque 1000W conversion combo, Torque 500W kit and Torque arms, a 1000w conversion kit range',
    query: '1000w conversion kit',
    credit: null,
  },
  related: [
    { href: '/shop/motors-drivetrain-and-sprockets/torque-1000w-e-bike-conversion-combo/', name: 'Torque 1000W E-Bike Conversion Combo', price: 819, note: 'A 1000W combo. Off-road and private property use only.' },
    { href: '/shop/motors-drivetrain-and-sprockets/torque-500w-e-bike-conversion-kit-combo/', name: 'Torque 500W E-Bike Conversion Kit Combo', price: 859, note: 'A 500W combo. Off-road and private property use only.' },
    { href: '/shop/motors-drivetrain-and-sprockets/torque-arms-1500w-5000w-kits/', name: 'Torque Arms (1500W-5000W Kits)', price: 51.95, note: 'Torque arms for high-power kits.' },
    { href: '/shop/batteries-chargers-and-electronics/', name: 'Batteries, chargers and electronics', note: 'Packs and chargers to match a kit.' },
    { href: '/shop/motors-drivetrain-and-sprockets/', name: 'All motors, drivetrain and sprockets', note: 'Motors, kits, chains and sprockets.' },
  ],
  links: {
    to: [
      ['/shop/motors-drivetrain-and-sprockets/', 'motors, drivetrain and sprockets'],
      ['/blog/e-bike-conversion-kits-explained/', 'e-bike conversion kits explained'],
      ['/blog/diy-2000w-conversion-guide/', 'DIY 2000W conversion guide'],
      ['/blog/e-bike-motor/', 'e bike motor buying guide'],
    ],
    from: [
      ['/shop/motors-drivetrain-and-sprockets/', '1000w conversion kit buying guide'],
      ['/shop/motors-drivetrain-and-sprockets/torque-1000w-e-bike-conversion-combo/', 'how to choose a 1000w conversion kit'],
      ['/shop/motors-drivetrain-and-sprockets/torque-500w-e-bike-conversion-kit-combo/', 'electric bicycle kit with battery: what to check'],
    ],
  },
  kind: 'post',
}

export const body = {
  hook: 'A 1000w conversion kit can turn a strong bike into a powerful private-land machine. It cannot make that bike road legal: kits above 250W are for off-road and private property use only in Australia.',
  intro: [
    'A 1000w conversion kit replaces or adds a motor, controller, throttle and display to an ordinary bike. Riders choose one for a private property bike, a farm runabout or a project build. This guide explains what a conversion kit includes, what else you need (battery, brakes, torque arms), what to check on your donor bike and what Queensland and NSW say about kits and power limits.',
    'We cover the Torque 1000W and 500W combos in our range from $819, power and battery matching, safe charging, installation steps and common mistakes. Prices are current Torque E-Bikes prices. A kit above 250W is for off-road and private property use only; we cannot advise using one on public roads or paths.',
  ],
  sections: [
    {
      h: '1000w conversion kit and related parts in our range',
      p: [
        'Our [motors, drivetrain and sprockets](/shop/motors-drivetrain-and-sprockets/) range includes two kit combos and parts to go with them. Product pages publish the brand and price but not what each combo includes (motor, controller, throttle, display, battery or cables), so ask us exactly what is in the box and which battery suits it before you order.',
      ],
      table: {
        head: ['Product', 'Brand', 'Price', 'Notes'],
        rows: [
          ['[Torque 1000W E-Bike Conversion Combo](/shop/motors-drivetrain-and-sprockets/torque-1000w-e-bike-conversion-combo/)', 'Torque', '$819', '1000W combo. Off-road and private property only'],
          ['[Torque 500W E-Bike Conversion Kit Combo](/shop/motors-drivetrain-and-sprockets/torque-500w-e-bike-conversion-kit-combo/)', 'Torque', '$859', '500W combo. Off-road and private property only'],
          ['[Torque MTX Motor & Rim](/shop/motors-drivetrain-and-sprockets/torque-mtx-motor-and-rim/)', 'Torque', '$329', 'Motor and rim. Ask us for the rating'],
          ['[Torque Arms (1500W-5000W Kits)](/shop/motors-drivetrain-and-sprockets/torque-arms-1500w-5000w-kits/)', 'Torque', '$51.95', 'For high-power kits'],
        ],
      },
    },
    {
      h: 'What an electric bike kit with battery includes',
      p: [
        'A typical hub motor conversion kit includes a hub motor (often laced into a rim), a controller, a throttle or pedal sensor, a display or switch, brake cut-off levers and wiring. Many buyers search for an electric bike kit with battery, because a kit without a battery is incomplete, but batteries are heavy and regulated as dangerous goods, so they are often sold separately.',
        'That is why you must check what a combo contains. If the battery is not included, you need one with the right voltage, current rating and connector. Our [batteries, chargers and electronics](/shop/batteries-chargers-and-electronics/) range includes packs, and our [e bike batteries guide](/blog/e-bike-batteries/) explains matching.',
        'Ask also whether the kit includes torque arms, a charger and a cable set, because these are essential for a powerful hub motor and for safe use.',
      ],
    },
    {
      h: 'Power, volts and what the watt number means',
      ul: [
        '**Nominal vs peak power.** A kit sold as 1000W usually refers to the motor\'s nominal rating. The controller may allow more for short bursts. Ask the maker for the continuous rating.',
        '**Voltage.** Higher voltage allows more power with less current. The motor, controller and battery must be designed for the same voltage.',
        '**Amps.** The controller\'s current limit decides how hard the motor is pushed. A battery must be able to deliver that current.',
        '**Speed.** Speed depends on voltage, motor winding, wheel size and load. A faster bike needs better brakes and a stronger frame.',
        '**Range.** A bigger motor draws more current, which reduces range for a given battery. Match the battery capacity to how you ride.',
        '**1500W and above.** Kits at 1,500W and 5kW exist, and Torque sells torque arms for 1,500W to 5,000W kits. These are high-power machines for experienced builders on private land.',
      ],
      img: { file: 'blog/1000w-conversion-kit-torque-500w.webp', alt: 'Torque 500W e-bike conversion kit combo', w: 720, h: 540 },
    },
    {
      h: 'The rules: why kits above 250W are off-road only',
      p: [
        'The Queensland Government\'s [electric bicycle rules page](https://www.qld.gov.au/transport/safety/rules/wheeled-devices/electric-bicycle-rules) says a legal e-bike has a motor with a maximum continuous rated power output of 250 watts and pedal assistance up to 25 km/h. It says modifications such as after-market conversion kits are not compliant with the EN 15194 standard, and that bikes with motors above 250 watts are not allowed even if they can be unlocked for private property use.',
        'Transport for NSW\'s [e-bike page](https://www.transport.nsw.gov.au/roadsafety/bicycle-riders/ebikes) allows 500 watts at present and requires 250 watts with an EN 15194 label from 1 March 2029, says a throttle-only bike cuts out at 6 km/h and says a bike that exceeds the limits is illegal even if restricted by an app. It also describes seizure laws from 21 August 2026.',
        'So a 1000W kit is for a private-property bike. We do not suggest using one on public roads, bike paths or footpaths. If you want a road bike, buy a complete compliant e-bike with a 250W motor and a label. Our [e-bike conversion kits guide](/blog/e-bike-conversion-kits-explained/) and [off-road vs street legal guide](/blog/off-road-vs-street-legal-australia/) explain more.',
      ],
    },
    {
      h: 'Checking your donor bike before you buy a kit',
      ul: [
        '**Frame material and strength.** A powerful hub can overload a thin aluminium or carbon frame. Steel and strong alloy frames are better suited.',
        '**Dropout width and shape.** The axle must fit; check the rear spacing (for example 135 mm) and the dropout type.',
        '**Brake type.** Disc brakes suit a powerful bike. Rim brakes struggle with the extra speed. See our [e-bike and dirt bike brakes guide](/blog/e-bike-and-dirt-bike-brakes/).',
        '**Wheel size and tyres.** The motor wheel must match the frame and fork. Tyres must handle the speed and load.',
        '**Drivetrain.** A rear hub needs a freewheel or cassette fitted. Check chain alignment; see our [chain alignment guide](/blog/chain-alignment-high-torque-motors/).',
        '**Fork.** A front hub needs a strong fork with torque arms.',
        '**Weight.** A kit with a battery adds a lot of weight, so check the bike\'s load rating.',
      ],
    },
    {
      h: 'Battery safety for a high-power kit',
      p: [
        'A high-power kit draws a lot of current, so the battery matters. Fire and Rescue NSW\'s [e-bike battery safety page](https://www.fire.nsw.gov.au/fire-safety/home-fire-safety/topics/ebikes-escooters-battery-safety) says to charge in an open area such as a garage or shed away from exits, only on hard surfaces that cannot burn, with a working smoke alarm nearby, and never while you sleep or are away from home. It warns that cheap, unprotected and second-hand batteries used in DIY projects have led to severe fires, and that battery repairs, servicing and installations should be done by an experienced e-bike mechanic.',
        'Use a battery with a built-in battery management system, the right connector and an appropriate fuse. Use the right charger for the pack. Never modify a pack or use damaged cells. Our [lithium battery safety guide](/blog/electric-moto-maintenance-lithium-safety/) and [charger guide](/blog/e-bike-battery-charger/) go into more detail. Lithium batteries are Class 9 dangerous goods, so they ship under special rules.',
      ],
    },
    {
      h: 'Installing a conversion kit: steps and skills',
      ul: [
        '**Plan the build.** List the parts, check compatibility and confirm the battery before you start.',
        '**Fit the wheel and torque arms.** Seat the axle flats properly and tighten to the torque the maker specifies.',
        '**Mount the controller, display and throttle.** Keep them dry and accessible.',
        '**Route wiring cleanly.** Use ties and protection so nothing chafes or snags.',
        '**Fit brake cut-off levers if supplied.** They cut the motor when you brake.',
        '**Test with the wheel raised.** Power up gently and check direction and response.',
        '**Test ride in a safe private place.** Start slowly, check the brakes and the handling.',
        '**Re-check after a few rides.** Tighten bolts and inspect connections.',
      ],
    },
    {
      h: '1000w conversion kit mistakes to avoid',
      ul: [
        '**Riding it on the road.** Kits above 250W are off-road and private property only.',
        '**Underrating the brakes.** More power needs better brakes.',
        '**Skipping torque arms.** The axle can spin out of the dropout.',
        '**Buying a cheap, unprotected battery.** Fire and Rescue NSW warns about them.',
        '**Ignoring the frame.** A weak frame can crack under high power.',
        '**DIY wiring without skills.** Ask an experienced mechanic to help.',
      ],
    },
    {
      h: "What a conversion build really costs",
      p: [
        "The kit price is only the start. Add a battery of the right voltage and capacity, a charger, torque arms for a powerful hub, upgraded brakes and possibly a stronger fork or frame work. Add helmet, gloves and safety gear, and the time to do the build properly.",
        "A kit also costs you the original bike's value if the frame is not up to the job. In many cases, buying a complete bike built for the power is cheaper in the end and comes with a warranty and support. Our [e-bike conversion kits guide](/blog/e-bike-conversion-kits-explained/) compares kits with complete bikes.",
        "If you decide on a kit, plan the budget before you buy, ask us what each combo includes and choose a battery with a built-in battery management system from a reputable supplier.",
      ],
    },
    {
      h: 'Which 1000w conversion kit should you buy?',
      p: [
        'The [Torque 1000W conversion combo at $819](/shop/motors-drivetrain-and-sprockets/torque-1000w-e-bike-conversion-combo/) is the 1000W option in our range, and the [Torque 500W combo at $859](/shop/motors-drivetrain-and-sprockets/torque-500w-e-bike-conversion-kit-combo/) is the 500W option. Combos differ in what they include, so ask us exactly what is in each. For high-power builds, add [torque arms at $51.95](/shop/motors-drivetrain-and-sprockets/torque-arms-1500w-5000w-kits/). All kits above 250W are for off-road and private property use only.',
        'Send us your donor bike, your plans and where you will ride and we will check the match. You can also browse the full [motors, drivetrain and sprockets range](/shop/motors-drivetrain-and-sprockets/) and read our [DIY 2000W conversion guide](/blog/diy-2000w-conversion-guide/).',
      ],
    },
  ],
  faq: [
    { q: 'Is a 1000W conversion kit legal in Australia?', a: 'Not on public roads or paths. Queensland allows 250 watts continuous and says after-market conversion kits are not compliant with the standard. NSW allows 500 watts at present. A 1000W kit is for off-road and private property use only.' },
    { q: 'Does a conversion kit come with a battery?', a: 'It depends on the combo. Many kits do not include a battery, because batteries are heavy and shipped as dangerous goods. Ask us exactly what is in the box and which battery suits it.' },
    { q: 'Do I need torque arms?', a: 'For a powerful hub motor, yes. A torque arm takes the twisting load off the dropout so the axle cannot spin and damage the frame. We sell torque arms for 1,500W to 5,000W kits.' },
    { q: 'Can any bike take a 1000W kit?', a: 'No. The frame, fork, dropouts and brakes must suit the extra power. A thin or carbon frame may not be suitable. Send us your bike details and we will advise.' },
    { q: 'How should I charge a high-power battery?', a: 'On a hard surface that cannot burn, in an open area such as a garage or shed, with a smoke alarm nearby, never while asleep or away, as Fire and Rescue NSW advises. Use the right charger for the pack.' },
    { q: 'What is the legal alternative for the road?', a: 'A complete e-bike with a 250W motor, assistance up to 25 km/h and an EN 15194 compliance label, as Queensland describes. We can advise on compliant bikes in our range.' },
  ],
  keywords: { primary: '1000w conversion kit', supporting: ['1500w ebike conversion kit', 'electric bike conversion kit 1000w', '5kw conversion kit', 'electric bicycle kit with battery', '1000w ebike kit'] },
  words: 0,
}
