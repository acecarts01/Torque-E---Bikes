// Blog post written to the blog-post rule (see ~/.claude/skills/blog-post/SKILL.md).
// Keywords: volume / KD / intent from Semrush AU Keyword Magic (host 5, 7 Nov 2026), recorded in docs/used-keywords.csv and docs/semrush-raw/blog-topics-2026-11-06g.txt.
// Sources opened 7 Nov 2026: Park Tool "Tire, Wheel and Inner Tube Fit Standards" (ISO two-number system, larger number is the bead seat diameter, same numbers fit, do not mix different bead seat diameters, tyre width 1.5 to 2 times rim width, 26 inch 1.0 to 4.8 = 559, 27.5 = 584, 700c = 622); Queensland Government electric bicycle rules page (250 W, EN 15194, after-market conversion kits not compliant).
// Product pages publish names and prices only, so no rim width, hub spacing or fitment is claimed beyond the names (20x4, thru axle, V1/V2/V3). We stock no gravel or road rims, so the post says so.
export const meta = {
  id: 'bike-wheels',
  slug: 'bike-wheels',
  url: '/blog/bike-wheels/',
  title: 'Bike Wheel Guide: Fat Bike Wheels and Rims From $139',
  seoTitle: 'Bike Wheel Guide: Fat Bike Wheels and Rims From $139',
  excerpt: 'Choosing a bike wheel? See our fat bike wheels and rims from $139, how tyre and rim sizes match, what to check for e-bikes and what we do not stock.',
  category: 'Buying Guides',
  date: '2026-11-07',
  readTime: '9 min',
  focus: 'bike wheel',
  secondary: ['bicycle wheel', 'electric bike wheel', 'gravel bike rims', 'wheels bike', 'bike wheel rim'],
  tags: ['wheel in bike', 'bikes and wheels', 'bicycle wheels', 'electric bicycle wheel', 'bike cycle wheels', 'wheels of bike', 'bike wheel cycle', 'rear bike wheel', 'cycle wheel rim', 'bicycle wheel rim'],
  image: {
    file: 'blog/bike-wheels.webp',
    alt: 'Bike wheel options: Fat Bike Wheel, Fatboy front wheel assembly and Fatboy rear wheel assembly 20x4',
    query: 'bike wheel',
    credit: null,
  },
  related: [
    { href: '/shop/wheels-tyres-and-tubes/fatboy-front-wheel-assembly-20x4-thru-axle-v2-bagus-all-v3-models/', name: 'Fatboy Front Wheel Assembly 20x4 (Thru Axle)', price: 139, note: 'The lowest-priced wheel we list.' },
    { href: '/shop/wheels-tyres-and-tubes/fat-bike-wheel/', name: 'Fat Bike Wheel', price: 149, note: 'A fat bike wheel.' },
    { href: '/shop/wheels-tyres-and-tubes/fatboy-rear-wheel-assembly-20x4-with-rim-holes-for-v1-v2-and-v3/', name: 'Fatboy Rear Wheel Assembly 20x4', price: 179, note: 'A rear wheel for Fatboy V1, V2 and V3.' },
    { href: '/shop/wheels-tyres-and-tubes/79bike-bare-wheel-rim/', name: '79Bike Bare Wheel Rim', price: 299, note: 'A bare rim for off-road 79Bike models.' },
    { href: '/shop/wheels-tyres-and-tubes/', name: 'All wheels, tyres and tubes', note: 'Wheels, tyres, tubes and rim bands.' },
  ],
  links: {
    to: [
      ['/shop/wheels-tyres-and-tubes/', 'wheels, tyres and tubes'],
      ['/blog/e-bike-tyres-and-tubes/', 'e-bike tyres and tubes guide'],
      ['/blog/fatboy-electric-bike/', 'Fatboy electric bike guide'],
      ['/blog/bike-puncture-repair-kit/', 'bike puncture repair kit guide'],
      ['/blog/gravel-bikes-for-sale/', 'gravel bikes for sale guide'],
    ],
    from: [
      ['/shop/wheels-tyres-and-tubes/', 'bike wheel guide'],
      ['/shop/wheels-tyres-and-tubes/fat-bike-wheel/', 'bike wheel rim: what to check'],
      ['/blog/fatboy-electric-bike/', 'bicycle wheel: how to choose'],
    ],
  },
  kind: 'post',
}

export const body = {
  hook: 'We list fat bike wheels and rims from $139, plus Fatboy front and rear wheel assemblies. Here is how tyre and rim sizes match, what to check on an e-bike and what we do not stock.',
  intro: [
    'A bike wheel looks simple, but it has to carry your weight, take the motor\'s torque and brake force on an e-bike and survive potholes and trails. Choosing a replacement means matching a handful of measurements, from the rim size to the axle type, and getting one wrong means the wheel will not fit or is not safe to ride.',
    'This guide explains how wheel and tyre sizes work, what we list with prices, how to check a wheel fits your bike, what changes on an electric bike, what we do not stock such as gravel and road rims, and what the Queensland rules say about modifying an e-bike. Our product pages publish names and prices only, so we do not quote rim widths or hub spacing, and we ask you to confirm fit before you order. Prices are in Australian dollars as listed on 7 November 2026.',
  ],
  sections: [
    {
      h: 'Bike wheel basics: rim, spokes, hub and tyre',
      p: [
        'A bicycle wheel has four parts that must agree: the rim, which holds the tyre; the spokes, which connect the rim to the hub; the hub, which spins on the axle; and the tyre and tube, or tubeless setup, that meets the ground. On an e-bike, a hub motor can replace the normal hub, which adds weight and a cable.',
        'When people ask for wheels bike parts, they usually mean the whole wheel or a bare rim to rebuild. A complete wheel is quicker to fit, while a bare rim needs spokes and a hub and is a job for a wheel builder. Check which one you need before you order, because the two are not interchangeable.',
      ],
    },
    {
      h: 'How bicycle wheel and tyre sizes match',
      p: [
        'Park Tool\'s [tire, wheel and inner tube fit standards](https://www.parktool.com/en-us/blog/repair-help/tire-wheel-and-inner-tube-fit-standards) page explains that the ISO system uses two numbers for both tyre and rim sizing, and that the larger number is always the bead seat diameter. It says rims and tyres with the same number are made to fit one another, and warns not to mix tyres and wheels with different bead seat diameters. Its example is that tyres marked 622 fit rims marked 622, because the bead seat diameter is 622 millimetres for both.',
        'The same page maps common inch sizes to the ISO number: 26 inch by 1.0 to 4.8 inch, listed for mountain bikes and fat tyre bikes, is 559, a 27.5 inch or 650B wheel is 584 and 700c is 622. As a loose rule, it says the ISO tyre width should be between one and a half and two times the ISO rim width, so a 25 mm rim suits a tyre of about 37 to 50 mm. Check the numbers on your tyre sidewall and rim before you buy.',
      ],
      table: {
        head: ['Wheel label', 'ISO bead seat diameter', 'Typical use (per Park Tool)'],
        rows: [
          ['26 inch, 1.0 to 4.8 inch', '559', 'Mountain and fat tyre bikes'],
          ['27.5 inch or 650B', '584', 'Mountain bikes'],
          ['700c', '622', 'Road bikes, hybrids and other uses'],
        ],
      },
    },
    {
      h: 'Bike wheel options in our range',
      img: { file: 'blog/bike-wheels-79bike-bare-wheel-rim.webp', alt: '79Bike bare wheel rim, a bike wheel rim for off-road 79Bike models', w: 720, h: 540 },
      p: [
        'We list four wheel products. The [Fatboy Front Wheel Assembly 20x4 (Thru Axle)](/shop/wheels-tyres-and-tubes/fatboy-front-wheel-assembly-20x4-thru-axle-v2-bagus-all-v3-models/) is $139, the [Fat Bike Wheel](/shop/wheels-tyres-and-tubes/fat-bike-wheel/) is $149 and the [Fatboy Rear Wheel Assembly 20x4](/shop/wheels-tyres-and-tubes/fatboy-rear-wheel-assembly-20x4-with-rim-holes-for-v1-v2-and-v3/) is $179. The [79Bike Bare Wheel Rim](/shop/wheels-tyres-and-tubes/79bike-bare-wheel-rim/) is $299 and is listed as an off-road item.',
        'The product names carry the useful fit clues. The "20x4" in the Fatboy names refers to a 20 inch wheel with a 4 inch tyre by the usual convention, the front wheel is named for a thru axle and for V2 Bagus and all V3 models, and the rear wheel is named for V1, V2 and V3. Our product pages do not publish rim width or hub spacing, so message the team on WhatsApp with your bike model before you order, and we will confirm fit.',
      ],
      table: {
        head: ['Product', 'Price (AUD)', 'What the name tells you'],
        rows: [
          ['Fatboy Front Wheel Assembly 20x4 (Thru Axle)', '$139', 'Front, thru axle, V2 Bagus and all V3'],
          ['Fat Bike Wheel', '$149', 'A fat bike wheel'],
          ['Fatboy Rear Wheel Assembly 20x4', '$179', 'Rear, V1, V2 and V3, rim holes'],
          ['79Bike Bare Wheel Rim', '$299', 'A bare rim, off-road 79Bike models'],
        ],
      },
    },
    {
      h: 'How to check a rear bike wheel or front wheel fits: a checklist',
      ul: [
        '**Wheel and tyre size.** Match the diameter and the ISO bead seat number printed on your current tyre.',
        '**Axle type.** A thru axle and a quick release are not interchangeable, so check your fork and frame.',
        '**Hub spacing.** The width between the dropouts must match the hub.',
        '**Brake type.** Disc rotor mounts and rim brakes need different wheels.',
        '**Drivetrain.** A rear wheel must carry the right cassette or sprocket and chain line.',
        '**Motor.** If the rear wheel has a motor, the cable, controller and torque arm must match.',
        '**Tyre width.** The tyre must suit the rim width, so check the rule of thumb above.',
        '**Model family.** Check the bike model and version, such as V1, V2 or V3, before you order.',
      ],
    },
    {
      h: 'Electric bike wheel: what changes with a motor and brakes',
      p: [
        'An electric bike wheel faces more load than an ordinary one: the rider\'s weight plus the battery and motor, hard acceleration and heavier braking. A hub motor wheel also carries the motor\'s torque through the axle, which is why powerful motors use torque arms and strong dropouts. If your bike has a rear hub motor, you cannot swap in an ordinary wheel without losing the drive.',
        'Disc brakes put the braking force through the hub and spokes, so a wheel for an e-bike should have a rotor mount that matches your brake. Check that the rotor, caliper and hub line up and that spoke tension is even. If a wheel has a wobble, a cracked rim or loose spokes, do not ride it, and have a bike mechanic true or replace it.',
      ],
    },
    {
      h: 'Gravel bike rims, road wheels and what we do not stock',
      p: [
        'Many riders search for gravel bike rims when they upgrade an electric gravel bike. We do not stock gravel or road rims, so we cannot offer them or confirm fit, and for those bikes we suggest a specialist wheel builder. We do list electric gravel bikes, and our [gravel bikes for sale guide](/blog/gravel-bikes-for-sale/) explains the models.',
        'For gravel and road wheels, the ISO number is still the first check: a 700c wheel is 622 on Park Tool\'s table. Match the rim width to the tyre width using the loose rule above, check the axle and the brake mount and ask the bike maker which wheels it supports. A wheel that fits physically may still not be approved for the bike\'s weight, so check the maker\'s limits.',
      ],
    },
    {
      h: 'Queensland rules: wheels, motors and conversions',
      p: [
        'The Queensland Government\'s [electric bicycle rules page](https://www.qld.gov.au/transport/safety/rules/wheeled-devices/electric-bicycle-rules) says that to be legal in public places an e-bike must have a motor with a maximum continuous rated power output of 250 watts and meet EN 15194 with a compliance label. It says modifications like after-market conversion kits are not compliant with the standard and would make the device illegal to ride in public.',
        'That matters for wheels, because a replacement motor wheel is exactly the kind of modification the page describes. Replace an ordinary wheel with an ordinary wheel and nothing changes, but fitting a more powerful motor wheel turns the bike into an off-road machine. Our [conversion kit bike guide](/blog/conversion-kit-with-battery/) explains the rules for kits, and we sell every motor above 250 watts for private property use only.',
      ],
    },
    {
      h: 'Tyres, tubes and keeping a wheel true',
      img: { file: 'blog/bike-wheels-79bike-tyre.webp', alt: '79Bike tyre for a bicycle wheel on an off-road 79Bike model', w: 720, h: 540 },
      p: [
        'A new wheel usually needs a tyre and tube, and the tyre must match the rim as described above. Our [e-bike tyres and tubes guide](/blog/e-bike-tyres-and-tubes/) explains sizes and tube types, and our [bike puncture repair kit guide](/blog/bike-puncture-repair-kit/) covers roadside fixes. We list a 79Bike inner tube and tyre in our wheels, tyres and tubes category.',
        'Keep an eye on the wheel after fitting. Spin it and look for wobble, check that the quick release or thru axle is tight and recheck the spokes after the first few rides, because new wheels settle. Watch for a rim that is dented or cracked, since a damaged rim can fail without warning. For fat bikes, our [Fatboy electric bike guide](/blog/fatboy-electric-bike/) explains the models these wheels fit.',
      ],
    },
    {
      h: 'Checking a wheel before every ride',
      p: [
        'A wheel check takes a minute and catches most problems early. Lift the wheel off the ground and spin it, watching the rim against a fixed point such as a brake pad: a rim that wobbles side to side or hops up and down needs truing. Squeeze pairs of spokes together and feel for any that are noticeably looser than the rest, because a loose spoke is the first sign of a wheel going out of true.',
        'Check the axle is tight, whether it is a quick release or a thru axle, and that the wheel sits straight in the frame or fork. On a disc brake bike, look at the rotor for a bend, and check the wheel does not rub the pads. Press the tyre to check pressure and look along the sidewalls for cuts and bulges. If anything looks wrong, fix it before riding, since a failing wheel can throw you off without warning.',
        'After a hard ride on rough ground, check again. Impacts from potholes and kerbs can dent a rim or loosen spokes, and a dented rim is weaker even if it still spins. A quick look after each ride keeps small faults from becoming expensive ones.',
      ],
    },
    {
      h: 'Common mistakes when buying a bike wheel',
      ul: [
        '**Matching only the wheel diameter.** The bead seat number and the rim width matter too.',
        '**Ignoring the axle.** Thru axle and quick release are different.',
        '**Forgetting the rotor mount or brake type.** A wheel that fits the frame can still not fit the brake.',
        '**Mixing tyre and rim sizes.** Park Tool says not to mix different bead seat diameters.',
        '**Fitting a motor wheel to a legal e-bike.** It changes the bike\'s legal status.',
        '**Riding on a wobbling or cracked rim.** Replace or true it first.',
      ],
    },
  ],
  faq: [
    { q: 'Which bike wheels do you sell?', a: 'We list the Fatboy Front Wheel Assembly 20x4 at $139, the Fat Bike Wheel at $149, the Fatboy Rear Wheel Assembly 20x4 at $179 and the 79Bike Bare Wheel Rim at $299. Our pages show names and prices only, so send us your bike model to confirm fit.' },
    { q: 'How do I know which tyre fits my rim?', a: 'Match the ISO bead seat diameter, the larger of the two numbers. Park Tool says rims and tyres with the same number fit each other, for example 622 on both, and not to mix different numbers. Also check the tyre width suits the rim width.' },
    { q: 'Do you sell gravel bike rims?', a: 'No. We do not stock gravel or road rims, so we cannot offer them or confirm fit. A specialist wheel builder can help. Our gravel bikes for sale guide covers the electric gravel bikes we list.' },
    { q: 'Can I fit a motor wheel to my e-bike?', a: 'You can, but Queensland says a legal e-bike has a 250 watt motor and meets EN 15194, and that after-market conversion kits are not compliant. A bike with a more powerful motor wheel is for private property use only.' },
    { q: 'What is the difference between a wheel and a rim?', a: 'A rim is the metal hoop that holds the tyre. A wheel is the complete assembly with rim, spokes and hub. A bare rim, such as our 79Bike Bare Wheel Rim at $299, needs spokes and a hub, and is a job for a wheel builder.' },
  ],
  keywords: { primary: 'bike wheel', supporting: ['bicycle wheel', 'electric bike wheel', 'gravel bike rims', 'wheels bike', 'bike wheel rim'] },
  words: 0,
}
