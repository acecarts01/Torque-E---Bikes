// Blog post written to the blog-post rule (see ~/.claude/skills/blog-post/SKILL.md).
// Keywords: volume / KD / intent from Semrush AU Keyword Magic (6 Nov 2026), recorded in docs/used-keywords.csv and docs/blog-plan-batches-2026-11-06.html.
// Sources opened 6 Nov 2026: Queensland Government bicycle rules page (loads must be attached so the bike stays stable and the load is unlikely to fall off); Cycling UK bar bag group test.
// Product facts per the supplier listings: Azur Touring Handlebar Bag (waterproof touch-screen phone pouch, quick-release bracket, shoulder strap, rain cover); Azur Commuter Rear Pannier pair 48 L (600D polyester, hook and strap attachment, quick-release clips, rigid back, rain cover, reflective strips, rack not included); Basil Crate M 29.5 L (load limit depends on the carrier). We do not stock saddle bags, frame bags or top tube bags and the post says so.
export const meta = {
  id: 'bicycle-bag',
  slug: 'bicycle-bag',
  url: '/blog/bicycle-bag/',
  title: 'Bike Bags: Handlebar, Pannier and Crate Options Compared',
  seoTitle: 'Bike Bags: Handlebar, Pannier and Crate Options Compared',
  excerpt: 'Choosing bike bags? Compare saddle, frame, handlebar, pannier and crate options, see load rules and what fits e-bikes, with bags from $74.95 in our range.',
  category: 'Buying Guides',
  date: '2026-11-06',
  readTime: '9 min',
  focus: 'bike bags',
  secondary: ['bike saddle pack', 'saddle bags', 'bike saddle bag', 'bicycle bag', 'bike frame pouch'],
  tags: ['saddle bag', 'bike frame bag', 'bicycle saddle bags', 'bicycle frame bag', 'bicycle packing', 'saddlebags', 'pannier bag', 'bicycle bags', 'saddlebag', 'top tube bag'],
  image: {
    file: 'blog/bicycle-bag.webp',
    alt: 'Bike bags: Azur touring handlebar bag, Azur commuter pannier pair and Basil crate',
    query: 'bike bags',
    credit: null,
  },
  related: [
    { href: '/shop/racks-bags-and-trailers/azur-touring-handlebar-bag-with-phone-pouch-grey/', name: 'Azur Touring Handlebar Bag with Phone Pouch (Grey)', price: 74.95, note: 'A handlebar bag with a touch-screen phone pouch.' },
    { href: '/shop/racks-bags-and-trailers/azur-commuter-rear-pannier-bag-pair-48l-black/', name: 'Azur Commuter Rear Pannier Bag Pair 48L (Black)', price: 109, note: 'A pair of rear panniers.' },
    { href: '/shop/racks-bags-and-trailers/basil-bicycle-crate-medium-29-5l-black/', name: 'Basil Bicycle Crate Medium 29.5L (Black)', price: 80.95, note: 'A rear crate.' },
    { href: '/shop/racks-bags-and-trailers/azur-alloy-touring-carrier-disc-brake-compatible/', name: 'Azur Alloy Touring Carrier (Disc Brake Compatible)', price: 61.95, note: 'A rack for panniers and crates.' },
    { href: '/shop/racks-bags-and-trailers/', name: 'All racks, bags and trailers', note: 'Racks, bags, crates and trailers.' },
  ],
  links: {
    to: [
      ['/shop/racks-bags-and-trailers/', 'racks, bags and trailers'],
      ['/blog/bike-panniers/', 'bike panniers guide'],
      ['/blog/bag-for-handlebars/', 'bag for handlebars guide'],
      ['/blog/cycling-backpack/', 'cycling backpack guide'],
    ],
    from: [
      ['/shop/racks-bags-and-trailers/', 'bike bags'],
      ['/shop/racks-bags-and-trailers/azur-touring-handlebar-bag-with-phone-pouch-grey/', 'bicycle bag: how to choose'],
      ['/shop/racks-bags-and-trailers/azur-commuter-rear-pannier-bag-pair-48l-black/', 'bike bags: what fits an e-bike'],
    ],
  },
  kind: 'post',
}

export const body = {
  hook: 'Choose bike bags by where the weight sits and what you carry: handlebar bags for small items, panniers and crates for loads on a rack, and saddle or frame bags for light touring. We stock handlebar, pannier and crate options from $74.95.',
  intro: [
    'Good bike bags turn a bike into a tool: commute to work with a laptop, shop for groceries, carry a jacket and lunch or load up for a weekend away. The wrong bag swings, rubs on your heels, leaks in the rain or overloads your rack. The right one disappears and lets you ride.',
    'This guide compares the main kinds of bike bags, explains how to match them to your bike and load, covers rack and weight limits, looks at the Queensland rule on loads and shows the handlebar bag, pannier pair and crate in our range. We do not stock saddle bags, frame bags or top tube bags, so we say so and explain how to choose them elsewhere. Prices are in Australian dollars as listed on 6 November 2026.',
  ],
  sections: [
    {
      h: 'Types of bike bags and what each is for',
      p: [
        'Saddle bags and saddle packs sit under the saddle and carry a tube, tools and a few small items, and larger saddle packs carry clothing for bikepacking. Frame bags fill the triangle of the frame and carry heavier items low and central, and top tube bags sit behind the stem for snacks and a phone. Handlebar bags sit on the front and carry things you want at hand. Panniers hang off a rear rack and carry the most, and crates sit on a rear rack for shopping and bulky items.',
        'The best choice depends on the trip. For a short commute you may need only a pannier or a backpack. For an overnight tour you may combine a saddle pack, a handlebar bag and panniers. The table summarises the main types.',
      ],
      table: {
        head: ['Bag type', 'Typical load', 'Best for', 'Needs a rack?'],
        rows: [
          ['Saddle bag or pack', 'Tools, tube, light clothing', 'Repair kits and light touring', 'No'],
          ['Frame bag or top tube bag', 'Snacks, phone, tools', 'Rides and bikepacking', 'No'],
          ['Handlebar bag', 'Phone, wallet, snacks, jacket', 'Commuting and touring', 'No (handlebar bracket)'],
          ['Panniers', 'Work gear, groceries, camping kit', 'Commuting and touring', 'Yes'],
          ['Crate or basket', 'Shopping, bulky or loose items', 'Errands and commuting', 'Yes'],
        ],
      },
    },
    {
      h: 'Saddle bags, frame bags and top tube bags',
      p: [
        'People searching for a bike saddle bag, bike saddle pack or bike frame pouch usually want a small, neat bag that does not need a rack. A saddle pack is the classic place for a spare tube, a pump and tyre levers, and it keeps your repair kit on the bike at all times. A frame bag or top tube bag keeps weight low and close to the bike\'s centre, which helps handling.',
        'We do not stock saddle bags, frame bags or top tube bags, so buy those from a bike or outdoors supplier. When you do, check the bag will not rub your legs or the frame, that it is secure on bumps and that it suits the size of your frame. On an e-bike, check the bag does not interfere with the battery or motor.',
      ],
    },
    {
      h: 'Handlebar bags: the Azur touring bag',
      p: [
        'A handlebar bag keeps the things you need within reach. The [Azur Touring Handlebar Bag with Phone Pouch](/shop/racks-bags-and-trailers/azur-touring-handlebar-bag-with-phone-pouch-grey/) is $74.95. The supplier lists multiple compartments, a waterproof touch-screen-compatible phone pouch, a side bottle holder, front and side zippered pockets and a large main compartment, with a quick-release bracket and a detachable shoulder strap, plus a high-visibility rain cover.',
        'Cycling UK\'s [bar bag group test](https://cyclinguk.org/cycle-magazine/choose-best-bar-bag-group-test) is a useful independent guide to what to look for in a bar bag, such as stability, capacity and how it mounts. Keep the load light, because a heavy handlebar bag affects steering, and check that it clears your lights and cables.',
      ],
    },
    {
      h: 'Panniers: the Azur commuter pair',
      img: { file: 'blog/bicycle-bag-azur-commuter-rear-pannier-bag-pair-48l-black.webp', alt: 'Azur commuter rear pannier pair, bike bags that hang from a rear rack', w: 720, h: 540 },
      p: [
        'Panniers carry the most and keep the weight low and balanced on either side of the rear wheel. The [Azur Commuter Rear Pannier Bag Pair 48L](/shop/racks-bags-and-trailers/azur-commuter-rear-pannier-bag-pair-48l-black/) is $109. The supplier lists 600D polyester, a hook and strap attachment system, dual quick-release clips, a drawstring inner for larger loads, a side zip pocket, a rigid plastic insert at the back, a fluorescent rain cover and 3M Scotchlite reflective strips. It is sold as a pair, with 48 litres in total, and the rack is not included.',
        'Panniers need a rear rack. The [Azur Alloy Touring Carrier](/shop/racks-bags-and-trailers/azur-alloy-touring-carrier-disc-brake-compatible/), disc brake compatible, is $61.95, and our [bike panniers guide](/blog/bike-panniers/) explains how to check that a rack fits your bike and carries the weight. Pack heavy items low and balance the two sides.',
      ],
    },
    {
      h: 'Crates and baskets for shopping and errands',
      img: { file: 'blog/bicycle-bag-bang-bang-crate-basket.webp', alt: 'Bang Bang crate basket for shopping and errands on a bicycle', w: 720, h: 540 },
      p: [
        'A crate sits on a rear rack and holds loose items that would not fit a pannier. The [Basil Bicycle Crate Medium](/shop/racks-bags-and-trailers/basil-bicycle-crate-medium-29-5l-black/) is $80.95. The supplier lists a 29.5 litre capacity and the Basil crate-mounting system, and says the load-bearing capacity depends on the weight your carrier will allow, so check the carrier\'s specification before loading heavy items. The [Bang Bang Crate Basket](/shop/racks-bags-and-trailers/bang-bang-crate-basket/) is $80.95.',
        'Crates suit groceries and errands because you can drop things in and take them out. They are less weatherproof than panniers, so use a liner or cover for items that must stay dry. Our [bicycle basket guide](/blog/bicycle-basket/) compares baskets and crates in more detail.',
      ],
    },
    {
      h: 'Weight limits, racks and the Queensland rule on loads',
      p: [
        'Every rack, bag and crate has a weight limit, and the lowest one decides how much you can carry. Check the rack\'s rated load, the bag\'s rated capacity and the bike\'s own limit, and keep the load below all of them. E-bikes often carry more than regular bikes, but the rack still has a limit, and the weight changes how the bike steers and brakes.',
        'The Queensland Government\'s [bicycle rules page](https://www.qld.gov.au/transport/safety/rules/wheeled-devices/bicycle) says you can carry a load if you attach it so the bicycle stays stable and the load is unlikely to fall off. It gives no specific load limit. Fasten bags securely, keep straps clear of the wheels and check them at the start of every ride.',
      ],
    },
    {
      h: 'Waterproofing, visibility and security',
      ul: [
        '**Rain covers.** The Azur bags list fluorescent or high-visibility rain covers; use them in wet weather.',
        '**Reflective strips.** The Azur panniers list 3M Scotchlite reflective strips, which help at night.',
        '**Quick-release fittings.** They let you take the bag with you, which reduces theft.',
        '**Liners.** Use a dry bag inside any bag that must keep contents dry.',
        '**Lights.** Do not let a bag cover your rear light; see our [bicycle light guide](/blog/bicycle-light/).',
        '**Locks.** Take valuables with you and lock the bike; see our [bike chain padlock guide](/blog/bike-chain-padlock/).',
      ],
    },
    {
      h: 'Backpack or bike bags: which is better on an e-bike?',
      p: [
        'A backpack is convenient, but it puts weight on your shoulders and back, makes you sweat and shifts your balance. On an e-bike, where the bike already carries a motor and battery, it is usually better to move the load onto the bike with panniers or a crate. You ride more comfortably, stay cooler and keep a clear view over your shoulder.',
        'A small backpack still makes sense for a laptop or valuables that you carry everywhere. Our [cycling backpack guide](/blog/cycling-backpack/) covers what to look for. For anything heavier than a few kilograms, bike bags are the better answer.',
      ],
    },
    {
      h: 'Planning a longer trip with bike bags on an e-bike',
      p: [
        'Touring on an e-bike means carrying a battery charger as well as clothes and tools, and planning charging stops along the route. Pack the heaviest items low in the panniers, keep the handlebar bag light and carry a basic repair kit with a spare tube and tools. Practise packing and riding with a full load before you leave, because a loaded e-bike handles differently.',
        'Allow for shorter range with a heavy load and check where you can charge safely. The extra weight uses more energy, and hills with a loaded bike drain the battery faster than a normal ride. Our [folding bike bag guide](/blog/folding-bike-bag/) and [bike repair stand guide](/blog/bike-repair-stand/) cover related gear.',
      ],
    },
    {
      h: 'How to pack a bike bag',
      ul: [
        '**Heavy items low and central.** It keeps the bike stable.',
        '**Balance the sides.** Equal weight in each pannier prevents pulling.',
        '**Soft items on the outside.** Clothes pad harder items.',
        '**Keep essentials reachable.** Put your phone, wallet and snacks in the handlebar bag.',
        '**Check clearance.** Make sure nothing touches the wheel, brake or your heels.',
        '**Test before a long trip.** Ride a short loop with a full load first.',
      ],
    },
    {
      h: 'Mistakes to avoid when buying bike bags',
      ul: [
        '**Overloading the rack.** Check every rated limit.',
        '**Buying a bag that does not fit your rack or handlebar.** Check mounting systems.',
        '**Ignoring heel clearance.** A pannier that hits your heels is miserable.',
        '**Skipping weather protection.** Use covers or a liner.',
        '**Carrying heavy loads on the handlebars.** It affects steering.',
      ],
    },
    {
      h: 'Which bike bag should you choose?',
      ul: [
        '**Small items and a phone:** the Azur Touring Handlebar Bag at $74.95.',
        '**Daily commute and shopping:** the Azur Commuter Pannier pair at $109 with a rack.',
        '**Errands and bulky items:** the Basil Crate at $80.95.',
        '**Repair kit and light touring:** a saddle pack or frame bag from another supplier.',
      ],
    },
  ],
  faq: [
    { q: 'What bike bags do you sell?', a: 'We stock the Azur Touring Handlebar Bag at $74.95, the Azur Commuter Rear Pannier pair at $109, the Basil Crate at $80.95 and the Bang Bang Crate Basket at $80.95. We do not stock saddle bags, frame bags or top tube bags.' },
    { q: 'Do I need a rack for a pannier?', a: 'Yes. Panniers hang from a rear rack, and the Azur pair is sold without one. Our Azur Alloy Touring Carrier is $61.95 and is disc brake compatible. Check the rack\'s rated load and that it fits your bike before you order.' },
    { q: 'How much can I carry on a bike rack?', a: 'Less than the lowest of the rack\'s limit, the bag\'s capacity and the bike\'s own limit. The Basil crate listing says its capacity depends on the weight your carrier allows, so check the specification. Pack heavy items low and balance the sides.' },
    { q: 'Are there Queensland rules for carrying loads on a bike?', a: 'The Queensland Government says you can carry a load if you attach it so the bicycle stays stable and the load is unlikely to fall off. It sets no specific limit. Secure bags, keep straps clear of the wheels and check them before each ride.' },
    { q: 'What is a saddle bag for?', a: 'A saddle bag or pack sits under the saddle and carries a spare tube, tools and a few small items, so your repair kit is always on the bike. Larger saddle packs carry clothing for touring. We do not stock them, so buy from a bike supplier and check the fit.' },
  ],
  keywords: { primary: 'bike bags', supporting: ['bike saddle pack', 'saddle bags', 'bike saddle bag', 'bicycle bag', 'bike frame pouch'] },
  words: 0,
}
