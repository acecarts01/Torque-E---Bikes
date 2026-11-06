// Blog post written to the blog-post rule (see ~/.claude/skills/blog-post/SKILL.md).
// Keywords: volume / KD / intent from Semrush AU Keyword Magic (6 Nov 2026), recorded in docs/used-keywords.csv and docs/blog-plan-batches-2026-11-06.html.
// Sources opened 6 Nov 2026: Trek Checkpoint+ SL FAQ (TQ HPR60, 350 W max, 360 Wh, 97 km / 145 km with Range Extender, 3.75 h charge); Cannondale Topstone Neo Carbon Lefty 3 page (electric gravel bike); Giant Australia Revolt E+ page (roads, gravel or dirt); Queensland Government electric bicycle rules (updated 2 Nov 2026).
// Model-year specifications differ between sources, so only Trek's family FAQ figures are quoted; Cannondale and Giant specs are described in general terms.
export const meta = {
  id: 'gravel-bikes-for-sale',
  slug: 'gravel-bikes-for-sale',
  url: '/blog/gravel-bikes-for-sale/',
  title: 'Bikes for Gravel: Electric Gravel Bikes for Sale Australia',
  seoTitle: 'Bikes for Gravel: Electric Gravel Bikes for Sale Australia',
  excerpt: 'Choosing bikes for gravel? Compare electric gravel bikes from $3,999 to $12,999, see Trek Checkpoint+ range figures, tyre choices and Queensland e-bike rules.',
  category: 'Buying Guides',
  date: '2026-11-06',
  readTime: '10 min',
  focus: 'bikes for gravel',
  secondary: ['gravel bikes for sale', 'gravel bike sale', 'best gravel bikes', 'cube bike gravel', 'best gravel bikes australia'],
  tags: ['bike gravel bike', 'gravel bikes', 'gravel bicycle', 'gravel bikes australia', 'gravel ebike', 'gravel bike tyres', 'gravel biking', 'steel gravel bike', 'good gravel bikes', 'carbon gravel bike'],
  image: {
    file: 'blog/gravel-bikes-for-sale.webp',
    alt: 'Bikes for gravel: Trek Checkpoint+ SL 5, Giant Revolt E+ Pro and Cannondale Topstone Neo Carbon 3 electric gravel bikes',
    query: 'bikes for gravel',
    credit: null,
  },
  related: [
    { href: '/shop/road-and-gravel-e-bikes/trek-checkpoint-sl-5/', name: 'Trek Checkpoint+ SL 5', price: 3999, note: 'Our lowest-priced electric gravel bike.' },
    { href: '/shop/road-and-gravel-e-bikes/giant-revolt-e-pro/', name: 'Giant Revolt E+ Pro', price: 6999, note: 'A mid-priced electric gravel bike.' },
    { href: '/shop/road-and-gravel-e-bikes/cannondale-topstone-neo-carbon-3/', name: 'Cannondale Topstone Neo Carbon 3', price: 8499, note: 'A carbon electric gravel bike.' },
    { href: '/shop/road-and-gravel-e-bikes/cannondale-topstone-neo-carbon-1/', name: 'Cannondale Topstone Neo Carbon 1', price: 12999, note: 'The top Topstone in our range.' },
    { href: '/shop/road-and-gravel-e-bikes/', name: 'All road and gravel e-bikes', note: 'Five road and gravel e-bikes.' },
  ],
  links: {
    to: [
      ['/shop/road-and-gravel-e-bikes/', 'road and gravel e-bikes'],
      ['/blog/electric-road-bicycle/', 'electric road bicycle guide'],
      ['/blog/e-bike-tyres-and-tubes/', 'e-bike tyres and tubes guide'],
      ['/blog/lightest-electric-bicycle/', 'lightest electric bicycle guide'],
    ],
    from: [
      ['/shop/road-and-gravel-e-bikes/', 'bikes for gravel'],
      ['/shop/road-and-gravel-e-bikes/trek-checkpoint-sl-5/', 'gravel bikes for sale: how to choose'],
      ['/shop/road-and-gravel-e-bikes/giant-revolt-e-pro/', 'gravel bike sale: what to check'],
    ],
  },
  kind: 'post',
}

export const body = {
  hook: 'Electric gravel bikes suit sealed roads, fire trails and mixed surfaces. Ours run from $3,999 for the Trek Checkpoint+ SL 5 to $12,999 for the Cannondale Topstone Neo Carbon 1; choose by tyre room, range and how rough your routes are.',
  intro: [
    'If you are looking for bikes for gravel, an electric gravel bike is the most versatile e-bike you can buy. It has drop handlebars and efficient road geometry, with wider tyres, disc brakes and a more relaxed frame that let it handle fire trails, rail trails and rough backroads. The motor lets you ride further and tackle hills that would otherwise end the day.',
    'This guide explains how a gravel bike differs from a road bike and a mountain bike, shows the figures Trek publishes for its Checkpoint+ range, compares the electric gravel bikes in our range by price, covers tyres and range, and sets out the Queensland rules and safety basics. Prices are in Australian dollars as listed on 6 November 2026, and we only state what the maker publishes.',
  ],
  sections: [
    {
      h: 'Bikes for gravel compared with road and mountain bikes',
      p: [
        'A gravel bike sits between a road bike and a mountain bike. Compared with a road bike it has wider tyres, a more upright and stable geometry and more clearance for mud. Compared with a mountain bike it has a lighter frame, drop bars and a faster feel on pavement, but less suspension and less capability on technical trails. The result is a bike that rides well on sealed roads and goes where a road bike cannot.',
        'Choose a gravel bike if your riding mixes pavement with unsealed roads, if you want one bike for commuting and weekend adventures or if you plan to travel with luggage. If your riding is mostly smooth road, see our [electric road bicycle guide](/blog/electric-road-bicycle/). If it is mostly rough singletrack, see our [mountain bikes for sale guide](/blog/mountain-bikes-for-sale/).',
      ],
      table: {
        head: ['Bike type', 'Best surface', 'Tyres', 'Trade-off'],
        rows: [
          ['Road e-bike', 'Sealed roads', 'Narrow, fast', 'Unsuitable for rough unsealed roads'],
          ['Gravel e-bike', 'Roads, fire trails, rail trails', 'Wider, more grip', 'Heavier and slower than a road e-bike'],
          ['Mountain e-bike', 'Singletrack and rough trails', 'Widest, most grip', 'Heavier and less efficient on roads'],
        ],
      },
    },
    {
      h: 'Electric gravel bikes in our range: prices',
      p: [
        'Our [road and gravel e-bikes](/shop/road-and-gravel-e-bikes/) range has five models. The [Trek Checkpoint+ SL 5](/shop/road-and-gravel-e-bikes/trek-checkpoint-sl-5/) is $3,999, the [Giant Revolt E+ Pro](/shop/road-and-gravel-e-bikes/giant-revolt-e-pro/) is $6,999, the [Cannondale Topstone Neo Carbon 3](/shop/road-and-gravel-e-bikes/cannondale-topstone-neo-carbon-3/) is $8,499 and the [Cannondale Topstone Neo Carbon 1](/shop/road-and-gravel-e-bikes/cannondale-topstone-neo-carbon-1/) is $12,999. The fifth, the Trek Domane+ ALR 5 at $6,299, is an endurance road e-bike that we cover in our [road bikes for sale guide](/blog/road-bikes-for-sale/).',
        'That gives a clear ladder. Under $4,000 you get a recognised brand with a light-assist system. From $6,999 you step up to a different drive system and frame, and above $8,000 you reach carbon frames and higher-spec parts. Gravel e-bikes cost more than hardtail e-MTBs because of the lighter frames and the integrated systems.',
      ],
    },
    {
      h: 'Trek Checkpoint+ SL 5: what Trek publishes',
      img: { file: 'blog/gravel-bikes-for-sale-trek-checkpoint-sl-5.webp', alt: 'Trek Checkpoint+ SL 5 electric gravel bike, one of the gravel bikes for sale', w: 720, h: 540 },
      p: [
        'Trek\'s [Checkpoint+ SL FAQ](https://www.trekbikes.com/us/en_US/FAQ/checkpoint_plus_sl/) says the TQ HPR60 motor provides 350 W of maximum power output, that the bike is only compatible with the TQ 360 Wh battery and that range is up to 97 km on the internal battery and up to 145 km with the optional Range Extender. It says the battery charges in about 3.75 hours with the included 2-amp charger, and that actual range varies with rider weight, assist level, tyre choice, surface and terrain.',
        'Those are Trek\'s figures for the Checkpoint+ SL family, and they are best-case ranges. The Checkpoint+ SL 5 at $3,999 should be checked against the exact model year and specification, so ask us before you order. The 350 W figure is maximum power, which is not the same as the rated power in the Queensland definition, so we confirm the compliance label with you.',
      ],
    },
    {
      h: 'Cannondale Topstone Neo and Giant Revolt E+',
      img: { file: 'blog/gravel-bikes-for-sale-cannondale-topstone-neo-carbon-1.webp', alt: 'Cannondale Topstone Neo Carbon 1 electric gravel bike', w: 720, h: 540 },
      p: [
        'Cannondale lists its [Topstone Neo Carbon Lefty 3](https://www.cannondale.com/en/bikes/electric/e-road/topstone-neo/topstone-neo-carbon-lefty-3-c62371m) as an electric gravel bike with Shimano GRX shifting and a Bosch motor, and the Topstone Neo family is its electric gravel range. Our Topstone Neo Carbon 3 at $8,499 and Neo Carbon 1 at $12,999 sit in that family, but Cannondale\'s page describes the Lefty variant, so ask us for the specification of the exact model.',
        'Giant\'s Australian Revolt E+ page describes a versatile, smooth-riding e-bike for roads, gravel or dirt. Our Revolt E+ Pro at $6,999 is that family, and Giant\'s drive systems and battery sizes vary by model year, so confirm the configuration before you buy.',
      ],
    },
    {
      h: 'Tyres, pressure and puncture protection for gravel',
      p: [
        'Tyres decide how a gravel bike feels. Wider tyres at lower pressure add grip and comfort on loose surfaces, and a slightly narrower tyre rolls faster on sealed roads. Check the maximum tyre width the frame will take, which Trek says is shown on each model page and not in its FAQ, and choose a tyre that suits your usual surface.',
        'Gravel is hard on tyres, with sharp stones and thorns, so look for puncture protection or tubeless setups with sealant. Carry a spare tube, a pump and levers, and learn how to fix a flat before you need to. Our [e-bike tyres and tubes guide](/blog/e-bike-tyres-and-tubes/) and [bike puncture repair kit guide](/blog/bike-puncture-repair-kit/) explain how.',
      ],
    },
    {
      h: 'Range, weight and charging on a gravel e-bike',
      p: [
        'A lighter motor system, such as the 360 Wh pack Trek lists for the Checkpoint+ SL, gives a natural feel and a lower weight, at the cost of range compared with a large mountain bike battery. If you ride long days, check whether a range extender or a second battery is offered, and plan routes with a margin.',
        'Lithium batteries need care. The Australian Government\'s [lithium-ion batteries guide](https://www.productsafety.gov.au/consumers/be-safe-around-the-home/safely-use-batteries-and-technology/lithium-ion-batteries-guide) advises using the charger supplied, not charging while you sleep or are out and stopping use if a battery swells, overheats or smells. Lithium batteries are Class 9 dangerous goods for freight, which is why we confirm delivery details with you before you pay.',
      ],
    },
    {
      h: 'Queensland rules for an electric gravel bike',
      p: [
        'The Queensland Government\'s [electric bicycle rules](https://www.qld.gov.au/transport/safety/rules/wheeled-devices/electric-bicycle-rules) (updated 2 November 2026) say a legal e-bike has a motor with a maximum continuous rated power output of 250 watts, assistance that stops above 25 km/h and a throttle limited to starting up to 6 km/h, and must meet EN 15194 and display a compliance label. From 31 August 2026 riders must be 16 and hold a valid driver licence, with exemptions for supervised riders and recreational riding areas, and riders must always wear a helmet.',
        'Ask us to confirm the compliance label of any gravel e-bike before you pay, and check the rules for the trails you plan to ride, because access varies by land manager. See our [road bike helmet guide](/blog/road-bike-helmet/) for how to choose a helmet.',
      ],
    },
    {
      h: 'Luggage, mudguards and bikepacking with a gravel e-bike',
      p: [
        'One reason people choose bikes for gravel is touring. Rack and mudguard mounts let you carry panniers or a bikepacking bag for overnight trips, and an e-bike makes a loaded bike far easier to ride. Check that the frame has the mounts you need before you buy, and keep the load low and balanced because the extra weight changes handling on loose surfaces.',
        'Our [bicycle bag guide](/blog/bicycle-bag/) and [bike panniers guide](/blog/bike-panniers/) explain how to choose bags, and the [racks, bags and trailers](/shop/racks-bags-and-trailers/) range includes touring carriers and panniers. Plan charging stops on long routes, and carry a spare tube, tools and enough water for the distance between towns.',
      ],
    },
    {
      h: 'Riding gravel safely: surfaces, speed and etiquette',
      ul: [
        '**Slow down on loose corners.** Gravel gives less grip than sealed road, especially under braking.',
        '**Brake early and smoothly.** Sudden braking on loose surfaces can lock a wheel.',
        '**Share the road.** Unsealed roads carry cars and trucks that raise dust and cannot always see you.',
        '**Wear visible clothing and use lights.** Visibility matters on dusty or shaded roads.',
        '**Respect trail rules.** Check which routes allow e-bikes and give way to walkers and horses.',
      ],
    },
    {
      h: 'What to check before you buy an electric gravel bike',
      ul: [
        '**Frame size and fit.** Drop-bar geometry is sensitive to reach; check the maker\'s size chart and ask us for advice.',
        '**Tyre clearance.** Confirm the widest tyre the frame takes.',
        '**Drive system and battery.** Check capacity, range and whether an extender is offered.',
        '**Brakes and gearing.** Hydraulic discs and a wide gear range help on loose climbs.',
        '**Mounts.** Check for rack and mudguard mounts if you plan to carry luggage.',
        '**Weight.** A lighter bike is easier to lift and handle.',
        '**Compliance.** Confirm the 250 W rating and EN 15194 label.',
      ],
    },
    {
      h: 'Mistakes to avoid when buying a gravel e-bike',
      ul: [
        '**Buying a road e-bike for rough roads.** Tyre room and geometry matter.',
        '**Trusting headline range.** Claims are best cases; plan for less.',
        '**Ignoring the label.** A non-compliant bike is illegal on public paths.',
        '**Skipping a puncture kit.** Gravel flats are common.',
        '**Forgetting the helmet.** An approved helmet is always required.',
      ],
    },
    {
      h: 'Which gravel e-bike should you choose?',
      ul: [
        '**Best value:** the Trek Checkpoint+ SL 5 at $3,999.',
        '**Mid-priced all-rounder:** the Giant Revolt E+ Pro at $6,999.',
        '**Carbon and premium:** the Cannondale Topstone Neo Carbon 3 at $8,499.',
        '**Top of the range:** the Cannondale Topstone Neo Carbon 1 at $12,999.',
      ],
    },
  ],
  faq: [
    { q: 'How much do electric gravel bikes cost in your range?', a: 'Our electric gravel bikes run from $3,999 for the Trek Checkpoint+ SL 5 to $12,999 for the Cannondale Topstone Neo Carbon 1, with the Giant Revolt E+ Pro at $6,999 and the Topstone Neo Carbon 3 at $8,499. Prices are in Australian dollars.' },
    { q: 'How far does a Trek Checkpoint+ go on one charge?', a: 'Trek says up to 97 km on the internal battery and up to 145 km with the optional Range Extender, and that range varies with rider weight, assist, tyres, surface and terrain. Treat it as a best case and plan for less.' },
    { q: 'What is the difference between a gravel bike and a road bike?', a: 'A gravel bike has wider tyres, more tyre clearance and a more stable geometry, so it handles unsealed roads and fire trails. A road bike has narrower tyres and is faster on pavement. An e-bike version adds a motor to either.' },
    { q: 'Are electric gravel bikes legal on Queensland paths?', a: 'Yes if the bike is a compliant e-bike with a 250 watt rated motor, assistance that stops above 25 km/h and an EN 15194 label. Riders must always wear a helmet, and from 31 August 2026 must be 16 with a licence unless an exemption applies.' },
    { q: 'Can I put wider tyres on a gravel e-bike?', a: 'Only up to the maximum width the frame and fork allow, which is shown on the maker\'s model page. Wider tyres at lower pressure add comfort and grip. Ask us to confirm the clearance for the exact bike before you buy.' },
  ],
  keywords: { primary: 'bikes for gravel', supporting: ['gravel bikes for sale', 'gravel bike sale', 'best gravel bikes', 'cube bike gravel', 'best gravel bikes australia'] },
  words: 0,
}
