// Blog post written to the blog-post rule (see ~/.claude/skills/blog-post/SKILL.md).
// Keywords: volume / KD / intent from Semrush AU Keyword Magic (6 Nov 2026), recorded in docs/used-keywords.csv and docs/blog-plan-batches-2026-11-06.html.
// Sources opened 7 Nov 2026: Queensland Government bicycle rules page (you can carry a load; attach it so the bicycle is not unstable and the load is unlikely to fall; carry passengers only if the bicycle is designed for them); Queensland Government electric bicycle rules page.
// Our product pages publish names and prices only, so no load rating, weight, mounting type or fitment is claimed; readers are told to ask. The Azur carrier is named "Disc Brake Compatible" on our page, which is the only fit claim made.
export const meta = {
  id: 'bike-rear-rack',
  slug: 'bike-rear-rack',
  url: '/blog/bike-rear-rack/',
  title: 'Bike Rear Rack Guide: Cargo and Pannier Racks From $61.95',
  seoTitle: 'Bike Rear Rack Guide: Cargo and Pannier Racks From $61.95',
  excerpt: 'Choosing a bike rear rack? Compare Fatboy, Ampd Bros, NCM and Azur racks from $61.95, check load and brake clearance and see the Queensland load rule.',
  category: 'Buying Guides',
  date: '2026-11-07',
  readTime: '9 min',
  focus: 'bike rear rack',
  secondary: ['front bike rack', 'rack for rear of bike', 'cycle pannier rack', 'cycle panniers and racks', 'bike rack and panniers'],
  tags: ['rear cycle rack', 'cycle luggage rack', 'bike rack basket', 'bicycle back rack baskets', 'bike basket rear rack', 'bicycle rack basket', 'bicycle luggage rack rear', 'pannier bike rack', 'bike with pannier rack', 'panniers and rack'],
  image: {
    file: 'blog/bike-rear-rack.webp',
    alt: 'Bike rear rack options: Azur alloy touring carrier, Ampd Bros Ace rear cargo rack and Fatboy cargo rack',
    query: 'bike rear rack',
    credit: null,
  },
  related: [
    { href: '/shop/racks-bags-and-trailers/azur-alloy-touring-carrier-disc-brake-compatible/', name: 'Azur Alloy Touring Carrier (Disc Brake Compatible)', price: 61.95, note: 'The lowest-priced rack we list.' },
    { href: '/shop/racks-bags-and-trailers/ampd-bros-ace-rear-cargo-rack/', name: 'Ampd Bros Ace Rear Cargo Rack', price: 99, note: 'A rear cargo rack.' },
    { href: '/shop/racks-bags-and-trailers/fatboy-cargo-rack-rear-v1/', name: 'Fatboy Cargo Rack Rear V1', price: 119, note: 'A rear rack for Fatboy models.' },
    { href: '/shop/racks-bags-and-trailers/rear-carrier-rack-light-kit-for-ncm-e-bikes/', name: 'Rear Carrier Rack + Light Kit for NCM E-Bikes', price: 149, note: 'A rack and light kit for NCM e-bikes.' },
    { href: '/shop/racks-bags-and-trailers/azur-commuter-rear-pannier-bag-pair-48l-black/', name: 'Azur Commuter Rear Pannier Bag Pair 48L', price: 109, note: 'Panniers for a rear rack.' },
    { href: '/shop/racks-bags-and-trailers/', name: 'All racks, bags and trailers', note: 'Racks, bags and trailers.' },
  ],
  links: {
    to: [
      ['/shop/racks-bags-and-trailers/', 'racks, bags and trailers'],
      ['/blog/bike-panniers/', 'bike panniers guide'],
      ['/blog/bicycle-basket/', 'bicycle basket guide'],
      ['/blog/trekking-bike/', 'trekking bicycle guide'],
      ['/blog/ncm-ebike/', 'NCM e-bike guide'],
    ],
    from: [
      ['/shop/racks-bags-and-trailers/', 'bike rear rack guide'],
      ['/shop/racks-bags-and-trailers/ampd-bros-ace-rear-cargo-rack/', 'rack for rear of bike: what to check'],
      ['/shop/racks-bags-and-trailers/fatboy-cargo-rack-rear-v1/', 'cycle pannier rack: how to choose'],
    ],
  },
  kind: 'post',
}

export const body = {
  hook: 'We list six rear racks and carriers, from the Azur Alloy Touring Carrier at $61.95 to the NCM rack and light kit at $149. Here is how to choose one, what to check on your frame and what Queensland says about loads.',
  intro: [
    'A bike rear rack turns an ordinary bike into a bike that can carry a week\'s shopping, a work bag or a weekend of camping. It sits over the back wheel, takes panniers or a bag and keeps the weight off your back, which is a relief in a Queensland summer. On an e-bike, a rack also helps with the motor and battery weight, as long as the rack is rated for what you put on it.',
    'This guide compares the racks and carriers in our range with prices, shows how to check that one fits your frame and brakes, explains rack and pannier combinations, covers loading and what Queensland says, and lists common mistakes. Our product pages publish names and prices only, so we do not quote load ratings or weights and ask you to confirm fit before you order. Prices are in Australian dollars as listed on 7 November 2026.',
  ],
  sections: [
    {
      h: 'Rear racks in our range: prices at a glance',
      p: [
        'We list six rear racks and carriers across the racks, bags and trailers category. The table below shows each one with its price on 7 November 2026. Our product pages do not publish load limits, mounting types or the bikes each rack suits, so message the team on WhatsApp with your bike before you order and we will confirm which rack fits.',
      ],
      table: {
        head: ['Rack', 'Price (AUD)', 'Notes'],
        rows: [
          ['Azur Alloy Touring Carrier', '$61.95', 'Named disc brake compatible'],
          ['Ampd Bros Ace Rear Cargo Rack', '$99', 'Rear cargo rack'],
          ['Fatboy Cargo Rack Rear V1', '$119', 'Fatboy model rack, V1'],
          ['Fatboy Cargo Rack Rear V2', '$119', 'Fatboy model rack, V2'],
          ['Fatboy Cargo Rack Rear V3', '$119', 'Fatboy model rack, V3'],
          ['Rear Carrier Rack + Light Kit for NCM E-Bikes', '$149', 'Rack plus light for NCM e-bikes'],
        ],
      },
    },
    {
      h: 'Which bike rear rack suits which bike?',
      img: { file: 'blog/bike-rear-rack-rear-carrier-rack-light-kit-for-ncm-e-bikes.webp', alt: 'Rear carrier rack and light kit for NCM e-bikes, a rack for the rear of a bike', w: 720, h: 540 },
      p: [
        'The [Azur Alloy Touring Carrier](/shop/racks-bags-and-trailers/azur-alloy-touring-carrier-disc-brake-compatible/) is $61.95 and is named disc brake compatible on our page, which matters because disc brakes can clash with a rack on some frames. The [Ampd Bros Ace Rear Cargo Rack](/shop/racks-bags-and-trailers/ampd-bros-ace-rear-cargo-rack/) is $99. The Fatboy rear racks come in three versions at $119 each, and the [Fatboy Cargo Rack Rear V1](/shop/racks-bags-and-trailers/fatboy-cargo-rack-rear-v1/) is a good example of a rack made for one model family.',
        'The [Rear Carrier Rack + Light Kit for NCM E-Bikes](/shop/racks-bags-and-trailers/rear-carrier-rack-light-kit-for-ncm-e-bikes/) is $149 and is made for NCM e-bikes, with a light included. Our [NCM e-bike guide](/blog/ncm-ebike/) explains that range. Choose a rack made for your bike where you can, because a model-specific rack lines up with the mounting points and the battery.',
      ],
    },
    {
      h: 'How to check a rear rack fits: a checklist',
      ul: [
        '**Mounting points.** Look for eyelets on the seat stays and near the rear axle. Without them you need clamps or a different rack.',
        '**Wheel size.** A rack for a 26 inch wheel will not suit a 29 inch wheel.',
        '**Disc brake clearance.** Check the rack stays clear of the caliper, as the Azur carrier\'s name suggests.',
        '**Battery or suspension.** A rear battery or a rear shock can block a standard rack.',
        '**Load rating.** Ask for the rack\'s rated load and compare it with the load you plan to carry.',
        '**Frame limit.** The bike also has a limit on total weight, so check the maker\'s figure.',
        '**Light mount.** A rack with a light mount lets you add a rear light.',
        '**Pannier compatibility.** Check the rails and hooks suit your bags.',
      ],
    },
    {
      h: 'Cycle pannier racks and panniers',
      img: { file: 'blog/bike-rear-rack-azur-commuter-rear-pannier-bag-pair-48l-black.webp', alt: 'Azur commuter rear pannier pair, bike rack and panniers for a cycle pannier rack', w: 720, h: 540 },
      p: [
        'A cycle pannier rack has rails on each side that hold a pair of panniers low and out of the way. The [Azur Commuter Rear Pannier Bag Pair 48L](/shop/racks-bags-and-trailers/azur-commuter-rear-pannier-bag-pair-48l-black/) is $109 and is a pair of rear pannier bags. Hang them low, balance the weight between the two sides and make sure they clear your heels when you pedal.',
        'Our [bike panniers guide](/blog/bike-panniers/) explains sizes, waterproofing and packing. If you prefer a basket for shopping, the [bicycle basket guide](/blog/bicycle-basket/) covers the options, and a rack basket sits on top of the rack. A rack with a flat top can hold a basket or a crate, but check the load rating before you fill it.',
      ],
    },
    {
      h: 'Front bike rack or rear rack?',
      p: [
        'People search for a front bike rack when they want to balance a load. A front rack sits over the front wheel, usually on a low-rider mount, and puts weight on the steering, which changes the handling. Many tourers split the load, with heavier items at the back and lighter ones at the front.',
        'For most commuters, a rear rack is simpler: it is easier to fit, easy to load and does not affect steering. We list rear racks only, so if you want a front rack, check your fork has the mounts and buy from a specialist. Do not put a heavy load on the front of a bike with a suspension fork unless the maker allows it.',
      ],
    },
    {
      h: 'Loading a rear rack: weight, balance and stability',
      p: [
        'Put heavy items low and close to the centre of the bike, and keep the load even from left to right. A heavy bag high on the rack makes the bike top-heavy and the steering light. Strap the load firmly, because a shifting load is a hazard, and check that straps and bag corners do not touch the wheel or the brake.',
        'An e-bike with a rear motor or battery already carries weight at the back, so keep the rack load modest unless the maker says otherwise. Test the bike with a load in a quiet area before you ride in traffic, and check that it still stops well. Heavier loads need more braking distance.',
      ],
    },
    {
      h: 'Queensland rules: carrying a load and passengers',
      p: [
        'The Queensland Government\'s [bicycle rules page](https://www.qld.gov.au/transport/safety/rules/wheeled-devices/bicycle) says you can carry a load on your bicycle, but you must attach it in a way that does not make the bicycle unstable and make sure it is unlikely to fall from the bicycle. It also says you may carry passengers only if the bicycle is designed to carry passengers, and carrying more than the bike is designed for is a common offence.',
        'A rack is not a passenger seat, and it is not made to carry a person unless the maker says so. The [electric bicycle rules page](https://www.qld.gov.au/transport/safety/rules/wheeled-devices/electric-bicycle-rules) sets the power and speed limits for e-bikes, and a rack does not change them. Check lights as well: the bicycle rules require a red light visible from 200 metres behind at night, so do not let a bag cover it.',
      ],
    },
    {
      h: 'Fitting a rear rack and checking it',
      p: [
        'Bolt the rack to the mounting points with the supplied hardware, starting with the top mounts and then the lower ones, and keep the rack level. Tighten the bolts firmly, using thread locker if the maker advises, and check there is clearance around the wheel, the brakes and the light. Spin the wheel and brake to check nothing rubs.',
        'After the first ride, recheck the bolts, because vibration loosens them. Check them again every few weeks, and watch for cracks near the welds. A rack that creaks or sways is a sign that the bolts are loose or the load is too heavy. Our [trekking bicycle guide](/blog/trekking-bike/) shows how a rack and panniers turn a bike into a tourer.',
      ],
    },
    {
      h: 'Rack materials, strength and weight',
      p: [
        'Racks are commonly made from aluminium alloy or steel. Aluminium is lighter and does not rust, which suits a commuter. Steel is stronger and easier to repair but heavier and needs paint or plating to resist rust. The material matters less than the design and the quality of the welds, so look at the joints and the thickness of the tubes, and ask us for the rack\'s rated load.',
        'A rack carries weight through its stays to the frame, so it is only as strong as the mounting points. Use all the mounting points the rack provides, use washers and the right bolt length and never drill a frame to fit a rack. If the frame has no eyelets, a clamp-on rack or a different bike is a safer choice than an improvised fix.',
        'Remember that the rack\'s rated load and the bike\'s limit are separate numbers, and the lower one decides how much you can carry. An e-bike\'s own weight uses up part of the frame\'s allowance, so a heavy rider and a full load can pass the limit quickly.',
      ],
    },
    {
      h: 'Rack extras: lights, straps and mudguard stays',
      p: [
        'A rack is a platform for other accessories. A rear light mounted on the rack keeps your light high and visible, and the NCM rack kit includes a light for that reason. Elastic straps or a bungee net hold small loads, while a rack top bag clips onto the rails for quick removal when you park.',
        'If you use mudguards, check how the stays and the rack share the same mounting points, because two sets of hardware on one eyelet can be awkward. A rack with its own mudguard mount avoids the problem. Keep reflectors and the light clear of bags, so you stay visible to traffic behind you.',
        'Fit extras after the rack is firmly installed and test the bike with the full load. A little planning here saves you from stopping on a ride to retighten a loose bolt or adjust a slipping strap.',
      ],
    },
    {
      h: 'Common mistakes when buying a bike rear rack',
      ul: [
        '**Ignoring disc brake clearance.** A rack that touches a caliper is dangerous.',
        '**Skipping the load rating.** Check the rack and the bike\'s limits.',
        '**Loading high and heavy.** It makes the bike unstable.',
        '**Covering the rear light.** Queensland requires a visible red light at night.',
        '**Carrying a passenger on the rack.** Only if the bike is designed for it.',
        '**Forgetting to retighten the bolts.** Check them after the first ride.',
      ],
    },
  ],
  faq: [
    { q: 'Which rear racks do you sell?', a: 'We list six, from the Azur Alloy Touring Carrier at $61.95 to the NCM rack and light kit at $149, with the Ampd Bros Ace at $99 and three Fatboy racks at $119. Message us with your bike to confirm fit before you order.' },
    { q: 'Will a rear rack fit my bike?', a: 'Check for mounting points, wheel size, disc brake clearance and any rear battery or shock. Choose a rack made for your bike where possible. Our product pages show names and prices only, so ask us if you are unsure.' },
    { q: 'How much weight can a rear rack carry?', a: 'It depends on the rack and the bike, and we do not publish the figures on our product pages. Ask us for the rack\'s rated load and check the bike maker\'s total weight limit, because the lower of the two applies.' },
    { q: 'Can I carry a passenger on a rear rack?', a: 'Not unless the bike is designed for it. The Queensland Government says you may carry passengers only if the bicycle is designed to carry them. A rack is for luggage, so check the maker\'s guidance.' },
    { q: 'Are panniers and racks sold together?', a: 'We list racks and pannier bags separately. The Azur Commuter Rear Pannier Bag Pair 48L is $109, and you hang it from a rack with suitable rails. Check the hooks and rails match before you order.' },
  ],
  keywords: { primary: 'bike rear rack', supporting: ['front bike rack', 'rack for rear of bike', 'cycle pannier rack', 'cycle panniers and racks', 'bike rack and panniers'] },
  words: 0,
}
