// Blog post written to the blog-post rule (see ~/.claude/skills/blog-post/SKILL.md).
// Keywords: volume / KD / intent from Semrush AU Keyword Magic (6 Nov 2026), recorded in docs/used-keywords.csv and docs/blog-plan-batches-2026-11-06.html.
// Sources opened 6 Nov 2026: TransLink cycling and walking page (folding bike bag size, trains, buses, ferries); Queensland Government electric bicycle rules (updated 2 Nov 2026); Australian Government lithium-ion batteries guide.
// Product facts: Foo F1 and NCM Paris+ per the E-Move supplier listings (250 W, 25 km/h limit; F1 36V 14Ah 504Wh, 70 km claimed; Paris+ 36V 19Ah, 130 km claimed). Other folding models publish name and price only, so no specification is quoted for them.
// Companion to /blog/folding-electric-bikes/: that post is the product guide for "foldable electric bike"; this one targets "fold away bike" and covers transport rules and who a folding bike suits.
export const meta = {
  id: 'folding-bike',
  slug: 'folding-bike',
  url: '/blog/folding-bike/',
  title: 'Fold Away Bike: Folding E-Bikes for Trains, Boats and Flats',
  seoTitle: 'Fold Away Bike: Folding E-Bikes for Trains, Boats and Flats',
  excerpt: 'Choosing a fold away bike? Compare 17 folding e-bikes from $659 to $2,999, see TransLink bag size rules, battery safety and who a folding e-bike really suits.',
  category: 'Buying Guides',
  date: '2026-11-06',
  readTime: '10 min',
  focus: 'fold away bike',
  secondary: ['bike collapsible', 'fold away bicycle', 'cycling folding bike', 'bicycle folding bike', 'foldable bike'],
  tags: ['folding bike', 'bike to fold', 'foldable cycle', 'foldable electric cycle', 'ebike folding bike', 'foldable bicycle', 'folding bicycle', 'fold up bicycles', 'folding e bicycle', 'foldable a bike'],
  image: {
    file: 'blog/folding-bike.webp',
    alt: 'Fold away bike options: Foo F1, NCM Paris+ and Kristall RX20 folding e-bikes on a white background',
    query: 'fold away bike',
    credit: null,
  },
  related: [
    { href: '/shop/folding-e-bikes/foo-f1-folding-e-bike/', name: 'Foo F1 Folding E-Bike', price: 1499, note: 'A 250 W folding e-bike with a 70 km claimed range.' },
    { href: '/shop/folding-e-bikes/ncm-paris-folding-e-bike/', name: 'NCM Paris+ Folding E-Bike', price: 1799, note: 'A folding e-bike with hydraulic disc brakes.' },
    { href: '/shop/folding-e-bikes/vamos-doblez-folding-e-bike-2025/', name: 'Vamos Doblez Folding E-Bike (2025)', price: 2659, note: 'A higher-priced folding e-bike.' },
    { href: '/shop/folding-e-bikes/smartmotion-folding-step-through-e-bike/', name: 'SmartMotion Folding Step-Through E-Bike', price: 1899, note: 'A step-through folder.' },
    { href: '/shop/folding-e-bikes/', name: 'All folding e-bikes', note: '17 folding e-bikes.' },
  ],
  links: {
    to: [
      ['/shop/folding-e-bikes/', 'folding e-bikes'],
      ['/blog/folding-electric-bikes/', 'folding electric bikes guide'],
      ['/blog/folding-bike-bag/', 'folding bike bag guide'],
      ['/blog/e-bike-brisbane/', 'e bike Brisbane guide'],
    ],
    from: [
      ['/shop/folding-e-bikes/', 'fold away bike'],
      ['/shop/folding-e-bikes/foo-f1-folding-e-bike/', 'fold away bicycle: how to choose'],
      ['/shop/folding-e-bikes/ncm-paris-folding-e-bike/', 'foldable bike: what to check'],
    ],
  },
  kind: 'post',
}

export const body = {
  hook: 'A fold away bike suits trains, flats and boats if it folds small enough to carry. Our 17 folding e-bikes run from $659 to $2,999; check the folded size, the weight and the 250 W compliance label before you buy.',
  intro: [
    'A fold away bike solves a simple problem: you want a bike but you do not have room, a garage or a safe place to lock one. A folding e-bike goes into a flat, a boot, a boat or a train carriage, and the motor makes the folded weight easier to live with on the road. The catch is that a folding bike is a compromise, with smaller wheels and a heavier frame than a full-size bike.',
    'This guide explains who a folding e-bike really suits, what TransLink says about folding bikes on public transport, what to check on weight, folded size and compliance, how our 17 folding e-bikes divide by price and how to look after the battery. It complements our [folding electric bikes guide](/blog/folding-electric-bikes/), which covers the range in more detail. Prices are in Australian dollars as listed on 6 November 2026.',
  ],
  sections: [
    {
      h: 'Who a fold away bike suits, and who it does not',
      p: [
        'A folding bike suits people who must carry or store the bike. That includes apartment dwellers with no secure bike room, commuters who combine riding with trains or ferries, boat and caravan owners and anyone who wants a bike in the boot for the last leg of a trip. It also suits an office with limited parking, because the bike can sit under a desk instead of a rack.',
        'It suits fewer people who ride long distances or rough trails. Small wheels feel twitchy at speed and are less comfortable over rough surfaces, and a folding hinge adds weight and a point that must be checked. If you have somewhere to keep a full-size bike and you ride long distances, a standard e-bike is usually a better choice. Our [commuter and urban e-bikes](/shop/commuter-and-urban-e-bikes/) range has 60 models.',
      ],
    },
    {
      h: 'Folding bikes on TransLink trains, buses and ferries',
      p: [
        'TransLink\'s [cycling and walking page](https://translink.com.au/travel-with-us/cycling-and-walking) says bikes are allowed on trains at any time, using the first or last carriages of six-car trains and keeping clear of aisles and doorways. Bikes and personal mobility devices are not permitted on buses or trams, with one exception: a folding bike is allowed on any service if it fits in a bag no bigger than 90 cm by 70 cm by 36 cm.',
        'Ferries and CityCats allow bikes subject to space and staff discretion, and wheeled devices must be walked on. If you plan to use buses, measure the folded bike against that bag size before you buy, and consider a carry bag; see our [folding bike bag guide](/blog/folding-bike-bag/). An e-bike is heavy to lift in a bag, so weight matters as much as size.',
      ],
    },
    {
      h: 'Folding e-bikes in our range: prices and brands',
      p: [
        'Our [folding e-bikes](/shop/folding-e-bikes/) range has 17 models from 13 brands, from the DYU D3+ Smart Electric Bike at $659 to the Aventon Sinch 2.5 Fat Tyre Folding Electric Bike at $2,999. Kristall has three models, ET Cycle and NCM have two each, and the rest have one. Most sit between $1,500 and $1,999.',
      ],
      table: {
        head: ['Budget', 'Bikes in range', 'Typical buyer', 'Examples'],
        rows: [
          ['Under $1,500', '3', 'Occasional riders and short trips', 'DYU D3+ $659, Foo F1 $1,499'],
          ['$1,500 to $1,999', '10', 'Most commuters', 'NCM Paris+ $1,799, SmartMotion Folding Step-Through $1,899'],
          ['$2,000 and over', '4', 'Riders wanting higher specification', 'Vamos Doblez $2,659, Aventon Sinch 2.5 $2,999'],
        ],
      },
    },
    {
      h: 'Foo F1 and NCM Paris+: two folding e-bikes compared',
      img: { file: 'blog/folding-bike-ncm-paris-folding-e-bike.webp', alt: 'NCM Paris+ folding e-bike with hydraulic disc brakes, a fold away bicycle', w: 720, h: 540 },
      p: [
        'The [Foo F1 Folding E-Bike](/shop/folding-e-bikes/foo-f1-folding-e-bike/) is $1,499. The supplier lists a 36V 14Ah battery of 504 Wh, a 250 W motor, assistance restricted to 25 km/h, mechanical disc brakes, 20 by 1.95 inch tyres and a claimed range of 70 km, and describes a low, stable frame that folds easily.',
        'The [NCM Paris+ Folding E-Bike](/shop/folding-e-bikes/ncm-paris-folding-e-bike/) is $1,799. The supplier lists a 36V 19Ah battery, a 250 W motor, a 25 km/h restriction, Tektro hydraulic disc brakes, 20 by 2.0 inch tyres and a claimed range of 130 km. Claimed range is a best case, so plan for less on hills and in heat. Both list a 250 W motor and a 25 km/h limit, which matches the Queensland definition of a legal e-bike.',
      ],
      table: {
        head: ['Feature', 'Foo F1', 'NCM Paris+'],
        rows: [
          ['Price', '$1,499', '$1,799'],
          ['Motor', '250 W', '250 W'],
          ['Assist limit', '25 km/h', '25 km/h'],
          ['Battery', '36V 14Ah, 504 Wh', '36V 19Ah'],
          ['Brakes', 'Mechanical disc', 'Hydraulic disc'],
          ['Tyres', '20 x 1.95 inch', '20 x 2.0 inch'],
          ['Claimed range', '70 km', '130 km'],
        ],
      },
    },
    {
      h: 'Folding fat-tyre and dual-motor models: check the rules',
      img: { file: 'blog/folding-bike-kristall-rx20-max-folding-fat-tyre-e-bike-dual-motor.webp', alt: 'Kristall RX20 Max folding fat-tyre e-bike, a dual-motor model to check for compliance', w: 720, h: 540 },
      p: [
        'Some folding e-bikes have fat tyres and larger motors, which can make them fun on sand and gravel but can also push them outside the legal definition. The Queensland Government\'s [electric bicycle rules](https://www.qld.gov.au/transport/safety/rules/wheeled-devices/electric-bicycle-rules) (updated 2 November 2026) say a legal e-bike has a motor with a maximum continuous rated power output of 250 watts, assistance that stops above 25 km/h, a throttle limited to 6 km/h and an EN 15194 label.',
        'Models marketed with dual motors or higher power, such as the Kristall RX20 Max, should be treated as off-road or private property use until we confirm the motor rating and compliance label for the exact bike. Message the team on WhatsApp for the motor power, speed limit and label of any folding e-bike before you order. We would sooner tell you a bike is off-road only than have you find out on the footpath.',
      ],
    },
    {
      h: 'Folded size, weight and the stair test',
      p: [
        'Before you buy, imagine your daily routine. Where will you store the bike when folded? Do you climb stairs with it? Will you lift it into a boot or a luggage rack? A bike that folds beautifully but weighs more than you can carry is not a folding bike for your life. Ask us for the weight of any model you are considering, and try lifting a similar weight at home.',
        'Check how the bike folds as well as how small it folds. A good fold takes seconds, latches securely and leaves no loose parts, while a bad one needs tools or leaves cables dangling. Make sure the folded bike can stand on its own or on a rack without falling over, and that the pedals and bars lock in place.',
      ],
    },
    {
      h: 'How a folding bike rides: wheels, comfort and handling',
      p: [
        'Most folding e-bikes use 20-inch wheels, which are smaller than the 26 to 29 inch wheels on a full-size bike. Small wheels accelerate quickly and fold compactly, but they feel more sensitive to bumps and steering input. Wider tyres, such as the 2.0 inch tyres listed on the NCM Paris+, add comfort and grip, and fat-tyre folders add more still at the cost of weight.',
        'Expect to ride a folder a little more carefully than a full-size bike. Avoid sudden steering movements at speed, take rough patches slowly and keep your weight balanced. A suspension seatpost or saddle helps on rough paths. For longer rides on smooth roads, a folding bike is fine, but you will notice the difference compared with a bigger bike.',
      ],
    },
    {
      h: 'Locks, lights and carry accessories for a folder',
      p: [
        'A bike you carry into the office is less exposed to theft, but you still need a lock for café stops and station racks. See our [electric scooter lock guide](/blog/electric-scooter-lock/) for how to choose a folding or chain lock that suits a small frame. Add a front and rear light, and a bell or horn; Queensland requires a bell or similar warning device and lights at night.',
        'If you take the bike on a bus, a carry bag that keeps the folded bike within the TransLink size limit is worth buying. If you carry a work bag, a small rack or basket helps; see our [bicycle basket guide](/blog/bicycle-basket/) and [bike panniers guide](/blog/bike-panniers/) for options that suit small wheels.',
      ],
    },
    {
      h: 'Safety checks for a folding bike',
      ul: [
        '**Check the hinge before every ride.** Lock the latch fully and tug the frame to feel for play.',
        '**Check the handlebar stem.** A loose stem on a folder can twist without warning.',
        '**Inspect the quick-release levers.** They must be closed and secure.',
        '**Keep tyre pressure correct.** Small wheels are less forgiving of low pressure.',
        '**Wear a helmet.** An approved helmet is always required; see our [road bike helmet guide](/blog/road-bike-helmet/).',
        '**Use lights.** Add front and rear lights for after-dark riding; see our [bicycle light guide](/blog/bicycle-light/).',
      ],
    },
    {
      h: 'Battery care and charging for a folding e-bike',
      p: [
        'A folding e-bike often lives indoors, which makes battery safety important. The Australian Government\'s [lithium-ion batteries guide](https://www.productsafety.gov.au/consumers/be-safe-around-the-home/safely-use-batteries-and-technology/lithium-ion-batteries-guide) advises using the charger supplied, not charging while you sleep or are out, charging on a hard surface away from flammable items and stopping use if the battery swells, overheats or smells.',
        'Do not charge in a hallway, by an exit or on a bed or sofa. If your building restricts charging in common areas, ask your body corporate before you buy. Lithium batteries are Class 9 dangerous goods for freight, which is why we confirm delivery details with you before you pay.',
      ],
    },
    {
      h: 'Mistakes to avoid when buying a fold away bike',
      ul: [
        '**Ignoring weight.** A heavy folder that you cannot lift is not portable.',
        '**Assuming every folder is street legal.** Confirm the 250 W rating and EN 15194 label.',
        '**Skipping the folded size check.** Measure against your storage space and the TransLink bag limit.',
        '**Buying on claimed range.** Claims are best cases; plan for less.',
        '**Neglecting the hinge.** Check it every ride.',
      ],
    },
    {
      h: 'Which folding bike should you choose?',
      ul: [
        '**Lowest cost, occasional use:** the DYU D3+ at $659 or the Foo F1 at $1,499.',
        '**Everyday commuter with range:** the NCM Paris+ at $1,799.',
        '**Step-through comfort:** the SmartMotion Folding Step-Through E-Bike at $1,899.',
        '**Higher specification:** the Vamos Doblez at $2,659.',
        '**Sand and gravel riding:** a fat-tyre folder, after we confirm its rating and where you can ride it.',
      ],
    },
  ],
  faq: [
    { q: 'How much is a fold away bike in your range?', a: 'Our 17 folding e-bikes run from $659 for the DYU D3+ to $2,999 for the Aventon Sinch 2.5 Fat Tyre. Ten sit between $1,500 and $1,999, including the NCM Paris+ at $1,799. Prices are in Australian dollars and shown on each product page.' },
    { q: 'Can I take a folding bike on a Brisbane bus?', a: 'TransLink says a folding bike is allowed on any service if it fits in a bag no bigger than 90 cm by 70 cm by 36 cm. Other bikes are not permitted on buses or trams. Bikes are allowed on trains at any time, using the first or last carriage of six-car trains.' },
    { q: 'Are folding e-bikes legal in Queensland?', a: 'Yes if they meet the e-bike definition: a motor of no more than 250 watts, assistance that stops above 25 km/h, a throttle limited to 6 km/h and an EN 15194 label. Higher-powered or dual-motor models are for private property use. Ask us to confirm any model.' },
    { q: 'How far will a folding e-bike go on one charge?', a: 'Suppliers list claimed ranges, such as 70 km for the Foo F1 and 130 km for the NCM Paris+. Real range depends on rider weight, hills, assist level and temperature, so plan for less. A bigger battery adds range but also weight.' },
    { q: 'Where should I charge a folding e-bike at home?', a: 'On a hard surface away from flammable items, using the supplied charger, and never while you sleep or are out. Avoid hallways and exits. The Australian Government publishes a lithium-ion batteries guide with these precautions.' },
  ],
  keywords: { primary: 'fold away bike', supporting: ['bike collapsible', 'fold away bicycle', 'cycling folding bike', 'bicycle folding bike', 'foldable bike'] },
  words: 0,
}
