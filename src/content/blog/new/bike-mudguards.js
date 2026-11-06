// Blog post written to the blog-post rule (see ~/.claude/skills/blog-post/SKILL.md).
// Keywords: volume / KD / intent from Semrush AU Keyword Magic (6 Nov 2026), recorded in docs/used-keywords.csv and docs/blog-plan-batches-2026-11-06.html.
// Sources opened 7 Nov 2026: Queensland Government bicycle rules page (lights and reflector at night; mudguards are not mentioned); Queensland Government electric bicycle rules page.
// We list two fenders (79Bike Front Fender $83.95, 79Bike Rear Fender $52.95, both off-road items). Product pages publish names and prices only, so no size, tyre width or fitment is claimed.
export const meta = {
  id: 'bike-mudguards',
  slug: 'bike-mudguards',
  url: '/blog/bike-mudguards/',
  title: 'MTB Mud Flap and Bike Mudguards: Front and Rear Guide',
  seoTitle: 'MTB Mud Flap and Bike Mudguards: Front and Rear Guide',
  excerpt: 'Choosing an mtb mud flap or bike mudguards? Compare front and rear fenders, see the 79Bike fenders from $52.95 and check tyre clearance before you order.',
  category: 'Buying Guides',
  date: '2026-11-07',
  readTime: '8 min',
  focus: 'mtb mud flap',
  secondary: ['bike mudguards', 'mud guard mtb', 'mtb front mudguard', 'mtb mudguards', 'mountain bike rear mudguard'],
  tags: ['mudguard flap', 'mud guards', 'mud guard', 'mud guard bike', 'mountain biking mud guards', 'mud flaps mountain bike', 'mudguard mtb', 'mountain bike front mudguard', 'bike fender', 'mtb rear mudguard'],
  image: {
    file: 'blog/bike-mudguards.webp',
    alt: 'MTB mud flap and mudguards: 79Bike Front Fender and 79Bike Rear Fender for off-road bikes',
    query: 'mtb mud flap',
    credit: null,
  },
  related: [
    { href: '/shop/seats-fenders-and-body/79bike-front-fender/', name: '79Bike Front Fender', price: 83.95, note: 'A front fender for off-road 79Bike models.' },
    { href: '/shop/seats-fenders-and-body/79bike-rear-fender/', name: '79Bike Rear Fender', price: 52.95, note: 'A rear fender for off-road 79Bike models.' },
    { href: '/shop/lights-and-horns/azur-alien2-100-lm-usb-rechargeable-rear-light/', name: 'Azur Alien2 100 lm Rear Light', price: 27.95, note: 'A rear light for wet-weather rides.' },
    { href: '/shop/seats-fenders-and-body/79bike-kickstand/', name: '79Bike Kickstand', price: 75, note: 'A stand for 79Bike models.' },
    { href: '/shop/seats-fenders-and-body/', name: 'All seats, fenders and body parts', note: 'Fenders, seats and body parts.' },
  ],
  links: {
    to: [
      ['/shop/seats-fenders-and-body/', 'seats, fenders and body parts'],
      ['/blog/mountain-bikes-for-sale/', 'mountain bikes for sale guide'],
      ['/blog/bicycle-light/', 'bicycle light guide'],
      ['/blog/ebike-accessories/', 'e-bike accessories guide'],
      ['/blog/hardtail-electric-mountain-bike/', 'hardtail electric mountain bike guide'],
    ],
    from: [
      ['/shop/seats-fenders-and-body/', 'mtb mudguards guide'],
      ['/shop/seats-fenders-and-body/79bike-front-fender/', 'mtb front mudguard: what to check'],
      ['/shop/seats-fenders-and-body/79bike-rear-fender/', 'mountain bike rear mudguard: how to choose'],
    ],
  },
  kind: 'post',
}

export const body = {
  hook: 'We list the 79Bike Front Fender at $83.95 and the 79Bike Rear Fender at $52.95. This guide explains how an mtb mud flap differs from full mudguards and what to check before you fit one.',
  intro: [
    'An mtb mud flap is a short guard that stops mud and water being thrown up from the front tyre at your face or from the rear tyre up your back. On a wet trail it is the difference between a clean ride and a face full of grit. On a commuter, full-length bike mudguards do the same job for your clothes, your drivetrain and the rider behind you.',
    'This guide explains the types of mudguard, how front and rear guards differ, what clearance you need, how to fit one, what we stock and what Queensland says. We list two fenders from the 79Bike range, so we are clear about what they are and ask you to confirm fit before ordering. Prices are in Australian dollars as listed on 7 November 2026, and our product pages publish names and prices only.',
  ],
  sections: [
    {
      h: 'MTB mud flap or full mudguard: what is the difference?',
      p: [
        'A mud flap, or short fender, bolts to the fork crown or the seat stay and covers only the top of the tyre. It is light, cheap and keeps the worst spray off your face and bottom bracket. It works well on a mountain bike where tyre clearance is tight and mud can clog a full guard. You still get a splash on your legs, but the worst of the mud is stopped.',
        'A full-length mudguard wraps further round the tyre, protects your legs and drivetrain and suits commuting and wet-weather riding. It needs more clearance and mounting points, and on a muddy trail it can clog. A mudguard flap, the small extension at the end of a guard, adds protection against low spray. Many riders choose a short guard for the trail and full guards for the commute.',
      ],
    },
    {
      h: 'Bike mudguards in our range: 79Bike front and rear fenders',
      img: { file: 'blog/bike-mudguards-79bike-front-fender.webp', alt: '79Bike front fender, an mtb front mudguard for off-road 79Bike models', w: 720, h: 540 },
      p: [
        'We list two fenders. The [79Bike Front Fender](/shop/seats-fenders-and-body/79bike-front-fender/) is $83.95 and the [79Bike Rear Fender](/shop/seats-fenders-and-body/79bike-rear-fender/) is $52.95. Both are sold under the 79Bike name and listed as off-road items, so they are meant for those bikes. Our product pages publish the name and price only, so we do not quote their size, material or tyre width, and we ask you to message us on WhatsApp with your bike before you order.',
        'If you ride a different bike, a general bike shop will have clip-on and bolt-on guards in a range of sizes. The checklist below applies to any of them. Our [seats, fenders and body parts](/shop/seats-fenders-and-body/) category lists the 79Bike fenders and related parts.',
      ],
      table: {
        head: ['Item', 'Price (AUD)', 'Position'],
        rows: [
          ['79Bike Front Fender', '$83.95', 'Front, off-road 79Bike models'],
          ['79Bike Rear Fender', '$52.95', 'Rear, off-road 79Bike models'],
        ],
      },
    },
    {
      h: 'Front mudguard versus rear mudguard',
      img: { file: 'blog/bike-mudguards-79bike-rear-fender.webp', alt: '79Bike rear fender, a mountain bike rear mudguard for off-road 79Bike models', w: 720, h: 540 },
      p: [
        'An mtb front mudguard protects your face, your chest and the lower fork from spray thrown up by the front wheel. It also keeps grit out of the fork seals and the headset, which extends the life of those parts. A rear guard protects your back and bottom and keeps mud off the saddle and the seat post.',
        'If you can only fit one, most riders choose the front guard on a trail bike for the spray in the face, and the rear guard on a commuter for the line up the back. A mountain bike rear mudguard also protects the shock and the linkage on a full suspension bike. Fit both if you ride in the wet often, because a single guard only solves half of the problem.',
      ],
    },
    {
      h: 'How to choose an mtb mud guard: a checklist',
      ul: [
        '**Tyre width.** The guard must be wider than the tyre and clear it by a few millimetres.',
        '**Wheel size.** A 27.5 inch and a 29 inch wheel need different guards.',
        '**Mounting points.** Check for eyelets, a fork crown mount or a seat stay mount, or choose a clip-on guard.',
        '**Suspension travel.** On a suspension fork, the guard must clear the tyre when the fork compresses.',
        '**Brake clearance.** Make sure the guard does not touch a caliper or a rotor.',
        '**Material.** Plastic is light and flexible; metal is stronger but heavier and can bend.',
        '**Mud clearance.** A guard that is too close will clog on wet clay.',
        '**Light mounts.** A rear light mount on the guard is handy for wet nights.',
      ],
    },
    {
      h: 'Fitting a mud guard on a mountain bike',
      p: [
        'Start by checking how much space you have between the tyre and the frame or fork. Hold the guard in place and spin the wheel to see whether the tyre rubs. Mark the mounting points, fit the guard loosely and then adjust it so it sits evenly over the tyre, with a gap you could slide a finger into. Tighten the bolts or clips and spin the wheel again.',
        'Test it on a slow ride before you head off on a long one. Listen for rubbing, check that nothing has moved after a bump and tighten any loose screws. On a suspension bike, compress the fork fully with the bike on the ground to check the tyre does not hit the guard at full travel. A guard that clears at rest but hits under load is a hazard.',
      ],
    },
    {
      h: 'Mudguards on an e-bike',
      p: [
        'An e-bike is heavier and faster than an ordinary bike, so the spray is stronger and the rider is often wearing work clothes. Depending on where they sit on your bike, guards can also help keep spray off the battery, the lights and the display. Full mudguards are common on commuter e-bikes, and some trail e-bikes use a short front guard for the fork.',
        'If your bike has a rear rack, check that the guard and the rack fit together, and see our [electric mountain bikes](/shop/electric-mountain-bikes/) for what a trail bike looks like. Our [hardtail electric mountain bike guide](/blog/hardtail-electric-mountain-bike/) explains the frame style, and our [mountain bikes for sale guide](/blog/mountain-bikes-for-sale/) compares the range.',
      ],
    },
    {
      h: 'Mud guards, lights and visibility',
      p: [
        'The Queensland Government\'s [bicycle rules page](https://www.qld.gov.au/transport/safety/rules/wheeled-devices/bicycle) says that when you ride at night or in poor visibility you must show a white light visible from at least 200 metres at the front, a red light visible from at least 200 metres at the back and a red reflector visible from at least 50 metres behind. We did not find mudguards mentioned on that page, so a guard is a choice, not a requirement.',
        'A rear guard can get in the way of a rear light or reflector, so check that the light is still visible when the guard is fitted. Some guards have a light mount built in. Wet weather reduces visibility, so good lights matter more on rainy rides, and our [bicycle light guide](/blog/bicycle-light/) explains the options.',
      ],
    },
    {
      h: 'Keeping the bike clean: mudguards and the drivetrain',
      p: [
        'Mud and grit are a major cause of chain and sprocket wear. A guard reduces the amount of dirt thrown up onto the drivetrain, so the chain lasts longer and shifts more smoothly. After a wet ride, wipe the guard, the frame and the chain and lubricate the chain, because water and grit together wear parts quickly.',
        'Our [e-bike accessories guide](/blog/ebike-accessories/) lists the extras that protect an e-bike, and the [electric bicycle rules page](https://www.qld.gov.au/transport/safety/rules/wheeled-devices/electric-bicycle-rules) explains the power and speed limits that apply to e-bikes. Neither the page nor the rules require a guard, but a clean bike is easier and cheaper to look after.',
      ],
    },
    {
      h: 'Clip-on, bolt-on and full-length guards compared',
      p: [
        'A clip-on guard attaches with straps or a clamp, so it fits bikes without mounting points and can be moved between bikes. It is quick to fit, but it can slip or rattle if it is not tight. A bolt-on guard uses the frame\'s eyelets or the fork crown, which holds it more firmly, and it suits a bike you ride in the wet every day.',
        'A full-length guard that follows the tyre is the best protection for your clothes and drivetrain, and it usually has stays that brace it against the frame. It needs the most clearance and the right mounts, so it suits commuter bikes better than trail bikes. A short mud flap trades coverage for light weight and mud clearance.',
        'If you ride both on and off road, consider a short front guard for the trail and a clip-on rear guard you can remove. Whatever you choose, fit it so there is room for the tyre to throw off mud without clogging, and clean the guard after a wet ride so dried clay does not build up.',
      ],
    },
    {
      h: 'Common mistakes with mtb mudguards',
      ul: [
        '**Ignoring tyre clearance.** A guard that rubs will wear through.',
        '**Forgetting fork travel.** Check the tyre does not hit the guard when the fork compresses.',
        '**Using a guard that is too tight for mud.** It will clog on wet clay.',
        '**Blocking the rear light.** Check visibility after fitting.',
        '**Over-tightening plastic.** It can crack.',
        '**Skipping the test ride.** Listen for rubbing before a long ride.',
      ],
    },
  ],
  faq: [
    { q: 'What is an mtb mud flap?', a: 'An mtb mud flap is a short guard fitted at the fork crown or seat stay that stops mud and water spraying up from the tyre. It is lighter and clears mud better than a full mudguard, so it suits trail riding.' },
    { q: 'Which mudguards do you sell?', a: 'We list the 79Bike Front Fender at $83.95 and the 79Bike Rear Fender at $52.95, both off-road items for 79Bike models. Our product pages show names and prices only, so message us with your bike to confirm fit.' },
    { q: 'Are mudguards required by law in Queensland?', a: 'We did not find mudguards mentioned on the Queensland Government\'s bicycle rules page. That page lists a working brake, a bell or horn and lights and a reflector at night, so a mudguard is a choice.' },
    { q: 'Do I need front and rear mudguards?', a: 'Not always. A front guard protects your face and the fork, and a rear guard protects your back and the seat. Many trail riders fit a front guard, and commuters fit both. Fit both if you ride often in the wet.' },
    { q: 'Will a mudguard fit my tyre?', a: 'Only if the guard is wider than the tyre and clears it by a few millimetres, including when the fork compresses. Check your tyre width, wheel size and mounting points, or ask us before you order.' },
  ],
  keywords: { primary: 'mtb mud flap', supporting: ['bike mudguards', 'mud guard mtb', 'mtb front mudguard', 'mtb mudguards', 'mountain bike rear mudguard'] },
  words: 0,
}
