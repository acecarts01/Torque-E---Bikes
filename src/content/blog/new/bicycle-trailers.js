// Blog post written to the blog-post rule (see ~/.claude/skills/blog-post/SKILL.md).
// Keywords: volume / KD / intent from Semrush AU Keyword Magic (27 Oct 2026), recorded in docs/used-keywords.csv.
// Sources opened 27 Oct 2026: Queensland Government bicycle road rules page (towing, child in a trailer, loads, bell, lights) and the Queensland helmets-and-equipment page.
// Product pages publish no capacities or weights, so the post claims only names, brands and prices.
export const meta = {
  id: 'bicycle-trailers',
  slug: 'bicycle-trailers',
  url: '/blog/bicycle-trailers/',
  title: 'Bicycle Trailers: How to Choose a Bike Trailer for Cargo',
  seoTitle: 'Bicycle Trailers: How to Choose a Bike Trailer for Cargo',
  excerpt: 'Choosing bicycle trailers? Compare Pacific, Beach Deluxe and Cargo Deluxe trailers from $299, check hitch fit, loads, Queensland rules and how to tow safely.',
  category: 'Buying Guides',
  date: '2026-10-27',
  readTime: '10 min',
  focus: 'bicycle trailers',
  secondary: ['cycling trailers', 'bicycle cargo trailer', 'bike and trailer', 'trailer for bike', 'trailer for bikes'],
  tags: ['bicycle trailer', 'bicycle with a trailer', 'bicycle with trailer', 'bike trailer mtb', 'mountain bike trailers', 'bicycle trailer australia', 'pushbike trailer', 'trailer bike', 'bike attachment for bike trailer', 'bike trailer bike attachment'],
  image: {
    file: 'blog/bicycle-trailers.webp',
    alt: 'Pacific, Beach Deluxe and Cargo Deluxe bicycle trailers side by side',
    query: 'bicycle trailers',
    credit: null,
  },
  related: [
    { href: '/shop/racks-bags-and-trailers/pacific-bike-trailer/', name: 'Pacific Bike Trailer', price: 299, note: 'The lowest-priced trailer in our range.' },
    { href: '/shop/racks-bags-and-trailers/beach-deluxe-bike-trailer/', name: 'Beach Deluxe Bike Trailer', price: 469, note: 'A mid-priced trailer from Ampd Bros.' },
    { href: '/shop/racks-bags-and-trailers/cargo-deluxe-bike-trailer/', name: 'Cargo Deluxe Bike Trailer', price: 659, note: 'The highest-priced trailer in our range.' },
    { href: '/shop/racks-bags-and-trailers/', name: 'All racks, bags and trailers', note: 'Trailers, panniers, crates and covers.' },
  ],
  links: {
    to: [
      ['/shop/racks-bags-and-trailers/', 'racks, bags and trailers'],
      ['/blog/bike-racks-baskets-and-trailers/', 'bike racks, baskets and trailers guide'],
      ['/blog/electric-cargo-bikes/', 'electric cargo bikes guide'],
      ['/blog/bike-panniers/', 'bike panniers buying guide'],
    ],
    from: [
      ['/shop/racks-bags-and-trailers/', 'bicycle trailers buying guide'],
      ['/shop/racks-bags-and-trailers/cargo-deluxe-bike-trailer/', 'how to choose a bicycle cargo trailer'],
      ['/shop/racks-bags-and-trailers/pacific-bike-trailer/', 'bike and trailer: what to check before you buy'],
    ],
  },
  kind: 'post',
}

export const body = {
  hook: 'Bicycle trailers carry far more than a rack can, but the hitch, the weight and the stopping distance all change. Match the trailer to your bike and your load, and tow with the rules in mind.',
  intro: [
    'Bicycle trailers let you move shopping, tools, camping gear or beach kit by bike, with the weight low and behind you. A good trailer turns a short trip you would have driven into a bike trip. This guide helps you choose between the trailers in our range, check that one will hitch to your bike, and tow it safely under Queensland\'s rules.',
    'We compare the Pacific, Beach Deluxe and Cargo Deluxe trailers from $299, explain hitch types and braking, set out what the Queensland Government says about towing, loads and children, and answer the common questions. Prices are current Torque E-Bikes prices.',
  ],
  sections: [
    {
      h: 'Bicycle trailers in our range and their prices',
      p: [
        'Our [racks, bags and trailers](/shop/racks-bags-and-trailers/) range includes three trailers. Product pages publish the brand and price but not capacity, weight or hitch details, so ask us to confirm size, load rating and hitch fit for your bike before you order.',
      ],
      table: {
        head: ['Trailer', 'Brand', 'Price', 'Good for'],
        rows: [
          ['[Pacific Bike Trailer](/shop/racks-bags-and-trailers/pacific-bike-trailer/)', 'Pacific', '$299', 'Entry-level hauling'],
          ['[Beach Deluxe Bike Trailer](/shop/racks-bags-and-trailers/beach-deluxe-bike-trailer/)', 'Ampd Bros', '$469', 'Beach, picnic and weekend loads'],
          ['[Cargo Deluxe Bike Trailer](/shop/racks-bags-and-trailers/cargo-deluxe-bike-trailer/)', 'Ampd Bros', '$659', 'Bigger, heavier cargo'],
        ],
      },
    },
    {
      h: 'Why choose a bike and trailer instead of panniers',
      p: [
        'Panniers and a rack carry perhaps one or two bags. A bike and trailer carries a bulky or awkward load: a week\'s groceries, a toolbox, firewood, a folding chair and an esky, or a market stall. The weight sits low and behind the rear axle, and the bike\'s own handling stays closer to normal than with a heavy rear rack.',
        'A trailer also leaves the bike free of racks and bags, so you can remove it and ride unladen. It does add length to turn and to park, and it needs more space to brake. For daily small loads, our [bike panniers guide](/blog/bike-panniers/) is the lighter option. For anything bigger, a trailer is the tool.',
        'If you are building a bike around hauling, an electric cargo bike carries the load itself. Our [electric cargo bikes guide](/blog/electric-cargo-bikes/) compares them, and a trailer is a cheaper way to add capacity to a bike you already own.',
      ],
    },
    {
      h: 'Choosing a bicycle cargo trailer: what to check',
      ul: [
        '**Load rating.** Ask the maker for the maximum load and stay under it, including the weight of the trailer itself and anything strapped on.',
        '**Hitch type.** Most trailers hitch to the rear axle or to a frame mount. Check that the hitch suits your quick-release or thru-axle, and your frame, before you buy.',
        '**Tyres and wheels.** Larger, wider wheels roll better on rough surfaces. Check that the wheels can be removed for storage and flats.',
        '**Frame and deck.** A rigid frame with a solid deck suits tools and boxes. A tub or fabric bin suits soft loads and gear.',
        '**Folding and storage.** A trailer that folds fits a garage or a car boot more easily.',
        '**Flag and lights.** Choose a trailer you can fit with a reflector, a rear light and a visible flag so drivers see it.',
        '**Brakes and weight.** Heavy loads need more stopping distance, and the bike\'s brakes must cope. Review your brake pads before the first big haul.',
      ],
      img: { file: 'blog/bicycle-trailers-cargo-deluxe.webp', alt: 'Cargo Deluxe bike trailer from Ampd Bros', w: 720, h: 540 },
    },
    {
      h: 'Hitching a trailer for bike: axle, frame and e-bike checks',
      p: [
        'The hitch is the make-or-break part. A trailer coupler usually attaches to the left rear axle nut, the rear dropout or a seatstay mount. Thru-axle bikes, carbon frames and bikes with rear racks or disc brakes can complicate things, so describe your bike when you ask us about fit.',
        'On an e-bike, check where the motor and battery sit. A rear hub motor, a rack-mounted battery or a rear-mounted rack may block the hitch position. A trailer that suits a standard bike may need a different mount on a motor-driven wheel. Send us your model and we will advise before you order.',
        'The hitch should allow the trailer to pivot and tilt, so a lean in the bike does not flip it. Check for wear and play every time you hitch up, and use the safety strap if one is supplied.',
      ],
    },
    {
      h: 'Queensland rules for towing: loads, children and equipment',
      p: [
        'The Queensland Government\'s [bicycle road rules page](https://www.qld.gov.au/transport/safety/rules/wheeled-devices/bicycle) says you can carry a load but must attach it so the bicycle stays stable and make sure it is unlikely to fall off. The page does not set a weight or size limit, so use the trailer maker\'s rating as your limit. It also says you must not ride a bicycle that is being towed by another vehicle or hold on to a moving vehicle.',
        'For children, the same page says you can tow a child in a bicycle trailer if you are 16 or older, the child is under 10 and wears an approved helmet that is securely fitted and fastened, and the trailer can safely carry the child. Check that any trailer you use for a child is designed for passengers, and read its manual.',
        'The page also says the bicycle must have a working brake and a working bell, horn or similar warning device, and at night or in poor visibility a white front light and a red rear light visible from 200 metres and a red reflector. A trailer sits behind your rear light, so see the next section.',
        'Rules differ between states. Product pages in our range carry the line to check your state road authority rules before riding on public roads.',
      ],
    },
    {
      h: 'Lights, flags and visibility on a bike and trailer',
      p: [
        'A long trailer hides the bike\'s rear light from drivers, or at least puts it in the wrong place. Fit a red rear light and reflector on the back of the trailer itself, and add a bright flag on a pole so drivers see the whole outfit from a distance. The Queensland Government\'s [helmets and equipment page](https://www.qld.gov.au/transport/public/bicycle-riding/safety/helmets-and-equipment) lists the lights and reflector a bicycle needs after dark. Our [e-bike lights guide](/blog/e-bike-lights/) explains the lights you need.',
        'Check the visibility with a friend standing behind the rig at dusk. If you cannot see a light from 20 metres, a driver will not see it from 200.',
        'Keep your own front light and bell in working order, and take extra care at night with a loaded trailer, since stopping distances grow with weight.',
      ],
    },
    {
      h: 'Riding with a loaded trailer: braking, turning and hills',
      ul: [
        '**Start light.** Ride your first trip with a light load so you learn the feel before you add weight.',
        '**Brake earlier.** A loaded trailer pushes the bike forward, so you need a longer stopping distance. Apply both brakes smoothly.',
        '**Take wide turns.** The trailer cuts the corner. Swing out and give yourself room, especially at kerbs and posts.',
        '**Keep the load low and centred.** Heavy items go on the floor, near the axle, and are strapped down.',
        '**Watch the hills.** Descents with a heavy trailer need patience and a lot of brake. On an e-bike, check the motor and brakes can cope.',
        '**Avoid bumpy edges.** Potholes and kerbs jolt the trailer and can shake the load loose.',
        '**Park carefully.** A trailer extends the bike, so choose a spot where it will not block a path.',
      ],
    },
    {
      h: 'Bicycle trailer maintenance and storage',
      p: [
        'After each haul, check the hitch, the wheel nuts, the frame joints and the tyres. Tighten what has loosened, and clean mud and sand from moving parts. Lubricate the pivot sparingly with a suitable lube, and wipe off the excess so it does not collect grit. Our [lubricant for bike chains guide](/blog/lubricant-for-bike-chains/) covers lube choice for the bike.',
        'Pump the tyres to the pressure moulded on the sidewall. A soft trailer tyre drags, and a flat is a nuisance with a load on board. Carry a spare tube that fits the trailer wheel.',
        'Store the trailer under cover and out of the sun. A [bicycle cover](/blog/bicycle-cover/) works for a bike, and a trailer benefits from a tarp or a shed.',
      ],
    },
    {
      h: 'Bicycle trailer mistakes to avoid',
      ul: [
        '**Overloading.** Stay under the maker\'s rating, and remember the trailer itself has weight.',
        '**Ignoring the hitch fit.** A wrong mount is a safety problem.',
        '**Forgetting lights.** A trailer can hide your rear light.',
        '**Carrying a child in a trailer not made for passengers.** Use a passenger trailer and follow the age and helmet rules.',
        '**Strapping loads loosely.** The load must be secured so it is unlikely to fall off.',
        '**Skipping the test ride.** Practise turning and braking with a light load first.',
      ],
    },
    {
      h: 'Which bicycle trailer should you buy?',
      p: [
        'If you want a straightforward trailer for occasional loads, the [Pacific bike trailer at $299](/shop/racks-bags-and-trailers/pacific-bike-trailer/) is the lowest-priced option. For beach and weekend gear, the [Beach Deluxe trailer at $469](/shop/racks-bags-and-trailers/beach-deluxe-bike-trailer/) is the mid-range pick. For heavier or bulkier cargo, the [Cargo Deluxe trailer at $659](/shop/racks-bags-and-trailers/cargo-deluxe-bike-trailer/) is the top of our range.',
        'Send us your bike model and what you plan to haul, and we will confirm the hitch fit and load. You can also browse the full [trailer and rack range](/shop/racks-bags-and-trailers/) and our [guide to racks, baskets and trailers](/blog/bike-racks-baskets-and-trailers/).',
      ],
    },
  ],
  faq: [
    { q: 'How much weight can a bicycle trailer carry?', a: 'It depends on the model. Ask the maker or us for the rated load and stay under it, remembering the trailer\'s own weight counts. Heavy loads also need longer stopping distances, so check your brakes before a big haul.' },
    { q: 'Will a trailer fit my e-bike?', a: 'Often, but check. Rear hub motors, rack-mounted batteries and thru-axles can affect the hitch. Send us your model and we will confirm which hitch suits before you order.' },
    { q: 'Can I tow a child in a bicycle trailer in Queensland?', a: 'The Queensland Government says you can if you are 16 or older, the child is under 10 and wears an approved helmet that is securely fitted and fastened, and the trailer can safely carry the child. Use a trailer designed for passengers.' },
    { q: 'Do I need lights on a bike trailer?', a: 'Queensland requires a white front light, a red rear light and a red reflector at night. A trailer can hide the bike\'s rear light, so fit a red light and reflector on the back of the trailer too.' },
    { q: 'Is a trailer better than panniers?', a: 'For bulky or heavy loads, yes. For daily small loads panniers are lighter and simpler. A trailer adds length and stopping distance, so it takes practice.' },
    { q: 'How do I secure a load in a trailer?', a: 'Put heavy items low and near the axle, strap everything down and make sure nothing can shift or fall off. Queensland says a load must be attached so the bicycle stays stable and is unlikely to fall off.' },
  ],
  keywords: { primary: 'bicycle trailers', supporting: ['cycling trailers', 'bicycle cargo trailer', 'bike and trailer', 'trailer for bike', 'trailer for bikes'] },
  words: 0,
}
