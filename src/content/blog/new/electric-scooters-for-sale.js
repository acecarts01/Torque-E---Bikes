// Blog post written to the blog-post rule (see ~/.claude/skills/blog-post/SKILL.md).
// Keywords: volume / KD / intent from Semrush AU Keyword Magic (6 Nov 2026), recorded in docs/used-keywords.csv and docs/blog-plan-batches-2026-11-06.html.
// Sources opened 6 Nov 2026: Queensland Government rules for personal mobility devices (updated 26 Aug 2026); Segway Australia product pages for the MAX G3 and F3 Pro (spec and price comparisons reused from the adult scooter guide).
// Prices are from our catalogue on 6 Nov 2026. No adult scooter in our range is under $500.
export const meta = {
  id: 'electric-scooters-for-sale',
  slug: 'electric-scooters-for-sale',
  url: '/blog/electric-scooters-for-sale/',
  title: 'E Scooter for Sale: Adult Electric Scooters From $664',
  seoTitle: 'E Scooter for Sale: Adult Electric Scooters From $664',
  excerpt: 'Looking for an e scooter for sale? Compare eight adult electric scooters from $664 to $1,899, see ranges and rules in Queensland, and pick the right one.',
  category: 'Buying Guides',
  date: '2026-11-06',
  readTime: '10 min',
  focus: 'e scooter for sale',
  secondary: ['electric scooter adults', 'electric scooter sales', 'electric scooter under $500', 'fast electric scooter', 'e scooter bike'],
  tags: ['electric scooter sale', 'cheapest electric scooters', 'electric scooter bikes', 'e kick scooters', 'adult e scooter', 'electric scooter cheap', 'scooter motors for sale', 'best e scooter australia', 'cheap e scooters', 'electric motor scooters for sale'],
  image: {
    file: 'blog/electric-scooters-for-sale.webp',
    alt: 'E scooter for sale: Segway Ninebot E2 Pro, F3 Pro and MAX G3 E electric scooters on a white background',
    query: 'e scooter for sale',
    credit: null,
  },
  related: [
    { href: '/shop/electric-scooters/segway-ninebot-e2-pro/', name: 'Segway Ninebot E2 Pro', price: 664, note: 'Our lowest-priced adult scooter.' },
    { href: '/shop/electric-scooters/segway-ninebot-f3-pro/', name: 'Segway Ninebot F3 Pro', price: 1259, note: 'A mid-priced commuter with a published 70 km range.' },
    { href: '/shop/electric-scooters/segway-ninebot-max-g3-e/', name: 'Segway Ninebot MAX G3 E', price: 1557, note: 'The long-range model.' },
    { href: '/shop/electric-scooters/segway-ninebot-zt3-pro-d/', name: 'Segway Ninebot ZT3 Pro D', price: 1557, note: 'An off-road focused scooter.' },
    { href: '/shop/electric-scooters/', name: 'All electric scooters', note: 'Eight adult electric scooters.' },
  ],
  links: {
    to: [
      ['/shop/electric-scooters/', 'electric scooters'],
      ['/blog/electric-scooter-adult/', 'electric scooter adult guide'],
      ['/blog/ninebot-scooter/', 'ninebot scooter guide'],
      ['/blog/scooter-helmet/', 'scooter helmet guide'],
    ],
    from: [
      ['/shop/electric-scooters/', 'e scooter for sale'],
      ['/shop/electric-scooters/segway-ninebot-e2-pro/', 'electric scooters for sale: compare prices'],
      ['/shop/electric-scooters/segway-ninebot-f3-pro/', 'electric scooter sales: how to choose'],
    ],
  },
  kind: 'post',
}

export const body = {
  hook: 'Our adult e scooters for sale are eight models from $664 to $1,899. None costs under $500, so if your budget is lower, look at our kids scooters or ask us about a smaller model.',
  intro: [
    'If you are searching for an e scooter for sale, the useful questions are how far you ride, how heavy a scooter you can carry, what surface you ride on and where you are legally allowed to ride it. The cheapest scooter is rarely the best value if it runs out of range halfway through your commute, and the most powerful one is no use if you cannot lift it onto a train.',
    'This guide sorts our eight adult electric scooters by price and purpose, explains the differences that matter, sets out the Queensland rules and finishes with a quick-pick list. Prices are in Australian dollars as listed on 6 November 2026, and we only state what the supplier or the maker publishes.',
  ],
  sections: [
    {
      h: 'E scooter for sale: the adult electric scooters in our range',
      p: [
        'Our [electric scooters](/shop/electric-scooters/) range has eight adult models in two groups. The first is four Segway Ninebot scooters: the E2 Pro at $664, the F3 Pro at $1,259, and the MAX G3 E and ZT3 Pro D at $1,557 each. The second is four Dragon performance scooters: the GTR V2 at $1,614, the Slayer 22Ah at $1,709, the Raptor at $1,804 and the Cyclone Pro at $1,899.',
        'The Segway group is aimed at commuting and everyday riding. The Dragon models are dual-motor performance scooters, and we sell them for private property use only. The table puts the eight side by side.',
      ],
      table: {
        head: ['Scooter', 'Price', 'Best for', 'Note'],
        rows: [
          ['Segway Ninebot E2 Pro', '$664', 'Short, light commutes', 'Supplier lists up to 40 km at an easy pace'],
          ['Segway Ninebot F3 Pro', '$1,259', 'Daily commuting', 'Segway lists 1200 W and 70 km theoretical range'],
          ['Segway Ninebot MAX G3 E', '$1,557', 'Long commutes', 'Segway lists 2000 W and 80 km theoretical range'],
          ['Segway Ninebot ZT3 Pro D', '$1,557', 'Rougher surfaces', 'Segway lists 11-inch off-road tubeless tyres'],
          ['Dragon GTR V2', '$1,614', 'Performance riding on private land', 'Private property use only'],
          ['Dragon Slayer 22Ah', '$1,709', 'Performance riding on private land', 'Private property use only'],
          ['Dragon Raptor', '$1,804', 'Performance riding on private land', 'Private property use only'],
          ['Dragon Cyclone Pro', '$1,899', 'Performance riding on private land', 'Private property use only'],
        ],
      },
    },
    {
      h: 'Is there a cheap electric scooter under $500?',
      p: [
        'Not among our adult scooters. The lowest-priced adult model is the [Segway Ninebot E2 Pro](/shop/electric-scooters/segway-ninebot-e2-pro/) at $664. If you are searching for the cheapest electric scooters, be aware that very low prices often mean a small battery, a small motor, weaker brakes and little after-sales support, and some cheap models are too slow or light for adult riders on Australian roads and paths.',
        'If your budget is under $500 and the rider is a child, our [kids electric scooters](/shop/kids-electric-scooters/) start at $265 and include the Segway Ninebot C2 Pro at $455. Our [childrens electric scooters guide](/blog/childrens-electric-scooters/) explains which suits which age. For an adult, we would sooner you save for a model that will last than buy a cheaper one that disappoints.',
      ],
    },
    {
      h: 'Commuter scooters for sale: E2 Pro, F3 Pro and MAX G3 E',
      img: { file: 'blog/electric-scooters-for-sale-segway-ninebot-f3-pro.webp', alt: 'Segway Ninebot F3 Pro commuter electric scooter on a white background', w: 720, h: 540 },
      p: [
        'The [E2 Pro](/shop/electric-scooters/segway-ninebot-e2-pro/) is the light, low-cost choice for short trips, and the supplier lists up to 40 km at an easy pace. The [F3 Pro](/shop/electric-scooters/segway-ninebot-f3-pro/) is the everyday workhorse. Segway Australia lists it at 1200 W with a theoretical range of 70 km and prices it at $1,399, so our $1,259 is $140 lower.',
        'The [MAX G3 E](/shop/electric-scooters/segway-ninebot-max-g3-e/) is the long-range commuter. Segway Australia lists the MAX G3 family at 2000 W and a theoretical range of 80 km and prices the MAX G3 at $1,699 on its collection page, so our $1,557 is $142 lower. Theoretical range is measured under ideal conditions, so real-world range is lower, especially for heavier riders, hills and cold weather.',
      ],
    },
    {
      h: 'Off-road and performance scooters for sale',
      img: { file: 'blog/electric-scooters-for-sale-dragon-gtr-v2.webp', alt: 'Dragon GTR V2 dual-motor performance electric scooter, for private property use only', w: 720, h: 540 },
      p: [
        'The [ZT3 Pro D](/shop/electric-scooters/segway-ninebot-zt3-pro-d/) is Segway\'s off-road focused model, with 11-inch off-road tubeless tyres listed by the maker. It suits gravel, parks and rougher paths better than a small-wheeled commuter, but it is still a Segway scooter intended for the rules that apply to personal mobility devices in your state.',
        'The Dragon scooters are a different class. The supplier lists dual motors and top speeds of 50 to 62 km/h, which is well above the Queensland limit for public paths, so we sell them for private property use only. Our [Dragon e scooter guide](/blog/dragon-e-scooter/) compares the four in detail.',
      ],
    },
    {
      h: 'Queensland rules for riding an e scooter',
      p: [
        'The Queensland Government\'s [rules for personal mobility devices](https://www.qld.gov.au/transport/safety/rules/wheeled-devices/personal-mobility-devices) (updated 26 August 2026, read 6 November 2026) cap motor-propelled speed at 25 km/h, with 12 km/h on footpaths and shared paths. Riders must wear an approved bicycle or motorbike helmet, and from 31 August 2026 riders on public paths and roads must be 16 or older and hold a licence.',
        'These rules apply to the scooter you ride in public, so a performance scooter that is faster than the limit is for private land only. Rules differ in other states and territories, so check your own road authority before you ride. Our [electric scooter adult guide](/blog/electric-scooter-adult/) explains the rules and how to choose in more detail.',
      ],
    },
    {
      h: 'Weight, folding and carrying: the hidden cost of a big scooter',
      p: [
        'Range and power sell scooters, but weight decides whether you use them. A long-range scooter has a bigger battery, and a bigger battery means more kilograms to lift up a flight of stairs, onto a train or into a boot. If you live in an apartment with a lift or a ground-floor garage, weight matters less. If you carry the scooter every day, test the lift before you commit, and choose the lighter model if you are unsure.',
        'Folding mechanisms matter as well. A scooter that folds quickly and latches securely is easier to carry and safer to store, and a stiff or loose latch is a warning sign. Check that the folded scooter fits where you plan to keep it, and ask us for the weight of any model you are considering, since we confirm details with you before you pay.',
      ],
    },
    {
      h: 'Tyres, suspension and the surface you ride on',
      p: [
        'Small solid tyres are puncture-proof but harsh on cracked paths. Pneumatic or tubeless tyres cushion bumps and grip better in the wet, at the cost of an occasional puncture, which self-sealing tubeless tyres largely avoid. Segway lists 11-inch off-road tubeless tyres on the ZT3 Pro, which is why it suits rougher surfaces better than a commuter with smaller wheels.',
        'Suspension is the other half of comfort. A scooter with front and rear suspension soaks up bumps that would jar a rigid frame, and it is worth paying for if your route has cobbles, tree roots or patched asphalt. For smooth bike paths, suspension matters less than good brakes and lights.',
      ],
    },
    {
      h: 'Charging and battery care for an electric scooter',
      p: [
        'A scooter battery is a lithium pack, and treating it properly keeps it safe and extends its life. Use the charger that came with the scooter, charge on a hard surface away from flammable items and do not leave it charging while you sleep or are out. The Australian Government\'s [lithium-ion batteries guide](https://www.productsafety.gov.au/consumers/be-safe-around-the-home/safely-use-batteries-and-technology/lithium-ion-batteries-guide) sets out these precautions and the warning signs of a failing battery, such as swelling, overheating or a smell.',
        'Cold and heat both reduce range, and storing a battery fully charged or fully flat for months shortens its life. If you will not ride for a while, leave it part-charged and check it occasionally. Lithium batteries are also Class 9 dangerous goods for freight, which is why we confirm delivery details with you before you pay.',
      ],
    },
    {
      h: 'Accessories to budget for with an e scooter',
      p: [
        'A scooter is only part of the cost. Budget for an approved helmet, a lock, lights if you ride after dark and a phone mount if you navigate. Our [scooter helmet guide](/blog/scooter-helmet/) explains how to choose a helmet, and our [Abus Macator Helmet](/shop/helmets-gloves-and-protection/abus-macator-helmet/) is $93.95. For locks, see our [electric scooter lock guide](/blog/electric-scooter-lock/).',
        'For faster scooters on private land, add protective gear such as the [79Bike Protective Armour](/shop/helmets-gloves-and-protection/79bike-protective-armour/) at $189 and gloves. A good accessory kit often costs a fifth of the scooter, and it is the part that protects you.',
      ],
    },
    {
      h: 'What to check before you buy an electric scooter',
      ul: [
        '**Range for your trip.** Choose a scooter whose real range comfortably exceeds your daily distance, with a margin for hills and cold.',
        '**Weight.** If you carry it up stairs or onto trains, check the weight; heavier scooters are harder to lift.',
        '**Tyres.** Self-sealing tubeless tyres reduce puncture hassle; solid tyres need no air but ride harder.',
        '**Brakes and lights.** Check both brakes and the lights are strong; see [lights and horns](/shop/lights-and-horns/) for add-ons.',
        '**Folding and storage.** Check the folded size for your boot, hallway or office.',
        '**Security.** Budget for a lock; our [guide to scooter locks](/blog/electric-scooter-lock/) compares options.',
        '**Helmet.** Budget for an approved helmet; see our [scooter helmet guide](/blog/scooter-helmet/).',
      ],
    },
    {
      h: 'Mistakes to avoid when buying an electric scooter',
      ul: [
        '**Buying on top speed.** The legal limit in public is 25 km/h, so a faster scooter only matters on private land.',
        '**Trusting headline range.** Theoretical range is a best case; plan for less.',
        '**Skipping the helmet.** An approved helmet is required in Queensland and cheap compared with the risk.',
        '**Charging carelessly.** Use the supplied charger and never charge unattended.',
        '**Ignoring after-sales support.** Ask who services the scooter and where parts come from.',
      ],
    },
    {
      h: 'Which electric scooter should you choose?',
      ul: [
        '**Short, light commute:** the Segway Ninebot E2 Pro at $664.',
        '**Everyday commuting:** the Segway Ninebot F3 Pro at $1,259.',
        '**Long commute or heavier rider:** the Segway Ninebot MAX G3 E at $1,557.',
        '**Gravel, parks and rougher paths:** the Segway Ninebot ZT3 Pro D at $1,557.',
        '**Performance riding on private land:** the Dragon GTR V2, Slayer 22Ah, Raptor or Cyclone Pro.',
      ],
    },
  ],
  faq: [
    { q: 'How much does an e scooter for sale cost in your range?', a: 'Our eight adult electric scooters run from $664 for the Segway Ninebot E2 Pro to $1,899 for the Dragon Cyclone Pro. The Segway commuters sit between $664 and $1,557, and the Dragon performance models between $1,614 and $1,899. Prices are in Australian dollars.' },
    { q: 'Do you sell an electric scooter under $500?', a: 'No adult scooter in our range is under $500; the cheapest is the E2 Pro at $664. Our kids scooters start at $265. Very cheap adult scooters often have weak brakes, small batteries and little support, so we recommend saving for a better-built model.' },
    { q: 'What is the fastest legal electric scooter in Queensland?', a: 'Queensland caps motor-propelled speed on personal mobility devices at 25 km/h, with 12 km/h on footpaths and shared paths. A faster scooter, such as the Dragon models we sell for private property use only, cannot be used above the limit on public paths and roads.' },
    { q: 'Do I need a licence to ride an e scooter in Queensland?', a: 'The Queensland Government says that from 31 August 2026 riders of personal mobility devices on public paths and roads must be 16 or older and hold a licence. Check the current rules on the Queensland Government page before you ride.' },
    { q: 'How far will an electric scooter really go?', a: 'Less than the headline. Segway lists theoretical ranges of 70 km for the F3 Pro and 80 km for the MAX G3 family, measured in ideal conditions. Heavier riders, hills, cold weather and high speeds reduce range, so plan for a margin.' },
  ],
  keywords: { primary: 'e scooter for sale', supporting: ['electric scooter adults', 'electric scooter sales', 'electric scooter under $500', 'fast electric scooter', 'e scooter bike'] },
  words: 0,
}
