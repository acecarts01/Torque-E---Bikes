// Blog post written to the blog-post rule (see ~/.claude/skills/blog-post/SKILL.md).
// Keywords: volume / KD / intent from Semrush AU Keyword Magic (27-28 Oct 2026), recorded in docs/used-keywords.csv.
// Sources opened 27 Oct 2026: Queensland Government electric bicycle rules page (250W, conversion kits not compliant, bikes above 250W) and the Transport for NSW e-bike page (opened in a browser on 27 Oct 2026: 500W now, 250W and EN 15194 from 1 March 2029).
// Product pages publish no motor ratings, voltages or sizes for the Torque items, so the post claims only names, brand and prices; every motor above 250W is described as off-road and private property use only.
export const meta = {
  id: 'e-bike-motor',
  slug: 'e-bike-motor',
  url: '/blog/e-bike-motor/',
  title: 'E Bike Motor: Hub Motors, Torque Arms and Legal Limits',
  seoTitle: 'E Bike Motor: Hub Motors, Torque Arms and Legal Limits',
  excerpt: "Choosing an e bike motor? Learn how hub motors work, what torque arms do, how watts and volts relate and the Queensland and NSW limits. Kits from $329.",
  category: 'Buying Guides',
  date: '2026-10-28',
  readTime: '10 min',
  focus: 'e bike motor',
  secondary: ['electric cycle motor', 'e bike motors', 'hub motor for e bike', 'electric motor for electric bike', 'electric bicycle engine'],
  tags: ['ebike hub motor', 'electric bike hub motor', 'electric bike wheel hub motor', 'electric bicycle hub motor', 'electric bicycle hub', 'ebike hub', 'bicycle electric hub', 'e motor for bike', 'electric motor hubs', 'electric bike engines'],
  image: {
    file: 'blog/e-bike-motor.webp',
    alt: 'Torque MTX motor and rim, Torque arms and a conversion combo, an e bike motor range',
    query: 'e bike motor',
    credit: null,
  },
  related: [
    { href: '/shop/motors-drivetrain-and-sprockets/torque-mtx-motor-and-rim/', name: 'Torque MTX Motor & Rim', price: 329, note: 'A hub motor and rim. Ask us for ratings and legal status.' },
    { href: '/shop/motors-drivetrain-and-sprockets/torque-arms-1500w-5000w-kits/', name: 'Torque Arms (1500W-5000W Kits)', price: 51.95, note: 'Torque arms for high-power kits. Off-road and private property use only.' },
    { href: '/shop/motors-drivetrain-and-sprockets/torque-500w-e-bike-conversion-kit-combo/', name: 'Torque 500W E-Bike Conversion Kit Combo', price: 859, note: 'A 500W kit. Off-road and private property use only.' },
    { href: '/shop/motors-drivetrain-and-sprockets/', name: 'All motors, drivetrain and sprockets', note: 'Motors, kits, chains and sprockets.' },
  ],
  links: {
    to: [
      ['/shop/motors-drivetrain-and-sprockets/', 'motors, drivetrain and sprockets'],
      ['/blog/e-bike-conversion-kits-explained/', 'e-bike conversion kits explained'],
      ['/blog/chain-alignment-high-torque-motors/', 'chain alignment for high-torque motors guide'],
      ['/blog/off-road-vs-street-legal-australia/', 'off-road vs street legal guide'],
    ],
    from: [
      ['/shop/motors-drivetrain-and-sprockets/', 'e bike motor buying guide'],
      ['/shop/motors-drivetrain-and-sprockets/torque-mtx-motor-and-rim/', 'how to choose an e bike motor'],
      ['/shop/motors-drivetrain-and-sprockets/torque-arms-1500w-5000w-kits/', 'hub motor for e bike: what to check'],
    ],
  },
  kind: 'post',
}

export const body = {
  hook: 'An e bike motor turns battery power into pedalling help, and its power rating decides where you can legally use the bike. Above 250W, a motor is for off-road and private property use only in Australia.',
  intro: [
    'An e bike motor is the heart of an electric bike. It can sit in the wheel hub, at the crank or at the rear, and it is rated in watts, which is the number that decides how the bike is treated under Australian law. This guide explains how hub motors work, how watts, volts and amps relate, why high-power motors need torque arms, how to fit a motor to a bike and what Queensland and NSW say about power limits.',
    'We cover the Torque motor and kit range from $51.95 to $859, the difference between hub and mid-drive motors, installation points and common mistakes. Prices are current Torque E-Bikes prices. Any motor above 250W is for off-road and private property use only.',
  ],
  sections: [
    {
      h: 'E bike motor options in our range and their prices',
      p: [
        'Our [motors, drivetrain and sprockets](/shop/motors-drivetrain-and-sprockets/) range includes motor and kit options from Torque. Product pages publish the brand and price but not ratings, voltages or sizes, so ask us for the maker\'s specifications and for confirmation of the power rating before you order.',
      ],
      table: {
        head: ['Product', 'Brand', 'Price', 'Notes'],
        rows: [
          ['[Torque Arms (1500W-5000W Kits)](/shop/motors-drivetrain-and-sprockets/torque-arms-1500w-5000w-kits/)', 'Torque', '$51.95', 'Torque arms for high-power kits. Off-road only'],
          ['[Torque MTX Motor & Rim](/shop/motors-drivetrain-and-sprockets/torque-mtx-motor-and-rim/)', 'Torque', '$329', 'Hub motor and rim. Ask us for the rating'],
          ['[Torque 1000W E-Bike Conversion Combo](/shop/motors-drivetrain-and-sprockets/torque-1000w-e-bike-conversion-combo/)', 'Torque', '$819', 'Kit. Off-road and private property only'],
          ['[Torque 500W E-Bike Conversion Kit Combo](/shop/motors-drivetrain-and-sprockets/torque-500w-e-bike-conversion-kit-combo/)', 'Torque', '$859', 'Kit. Off-road and private property only'],
        ],
      },
    },
    {
      h: 'How an electric cycle motor works',
      p: [
        'An electric motor uses magnets and coils to turn electrical energy from the battery into rotation. A controller sits between the battery and the motor and decides how much power to send, based on your pedalling, a throttle or both. The motor turns the wheel or the crank and adds to your effort.',
        'The three numbers you will see are volts, amps and watts. Volts describe the battery\'s electrical pressure, amps describe the current, and watts are volts multiplied by amps. A higher-voltage system can deliver more power with less current, which helps with heat and wiring. Our [e bike batteries guide](/blog/e-bike-batteries/) explains battery voltage and capacity.',
        'The motor rating you read on a label is usually the continuous or nominal power, while the controller may allow a higher peak for short bursts. Under the Queensland rules, what counts is the maximum continuous rated power output.',
      ],
    },
    {
      h: 'Hub motor for e bike builds: front, rear, geared and direct drive',
      ul: [
        '**Rear hub motor.** The motor is built into the rear wheel and pushes the bike from the back. It gives good traction and is the most common choice for kits.',
        '**Front hub motor.** The motor sits in the front wheel. It is easy to fit because it does not interfere with the chain, but traction can be less on loose surfaces.',
        '**Geared hub motors.** Internal gears reduce the speed, so the motor can be smaller and lighter and often freewheels when you pedal without power.',
        '**Direct-drive hub motors.** No gears, so they are simple and durable, and some can regenerate. They are heavier and can drag slightly when unpowered.',
        '**Mid-drive motors.** The motor sits at the crank and drives the chain, so it uses the bike\'s gears. They climb well and balance weight but cost more. See our [mid drive ebike guide](/blog/mid-drive-ebike/).',
        '**Motor and rim.** Some kits supply the motor already laced into a rim, saving the work of wheel building. The Torque MTX Motor & Rim is an example; ask us about size and fit.',
      ],
      img: { file: 'blog/e-bike-motor-torque-mtx.webp', alt: 'Torque MTX motor and rim for an electric bike', w: 720, h: 540 },
    },
    {
      h: 'Why high-power motors need torque arms',
      p: [
        'A powerful hub motor puts a large twisting force on the axle. If the axle is held only by a normal dropout, the force can make it spin in the slot and damage the frame, or in the worst case let the wheel come loose. A torque arm is a metal bracket that clamps the axle flats to the frame and takes the twisting load, so the dropout does not have to.',
        'That is why torque arms are sold for high-power kits. The Torque Arms in our range are listed for 1,500W to 5,000W kits and are for off-road and private property use only, since those power levels are beyond the road limit.',
        'Fit them carefully and check the bolts regularly. A frame that is thin aluminium or carbon may not suit a high-power hub motor at all. Our [chain alignment guide for high-torque motors](/blog/chain-alignment-high-torque-motors/) covers other issues that come with powerful drivetrains.',
      ],
    },
    {
      h: 'Queensland and NSW power limits for an electric motor for an electric bike',
      p: [
        'The Queensland Government\'s [electric bicycle rules page](https://www.qld.gov.au/transport/safety/rules/wheeled-devices/electric-bicycle-rules) says a legal e-bike has a motor with a maximum continuous rated power output of 250 watts and motor assistance up to 25 km/h when you pedal. It says bikes with motors above 250 watts are not allowed, even if they can be unlocked for private property use, and that modifications such as after-market conversion kits are not compliant with the EN 15194 standard.',
        'Transport for NSW\'s [e-bike page](https://www.transport.nsw.gov.au/roadsafety/bicycle-riders/ebikes) sets different dates: it allows 500 watts at present and requires 250 watts with an EN 15194 label from 1 March 2029. It also says a bike that exceeds the limits is illegal even if it is restricted by an app. Check the current page, because rules change.',
        'In plain terms, a motor above 250W is for private land and off-road venues. Our Torque kits above that level are listed accordingly, and we cannot advise using them on public roads or paths. Our [off-road vs street legal guide](/blog/off-road-vs-street-legal-australia/) explains the categories.',
      ],
    },
    {
      h: 'Choosing an e bike motor: what to check',
      ul: [
        '**Power rating.** Decide first whether the bike is for the road or for private land. Road bikes need a 250W motor and a compliance label; anything above is off-road only.',
        '**Voltage match.** The motor, controller and battery must suit each other. Check the voltage and the current rating.',
        '**Wheel size and axle.** The hub must fit your frame or fork: dropout width, axle diameter and rim size.',
        '**Brake type.** Disc mounts or rim brakes on the hub must match your brakes.',
        '**Gearing and freewheel.** A hub motor in the rear wheel with a cassette needs the right freewheel or cassette body.',
        '**Frame strength.** A thin frame may not take a powerful hub. Add torque arms.',
        '**Weight.** A motor adds weight to the wheel, and a heavy front wheel affects steering.',
      ],
    },
    {
      h: 'Fitting a hub motor: the main steps',
      p: [
        'Fitting a motor is a job for someone with bike mechanical skill, and wiring a battery and controller needs care. If you are not confident, use an experienced mechanic: Fire and Rescue NSW advises that battery repairs, servicing and installations should be done by an experienced e-bike mechanic.',
      ],
      ul: [
        '**Check compatibility first.** Frame, fork, dropouts, brakes, chain line and wheel size must suit the motor.',
        '**Fit the wheel and torque arm.** Seat the axle flats in the dropout, fit the torque arm and tighten to the maker\'s torque.',
        '**Mount the controller and battery.** Place them where they are protected and cooled.',
        '**Run the wiring cleanly.** Tie cables so they cannot snag or chafe, and keep connectors dry.',
        '**Test on a stand.** Raise the wheel and run the motor gently before riding.',
        '**Check the brakes.** A more powerful bike needs strong brakes. See our [e-bike and dirt bike brakes guide](/blog/e-bike-and-dirt-bike-brakes/).',
        '**Re-check after the first rides.** Bolts and connections settle.',
      ],
    },
    {
      h: 'Looking after an electric bike motor',
      p: [
        'Hub motors are sealed and need little care, but they still suffer from water, heat and shock. Keep connectors dry and clean, check cables for wear, and avoid riding through deep water. After a wet or muddy ride, wipe the bike down and let it dry.',
        'Listen for new noises and watch for loss of power or unusual heat, which can signal a problem. Do not open a sealed motor unless the maker supports it. Check the torque arm bolts and axle nuts regularly, and keep the drivetrain lubed; see our [lubricant for bike chains guide](/blog/lubricant-for-bike-chains/).',
        'Treat the battery with the same care. Charge on a hard surface, follow the maker\'s advice and see our [lithium battery safety guide](/blog/electric-moto-maintenance-lithium-safety/).',
      ],
    },
    {
      h: 'E bike motor mistakes to avoid',
      ul: [
        '**Fitting a motor above 250W for road use.** It is off-road and private property only.',
        '**Skipping torque arms on a powerful hub.** The axle can spin out of the dropout.',
        '**Mismatching voltage.** Controller, motor and battery must agree.',
        '**Using a weak frame.** Check frame strength and dropout material.',
        '**Ignoring the brakes.** More power needs better stopping.',
        '**DIY battery work.** Leave lithium battery repairs to an experienced mechanic.',
      ],
    },
    {
      h: 'Which e bike motor should you buy?',
      p: [
        'For a motor already built into a rim, look at the [Torque MTX Motor & Rim at $329](/shop/motors-drivetrain-and-sprockets/torque-mtx-motor-and-rim/) and ask us for its rating and fit. For a high-power build, the [Torque Arms at $51.95](/shop/motors-drivetrain-and-sprockets/torque-arms-1500w-5000w-kits/) are needed to protect the frame, and the [500W kit at $859](/shop/motors-drivetrain-and-sprockets/torque-500w-e-bike-conversion-kit-combo/) is a complete combo. Anything above 250W is for off-road and private property use only.',
        'Send us your bike, battery and where you will ride and we will confirm the fit and the legal status. You can also browse the full [motors, drivetrain and sprockets range](/shop/motors-drivetrain-and-sprockets/) and read our [e-bike conversion kits guide](/blog/e-bike-conversion-kits-explained/).',
      ],
    },
  ],
  faq: [
    { q: 'What e bike motor power is legal in Australia?', a: 'Queensland allows a maximum continuous rated power output of 250 watts with pedal assist up to 25 km/h. NSW allows 500 watts now and 250 watts with an EN 15194 label from 1 March 2029. Above that, a bike is off-road and private property use only.' },
    { q: 'What is a hub motor?', a: 'A hub motor is built into the centre of the front or rear wheel and turns the wheel directly. It is simple to fit but adds weight to the wheel. Mid-drive motors sit at the crank and use the bike\'s gears.' },
    { q: 'Do I need a torque arm?', a: 'For a powerful hub motor, yes. A torque arm takes the twisting load off the dropout so the axle cannot spin and damage the frame. Torque arms in our range are for high-power kits that are off-road only.' },
    { q: 'Can I fit a conversion kit and ride on the road?', a: 'Queensland says after-market conversion kits are not compliant with the standard, and bikes above 250W are not allowed even if they can be unlocked for private property use. Check your state rules before riding on public roads.' },
    { q: 'How do volts, amps and watts relate?', a: 'Watts equal volts multiplied by amps. A higher-voltage battery can deliver the same power with less current. Motor, controller and battery must all suit each other.' },
    { q: 'Should I fit a motor myself?', a: 'Only if you have the skills. Fire and Rescue NSW advises that battery repairs, servicing and installations should be done by an experienced e-bike mechanic. Ask us for guidance.' },
  ],
  keywords: { primary: 'e bike motor', supporting: ['electric cycle motor', 'e bike motors', 'hub motor for e bike', 'electric motor for electric bike', 'electric bicycle engine'] },
  words: 0,
}
