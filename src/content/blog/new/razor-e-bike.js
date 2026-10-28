// Blog post written to the blog-post rule (see ~/.claude/skills/blog-post/SKILL.md).
// Keywords: volume / KD / intent from Semrush AU Keyword Magic (27-28 Oct 2026), recorded in docs/used-keywords.csv.
// Sources opened 27 Oct 2026: Queensland Government electric bicycle rules page (bikes without pedals are motorcycles, 250W limit) and the Queensland motorcycle safety gear page (helmet standard, goggles, gloves, boots, back protector).
// Product pages publish no speed, battery or age figures for the Razor MX bikes, so the post claims only names, brand, prices and the off-road/private property listing.
export const meta = {
  id: 'razor-e-bike',
  slug: 'razor-e-bike',
  url: '/blog/razor-e-bike/',
  title: 'Razor E Bike: Razor MX350, MX400, MX500 and MX650 Dirt Bikes',
  seoTitle: 'Razor E Bike: Razor MX350, MX400, MX500 and MX650',
  excerpt: 'Looking for a Razor e bike? Compare Razor MX350, MX400, MX500 and MX650 electric dirt bikes from $499, with off-road rules, safety gear and buying advice.',
  category: 'Buying Guides',
  date: '2026-10-28',
  readTime: '10 min',
  focus: 'razor e bike',
  secondary: ['razor bike', 'razor motocross bike', 'razor mx500', 'razor motorbike', 'razor bikes'],
  tags: ['razor mx350', 'razor mx650', 'razor bicycle', 'razor mx 500', 'razor mx 350', 'razor dirt bikes', 'razor electric motorcycle', 'e bikes razor', 'razor mini motorcycle', 'razor dirtbike'],
  image: {
    file: 'blog/razor-e-bike.webp',
    alt: 'Razor MX350, MX400 and MX500 electric dirt bikes, a Razor e bike range',
    query: 'razor e bike',
    credit: null,
  },
  related: [
    { href: '/shop/kids-electric-dirt-and-balance-bikes/razor-mx350/', name: 'Razor MX350', price: 499, note: 'The lowest-priced Razor MX. Off-road and private property use only.' },
    { href: '/shop/kids-electric-dirt-and-balance-bikes/razor-mx400/', name: 'Razor MX400', price: 599, note: 'Off-road and private property use only.' },
    { href: '/shop/kids-electric-dirt-and-balance-bikes/razor-mx500/', name: 'Razor MX500', price: 899, note: 'Off-road and private property use only.' },
    { href: '/shop/kids-electric-dirt-and-balance-bikes/razor-mx650/', name: 'Razor MX650', price: 1299, note: 'The top Razor MX in our range. Off-road and private property use only.' },
    { href: '/shop/kids-electric-dirt-and-balance-bikes/', name: 'All kids electric dirt and balance bikes', note: 'Kids dirt bikes and balance bikes.' },
  ],
  links: {
    to: [
      ['/shop/kids-electric-dirt-and-balance-bikes/', 'kids electric dirt and balance bikes'],
      ['/blog/kids-electric-dirt-bikes/', 'kids electric dirt bikes guide'],
      ['/blog/motorbike-goggles/', 'motorbike goggles buying guide'],
      ['/blog/helmets-and-protective-gear-for-e-bikes/', 'helmets and protective gear guide'],
    ],
    from: [
      ['/shop/kids-electric-dirt-and-balance-bikes/', 'razor e bike buying guide'],
      ['/shop/kids-electric-dirt-and-balance-bikes/razor-mx500/', 'how to choose a razor e bike'],
      ['/shop/kids-electric-dirt-and-balance-bikes/razor-mx350/', 'razor motocross bike: what to check'],
    ],
  },
  kind: 'post',
}

export const body = {
  hook: 'A Razor e bike in our range is an electric dirt bike for off-road and private property use only. Choose the model, buy the protective gear first and check the Razor specifications before you decide.',
  intro: [
    'A Razor e bike is a small electric motocross-style bike, and our range includes four models: the Razor MX350, MX400, MX500 and MX650. They are electric dirt bikes, not pedal e-bikes, so they are for off-road and private property use only. This guide explains how the four compare on price, how to choose between them, what protective gear to buy and what Australian rules say about bikes without pedals.',
    'We list the four Razor bikes from $499 to $1,299, cover choosing by rider size and skill, set out Queensland\'s safety gear advice and answer the questions parents and riders ask. Prices are current Torque E-Bikes prices. Check Razor\'s own specifications for speed, battery and rider limits before you order.',
  ],
  sections: [
    {
      h: 'Razor e bike models in our range and their prices',
      p: [
        'Our [kids electric dirt and balance bikes](/shop/kids-electric-dirt-and-balance-bikes/) range includes four Razor MX bikes. Product pages publish the brand and price, and each is listed as off-road and private property use only, not registrable or road legal in Australia. Ask us for Razor\'s specifications and for advice on matching a model to the rider.',
      ],
      table: {
        head: ['Model', 'Brand', 'Price', 'Use'],
        rows: [
          ['[Razor MX350](/shop/kids-electric-dirt-and-balance-bikes/razor-mx350/)', 'Razor', '$499', 'Off-road and private property only'],
          ['[Razor MX400](/shop/kids-electric-dirt-and-balance-bikes/razor-mx400/)', 'Razor', '$599', 'Off-road and private property only'],
          ['[Razor MX500](/shop/kids-electric-dirt-and-balance-bikes/razor-mx500/)', 'Razor', '$899', 'Off-road and private property only'],
          ['[Razor MX650](/shop/kids-electric-dirt-and-balance-bikes/razor-mx650/)', 'Razor', '$1,299', 'Off-road and private property only'],
        ],
      },
    },
    {
      h: 'What kind of bike is a Razor motorbike?',
      p: [
        'People searching for a Razor bike, a Razor motocross bike or a Razor mini motorcycle usually mean the MX range of small electric dirt bikes. They are small electric dirt bikes in a motocross style, and they are not pedal bikes.',
        'That matters for the law. The Queensland Government\'s [electric bicycle rules page](https://www.qld.gov.au/transport/safety/rules/wheeled-devices/electric-bicycle-rules) says electric motorcycles, mopeds and dirt bikes can look like e-bikes but don\'t have pedals and can go very fast under throttle power. It says they need registration, insurance and a licence for Queensland roads, and they are not allowed on paths. A Razor MX is therefore for private land and off-road venues, not for the street or the footpath.',
        'Used that way, they are a popular first electric dirt bike for younger riders and for adults who want a small, quiet bike for a paddock or a track. They are much simpler than a petrol dirt bike: no clutch, no fuel and very little maintenance.',
      ],
    },
    {
      h: 'Razor MX350, MX400, MX500 and MX650: how to choose',
      ul: [
        '**Rider size and age.** The models step up in size and power. Check Razor\'s published rider recommendations and the seat height for the rider, and let a child sit on the bike before you buy.',
        '**Skill and confidence.** A first-time rider does well on the entry model. A rider who is outgrowing a smaller bike or wants more speed can look at the larger models.',
        '**Price.** The range runs from $499 to $1,299. The MX350 at $499 is the entry point, the MX400 at $599 is the next step, the MX500 at $899 is a bigger bike and the MX650 at $1,299 is the top of our Razor range.',
        '**Where you will ride.** A small backyard suits the smaller bikes. A bigger paddock or track suits a larger model.',
        '**Growth.** Kids grow quickly. A bike that fits now and for a year or two is better than one that is too big to control.',
        '**Supervision.** A younger rider needs an adult nearby. Set boundaries and teach throttle control before they ride alone.',
      ],
      img: { file: 'blog/razor-e-bike-mx500.webp', alt: 'Razor MX500 electric dirt bike', w: 720, h: 540 },
    },
    {
      h: 'Protective gear for a Razor MX: helmet, goggles, gloves, boots and armour',
      p: [
        'The Queensland Government\'s [motorcycle safety gear page](https://www.qld.gov.au/transport/safety/road-safety/motorcycle-safety/safety-gear) is written for road motorcyclists, but its advice is a sound guide for any motorbike rider. It says riders should wear a helmet that complies with the Australian standard (AS/NZS 1698 or AS 1698) and use a clear visor or goggles that are shatterproof without scratches. It recommends gauntlet-style gloves with a strengthened palm and knuckle protection, leather boots with fasteners that will not slide off and without laces that can catch on pegs, a back protector with dual density foam, and long, abrasion-resistant pants and a jacket that cover the arms, legs and body.',
        'For a Razor MX, that means a proper motocross helmet, goggles, gloves, boots and body armour before the first ride. Our range includes the [Apollo RXF motocross helmet at $94.95](/shop/helmets-gloves-and-protection/apollo-rxf-motocross-helmet/) and the [Havoc Infinity MX helmet at $119](/shop/helmets-gloves-and-protection/havoc-infinity-mx-helmet/), and the [79Bike protective armour at $189](/shop/helmets-gloves-and-protection/79bike-protective-armour/). See our [motorbike goggles guide](/blog/motorbike-goggles/) and [helmets and protective gear guide](/blog/helmets-and-protective-gear-for-e-bikes/).',
        'Fit matters as much as the label. A helmet must fit the rider\'s head, not be big enough to grow into. Check the size chart or send us a head measurement.',
      ],
    },
    {
      h: 'Where you can ride a Razor e bike',
      p: [
        'A Razor MX is for off-road and private property use. That means private land with the owner\'s permission, and off-road riding areas or tracks that allow electric dirt bikes. It is not for public roads, footpaths, shared paths, parks or reserves unless the land manager specifically allows it.',
        'Check the rules of any track before you go, and check local council rules for riding on private land, including noise and neighbours. If the property is shared or near others, ride at a time and in a place that respects them.',
        'Electric dirt bikes are quiet compared with petrol bikes, which helps with neighbours, but they can still go fast. Keep riders within sight and teach them to stop and think before they set off.',
      ],
    },
    {
      h: 'Electric or petrol: why parents and riders choose electric',
      ul: [
        '**Quiet running.** An electric motor makes far less noise than an engine, which is easier on neighbours and on a child\'s ears.',
        '**Simple controls.** Electric dirt bikes generally have a throttle and brakes, with no clutch and no kick starting. Check the model\'s own controls.',
        '**Low maintenance.** No oil, spark plugs or fuel. You still need to check tyres, brakes, chain and bolts.',
        '**Instant power.** Electric motors deliver torque immediately, so teach gentle throttle use.',
        '**Charging.** Charge at home with the supplied charger, on a hard surface and with a smoke alarm nearby.',
        '**Battery care.** Lithium batteries need correct charging and storage; see our [lithium battery safety guide](/blog/electric-moto-maintenance-lithium-safety/).',
      ],
    },
    {
      h: 'Buying advice: what to ask before you order a Razor bike',
      ul: [
        '**Confirm the rider fit.** Send us the rider\'s height and weight and ask which model suits.',
        '**Ask for the specifications.** Top speed, range, charging time and weight limits are published by Razor.',
        '**Check delivery.** We ship Australia-wide and our shipping is dangerous-goods certified because of the lithium battery.',
        '**Plan where you will ride.** Confirm you have a suitable private place or track.',
        '**Budget for gear.** A helmet, goggles, gloves, boots and armour add to the price, and they matter more than the bike.',
        '**Ask about spares.** Tyres, brake pads and chains wear, so check that parts are available.',
      ],
    },
    {
      h: 'Teaching a new rider on a small electric dirt bike',
      p: [
        'Start in an open, flat area with no obstacles. Have the rider sit on the bike with the power off and practise the brakes and the throttle position. Then let them ride slowly in a straight line, stop and start, and ride a large circle. Increase the challenge only when they are relaxed and in control.',
        'Teach them to look where they want to go, keep both hands on the bars and keep their feet on the pegs. Show them how to fall: let go and avoid putting an arm out stiffly. Check their gear each ride and keep sessions short at first, since tired riders make mistakes.',
        'Our [kids electric dirt bikes guide](/blog/kids-electric-dirt-bikes/) covers choosing a bike for young riders in more detail.',
      ],
    },
    {
      h: 'Razor e bike mistakes to avoid',
      ul: [
        '**Riding on the road or path.** These bikes are off-road and private property only.',
        '**Skipping protective gear.** Buy the helmet, goggles, gloves, boots and armour first.',
        '**Buying too big.** A bike that is too large is harder to control.',
        '**Ignoring supervision.** Younger riders need an adult nearby.',
        '**Charging carelessly.** Follow lithium battery safety advice.',
        '**Not checking the bike.** Look at tyres, brakes, chain and bolts before every ride.',
      ],
    },
    {
      h: "Looking after a Razor MX: a simple pre-ride and after-ride routine",
      ul: [
        "Check the tyres for pressure and damage, and look for objects stuck in the tread.",
        "Squeeze both brakes and check that they stop the wheel firmly.",
        "Look over the chain, sprockets and bolts for looseness or wear.",
        "Check the throttle returns smoothly when released and the kill switch or stop control works.",
        "After riding, wipe off dust and mud, and store the bike dry.",
        "Charge the battery on a hard surface when it has cooled, and do not leave it charging overnight.",
        "Keep a spare set of brake pads, a tube and basic tools in the kit bag.",
      ],
    },
    {
      h: 'Which Razor e bike should you buy?',
      p: [
        'If you want the lowest price, the [Razor MX350 at $499](/shop/kids-electric-dirt-and-balance-bikes/razor-mx350/) is the entry point. The [MX400 at $599](/shop/kids-electric-dirt-and-balance-bikes/razor-mx400/) is the next step, the [MX500 at $899](/shop/kids-electric-dirt-and-balance-bikes/razor-mx500/) is the larger bike and the [MX650 at $1,299](/shop/kids-electric-dirt-and-balance-bikes/razor-mx650/) is the top Razor MX in our range. All four are for off-road and private property use only.',
        'Send us the rider\'s height, weight and experience and where you will ride, and we will suggest a model and confirm availability. You can also browse the full [kids electric dirt and balance bikes range](/shop/kids-electric-dirt-and-balance-bikes/).',
      ],
    },
  ],
  faq: [
    { q: 'Is a Razor MX bike road legal in Australia?', a: 'No. Our Razor MX bikes are listed for off-road and private property use only. The Queensland Government says dirt bikes without pedals need registration, insurance and a licence for roads and are not allowed on paths.' },
    { q: 'Which Razor MX is best for a beginner?', a: 'The entry model suits a first-time rider, and a bigger model suits a larger or more experienced rider. Check Razor\'s rider recommendations and send us the rider\'s height and weight, and we will suggest a model.' },
    { q: 'What gear does a rider need for a Razor dirt bike?', a: 'A helmet that meets the Australian standard, shatterproof goggles, gauntlet-style gloves, boots, a back protector and abrasion-resistant clothing covering arms and legs, as the Queensland motorcycle safety gear page advises.' },
    { q: 'How much does a Razor e bike cost?', a: 'In our range the Razor MX350 is $499, the MX400 is $599, the MX500 is $899 and the MX650 is $1,299. Prices are current at the time of writing.' },
    { q: 'How do I charge a Razor MX safely?', a: 'Use the supplied charger on a hard surface, with a smoke alarm nearby, and never charge unattended or overnight. Follow our lithium battery safety advice and the maker\'s instructions.' },
    { q: 'Do you ship Razor bikes Australia-wide?', a: 'Yes. We ship Australia-wide with dangerous-goods certified shipping because of the lithium battery. Ask us for delivery details to your postcode.' },
  ],
  keywords: { primary: 'razor e bike', supporting: ['razor bike', 'razor motocross bike', 'razor mx500', 'razor motorbike', 'razor bikes'] },
  words: 0,
}
