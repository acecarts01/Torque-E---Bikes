// Blog post written to the blog-post rule (see ~/.claude/skills/blog-post/SKILL.md).
// Keywords: volume / KD / intent from Semrush AU Keyword Magic (29 Oct 2026), KD 28 or lower, recorded in docs/used-keywords.csv.
// Competitor review 29 Oct 2026 (retailer category pages, Park Tool, forum threads): weaknesses are pump lists with no explanation of valve types, no pressure advice tied to the tyre sidewall, no mention that a gauge can read wrong while pumping, no e-bike and fat-tyre notes. Plan: pump types table, Park Tool valve and gauge facts, inflation routine, honest note that we stock tubes, levers and bikes but not pumps.
// Sources opened 29 Oct 2026: Park Tool "Tire, Wheel and Inner Tube Fit Standards" (Schrader about 8 mm, Presta about 6 mm with a locknut to loosen, valve length for deep rims), Park Tool "Tire and Tube Removal and Installation" (inflate slightly, check bead seat, inflate to full pressure and check with a gauge).
// Product pages publish only names and prices. We do not sell pumps; the post says so and links the tubes, levers and bikes we stock.
export const meta = {
  id: 'bike-pump',
  slug: 'bike-pump',
  url: '/blog/bike-pump/',
  title: 'Bike Pump: Floor, Mini and Hand Pump Buying Guide',
  seoTitle: 'Bike Pump: Floor, Mini and Hand Pump Buying Guide',
  excerpt: "Choosing a bike pump? Compare floor, mini and foot pumps, match the head to Presta or Schrader valves, set pressure correctly and see our tubes and levers.",
  category: 'Buying Guides',
  date: '2026-10-29',
  readTime: '10 min',
  focus: 'bike pump',
  secondary: ['pump for a bike', 'bicycle pump', 'bike cycle pump', 'bicycle floor pump', 'floor bike pump'],
  tags: ['cycle pump for bicycle', 'bicycle pumps', 'cycling tire pump', 'foot pump for cycle', 'pump air for bike', 'air pump for cycle', 'best cycling floor pump', 'bicycle tire pumps', 'bike pump with adapters', 'pump for bike'],
  image: {
    file: 'blog/bike-pump.webp',
    alt: '79Bike inner tube, Lezyne lever kit and 79Bike tyre, parts to use with a bike pump',
    query: 'bike pump',
    credit: null,
  },
  related: [
    { href: '/shop/wheels-tyres-and-tubes/79bike-inner-tube/', name: '79Bike Inner Tube', price: 38.95, note: 'A tube to inflate.' },
    { href: '/shop/care-tools-and-hydration/lezyne-lever-kit-light-grey/', name: 'Lezyne Lever Kit Light Grey', price: 18.95, note: 'Levers for the tyre change.' },
    { href: '/shop/wheels-tyres-and-tubes/79bike-tyre/', name: '79Bike Tyre', price: 179, note: 'A replacement tyre.' },
    { href: '/shop/care-tools-and-hydration/', name: 'All care, tools and hydration', note: 'Levers, lubes and bottles.' },
  ],
  links: {
    to: [
      ['/shop/care-tools-and-hydration/', 'care, tools and hydration'],
      ['/blog/bike-tubes/', 'bike tubes guide'],
      ['/blog/bike-puncture-repair-kit/', 'bike puncture repair kit guide'],
      ['/blog/e-bike-tyres-and-tubes/', 'e-bike tyres and tubes guide'],
    ],
    from: [
      ['/shop/care-tools-and-hydration/', 'bike pump buying guide'],
      ['/shop/care-tools-and-hydration/lezyne-lever-kit-light-grey/', 'bicycle pump and levers'],
      ['/shop/wheels-tyres-and-tubes/79bike-inner-tube/', 'pump for a bike: valve checks'],
    ],
  },
  kind: 'post',
}

export const body = {
  hook: 'A bike pump keeps tyres at the right pressure, and the right one depends on where you use it: a floor pump at home, a mini pump on the bike. Match the pump head to your valve and read the pressure on the tyre.',
  intro: [
    'A bike pump is the cheapest way to make a bike ride better. Correct tyre pressure reduces flats, makes the bike roll easily and protects the rim. The right bike pump depends on where you use it: a floor pump for home, a mini pump or hand pump for the road, and a foot pump or compact pump for travel.',
    'This guide compares pump types, explains how to match the pump head to your valve, shows how to set pressure, covers e-bikes and fat tyres and lists what we stock. Prices are current Torque E-Bikes prices. We do not sell pumps, so the guide helps you buy one from a specialist, and links the tubes and levers we do stock. For tubes, see our [bike tubes guide](/blog/bike-tubes/).',
  ],
  sections: [
    {
      h: 'Bike pump types compared',
      p: [
        'Each pump type suits a job. Many riders own two: a floor pump at home and a mini pump on the bike.',
      ],
      table: {
        head: ['Pump type', 'Best for', 'Strength', 'Limit'],
        rows: [
          ['Floor pump', 'Home and workshop', 'Fast, easy and has a gauge', 'Too big to carry'],
          ['Mini or frame pump', 'On the bike for roadside repairs', 'Small and light', 'Slow and hard work for large tyres'],
          ['Hand pump', 'Short trips and emergency use', 'Cheap and compact', 'Slow'],
          ['Foot pump', 'Home use and travel', 'Easy on the hands', 'Less accurate gauge on cheap models'],
          ['CO2 inflator', 'Fast roadside inflation', 'Very quick', 'Uses cartridges and is hard to control'],
        ],
      },
    },
    {
      h: 'Match the pump head to your valve',
      p: [
        'Park Tool\'s [guide to tire, wheel and inner tube fit standards](https://www.parktool.com/en-us/blog/repair-help/tire-wheel-and-inner-tube-fit-standards) says Schrader valves are about 8 mm wide, are common on cars and many bikes and have an internal spring, and that Presta valves are about 6 mm wide, are common on higher-end road and mountain bikes and need their locknut loosened before inflation. Check which you have, then buy a pump head that fits.',
        'Many pumps have a head that fits both, or come with adapters. A pump with adapters is the safest choice if you own more than one bike or may buy a new one. If you have deep rims with long valve stems, check that the pump head reaches the valve.',
      ],
    },
    {
      h: 'How to set the right pressure',
      ul: [
        '**Read the sidewall.** Tyres print a recommended pressure range. Stay inside it.',
        '**Start in the middle.** Use a pressure in the middle of the range for your weight and tyre, then adjust.',
        '**Lower for grip and comfort.** Softer tyres roll over bumps and grip on loose ground. Do not go below the minimum.',
        '**Higher for hard roads.** Firmer tyres roll faster on smooth surfaces. Do not exceed the maximum.',
        '**Check often.** Tubes lose air over days, so check before every ride.',
        '**Use a gauge.** Park Tool says to inflate to full pressure and check with a gauge.',
        '**Account for load.** Heavier riders and loaded bikes need more pressure within the range.',
      ],
      img: { file: 'blog/bike-pump-tube.webp', alt: '79Bike inner tube, a tube that needs a bike pump', w: 720, h: 540 },
    },
    {
      h: 'Inflating a tyre after a tube change',
      p: [
        'Park Tool\'s [tire and tube removal and installation guide](https://www.parktool.com/en-us/blog/repair-help/tire-and-tube-removal-and-installation) says to inflate slightly, confirm that the bead seat line sits evenly above the rim, and then inflate to full pressure and check with a gauge. If a bead sticks, it suggests soapy water and says not to use grease or oil.',
        'Take your time with the first few strokes. A tube that is twisted or a tyre that is not seated shows up early, and it is easier to deflate and fix it than to chase a puncture later.',
      ],
    },
    {
      h: 'E-bikes, fat tyres and heavy bikes',
      ul: [
        '**E-bikes are heavy.** A heavier bike needs pressures toward the higher end of the tyre range, within the maker\'s limits.',
        '**Fat tyres use low pressure.** They work at much lower pressures than road tyres, so a floor pump with a gauge that reads low pressures is useful. Ask the maker for the right range.',
        '**Check the pump gauge.** A gauge made for high pressures can be hard to read at low pressures.',
        '**Carry a mini pump.** Large tyres need many strokes, so a mini pump with a high volume is better than one built for narrow tyres.',
        '**Check the valve on your wheel.** Look at the valve before you choose a pump head.',
      ],
    },
    {
      h: 'What to look for when you buy',
      ul: [
        '**A secure head.** A locking lever or a screw-on head stops the pump slipping off the valve.',
        '**A readable gauge.** Look for a gauge you can read easily and that covers the range you need.',
        '**Stroke volume.** A bigger barrel moves more air per stroke, which suits large tyres.',
        '**A long hose.** A long hose reaches awkward valves.',
        '**Solid construction.** A steel or alloy barrel and a stable base last longer.',
        '**Adapters.** Useful if you own different bikes.',
        '**Weight and size for a mini pump.** It must fit on the frame or in a bag. See our [bike tool kit guide](/blog/bike-tool-kit/).',
      ],
    },
    {
      h: 'Floor pump or mini pump first?',
      p: [
        'If you can only buy one, buy the floor pump. Most flats start as slow leaks and low pressure, and a floor pump with a gauge is the tool that prevents them, because it makes it easy to check and top up before every ride. A mini pump only matters once you ride far enough from home that a puncture would strand you, and then it earns its place on the bike.',
        'Budget accordingly: spend a little more on the floor pump you use weekly, and keep the mini pump simple and light.',
      ],
    },
    {
      h: 'Related items we stock',
      p: [
        'We do not sell pumps. We stock a spare tube, a tyre and a lever kit that work with one. Product pages publish the name, brand and price only.',
      ],
      table: {
        head: ['Item', 'Brand', 'Price', 'Use'],
        rows: [
          ['[79Bike Inner Tube](/shop/wheels-tyres-and-tubes/79bike-inner-tube/)', '79Bike', '$38.95', 'Spare tube'],
          ['[Lezyne Lever Kit Light Grey](/shop/care-tools-and-hydration/lezyne-lever-kit-light-grey/)', 'Lezyne', '$18.95', 'Tyre levers'],
          ['[79Bike Tyre](/shop/wheels-tyres-and-tubes/79bike-tyre/)', '79Bike', '$179', 'Replacement tyre'],
        ],
      },
    },
    {
      h: 'A two-minute pre-ride pressure check',
      ul: [
        '**Look at the tyres.** A tyre that looks squashed or sags under you is low.',
        '**Squeeze is not a gauge.** Pinching the tyre is a rough check at best. Use a gauge when you can.',
        '**Remove the valve cap.** Keep it somewhere safe.',
        '**Press the head on straight and lock it.** Check that air is not hissing out.',
        '**Pump to the pressure you chose.** Stay within the range on the sidewall.',
        '**Remove the head quickly.** A short hiss is normal.',
        '**Refit the cap.** It keeps dirt out of the valve.',
        '**Repeat for the other wheel.** Check both, not just one.',
      ],
    },
    {
      h: 'Common pump problems and fixes',
      p: [
        'If air leaks around the head, press the head on straighter and check that the lever is locked. If the valve will not take air, check that a Presta locknut is loosened, as Park Tool advises, and that the valve core is not stuck. If the pump moves air but the tyre does not rise, check that the tube is not punctured and that the tyre is seated on the rim.',
        'If the gauge reads strangely, compare it with a second gauge and check whether the gauge only reads correctly when you stop pumping, which is true of some pumps. If pumping becomes hard or the handle springs back, the seal or the head may be worn, and replacing the part is cheaper than a new pump.',
        'If you cannot get the tyre to hold air at all, change the tube and check the rim tape and the inside of the tyre for the cause. Our [bike puncture repair kit guide](/blog/bike-puncture-repair-kit/) explains how.',
      ],
    },
    {
      h: 'Carrying a pump: where and how',
      ul: [
        '**On the frame.** A frame pump clips under the top tube or beside the bottle cage, using mounts or straps.',
        '**In a bag.** A mini pump fits in a saddle bag, a pannier or a backpack.',
        '**In a pocket.** Small hand pumps and CO2 inflators fit a jersey pocket.',
        '**On an e-bike.** Check that the pump does not block the battery, the lights or the rack.',
        '**Secure it.** A pump that rattles loose is a lost pump.',
        '**Keep the head clean.** Dirt in the head makes it leak.',
      ],
    },
    {
      h: 'Looking after your pump',
      ul: [
        '**Keep it clean and dry.** Wipe the barrel and the head after use.',
        '**Check the seal.** A worn seal leaks and makes pumping harder.',
        '**Store it upright or flat as the maker advises.** Avoid heat.',
        '**Do not over-tighten the head.** It can damage the valve.',
        '**Check the gauge.** Compare it with a second gauge now and then.',
        '**Carry the right adapter.** Keep it with the pump.',
      ],
    },
    {
      h: 'Bike pump mistakes to avoid',
      ul: [
        '**Guessing the pressure.** Read the sidewall and use a gauge.',
        '**Buying the wrong head.** Check the valve type first.',
        '**Over-inflating.** Do not exceed the tyre maximum.',
        '**Relying on a cheap mini pump for big tyres.** It will take too long.',
        '**Forcing the head on.** Press it straight and lock it.',
        '**Never checking pressure.** Tubes lose air over time.',
      ],
    },
    {
      h: 'Which bike pump should you buy?',
      p: [
        'Buy a floor pump with a good gauge for home, and a mini pump or CO2 inflator for the road. If you ride an e-bike or a fat tyre, choose a pump that handles large volume and low pressure. Pair the pump with a spare tube such as the [79Bike Inner Tube at $38.95](/shop/wheels-tyres-and-tubes/79bike-inner-tube/) and levers such as the [Lezyne Lever Kit at $18.95](/shop/care-tools-and-hydration/lezyne-lever-kit-light-grey/). Browse the full [care, tools and hydration range](/shop/care-tools-and-hydration/).',
        'Tell us your bike and tyres, and we will help you match a tube and levers. All orders ship Australia-wide with dangerous-goods certified dispatch.',
      ],
    },
  ],
  faq: [
    { q: 'What is the best bike pump?', a: 'There is no single best. A floor pump with a gauge is best at home, and a mini pump or CO2 inflator is best on the road. Choose a head that fits your valve, a readable gauge and enough volume for your tyres.' },
    { q: 'What is the difference between Presta and Schrader valves?', a: 'Schrader valves are about 8 mm wide, common on cars and many bikes. Presta valves are about 6 mm wide, common on higher-end bikes, and need the locknut loosened before inflating, according to Park Tool.' },
    { q: 'How much air should I put in my bike tyres?', a: 'Use the pressure range printed on the tyre sidewall. Start in the middle, go lower for grip and comfort and higher for speed on smooth roads, and never go outside the range. Check with a gauge.' },
    { q: 'Can one pump fit all valves?', a: 'Many pumps have a head that fits both Presta and Schrader, or come with adapters. Check the pump specification and your valve type before you buy.' },
    { q: 'How do I pump an e-bike tyre?', a: 'The same way as any bike, using the pressure range on the tyre. E-bikes are heavy, so pressures toward the higher end of the range are common, within the maker\'s limits. Check the valve type first.' },
    { q: 'Do you sell bike pumps?', a: 'No. We stock a 79Bike inner tube at $38.95, a 79Bike tyre at $179 and a Lezyne lever kit at $18.95. Buy a pump from a specialist.' },
  ],
  keywords: { primary: 'bike pump', supporting: ['pump for a bike', 'bicycle pump', 'bike cycle pump', 'bicycle floor pump', 'floor bike pump'] },
  words: 0,
}
