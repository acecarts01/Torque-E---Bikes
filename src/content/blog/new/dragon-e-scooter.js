// Blog post written to the blog-post rule (see ~/.claude/skills/blog-post/SKILL.md).
// Keywords: volume / KD / intent from Semrush AU Keyword Magic (6 Nov 2026), recorded in docs/used-keywords.csv.
// Sources opened 6 Nov 2026: Queensland Government rules for personal mobility devices (qld.gov.au, updated 26 Aug 2026). Model facts are the supplier listing of 6 Nov 2026 (eMove Bikes feed) and are attributed as such.
export const meta = {
  id: 'dragon-e-scooter',
  slug: 'dragon-e-scooter',
  url: '/blog/dragon-e-scooter/',
  title: 'Dragon E Scooter: GTR V2 vs Raptor vs Cyclone Pro vs Slayer',
  seoTitle: 'Dragon E Scooter: GTR V2 vs Raptor vs Cyclone Pro vs Slayer',
  excerpt: 'Choosing a Dragon e scooter? Compare the GTR V2, Raptor, Cyclone Pro and Slayer on price, motors, battery and brakes, plus the Queensland rules you need to know.',
  category: 'Buying Guides',
  date: '2026-11-06',
  readTime: '10 min',
  focus: 'dragon e scooter',
  secondary: ['dragon electric scooter', 'dragon scooter', 'dragon scooters', 'dragon e scooters', 'dragon escooter'],
  tags: ['cyclone e scooter', 'cyclone electric scooter', 'dragon gtr v2', 'cyclone pro', 'dragon gtr', 'dragon escooters', 'dragon electric scooters', 'dragon gtr v2 electric scooter', 'dragon lightning v2', 'dragon hurricane scooter'],
  image: {
    file: 'blog/dragon-e-scooter.webp',
    alt: 'Dragon e scooter range: GTR V2, Raptor and Cyclone Pro dual-motor scooters on white',
    query: 'dragon e scooter',
    credit: null,
  },
  related: [
    { href: '/shop/electric-scooters/dragon-gtr-v2/', name: 'Dragon GTR V2', price: 1614, note: 'Dual 900 W motors, 21 Ah battery.' },
    { href: '/shop/electric-scooters/dragon-raptor/', name: 'Dragon Raptor', price: 1804, note: 'Dual 1,000 W motors, 20.3 Ah battery.' },
    { href: '/shop/electric-scooters/dragon-cyclone-pro/', name: 'Dragon Cyclone Pro', price: 1899, note: 'Dual 1,000 W motors, hydraulic brakes.' },
    { href: '/shop/electric-scooters/dragon-slayer-22ah/', name: 'Dragon Slayer 22Ah', price: 1709, note: 'Dual 800 W motors, 22 Ah battery.' },
    { href: '/shop/electric-scooters/', name: 'All electric scooters', note: 'Dragon, Segway and more.' },
  ],
  links: {
    to: [
      ['/shop/electric-scooters/', 'electric scooters'],
      ['/blog/scooter-helmet/', 'scooter helmet guide'],
      ['/blog/electric-scooter-adult/', 'electric scooter for adults guide'],
      ['/blog/ninebot-scooter/', 'Ninebot scooter range guide'],
    ],
    from: [
      ['/shop/electric-scooters/', 'dragon e scooter comparison'],
      ['/shop/electric-scooters/dragon-gtr-v2/', 'dragon electric scooter range compared'],
      ['/shop/electric-scooters/dragon-raptor/', 'dragon scooters compared'],
    ],
  },
  kind: 'post',
}

export const body = {
  hook: 'A Dragon e scooter is a dual-motor performance scooter built for power, not for the footpath. The GTR V2, Raptor, Cyclone Pro and Slayer differ mainly in motor power, battery size and brakes, and all four are for private property use only.',
  intro: [
    'If you search for a Dragon e scooter you will find a family of dual-motor scooters that sit well above the commuter models most people picture. They are sold by Australian retailers, they are heavy, they are fast and they are aimed at riders who want performance on private land. That is the first thing to understand before you compare them: the numbers on these scooters are not numbers you will ever use on a public path in Queensland.',
    'This guide compares the four Dragon electric scooter models we list: the GTR V2, the Raptor, the Cyclone Pro and the Slayer. We set out price, motors, battery, brakes and the supplier-listed top speed side by side, explain what peak watts really tell you, cover the rules that decide where you can ride, and finish with the safety gear and shipping details that matter. Every figure is the supplier listing read on 6 November 2026, and every price is in Australian dollars.',
  ],
  sections: [
    {
      h: 'Dragon e scooter quick comparison',
      p: [
        'Here are the four Dragon scooters in our [electric scooters](/shop/electric-scooters/) range side by side. Specifications are the supplier listing read on 6 November 2026; ask us on WhatsApp to confirm anything that matters to your purchase before you pay.',
      ],
      table: {
        head: ['Model', 'Our price', 'Motors', 'Battery', 'Listed top speed', 'Brakes'],
        rows: [
          ['[Dragon GTR V2](/shop/electric-scooters/dragon-gtr-v2/)', '$1,614', '2 x 900 W, peak 2,400 W', '21 Ah lithium', '50 km/h', 'Disc brakes'],
          ['[Dragon Slayer 22Ah](/shop/electric-scooters/dragon-slayer-22ah/)', '$1,709', '2 x 800 W, peak 2,400 W', '22 Ah (26 Ah also exists)', '60 km/h', 'Dual hydraulic'],
          ['[Dragon Raptor](/shop/electric-scooters/dragon-raptor/)', '$1,804', '2 x 1,000 W, peak 3,600 W', '20.3 Ah', '62 km/h', 'Dual disc'],
          ['[Dragon Cyclone Pro](/shop/electric-scooters/dragon-cyclone-pro/)', '$1,899', '2 x 1,000 W, peak 3,200 W', '21 Ah lithium', '60 km/h', 'Fully hydraulic'],
        ],
      },
      img: { file: 'blog/dragon-e-scooter-gtr-v2.webp', alt: 'Dragon GTR V2 electric scooter, front three-quarter view on a white background', w: 720, h: 540 },
    },
    {
      h: 'What dual motor and peak watts really mean',
      p: [
        'Every Dragon scooter in this guide has two motors, one in each wheel. Two motors give more traction and acceleration than one, and they are the reason these scooters feel so different from a single-motor commuter. The listings quote two numbers: the rating of each motor and a combined peak figure. For the GTR V2 that is two 900 W motors with a peak of 2,400 W, which means the motors can briefly draw far more than their everyday rating when you open the throttle hard.',
        'Peak watts are a ceiling, not a promise. They tell you how hard the scooter can pull for a short burst, which matters on a steep or loose surface, but they do not tell you range, top speed in the real world or how it will feel with a heavy rider. When you compare models, look at the motor rating and the battery together. A big motor on a small battery drains quickly; a modest motor on a larger battery goes further.',
        'Battery capacity is quoted in amp hours. A 21 Ah pack and a 20.3 Ah pack are close, while the Slayer comes in a 22 Ah version with a 26 Ah option listed by the supplier. A larger pack costs more and weighs more, so choose it only if you will actually ride long sessions.',
      ],
    },
    {
      h: 'Dragon GTR V2: the entry point to the range',
      p: [
        'The [Dragon GTR V2](/shop/electric-scooters/dragon-gtr-v2/) is the lowest-priced model here at $1,614. The supplier lists two 900 W motors peaking at 2,400 W, a 21 Ah lithium battery, disc brakes and 10-inch tubeless all-terrain tyres, with a listed top speed of 50 km/h. It is the model most people start with because it delivers the dual-motor experience for the lowest outlay.',
        'Choose the GTR V2 if you want a capable all-terrain scooter without paying for the top motor ratings. It suits cruising around a large property, farm tracks and firm trails. Be realistic about the brakes: disc brakes work well, but at the speeds this scooter can reach you should fit proper protective gear and respect the stopping distance.',
      ],
    },
    {
      h: 'Dragon Slayer: bigger battery, hydraulic brakes',
      p: [
        'The [Dragon Slayer 22Ah](/shop/electric-scooters/dragon-slayer-22ah/) is $1,709. Its listing gives two 800 W motors peaking at 2,400 W, a 22 Ah battery, dual hydraulic brakes and a listed top speed of 60 km/h. The supplier also lists a 26 Ah version, which is a bigger and more expensive pack; this page covers the 22 Ah model, and you can ask us about the larger one.',
        'Compared with the GTR V2, the Slayer trades a little motor rating for a larger battery and hydraulic brakes. If you value braking feel and longer sessions over outright power, it is the sensible middle choice. Hydraulic brakes need occasional servicing, so factor that into ownership.',
      ],
    },
    {
      h: 'Dragon Raptor: the power pick',
      p: [
        'The [Dragon Raptor](/shop/electric-scooters/dragon-raptor/) costs $1,804. The supplier lists two 1,000 W motors peaking at 3,600 W, a 20.3 Ah battery, dual disc brakes and a listed top speed of 62 km/h. It also carries a two-year structure and frame warranty, according to the listing, which is unusual enough to ask about when you order.',
        'This is the scooter for riders who want the strongest acceleration in the range and are comfortable managing it. It is not the one to pick as a first performance scooter unless you have riding experience, because the peak power is the highest of the four.',
      ],
    },
    {
      h: 'Dragon Cyclone Pro: all-terrain with hydraulic brakes',
      p: [
        'The [Dragon Cyclone Pro](/shop/electric-scooters/dragon-cyclone-pro/) is the most expensive here at $1,899. The listing gives two 1,000 W motors peaking at 3,200 W, a 21 Ah lithium battery, fully hydraulic brakes and a listed top speed of 60 km/h. It is built as an all-terrain scooter and the listing describes puncture-resistant tubeless tyres.',
        'Pick the Cyclone Pro if you ride rougher ground and want hydraulic braking with strong motors. If you compare it with the Raptor, the difference is mostly braking and the peak power figure rather than a large jump in capability.',
      ],
    },
    {
      h: 'Which Dragon scooter should you choose?',
      ul: [
        '**Lowest price into dual motors:** the GTR V2 at $1,614.',
        '**Longer sessions and hydraulic brakes:** the Slayer 22Ah at $1,709.',
        '**Strongest acceleration:** the Raptor at $1,804.',
        '**Rough ground and hydraulic brakes:** the Cyclone Pro at $1,899.',
        '**Heavier riders or hillier property:** favour the larger battery and the higher motor rating, and ask us about weight limits for your model before you order.',
        '**First performance scooter:** start with the GTR V2 or Slayer and learn the throttle before moving up.',
      ],
    },
    {
      h: 'Where can you ride a Dragon scooter? The Queensland rules',
      p: [
        'The Queensland Government\'s [rules for personal mobility devices](https://www.qld.gov.au/transport/safety/rules/wheeled-devices/personal-mobility-devices) (page updated 26 August 2026, read 6 November 2026) say a personal mobility device cannot exceed a motor-propelled speed of 25 km/h, with 12 km/h as the limit on footpaths and shared paths. The page also says riders must wear an approved bicycle or motorbike helmet, and that from 31 August 2026 riders on public paths and roads must be 16 and hold a valid driver licence.',
        'The Dragon scooters in this guide carry supplier-listed top speeds of 50 to 62 km/h, far above that 25 km/h limit. That is why we list them for private property use only: they are not road legal and are not registrable in Australia. Other states and territories set their own rules, so check your own road authority before you buy if you live outside Queensland, and never assume a performance scooter can be used on public paths.',
        'If you want an e-scooter you can legally use on public paths, our [electric scooters for adults guide](/blog/electric-scooter-adult/) and [Ninebot scooter range guide](/blog/ninebot-scooter/) cover the commuter-class models.',
      ],
    },
    {
      h: 'Batteries, charging and shipping',
      p: [
        'These scooters use lithium batteries, which ship as Class 9 dangerous goods freight. We arrange that with the carrier and confirm freight and timing with you before payment. Shipping is 10% of the order total, free for orders from $9,900, and orders ship Australia-wide from Brisbane. The minimum order is $499.99, which a single scooter easily clears.',
        'Charge on a hard, non-flammable surface, use the supplied charger, and do not leave a battery charging unattended or overnight in a bedroom. Fire and Rescue NSW\'s [e-bike and e-scooter battery safety advice](https://www.fire.nsw.gov.au/fire-safety/home-fire-safety/topics/ebikes-escooters-battery-safety) (read 6 November 2026) covers the same ground: use the charger that came with the scooter, do not charge it in a bedroom or on your bed, and stop using a battery that is damaged. Our [lithium battery safety guide](/blog/electric-moto-maintenance-lithium-safety/) adds storage and charging habits that reduce risk.',
      ],
    },
    {
      h: 'Safety gear for a performance scooter',
      p: [
        'At 50 km/h or more, a fall is serious. Wear a certified helmet every ride, plus gloves and, ideally, knee and elbow protection and sturdy shoes. Our [scooter helmet guide](/blog/scooter-helmet/) explains which helmet types suit these speeds, and our [helmets, gloves and protection](/shop/helmets-gloves-and-protection/) range covers the basics.',
        'A scooter this valuable also needs a proper lock when you are not on it. See our [bike lock guide](/blog/how-to-lock-an-e-bike/) for locking principles that apply equally to scooters.',
      ],
    },
    {
      h: 'Common mistakes when buying a Dragon e scooter',
      ul: [
        '**Treating peak watts as top speed.** They are different things; read the motor rating, battery and brakes together.',
        '**Buying for public paths.** These scooters are for private property; the Queensland limit is 25 km/h for personal mobility devices.',
        '**Ignoring weight.** Performance scooters are heavy to lift and load, so plan how you will transport yours.',
        '**Skipping protective gear.** Budget for a helmet and gloves at the same time as the scooter.',
        '**Forgetting servicing.** Hydraulic and disc brakes, tyres and bearings all wear with hard use.',
        '**Not asking about the battery option.** The Slayer has a larger 26 Ah version; decide before you order.',
      ],
    },
  ],
  faq: [
    { q: 'Is a Dragon e scooter legal to ride on the road in Australia?', a: 'No. The Dragon scooters in this guide are listed with top speeds of 50 to 62 km/h, far above the 25 km/h limit Queensland sets for personal mobility devices, so we sell them for private property use only. They are not road legal or registrable. Check your own state or territory rules.' },
    { q: 'Which Dragon scooter is best for a beginner?', a: 'The GTR V2 at $1,614 or the Slayer 22Ah at $1,709 are the sensible starting points. They have lower peak power than the Raptor and Cyclone Pro. Learn the throttle on soft, open ground and wear a certified helmet and gloves before you ride faster.' },
    { q: 'What is the difference between motor rating and peak watts?', a: 'The motor rating is what each motor can sustain; peak watts are the short-burst maximum the system can draw. Peak figures show how hard the scooter can accelerate but do not predict range or real top speed. Compare motor rating with battery size and brakes.' },
    { q: 'How are Dragon scooters shipped?', a: 'Lithium batteries ship as Class 9 dangerous goods freight, which we arrange. Shipping is 10% of the order total, free from $9,900, and we confirm freight and timing before you pay. Orders ship Australia-wide from Brisbane, with a $499.99 minimum order.' },
    { q: 'Can I pay by crypto or bank transfer?', a: 'Yes. You can pay by bank transfer, PayID or crypto, and crypto payments take 10% off the order total. Message the team on WhatsApp on 0480 804 189 for a firm quote including freight to your postcode.' },
  ],
  keywords: { primary: 'dragon e scooter', supporting: ['dragon electric scooter', 'dragon scooter', 'dragon scooters', 'dragon e scooters', 'dragon escooter'] },
  words: 0,
}
