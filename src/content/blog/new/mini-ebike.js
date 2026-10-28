// Blog post written to the blog-post rule (see ~/.claude/skills/blog-post/SKILL.md).
// Keywords: volume / KD / intent from Semrush AU Keyword Magic (28 Oct 2026), recorded in docs/used-keywords.csv.
// Competitor analysis (docs/competitor-notes.md): mini and small e-bike pages mix pedal e-bikes, scooters and off-road minis and rarely explain the legal split; this post separates road-style small e-bikes from off-road mini dirt bikes and cites Queensland.
// Sources opened 27 Oct 2026: Queensland Government electric bicycle rules page and bicycle road rules page (approved helmet, AS/NZS 2063).
// Product pages publish no speeds, ranges or rider limits, so the post claims only names, brands and prices.
export const meta = {
  id: 'mini-ebike',
  slug: 'mini-ebike',
  url: '/blog/mini-ebike/',
  title: 'Mini Ebike: Small Electric Bikes and Mini Dirt Bikes Compared',
  seoTitle: 'Mini Ebike: Small Electric Bikes and Mini Dirt Bikes',
  excerpt: 'Choosing a mini ebike? Compare small electric bikes and mini dirt bikes from $849, learn which are road-style and which are off-road only, and how to size them.',
  category: 'Buying Guides',
  date: '2026-10-28',
  readTime: '10 min',
  focus: 'mini ebike',
  secondary: ['bike electric mini', 'mini e bikes', 'small electric bike', 'small e bike', 'mini e bicycle'],
  tags: ['mini ebikes', 'small ebike', 'mini electric bikes', 'electric minibike', 'e bike mini', 'mini bike electric', 'mini electric bike for adults', 'e bike small', 'mini bicycle electric', 'little e bikes'],
  image: {
    file: 'blog/mini-ebike.webp',
    alt: 'Ampd Bros ACE Mini, Yozma IN 10 and DHZ mini dirt bike, a mini ebike range',
    query: 'mini ebike',
    credit: null,
  },
  related: [
    { href: '/shop/kids-electric-dirt-and-balance-bikes/dhz-electric-kids-mini-dirt-bike-3-speeds-control/', name: 'DHZ Electric Kids Mini Dirt Bike, 3 Speeds Control', price: 849, note: 'The lowest-priced mini bike here. Off-road and private property use only.' },
    { href: '/shop/electric-dirt-bikes/yozma-in-10-electric-mini-dirt-bike/', name: 'Yozma IN 10 Electric Mini Dirt Bike', price: 2089, note: 'Off-road and private property use only.' },
    { href: '/shop/kids-and-youth-e-bikes/ampd-bros-ace-mini-electric-bike-series-5/', name: 'Ampd Bros ACE Mini Electric Bike Series 5', price: 2179, note: 'A small pedal e-bike.' },
    { href: '/shop/kids-and-youth-e-bikes/ampd-bros-ace-s-mini-s5/', name: 'Ampd Bros ACE S Mini S5', price: 2269, note: 'A small step-through e-bike.' },
    { href: '/shop/commuter-and-urban-e-bikes/cannondale-compact-neo-os/', name: 'Cannondale Compact Neo OS', price: 3299, note: 'A compact commuter e-bike.' },
    { href: '/shop/kids-and-youth-e-bikes/', name: 'All kids and youth e-bikes', note: 'Small and youth e-bikes.' },
  ],
  links: {
    to: [
      ['/shop/kids-and-youth-e-bikes/', 'kids and youth e-bikes'],
      ['/blog/yozma-in10-electric-mini-dirt-bike/', 'Yozma IN10 mini dirt bike guide'],
      ['/blog/childs-electric-bike/', 'childs electric bike guide'],
      ['/blog/folding-electric-bikes/', 'folding electric bikes guide'],
    ],
    from: [
      ['/shop/kids-and-youth-e-bikes/', 'mini ebike buying guide'],
      ['/shop/kids-and-youth-e-bikes/ampd-bros-ace-mini-electric-bike-series-5/', 'how to choose a small electric bike'],
      ['/shop/electric-dirt-bikes/yozma-in-10-electric-mini-dirt-bike/', 'mini electric bikes: what to check'],
    ],
  },
  kind: 'post',
}

export const body = {
  hook: 'A mini ebike can mean a small pedal e-bike for youth and compact riders or a mini dirt bike for private land. Know which one you are buying, because only one kind can go near a road.',
  intro: [
    'A mini ebike is a small electric bike, but the phrase covers two very different machines. One is a compact pedal-assist e-bike with smaller wheels or a smaller frame, suited to youth, small adults and tight spaces. The other is a mini electric dirt bike with no pedals, built for private land. This guide explains the difference, compares five small electric bikes in our range from $849, shows how to size one and sets out what the Queensland rules say.',
    'We cover road-style small e-bikes, mini dirt bikes, fit and safety gear and the questions buyers ask most. Prices are current Torque E-Bikes prices. Product pages publish the model name and price but not speed, range or rider limits, so ask us for the maker\'s figures before you order.',
  ],
  sections: [
    {
      h: 'Mini ebike options in our range and their prices',
      p: [
        'Our range includes small e-bikes and mini dirt bikes. The first three suit road-style riding if they meet the rules; the DHZ and the Yozma are for off-road and private property use only.',
      ],
      table: {
        head: ['Bike', 'Price', 'Type', 'Where you can ride'],
        rows: [
          ['[DHZ Electric Kids Mini Dirt Bike, 3 Speeds Control](/shop/kids-electric-dirt-and-balance-bikes/dhz-electric-kids-mini-dirt-bike-3-speeds-control/)', '$849', 'Mini dirt bike', 'Off-road and private property only'],
          ['[Yozma IN 10 Electric Mini Dirt Bike](/shop/electric-dirt-bikes/yozma-in-10-electric-mini-dirt-bike/)', '$2,089', 'Mini dirt bike', 'Off-road and private property only'],
          ['[Ampd Bros ACE Mini Electric Bike Series 5](/shop/kids-and-youth-e-bikes/ampd-bros-ace-mini-electric-bike-series-5/)', '$2,179', 'Small pedal e-bike', 'Check the label and rules'],
          ['[Ampd Bros ACE S Mini S5](/shop/kids-and-youth-e-bikes/ampd-bros-ace-s-mini-s5/)', '$2,269', 'Small step-through e-bike', 'Check the label and rules'],
          ['[Cannondale Compact Neo OS](/shop/commuter-and-urban-e-bikes/cannondale-compact-neo-os/)', '$3,299', 'Compact commuter', 'Check the label and rules'],
        ],
      },
    },
    {
      h: 'Mini e bikes: two kinds, and why it matters',
      p: [
        '**Small pedal e-bikes.** These have pedals, a motor that assists as you pedal and often smaller wheels or a lower frame. They suit youth riders, shorter adults and anyone who wants a compact bike. If they meet the rules they can be ridden on roads and paths.',
        '**Mini electric dirt bikes.** These look like small motocross bikes and have no pedals. The Queensland Government\'s [electric bicycle rules page](https://www.qld.gov.au/transport/safety/rules/wheeled-devices/electric-bicycle-rules) says electric motorcycles, mopeds and dirt bikes don\'t have pedals, need registration, insurance and a licence for roads and are not allowed on paths. Our minis of this type are listed as off-road and private property use only.',
        'If you want a bike a child can use on a path, choose a pedal e-bike with a compliance label. If you want a bike for a paddock or a track, a mini dirt bike is the tool.',
      ],
    },
    {
      h: 'Small electric bike or mini bike electric: who each one suits',
      ul: [
        '**Youth riders.** A small pedal e-bike such as the ACE Mini suits older children and teens. Our [childs electric bike guide](/blog/childs-electric-bike/) explains choosing for young riders.',
        '**Small adults.** A compact frame lets shorter riders stand over the bike and reach the controls.',
        '**Tight spaces.** Compact and folding bikes store more easily. See our [folding electric bikes guide](/blog/folding-electric-bikes/).',
        '**Private land.** A mini dirt bike gives young riders an introduction to off-road riding under supervision.',
        '**Mini electric bike for adults.** Some mini bikes are sized for adults; check the maker\'s rider limits and the seat height, and do not assume a mini is a toy.',
        '**Commuters with limited room.** A compact commuter such as the Cannondale Compact Neo OS keeps full e-bike features in a smaller frame.',
      ],
      img: { file: 'blog/mini-ebike-ampd-ace-mini.webp', alt: 'Ampd Bros ACE Mini Series 5 small electric bike', w: 720, h: 540 },
    },
    {
      h: 'Sizing a mini ebike: height, inseam and seat height',
      ul: [
        '**Inseam first.** Measure from the floor to the crotch in socks. The rider should be able to put both feet near the ground on a pedal bike.',
        '**Seat height.** Ask for the minimum and maximum seat height and compare it with the rider\'s inseam.',
        '**Reach.** Elbows slightly bent and shoulders relaxed when holding the grips.',
        '**Wheel size.** Smaller wheels roll over bumps less smoothly. Check what the model uses.',
        '**Weight limit.** Check the maker\'s maximum rider weight.',
        '**Growth.** Kids grow quickly; choose a bike with adjustable seat and bars, and avoid buying too big.',
        '**Send us the rider\'s height and inseam** and we will check the maker\'s size chart.',
      ],
    },
    {
      h: 'Legal and safety basics for small electric bikes',
      p: [
        'For a pedal e-bike on roads and paths, the Queensland rules above apply: a legal e-bike has a 250W motor, assistance up to 25 km/h and an EN 15194 label. The same page says passengers can only be carried if the bike was made to carry them. Ask us to confirm the label and the motor rating of any small e-bike before you order.',
        'The Queensland Government\'s [bicycle road rules page](https://www.qld.gov.au/transport/safety/rules/wheeled-devices/bicycle) says riders must wear an approved helmet that is securely fitted and fastened, and to look for a sticker showing a standard such as AS/NZS 2063. See our [childs helmet guide](/blog/childs-helmet/) for sizing a young rider\'s helmet.',
        'For a mini dirt bike, add motorcycle-style protection: goggles, gloves, boots and body armour. See our [motorbike goggles guide](/blog/motorbike-goggles/) and [Razor e bike guide](/blog/razor-e-bike/).',
      ],
    },
    {
      h: 'Mini electric dirt bikes: what to know before you buy',
      ul: [
        '**Where to ride.** Private land with the owner\'s permission and off-road venues that allow them. Not roads, footpaths or shared paths.',
        '**Supervision.** Young riders need an adult nearby and clear boundaries.',
        '**Throttle control.** Teach gentle throttle use before they ride alone.',
        '**Charging.** Charge on a hard surface and not overnight; see our [lithium battery guide](/blog/electric-moto-maintenance-lithium-safety/).',
        '**Maintenance.** Check tyres, brakes, chain and bolts before each ride.',
        '**Specifications.** Ask us for the maker\'s speed, range and rider limits, since product pages do not list them.',
      ],
    },
    {
      h: 'Mini ebike mistakes to avoid',
      ul: [
        '**Mixing up the two kinds.** A mini dirt bike is not a road bike.',
        '**Buying too big.** A bike the rider cannot control is dangerous.',
        '**Skipping the helmet and gear.** Buy protective gear first.',
        '**Ignoring the label.** For roads and paths, confirm EN 15194 labelling.',
        '**Forgetting supervision.** Young riders need an adult.',
        '**Assuming small means safe.** Small e-bikes still carry speed and weight.',
      ],
    },
    {
      h: "Small pedal e-bike or folding e-bike?",
      p: [
        "If you want a compact bike, you have two options. A small-frame pedal e-bike keeps normal-size wheels and a rigid frame, so it rides like a full-size bike but fits a smaller rider. A folding e-bike has small wheels and a hinge, so it stores in a small space and travels well, but feels different on rough surfaces. Our [folding electric bikes guide](/blog/folding-electric-bikes/) explains the trade-offs.",
        "For a growing teenager, a small-frame bike with an adjustable seat and bars lasts longer. For an adult who needs to store the bike in a flat or a caravan, a folding bike may suit better. Send us the rider's height and where the bike will live, and we will suggest the right type.",
      ],
    },
    {
      h: "A first-ride plan for a young rider",
      ul: [
        "Fit the helmet and check the straps, then check the bike: tyres, brakes, lights and bolts.",
        "Start in an empty car park with the assist or power on its lowest setting.",
        "Practise starting, stopping and turning, and braking with both hands.",
        "Agree the rules: where they can ride, how far and when.",
        "Build up to a quiet path with an adult nearby, and increase power only when they are confident.",
        "After each ride, check the bike and charge the battery safely.",
      ],
    },
    {
      h: "Storing, charging and caring for a small e-bike",
      p: [
        "Small e-bikes are easier to store, but the battery still needs care. Charge it on a hard surface, away from anything that can burn, and not overnight or while you are out. Store it in a cool, dry place, and take it indoors in extreme heat or cold. Our [lithium battery guide](/blog/electric-moto-maintenance-lithium-safety/) covers the safety advice.",
        "Clean the bike after muddy rides, lubricate the chain and check the tyre pressure weekly. Lock it whenever you leave it; see our [bike chain padlock guide](/blog/bike-chain-padlock/).",
      ],
    },
    {
      h: "Questions to ask us about a mini ebike",
      ul: [
        "What are the maker's speed, range and charge time?",
        "What rider height and weight is the bike designed for?",
        "What is the minimum and maximum seat height?",
        "Is it a pedal bike with a compliance label or an off-road bike with no pedals?",
        "What does a replacement battery cost?",
        "What is included: charger, lights, mudguards and manual?",
        "How long will delivery take?",
      ],
    },
    {
      h: "Mini ebike maintenance in five minutes",
      p: [
        "A quick check before each ride keeps a small bike safe. Squeeze both brakes and check they hold, look at the tyres for pressure and damage, spin the wheels and check for wobble, try the throttle or assist gently and check that lights and the bell work. After the ride, wipe the bike down and put the battery on charge once it has cooled.",
        "Once a month, check the bolts on the bars, seat and wheels, lubricate the chain and inspect the brake pads. Children grow, so adjust the seat and bars as they do. If anything looks bent, cracked or loose, stop riding and ask us or a mechanic.",
      ],
    },
    {
      h: 'Which mini ebike should you buy?',
      p: [
        'For a first mini dirt bike on private land, the [DHZ kids mini dirt bike at $849](/shop/kids-electric-dirt-and-balance-bikes/dhz-electric-kids-mini-dirt-bike-3-speeds-control/) is the entry and the [Yozma IN 10 at $2,089](/shop/electric-dirt-bikes/yozma-in-10-electric-mini-dirt-bike/) is the step up. For a small pedal e-bike, look at the [ACE Mini Series 5 at $2,179](/shop/kids-and-youth-e-bikes/ampd-bros-ace-mini-electric-bike-series-5/) or the [ACE S Mini S5 at $2,269](/shop/kids-and-youth-e-bikes/ampd-bros-ace-s-mini-s5/). For a compact commuter, the [Cannondale Compact Neo OS at $3,299](/shop/commuter-and-urban-e-bikes/cannondale-compact-neo-os/) is the pick.',
        'Send us the rider\'s height and where you will ride and we will recommend a bike. You can also browse the [kids and youth e-bikes range](/shop/kids-and-youth-e-bikes/).',
      ],
    },
  ],
  faq: [
    { q: 'What is a mini ebike?', a: 'A small electric bike. It can be a compact pedal e-bike for youth and small adults or a mini electric dirt bike with no pedals for private land. Check which kind you are buying.' },
    { q: 'Can I ride a mini electric dirt bike on the road?', a: 'No. Our mini dirt bikes are listed as off-road and private property use only. Queensland says dirt bikes without pedals need registration, insurance and a licence for roads and are not allowed on paths.' },
    { q: 'Are small e-bikes road legal?', a: 'If they have pedals and meet the rules: in Queensland, a 250W motor, assistance up to 25 km/h and an EN 15194 label. Ask us to confirm any bike before you order.' },
    { q: 'How do I size a small electric bike?', a: 'Measure the rider\'s inseam and compare it with the minimum seat height, check reach and the maker\'s weight limit, and send us the details. Avoid buying too big for a growing child.' },
    { q: 'Is a mini electric bike suitable for adults?', a: 'Some are sized for adults. Check the maker\'s rider limits and seat height, and ask us before you order.' },
    { q: 'What gear does a young rider need?', a: 'An approved helmet that fits, and for a mini dirt bike also goggles, gloves, boots and body armour. Queensland says to look for the AS/NZS 2063 sticker on bicycle helmets.' },
  ],
  keywords: { primary: 'mini ebike', supporting: ['bike electric mini', 'mini e bikes', 'small electric bike', 'small e bike', 'mini e bicycle'] },
  words: 0,
}
