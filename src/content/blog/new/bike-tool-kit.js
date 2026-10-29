// Blog post written to the blog-post rule (see ~/.claude/skills/blog-post/SKILL.md).
// Keywords: volume / KD / intent from Semrush AU Keyword Magic (29 Oct 2026), KD 28 or lower, recorded in docs/used-keywords.csv.
// Competitor review 29 Oct 2026 (forum threads, Bikes.com.au, Decathlon, retailer category pages): weaknesses are opinion lists with no sizes, nothing on e-bike specific checks (motor, battery, axle nuts), no costs, no safety note on disconnecting power before work. Plan: a trailside kit and a home kit, with real Australian prices where we stock the item.
// Sources opened 29 Oct 2026: Park Tool "How to Patch a Tire and Tube" (tube and patch steps, tubeless caveat, temporary fix warning).
// Product pages publish only names and prices. We stock a Lezyne lever kit and chain lubes; we do not stock multi-tools, pumps or stands, and the post says so.
export const meta = {
  id: 'bike-tool-kit',
  slug: 'bike-tool-kit',
  url: '/blog/bike-tool-kit/',
  title: 'Bike Tool Kit: What to Carry for Roadside Repairs',
  seoTitle: 'Bike Tool Kit: What to Carry for Roadside Repairs',
  excerpt: 'Building a bike tool kit? See what to carry for trailside repairs and e-bike checks, which items we stock from $18.95, and a home toolkit list that avoids wasted spend.',
  category: 'Buying Guides',
  date: '2026-10-29',
  readTime: '10 min',
  focus: 'bike tool kit',
  secondary: ['bicycle tool kit', 'cycle tool kit', 'bicycle tool set', 'bike fix kit', 'bike tools kit'],
  tags: ['bike tool', 'repair bike kit', 'bike repair tools', 'cycle repairing kit', 'kit repair bike', 'tool kit bike', 'bicycle repair tools', 'tools for cycle', 'bike service tools', 'bike tool kits'],
  image: {
    file: 'blog/bike-tool-kit.webp',
    alt: 'Lezyne lever kit, Krush drivetrain degreaser and Rock N Roll chain lube, items for a bike tool kit',
    query: 'bike tool kit',
    credit: null,
  },
  related: [
    { href: '/shop/care-tools-and-hydration/lezyne-lever-kit-light-grey/', name: 'Lezyne Lever Kit Light Grey', price: 18.95, note: 'A lever kit for tyre work.' },
    { href: '/shop/care-tools-and-hydration/krush-ultra-drivetrain-degreaser/', name: 'Krush Ultra Drivetrain Degreaser', price: 23.95, note: 'A drivetrain degreaser.' },
    { href: '/shop/care-tools-and-hydration/rock-n-roll-absolute-dry-chain-lube-117ml/', name: 'Rock N Roll Absolute Dry Chain Lube 117ml', price: 18.95, note: 'A dry chain lube.' },
    { href: '/shop/wheels-tyres-and-tubes/79bike-inner-tube/', name: '79Bike Inner Tube', price: 38.95, note: 'A spare tube for 79Bike wheels.' },
    { href: '/shop/care-tools-and-hydration/', name: 'All care, tools and hydration', note: 'Lubes, levers and bottles.' },
  ],
  links: {
    to: [
      ['/shop/care-tools-and-hydration/', 'care, tools and hydration'],
      ['/blog/lubricant-for-bike-chains/', 'lubricant for bike chains guide'],
      ['/blog/bike-puncture-repair-kit/', 'bike puncture repair kit guide'],
      ['/blog/e-bike-tyres-and-tubes/', 'e-bike tyres and tubes guide'],
    ],
    from: [
      ['/shop/care-tools-and-hydration/', 'bike tool kit buying guide'],
      ['/shop/care-tools-and-hydration/lezyne-lever-kit-light-grey/', 'bicycle tool kit: what to carry'],
      ['/shop/care-tools-and-hydration/krush-ultra-drivetrain-degreaser/', 'bike fix kit for home'],
    ],
  },
  kind: 'post',
}

export const body = {
  hook: 'A bike tool kit should fix the three things that strand riders: a flat tyre, a loose bolt and a dry or broken chain. Carry the small kit on the bike and keep a bigger one at home.',
  intro: [
    'A bike tool kit is a small set of tools and spares that lets you fix common faults on the road, plus a larger set at home for cleaning and adjustment. The right kit depends on your bike, your riding distance and how much you want to fix yourself. A good kit fits in a saddle bag, a bottle cage or a pocket.',
    'This guide sets out a trailside kit and a home kit, explains what e-bikes need on top, lists the items we stock with prices and shows how to avoid buying tools you will never use. Prices are current Torque E-Bikes prices. For tyre repairs in detail, see our [bike puncture repair kit guide](/blog/bike-puncture-repair-kit/).',
  ],
  sections: [
    {
      h: 'A trailside bike tool kit: the short list',
      p: [
        'Most breakdowns come from three causes: a puncture, a loose or slipped part and a chain problem. A trailside kit covers those and nothing more, so it stays light enough that you always carry it.',
      ],
      table: {
        head: ['Item', 'Why carry it', 'Do we stock it?'],
        rows: [
          ['Tyre levers', 'Remove a tyre from the rim to reach the tube', '[Lezyne Lever Kit](/shop/care-tools-and-hydration/lezyne-lever-kit-light-grey/) $18.95'],
          ['Spare inner tube', 'Fastest roadside fix for a flat', '[79Bike Inner Tube](/shop/wheels-tyres-and-tubes/79bike-inner-tube/) $38.95 (79Bike wheels)'],
          ['Patch kit', 'Backup when you run out of tubes', 'See our [puncture repair kit guide](/blog/bike-puncture-repair-kit/)'],
          ['Pump or CO2 inflator', 'Inflate the tyre after the repair', 'Not stocked'],
          ['Multi-tool with hex keys', 'Tighten bolts and adjust the saddle and bars', 'Not stocked'],
          ['Quick link for the chain', 'Rejoin a broken chain', 'Not stocked'],
        ],
      },
    },
    {
      h: 'What riders say to carry: the community list',
      p: [
        'Forum threads and retailer guides agree on a core kit: tyre levers, a spare tube, a pump or CO2 inflator, a multi-tool and a quick link for the chain. Many riders add glueless patches, a small adjustable spanner, cable ties and gloves. These are community recommendations rather than rules, so adjust them to your bike.',
        'CO2 is quick but needs spare cartridges, while a mini pump is slower but reusable. Some riders prefer a multi-tool with a chain breaker and others carry separate hex keys because they reach tight spots. If you ride a bike with thru-axles or special bolts, check the sizes you need before you leave.',
        'A short kit that you carry on every ride beats a perfect kit that stays in the garage.',
      ],
    },
    {
      h: 'The home bike tool kit',
      ul: [
        '**Hex key set.** Most bolts on a modern bike take a hex key. A full set covers saddle, bars, brakes and racks.',
        '**Torque wrench.** Carbon parts and some stems need a set torque. Check the maker\'s figure.',
        '**Chain lube and degreaser.** Clean and lube the drivetrain regularly. See our [lubricant for bike chains guide](/blog/lubricant-for-bike-chains/).',
        '**Floor pump with a gauge.** Check tyre pressure before each ride.',
        '**Cleaning brushes and rags.** A clean bike is easier to inspect.',
        '**Pedal wrench or hex.** Pedals have their own thread direction on each side, so do not force them.',
        '**A repair stand.** Optional, but it makes work easier. We do not stock one.',
        '**A notebook.** Record torque figures, tyre pressures and service dates.',
      ],
      img: { file: 'blog/bike-tool-kit-lezyne.webp', alt: 'Lezyne lever kit for a bicycle tool set', w: 720, h: 540 },
    },
    {
      h: 'What e-bikes add to the kit',
      p: [
        'An e-bike adds a motor, a battery and a controller, and the repairs differ. You can fix a puncture on an e-bike the same way as on a pedal bike, but the rear wheel is heavier and the motor cable can make wheel removal harder. Read your manual before you attempt a rear wheel change.',
        'Switch the bike off and remove the battery before you work on the drive system. Do not open the motor, controller or battery yourself, because high-capacity lithium batteries are hazardous and are classed as Class 9 dangerous goods for transport. Our [e-bike batteries guide](/blog/e-bike-batteries/) explains safe handling.',
        'Check the axle nut size on your e-bike. Many e-bike wheels use nuts that need a spanner, and a small adjustable spanner can solve a roadside problem that a hex key cannot.',
      ],
    },
    {
      h: 'Tools and care products we stock',
      p: [
        'We stock a few care items, and product pages publish names, brands and prices only. For anything else, use a specialist.',
      ],
      table: {
        head: ['Item', 'Brand', 'Price', 'Use'],
        rows: [
          ['[Lezyne Lever Kit Light Grey](/shop/care-tools-and-hydration/lezyne-lever-kit-light-grey/)', 'Lezyne', '$18.95', 'Tyre levers'],
          ['[Krush Ultra Drivetrain Degreaser](/shop/care-tools-and-hydration/krush-ultra-drivetrain-degreaser/)', 'Krush', '$23.95', 'Drivetrain cleaning'],
          ['[Rock N Roll Absolute Dry Chain Lube 117ml](/shop/care-tools-and-hydration/rock-n-roll-absolute-dry-chain-lube-117ml/)', 'Rock N Roll', '$18.95', 'Dry chain lube'],
          ['[79Bike Inner Tube](/shop/wheels-tyres-and-tubes/79bike-inner-tube/)', '79Bike', '$38.95', 'Spare tube'],
        ],
      },
    },
    {
      h: 'Learn one repair before you need it',
      p: [
        'A tool kit helps only if you know how to use it. Practise changing a tube at home, in the dry, with good light. Park Tool\'s [guide to patching a tire and tube](https://www.parktool.com/en-int/blog/repair-help/inner-tube-repair) walks through finding the hole, roughening and cleaning the surface, applying a pre-glued or vulcanizing patch and refitting the tube. It warns that the steps apply only to tube-and-tyre setups, that tubeless tyres need a plug tool and that quick patches and tyre boots are temporary fixes.',
        'Practise the chain quick link and the saddle adjustment as well. Ten minutes in the garage can save an hour at the side of the road.',
      ],
    },
    {
      h: 'Using tyre levers without pinching the tube',
      p: [
        'Levers are the tool most riders use first, and most beginners use them badly. Park Tool\'s [tire and tube removal and installation guide](https://www.parktool.com/en-us/blog/repair-help/tire-and-tube-removal-and-installation) says to fully deflate the tube, push one bead toward the centre of the rim and work the levers under the bead in short sections. It warns against screwdrivers and knives, which can damage the tube.',
        'The same guide says to check both the tyre and the tube for embedded debris, and to inspect the rim strip for tears and protruding spokes before you refit anything. When you refit, align the valve straight toward the hub, seat one bead at a time by hand and use levers only as a last resort, so you do not pinch the tube. If the bead sticks, the guide suggests soapy water and says not to use grease or oil.',
      ],
    },
    {
      h: 'Quick checks a tool kit lets you do in two minutes',
      ul: [
        '**Bolts and bars.** Hold the front wheel between your knees and twist the bars. If they move, tighten the stem bolts with the right hex key.',
        '**Saddle.** A saddle that tilts or sinks needs its clamp tightened. Mark the height first so you can reset it.',
        '**Brakes.** Squeeze the levers and listen for rubbing. A small adjustment with a hex key often cures a squeal.',
        '**Chain.** A dry, noisy chain needs lube. A chain that skips needs a closer look at a workshop.',
        '**Racks and mudguards.** Loose bolts rattle and shear. Tighten them before the next ride.',
        '**Pedals.** A creaking pedal is often a loose crank bolt or a dry thread.',
      ],
    },
    {
      h: 'Building a kit on a budget',
      p: [
        'You do not need a branded set. Start with the items that fix flats and loose bolts, then add tools only when a job proves you need them. Buy a spare tube that matches your tyre size, a set of levers and a multi-tool with the hex sizes on your bike. Our own range of care items starts at $18.95.',
        'Spend on things you will use often, such as a floor pump and a good hex key set, and borrow or hire specialist tools you will use once a year. Keep receipts and manuals together, because torque figures and part numbers save time later.',
      ],
    },
    {
      h: 'A simple service routine',
      ul: [
        '**Before each ride.** Check tyre pressure, brakes, lights and that the quick releases or axle nuts are tight.',
        '**Weekly.** Wipe the chain, lube it and check for worn tyres.',
        '**Monthly.** Clean the drivetrain with a degreaser, check bolt tightness and look for cracks near welds.',
        '**Each season.** Check cables, brake pads and wheel trueness, and replace worn parts.',
        '**Yearly.** Book a workshop service for a proper check, especially for e-bike motor and battery systems.',
        '**After a crash.** Inspect the frame, bars and wheels, and replace any bent or cracked part.',
      ],
    },
    {
      h: 'Where to carry the kit',
      ul: [
        '**Saddle bag.** A small bag under the saddle holds a tube, levers and a multi-tool.',
        '**Bottle cage tool tube.** Some riders keep tools in a tube that sits in a cage. It is easy to reach.',
        '**Frame or top-tube bag.** Good for small items and a phone.',
        '**Pannier or basket.** On an e-bike with a rack, a pannier holds the larger kit. See our [bike panniers buying guide](/blog/bike-panniers/).',
        '**Jersey pocket.** Light riders carry a small kit in a pocket.',
        '**Tie it down.** A rattling kit is annoying and can fall off. Check that nothing blocks the rear light.',
      ],
    },
    {
      h: 'Bike tool kit mistakes to avoid',
      ul: [
        '**Buying a huge kit.** A kit with 30 tools you never use is waste. Start small.',
        '**Skipping the spare tube.** A patch is a backup, not the first choice at the roadside.',
        '**Not checking sizes.** Check hex sizes and axle nut sizes on your own bike.',
        '**Never practising.** Practise a tube change before you need it.',
        '**Forgetting the pump.** A tube is no use without a way to inflate it.',
        '**Working on a powered e-bike.** Switch it off and remove the battery first.',
        '**Opening the battery.** Do not. Send faulty batteries to a specialist.',
      ],
    },
    {
      h: 'Which bike tool kit should you build?',
      p: [
        'Start with levers, a spare tube, a patch kit, a pump and a multi-tool, and add a quick link if you ride a long way from home. Our [Lezyne Lever Kit at $18.95](/shop/care-tools-and-hydration/lezyne-lever-kit-light-grey/) covers the levers, and the [Krush degreaser at $23.95](/shop/care-tools-and-hydration/krush-ultra-drivetrain-degreaser/) and [Rock N Roll chain lube at $18.95](/shop/care-tools-and-hydration/rock-n-roll-absolute-dry-chain-lube-117ml/) cover home care. Browse the full [care, tools and hydration range](/shop/care-tools-and-hydration/).',
        'Tell us your bike and how far you ride, and we will point you to the right items. All orders ship Australia-wide with dangerous-goods certified dispatch.',
      ],
    },
  ],
  faq: [
    { q: 'What should be in a basic bike tool kit?', a: 'Tyre levers, a spare inner tube, a patch kit, a pump or CO2 inflator, a multi-tool with the hex sizes your bike uses and a quick link for the chain. Add a small spanner if your bike has axle nuts.' },
    { q: 'Do I need different tools for an e-bike?', a: 'Mostly the same, plus a spanner for axle nuts if fitted. Do not open the motor, controller or battery. Switch the bike off and remove the battery before you work on the drive system.' },
    { q: 'Is a patch kit enough for a flat tyre?', a: 'It works, but a spare tube is faster. Park Tool says quick patches and tyre boots are temporary fixes and the tube should be replaced as soon as possible. Carry both on longer rides.' },
    { q: 'Where should I keep my bike tool kit?', a: 'In a saddle bag, a bottle cage tool tube, a frame bag or a pannier, so it is on the bike every ride. Make sure it does not block the rear light.' },
    { q: 'Do you sell a complete bike tool kit?', a: 'No. We stock a Lezyne lever kit at $18.95, chain lubes, a degreaser and a 79Bike inner tube. For multi-tools and pumps, buy from a specialist.' },
    { q: 'How much should a home toolkit cost?', a: 'It varies widely. A hex key set, a floor pump, chain lube and a degreaser cover most home work. Buy tools as you need them rather than a large kit you will not use.' },
  ],
  keywords: { primary: 'bike tool kit', supporting: ['bicycle tool kit', 'cycle tool kit', 'bicycle tool set', 'bike fix kit', 'bike tools kit'] },
  words: 0,
}
