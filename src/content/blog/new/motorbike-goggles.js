// Blog post written to the blog-post rule (see ~/.claude/skills/blog-post/SKILL.md).
// Keywords: volume / KD / intent from Semrush AU Keyword Magic (27 Oct 2026), recorded in docs/used-keywords.csv.
// Sources opened 27 Oct 2026: Queensland Government motorcycle safety gear page (helmet standard, goggles, gloves, back protector) and the Queensland electric bicycle rules page.
// Product pages publish no goggle specifications (lens, strap, ratings), so the post claims only names, brands, prices and the off-road/private property listing.
export const meta = {
  id: 'motorbike-goggles',
  slug: 'motorbike-goggles',
  url: '/blog/motorbike-goggles/',
  title: 'Motorbike Goggles: How to Choose MX Goggles for Dirt Bikes',
  seoTitle: 'Motorbike Goggles: How to Choose MX Goggles for Dirt Bikes',
  excerpt: 'Choosing motorbike goggles for an electric dirt bike? Compare 79Bike off-road goggles at $119, MX helmets and armour, and learn fit, lens and care tips.',
  category: 'Buying Guides',
  date: '2026-10-27',
  readTime: '9 min',
  focus: 'motorbike goggles',
  secondary: ['dirt bike goggles', 'motocross goggles', 'mx goggles', 'goggles moto', 'moto goggles'],
  tags: ['goggles for dirt bike', 'bike goggles', 'dirtbike goggles', 'motor bike goggles', 'mountain biking goggles', 'mtb bike goggles', 'motorcross goggles', 'goggles dirt bike', 'enduro goggles', 'mx goggle'],
  image: {
    file: 'blog/motorbike-goggles.webp',
    alt: '79Bike off-road motorbike goggles with MX helmets and protective armour',
    query: 'motorbike goggles',
    credit: null,
  },
  related: [
    { href: '/shop/helmets-gloves-and-protection/79bike-off-road-goggles/', name: '79Bike Off-Road Goggles', price: 119, note: 'Off-road and private property use only.' },
    { href: '/shop/helmets-gloves-and-protection/apollo-rxf-motocross-helmet/', name: 'Apollo RXF Motocross Helmet', price: 94.95, note: 'A motocross helmet to pair with goggles.' },
    { href: '/shop/helmets-gloves-and-protection/havoc-infinity-mx-helmet/', name: 'Havoc Infinity MX Helmet', price: 119, note: 'A motocross helmet to pair with goggles.' },
    { href: '/shop/helmets-gloves-and-protection/79bike-protective-armour/', name: '79Bike Protective Armour', price: 189, note: 'Off-road and private property use only.' },
    { href: '/shop/helmets-gloves-and-protection/', name: 'All helmets, gloves and protection', note: 'Helmets, gloves, goggles and armour.' },
  ],
  links: {
    to: [
      ['/shop/helmets-gloves-and-protection/', 'helmets, gloves and protection'],
      ['/blog/helmets-and-protective-gear-for-e-bikes/', 'helmets and protective gear guide'],
      ['/blog/kids-electric-dirt-bikes/', 'kids electric dirt bikes guide'],
      ['/blog/electric-vs-petrol-dirt-bikes/', 'electric vs petrol dirt bikes guide'],
    ],
    from: [
      ['/shop/helmets-gloves-and-protection/', 'motorbike goggles buying guide'],
      ['/shop/helmets-gloves-and-protection/79bike-off-road-goggles/', 'how to choose motorbike goggles'],
      ['/shop/helmets-gloves-and-protection/havoc-infinity-mx-helmet/', 'mx goggles: what to check'],
    ],
  },
  kind: 'post',
}

export const body = {
  hook: 'Motorbike goggles keep dust, roost and branches out of your eyes. Choose a pair that fits your helmet, seals around your face, gives a clear view and is made for off-road riding.',
  intro: [
    'Motorbike goggles are a strapped eye shield that seals around your eyes, so dust, mud and flying stones stay out. On an electric dirt bike you ride in the dirt and sand and behind other riders, so a clear, secure view matters as much as the helmet. This guide helps you choose motorbike goggles that fit your helmet and your face, compares the options in our range from $119 and covers lens care and what else to wear.',
    'We explain how motocross goggles differ from sunglasses, set out Queensland\'s advice on eye protection, cover fit with MX helmets and answer the common questions. Prices are current Torque E-Bikes prices, and our off-road goggles and armour are for off-road and private property use only.',
  ],
  sections: [
    {
      h: 'Motorbike goggles and MX gear in our range',
      p: [
        'Our [helmets, gloves and protection](/shop/helmets-gloves-and-protection/) range includes off-road goggles, two motocross helmets and protective armour. Product pages publish the brand and price but not lens details, so ask us for the maker\'s specifications and fit advice before you order.',
      ],
      table: {
        head: ['Product', 'Brand', 'Price', 'Notes'],
        rows: [
          ['[79Bike Off-Road Goggles](/shop/helmets-gloves-and-protection/79bike-off-road-goggles/)', '79Bike', '$119', 'Off-road and private property use only'],
          ['[Apollo RXF Motocross Helmet](/shop/helmets-gloves-and-protection/apollo-rxf-motocross-helmet/)', 'Apollo', '$94.95', 'Motocross helmet'],
          ['[Havoc Infinity MX Helmet](/shop/helmets-gloves-and-protection/havoc-infinity-mx-helmet/)', 'Havoc', '$119', 'Motocross helmet'],
          ['[79Bike Protective Armour](/shop/helmets-gloves-and-protection/79bike-protective-armour/)', '79Bike', '$189', 'Off-road and private property use only'],
        ],
      },
    },
    {
      h: 'Why dirt bike goggles matter more than sunglasses',
      p: [
        'Sunglasses cut glare, but they leave gaps around the edges where dust and grit get in, and ordinary lenses can shatter in a crash. Goggles seal against your face with a foam surround and are held by a wide strap, so they stay put when the bike bounces. On a dusty track, the difference is obvious within the first lap.',
        'The Queensland Government\'s [motorcycle safety gear page](https://www.qld.gov.au/transport/safety/road-safety/motorcycle-safety/safety-gear) says riders should use a clear visor or goggles for night and make sure they are shatterproof without scratches. It adds that if the helmet meets an Australian standard, the visor or goggles must meet AS 1609. That page is written for road motorcyclists, but the advice about clear, scratch-free, shatterproof eye protection applies to anyone riding fast with the dirt flying.',
        'Scratched lenses scatter light and strain your eyes, particularly low sun. Treat a scratched lens as a safety problem, not a cosmetic one.',
      ],
    },
    {
      h: 'MX goggles and MX helmets: getting the fit right',
      p: [
        'A goggle that does not suit your helmet will gap at the brow or press on your nose. Before you buy, check these points:',
      ],
      ul: [
        '**Helmet eye port.** Motocross helmets have a large opening. The goggle frame should sit flush against your face inside it, with the foam touching evenly.',
        '**Strap length and grip.** The strap must reach around your helmet and sit across the back, not ride up onto the helmet\'s peak. Silicone grip lines hold it in place.',
        '**Nose clearance.** You need room to breathe and to fit a nose guard or roost deflector if you use one.',
        '**Glasses wearers.** If you wear glasses, check for a goggle with enough depth, or ask us about options.',
        '**Face shape.** A narrow face and a wide face need different frames. Try the goggle with your helmet on.',
        '**Foam.** Soft, thick foam seals better and is more comfortable. Check for dense multi-layer foam.',
      ],
      img: { file: 'blog/motorbike-goggles-79bike-off-road.webp', alt: '79Bike off-road goggles for dirt bike and motocross riding', w: 720, h: 540 },
    },
    {
      h: 'Lens, ventilation and fogging: what to look for',
      ul: [
        '**Lens clarity.** A distortion-free lens stops eye strain. Check for scratches before you buy.',
        '**Lens colour.** Clear lenses suit shade, dusk and overcast days. Tinted and mirrored lenses cut glare in bright sun. Having a spare clear lens is wise.',
        '**Anti-fog.** Goggles fog when you stop and warm up. Anti-fog coatings and vents help, but they do not remove fog fully.',
        '**Ventilation.** Vents in the frame let air through to keep the lens clear. Too much airflow lets in dust, so it is a trade-off.',
        '**Tear-offs and roll-offs.** In mud, tear-off films or a roll-off system keep your view clear. Check compatibility with the goggle.',
        '**Impact resistance.** Look for a lens made to resist impact from stones and branches. Ask the maker for details.',
      ],
    },
    {
      h: 'Dirt bike goggles for kids and smaller riders',
      p: [
        'Children need goggles sized for a smaller face, not adult goggles with a tight strap. A poor fit leaves gaps at the sides and lets in dust, and a big frame can slide off. Check the youth sizing, and try them with the child\'s helmet.',
        'Our [kids electric dirt bikes guide](/blog/kids-electric-dirt-bikes/) covers choosing a bike, and the protective gear should be chosen before the first ride, not after.',
        'Teach children to replace goggles when they are scratched, and to keep a spare lens or goggle in the kit bag.',
      ],
    },
    {
      h: 'Goggles are part of the kit: helmet, gloves and armour',
      p: [
        'Goggles are one piece of the set. The Queensland motorcycle safety gear page lists a helmet that complies with an Australian standard (AS/NZS 1698 or AS 1698) as the base, then gauntlet-style gloves with a strengthened palm and knuckle protection, leather boots with secure fasteners, and long, abrasion-resistant pants and a jacket that cover your arms, legs and body. It also recommends a back protector and kidney protector.',
        'For off-road riding, our [Apollo RXF motocross helmet at $94.95](/shop/helmets-gloves-and-protection/apollo-rxf-motocross-helmet/) and [Havoc Infinity MX helmet at $119](/shop/helmets-gloves-and-protection/havoc-infinity-mx-helmet/) are made for the job. Add [79Bike protective armour at $189](/shop/helmets-gloves-and-protection/79bike-protective-armour/) for chest and back protection. Our [helmets and protective gear guide](/blog/helmets-and-protective-gear-for-e-bikes/) covers the full set.',
        'The page is written for road motorcyclists. For off-road riding, the same principle applies: full coverage and good fit.',
      ],
    },
    {
      h: 'Where you can ride: off-road and private property only',
      p: [
        'Electric dirt bikes above 250W are for off-road and private property use only in Australia. The Queensland Government\'s [electric bicycle rules page](https://www.qld.gov.au/transport/safety/rules/wheeled-devices/electric-bicycle-rules) sets out that a legal e-bike has 250W continuous power and limits on assistance, and that bikes above that are not allowed on public roads or paths. Our 79Bike goggles and armour are listed for off-road and private property use only.',
        'Always check the rules where you ride and get the landowner\'s permission. Our [electric vs petrol dirt bikes guide](/blog/electric-vs-petrol-dirt-bikes/) compares the two for riders deciding what to buy.',
      ],
    },
    {
      h: 'Looking after your goggles',
      p: [
        'Rinse dust off with clean water and let the goggles dry in the air. Wipe the lens gently with the microfibre bag supplied, not with a dirty glove or shirt, which scratches it. Never wipe a dusty lens dry.',
        'Store goggles in their bag, away from the sun and chemicals. Check the foam and strap for wear, and replace them when they flatten or perish. Replace a lens when it is scratched in the line of sight.',
        'Keep spares of tear-offs and a clean lens in your kit. Our [bike cover guide](/blog/bicycle-cover/) covers storing the bike when you are not riding.',
      ],
    },
    {
      h: 'Motorbike goggles mistakes to avoid',
      ul: [
        '**Using sunglasses off-road.** They do not seal and can shatter.',
        '**Ignoring helmet fit.** A gap at the brow lets in dust.',
        '**Riding with scratched lenses.** They scatter light and tire your eyes.',
        '**Wiping a dusty lens dry.** It scratches.',
        '**Buying adult goggles for a child.** Choose youth sizing.',
        '**Skipping the rest of the kit.** Eye protection is one piece.',
      ],
    },
    {
      h: "Lens choice by conditions: sun, shade, dust and mud",
      p: [
        "A single lens rarely suits every ride. Clear lenses work in shade, forest tracks and at dusk. Tinted or mirrored lenses cut glare in open, sunny country but can be too dark under trees. Many riders carry a spare clear lens and swap as the light changes.",
        "In dust, a tight seal and clean foam matter more than the lens colour. Keep the foam free of caked dirt, which opens gaps. In mud, tear-offs or roll-offs let you clear the lens without stopping. Check that the system fits your goggle before you buy.",
        "Sand and fine dust scratch lenses fast. Avoid wiping a dry lens, let loose dust fall off or blow it away first, and wipe gently with the microfibre bag.",
      ],
    },
    {
      h: "A quick pre-ride check for goggles and helmet",
      ul: [
        "**Lens.** Clean and free of deep scratches in your line of sight.",
        "**Strap.** Sound, not stretched, with the grip lines intact.",
        "**Foam.** Soft, even and not crumbling.",
        "**Fit.** Goggles sit flush inside the helmet's eye port with no gap at the brow or nose.",
        "**Helmet.** Fastened, the right size and in date. Replace a helmet after a significant impact.",
        "**Spares.** A clean lens or tear-offs in the kit bag.",
      ],
    },
    {
      h: 'Which motorbike goggles should you buy?',
      p: [
        'In our range, the [79Bike off-road goggles at $119](/shop/helmets-gloves-and-protection/79bike-off-road-goggles/) are the goggle option, listed for off-road and private property use only. Pair them with a motocross helmet and check the fit on your face before you ride. Ask us for the maker\'s specifications and for advice on matching goggles to a helmet.',
        'Browse the full [helmets, gloves and protection range](/shop/helmets-gloves-and-protection/) and message us with your riding plans for gear advice.',
      ],
    },
  ],
  faq: [
    { q: 'What are the best goggles for dirt bike riding?', a: 'The best goggle is one that fits your helmet and face, seals against dust, has a clear shatterproof lens and suits the light you ride in. Try them with your helmet on, and ask us for the maker\'s details.' },
    { q: 'Do goggles go with any motocross helmet?', a: 'Mostly, but check. The frame must sit flush inside the helmet\'s eye port, and the strap must fit around the shell. Try them together before you ride.' },
    { q: 'What does Queensland say about goggles?', a: 'The Queensland Government says riders should use a clear visor or goggles for night and make sure they are shatterproof without scratches. If the helmet meets an Australian standard, the visor or goggles must meet AS 1609.' },
    { q: 'How do I stop my goggles fogging?', a: 'Choose a goggle with anti-fog treatment and good ventilation, keep the lens clean, and do not push them up onto your helmet while you are hot. Fogging cannot be removed completely.' },
    { q: 'Can I use mountain bike goggles on a dirt bike?', a: 'Some mountain bike goggles are made for slower speeds. Check the impact rating and fit with your helmet. For an electric dirt bike, choose goggles made for off-road motorbikes.' },
    { q: 'Are the 79Bike goggles road legal?', a: 'They are listed for off-road and private property use only. Check your state rules before riding on public roads, and remember bikes above 250W are not road legal in Australia.' },
  ],
  keywords: { primary: 'motorbike goggles', supporting: ['dirt bike goggles', 'motocross goggles', 'mx goggles', 'goggles moto', 'moto goggles'] },
  words: 0,
}
