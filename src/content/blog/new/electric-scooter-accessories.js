// Blog post written to the blog-post rule (see ~/.claude/skills/blog-post/SKILL.md).
// Keywords: volume / KD / intent from Semrush AU Keyword Magic (6 Nov 2026), recorded in docs/used-keywords.csv and docs/blog-plan-batches-2026-11-06.html.
// Sources opened 6 Nov 2026: Segway Australia warranty policies page (periods, exclusions incl. third-party accessories, claim steps); Australian Government lithium-ion batteries guide; Queensland Government personal mobility device rules.
// We do not stock replacement scooter batteries, chargers or spare parts; the post says so and points to the maker's parts channel.
export const meta = {
  id: 'electric-scooter-accessories',
  slug: 'electric-scooter-accessories',
  url: '/blog/electric-scooter-accessories/',
  title: 'Scooter Parts and Electric Scooter Accessories Guide',
  seoTitle: 'Scooter Parts and Electric Scooter Accessories Guide',
  excerpt: 'Need scooter parts or electric scooter accessories? See what wears, how to buy batteries and chargers safely, warranty traps and the helmets, locks and lights we stock.',
  category: 'Buying Guides',
  date: '2026-11-06',
  readTime: '10 min',
  focus: 'scooter parts',
  secondary: ['power scooter battery', 'electric scooter accessories', 'scooter stand', 'e scooter battery', 'e scooter accessories'],
  tags: ['e-scooter battery charger', 'electric scooter charger', 'e scooter charger', 'scooter accessories', 'electric scooter battery', 'electric scooter parts', 'scooter charger', 'scooters and accessories', 'e scooter components', 'scooter battery'],
  image: {
    file: 'blog/electric-scooter-accessories.webp',
    alt: 'Scooter parts and electric scooter accessories: Abus Macator helmet, Kovix alarmed folding lock and Azur rear light',
    query: 'electric scooter accessories',
    credit: null,
  },
  related: [
    { href: '/shop/helmets-gloves-and-protection/abus-macator-helmet/', name: 'Abus Macator Helmet', price: 93.95, note: 'A helmet for scooter riding.' },
    { href: '/shop/locks-and-security/kovix-steel-thunder-alarmed-folding-lock/', name: 'Kovix Steel Thunder Alarmed Folding Lock', price: 109, note: 'An alarmed folding lock.' },
    { href: '/shop/lights-and-horns/blinder-1300-front-bike-light/', name: 'Blinder 1300 Front Bike Light', price: 149, note: 'A bright front light.' },
    { href: '/shop/phone-mounts-mirrors-and-audio/quad-lock-out-front-mount/', name: 'Quad Lock Out-Front Mount', price: 46.95, note: 'A handlebar phone mount.' },
    { href: '/shop/electric-scooters/', name: 'All electric scooters', note: 'Eight adult electric scooters.' },
  ],
  links: {
    to: [
      ['/shop/electric-scooters/', 'electric scooters'],
      ['/blog/scooter-helmet/', 'scooter helmet guide'],
      ['/blog/electric-scooter-lock/', 'electric scooter lock guide'],
      ['/blog/electric-scooters-for-sale/', 'electric scooters for sale'],
    ],
    from: [
      ['/shop/electric-scooters/', 'electric scooter accessories'],
      ['/shop/electric-scooters/segway-ninebot-f3-pro/', 'scooter parts and accessories: what to buy'],
      ['/shop/electric-scooters/segway-ninebot-max-g3-e/', 'e scooter accessories: what fits'],
    ],
  },
  kind: 'post',
}

export const body = {
  hook: 'Buy scooter parts and batteries through the maker\'s authorised channel, and spend your accessory budget on a helmet, a lock, lights and a phone mount. Segway\'s warranty excludes third-party components, so check before you modify.',
  intro: [
    'Most people who search for scooter parts or electric scooter accessories want one of two things: something to replace on a scooter that has worn or failed, or something to add that makes riding safer or more convenient. The two need different answers. Replacement parts, batteries and chargers should come from the maker. Accessories such as helmets, locks, lights and phone mounts are where you have a real choice.',
    'This guide explains what wears on an e-scooter, why you should be careful with batteries and chargers, what Segway\'s warranty says about third-party parts, and which accessories we stock with prices. We do not stock replacement scooter batteries, chargers or spare parts, so we say where to get them. Prices are in Australian dollars as listed on 6 November 2026.',
  ],
  sections: [
    {
      h: 'Scooter parts: what wears and what to check',
      p: [
        'The parts that wear on an electric scooter are the ones that touch the ground or take the most load. Tyres wear and puncture, inner tubes fail, brake pads thin, cables stretch, footplate grip tape lifts, folding latches loosen and bearings get noisy. A battery slowly loses capacity, and a charger can fail.',
        'Check these regularly and fix small problems before they become large ones. Look at tyre tread and pressure, squeeze the brakes and listen for squeal, rock the stem to feel for play at the folding latch and check that every bolt is tight. A scooter that rattles is telling you something is loose.',
      ],
      ul: [
        '**Tyres and tubes.** Check pressure and wear; self-sealing tubeless tyres reduce flats but still need checking.',
        '**Brake pads and discs.** Replace worn pads before the metal touches the disc.',
        '**Folding latch and stem.** Any play here is a safety risk; fix it before riding.',
        '**Lights.** Replace failed lights and check the wiring if they flicker.',
        '**Grip tape and handlebar grips.** Replace them when they wear smooth.',
        '**Battery and charger.** Watch for falling range, swelling, heat or a smell, and stop using it if you see any.',
      ],
    },
    {
      h: 'Where to buy scooter parts for a Segway',
      p: [
        'We do not stock replacement e-scooter parts, batteries or chargers, and we would sooner say so than imply otherwise. For a Segway, the maker runs an Australian parts channel, and its [warranty policies page](https://parts.segway.com.au/pages/warranty-policies) lists contacts for after-service and repair enquiries and for parts orders. Use the maker\'s channel for anything electrical, because the right part for your exact model matters.',
        'If you are unsure whether a part is under warranty, ask first. Segway\'s page says the period starts on the date of original purchase from an authorised reseller, and that a claim needs proof of purchase, the serial number and a description of the defect. Ask us for the warranty details of the scooter you are considering before you order.',
      ],
    },
    {
      h: 'The warranty trap: third-party parts and accessories',
      p: [
        'Segway\'s warranty policies page lists periods of one year for the frame, battery and motor of the E2, E2 Plus and F-series scooters, and two years for the frame, controller, motor, fork and shock absorbers of the MAX G2 and G3, with one year for the battery assembly and lights. It also lists exclusions, including improper charging, storage or maintenance, repairs by unauthorised providers, modifications to mechanical, electronic or software parts, and use with third-party components or accessories.',
        'In plain terms, a cheap no-name battery, charger or controller could cost you your warranty. Accessories that do not touch the scooter\'s electronics, such as a helmet, a lock or a phone mount that clamps to the bar, are the low-risk choice. For anything that connects to the scooter\'s wiring, check with the maker first.',
      ],
    },
    {
      h: 'Batteries and chargers: buy right, charge safely',
      p: [
        'People search for an e-scooter battery, a power scooter battery or an electric scooter charger when range drops or a charger fails. A replacement should match the maker\'s part for your exact model, in voltage, connector and protection circuitry. A battery that is the wrong match can damage the scooter or become a fire risk.',
        'The Australian Government\'s [lithium-ion batteries guide](https://www.productsafety.gov.au/consumers/be-safe-around-the-home/safely-use-batteries-and-technology/lithium-ion-batteries-guide) advises using the charger supplied with the product, not charging while you sleep or are out, charging on a hard surface away from flammable items and stopping use if a battery swells, overheats or smells. Do not charge a damaged battery, and do not leave a scooter on charge at the door of your apartment.',
      ],
    },
    {
      h: 'Safety accessories every scooter rider needs',
      img: { file: 'blog/electric-scooter-accessories-quad-lock-out-front-mount.webp', alt: 'Quad Lock out-front phone mount, an electric scooter accessory', w: 720, h: 540 },
      p: [
        'The Queensland Government\'s [rules for personal mobility devices](https://www.qld.gov.au/transport/safety/rules/wheeled-devices/personal-mobility-devices) require riders to wear an approved bicycle or motorbike helmet and say that holding a phone while riding is illegal, even if it is off. That makes a helmet and a handlebar phone mount the two accessories the law pushes you towards.',
        'Our [Abus Macator Helmet](/shop/helmets-gloves-and-protection/abus-macator-helmet/) is $93.95 and the [Hidrop Helmet](/shop/helmets-gloves-and-protection/hidrop-helmet-shiny-black/) is $279; see our [scooter helmet guide](/blog/scooter-helmet/) for how to choose and fit one. The [Quad Lock Out-Front Mount](/shop/phone-mounts-mirrors-and-audio/quad-lock-out-front-mount/) is $46.95 and the [GUB Plus 11 phone holder](/shop/phone-mounts-mirrors-and-audio/phone-holder-gub-plus-11/) is $51.95. Mount the phone so you can glance at it, not hold it.',
      ],
    },
    {
      h: 'Lights, horn and visibility accessories',
      img: { file: 'blog/electric-scooter-accessories-blinder-1300-front-bike-light.webp', alt: 'Blinder 1300 front light for night scooter riding', w: 720, h: 540 },
      p: [
        'A scooter often ships with a light, but it may not be bright enough for dark paths, and a rear light adds safety. The [Blinder 1300 Front Bike Light](/shop/lights-and-horns/blinder-1300-front-bike-light/) is $149 and the [Azur Alien2 100 lm USB Rechargeable Rear Light](/shop/lights-and-horns/azur-alien2-100-lm-usb-rechargeable-rear-light/) is $27.95. The [79Bike Horn](/shop/lights-and-horns/79bike-horn/) is $39, and our bicycle bell guide explains why a warning device is worth having.',
        'Check that any light you fit clamps to the handlebar and uses its own battery or USB charging, so it does not touch the scooter\'s wiring. That keeps the warranty position simple and the installation reversible.',
      ],
    },
    {
      h: 'Locks, storage and theft protection',
      p: [
        'A scooter is easy to lift and resell, so a lock is a core accessory. The [Kovix Steel Thunder Alarmed Folding Lock](/shop/locks-and-security/kovix-steel-thunder-alarmed-folding-lock/) is $109, the [Mastiff Chain-Lock Keyed](/shop/locks-and-security/mastiff-chain-lock-keyed/) is $99 and the [OnGuard Chain Lock](/shop/locks-and-security/onguard-chain-lock/) is $38.95. Our [electric scooter lock guide](/blog/electric-scooter-lock/) compares them.',
        'For storage at home, a scooter stand or wall mount keeps the scooter upright and off the floor, which protects the tyres and stops it falling over. Our [bike wall mount guide](/blog/bike-wall-mount/) explains how to choose a mount and fix it safely; check that any mount suits the scooter\'s weight and shape.',
      ],
    },
    {
      h: 'Which accessories to buy first',
      table: {
        head: ['Priority', 'Accessory', 'Why', 'Example'],
        rows: [
          ['1', 'Approved helmet', 'Required in Queensland and protects your head', 'Abus Macator $93.95'],
          ['2', 'Lock', 'Scooters are easy to steal', 'Kovix Steel Thunder $109'],
          ['3', 'Phone mount', 'Holding a phone while riding is illegal', 'Quad Lock Out-Front Mount $46.95'],
          ['4', 'Lights and horn', 'Visibility after dark', 'Azur Alien2 rear light $27.95'],
          ['5', 'Protective gear', 'For faster riding on private land', '79Bike Protective Armour $189'],
        ],
      },
    },
    {
      h: 'A monthly maintenance routine for an e scooter',
      ul: [
        '**Week to week:** check tyre pressure, test both brakes and wipe the deck and stem.',
        '**Each month:** inspect the tyres for cuts, check the folding latch and tighten visible bolts.',
        '**Every few months:** check brake pad thickness, look at the cables and charge port and test the lights.',
        '**After a wet ride:** dry the scooter, keep the charge port dry and wait before charging.',
        '**Before a long trip:** charge fully, check the tyres and carry a puncture kit; see our [bike puncture repair kit guide](/blog/bike-puncture-repair-kit/).',
      ],
    },
    {
      h: 'Accessories for powerful scooters on private land',
      p: [
        'The Dragon scooters in our range are dual-motor performance scooters that we sell for private property use only. If you ride one, the accessory list changes: add full protective gear, because speeds are much higher than the 25 km/h public limit. The [79Bike Protective Armour](/shop/helmets-gloves-and-protection/79bike-protective-armour/) is $189, and the [79Bike Off-Road Goggles](/shop/helmets-gloves-and-protection/79bike-off-road-goggles/) are $119.',
        'Pair them with a full-face helmet, gloves and closed shoes. Our [Dragon e scooter guide](/blog/dragon-e-scooter/) compares the four Dragon models. Never use performance accessories as a reason to ride faster on public paths, because the rules still apply there.',
      ],
    },
    {
      h: 'Fitting accessories safely',
      p: [
        'Fit accessories so that they cannot interfere with steering, braking or the folding mechanism. A phone mount should not sit where it blocks the display or the brake levers. A light should be clamped firmly so it does not rotate or fall off when you hit a bump. Do not drill the frame or cut wiring, since it can weaken the structure and void the warranty.',
        'Check that every accessory is secure before each ride, and re-tighten after the first few rides because vibration loosens clamps. If you are not sure that an accessory suits your scooter, message the team on WhatsApp with the scooter model and the accessory, and we will confirm what we can before you order.',
      ],
    },
    {
      h: 'Mistakes to avoid with scooter parts and accessories',
      ul: [
        '**Buying a no-name battery or charger.** It risks fire, damage and your warranty.',
        '**Modifying the scooter without checking the warranty.** Segway lists modifications and third-party components as exclusions.',
        '**Charging unattended.** Follow the Australian Government\'s advice.',
        '**Skipping the helmet and lock.** They are the cheapest protection you can buy.',
        '**Ignoring small faults.** A loose latch or worn brake gets worse.',
      ],
    },
  ],
  faq: [
    { q: 'Do you sell replacement scooter parts and batteries?', a: 'No. We do not stock replacement e-scooter batteries, chargers or spare parts. Segway runs an Australian parts channel with contacts for repairs and parts orders. We stock accessories such as helmets, locks, lights and phone mounts, and we confirm details before you order.' },
    { q: 'Will third-party accessories void my scooter warranty?', a: 'Segway\'s warranty policies page lists use with third-party components or accessories, modifications and repairs by unauthorised providers as exclusions. Accessories that do not touch the scooter\'s electronics, such as a helmet or lock, are low risk. Check with the maker before fitting anything electrical.' },
    { q: 'How do I charge an electric scooter battery safely?', a: 'Use the supplied charger, charge on a hard surface away from flammable items and never leave it charging while you sleep or are out. Stop using a battery that swells, overheats or smells. The Australian Government publishes a lithium-ion batteries guide with these steps.' },
    { q: 'What accessories do I need for an electric scooter?', a: 'A helmet and a lock first, then a phone mount, lights and a horn. In Queensland a helmet is required and holding a phone while riding is illegal. Add protective gear if you ride a powerful scooter on private land.' },
    { q: 'How long is the warranty on a Segway scooter?', a: 'Segway lists one year for the frame, battery and motor of the E2 and F-series and two years for the frame, controller and motor of the MAX G2 and G3, with one year for the battery. The period starts at purchase from an authorised reseller. Ask us for the details before you order.' },
  ],
  keywords: { primary: 'scooter parts', supporting: ['power scooter battery', 'electric scooter accessories', 'scooter stand', 'e scooter battery', 'e scooter accessories'] },
  words: 0,
}
