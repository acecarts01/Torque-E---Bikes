// Blog post written to the blog-post rule (see ~/.claude/skills/blog-post/SKILL.md).
// Keywords: volume / KD / intent from Semrush AU Keyword Magic (6 Nov 2026), recorded in docs/used-keywords.csv and docs/blog-plan-batches-2026-11-06.html.
// Sources opened 7 Nov 2026: Queensland Government bicycle rules page (required equipment: bell, brake, lights and reflector; loads must not make the bike unstable; kickstands are not mentioned); Queensland Government electric bicycle rules page.
// We list one kickstand (79Bike Kickstand, $75, off-road). Product pages publish names and prices only, so no load rating, length or fitting is claimed; readers are told to ask.
export const meta = {
  id: 'bike-kickstand',
  slug: 'bike-kickstand',
  url: '/blog/bike-kickstand/',
  title: 'Bike Kickstand Guide: Types, Fit and E-Bike Weight',
  seoTitle: 'Bike Kickstand Guide: Types, Fit and E-Bike Weight',
  excerpt: 'Choosing a bike kickstand? Compare side and centre stands, check frame fit and e-bike weight, and see our 79Bike Kickstand at $75 before you order.',
  category: 'Buying Guides',
  date: '2026-11-07',
  readTime: '8 min',
  focus: 'bike kickstand',
  secondary: ['bike kick stand', 'bike stand bike', 'bicycle kick stand', 'childrens bike stand', 'kick stand'],
  tags: ['kickstand on a bike', 'kickstand', 'kickstand on mtb', 'bike stand for road bike', 'kids bike stand', 'bike kick stands', 'kickstand for bike', 'bike stand on bike', 'bicycle kick stands', 'push bike stand'],
  image: {
    file: 'blog/bike-kickstand.webp',
    alt: 'Bike kickstand and parts: 79Bike Kickstand, 79Bike Foot Pegs and 79Bike Front Fender',
    query: 'bike kickstand',
    credit: null,
  },
  related: [
    { href: '/shop/seats-fenders-and-body/79bike-kickstand/', name: '79Bike Kickstand', price: 75, note: 'The kickstand we list, for off-road 79Bike models.' },
    { href: '/shop/seats-fenders-and-body/79bike-foot-pegs/', name: '79Bike Foot Pegs', price: 93.95, note: 'Foot pegs for 79Bike models.' },
    { href: '/shop/racks-bags-and-trailers/azur-alloy-touring-carrier-disc-brake-compatible/', name: 'Azur Alloy Touring Carrier', price: 61.95, note: 'A rear carrier for a loaded bike.' },
    { href: '/shop/racks-bags-and-trailers/azur-commuter-rear-pannier-bag-pair-48l-black/', name: 'Azur Commuter Rear Pannier Bag Pair 48L', price: 109, note: 'Panniers that add weight to a parked bike.' },
    { href: '/shop/seats-fenders-and-body/', name: 'All seats, fenders and body parts', note: 'Seats, stands and body parts.' },
  ],
  links: {
    to: [
      ['/shop/seats-fenders-and-body/', 'seats, fenders and body parts'],
      ['/blog/bike-wall-mount/', 'bike wall mount guide'],
      ['/blog/bike-repair-stand/', 'bike repair stand guide'],
      ['/blog/e-bike-step-thru/', 'step-through e-bike guide'],
      ['/blog/bike-panniers/', 'bike panniers guide'],
    ],
    from: [
      ['/shop/seats-fenders-and-body/', 'bike kickstand guide'],
      ['/shop/seats-fenders-and-body/79bike-kickstand/', 'bicycle kick stand: what to check'],
      ['/blog/bike-wall-mount/', 'bike kickstand: fitting and weight limits'],
    ],
  },
  kind: 'post',
}

export const body = {
  hook: 'A kickstand is a small part that has to hold a heavy bike. We list the 79Bike Kickstand at $75; here is how stands differ, what fits which frame and what to ask before you order.',
  intro: [
    'A bike kickstand is one of those parts you only notice when it fails. It lets a bike stand up on its own at a cafe, outside the shops or in the garage, and it saves you from leaning a heavy e-bike against a wall that it will slide down. On a loaded commuter or a trekking bike, it can be the difference between a calm stop and a bike on the ground.',
    'This guide explains the main kickstand types, how they fit and which frames they suit, why e-bike weight matters, what we stock, how to check a stand works and what Queensland does and does not require. We list one kickstand, so we are honest about what it is and ask you to confirm fit before you order. Prices are in Australian dollars as listed on 7 November 2026, and our product pages publish names and prices only.',
  ],
  sections: [
    {
      h: 'Kickstand types: side stand, centre stand and rear stand',
      p: [
        'A side stand, often just called a kickstand, has one leg and usually bolts or clamps to the rear of the frame near the back axle. You flip it down with your foot and lean the bike onto it. It is light, quick to use and fits the widest range of bikes, which is why it is the most common. The drawback is that the bike leans on one side, so a heavy or top-heavy load can tip it.',
        'A centre stand has two legs and mounts behind the bottom bracket. The bike stands upright with the rear wheel off the ground, which makes loading, cleaning and chain work easy. It is heavier and needs a frame with the right mounts. A rear stand holds only the back wheel and is used for storage or maintenance. For most commuters, a side stand is enough, and for heavy touring loads a centre stand is steadier.',
      ],
    },
    {
      h: 'Bike kickstand in our range: the 79Bike Kickstand',
      img: { file: 'blog/bike-kickstand-79bike-kickstand.webp', alt: '79Bike kickstand, a bicycle kick stand for off-road 79Bike models', w: 720, h: 540 },
      table: {
        head: ['Item', 'Price (AUD)', 'Why it matters for parking'],
        rows: [
          ['79Bike Kickstand', '$75', 'The stand we list, off-road 79Bike models'],
          ['79Bike Foot Pegs', '$93.95', 'Body part for 79Bike models'],
          ['Azur Alloy Touring Carrier', '$61.95', 'Adds load behind the stand'],
          ['Azur Commuter Rear Pannier Bag Pair 48L', '$109', 'Adds weight that changes balance'],
        ],
      },
      p: [
        'We list one stand, the [79Bike Kickstand](/shop/seats-fenders-and-body/79bike-kickstand/) at $75. It is sold under the 79Bike name and listed as an off-road item, so it is meant for those bikes. Our product page publishes the name and price only, so we do not quote its length, load rating or frame fit. Message the team on WhatsApp with your bike and we will confirm what suits it before you order.',
        'If you ride a different brand, a general bike shop will have clamp-on and plate-mount stands, and the checklist below applies to any of them. The same category lists the [79Bike Foot Pegs](/shop/seats-fenders-and-body/79bike-foot-pegs/) at $93.95 and other body parts, and the whole range is in our [seats, fenders and body parts](/shop/seats-fenders-and-body/) category.',
      ],
    },
    {
      h: 'How to choose a bicycle kick stand: a checklist',
      ul: [
        '**Frame fit.** Check the mounting style: a plate behind the axle, a clamp on the chainstay or a direct mount. Not every frame has the mounts.',
        '**Carbon and thin tubing.** Check with the frame maker before clamping a stand onto a carbon or thin-walled frame, because a clamp can crush it.',
        '**Weight rating.** An e-bike is heavy, so ask for the stand\'s rated load and compare it with the bike plus any luggage.',
        '**Length.** The stand must tilt the bike a little, not hold it vertical or let it fall. A stand that is too long or too short is unstable.',
        '**Wheel size.** A 20 inch wheel and a 29 inch wheel need different lengths.',
        '**Clearance.** It must clear the chain, the brake rotor, the pedal and any rack or pannier.',
        '**Spring and latch.** A good stand snaps up and stays up on bumps.',
        '**Surface.** Check the foot is wide enough that it does not sink into soft ground.',
      ],
    },
    {
      h: 'E-bike weight and why a kickstand fails',
      p: [
        'An electric bike is much heavier than an ordinary bike because of the motor and battery. That load rests on a small foot and a single bolt, so a stand that is too light can bend or crack. The signs are a stand that leans sideways, a bike that sinks into the ground, a bolt that works loose or a plate that cracks.',
        'Treat a stand as a wear item on an e-bike: check the bolts, the plate and the foot regularly and replace it at the first sign of bending. Adding panniers or a child seat adds weight, and the load matters most when it is on one side. Check the stand with the bike loaded, not empty, because a stand that holds an empty bike may not hold a full one.',
      ],
    },
    {
      h: 'Kickstand on an mtb or road bike: what changes',
      p: [
        'Many mountain bikes and road bikes are sold without a stand, because riders want less weight and cleaner lines. Fitting a kickstand on an mtb is possible if the frame has a plate or a suitable clamp area, but a clamp can interfere with a rear suspension linkage or a disc brake. On a dual suspension bike, check that the stand does not touch the moving parts.',
        'A road bike with thin, light tubes usually does not take a clamp-on stand, and a carbon road bike should not be clamped without checking with the maker. If you want to park a road bike without leaning it, a floor stand or a wall mount is usually a better solution. Our [bike wall mount guide](/blog/bike-wall-mount/) explains the options for home storage.',
      ],
    },
    {
      h: 'A kids bike stand and a child\'s bike',
      p: [
        'A childrens bike stand is often a small side stand that bolts to the frame, and many first bikes come with one. A kid\'s bike falls over a lot, and a stand helps a child park it without help, which is a small step towards independence. Choose a stand sized for the wheel and strong enough for the bike, and check that it does not catch a pedal or the chain.',
        'If you are choosing a first bike, our [kids bike sizes guide](/blog/kids-bike-sizes/) explains which wheel size suits each age and height. For older children, a stand that is easy to flip with a foot matters more than a heavy one.',
      ],
    },
    {
      h: 'Loaded bikes, panniers and parking',
      img: { file: 'blog/bike-kickstand-azur-commuter-rear-pannier-bag-pair-48l-black.webp', alt: 'Azur commuter rear pannier pair, a load that changes how a bike stands', w: 720, h: 540 },
      p: [
        'A loaded bike is harder to park. Panniers move the centre of gravity back and to the sides, and a heavy bag on one side can tip a side stand over. When you load the bike, set it on the stand and press down on each side to see whether it holds. If it feels unstable, move the weight towards the centre or lower it, or consider a centre stand.',
        'If you carry luggage, the [Azur Alloy Touring Carrier](/shop/racks-bags-and-trailers/azur-alloy-touring-carrier-disc-brake-compatible/) is $61.95 and the [Azur Commuter Rear Pannier Bag Pair 48L](/shop/racks-bags-and-trailers/azur-commuter-rear-pannier-bag-pair-48l-black/) is $109. Our [bike panniers guide](/blog/bike-panniers/) explains how to pack them. A step-through frame, covered in our [step-through e-bike guide](/blog/e-bike-step-thru/), is easier to load and park.',
      ],
    },
    {
      h: 'Queensland rules: is a kickstand required?',
      p: [
        'The Queensland Government\'s [bicycle rules page](https://www.qld.gov.au/transport/safety/rules/wheeled-devices/bicycle) lists the equipment your bike must have each ride: at least one working brake, a working bell, horn or similar warning device and lights and a reflector at night. We did not find a kickstand mentioned on that page, so a stand is a convenience and not a requirement.',
        'The page also says that if you carry a load, you must attach it in a way that does not make the bicycle unstable and make sure it is unlikely to fall. A stand does not change that rule. The [electric bicycle rules page](https://www.qld.gov.au/transport/safety/rules/wheeled-devices/electric-bicycle-rules) sets out the power and speed limits for e-bikes, and a stand does not affect those either.',
      ],
    },
    {
      h: 'Looking after a kickstand: checks that take a minute',
      p: [
        'A kickstand is easy to forget until it fails, so add it to your pre-ride check. Flip it down and press on the saddle to see whether the bike holds, then look at the bolt, the plate and the foot. A bolt that has worked loose, a plate with a hairline crack or a foot that has worn smooth are all signs it needs attention.',
        'Clean the pivot and add a drop of light oil so the spring keeps snapping the stand up. A stand that hangs half down can catch the ground on a corner and throw you off, so check it stays up when you ride. If the stand is bent, replace it rather than bending it back, because metal that has been bent once is weaker.',
        'Check the stand again after you add panniers, a child seat or a heavier battery, because each one changes how the bike sits. A few seconds with the stand and the load can save a bike from falling over in a car park.',
      ],
    },
    {
      h: 'Common mistakes with a bike kickstand',
      ul: [
        '**Clamping a stand onto carbon without checking.** It can crush the tube.',
        '**Using a light stand on an e-bike.** Check the rated load.',
        '**Getting the length wrong.** The bike should tilt slightly and sit firmly.',
        '**Forgetting to retighten the bolt.** Vibration loosens it.',
        '**Parking on soft ground.** The foot sinks and the bike falls.',
        '**Ignoring the load.** A stand that holds an empty bike may fail with panniers.',
      ],
    },
  ],
  faq: [
    { q: 'Do you sell a bike kickstand?', a: 'We list one, the 79Bike Kickstand at $75, sold for 79Bike models and listed as an off-road item. Our product page shows the name and price only, so message us with your bike to confirm fit and load before you order.' },
    { q: 'Will a kickstand fit my e-bike?', a: 'It depends on the frame and the weight. Check the mounting style and the stand\'s rated load against the weight of the bike plus luggage. An e-bike is heavy, so a light stand can bend. Ask us if you are unsure.' },
    { q: 'Is a kickstand required by law in Queensland?', a: 'No. The Queensland Government\'s bicycle rules page lists a working brake, a bell or horn and lights and a reflector at night. We did not find a kickstand on that page, so a stand is a convenience.' },
    { q: 'Can I fit a kickstand to a carbon bike?', a: 'Be careful. A clamp can crush a thin carbon tube, so check with the frame maker before fitting a clamp-on stand. A plate mount or a floor stand is often a safer choice for a carbon bike.' },
    { q: 'What is the best stand for a loaded bike?', a: 'A centre stand holds a loaded bike upright and steadier than a side stand, but it needs a frame with the right mounts. If you use a side stand, load the weight low and central and test the bike before you walk away.' },
  ],
  keywords: { primary: 'bike kickstand', supporting: ['bike kick stand', 'bike stand bike', 'bicycle kick stand', 'childrens bike stand', 'kick stand'] },
  words: 0,
}
