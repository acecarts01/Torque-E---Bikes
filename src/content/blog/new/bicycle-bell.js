// Blog post written to the blog-post rule (see ~/.claude/skills/blog-post/SKILL.md).
// Keywords: volume / KD / intent from Semrush AU Keyword Magic (6 Nov 2026), recorded in docs/used-keywords.csv and docs/blog-plan-batches-2026-11-06.html.
// Sources opened 7 Nov 2026: Queensland Government bicycle rules page (working bell, horn or similar warning device; at least 1 working brake; lights and reflector at night; loads); Queensland Government electric bicycle rules page.
// We stock no manual bicycle bell, so the post says so. Our product pages publish names and prices only, so no horn volume, fitting or compatibility is claimed.
export const meta = {
  id: 'bicycle-bell',
  slug: 'bicycle-bell',
  url: '/blog/bicycle-bell/',
  title: 'Bicycle Bell and Horn: What Queensland Requires to Ride',
  seoTitle: 'Bicycle Bell and Horn: What Queensland Requires to Ride',
  excerpt: 'Need a bicycle bell? See what Queensland requires, how a bell compares with a horn, the 79Bike Horn at $39 and what to check before you fit one.',
  category: 'Buying Guides',
  date: '2026-11-07',
  readTime: '8 min',
  focus: 'bicycle bell',
  secondary: ['bike bell', 'guardian bell for bike', 'bicycle horn', 'bike bells', 'bell bicycle bell'],
  tags: ['cycle bell', 'bell for a bicycle', 'cycle bells', 'bell bike bell', 'bells for cycles', 'bike cycle bell', 'childs bike bell', 'childrens bike bell', 'bike with bell', 'kids bike bell'],
  image: {
    file: 'blog/bicycle-bell.webp',
    alt: 'Bicycle bell alternatives: 79Bike horn, 79Bike headlight and Azur Alien2 rear light for bikes and e-bikes',
    query: 'bicycle bell',
    credit: null,
  },
  related: [
    { href: '/shop/lights-and-horns/79bike-horn/', name: '79Bike Horn', price: 39, note: 'An electric horn for 79Bike off-road models.' },
    { href: '/shop/lights-and-horns/79bike-headlight/', name: '79Bike Headlight', price: 93.95, note: 'A headlight for 79Bike models.' },
    { href: '/shop/lights-and-horns/azur-alien2-100-lm-usb-rechargeable-rear-light/', name: 'Azur Alien2 100 lm Rear Light', price: 27.95, note: 'A USB rear light.' },
    { href: '/shop/lights-and-horns/blinder-1300-front-bike-light/', name: 'Blinder 1300 Front Bike Light', price: 149, note: 'A bright front light.' },
    { href: '/shop/lights-and-horns/', name: 'All lights and horns', note: 'Lights, horns and visibility.' },
  ],
  links: {
    to: [
      ['/shop/lights-and-horns/', 'lights and horns'],
      ['/blog/bicycle-light/', 'bicycle light guide'],
      ['/blog/kids-bike-sizes/', 'kids bike sizes guide'],
      ['/blog/childs-electric-bike/', 'child\'s electric bike guide'],
    ],
    from: [
      ['/shop/lights-and-horns/', 'bicycle bell guide'],
      ['/shop/lights-and-horns/79bike-horn/', 'bicycle horn: what to check'],
      ['/blog/bicycle-light/', 'bicycle bell and horn guide'],
    ],
  },
  kind: 'post',
}

export const body = {
  hook: 'A working bell, horn or similar warning device is a Queensland requirement for every bicycle ride. We do not stock a manual bell, but we list an electric horn at $39 and the lights that go with it.',
  intro: [
    'A bicycle bell is the cheapest and most overlooked piece of safety kit on a bike. It costs a few dollars, takes a minute to fit and is a legal requirement in Queensland, yet many bikes leave the shop without one. If you ride on shared paths, in a bike lane or past walkers, a bell is how you say hello before you arrive.',
    'This guide explains what the Queensland Government says about bells and horns, how a bell compares with a horn, what we stock, how to fit and test one and what to look for on a child\'s bike. We do not sell a manual bell, so we say so plainly and point to what we do list. Prices are in Australian dollars as listed on 7 November 2026, and our product pages publish names and prices only.',
  ],
  sections: [
    {
      h: 'What Queensland requires: a bicycle bell, horn or similar device',
      p: [
        'The Queensland Government\'s [bicycle rules page](https://www.qld.gov.au/transport/safety/rules/wheeled-devices/bicycle) says every time you ride, your bicycle must have a working bell, horn or a similar warning device, and at least one working brake. It says that when you ride at night or in poor visibility you must also show a white light visible from at least 200 metres at the front, a red light visible from at least 200 metres at the back and a red reflector visible from at least 50 metres behind.',
        'The same page covers e-bikes, which must follow the general road rules and the bicycle-specific rules as well as the e-bike rules. In practice, that means an e-bike needs the same bell or horn as an ordinary bicycle. If you buy a second-hand bike or a bike that was shipped without one, check for a bell before the first ride, because a bike without a working warning device is not ready for the road.',
      ],
    },
    {
      h: 'Bicycle bell or bicycle horn: which suits you?',
      p: [
        'A bell is a mechanical device that makes a clear ring when you flick a lever. It needs no battery, weighs very little and is easy to replace. Its sound is gentle, which suits shared paths where you want to alert a walker without startling them. Many riders like the friendly tone, and it is the traditional choice for a commuter or a child\'s bike.',
        'A bicycle horn is electric or air powered and makes a louder, harsher sound. It suits fast bikes and busy roads, where a bell can be lost in traffic noise. The trade-off is that a horn needs power or a bulb, it can sound aggressive on a shared path and it may be linked to the bike\'s electrical system. Some riders fit both: a bell for paths and a horn for roads.',
      ],
    },
    {
      h: 'Horns and lights in our range',
      img: { file: 'blog/bicycle-bell-blinder-1300-front-bike-light.webp', alt: 'Blinder 1300 front bike light, a bicycle light to use alongside a bike bell', w: 720, h: 540 },
      p: [
        'We list lights and horns in one category, and we do not stock a manual bell. The nearest item is the [79Bike Horn](/shop/lights-and-horns/79bike-horn/) at $39, which is listed for off-road 79Bike models. Our product page publishes the name and price only, so message the team on WhatsApp with your bike before you order and we will confirm what suits it.',
        'Because a warning device and lights go together on a night ride, the same category lists the [79Bike Headlight](/shop/lights-and-horns/79bike-headlight/) at $93.95, the [Blinder 1300 Front Bike Light](/shop/lights-and-horns/blinder-1300-front-bike-light/) at $149 and the [Azur Alien2 100 lm Rear Light](/shop/lights-and-horns/azur-alien2-100-lm-usb-rechargeable-rear-light/) at $27.95. Our [bicycle light guide](/blog/bicycle-light/) explains the white and red light rules in more detail.',
      ],
      table: {
        head: ['Item', 'Price (AUD)', 'Use'],
        rows: [
          ['79Bike Horn', '$39', 'Electric horn, off-road 79Bike models'],
          ['Azur Alien2 100 lm Rear Light', '$27.95', 'USB rear light'],
          ['79Bike Headlight', '$93.95', 'Headlight for 79Bike models'],
          ['Blinder 1300 Front Bike Light', '$149', 'Bright front light'],
        ],
      },
    },
    {
      h: 'How to choose a bike bell: a checklist',
      ul: [
        '**Sound.** Test it if you can. A clear, ringing tone carries further than a dull clunk.',
        '**Handlebar diameter.** Check the clamp fits your bars, especially if you have a thick grip or an e-bike cockpit.',
        '**Reach.** The lever should be easy to flick with your thumb without moving your hand off the grip.',
        '**Material.** Metal bells usually ring better and last longer than plastic ones.',
        '**Space on the bars.** Make sure it does not clash with the brake levers, lights, a phone mount or the display.',
        '**Weather.** A bell that rattles or rusts will not stay loud for long.',
        '**Size for a child.** Choose one a small hand can operate easily.',
      ],
    },
    {
      h: 'Fitting a bell and testing it before you ride',
      p: [
        'Most bells clamp around the handlebar with a small screw. Slide it on, place it where your thumb can reach the lever without moving your hand and tighten the screw until the bell does not rotate when you flick it. Check that it clears the brake levers and any light or phone mount, because a bell that blocks a lever is a hazard.',
        'Test it before every ride, as you would test the brakes. Flick the lever and listen for a clear ring. If it rattles, loosen and retighten the clamp, and if the sound is dull, check for a loose striker or dirt in the mechanism. On an e-bike, make sure the bell does not sit over the display or the throttle.',
      ],
    },
    {
      h: 'A bell on a child\'s bike',
      p: [
        'A bell is also a good first piece of responsibility for a child. It teaches a child to announce themselves to walkers and to take care around others. A childs bike bell should be small enough to operate with a small thumb, firm enough that it does not slip around the bar and loud enough to be heard on a path.',
        'If you are choosing a first bike, see our [kids bike sizes guide](/blog/kids-bike-sizes/) for what fits each age, and our [child\'s electric bike guide](/blog/childs-electric-bike/) for the electric options we list. Check that the bike has a working bell and brake before the first ride, because a working bell and brake are part of getting any bike ready to ride.',
      ],
    },
    {
      h: 'Using a bell well on shared paths',
      p: [
        'A bell works best when it is used early and lightly. Ring once when you are still some distance behind a walker, slow down and pass with room to spare. A sudden ring right beside someone is more likely to startle than help. Slow down at blind corners and near children, dogs and people with earphones, who may not hear you.',
        'The Queensland rules say riders must give way to pedestrians on footpaths and shared paths, so a bell is a courtesy that fits the rule: it tells people you are there so they can move and you can pass safely. If you ride an e-bike, remember you may be faster than a walker expects, so slow down more than you think you need to.',
      ],
    },
    {
      h: 'Where a horn makes sense, and where it does not',
      img: { file: 'blog/bicycle-bell-79bike-horn.webp', alt: '79Bike horn, an electric bicycle horn for off-road 79Bike models', w: 720, h: 540 },
      p: [
        'A horn suits fast, heavy bikes and road riding, where a loud signal helps a driver notice you. It does not suit a busy shared path, where it can sound aggressive. If your bike has an electric horn, check how it is wired, whether it works with the battery fitted and whether the wiring is protected from water.',
        'Our 79Bike Horn is listed as an off-road item, so confirm with us whether it suits your bike and where you plan to ride. If you want a simple warning device for a commuter or a child\'s bike, a mechanical bell from a bike shop is the usual choice, and it meets the Queensland requirement.',
      ],
    },
    {
      h: 'Choosing a bell for an e-bike, a commuter or a mountain bike',
      p: [
        'An e-bike is quieter than a petrol bike but faster than most walkers expect, so the bell matters more, not less. The Queensland Government\'s [electric bicycle rules page](https://www.qld.gov.au/transport/safety/rules/wheeled-devices/electric-bicycle-rules) says a legal e-bike has a motor of no more than 250 watts and assists only up to 25 km/h, so the speed gap between you and a walker is usually modest, but a bell still gives them time to move aside.',
        'On a commuter, choose a bell with a loud, clear ring that carries over traffic and fits next to your lights and display. On a mountain bike, choose a small, light bell that clamps tightly so it does not rattle on rough ground, and place it where your thumb reaches it without letting go of the grip. A bell that rattles is a bell you will stop trusting, so tighten it after a rough ride.',
        'If you ride in a group, a bell is also a simple way to signal that you are passing. Agree a signal with your riding partners, ring once, and pass with space. A good bell also lasts for years, so buy one you are happy with the first time.',
      ],
    },
    {
      h: 'Common mistakes with a bicycle bell',
      ul: [
        '**Riding without one.** Queensland requires a working bell, horn or similar device every ride.',
        '**Fitting it where it blocks a brake lever.** Check clearance before you ride.',
        '**Ringing too late or too close.** Ring early and slow down.',
        '**Forgetting to test it.** A loose bell can fall silent.',
        '**Relying on the horn alone on shared paths.** A bell is gentler.',
        '**Skipping lights.** A bell is only one part of being seen and heard.',
      ],
    },
  ],
  faq: [
    { q: 'Is a bell compulsory on a bicycle in Queensland?', a: 'Yes. The Queensland Government says every time you ride, your bicycle must have a working bell, horn or a similar warning device, and at least one working brake. At night you must also show front and rear lights and a rear reflector.' },
    { q: 'Do you sell a bicycle bell?', a: 'No, we do not stock a manual bell. We list the 79Bike Horn at $39, an electric horn for off-road 79Bike models, plus front and rear lights. Message us with your bike and we will confirm what suits it.' },
    { q: 'Does an e-bike need a bell?', a: 'Yes. E-bikes must follow the general road rules and the bicycle-specific rules, so they need a working bell, horn or similar warning device as well as brakes and lights at night. A bell is quick and cheap to fit.' },
    { q: 'Is a horn better than a bell?', a: 'It depends where you ride. A bell is gentle and suits shared paths, while a horn is louder and suits fast road riding. Some riders fit both. Choose a device you can operate without moving your hand off the grip.' },
    { q: 'What bell is best for a child?', a: 'A small, firm bell with an easy lever that a child can flick with a thumb and that does not slip around the bar. Check it rings clearly and that the clamp fits the handlebar before the first ride.' },
  ],
  keywords: { primary: 'bicycle bell', supporting: ['bike bell', 'guardian bell for bike', 'bicycle horn', 'bike bells', 'bell bicycle bell'] },
  words: 0,
}
