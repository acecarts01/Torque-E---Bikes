// Blog post written to the blog-post rule (see ~/.claude/skills/blog-post/SKILL.md).
// Keywords: volume / KD / intent from Semrush AU Keyword Magic (27 Oct 2026), recorded in docs/used-keywords.csv.
// Watt-hours are volts x amp-hours; $/Wh is catalogue price divided by that figure.
export const meta = {
  id: 'e-bike-batteries',
  slug: 'e-bike-batteries',
  url: '/blog/e-bike-batteries/',
  title: 'E Bike Batteries: Voltage, Ah and How to Choose One',
  seoTitle: 'E Bike Batteries: Voltage, Ah and How to Choose One',
  excerpt: 'Buying e bike batteries in Australia? See how voltage and Ah set range, price per Wh for 36V to 52V packs from $539, and how to match a replacement.',
  category: 'Buying Guides',
  date: '2026-10-27',
  readTime: '10 min',
  focus: 'e bike batteries',
  secondary: ['electric bicycle battery', 'electric cycle battery', 'bicycle battery', 'e-bike battery', 'electric bicycle batteries australia'],
  tags: ['electric bike batteries australia', 'replacement batteries for electric bikes', 'batteries for electric bikes', 'e bike battery', 'electric bike battery', 'e cycle battery', 'batteries for electric bicycles', 'electric bike batteries', 'battery e bike', 'electric bike battery 48v'],
  image: {
    file: 'blog/e-bike-batteries.webp',
    alt: 'Three Vamos and Fatboy e bike batteries in 36V, 48V and 52V sizes side by side',
    query: 'e bike batteries',
    credit: null,
  },
  related: [
    { href: '/shop/batteries-chargers-and-electronics/vamos-battery-52v-20ah-samsung-cells/', name: 'Vamos Battery 52V 20Ah (Samsung Cells)', price: 1039, note: '1,040Wh pack, about $1.00 per Wh.' },
    { href: '/shop/batteries-chargers-and-electronics/fatboy-bagus-v1-v2-battery-52v-20ah/', name: 'Fatboy Bagus V1/V2 Battery 52V 20Ah', price: 1049, note: 'A 52V 20Ah replacement for the Bagus.' },
    { href: '/shop/batteries-chargers-and-electronics/vamos-amigo-2023-2024-battery-48v-15ah/', name: 'Vamos Amigo 2023-2024 Battery (48V 15Ah)', price: 759, note: '720Wh pack for the Amigo.' },
    { href: '/shop/batteries-chargers-and-electronics/vamos-hefe-battery-48v-15ah/', name: 'Vamos Hefe Battery (48V 15Ah Silverfish)', price: 539, note: 'The lowest price per Wh in our range.' },
    { href: '/shop/batteries-chargers-and-electronics/', name: 'All batteries, chargers and electronics', note: 'Packs, chargers and electronics.' },
  ],
  links: {
    to: [
      ['/shop/batteries-chargers-and-electronics/', 'e bike batteries'],
      ['/blog/e-bike-battery-charger/', 'e bike battery charger guide'],
      ['/blog/electric-moto-maintenance-lithium-safety/', 'lithium battery safety guide'],
    ],
    from: [
      ['/shop/batteries-chargers-and-electronics/', 'e bike batteries'],
      ['/shop/batteries-chargers-and-electronics/vamos-battery-52v-20ah-samsung-cells/', 'how to choose e bike batteries'],
      ['/shop/batteries-chargers-and-electronics/vamos-amigo-2023-2024-battery-48v-15ah/', 'how to choose a replacement e-bike battery'],
    ],
  },
  kind: 'post',
}

export const body = {
  hook: 'The right e bike batteries match your bike\'s voltage and connector first, then give you the most watt-hours you can afford. Here is how to read the numbers, compare packs and look after the one you buy.',
  intro: [
    'When you shop for e bike batteries, three numbers decide almost everything: voltage (V) must match your bike, amp hours (Ah) set how far you can ride, and multiplying the two gives watt-hours (Wh), the fairest way to compare price. A 52V 20Ah pack holds 1,040Wh, for example, while a 36V 13Ah pack holds 468Wh.',
    'This guide explains those numbers in plain language, compares the packs we stock in Australia on a price-per-watt-hour basis, shows how to match a replacement to your bike, and covers charging, storage and disposal using advice from Australian safety authorities. Prices are current Torque E-Bikes prices.',
  ],
  sections: [
    {
      h: 'E bike batteries at a glance: what we stock and what it costs',
      p: [
        'The table below lists the main packs in our [batteries, chargers and electronics](/shop/batteries-chargers-and-electronics/) range. Watt-hours are calculated as volts multiplied by amp hours, and price per watt-hour is the listed price divided by that figure, which lets you compare packs of different sizes honestly.',
      ],
      table: {
        head: ['Pack', 'Wh (V x Ah)', 'Price', 'Price per Wh'],
        rows: [
          ['[Vamos Hefe 48V 15Ah](/shop/batteries-chargers-and-electronics/vamos-hefe-battery-48v-15ah/)', '720', '$539', '$0.75'],
          ['[Vamos 52V 20Ah (Samsung cells)](/shop/batteries-chargers-and-electronics/vamos-battery-52v-20ah-samsung-cells/)', '1,040', '$1,039', '$1.00'],
          ['[Fatboy Bagus V1/V2 52V 20Ah](/shop/batteries-chargers-and-electronics/fatboy-bagus-v1-v2-battery-52v-20ah/)', '1,040', '$1,049', '$1.01'],
          ['[Vamos Amigo 48V 15Ah (Samsung cells)](/shop/batteries-chargers-and-electronics/vamos-amigo-2023-2024-battery-48v-15ah/)', '720', '$759', '$1.05'],
          ['Vamos 52V 25Ah (Samsung cells)', '1,300', '$1,419', '$1.09'],
          ['Vamos Samsung 36V 15Ah (Silverfish)', '540', '$659', '$1.22'],
          ['Vamos Doblez 36V 13Ah (Samsung cells)', '468', '$609', '$1.30'],
        ],
      },
    },
    {
      h: 'Voltage, amp hours and watt hours explained',
      p: [
        '**Voltage** is the electrical pressure the motor and controller are designed around. It is not flexible: a 48V system needs a 48V pack, and a 52V system needs a 52V pack. Fitting the wrong voltage can damage the controller or the battery.',
        '**Amp hours** describe how much charge the pack holds. At the same voltage, more Ah means more range. A 20Ah pack holds a third more than a 15Ah pack of the same voltage.',
        '**Watt hours** are volts multiplied by amp hours. This single figure is what you should compare when you are looking at an electric bicycle battery from different brands, because it captures both voltage and capacity. It also lets you check value: dividing the price by the watt hours gives the cost per Wh, as in the table above.',
        'Real range depends on your weight, terrain, wind, tyre pressure and how hard you use the motor, so any range figure is a guide only. Bigger watt-hour packs are heavier and cost more, so choose the size your riding actually needs rather than the biggest number on the page.',
      ],
    },
    {
      h: 'How to match replacement batteries for electric bikes',
      p: [
        'A replacement pack has to fit the bike physically and electrically. Work through this list before you order.',
      ],
      ul: [
        '**Voltage.** Match the voltage printed on your existing battery or in the owner\'s manual. If you are unsure, send us a photo of the label.',
        '**Connector and wiring.** Packs use specific plugs and a specific communication arrangement with the controller. A pack that matches the voltage can still be wrong for the bike.',
        '**Mounting and size.** Frame-mounted, rack-mounted and Silverfish-style packs are not interchangeable, so check the shape as well as the numbers.',
        '**Model fit.** Packs such as the [Fatboy Bagus V1/V2 52V 20Ah](/shop/batteries-chargers-and-electronics/fatboy-bagus-v1-v2-battery-52v-20ah/) and the [Vamos Amigo battery](/shop/batteries-chargers-and-electronics/vamos-amigo-2023-2024-battery-48v-15ah/) are listed for particular models, which is the safest route when your bike is one of those.',
        '**Charger.** Your charger must match the pack. See our guide to the [e bike battery charger](/blog/e-bike-battery-charger/) before you buy a pack on its own.',
      ],
      img: { file: 'blog/e-bike-batteries-vamos-52v-20ah.webp', alt: 'Vamos 52V 20Ah Samsung cell electric cycle battery pack', w: 720, h: 540 },
    },
    {
      h: 'Cells, protection and why the label matters',
      p: [
        'Several of our Vamos packs are listed with Samsung cells, which is useful to know because the cells are the part of a battery that determines its quality and consistency. Whatever the brand, a good pack also needs a battery management system that protects against over-charge, over-discharge and short circuits.',
        'The Australian Competition and Consumer Commission points out that there is currently no mandatory safety standard for lithium-ion batteries or products containing them, and advises buying from a reputable supplier and following the manufacturer\'s instructions. You can read that in the [ACCC Product Safety guide to lithium-ion batteries](https://www.productsafety.gov.au/consumers/be-safe-around-the-home/safely-use-batteries-and-technology/lithium-ion-batteries-guide). It also warns against using a battery designed for one product in another product, which is exactly why matching the pack to the bike matters.',
        'Fire and Rescue NSW adds a sharp warning on cheap, unprotected and second-hand packs: it says they have been involved in severe fires, particularly in DIY projects, and recommends that battery repairs and installations be done by an experienced e-bike mechanic. Our [lithium battery safety guide](/blog/electric-moto-maintenance-lithium-safety/) covers this in more depth.',
      ],
    },
    {
      h: 'Charging, storing and caring for your pack',
      p: [
        'A pack lasts longest when it is treated gently. Bosch eBike Systems, whose battery safety guidance is a good model for any pack, recommends the following in its [battery safety advice](https://www.bosch-ebike.com/us/service/battery-safety):',
      ],
      ul: [
        'Inspect the battery for damage before each charge.',
        'Charge in a dry, well-ventilated area between about 0 and 40 degrees Celsius, out of direct sunlight.',
        'For storage, keep the pack in a dry, well-ventilated place with a smoke detector, at roughly 30 to 60 per cent charge, and remove it from the bike for long periods of non-use if possible.',
        'Clean the surface with a damp cloth and never use a high-pressure washer or direct water spray.',
        'Do not open the battery housing, and do not leave a charging battery unattended.',
      ],
    },
    {
      h: 'Where and when to charge: Australian safety advice',
      p: [
        'Fire and Rescue NSW advises charging in an open area such as a garage or shed, away from exits, and only on hard surfaces that cannot burn, such as concrete or tiles. It also advises not charging while you sleep or are away from home, and disconnecting the battery once it is full. Its [e-bike battery safety page](https://www.fire.nsw.gov.au/fire-safety/home-fire-safety/topics/ebikes-escooters-battery-safety) is worth reading before you set up a charging spot.',
        'Never use a battery that is swollen, leaking, cracked, dented or overheating. Damaged packs should be kept outside in a ventilated area, away from buildings, and never put in household rubbish or recycling. Large e-bike batteries can be taken to a Community Recycling Centre or a Household Chemical CleanOut event in NSW, and other states have their own collection options.',
      ],
    },
    {
      h: 'How long e bike batteries last and when to replace one',
      p: [
        'All lithium packs lose capacity gradually with age and use, so the real question is not whether a battery wears but when the loss starts to matter. Manufacturers rate packs differently, and your own habits matter just as much: deep discharges, heat and long periods stored full or flat all shorten a battery\'s useful life.',
        'These are the signs that a pack is reaching the end of its useful life, or needs attention:',
      ],
      ul: [
        'Range has dropped noticeably compared with when the bike was new, on the same routes and with the same assist level.',
        'The bike cuts out under load, on hills or in cold weather, even though the display shows charge left.',
        'The pack gets unusually hot while charging or riding.',
        'The case is swollen, cracked or damaged, or the pack smells odd. Stop using it immediately.',
      ],
    },
    {
      h: 'Repair, replace or upgrade: what makes sense',
      p: [
        'If range has dropped but the pack is otherwise sound, replacing it with a matching pack is often cheaper than replacing the bike. If you want more range, a larger pack of the same voltage can be an upgrade, provided it fits the mounting and connector. Do not attempt to open or rebuild a pack yourself. Fire and Rescue NSW notes that a significant proportion of lithium battery incidents involve equipment built or engineered by inexperienced people, so repairs belong with an experienced e-bike mechanic.',
        'When you buy a replacement, keep the old pack safe until it is recycled, store it away from heat and flammable materials, and arrange disposal through an appropriate collection point rather than the bin.',
      ],
    },
    {
      h: 'Delivery, dangerous goods and what to ask us',
      p: [
        'Lithium batteries are Class 9 dangerous goods, so they ship under dangerous-goods rules. We ship Australia-wide as DG-certified shippers. Delivery is calculated as 10% of the goods total and is free from $9,900. Stock and delivery times to your postcode are confirmed when you contact us.',
        'High-powered packs for off-road bikes, such as those for Sur-Ron and E Ride Pro models, are for off-road and private property use only. Only a 250W pedal-assist e-bike is road legal in Australia, so check your state road authority rules before riding on public roads.',
        'If you cannot tell which pack fits your bike, message the team on WhatsApp with the model, year and a photo of the battery label. We would rather confirm fitment first than have you order the wrong pack.',
      ],
    },
    {
      h: 'Common mistakes when buying an electric bike battery',
      ul: [
        '**Buying on Ah alone.** A 20Ah 36V pack holds less energy than a 15Ah 52V pack. Compare watt hours.',
        '**Guessing the connector.** Voltage matching is necessary, not sufficient.',
        '**Choosing the cheapest unbranded pack.** Cheap, unprotected cells are the pattern fire authorities warn about.',
        '**Using any charger that fits.** A plug that fits is not a compatible charger. Check voltage and current.',
        '**Charging overnight on a bed or carpet.** Follow the charging advice above.',
        '**Leaving a flat battery in storage.** Store at partial charge and check on it periodically.',
      ],
    },
  ],
  faq: [
    {
      q: 'How do I know which e bike batteries fit my bike?',
      a: 'Match the voltage, connector and mounting style first, then compare capacity. The label on your current battery shows the voltage and amp hours. If you cannot find it or the bike is imported, send us the model, year and a photo of the battery and we will confirm what fits before you order.',
    },
    {
      q: 'Is a higher amp hour battery always better?',
      a: 'Not always. More amp hours gives more range at the same voltage, but the pack is heavier, costs more and must still be the right voltage and connector for your bike. Compare watt hours, which combine voltage and amp hours, and choose the size your regular rides actually need.',
    },
    {
      q: 'Can I charge an e-bike battery overnight?',
      a: 'Fire and Rescue NSW advises not to charge batteries while you sleep or are not at home, and to disconnect the battery once it is full. Charge in a garage or shed on a hard, non-flammable surface, with a working smoke alarm nearby, and use the charger made for that battery.',
    },
    {
      q: 'How should I store an e-bike battery for a long time?',
      a: 'Bosch recommends storing the pack in a dry, well-ventilated place with a smoke detector, at about 30 to 60 per cent charge, away from heat and flammable materials. Remove it from the bike if the bike will not be used for a long period, and inspect it for damage before charging again.',
    },
    {
      q: 'How do I dispose of an old e-bike battery?',
      a: 'Never put it in household rubbish or recycling. In NSW, large e-bike batteries can go to a Community Recycling Centre or Household Chemical CleanOut event, and the ACCC points to Recycle Mate and B-Cycle for options. If the battery is damaged, keep it outside and away from buildings until you can take it in.',
    },
  ],
  keywords: { primary: 'e bike batteries', supporting: ['electric bicycle battery', 'electric cycle battery', 'bicycle battery', 'e-bike battery', 'electric bicycle batteries australia'] },
  words: 0,
}
