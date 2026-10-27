// Refresh of /blog/e-bike-conversion-kits-explained/ written to the blog-post rule (27 Oct 2026).
// Keywords: Semrush AU Keyword Magic, 27 Oct 2026 (volume / KD / intent in docs/used-keywords.csv).
// The URL is kept (the post already ranks for conversion-kit terms). The category page keeps "ebike conversion kit".
// Legal wording from the Queensland Government e-bike rules page (checked 27 Oct 2026): after-market conversion kits do not meet
// EN 15194 and make a bike illegal in public places; motors over 250W are for private property only.
export const slug = 'e-bike-conversion-kits-explained'

export const meta = {
    title: 'E Bike Conversion Kit: Hub vs Mid-Drive, Costs and Rules',
    seoTitle: 'E Bike Conversion Kit: Hub vs Mid-Drive, Costs and Rules',
    excerpt: 'Choosing an e bike conversion kit? Compare hub and mid-drive kits, see Torque combos from $859, battery and fit checks, and the Australian rules.',
    updated: '2026-10-27',
    readTime: '11 min',
    focus: 'e bike conversion kit',
    secondary: ['kit conversion ebike', 'ebike kit', 'e bike kit', 'bike conversion kit', 'converter e bike'],
    tags: ['motorised bike kit', 'bicycle ebike conversion', 'ebike kit with battery', 'conversion e bike', 'ebike kits', 'convert bicycle to electric kit', 'convert bike to ebike', 'kit bicycle motor', 'electric bike conversion kit with battery', 'electric bike conversion'],
    imageAlt: 'Hands fitting an e bike conversion kit motor to a bicycle in a workshop',
    related: [
      { href: '/shop/motors-drivetrain-and-sprockets/torque-500w-e-bike-conversion-kit-combo/', name: 'Torque 500W E-Bike Conversion Kit Combo', price: 859, note: 'Off-road and private property use only.' },
      { href: '/shop/motors-drivetrain-and-sprockets/torque-1000w-e-bike-conversion-combo/', name: 'Torque 1000W E-Bike Conversion Combo', price: 819, note: 'Off-road and private property use only.' },
      { href: '/shop/motors-drivetrain-and-sprockets/torque-mtx-motor-and-rim/', name: 'Torque MTX Motor & Rim', price: 329, note: 'Motor and rim for a motor-and-wheel build.' },
      { href: '/shop/motors-drivetrain-and-sprockets/torque-arms-1500w-5000w-kits/', name: 'Torque Arms (1500W-5000W Kits)', price: 51.95, note: 'Holds the axle in the dropouts on higher-power builds.' },
      { href: '/shop/motors-drivetrain-and-sprockets/', name: 'All motors, drivetrain and sprockets', note: 'Kits, motors, chains and sprockets.' },
    ],
    links: {
      to: [
        ['/shop/motors-drivetrain-and-sprockets/', 'e bike conversion kits'],
        ['/shop/batteries-chargers-and-electronics/', 'e-bike batteries and chargers'],
        ['/tools/conversion-kit-finder/', 'conversion kit finder'],
        ['/blog/diy-2000w-conversion-guide/', 'DIY conversion guide'],
        ['/blog/off-road-vs-street-legal-australia/', 'e-bike laws'],
      ],
      from: [
        ['/shop/motors-drivetrain-and-sprockets/', 'e bike conversion kit guide'],
        ['/shop/motors-drivetrain-and-sprockets/torque-500w-e-bike-conversion-kit-combo/', 'how to choose an ebike kit'],
        ['/shop/motors-drivetrain-and-sprockets/torque-mtx-motor-and-rim/', 'bike conversion kit explained'],
        ['/blog/diy-2000w-conversion-guide/', 'conversion kit explained'],
      ],
    },
}

export const body = {
    replace: true,
    hook: 'An e bike conversion kit turns a bicycle you already own into an electric one, but only if the kit suits the frame and you accept the rules: kits over 250W are for off-road and private property use only in Australia.',
    intro: [
      'An e bike conversion kit adds a motor, a battery, a controller and the controls to an ordinary bicycle. Done well, it is a cheaper route to an electric bike than buying a new one, and it lets you keep a frame you already like. Done badly, it costs more than a ready-made e-bike and ends with a bike you cannot legally ride on public paths.',
      'This guide compares hub and mid-drive kits, shows what the Torque combos cost, walks through the fit checks that decide whether a kit will work on your bike, and sets out the legal and safety points that matter in Australia. Prices are current Torque E-Bikes prices.',
    ],
    sections: [
      {
        h: 'E bike conversion kit options and prices',
        p: [
          'These are the main items in our [e bike conversion kits](/shop/motors-drivetrain-and-sprockets/) range. The listings do not publish full specifications, so ask us what each kit includes and which bikes it suits before you order.',
        ],
        table: {
          head: ['Item', 'Price', 'Use'],
          rows: [
            ['[Torque MTX Motor & Rim](/shop/motors-drivetrain-and-sprockets/torque-mtx-motor-and-rim/)', '$329', 'Motor and rim'],
            ['[Torque 1000W E-Bike Conversion Combo](/shop/motors-drivetrain-and-sprockets/torque-1000w-e-bike-conversion-combo/)', '$819', 'Off-road and private property only'],
            ['[Torque 500W E-Bike Conversion Kit Combo](/shop/motors-drivetrain-and-sprockets/torque-500w-e-bike-conversion-kit-combo/)', '$859', 'Off-road and private property only'],
            ['79Bike Falcon Pro Motor', '$1,350', 'Off-road and private property only'],
            ['[Torque Arms (1500W-5000W Kits)](/shop/motors-drivetrain-and-sprockets/torque-arms-1500w-5000w-kits/)', '$51.95', 'Axle support for higher-power builds'],
          ],
        },
      },
      {
        h: 'What an ebike kit includes',
        p: [
          'Kits differ, so always check the list before you buy. A complete ebike kit usually has a motor, a controller, a throttle or pedal-assist sensor, a display or switch, brake lever cut-offs and the wiring that joins them. The battery and charger are sometimes included and sometimes sold separately, which changes the real price a great deal.',
          'The parts that are easy to overlook are the ones that decide safety: brake cut-off switches so the motor stops when you brake, a torque arm to hold the axle, and the right connectors between battery and controller. If any of these is missing from a listing, ask.',
        ],
      },
      {
        h: 'Hub motor or mid-drive: which bike conversion kit style suits you',
        p: [
          '**Hub motor kits** put the motor in the front or rear wheel. They are the most common and usually the cheapest kind of bike conversion kit, they leave the chain and gears alone and are simple to fit. They add weight at the wheel and rely on the bike\'s dropouts to hold the axle against the motor\'s torque.',
          '**Mid-drive kits** mount the motor at the cranks and drive the chain, so the bike\'s own gears multiply the motor\'s torque on hills. They feel more natural and balance weight better, but they cost more, are harder to fit and wear the chain and cassette faster.',
          'For a flat commute on a sturdy frame, a hub kit is usually the sensible place to start. For steep hills or off-road riding, a mid-drive gives better control, if you can accept the higher cost and the extra drivetrain wear.',
        ],
      },
      {
        h: 'Will a bicycle conversion kit fit your bike?',
        p: [
          'Check these points before you order a kit. Our [conversion kit finder](/tools/conversion-kit-finder/) can help you work through them.',
        ],
        ul: [
          '**Dropout width.** The rear or front fork spacing must match the motor axle. Measure the gap between the dropouts.',
          '**Dropout material and strength.** Thin aluminium or carbon forks are a poor match for a strong hub motor. Steel frames cope better.',
          '**Wheel size.** The kit wheel or rim must match your tyres, and the motor must clear the frame and brakes.',
          '**Brakes.** Check whether your bike has rim or disc brakes, and make sure the motor and rotor mounting leave room.',
          '**Drivetrain.** A rear hub motor needs space for your cassette or freewheel, and a mid-drive needs a compatible bottom bracket.',
          '**Battery position.** Plan where the pack will sit, on a rack, in a bag or on the frame, and how you will mount it safely.',
        ],
      },
      {
        h: 'Power and the law: what kit conversion ebike builds mean in Australia',
        p: [
          'The legal position is firm, and it matters before you buy. On the Queensland Government\'s [e-bike rules page](https://www.qld.gov.au/transport/safety/rules/wheeled-devices/electric-bicycle-rules), a legal e-bike must have a motor with a maximum continuous rated power of 250 watts, assist only up to 25 km/h, and meet the European standard EN 15194 with a compliance label.',
          'The same page says that after-market conversion kits are not compliant with that standard and would make the device illegal to ride in public, and that electric bikes with motors more powerful than 250 watts are illegal devices on public paths and roads. Software-locking a more powerful motor does not change that.',
          'In practice, our 500W and 1000W kits are for off-road and private property use only. Rules vary between states and territories, so check your own road authority, and read our guide to [e-bike laws in Australia](/blog/off-road-vs-street-legal-australia/) for the wider picture.',
        ],
      },
      {
        h: 'Choosing a battery for an electric bike conversion',
        p: [
          'The battery is the most expensive and the most safety-critical part of a conversion. Match the pack to the kit: the voltage must suit the controller, the connector must fit, and the capacity decides range. Our [e bike batteries guide](/blog/e-bike-batteries/) explains volts, amp hours and watt hours, and the [e bike battery charger guide](/blog/e-bike-battery-charger/) covers matching a charger.',
          'Safety agencies are blunt about home builds. Fire and Rescue NSW notes on its [e-bike battery safety page](https://www.fire.nsw.gov.au/fire-safety/home-fire-safety/topics/ebikes-escooters-battery-safety) that a significant proportion of lithium battery incidents involve equipment built by inexperienced people, and that cheap, unprotected and second-hand batteries in DIY projects have led to severe fires. It recommends that battery repairs and installations be done by an experienced e-bike mechanic.',
          'The ACCC adds that there is no mandatory safety standard for lithium-ion batteries, and advises buying from a reputable supplier and never using a battery designed for one product in another. See the [ACCC lithium-ion batteries guide](https://www.productsafety.gov.au/consumers/be-safe-around-the-home/safely-use-batteries-and-technology/lithium-ion-batteries-guide). Browse packs and chargers in our [e-bike batteries and chargers](/shop/batteries-chargers-and-electronics/) range.',
        ],
      },
      {
        h: 'Installing a motorised bike kit: what to expect',
        p: [
          'A hub kit install is a job for a confident home mechanic with the right tools, and takes a few hours the first time. The usual order is:',
        ],
        ul: [
          'Check the bike is sound: tyres, brakes, bearings and frame.',
          'Fit the motor wheel or rim, and add a torque arm if the kit calls for one.',
          'Mount the controller, display and throttle or sensor, and fit the brake lever cut-offs.',
          'Route and secure the wiring so nothing can rub or snag.',
          'Mount the battery, connect everything and check each connection before powering on.',
          'Test with the wheel off the ground, then at low speed in a safe, private area, and check the brakes cut the motor.',
        ],
      },
      {
        h: 'What a conversion really costs',
        p: [
          'The kit is only part of the budget. Add a battery, a charger if it is not included, a torque arm, a helmet and protective gear, and any parts your bike needs, such as better brakes or tyres. At current prices, our conversion items run from $329 for a motor and rim to $859 for the Torque 500W combo, a pack can add anywhere from about $539 to $1,419 depending on size, and a charger is typically around $89.',
          'That puts a complete conversion in the same range as an entry-level ready-made e-bike, so the saving is real only if your existing bike is a good base. If it needs brakes, wheels and a new drivetrain as well, a ready-made bike may be better value.',
        ],
      },
      {
        h: 'Conversion kit or a ready-made e-bike?',
        ul: [
          '**Choose a kit** if you already own a sturdy bike you like, you are comfortable with tools, and you will ride off-road or on private property.',
          '**Choose a ready-made road-legal e-bike** if you want to ride on public roads and paths, want a warranty on the whole bike, or do not want to do the wiring yourself. See our [e-bikes](/electric-bikes/) range.',
          '**Choose a mid-drive build** only if you accept the higher cost for better hill control.',
        ],
        p: [
          'If you are weighing a bigger build, our [DIY 2000W conversion guide](/blog/diy-2000w-conversion-guide/) covers high-power builds, which are strictly off-road.',
        ],
      },
      {
        h: 'Common conversion mistakes',
        ul: [
          '**Buying on power alone.** Check the frame can handle it and that you can ride it legally where you live.',
          '**Skipping the torque arm.** A strong hub motor can spin in the dropouts and damage the frame.',
          '**Forgetting brakes.** The bike must stop as well as it goes, and the motor should cut when you brake.',
          '**Using the wrong battery or charger.** Match voltage, connector and current.',
          '**Charging carelessly.** Follow the charging advice from your fire authority.',
          '**Assuming a converted bike is road legal.** In Queensland an after-market kit makes the bike illegal in public places.',
        ],
      },
    ],
    faq: [
      {
        q: 'What is an e bike conversion kit?',
        a: 'An e bike conversion kit is a set of parts, usually a motor, controller, controls and wiring, and sometimes a battery and charger, that you fit to an ordinary bicycle to make it electric. Kits vary a lot in what they include, so check the parts list before you buy.',
      },
      {
        q: 'Is a converted e-bike legal in Australia?',
        a: 'Not for public roads or paths in Queensland. The Queensland Government says after-market conversion kits are not compliant with EN 15194 and make a device illegal to ride in public, and motors over 250 watts are illegal devices on public paths and roads. Use kits over 250W on private property only.',
      },
      {
        q: 'Hub motor or mid-drive: which is better for a conversion?',
        a: 'Hub kits are cheaper and simpler to fit and suit flat commutes on a sturdy frame. Mid-drive kits cost more and are harder to install, but give better hill control and balance. Choose by your terrain and budget, and by whether your frame and drivetrain suit the kit.',
      },
      {
        q: 'Does an ebike kit include a battery?',
        a: 'It depends on the kit. Some include a battery and charger and some do not, which changes the real price a great deal. Check the listing, ask us what is in the box, and make sure the pack voltage and connector match the controller.',
      },
      {
        q: 'Can I fit a conversion kit myself?',
        a: 'A hub kit is a realistic job for a confident home mechanic with the right tools. Battery work is different: Fire and Rescue NSW advises that battery repairs and installations be done by an experienced e-bike mechanic, so have a professional help with the pack and wiring if you are not sure.',
      },
    ],
    keywords: { primary: 'e bike conversion kit', supporting: ['kit conversion ebike', 'ebike kit', 'e bike kit', 'bike conversion kit', 'converter e bike'] },
    words: 0,
}
