// Blog post written to the blog-post rule (see ~/.claude/skills/blog-post/SKILL.md).
// Keywords: volume / KD / intent from Semrush AU Keyword Magic (27 Oct 2026), recorded in docs/used-keywords.csv.
// Sources opened 27 Oct 2026: Bicycle Queensland bike security page and the Queensland Police bicycle theft prevention post.
// Neither page mentions covers, so cover advice is ours; the post cites the pages only for locking, storage and serial-number advice.
// Product pages publish no cover material or waterproof rating, so the post claims only name, brand and price.
export const meta = {
  id: 'bicycle-cover',
  slug: 'bicycle-cover',
  url: '/blog/bicycle-cover/',
  title: 'Bicycle Cover: How to Choose a Waterproof Bike Cover',
  seoTitle: 'Bicycle Cover: How to Choose a Waterproof Bike Cover',
  excerpt: 'Choosing a bicycle cover? See what a waterproof bike cover does, how to size one for an e-bike, the Blastoff cover at $79, and how to lock and store a bike.',
  category: 'Buying Guides',
  date: '2026-10-27',
  readTime: '8 min',
  focus: 'bicycle cover',
  secondary: ['bike covers', 'waterproof bike cover', 'waterproof bicycle cover', 'bicycle cover waterproof', 'outdoor bike cover'],
  tags: ['bicycle covers', 'bike covers waterproof', 'push bike covers', 'mtb bike cover', 'bicycle rain cover', 'mtb cover', 'bike rain cover', 'mountain bike cover', 'cycle cover', 'outdoor bicycle cover'],
  image: {
    file: 'blog/bicycle-cover.webp',
    alt: 'Blastoff bicycle cover, OnGuard chain lock and Azur pannier for outdoor bike storage',
    query: 'bicycle cover',
    credit: null,
  },
  related: [
    { href: '/shop/racks-bags-and-trailers/blastoff-bike-cover/', name: 'Blastoff Bike Cover', price: 79, note: 'A bike cover from Blastoff.' },
    { href: '/shop/locks-and-security/onguard-chain-lock/', name: 'OnGuard Chain Lock', price: 38.95, note: 'Lock the bike before you cover it.' },
    { href: '/shop/racks-bags-and-trailers/azur-commuter-rear-pannier-bag-pair-48l-black/', name: 'Azur Commuter Rear Pannier Bag Pair 48L (Black)', price: 109, note: 'Take bags off before you cover the bike.' },
    { href: '/shop/racks-bags-and-trailers/', name: 'All racks, bags and trailers', note: 'Covers, panniers, crates and trailers.' },
  ],
  links: {
    to: [
      ['/shop/racks-bags-and-trailers/', 'racks, bags and trailers'],
      ['/shop/locks-and-security/', 'locks and security'],
      ['/blog/how-to-lock-an-e-bike/', 'how to lock an e-bike guide'],
      ['/blog/bike-panniers/', 'bike panniers buying guide'],
    ],
    from: [
      ['/shop/racks-bags-and-trailers/', 'bicycle cover buying guide'],
      ['/shop/racks-bags-and-trailers/blastoff-bike-cover/', 'how to choose a bicycle cover'],
      ['/shop/locks-and-security/onguard-chain-lock/', 'covering and locking a bike outdoors'],
    ],
  },
  kind: 'post',
}

export const body = {
  hook: 'A bicycle cover keeps rain, sun, dust and bird droppings off a bike stored outdoors, but it is not a security device: lock the bike first, then cover it.',
  intro: [
    'A bicycle cover is a fitted sheet that goes over a bike parked outside, on a balcony or in a carport. A good waterproof bike cover keeps water off the drivetrain and brakes, protects saddle and grips from sun and stops leaves, dust and droppings building up. This guide explains what to look for, how to size a cover for an e-bike or mountain bike and how to cover a bike without making it easier to steal.',
    'We cover cover types, sizing, ventilation, locking and storage advice from Bicycle Queensland and Queensland Police, the Blastoff cover in our range at $79 and a pre-cover checklist. Prices are current Torque E-Bikes prices.',
  ],
  sections: [
    {
      h: 'Bicycle cover and the gear that goes with it',
      p: [
        'Our [racks, bags and trailers](/shop/racks-bags-and-trailers/) range includes a bike cover, and our [locks and security](/shop/locks-and-security/) range has a chain lock to pair with it. Product pages publish the brand and price but not fabric or rating, so ask us to confirm size and fit before ordering.',
      ],
      table: {
        head: ['Product', 'Brand', 'Price', 'Role'],
        rows: [
          ['[Blastoff Bike Cover](/shop/racks-bags-and-trailers/blastoff-bike-cover/)', 'Blastoff', '$79', 'Weather cover for a parked bike'],
          ['[OnGuard Chain Lock](/shop/locks-and-security/onguard-chain-lock/)', 'OnGuard', '$38.95', 'Lock the bike before covering it'],
          ['[Azur Commuter Rear Pannier Bag Pair 48L (Black)](/shop/racks-bags-and-trailers/azur-commuter-rear-pannier-bag-pair-48l-black/)', 'Azur', '$109', 'Take the bags off and store them inside'],
        ],
      },
    },
    {
      h: 'What a waterproof bike cover actually does',
      p: [
        'A waterproof bicycle cover sheds rain so water does not sit on the saddle, run into the headset and pool around the bottom bracket. It also shades the frame, tyres and plastic parts from strong Australian sun, which fades paint and perishes rubber over time.',
        'It will not stop water from getting in if the bike sits in a puddle, and it does not seal the bike. Look for a cover with a drawcord or strap under the bike so wind cannot lift it, and with enough ventilation that moisture can escape.',
        'Be realistic about the claim "waterproof". Some covers are water-resistant, and seams, zips and vents can leak in heavy rain. A cover is protection against weather, not a storage unit.',
      ],
    },
    {
      h: 'Choosing an outdoor bike cover: size, fabric and fit',
      ul: [
        '**Size.** Measure the bike from front tyre to rear tyre and from the ground to the highest point. E-bikes with a rear battery rack, fat tyres or a wide cargo layout need a larger cover.',
        '**Fabric.** Look for a coated, UV-resistant fabric with taped or sealed seams. A thin cover can tear in the wind or break down in the sun.',
        '**Fit and fixing.** Elastic hems, buckles and under-bike straps hold the cover in place. A loose cover flaps, chafes the paint and can blow away.',
        '**Ventilation.** Vents let moisture out. A fully sealed cover can trap condensation that rusts bolts and chains.',
        '**Lock holes.** Some covers have a grommet so you can run a lock through the cover and the bike together. Check before you buy.',
        '**Storage bag.** A stuff sack makes it easy to carry the cover in a pannier.',
      ],
      img: { file: 'blog/bicycle-cover-blastoff.webp', alt: 'Blastoff bike cover for outdoor storage', w: 720, h: 540 },
    },
    {
      h: 'Covers for a mountain bike, e-bike or push bike',
      p: [
        'An MTB cover needs room for wide handlebars, a big rear derailleur and chunky tyres, so choose a cover with a generous cut. A mountain bike cover should be easy to pull over dry, but wash and dry the bike after a muddy ride first, because a wet, dirty bike under a cover grows rust.',
        'An e-bike is heavier and bulkier. A rear battery, a rack or panniers all change how a cover fits, so remove the removable battery, take off panniers and check for a cover that clears the display. Our [bike panniers guide](/blog/bike-panniers/) covers taking bags on and off.',
        'A standard push bike cover is the simplest. If you own more than one bike, look at a larger cover that fits two.',
      ],
    },
    {
      h: 'Lock first, cover second: theft advice',
      p: [
        'A cover hides the bike from view. That may reduce opportunistic attention, but it also means nobody sees a thief working under it. Treat the cover as weather protection and the lock as security.',
        '[Bicycle Queensland\'s bike security advice](https://bq.org.au/resources/bike-security/) recommends a heavy-duty D-style lock, passed through the frame and one wheel and attached to something fixed that cannot move, with a second small cable lock for quick-release wheels. It also says to lock up at home as well, including in a yard, shed or secure garage, and to remove easily detached items such as lights, cycle computers and panniers.',
        'The [Queensland Police bicycle theft prevention post](https://mypolice.qld.gov.au/brisbanecentral/2021/06/02/scooter-and-bicycle-theft-prevention/) adds that thieves often carry bolt-cutters, that you should keep the bike in sight where you can, and that apartment dwellers should store the bike inside the unit rather than in the basement carpark. It says to record the serial number, register it with police through the West End Serial Hub, photograph the bike and consider a small GPS tracker.',
        'Our [OnGuard chain lock at $38.95](/shop/locks-and-security/onguard-chain-lock/) gives you a lock to use under the cover, and our [how to lock an e-bike guide](/blog/how-to-lock-an-e-bike/) explains locking methods in more detail.',
      ],
    },
    {
      h: 'How to put on a bike cover properly',
      ul: [
        '**Clean and dry the bike first.** Wipe the drivetrain and let a wet bike dry before covering it.',
        '**Remove accessories.** Take off lights, the computer, panniers and any removable battery.',
        '**Lock the bike.** Secure frame and wheel to a fixed object before you cover it.',
        '**Pull the cover down evenly.** Cover the saddle and handlebar first, then the wheels, and let the hem reach the ground at the sides.',
        '**Fasten the under-bike strap.** This stops the wind lifting the cover.',
        '**Check after strong wind or rain.** Make sure the cover is still in place and not pooling water.',
      ],
    },
    {
      h: 'Storing an e-bike: battery and heat',
      p: [
        'A cover helps with weather but not heat. A black cover in direct summer sun can trap heat under it. Do not leave a lithium battery in a hot, enclosed space. Take a removable battery inside, store it somewhere cool and dry, and follow your battery maker\'s guidance. Our [lithium battery safety guide](/blog/electric-moto-maintenance-lithium-safety/) covers storage and charging.',
        'Where possible, store the bike under a roof or in a shed. A cover is for the times you cannot.',
      ],
    },
    {
      h: 'Bicycle cover mistakes to avoid',
      ul: [
        '**Covering a wet bike.** It dries slowly and rusts the chain and bolts.',
        '**Treating a cover as security.** It is not. Lock the bike.',
        '**Buying too small.** A cover that does not reach the ground leaves the drivetrain exposed.',
        '**Ignoring the wind.** Without a strap, a cover can fly off or flap against the paint.',
        '**Leaving the battery on.** Take a removable battery inside.',
        '**Forgetting the serial number.** Record it and register it before the bike goes missing.',
      ],
    },
    {
      h: 'Cover, shed or indoors: where to store a bike',
      p: [
        'The best place for a bike is inside, away from weather and out of sight. A garage, shed or a spare room beats any cover. If you must store the bike on a balcony or in a carport, a cover is a sensible second best.',
        'Under a carport the bike is already out of the rain, so a cover mainly keeps dust and sun off. On an open balcony, wind is the main enemy, so strap the cover firmly. In a shared garage or apartment block, remember the Queensland Police advice to store the bike inside your unit rather than in the basement carpark, and lock it wherever it lives.',
        'Keep the bike off wet ground if you can. A stand or a hook lifts the tyres off a damp floor, which helps rubber last and keeps moisture away from the chain.',
      ],
    },
    {
      h: 'Caring for the cover itself',
      p: [
        'Shake the cover out and let it dry before folding it. Putting a damp cover in a bag breeds mould and leaves a smell that transfers to your bike. Wash it occasionally with mild soap and water, rinse it well and dry it flat or hung in the shade.',
        'Check the seams, hem and strap for wear after storms. A small tear in a cover grows quickly in the wind, so patch it early with repair tape or replace it when it is too far gone.',
        'Fold the cover loosely rather than creasing it hard, and keep it away from chain lube, solvents and degreasers, which can attack some coatings. If a cover has a storage pouch, keep it in your pannier or on the shelf so it is ready for the next trip.',
      ],
    },
    {
      h: 'Which bicycle cover should you buy?',
      p: [
        'Our [Blastoff bike cover at $79](/shop/racks-bags-and-trailers/blastoff-bike-cover/) is the cover in our range. Send us your bike\'s make, size and any rack or battery details and we will confirm the fit. Pair it with a [chain lock](/shop/locks-and-security/onguard-chain-lock/) and record the serial number.',
        'You can also browse the full [bike cover and accessories range](/shop/racks-bags-and-trailers/) and see our [locks and security range](/shop/locks-and-security/).',
      ],
    },
  ],
  faq: [
    { q: 'Do bicycle covers work?', a: 'A good cover keeps rain, sun, dust and droppings off a bike parked outdoors. It does not replace a roof or a lock. Dry the bike first, strap the cover down and ventilate it so moisture can escape.' },
    { q: 'What size bike cover do I need?', a: 'Measure from front tyre to rear tyre and from the ground to the highest point. E-bikes with a rear battery, rack or fat tyres need a larger cover. Send us your bike model and we will help.' },
    { q: 'Is a waterproof bike cover really waterproof?', a: 'Many are water-resistant, and seams or vents can leak in heavy rain. A cover protects against weather, but a bike sitting in a puddle will still get wet. Check the fabric and seam details.' },
    { q: 'Can I lock my bike under a cover?', a: 'Yes, and you should. Lock the frame and a wheel to something fixed before you cover it. Bicycle Queensland recommends a heavy-duty D-style lock and locking up at home too.' },
    { q: 'Should I cover an e-bike with the battery on?', a: 'Take a removable battery inside and store it somewhere cool and dry. Heat under a cover in direct sun can build up, so follow your battery maker\'s guidance.' },
    { q: 'Do I still need to record my serial number?', a: 'Yes. Queensland Police advise recording it, photographing the bike and registering the serial number so a recovered bike can be returned to you.' },
  ],
  keywords: { primary: 'bicycle cover', supporting: ['bike covers', 'waterproof bike cover', 'waterproof bicycle cover', 'bicycle cover waterproof', 'outdoor bike cover'] },
  words: 0,
}
