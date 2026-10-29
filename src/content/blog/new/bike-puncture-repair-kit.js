// Blog post written to the blog-post rule (see ~/.claude/skills/blog-post/SKILL.md).
// Keywords: volume / KD / intent from Semrush AU Keyword Magic (29 Oct 2026), KD 28 or lower, recorded in docs/used-keywords.csv.
// "tyre repair kit" (4.4K) and "puncture repair kit" (3.6K) are mostly car searches; this post is bike-specific, so the bike term leads and generic terms are secondaries or tags.
// Competitor review 29 Oct 2026 (Cycling Weekly, BikeRadar, 99 Bikes, Woolworths, BikesOnline listings): weaknesses are no tubeless warning on retail pages, patch kits sold without saying they are temporary, no e-bike rear wheel caution, no cost comparison against a new tube. Plan: Park Tool steps, tubeless warning, patch vs tube cost sense, what we stock.
// Sources opened 29 Oct 2026: Park Tool "How to Patch a Tire and Tube".
// Product pages publish only names and prices. We stock the Lezyne lever kit and a 79Bike inner tube; we do not stock patch kits.
export const meta = {
  id: 'bike-puncture-repair-kit',
  slug: 'bike-puncture-repair-kit',
  url: '/blog/bike-puncture-repair-kit/',
  title: 'Bike Puncture Repair Kit: Patch vs Spare Tube Guide',
  seoTitle: 'Bike Puncture Repair Kit: Patch vs Spare Tube Guide',
  excerpt: 'Need a bike puncture repair kit? Learn what goes in it, how to patch a tube step by step, when to swap the tube instead, and the tubeless and e-bike catches.',
  category: 'Buying Guides',
  date: '2026-10-29',
  readTime: '10 min',
  focus: 'bike puncture repair kit',
  secondary: ['bicycle puncture repair kit', 'cycle puncture repair kit', 'puncture repair kit', 'tyre patch kit', 'bike tyre fix kit'],
  tags: ['patch kit tire', 'tire patch kit', 'tyre repair kits', 'flat tyre repair kit', 'flat tire repair kit', 'fix flat tire kit', 'puncture kit', 'tyre fix kit', 'repair kit for tyres', 'kit for tire repair'],
  image: {
    file: 'blog/bike-puncture-repair-kit.webp',
    alt: 'Lezyne lever kit and 79Bike inner tube, parts of a bike puncture repair kit',
    query: 'bike puncture repair kit',
    credit: null,
  },
  related: [
    { href: '/shop/care-tools-and-hydration/lezyne-lever-kit-light-grey/', name: 'Lezyne Lever Kit Light Grey', price: 18.95, note: 'Levers to remove the tyre.' },
    { href: '/shop/wheels-tyres-and-tubes/79bike-inner-tube/', name: '79Bike Inner Tube', price: 38.95, note: 'A spare tube for 79Bike wheels.' },
    { href: '/shop/wheels-tyres-and-tubes/79bike-tyre/', name: '79Bike Tyre', price: 179, note: 'A replacement tyre.' },
    { href: '/shop/wheels-tyres-and-tubes/', name: 'All wheels, tyres and tubes', note: 'Tyres, tubes and wheels.' },
  ],
  links: {
    to: [
      ['/shop/wheels-tyres-and-tubes/', 'wheels, tyres and tubes'],
      ['/blog/e-bike-tyres-and-tubes/', 'e-bike tyres and tubes guide'],
      ['/blog/bike-tool-kit/', 'bike tool kit guide'],
      ['/blog/fat-tyre-e-bikes/', 'fat tyre e-bikes guide'],
    ],
    from: [
      ['/shop/wheels-tyres-and-tubes/', 'bike puncture repair kit guide'],
      ['/shop/wheels-tyres-and-tubes/79bike-inner-tube/', 'bicycle puncture repair kit: patch or tube'],
      ['/shop/care-tools-and-hydration/lezyne-lever-kit-light-grey/', 'flat tyre repair kit checklist'],
    ],
  },
  kind: 'post',
}

export const body = {
  hook: 'A bike puncture repair kit mends a tube with a patch, but a spare tube is faster at the roadside. Carry both, check whether your tyres are tubeless and practise the repair at home.',
  intro: [
    'A bike puncture repair kit usually holds patches, glue or pre-glued patches, a piece of sandpaper and a small set of tyre levers. It is the cheapest way to fix a flat, and it works on tube-and-tyre wheels. It does not work on tubeless tyres, which need a plug or sealant instead.',
    'This guide explains what goes in a kit, how to patch a tube step by step, when to swap the tube instead, what e-bikes change and which related items we stock. Prices are current Torque E-Bikes prices. For the rest of a roadside kit, see our [bike tool kit guide](/blog/bike-tool-kit/).',
  ],
  sections: [
    {
      h: 'What goes in a bike puncture repair kit',
      p: [
        'Kits vary, but the contents are similar. Australian retail kits typically list glue, patches, sandpaper and levers, and some add a small rasp.',
      ],
      table: {
        head: ['Item', 'What it does', 'Notes'],
        rows: [
          ['Patches', 'Seal the hole in the tube', 'Glue-on or pre-glued types'],
          ['Glue', 'Bonds a vulcanizing patch', 'Needs time to dry'],
          ['Sandpaper', 'Roughens the tube so the patch grips', 'Light pressure only'],
          ['Tyre levers', 'Lift the tyre off the rim', '[Lezyne Lever Kit](/shop/care-tools-and-hydration/lezyne-lever-kit-light-grey/) $18.95'],
          ['Spare tube', 'Faster fix than patching at the roadside', '[79Bike Inner Tube](/shop/wheels-tyres-and-tubes/79bike-inner-tube/) $38.95'],
          ['Pump or CO2', 'Inflates the tyre after the fix', 'Not stocked'],
        ],
      },
    },
    {
      h: 'How to patch a tube, step by step',
      p: [
        'Park Tool\'s [guide to patching a tire and tube](https://www.parktool.com/en-int/blog/repair-help/inner-tube-repair) sets out the method. It is worth practising once at home, with good light, before you need it on the road.',
      ],
      ul: [
        '**Find the hole.** Re-inflate the tube to about twice its normal width and feel or listen for air. If that fails, submerge it in water and watch for bubbles. Mark the spot.',
        '**Prepare the surface.** Lightly sand the area around the hole, without heavy pressure that grooves the rubber. Clean it with alcohol or a solvent that leaves no film and let it dry completely.',
        '**Apply the patch.** For a pre-glued patch, peel the backing, centre it over the hole and press firmly, rolling the tube between your fingers. For a vulcanizing patch, spread a thin, even layer of glue slightly larger than the patch, let it dry for several minutes, then press the patch on hard and hold it.',
        '**Check the edges.** Make sure every edge is bonded. Leave the clear cover on the patch unless you dust it with talc.',
        '**Check the tyre and rim.** Run a finger inside the tyre for thorns and glass. A sharp rim edge or a spoke end can cause repeat punctures.',
        '**Refit and inflate.** Mount the tube in the tyre and inflate. Park Tool advises not to test the patch by inflating the tube outside the tyre, because it can stretch the tube and weaken the bond.',
      ],
      img: { file: 'blog/bike-puncture-repair-kit-tube.webp', alt: '79Bike inner tube, a spare tube to carry with a puncture kit', w: 720, h: 540 },
    },
    {
      h: 'Patch or spare tube: which is better?',
      p: [
        'At the roadside, a spare tube is quicker and more reliable. You swap the tube, inflate and go, and you patch the old tube at home. Park Tool says pre-glued patches and tyre boots are temporary trailside fixes and that the tube should be replaced as soon as possible.',
        'A patch kit still earns its place. It is light, cheap and it covers a second or third puncture on the same ride, when you have used your spare. A patch also keeps a good tube out of the bin, which saves money if you fix punctures at home.',
        'The sensible rule is one spare tube plus a patch kit on every ride, and a second tube on longer trips. Tube prices vary by size, so check the size printed on your tyre sidewall before you buy.',
      ],
    },
    {
      h: 'Tubeless tyres need a different fix',
      p: [
        'A standard patch kit is for tube-and-tyre wheels only. Park Tool says stick-on patches do not work on tubeless tyres and recommends a plug tool for those. Tubeless tyres rely on sealant to close small holes, and larger cuts need a plug or a tube fitted at the roadside.',
        'If you are not sure which system your bike has, look for the word tubeless on the tyre sidewall or the rim, or ask the dealer. Carry the right tools for your setup, because a patch kit will not help if the tyre has no tube.',
      ],
    },
    {
      h: 'E-bike punctures: what changes',
      ul: [
        '**The rear wheel is heavier.** A hub motor adds weight and a cable to the wheel, which makes removal slower.',
        '**Check the manual first.** Some bikes need the motor cable disconnected. Do not force a connector.',
        '**Switch off and remove the battery.** Do it before you touch the wheel. Lithium batteries are Class 9 dangerous goods for transport, so handle them with care.',
        '**Use a spanner for axle nuts.** Many e-bike wheels use nuts that need a spanner. See our [bike tool kit guide](/blog/bike-tool-kit/).',
        '**Consider puncture-resistant tyres.** Heavy bikes press harder on the road, so tyre choice matters. Our [e-bike tyres and tubes guide](/blog/e-bike-tyres-and-tubes/) covers it.',
        '**Fat tyres.** Wide tubes are a different size from road tubes, so match the tube to the tyre. See our [fat tyre e-bikes guide](/blog/fat-tyre-e-bikes/).',
      ],
    },
    {
      h: 'Items we stock for puncture repair',
      p: [
        'We do not sell patch kits. We do stock levers, a spare tube and replacement tyres, and product pages publish the name, brand and price only. The tube and tyre listings are for 79Bike wheels, so check compatibility with us before you order for another bike.',
      ],
      table: {
        head: ['Item', 'Brand', 'Price', 'Use'],
        rows: [
          ['[Lezyne Lever Kit Light Grey](/shop/care-tools-and-hydration/lezyne-lever-kit-light-grey/)', 'Lezyne', '$18.95', 'Remove and refit the tyre'],
          ['[79Bike Inner Tube](/shop/wheels-tyres-and-tubes/79bike-inner-tube/)', '79Bike', '$38.95', 'Spare tube'],
          ['[79Bike Tyre](/shop/wheels-tyres-and-tubes/79bike-tyre/)', '79Bike', '$179', 'Replacement tyre'],
        ],
      },
    },
    {
      h: 'Finding the cause of the flat',
      p: [
        'A patch fixes the hole but not the reason for it. Park Tool\'s [tire and tube removal and installation guide](https://www.parktool.com/en-us/blog/repair-help/tire-and-tube-removal-and-installation) says to check both the tyre and the tube for embedded debris and to inspect the rim strip for tears and protruding spokes. It also explains that small punctures and double slits often come from thorns or rim pinches and may be repairable, while large shredded holes usually come from blowouts and are typically not repairable.',
        'Run your fingertips slowly around the inside of the tyre, because a thorn or a sliver of glass often sits just where the tube was punctured. If the flat has a pair of small holes side by side, suspect a pinch flat from low pressure or a hard hit. If the hole is on the inside face of the tube, suspect a spoke end or a gap in the rim tape.',
      ],
    },
    {
      h: 'How much does a flat really cost?',
      p: [
        'Compare the options before you decide what to carry. A patch is the cheapest fix and a spare tube costs more, but the tube saves time at the roadside. Our [79Bike Inner Tube is $38.95](/shop/wheels-tyres-and-tubes/79bike-inner-tube/) and a [79Bike Tyre is $179](/shop/wheels-tyres-and-tubes/79bike-tyre/), so repeated flats on a worn tyre cost more than a new tyre over time.',
        'If you fix punctures at home, patch the tubes you pull out and keep the good ones as spares. If you ride a heavy e-bike on rough roads, a tyre with better puncture protection may save money in the long run. Ask us for advice on the tyre size and fit for your bike.',
      ],
    },
    {
      h: 'Packing the kit so it works when you need it',
      ul: [
        '**Keep it dry.** Glue dries out and patches stick together if the kit gets wet. Seal it in a small bag.',
        '**Check the glue.** Open the tube once a season. Dried glue is useless.',
        '**Carry gloves or a wipe.** Chain grease and glue get everywhere.',
        '**Know the order.** Write the steps on the lid if you tend to forget them.',
        '**Keep it with the bike.** A kit in the garage cannot help you on the road.',
        '**Replace what you use.** Restock patches and tubes straight after a repair.',
      ],
    },
    {
      h: 'Preventing the next flat',
      ul: [
        '**Check the pressure.** Low pressure causes pinch flats and wears tyres faster. Use a gauge.',
        '**Inspect the tyres.** Remove stones and glass from the tread before they work through.',
        '**Replace worn tyres.** A tyre with a flat or cracked tread is easier to puncture.',
        '**Check the rim tape.** Spoke holes can cut a tube if the rim tape has shifted.',
        '**Avoid debris.** Ride around glass and sharp edges where you can.',
        '**Carry the right size.** A tube that does not match the tyre will fail again.',
      ],
    },
    {
      h: 'Bike puncture repair kit mistakes to avoid',
      ul: [
        '**Using a patch on a tubeless tyre.** It will not work. Use a plug or a tube.',
        '**Rushing the glue.** Let it dry before you apply a vulcanizing patch.',
        '**Sanding too hard.** Heavy sanding grooves the rubber and the patch fails.',
        '**Skipping the tyre check.** The object that caused the flat may still be in the tyre.',
        '**Trusting a temporary fix.** Replace the tube or the tyre soon after a trailside repair.',
        '**Never practising.** Do one repair at home so you know the steps.',
        '**Forgetting the pump.** The kit does not inflate the tyre.',
      ],
    },
    {
      h: 'Which bike puncture repair kit should you carry?',
      p: [
        'Carry a patch kit, a spare tube, levers and a pump on every ride. Our [Lezyne Lever Kit at $18.95](/shop/care-tools-and-hydration/lezyne-lever-kit-light-grey/) and [79Bike Inner Tube at $38.95](/shop/wheels-tyres-and-tubes/79bike-inner-tube/) cover two of those items. For a worn tyre, the [79Bike Tyre at $179](/shop/wheels-tyres-and-tubes/79bike-tyre/) is the replacement we stock. Browse the full [wheels, tyres and tubes range](/shop/wheels-tyres-and-tubes/).',
        'Tell us your bike and tyre size and we will check the fit before you order. All orders ship Australia-wide with dangerous-goods certified dispatch.',
      ],
    },
  ],
  faq: [
    { q: 'What is in a bike puncture repair kit?', a: 'Usually patches, glue or pre-glued patches, sandpaper and tyre levers. Some kits add a small rasp. A kit does not include a spare tube or a pump, so carry those as well.' },
    { q: 'Is it better to patch a tube or replace it?', a: 'At the roadside, replacing the tube is quicker. Park Tool says quick patches and tyre boots are temporary fixes and the tube should be replaced as soon as possible. Patch the old tube at home.' },
    { q: 'Can I use a patch kit on a tubeless tyre?', a: 'No. Park Tool says stick-on patches do not work on tubeless tyres and recommends a plug tool. Check whether your bike has tubes before you rely on a patch kit.' },
    { q: 'Why does my patch keep failing?', a: 'Common causes are heavy sanding, wet or dirty glue, too little drying time and testing the tube outside the tyre. A sharp object still in the tyre or a bad rim tape can also cause repeat flats.' },
    { q: 'Do e-bikes need a different puncture kit?', a: 'The patch kit is the same, but the rear wheel is heavier and may need a cable disconnected. Switch off, remove the battery and check the manual before you remove the wheel.' },
    { q: 'Do you sell puncture repair kits?', a: 'No. We stock a Lezyne lever kit at $18.95, a 79Bike inner tube at $38.95 and a 79Bike tyre at $179. Buy patch kits and pumps from a specialist.' },
  ],
  keywords: { primary: 'bike puncture repair kit', supporting: ['bicycle puncture repair kit', 'cycle puncture repair kit', 'puncture repair kit', 'tyre patch kit', 'bike tyre fix kit'] },
  words: 0,
}
