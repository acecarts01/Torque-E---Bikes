// Blog post written to the blog-post rule (see ~/.claude/skills/blog-post/SKILL.md).
// Keywords: volume / KD / intent from Semrush AU Keyword Magic (28 Oct 2026) and the competitor keyword gap list, recorded in docs/used-keywords.csv.
// Competitor analysis (docs/competitor-notes.md): parts pages are thin lists with no compatibility advice, no legal context and scooter parts mixed in; this post explains matching controller, display, throttle, motor and battery, and the Queensland and Fire and Rescue NSW advice.
// Sources opened 27 Oct 2026: Queensland Government electric bicycle rules page and the Fire and Rescue NSW e-bike battery safety page (opened in a browser).
// Product pages publish no voltages, connectors or compatibility lists, so the post claims only names, brands and prices and tells readers to ask us to confirm fit.
export const meta = {
  id: 'ebike-parts',
  slug: 'ebike-parts',
  url: '/blog/ebike-parts/',
  title: 'Ebike Parts: Controllers, Displays, Throttles and Upgrades',
  seoTitle: 'Ebike Parts: Controllers, Displays, Throttles and Mods',
  excerpt: 'Choosing ebike parts? Learn how controllers, displays, throttles, motors and batteries must match, with parts from $85, and what Queensland says about mods.',
  category: 'Buying Guides',
  date: '2026-10-28',
  readTime: '10 min',
  focus: 'ebike parts',
  secondary: ['e bike parts', 'part electric bike', 'ebike display', 'electric bike controller', 'custom ebike'],
  tags: ['controller e-bike', 'controller for e-bike', 'electric bicycle controllers', 'electric bike control', 'electric bike controls', 'ebike mods', 'bike mods', 'ebike with motor', 'electric bicycle wheel hub motor', 'throttle e bikes'],
  image: {
    file: 'blog/ebike-parts.webp',
    alt: 'Fatboy controller, colour LCD display and Ampd Bros throttle, ebike parts that must match',
    query: 'ebike parts',
    credit: null,
  },
  related: [
    { href: '/shop/controls-grips-and-pedals/ampd-bros-thumb-throttle-kit/', name: 'Ampd Bros Thumb Throttle Kit', price: 85, note: 'A thumb throttle kit.' },
    { href: '/shop/controls-grips-and-pedals/79bike-viper-s-replacement-display/', name: '79Bike Viper S Replacement Display', price: 119, note: 'A replacement display.' },
    { href: '/shop/controls-grips-and-pedals/display-colour-lcd/', name: 'Display (Colour LCD)', price: 129, note: 'A colour LCD display.' },
    { href: '/shop/batteries-chargers-and-electronics/fatboy-controller-v1-bagus-and-v2-models/', name: 'Fatboy Controller V1 Bagus and V2 models', price: 279, note: 'A controller for listed Fatboy models.' },
    { href: '/shop/motors-drivetrain-and-sprockets/torque-mtx-motor-and-rim/', name: 'Torque MTX Motor & Rim', price: 329, note: 'A hub motor and rim.' },
    { href: '/shop/batteries-chargers-and-electronics/', name: 'Batteries, chargers and electronics', note: 'Packs, chargers, controllers and electronics.' },
  ],
  links: {
    to: [
      ['/shop/batteries-chargers-and-electronics/', 'batteries, chargers and electronics'],
      ['/shop/controls-grips-and-pedals/', 'controls, grips and pedals'],
      ['/blog/e-bike-motor/', 'e bike motor buying guide'],
      ['/blog/e-bike-throttle/', 'e bike throttle buying guide'],
    ],
    from: [
      ['/shop/batteries-chargers-and-electronics/', 'ebike parts buying guide'],
      ['/shop/batteries-chargers-and-electronics/fatboy-controller-v1-bagus-and-v2-models/', 'electric bike controller: what to check'],
      ['/shop/controls-grips-and-pedals/display-colour-lcd/', 'ebike display: how to choose'],
    ],
  },
  kind: 'post',
}

export const body = {
  hook: 'Ebike parts must work together. A controller, display, throttle, motor and battery that do not match will not work, or can be unsafe. Match them by voltage and connector, and keep road bikes compliant.',
  intro: [
    'Ebike parts are not interchangeable the way bicycle parts are. The controller tells the motor how much power to use, the display shows what the system is doing, the throttle or pedal sensor tells the controller what you want and the battery supplies the power. Each part has a voltage, a current rating and a connector, and they must agree. This guide explains how the main electric bike parts fit together, how to choose a replacement, what mods are allowed on a road bike and where to be careful with batteries.',
    'We cover controllers, displays, throttles, motors and batteries in our range from $85, compatibility checks and the questions riders ask. Prices are current Torque E-Bikes prices. Product pages do not publish voltages or connector types, so ask us to confirm fit before you order.',
  ],
  sections: [
    {
      h: 'Ebike parts in our range and their prices',
      p: [
        'Our [batteries, chargers and electronics](/shop/batteries-chargers-and-electronics/) and [controls, grips and pedals](/shop/controls-grips-and-pedals/) categories include these parts. The listing says which models a part is for where that is known; for anything else, ask us.',
      ],
      table: {
        head: ['Part', 'Product', 'Price', 'Note'],
        rows: [
          ['Throttle', '[Ampd Bros Thumb Throttle Kit](/shop/controls-grips-and-pedals/ampd-bros-thumb-throttle-kit/)', '$85', 'Thumb throttle kit'],
          ['Display', '[79Bike Viper S Replacement Display](/shop/controls-grips-and-pedals/79bike-viper-s-replacement-display/)', '$119', 'Replacement display'],
          ['Display', '[Display (Colour LCD)](/shop/controls-grips-and-pedals/display-colour-lcd/)', '$129', 'Colour LCD display'],
          ['Controller', '[Fatboy Controller V1 Bagus and V2 models](/shop/batteries-chargers-and-electronics/fatboy-controller-v1-bagus-and-v2-models/)', '$279', 'For listed Fatboy models'],
          ['Motor and rim', '[Torque MTX Motor & Rim](/shop/motors-drivetrain-and-sprockets/torque-mtx-motor-and-rim/)', '$329', 'Ask us for the rating'],
          ['Battery', '[Vamos Hefe Battery (48V 15Ah)](/shop/batteries-chargers-and-electronics/vamos-hefe-battery-48v-15ah/)', '$539', 'Battery pack'],
        ],
      },
    },
    {
      h: 'How electric bike parts work together',
      p: [
        'The **battery** stores the energy and has a voltage (for example 36V, 48V or 52V) and a capacity. The **controller** sits between the battery and the motor, takes signals from the throttle, pedal sensor and brake levers, and decides how much current to send. The **motor** turns that current into motion. The **display** shows speed, battery level and assist level and often lets you change settings.',
        'Because each part talks to the others, a wrong match can cause no power, error codes or damage. The controller must support the battery voltage and the motor type, the display must speak the controller\'s protocol and the throttle must use the right signal and connector. Our [e bike motor guide](/blog/e-bike-motor/) and [e bike throttle guide](/blog/e-bike-throttle/) explain two of the parts in detail.',
      ],
    },
    {
      h: 'Choosing an electric bike controller',
      ul: [
        '**Voltage range.** It must suit your battery voltage.',
        '**Current rating.** The controller\'s amp limit must suit the motor and the battery\'s ability to deliver.',
        '**Motor type.** Hub motors and mid-drive motors use different controllers.',
        '**Connectors.** Match the plugs for the motor, battery, throttle, display and brakes.',
        '**Features.** Pedal-assist support, throttle support, brake cut-offs and a programmable limit.',
        '**Fit.** Check where it mounts, and whether it is built into the battery or the frame.',
        '**Model-specific parts.** Our Fatboy controller is listed for V1 Bagus and V2 models. Ask us before using any controller on a different bike.',
      ],
      img: { file: 'blog/ebike-parts-fatboy-controller.webp', alt: 'Fatboy controller for V1 Bagus and V2 models, an electric bike controller', w: 720, h: 540 },
    },
    {
      h: 'Choosing an ebike display and a throttle',
      p: [
        'A display must work with your controller. The two displays in our range, the 79Bike Viper S replacement display at $119 and the colour LCD display at $129, are not universal, so ask us whether either suits your system. Check the screen size, the buttons, the connector and the features it offers, such as assist levels, trip data and error codes.',
        'A throttle must match the controller\'s signal and the connector, and it must suit the way you ride. Our Ampd Bros thumb throttle kit is $85 and the twist throttle kit is $99, and a Sur-Ron style throttle is listed as off-road and private property use only. Remember the rules: Queensland limits throttle assistance on a legal e-bike to 6 km/h.',
      ],
    },
    {
      h: 'Ebike mods: what is allowed on a road e-bike',
      p: [
        'The Queensland Government\'s [electric bicycle rules page](https://www.qld.gov.au/transport/safety/rules/wheeled-devices/electric-bicycle-rules) says a legal e-bike has a motor with a maximum continuous rated power output of 250 watts and motor assistance up to 25 km/h, and must meet EN 15194 and display a compliance label. It says modifications such as after-market conversion kits are not compliant with the standard, and bikes with motors above 250 watts are not allowed even if they can be unlocked for private property use.',
        'That means a power upgrade, a speed unlock or a bigger motor turns a road e-bike into a private-property machine. A like-for-like replacement of a worn part, such as the same controller or display, is different, but ask us before you change anything that affects power or speed. Parts for bikes above 250W in our range are listed as off-road and private property use only. The same applies to a custom ebike build: a custom bike with a bigger motor or a speed unlock is a private-property machine, so plan the build around where you will ride it.',
      ],
    },
    {
      h: 'Batteries and chargers: the parts to treat with most care',
      p: [
        'Fire and Rescue NSW\'s [e-bike battery safety page](https://www.fire.nsw.gov.au/fire-safety/home-fire-safety/topics/ebikes-escooters-battery-safety) says to charge in an open area such as a garage or shed away from exits, only on hard surfaces that cannot burn, with a working smoke alarm nearby, and never while you sleep or are away from home. It warns that cheap, unprotected and second-hand batteries used in DIY projects have led to severe fires, and that battery repairs, servicing and installations should be done by an experienced e-bike mechanic.',
        'Buy the right pack and charger for your bike and do not mix parts. See our [e bike batteries guide](/blog/e-bike-batteries/), [e bike battery charger guide](/blog/e-bike-battery-charger/) and [lithium battery guide](/blog/electric-moto-maintenance-lithium-safety/).',
      ],
    },
    {
      h: 'How to check a part will fit before you order',
      ul: [
        '**Note the bike make, model and year.** Photograph the label on the battery, controller and motor.',
        '**Record the voltage and current.** Labels usually show volts and amps.',
        '**Photograph the connectors.** Plugs vary widely.',
        '**Check mounting space.** Controllers and displays need room.',
        '**Ask the maker or us for the compatibility list.**',
        '**Check legal status.** Parts for bikes above 250W are off-road only.',
        '**Keep the old part** until the new one works.',
      ],
    },
    {
      h: 'Ebike parts mistakes to avoid',
      ul: [
        '**Mixing voltages.** A controller, motor and battery must agree.',
        '**Assuming universal fit.** Displays and controllers are often model-specific.',
        '**Upgrading power on a road bike.** It can make the bike non-compliant.',
        '**Buying unprotected or second-hand batteries.** Fire and Rescue NSW warns about them.',
        '**DIY battery repair.** Leave it to an experienced mechanic.',
        '**Ignoring connectors.** Photograph and compare before you buy.',
      ],
    },
    {
      h: "Common faults and what they usually mean",
      ul: [
        "**No power at all.** Check the battery charge, the battery switch, the connectors and any brake cut-off.",
        "**An error code on the display.** Look up the code for your system and check the connector or sensor it names.",
        "**Throttle does not respond.** Check the throttle connector and whether the controller supports it.",
        "**Assist cuts out on bumps.** A loose connector or a damaged cable is a common cause.",
        "**Battery will not charge.** Check the charger, the cable and the charge port, and stop if anything is hot or damaged.",
        "**Unusual noises from the motor.** Stop riding and have a mechanic inspect it.",
        "If you are unsure, use an experienced e-bike mechanic. Do not open the battery or the motor yourself.",
      ],
    },
    {
      h: "Looking after connectors, cables and electronics",
      p: [
        "Many electric bike problems are connector problems. Keep plugs clean and dry, push them fully home and check that cables are not chafed or pinched by the handlebar or the frame. Use cable ties and protective sleeves where cables rub.",
        "Do not pressure-wash displays, controllers or connectors, and wipe the bike with a damp cloth after wet rides. A dab of dielectric grease on a weatherproof connector, applied as the maker advises, can help keep moisture out.",
      ],
    },
    {
      h: "Replace, repair or upgrade?",
      p: [
        "If a part has failed, a like-for-like replacement is usually the simplest answer. If a part is old, a newer version may offer better features, but it must still match the rest of the system. Upgrading for power or speed changes the legal status of a road bike, as the Queensland rules explain.",
        "Ask whether the part is worth replacing on an old bike. If the battery, motor and controller are all near the end of their life, the cost of repairs may exceed the price of a new bike, and our [electric bike price guide](/blog/electric-bike-price/) shows what that costs.",
      ],
    },
    {
      h: "Basic tools for working on e-bike parts",
      ul: [
        "A set of hex keys and a torque wrench for stem, bars and mounts.",
        "A multimeter to check battery voltage and continuity, if you know how to use one.",
        "Cable ties, protective sleeves and a small side-cutter.",
        "A phone to photograph connectors and labels before you disconnect anything.",
        "Never open a battery or work on live wiring if you are not trained.",
      ],
    },
    {
      h: 'Which ebike parts do you need?',
      p: [
        'Tell us your bike and what has failed or what you want to change. For a throttle, look at the [Ampd Bros thumb throttle kit at $85](/shop/controls-grips-and-pedals/ampd-bros-thumb-throttle-kit/). For a display, the [79Bike Viper S at $119](/shop/controls-grips-and-pedals/79bike-viper-s-replacement-display/) or the [colour LCD at $129](/shop/controls-grips-and-pedals/display-colour-lcd/). For a Fatboy controller, the [V1 Bagus and V2 controller at $279](/shop/batteries-chargers-and-electronics/fatboy-controller-v1-bagus-and-v2-models/). For a motor, the [Torque MTX at $329](/shop/motors-drivetrain-and-sprockets/torque-mtx-motor-and-rim/).',
        'Send us your bike details and photos and we will confirm what fits. You can also browse the [batteries, chargers and electronics range](/shop/batteries-chargers-and-electronics/).',
      ],
    },
  ],
  faq: [
    { q: 'Can I use any controller with any e-bike?', a: 'No. A controller must suit the battery voltage, the motor type and the connectors. Ask us to confirm fit before you order, and send photos of your labels and plugs.' },
    { q: 'Will a different display work on my e-bike?', a: 'Only if it works with your controller. Displays are often model-specific, so ask us whether the display suits your system.' },
    { q: 'Can I upgrade my e-bike motor and still ride on the road?', a: 'Queensland says bikes with motors above 250 watts are not allowed and after-market conversion kits are not compliant with the standard. A power upgrade makes a bike private-property only.' },
    { q: 'How do I find the right battery for my e-bike?', a: 'Match the voltage, capacity, connector and mounting to your bike, and use the right charger. Ask us with your bike details, and do not use unprotected or second-hand packs.' },
    { q: 'Is it safe to repair an e-bike battery myself?', a: 'No. Fire and Rescue NSW says battery repairs, servicing and installations should be done by an experienced e-bike mechanic.' },
    { q: 'Do you stock parts for every brand?', a: 'No. Our range covers many brands but not all. Tell us your bike and what you need and we will tell you honestly whether we can help.' },
  ],
  keywords: { primary: 'ebike parts', supporting: ['e bike parts', 'part electric bike', 'ebike display', 'electric bike controller', 'custom ebike'] },
  words: 0,
}
