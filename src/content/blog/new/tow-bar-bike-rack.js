// Blog post written to the blog-post rule (see ~/.claude/skills/blog-post/SKILL.md).
// Keywords: volume / KD / intent from Semrush AU Keyword Magic (6 Nov 2026), recorded in docs/used-keywords.csv and docs/blog-plan-batches-2026-11-06.html.
// Sources opened 6 Nov 2026: Queensland Government "transporting bicycles" page (overhang, plate and light rules) and the accessory plates page.
// Product facts: EziGrip E-Bike 2 platform rack per the supplier listing (60 kg, 4 function light board, 250 mm bike spacing, 1400 mm wheelbase, tilt). The listing does not state the mounting type, so the post tells buyers to confirm tow ball fit with us.
// Companion post to /blog/car-bike-rack/: this one covers tow bar maths, mounting and loading; that one covers rack styles overall.
export const meta = {
  id: 'tow-bar-bike-rack',
  slug: 'tow-bar-bike-rack',
  url: '/blog/tow-bar-bike-rack/',
  title: 'Tow Bar and Bike Rack: E-Bike Fit, Weight and Qld Rules',
  seoTitle: 'Tow Bar and Bike Rack: E-Bike Fit, Weight and Qld Rules',
  excerpt: 'Choosing a tow bar and bike rack for e-bikes? Do the weight sums, check overhang, plate and light rules in Queensland and see the EziGrip platform rack at $899.',
  category: 'Buying Guides',
  date: '2026-11-06',
  readTime: '10 min',
  focus: 'tow bar and bike rack',
  secondary: ['tow bar cycle rack', 'tow bar cycle carrier', 'bike roof bars', 'bike on rack', 'vertical bicycle rack'],
  tags: ['auto bike rack', 'bike rack for vehicle', 'towbar mounted cycle rack', 'bike holder tow bar', 'towbar mounted cycle carrier', 'bicycle rack on towbar', 'bike rack tow bar', 'tow hitch bike carrier', 'receiver hitch bike carrier', 'cycle roof rack'],
  image: {
    file: 'blog/tow-bar-bike-rack.webp',
    alt: 'Tow bar and bike rack kit: EziGrip E-Rack 2 platform rack with a Blastoff bike cover and Kovix alarmed folding lock',
    query: 'tow bar and bike rack',
    credit: null,
  },
  related: [
    { href: '/shop/racks-bags-and-trailers/car-rack-ezigrip-e-rack-2-deluxe-foldable/', name: 'Car Rack EziGrip E-Rack 2 Deluxe/Foldable', price: 899, note: 'A two-bike platform rack for e-bikes.' },
    { href: '/shop/racks-bags-and-trailers/blastoff-bike-cover/', name: 'Blastoff Bike Cover', price: 79, note: 'Protects a bike on the rack.' },
    { href: '/shop/locks-and-security/kovix-steel-thunder-alarmed-folding-lock/', name: 'Kovix Steel Thunder Alarmed Folding Lock', price: 109, note: 'An alarmed folding lock.' },
    { href: '/shop/locks-and-security/mastiff-chain-lock-keyed/', name: 'Mastiff Chain-Lock Keyed', price: 99, note: 'A keyed chain lock.' },
    { href: '/shop/racks-bags-and-trailers/', name: 'All racks, bags and trailers', note: 'Racks, trailers, bags and covers.' },
  ],
  links: {
    to: [
      ['/shop/racks-bags-and-trailers/', 'racks, bags and trailers'],
      ['/blog/car-bike-rack/', 'car bike rack guide'],
      ['/blog/bicycle-cover/', 'bicycle cover guide'],
      ['/blog/bike-chain-padlock/', 'bike chain padlock guide'],
    ],
    from: [
      ['/shop/racks-bags-and-trailers/', 'tow bar and bike rack'],
      ['/shop/racks-bags-and-trailers/car-rack-ezigrip-e-rack-2-deluxe-foldable/', 'tow bar cycle rack: fit and weight'],
      ['/shop/racks-bags-and-trailers/blastoff-bike-cover/', 'tow bar cycle carrier: protecting your bike'],
    ],
  },
  kind: 'post',
}

export const body = {
  hook: 'A tow bar and bike rack for e-bikes comes down to weight: add the rack, the bikes and your tow bar\'s limits before you buy, then check the Queensland rules for overhang, number plate and lights.',
  intro: [
    'A tow bar and bike rack is the easiest way to carry heavy e-bikes, because you lift them to knee height instead of overhead and the load sits low and behind the car. It is also the setup where mistakes cost the most: a rack that is too heavy for the tow bar, bikes that hide the number plate or lights, or a load that overhangs too far.',
    'This guide does the sums, compares a tow bar cycle rack with roof bars and vertical racks, explains the Queensland rules in plain language and shows the EziGrip platform rack in our range. It builds on our [car bike rack guide](/blog/car-bike-rack/), which covers rack styles overall. Prices are in Australian dollars as listed on 6 November 2026.',
  ],
  sections: [
    {
      h: 'Tow bar and bike rack: why it suits e-bikes',
      p: [
        'An e-bike commonly weighs two to three times as much as a regular bike. Lifting that onto a roof is awkward and risky, and many roof systems have low load limits. A tow bar cycle carrier avoids both problems: the bike goes on at hip or knee height, and the rack takes the weight through the tow bar rather than the roof.',
        'The trade-offs are that a tow bar rack hangs off the back of the vehicle, so it can hide the number plate and lights, make reversing harder and add overhang. How a rack attaches varies between a tow ball mount and a hitch receiver, so always confirm that the rack you want fits your tow bar before you order.',
      ],
    },
    {
      h: 'Tow bar cycle rack, roof bars or vertical rack?',
      p: [
        'Roof bike bars keep the rear of the car clear and suit light bikes, but they put the weight on the roof and require a lift. A vertical bicycle rack stands the bike on its back wheel and saves space, but it still needs the bike to be lifted and held. A tow bar cycle carrier takes the most weight and is usually the easiest to load. The table compares them for an e-bike.',
      ],
      table: {
        head: ['Type', 'Lifting effort', 'Weight limit', 'Main drawback'],
        rows: [
          ['Tow bar platform rack', 'Low: load at knee height', 'High, check the tow bar and rack limits', 'Hides plate and lights, adds overhang'],
          ['Tow bar hanging rack', 'Medium', 'Medium', 'Bikes can sway or touch each other'],
          ['Roof bars and bike carrier', 'High: lift overhead', 'Low, check the roof limit', 'Awkward for heavy e-bikes, height clearance'],
          ['Vertical bicycle rack', 'Medium to high', 'Medium', 'Needs a lift and a fitting that suits the bike'],
        ],
      },
    },
    {
      h: 'Do the weight sums before you buy a tow bar bike rack',
      p: [
        'Start with three numbers: the weight of the rack, the weight of each bike and the limit of your tow bar. Add the rack and the bikes, then compare the total with the tow bar\'s maximum downward load and with the rack\'s own capacity. As an example, a rack that weighs 15 kg plus two e-bikes of 25 kg each puts 65 kg on the tow bar, which may already be at the limit of a light tow bar. This is an illustration, not a specification, so use your own figures.',
        'The Queensland Government\'s [transporting bicycles page](https://www.qld.gov.au/transport/vehicle-safety/transporting-bicycles) adds that a carrier must not hold more bicycles than it was designed for, that the manufacturer\'s maximum weight for the carrier or tow bar must not be exceeded, and that the load must not push the vehicle over its gross vehicle mass. Check the tow bar plate, the vehicle handbook and the rack\'s rating, and use the lowest figure.',
      ],
    },
    {
      h: 'Overhang, width and projection: the Queensland rules',
      p: [
        'The same Queensland page sets three limits. The loaded bike or carrier must not extend behind the rear axle by more than 60% of the wheelbase. The carrier and its load must not project more than 150 mm beyond either side of the vehicle, and the total width must not exceed 2.5 m. If the carrier and bikes project more than 1.2 m beyond the rear, you need a red and yellow, or yellow, flag at least 450 mm by 450 mm by day, and a red light visible from at least 200 m or two red reflectors at night.',
        'Most tow bar racks stay well inside these limits, but a long platform with two long e-bikes can approach them on a small hatchback. Measure from the rear axle to the end of the longest bike if you are unsure.',
      ],
    },
    {
      h: 'Number plate and lights: what you must show',
      p: [
        'The Queensland page says the rear number plate must be clearly visible from 20 m. If the carrier hides it, you must remove the carrier, reposition the bike so the plate is not hidden or fit an accessory plate to the rear of the carrier. The [accessory plates page](https://www.qld.gov.au/transport/registration/numberplate/accessory-plates) explains how to get one from the Department of Transport and Main Roads; hand-painted or replica plates are not permitted.',
        'The carrier and bikes must also not block the brake lights, the centre-mounted brake light or the indicators. If they do, you must attach an extra set of rear lights, fitted in pairs. Many platform racks include a light board for this reason. The EziGrip listing in our range mentions a four-function light board, which is the kind of feature to look for.',
      ],
    },
    {
      h: 'The EziGrip E-Rack 2 platform rack in our range',
      img: { file: 'blog/tow-bar-bike-rack-car-rack-ezigrip-e-rack-2-deluxe-foldable.webp', alt: 'EziGrip E-Rack 2 Deluxe foldable platform car rack for two e-bikes', w: 720, h: 540 },
      p: [
        'The [Car Rack EziGrip E-Rack 2 Deluxe/Foldable](/shop/racks-bags-and-trailers/car-rack-ezigrip-e-rack-2-deluxe-foldable/) is $899. The supplier describes it as a platform rack engineered for carrying electric bikes, with a 60 kg capacity, a four-function light board, 250 mm spacing between the bikes, a 1400 mm wheelbase and a tilt function. A platform makes it easier to get the bikes on and off, and the tilt helps with access to the boot.',
        'The listing does not state the mounting type, so message the team on WhatsApp with your vehicle and tow bar before you order, and we will confirm fitment. Because the capacity is 60 kg for two bikes, an average of 30 kg per bike, check the weight of your own e-bikes against it before you commit.',
      ],
    },
    {
      h: 'Loading, securing and protecting e-bikes on the rack',
      img: { file: 'blog/tow-bar-bike-rack-blastoff-bike-cover.webp', alt: 'Blastoff waterproof bike cover for a bike carried on a tow bar rack', w: 720, h: 540 },
      ul: [
        '**Remove the battery.** It is the heaviest and most valuable part; take it off before you drive and store it inside.',
        '**Secure the wheels and frame.** Use the rack\'s straps and clamps, and check them at every stop.',
        '**Check the load after the first few kilometres.** Straps and clamps settle and loosen.',
        '**Protect the bikes.** A cover such as the [Blastoff Bike Cover](/shop/racks-bags-and-trailers/blastoff-bike-cover/) at $79 keeps rain, grit and sun off the bike.',
        '**Lock them.** Use a lock such as the [Kovix Steel Thunder Alarmed Folding Lock](/shop/locks-and-security/kovix-steel-thunder-alarmed-folding-lock/) at $109 or the [Mastiff Chain-Lock Keyed](/shop/locks-and-security/mastiff-chain-lock-keyed/) at $99, and see our [bike chain padlock guide](/blog/bike-chain-padlock/).',
        '**Fold or remove the rack when not in use.** The Queensland page says to remove or reposition a carrier when it is not needed.',
      ],
    },
    {
      h: 'Driving with a tow bar bike rack',
      p: [
        'Your car handles differently with a heavy load behind it. Braking distances lengthen, reversing is harder because you cannot see the bikes and sensors may be blocked, and crosswinds push a loaded rack around more. Drive smoothly, leave extra space and check your mirrors. Avoid car washes with the rack fitted, and take care on steep driveways where the rack can scrape.',
        'Allow for the rack\'s width at drive-throughs and car parks, and remember that a rack fitted with bikes lengthens the car. If you tow a trailer as well, check your tow bar\'s rating because most tow bars cannot carry a rack and tow a trailer at the same time.',
      ],
    },
    {
      h: 'What to budget for a tow bar bike rack',
      p: [
        'The rack is the largest cost, and a platform rack built for e-bikes sits at the higher end. The EziGrip in our range is $899. Then add the small items that protect the investment: a cover at $79, a lock at $99 to $109 and, if your rack has no light board, a set of rear lights and an accessory plate. If you do not already have a tow bar, the fitting cost is separate and depends on your vehicle.',
        'A cheaper rack can look tempting, but a rack that sags, rattles or cannot take the weight of an e-bike is a false saving. Pay for a rated capacity above your heaviest bike and for build quality that will survive years of vibration, rain and sun.',
      ],
    },
    {
      h: 'When roof bars still make sense',
      p: [
        'If your bikes are light and you have a high roof rail rating, roof bars keep the back of the car clear and leave the number plate and lights alone. They suit a single lightweight bike and drivers who rarely travel. For most e-bikes the lift is the problem, so a tow bar rack remains the better answer. If you mix bikes, you can also keep a roof system for the light bikes and use the tow bar for the e-bike.',
        'A boot or hatch rack is the cheapest option but the hardest to make safe with a heavy bike, because it hangs from the tailgate and rarely carries e-bike weight. We do not recommend it for e-bikes.',
      ],
    },
    {
      h: 'Mistakes to avoid with a tow bar bike rack',
      ul: [
        '**Ignoring the tow bar rating.** The lowest figure among the rack, tow bar and vehicle is your limit.',
        '**Hiding the number plate or lights.** Fit an accessory plate and extra lights if needed.',
        '**Leaving the battery on.** It adds weight and invites theft.',
        '**Skipping the lock.** Racks are a target; lock the bikes and the rack.',
        '**Buying a rack that does not fit your tow bar.** Confirm fitment before you order.',
      ],
    },
  ],
  faq: [
    { q: 'How much weight can a tow bar bike rack carry?', a: 'It depends on the rack, the tow bar and the vehicle, and the lowest limit applies. The EziGrip E-Rack 2 in our range is listed by the supplier at 60 kg capacity. Check the tow bar plate and the vehicle handbook, and do not exceed the manufacturer\'s maximum.' },
    { q: 'Can a bike rack cover my number plate in Queensland?', a: 'The Queensland Government says the rear plate must be clearly visible from 20 m. If the carrier hides it, you must move the bike, remove the carrier or fit an accessory plate from the Department of Transport and Main Roads. Hand-painted or replica plates are not permitted.' },
    { q: 'Do I need extra lights on a bike rack?', a: 'Yes, if the carrier or bikes block the brake lights, centre brake light or indicators. The Queensland page says to fit an extra set of rear lights in pairs. Many platform racks include a light board for this purpose.' },
    { q: 'Are tow bar racks better than roof bars for e-bikes?', a: 'For heavy e-bikes, usually yes. A tow bar rack lets you load at knee height and carries more weight, while roof bars need an overhead lift and have low limits. A tow bar rack does hide the plate and lights and adds overhang, so check the rules.' },
    { q: 'Should I take the battery off before I drive?', a: 'Yes. The battery is heavy, valuable and sensitive to vibration and weather. Remove it, store it inside the vehicle and refit it when you arrive. Check the bike\'s manual for how to remove it.' },
  ],
  keywords: { primary: 'tow bar and bike rack', supporting: ['tow bar cycle rack', 'tow bar cycle carrier', 'bike roof bars', 'bike on rack', 'vertical bicycle rack'] },
  words: 0,
}
