// Blog post written to the blog-post rule (see ~/.claude/skills/blog-post/SKILL.md).
// Keywords: volume / KD / intent from Semrush AU Keyword Magic (29 Oct 2026), KD 28 or lower, recorded in docs/used-keywords.csv. "bicycle repair stand" (KD 33) is above the cap and is not used.
// Competitor review 29 Oct 2026 (retailer category pages, Park Tool, Decathlon): weaknesses are product lists with no capacity sums, no mention that e-bikes can exceed a stand's rating, no clamp-damage cautions, no cheaper alternatives. Plan: Park Tool stand-type table with real capacities, e-bike weight warning, clamp advice, what to do without a stand.
// Sources opened 29 Oct 2026: Park Tool "Bicycle Repair Stand Comparison Guide" (portable, fixed-height and assist-lift stands; capacities of 60 to 120 lb; PRS-30 and PRS-33.2 ideal for heavy e-bikes and cargo bikes; capacities apply when weight is centred over the legs), Park Tool "How to Wash a Bicycle" (low pressure, dry the chain, lube).
// Product pages publish only names and prices. We do not sell repair stands; the post says so and links the care items, levers and tubes we stock.
export const meta = {
  id: 'bike-repair-stand',
  slug: 'bike-repair-stand',
  url: '/blog/bike-repair-stand/',
  title: 'Bike Repair Stand: Capacity, Clamps and E-Bike Weight',
  seoTitle: 'Bike Repair Stand: Capacity, Clamps and E-Bike Weight',
  excerpt: "Choosing a bike repair stand? Compare folding, fixed and assist-lift stands, check capacity against e-bike weight and see the care items we stock.",
  category: 'Buying Guides',
  date: '2026-10-29',
  readTime: '10 min',
  focus: 'bike repair stand',
  secondary: ['repair stand for bike', 'bicycle fixing stand', 'bike work stand', 'cycle workshop stand', 'cycle work stand'],
  tags: ['bike fixing stand', 'bike stand for fixing', 'bicycle work stand', 'bike workstand', 'bike maintenance stand', 'bicycle maintenance stand', 'cycle repair stand', 'cycle maintenance stand', 'bike stand repair', 'cycling repair stand'],
  image: {
    file: 'blog/bike-repair-stand.webp',
    alt: 'Lezyne lever kit, Krush drivetrain degreaser and Rock N Roll chain lube, workshop items to use with a bike repair stand',
    query: 'bike repair stand',
    credit: null,
  },
  related: [
    { href: '/shop/care-tools-and-hydration/lezyne-lever-kit-light-grey/', name: 'Lezyne Lever Kit Light Grey', price: 18.95, note: 'Levers for tyre work on the stand.' },
    { href: '/shop/care-tools-and-hydration/krush-ultra-drivetrain-degreaser/', name: 'Krush Ultra Drivetrain Degreaser', price: 23.95, note: 'A drivetrain degreaser.' },
    { href: '/shop/care-tools-and-hydration/rock-n-roll-gold-chain-lube-117ml/', name: 'Rock N Roll Gold Chain Lube 117ml', price: 18.95, note: 'A chain lube.' },
    { href: '/shop/care-tools-and-hydration/', name: 'All care, tools and hydration', note: 'Lubes, degreasers and levers.' },
  ],
  links: {
    to: [
      ['/shop/care-tools-and-hydration/', 'care, tools and hydration'],
      ['/blog/bike-tool-kit/', 'bike tool kit guide'],
      ['/blog/bike-chain-degreaser/', 'bike chain degreaser guide'],
      ['/blog/e-bike-batteries/', 'e-bike batteries guide'],
    ],
    from: [
      ['/shop/care-tools-and-hydration/', 'bike repair stand buying guide'],
      ['/shop/care-tools-and-hydration/lezyne-lever-kit-light-grey/', 'bicycle fixing stand and levers'],
      ['/shop/care-tools-and-hydration/krush-ultra-drivetrain-degreaser/', 'bike work stand for cleaning'],
    ],
  },
  kind: 'post',
}

export const body = {
  hook: 'A bike repair stand lifts the bike to a comfortable height so you can work on it. Check the stand\'s weight capacity against your bike, especially an e-bike, and look after the clamp.',
  intro: [
    'A bike repair stand holds a bike off the ground so you can turn the cranks, spin the wheels and reach every part without bending down. It makes cleaning, lubing and adjusting faster and safer, and it protects your back. The key decision is capacity, because many stands are rated for lighter bikes than a modern e-bike.',
    'This guide compares the stand types using Park Tool\'s published capacities, explains the weight problem with e-bikes, covers clamps and how to avoid damage, shows what to do without a stand and lists the care items we stock. Prices are current Torque E-Bikes prices. We do not sell repair stands. For the rest of a workshop, see our [bike tool kit guide](/blog/bike-tool-kit/).',
  ],
  sections: [
    {
      h: 'Bike repair stand types compared',
      p: [
        'Park Tool\'s [repair stand comparison guide](https://www.parktool.com/en-int/blog/repair-help/repair-stand-comparison-guide) groups stands into portable folding stands, fixed-height professional stands and assist-lift stands. The figures below are Park Tool\'s published capacities for its own models, and they apply when the weight is centred over the legs.',
      ],
      table: {
        head: ['Stand type', 'Capacity (Park Tool examples)', 'Best for'],
        rows: [
          ['Portable folding (Home Mechanic)', '80 lb (36 kg) for PCS-9.3 and PCS-10.3, 100 lb (45 kg) for PCS-4', 'Home garages and travel'],
          ['Portable folding (Team Issue)', '60 lb (27 kg) PRS-22.2, 100 lb (45 kg) PRS-25, 80 lb (36 kg) PRS-26', 'Events and workshops'],
          ['Fixed-height professional', '120 lb (54 kg) per clamp', 'Workshops'],
          ['Assist-lift professional', '120 lb (54 kg) per clamp; lifts the bike off the ground', 'Heavy e-bikes and cargo bikes'],
          ['Cradle with no clamp', '60 lb (27 kg) for the PRS-22.2', 'Bikes you do not want clamped'],
        ],
      },
    },
    {
      h: 'The e-bike problem: check the weight first',
      p: [
        'E-bikes are much heavier than pedal bikes, and many weigh more than a home stand can hold. Park Tool says the PRS-30 and PRS-33.2 assist-lift stands can lift a bike directly off the ground and are ideal stands for heavy, awkward e-bikes and cargo bikes. Those are professional-tier stands, so for a home garage the sensible step is to find your bike\'s weight and compare it with the stand\'s rating before you buy.',
        'Our product pages do not publish bike weights, so ask us for the maker\'s figure for your model and frame size. Add the weight of anything fitted, such as a rack, panniers or a spare battery, and leave a margin. If the bike is at or above the stand\'s capacity, do not use that stand.',
        'Also take the battery off before you lift an e-bike onto a stand if the bike allows it. That reduces the weight and removes the risk of the battery shifting. Our [e-bike batteries guide](/blog/e-bike-batteries/) explains safe handling.',
      ],
      img: { file: 'blog/bike-repair-stand-lezyne.webp', alt: 'Lezyne lever kit, a tool used while a bike sits in a repair stand', w: 720, h: 540 },
    },
    {
      h: 'Clamps: how they hold the bike',
      ul: [
        '**Adjustable linkage clamps.** Park Tool lists these as the 100-5C and 100-3C on home mechanic and fixed-height stands.',
        '**Micro-adjust clamps.** Park Tool lists these as the 100-5D and 100-3D, and says they are used on its Team Issue and assist-lift stands.',
        '**No clamp.** The PRS-22.2 holds the bike in a cradle rather than gripping the frame.',
        '**Clamp the right part.** The seat tube or seat post is common, and the top tube is another option. Avoid clamping thin or carbon tubes hard.',
        '**Check the tube shape.** Aero shapes, dropper posts and integrated frames may not suit every clamp.',
        '**Check compatibility.** Clamps are not universal across stands, so check that a clamp fits your stand before you buy it.',
      ],
    },
    {
      h: 'What to look for when you buy',
      ul: [
        '**Capacity above your bike\'s weight.** Include accessories and leave a margin.',
        '**A stable base.** Wide legs and a stable stance stop the stand tipping.',
        '**Height adjustment.** A stand you can set to a comfortable working height saves your back.',
        '**A secure clamp with padded jaws.** Padding protects paint and carbon.',
        '**Weight and folding size.** A folding stand should fit the car or the garage corner.',
        '**Replaceable parts.** Jaw covers and clamps wear.',
        '**A flat, solid floor.** An uneven floor makes any stand unsafe.',
      ],
    },
    {
      h: 'No stand? Alternatives that work',
      p: [
        'You can do a lot without a stand. Flip a pedal bike upside down onto the saddle and bars for a quick wheel job, or lean the bike against a wall for chain care. Do not flip an e-bike without checking the manual, because the display, battery and controls can be damaged or the battery can shift.',
        'A simple shop-style hook or a sturdy bench with a clamp is another option for light bikes. For heavy bikes, a second person to steady the bike makes work safer. Whatever method you use, keep the bike stable and keep your fingers away from the chain and the brakes.',
      ],
    },
    {
      h: 'Working on a stand: safety and technique',
      ul: [
        '**Lock the clamp and test the bike.** Push gently on the bike before you start.',
        '**Remove the battery from an e-bike.** Do this before you work on the drive system.',
        '**Do not pedal hard on a stand.** Spin the cranks gently so the bike does not walk off the stand.',
        '**Keep fingers clear of the chain and the disc rotors.** Both can cut and trap.',
        '**Keep the stand clean.** Oil on the clamp makes the bike slip.',
        '**Do not lean on the bike.** Side loads can tip a stand.',
      ],
    },
    {
      h: 'Washing and lubing on the stand',
      p: [
        'A stand makes washing easy. Park Tool\'s [guide to washing a bicycle](https://www.parktool.com/en-us/blog/repair-help/bike-washing-and-cleaning) says to keep hose pressure low with a wide spray, to avoid letting grit sit between clamp jaws and paint and to avoid solvent dripping into the bearings, and then to dry the chain and apply one drop of lubricant per chain link. Wipe the clamp jaws before you clamp a clean frame.',
        'For the drivetrain clean, follow our [bike chain degreaser guide](/blog/bike-chain-degreaser/). On an e-bike, do not spray the motor, the battery connections or the display, and never wash while the battery is charging.',
      ],
    },
    {
      h: 'Cost versus value: is a stand worth it?',
      p: [
        'A stand is worth buying if you do your own cleaning and adjustments more than a few times a year. It saves time and protects your back, and it makes you more likely to keep the bike in good condition, which saves money on worn parts. If you only fix an occasional flat, a stand is a luxury and a floor pump and a tool kit matter more.',
        'Decide how you ride, how often you work on the bike and whether the bike is heavy. A rider with a single light bike and a small garage needs a different stand from a household with several heavy e-bikes.',
        'Whatever you buy, check the capacity, the clamp and the stability first, and buy from a source that can supply replacement clamps and jaw covers.',
      ],
    },
    {
      h: 'Care items we stock',
      p: [
        'We do not sell repair stands. We stock care items and a lever kit that go with one. Product pages publish the name, brand and price only.',
      ],
      table: {
        head: ['Item', 'Brand', 'Price', 'Use'],
        rows: [
          ['[Lezyne Lever Kit Light Grey](/shop/care-tools-and-hydration/lezyne-lever-kit-light-grey/)', 'Lezyne', '$18.95', 'Tyre levers'],
          ['[Krush Ultra Drivetrain Degreaser](/shop/care-tools-and-hydration/krush-ultra-drivetrain-degreaser/)', 'Krush', '$23.95', 'Drivetrain cleaning'],
          ['[Rock N Roll Gold Chain Lube 117ml](/shop/care-tools-and-hydration/rock-n-roll-gold-chain-lube-117ml/)', 'Rock N Roll', '$18.95', 'Chain lube'],
          ['[Krush Rotor Revive](/shop/care-tools-and-hydration/krush-rotor-revive/)', 'Krush', '$32.95', 'Rotor care'],
        ],
      },
    },
    {
      h: 'Setting up a home workshop around the stand',
      p: [
        'A stand is the centre of a home workshop, but the space around it matters as much. Choose a flat, solid floor with good light, and keep a bench or a wall shelf within reach for tools and parts. A clear area of a couple of metres around the stand lets you walk around the bike and spin the wheels without hitting anything.',
        'Keep a tray for small parts so bolts do not roll away, a rag for oily hands and a bin for old tubes and used cleaner. A mat under the stand catches drips and protects the floor. Good habits save more time than extra tools.',
      ],
    },
    {
      h: 'Jobs a stand makes easy',
      ul: [
        '**Cleaning and lubing the chain.** You can turn the cranks and work the whole chain without the bike leaning over.',
        '**Adjusting gears.** Spin the cranks, shift through the gears and watch the derailleur work.',
        '**Brake checks.** Spin the wheel and check for rubbing, then adjust the calipers or pads.',
        '**Wheel and tyre work.** Remove a wheel, fix a flat and refit it. See our [bike tool kit guide](/blog/bike-tool-kit/).',
        '**Inspecting the bike.** Look at cables, bolts and tyres with the bike at eye level.',
        '**Washing.** A raised bike is easier to rinse and dry.',
      ],
    },
    {
      h: 'Jobs to leave to a workshop',
      p: [
        'A stand does not make every job a home job. Do not open an e-bike motor, controller or battery at home. Hydraulic brake bleeds, suspension servicing, bottom bracket and headset work and wheel truing are skilled jobs that need the right tools and training, and a mistake can be dangerous. A good workshop is cheaper than a crash.',
        'Use the stand for the routine jobs that keep a bike running between services, and book a professional service at least once a year, particularly for e-bikes with motors and batteries that need specialist attention.',
      ],
    },
    {
      h: 'Bike repair stand mistakes to avoid',
      ul: [
        '**Ignoring capacity.** An e-bike can exceed a home stand\'s rating.',
        '**Clamping a carbon tube hard.** Use padded jaws and moderate force.',
        '**Using an unstable stand on a soft floor.** Work on a flat, solid surface.',
        '**Leaving the battery on.** Remove it before you lift an e-bike.',
        '**Buying a stand with a clamp that does not fit your frame.** Check tube shapes.',
        '**Pedalling hard on the stand.** Spin gently.',
      ],
    },
    {
      h: 'Which bike repair stand should you buy?',
      p: [
        'Start with your bike\'s weight, then choose a stand with a capacity above it and a clamp that suits your frame. For pedal bikes, a portable folding stand is enough. For heavy e-bikes, look at assist-lift stands or ask a workshop to do the heavy jobs. Pair the stand with the care items above, including the [Krush Ultra Drivetrain Degreaser at $23.95](/shop/care-tools-and-hydration/krush-ultra-drivetrain-degreaser/) and the [Lezyne Lever Kit at $18.95](/shop/care-tools-and-hydration/lezyne-lever-kit-light-grey/). Browse the full [care, tools and hydration range](/shop/care-tools-and-hydration/).',
        'Tell us your bike and we will give you the maker\'s weight. All orders ship Australia-wide with dangerous-goods certified dispatch.',
      ],
    },
  ],
  faq: [
    { q: 'What is a bike repair stand?', a: 'A stand that holds a bike off the ground so you can clean, adjust and repair it at a comfortable height. Park Tool lists portable folding, fixed-height and assist-lift types.' },
    { q: 'Can a repair stand hold an e-bike?', a: 'Only if its capacity is above the bike\'s weight. Park Tool lists home stands at 80 to 100 lb (36 to 45 kg) and says assist-lift stands are ideal for heavy e-bikes. Check your bike\'s weight first.' },
    { q: 'How do I know the weight of my e-bike?', a: 'Use the maker\'s weight for your model and frame size, and add anything fitted, such as a rack, panniers or a spare battery. Ask us if you are unsure.' },
    { q: 'Should I remove the battery before using a stand?', a: 'Yes if the bike allows it. It reduces the weight and stops the battery shifting. Handle batteries as the maker advises.' },
    { q: 'Do I need a stand to work on my bike?', a: 'No. You can do many jobs by leaning the bike or flipping a pedal bike. Do not flip an e-bike without checking the manual.' },
    { q: 'Do you sell bike repair stands?', a: 'No. We stock a Lezyne lever kit at $18.95, a Krush degreaser at $23.95, chain lubes at $18.95 and Krush Rotor Revive at $32.95.' },
  ],
  keywords: { primary: 'bike repair stand', supporting: ['repair stand for bike', 'bicycle fixing stand', 'bike work stand', 'cycle workshop stand', 'cycle work stand'] },
  words: 0,
}
