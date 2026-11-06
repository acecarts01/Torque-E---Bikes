// Blog post written to the blog-post rule (see ~/.claude/skills/blog-post/SKILL.md).
// Keywords: volume / KD / intent from Semrush AU Keyword Magic (6 Nov 2026), recorded in docs/used-keywords.csv.
// Sources opened 6 Nov 2026: Segway Australia product pages for the MAX G3, ZT3 Pro and F3 Pro (segway.com.au) and the Queensland Government rules for personal mobility devices (qld.gov.au, updated 26 Aug 2026).
export const meta = {
  id: 'ninebot-scooter',
  slug: 'ninebot-scooter',
  url: '/blog/ninebot-scooter/',
  title: 'Ninebot Scooter: MAX G3, ZT3 Pro, F3 Pro, E2 and C2 Compared',
  seoTitle: 'Ninebot Scooter: MAX G3, ZT3 Pro, F3 Pro, E2 and C2 Compared',
  excerpt: 'Choosing a Ninebot scooter? Compare the Segway Ninebot MAX G3 E, ZT3 Pro D, F3 Pro, E2 Pro and C2 Pro on price and official specs, plus the Queensland rules.',
  category: 'Buying Guides',
  date: '2026-11-06',
  readTime: '10 min',
  focus: 'ninebot scooter',
  secondary: ['ninebot e scooter', 'e scooter ninebot', 'electric scooter ninebot', 'ninebot escooter', 'ninebot scooters'],
  tags: ['segway ninebot', 'segway max g3', 'ninebot electric scooter', 'segway ninebot e2 pro', 'segway ninebot max g2 electric scooter', 'segway max g2', 'ninebot scooter charger', 'segway e3 pro', 'segway ninebot zt3 pro electric scooter', 'segway f3'],
  image: {
    file: 'blog/ninebot-scooter.webp',
    alt: 'Ninebot scooter range: Segway Ninebot MAX G3 E, ZT3 Pro D and F3 Pro on a white background',
    query: 'ninebot scooter',
    credit: null,
  },
  related: [
    { href: '/shop/electric-scooters/segway-ninebot-max-g3-e/', name: 'Segway Ninebot MAX G3 E', price: 1557, note: 'The long-range commuter.' },
    { href: '/shop/electric-scooters/segway-ninebot-zt3-pro-d/', name: 'Segway Ninebot ZT3 Pro D', price: 1557, note: 'Dual suspension, off-road tyres.' },
    { href: '/shop/electric-scooters/segway-ninebot-f3-pro/', name: 'Segway Ninebot F3 Pro', price: 1259, note: 'Suspension and self-sealing tyres.' },
    { href: '/shop/electric-scooters/segway-ninebot-e2-pro/', name: 'Segway Ninebot E2 Pro', price: 664, note: 'The lower-priced commuter.' },
    { href: '/shop/electric-scooters/', name: 'All electric scooters', note: 'Segway and Dragon scooters.' },
  ],
  links: {
    to: [
      ['/shop/electric-scooters/', 'electric scooters'],
      ['/shop/kids-electric-scooters/', 'kids electric scooters'],
      ['/blog/scooter-helmet/', 'scooter helmet guide'],
      ['/blog/electric-scooter-adult/', 'electric scooter for adults guide'],
      ['/blog/dragon-e-scooter/', 'Dragon e scooter guide'],
    ],
    from: [
      ['/shop/electric-scooters/', 'ninebot scooter range guide'],
      ['/brands/segway/', 'ninebot scooters explained'],
      ['/shop/electric-scooters/segway-ninebot-max-g3-e/', 'electric scooter ninebot comparison'],
    ],
  },
  kind: 'post',
}

export const body = {
  hook: 'A Ninebot scooter from Segway ranges from a kids model at $455 to long-range and off-road commuters at $1,557. Match the model to your trip, your terrain and the rules where you ride, and compare our price with Segway Australia\'s own.',
  intro: [
    'Ninebot is the scooter line sold under the Segway name, and it covers everything from a kids scooter to a dual-suspension all-terrain commuter. That breadth makes a Ninebot scooter easy to recommend and surprisingly easy to buy wrong, because the names look alike and the differences sit in suspension, tyres, range and weight rather than in the badge.',
    'This guide compares the five Segway Ninebot models we list: the MAX G3 E, the ZT3 Pro D, the F3 Pro, the E2 Pro and the C2 Pro. We use Segway Australia\'s own product pages for the headline specifications, add the supplier listing where Segway\'s pages are silent, show how our prices compare with Segway\'s and explain the Queensland rules that decide where you can ride. All prices are in Australian dollars and all specifications were read on 6 November 2026.',
  ],
  sections: [
    {
      h: 'Ninebot scooter models compared',
      p: [
        'Here are the five models in our [electric scooters](/shop/electric-scooters/) and [kids electric scooters](/shop/kids-electric-scooters/) ranges. Where Segway Australia publishes a figure we use it; where it does not, the supplier listing is named.',
      ],
      table: {
        head: ['Model', 'Our price', 'Headline spec', 'Best for'],
        rows: [
          ['[Segway Ninebot MAX G3 E](/shop/electric-scooters/segway-ninebot-max-g3-e/)', '$1,557', 'MAX G3 family: 2000 W max power, 80 km theoretical range (Segway Australia)', 'Long commutes'],
          ['[Segway Ninebot ZT3 Pro D](/shop/electric-scooters/segway-ninebot-zt3-pro-d/)', '$1,557', 'ZT3 Pro family: 1600 W max power, 70 km, 11-inch off-road tubeless tyres (Segway Australia)', 'Rough surfaces'],
          ['[Segway Ninebot F3 Pro](/shop/electric-scooters/segway-ninebot-f3-pro/)', '$1,259', '1200 W max power, 70 km theoretical range (Segway Australia)', 'City commuting'],
          ['[Segway Ninebot E2 Pro](/shop/electric-scooters/segway-ninebot-e2-pro/)', '$664', '275 Wh battery, 40 km in E mode at 15 km/h (supplier listing)', 'Short, light commutes'],
          ['[Segway Ninebot C2 Pro](/shop/kids-electric-scooters/segway-ninebot-c2-pro/)', '$455', 'Ages 6 to 14, 115 to 170 cm, 150 W (supplier listing)', 'Kids and teens'],
        ],
      },
      img: { file: 'blog/ninebot-scooter-max-g3-e.webp', alt: 'Segway Ninebot MAX G3 E electric scooter, side view on a white background', w: 720, h: 540 },
    },
    {
      h: 'Segway and Ninebot: how the names fit together',
      p: [
        'You will see "Segway", "Ninebot" and "Segway-Ninebot" used almost interchangeably. In practice the scooters are sold as Segway Ninebot, and the model names that follow (MAX, ZT, F, E, C) tell you the family. The MAX models are the long-range commuters, the ZT models are the rugged all-terrain scooters, the F models sit in the middle with suspension, the E models are lighter commuters and the C models are for children.',
        'Segway Australia\'s collection page lists the MAX G3, the ZT3 Pro and the F3 Pro in its third-generation range, and we link to those pages in the sections below. We list a few suffixes, such as the "E" in MAX G3 E and the "D" in ZT3 Pro D, exactly as the supplier names them, so Segway\'s pages describe the family rather than guaranteeing every detail of that exact variant. Ask us on WhatsApp if a specific figure matters before you order.',
      ],
    },
    {
      h: 'Segway Ninebot MAX G3 E: the long-range commuter',
      p: [
        'The [Segway Ninebot MAX G3 E](/shop/electric-scooters/segway-ninebot-max-g3-e/) is $1,557. [Segway Australia\'s MAX G3 page](https://segway.com.au/products/segway-max-g3-electric-kickscooter) lists a maximum power of 2000 W and a theoretical range of 80 km, and its collection page prices the MAX G3 at $1,699. That makes our price $142 below Segway Australia\'s listed price on the day we read it.',
        'Choose the MAX G3 E when distance is the priority: a long commute, a large campus or a ride where you do not want to think about charging. Theoretical range is measured in ideal conditions, so plan for less in real riding with a heavier rider, hills or a headwind.',
      ],
    },
    {
      h: 'Segway Ninebot ZT3 Pro D: suspension and off-road tyres',
      p: [
        'The [Segway Ninebot ZT3 Pro D](/shop/electric-scooters/segway-ninebot-zt3-pro-d/) is also $1,557. [Segway Australia\'s ZT3 Pro page](https://segway.com.au/products/segway-ninebot-zt3-pro-electric-kickscooter-1) lists a maximum power of 1600 W, a theoretical range of 70 km and 11-inch off-road tubeless tyres, with the ZT3 Pro priced at $1,699 on Segway\'s collection page. The supplier listing adds front dual telescopic suspension, rear spring suspension and 152 mm of ground clearance.',
        'This is the model for cracked paths, gravel and rough bitumen, where suspension and wide tyres matter more than the last few kilometres of range. It is also heavier than the commuters, so think about stairs and car boots.',
      ],
    },
    {
      h: 'Segway Ninebot F3 Pro: the balanced middle',
      p: [
        'The [Segway Ninebot F3 Pro](/shop/electric-scooters/segway-ninebot-f3-pro/) is $1,259. [Segway Australia\'s F3 Pro page](https://segway.com.au/products/segway-f3-pro-electric-scooter) lists a maximum power of 1200 W and a theoretical range of 70 km, and prices it at $1,399, so our price is $140 lower. The supplier listing adds front hydraulic and rear elastomer suspension and 10-inch tubeless self-sealing tyres.',
        'Self-sealing tubeless tyres are a genuine convenience on a daily commuter because small punctures seal themselves. For most city riders the F3 Pro is the sweet spot between the E2 Pro and the MAX G3 E.',
      ],
    },
    {
      h: 'Segway Ninebot E2 Pro: the lower-priced commuter',
      p: [
        'At $664 the [Segway Ninebot E2 Pro](/shop/electric-scooters/segway-ninebot-e2-pro/) is the entry point for adults. The supplier lists a 275 Wh battery and up to 40 km of range in E mode at 15 km/h. That is plenty for a short commute, a trip to the station or around a university campus, and the lower price and lighter build make it easier to carry.',
        'Be honest about your trip. If your return journey is longer than the listed range at an easy pace, step up to the F3 Pro or MAX G3 E so you are not riding on a nearly flat battery.',
      ],
    },
    {
      h: 'Segway Ninebot C2 Pro: a Ninebot scooter for kids',
      p: [
        'The [Segway Ninebot C2 Pro](/shop/kids-electric-scooters/segway-ninebot-c2-pro/) is $455 and is listed by the supplier for riders from 6 to 14 years old and 115 to 170 cm tall, with a 150 W motor and a 50 kg maximum rider weight. The handlebar adjusts so one scooter can be shared among siblings.',
        'Queensland\'s personal mobility device rules affect children directly, as the rules section below explains, so we describe kids scooters as being for private property unless your state says otherwise. See our full [kids electric scooters](/shop/kids-electric-scooters/) range for the alternatives.',
      ],
    },
    {
      h: 'Where you can ride a Ninebot scooter in Queensland',
      p: [
        'The Queensland Government\'s [rules for personal mobility devices](https://www.qld.gov.au/transport/safety/rules/wheeled-devices/personal-mobility-devices) (updated 26 August 2026, read 6 November 2026) set a maximum motor-propelled speed of 25 km/h, with 12 km/h on footpaths and shared paths. Riders must wear an approved bicycle or motorbike helmet, and from 31 August 2026 riders on public paths and roads must be 16 and hold a valid driver licence.',
        'Those rules apply to the scooter and the rider, not to the brand. Check the speed the scooter is actually set to and the rules where you ride, and remember that other states and territories write their own rules. Our [scooter helmet guide](/blog/scooter-helmet/) explains which helmets are accepted, and our [electric scooters for adults guide](/blog/electric-scooter-adult/) covers choosing between commuter models.',
      ],
    },
    {
      h: 'How to choose between the five Ninebot scooters',
      p: [
        'Work through the choice in three steps. First, decide who is riding: a child points you to the C2 Pro, an adult on a short, smooth commute points you to the E2 Pro, and everyone else is choosing between the F3 Pro, MAX G3 E and ZT3 Pro D. Second, decide the surface. If your route is mostly smooth paths, the F3 Pro or MAX G3 E will feel better and weigh less than the ZT3 Pro D; if it includes gravel, cracked bitumen or rough ground, the ZT3 Pro D\'s suspension and off-road tyres earn their price.',
        'Third, decide the distance. Segway lists theoretical ranges of 70 km for the F3 Pro and ZT3 Pro and 80 km for the MAX G3 family, and the supplier lists up to 40 km for the E2 Pro at an easy pace. Add a margin of at least 30 per cent for hills, wind and rider weight, and choose the scooter that still clears your daily distance after that margin. If two models both fit, take the lighter one: you will carry it more often than you expect.',
      ],
    },
    {
      h: 'Range, weight and charging: what to expect',
      ul: [
        '**Theoretical range is a best case.** It is measured under ideal conditions; real range drops with rider weight, hills, wind, cold and fast riding.',
        '**Weight matters for carrying.** The larger scooters are heavy. If you climb stairs or lift the scooter into a car, check the weight before you buy.',
        '**Charge sensibly.** Use the supplied charger, charge on a hard surface and avoid leaving a battery charging unattended. Our [lithium battery safety guide](/blog/electric-moto-maintenance-lithium-safety/) has storage and charging advice.',
        '**Replacement chargers exist.** If you lose a charger, ask us for the correct one rather than guessing from a listing.',
        '**Tyres decide comfort.** Self-sealing tubeless tyres reduce flat-tyre hassle; solid tyres need no air but ride harder.',
      ],
    },
    {
      h: 'Buying from us: price, shipping and payment',
      p: [
        'We price each Ninebot scooter below the price at the Australian retailer we compared it with, and the product page shows that supplier price as "compare at". Shipping is 10% of the order total (free from $9,900), lithium batteries ship as Class 9 dangerous goods freight which we arrange, and orders ship Australia-wide from Brisbane. The minimum order is $499.99, so a lower-priced scooter such as the C2 Pro pairs well with a helmet from our [helmets, gloves and protection](/shop/helmets-gloves-and-protection/) range.',
        'You can pay by bank transfer, PayID or crypto, with 10% off crypto payments. Message the team on WhatsApp on 0480 804 189 for a firm quote including freight to your postcode.',
      ],
    },
    {
      h: 'Ninebot scooter mistakes to avoid',
      ul: [
        '**Choosing on power alone.** Suspension, tyres, range and weight decide daily comfort.',
        '**Trusting theoretical range.** Plan your trip with a margin.',
        '**Ignoring the rules.** Speed limits and rider age requirements apply in Queensland, and other states differ.',
        '**Skipping a helmet.** An approved helmet is required in Queensland and sensible everywhere.',
        '**Forgetting a lock.** Scooters are targets; see our [bike lock guide](/blog/how-to-lock-an-e-bike/) for locking principles.',
        '**Buying the wrong size for a child.** Check the age, height and weight limits on the C2 Pro listing.',
      ],
    },
  ],
  faq: [
    { q: 'Is a Ninebot scooter the same as a Segway scooter?', a: 'Yes. Ninebot is the scooter line sold under the Segway name, usually written Segway Ninebot. The model letters tell you the family: MAX for long range, ZT for all-terrain, F for suspension commuters, E for lighter commuters and C for children.' },
    { q: 'Which Ninebot scooter has the longest range?', a: 'Segway Australia lists a theoretical range of 80 km for the MAX G3 family, against 70 km for the ZT3 Pro and F3 Pro. Theoretical range is measured in ideal conditions, so expect less in real riding. Our MAX G3 E is $1,557.' },
    { q: 'How fast can a Ninebot scooter go on public paths in Queensland?', a: 'Queensland caps personal mobility devices at 25 km/h, with 12 km/h on footpaths and shared paths, and requires an approved helmet. From 31 August 2026 riders on public paths and roads must be 16 and hold a licence. Check the rules for your state.' },
    { q: 'Is the C2 Pro suitable for a child?', a: 'The supplier lists it for riders aged 6 to 14, 115 to 170 cm tall, with a 50 kg maximum rider weight. Queensland\'s rules limit where children can ride personal mobility devices, so treat it as a private property scooter unless your state says otherwise.' },
    { q: 'How do your prices compare with Segway Australia?', a: 'On 6 November 2026 Segway Australia listed the MAX G3 at $1,699, the ZT3 Pro at $1,699 and the F3 Pro at $1,399. Our prices are $1,557, $1,557 and $1,259. Variants differ by suffix, so confirm the exact model with us.' },
  ],
  keywords: { primary: 'ninebot scooter', supporting: ['ninebot e scooter', 'e scooter ninebot', 'electric scooter ninebot', 'ninebot escooter', 'ninebot scooters'] },
  words: 0,
}
