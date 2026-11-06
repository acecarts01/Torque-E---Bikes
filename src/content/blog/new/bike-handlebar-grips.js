// Blog post written to the blog-post rule (see ~/.claude/skills/blog-post/SKILL.md).
// Keywords: volume / KD / intent from Semrush AU Keyword Magic (6 Nov 2026), recorded in docs/used-keywords.csv and docs/blog-plan-batches-2026-11-06.html.
// Sources opened 7 Nov 2026: Queensland Government bicycle rules page (keep at least 1 hand on the handlebars; a working brake is required); Queensland Government electric bicycle rules page (throttle only up to 6 km/h to help you start moving).
// We list the 79Bike Handlebar Grips ($28.95, off-road item) and a Fatboy handlebar ($109). Product pages publish names and prices only, so no diameter, length or compatibility is claimed.
export const meta = {
  id: 'bike-handlebar-grips',
  slug: 'bike-handlebar-grips',
  url: '/blog/bike-handlebar-grips/',
  title: 'Bike Handlebar Grips: Types, Sizes and How to Fit Them',
  seoTitle: 'Bike Handlebar Grips: Types, Sizes and How to Fit Them',
  excerpt: 'Choosing bike handlebar grips? Compare lock-on, slip-on and ergonomic grips, check diameter and throttle fit, and see the 79Bike grips at $28.95.',
  category: 'Buying Guides',
  date: '2026-11-07',
  readTime: '8 min',
  focus: 'bike handlebar grips',
  secondary: ['mountain bike handlebars', 'handlebars for bikes', 'bicycle handlebars', 'mtb handlebar', 'bike bar grips'],
  tags: ['grips', 'handlebars', 'bike handlebars', 'handlebars for a bike', 'handlebar bicycle', 'handlebar bar', 'mt bike grips', 'mtb bar grips', 'handlebars of bike', 'bicycle grips'],
  image: {
    file: 'blog/bike-handlebar-grips.webp',
    alt: 'Bike handlebar grips: 79Bike Handlebar Grips, Fatboy handlebar and Ampd Bros throttle kit',
    query: 'bike handlebar grips',
    credit: null,
  },
  related: [
    { href: '/shop/controls-grips-and-pedals/79bike-handlebar-grips/', name: '79Bike Handlebar Grips', price: 28.95, note: 'Grips for off-road 79Bike models.' },
    { href: '/shop/controls-grips-and-pedals/fatboy-handlebar-scrambler-harlem-v2/', name: 'Fatboy Handlebar (Scrambler / Harlem V2)', price: 109, note: 'A handlebar for Fatboy models.' },
    { href: '/shop/controls-grips-and-pedals/ampd-bros-thumb-throttle-kit/', name: 'Ampd Bros Thumb Throttle Kit', price: 85, note: 'A thumb throttle.' },
    { href: '/shop/controls-grips-and-pedals/ampd-bros-twist-throttle-kit/', name: 'Ampd Bros Twist Throttle Kit', price: 99, note: 'A twist throttle that replaces a grip.' },
    { href: '/shop/controls-grips-and-pedals/', name: 'All controls, grips and pedals', note: 'Grips, throttles and pedals.' },
  ],
  links: {
    to: [
      ['/shop/controls-grips-and-pedals/', 'controls, grips and pedals'],
      ['/blog/e-bike-throttle/', 'e-bike throttle guide'],
      ['/blog/bicycle-gloves/', 'bicycle gloves guide'],
      ['/blog/bike-tool-kit/', 'bike tool kit guide'],
      ['/blog/quad-lock-mount/', 'Quad Lock mount guide'],
    ],
    from: [
      ['/shop/controls-grips-and-pedals/', 'bike handlebar grips guide'],
      ['/shop/controls-grips-and-pedals/79bike-handlebar-grips/', 'bike bar grips: what to check'],
      ['/blog/e-bike-throttle/', 'bicycle grips: how to choose'],
    ],
  },
  kind: 'post',
}

export const body = {
  hook: 'Grips are the only part of the bike your hands touch all ride. We list the 79Bike Handlebar Grips at $28.95; here is how grip types, sizes and throttles differ, and how to fit them.',
  intro: [
    'Bike handlebar grips look like a small part, but they decide how comfortable and controlled your ride feels. A worn grip can blister your hands, a loose one can spin under your palm and a grip that does not fit your bar can be dangerous. Choosing the right one is cheap, quick and one of the most effective comfort upgrades you can make.',
    'This guide covers the grip types, how to measure for the right size, what changes when your bike has a throttle, what we stock, how to fit a grip safely and what the Queensland rules say about hands and handlebars. We list one pair of grips and one handlebar, so we say clearly what they are and ask you to confirm fit. Prices are in Australian dollars as listed on 7 November 2026, and our product pages publish names and prices only.',
  ],
  sections: [
    {
      h: 'Bike handlebar grips: the main types',
      p: [
        'A slip-on grip is a rubber or foam sleeve that pushes onto the bar and is held by friction, sometimes with glue. It is cheap and light but can twist if it is not fitted tightly. A lock-on grip has a clamp ring at one or both ends, tightened with a small hex bolt. It will not spin, so it is the usual choice for mountain bikes and e-bikes, where you grip hard.',
        'Ergonomic grips have a wider platform or wing that supports the heel of your hand and spreads the pressure, which helps on long commutes. Foam grips are soft and light but wear quickly. Silicone and gel grips add cushioning, and thicker grips reduce hand fatigue but can feel clumsy if your hands are small. Many riders try a couple of types before they settle.',
      ],
    },
    {
      h: 'Handlebar grips in our range',
      img: { file: 'blog/bike-handlebar-grips-79bike-handlebar-grips.webp', alt: '79Bike handlebar grips, bike bar grips for off-road 79Bike models', w: 720, h: 540 },
      p: [
        'We list one pair of grips, the [79Bike Handlebar Grips](/shop/controls-grips-and-pedals/79bike-handlebar-grips/) at $28.95. It is sold under the 79Bike name and listed as an off-road item, so it is meant for those bikes. We also list the [Fatboy Handlebar (Scrambler / Harlem V2)](/shop/controls-grips-and-pedals/fatboy-handlebar-scrambler-harlem-v2/) at $109 for Fatboy models. Our product pages publish names and prices only, so we do not quote diameter, length or material.',
        'Message the team on WhatsApp with your bike and we will confirm which grip or bar suits it before you order. The whole range is in our [controls, grips and pedals](/shop/controls-grips-and-pedals/) category, which also lists throttles and pedals.',
      ],
      table: {
        head: ['Item', 'Price (AUD)', 'Use'],
        rows: [
          ['79Bike Handlebar Grips', '$28.95', 'Grips, off-road 79Bike models'],
          ['Ampd Bros Thumb Throttle Kit', '$85', 'Thumb throttle'],
          ['Ampd Bros Twist Throttle Kit', '$99', 'Twist throttle that replaces a grip'],
          ['Fatboy Handlebar (Scrambler / Harlem V2)', '$109', 'Handlebar for Fatboy models'],
        ],
      },
    },
    {
      h: 'How to choose bike bar grips: a checklist',
      ul: [
        '**Bar diameter.** The grip must match the bar; measure the bar end or check the bike\'s specification before you buy.',
        '**Length.** Check the length of bar between the brake lever and the end, which sets the grip length you can fit.',
        '**Lock-on or slip-on.** Choose lock-on if you ride hard or off-road.',
        '**Thickness.** Larger hands usually prefer thicker grips, and smaller hands prefer thinner ones.',
        '**Material.** Rubber is durable, foam is light and silicone is soft.',
        '**Ergonomic shape.** A wing or platform helps on long, flat rides.',
        '**Throttle and shifter space.** On an e-bike, check there is room for a thumb throttle, a shifter and a display.',
        '**Bar ends.** If you use bar ends, check the grip leaves space for them.',
      ],
    },
    {
      h: 'Bicycle handlebars: bar width, rise and style',
      p: [
        'The grip is only half the story, because the handlebar decides your reach and posture. A flat bar gives a sporty position and a riser bar raises your hands, which is more comfortable for many riders. A mountain bike handlebar is usually wide for control on trails, and a commuter bar may be narrower for filtering through traffic. A swept-back bar sits higher and is the most upright.',
        'If you want to change your handlebars, check that they fit your stem and that the controls, brake levers and display still fit. A wider bar changes how the bike steers, so test it on a quiet street first. Our [e-bike accessories guide](/blog/ebike-accessories/) covers the other cockpit parts that go with a new bar.',
      ],
    },
    {
      h: 'Grips on an e-bike with a throttle',
      img: { file: 'blog/bike-handlebar-grips-ampd-bros-twist-throttle-kit.webp', alt: 'Ampd Bros twist throttle kit, a throttle that forms part of the handlebar grip', w: 720, h: 540 },
      p: [
        'If your e-bike has a twist throttle, the throttle forms part of the right-hand grip, so you cannot simply swap it for a normal one. A thumb throttle sits beside the grip and leaves you free to choose any grip. The [Ampd Bros Twist Throttle Kit](/shop/controls-grips-and-pedals/ampd-bros-twist-throttle-kit/) is $99 and the [Ampd Bros Thumb Throttle Kit](/shop/controls-grips-and-pedals/ampd-bros-thumb-throttle-kit/) is $85.',
        'The Queensland Government\'s [electric bicycle rules page](https://www.qld.gov.au/transport/safety/rules/wheeled-devices/electric-bicycle-rules) says that, to be legal in public places, an e-bike can be throttle-controlled only up to 6 km/h to help you start moving. A throttle above that limit means the bike is for private property only. Our [e-bike throttle guide](/blog/e-bike-throttle/) explains the types and the rule in more detail.',
      ],
    },
    {
      h: 'How to fit handlebar grips safely',
      p: [
        'Remove the old grip by cutting it off or by loosening the lock ring and sliding it off. Clean the bar with a rag and a degreaser so no oil or glue remains. For a slip-on grip, a little isopropyl alcohol or a spray of water-based cleaner helps it slide on, and it dries to grip firmly. Push the grip on until it sits against the lever or the end of the bar.',
        'For a lock-on grip, slide it on dry, line up the clamp bolts so they point where you can reach them and tighten them evenly to the maker\'s torque. Check the grip does not move when you twist hard. Fit a bar end plug so the open end of the bar is covered, because an uncovered bar end can injure you in a fall. A basic set of hex keys from our [bike tool kit guide](/blog/bike-tool-kit/) is all you need.',
      ],
    },
    {
      h: 'Hands, gloves and comfort',
      p: [
        'Numb or sore hands are a sign that the grips, the bar position or the load on your wrists is wrong. Try a larger or more ergonomic grip, rotate the bars slightly or raise them, and check your saddle position, because a saddle that is too far forward puts weight on your hands. Padded gloves also help on long rides, and our [bicycle gloves guide](/blog/bicycle-gloves/) compares what is available.',
        'If you use a phone mount, check it does not clash with the grip or the brake lever. Our [Quad Lock mount guide](/blog/quad-lock-mount/) explains where a mount can sit on the bar. Keep the controls within easy reach, because a lever you must stretch for is a lever you will not use in an emergency.',
      ],
    },
    {
      h: 'Looking after grips and knowing when to replace them',
      p: [
        'Grips wear slowly, so riders often do not notice until the surface is glazed, torn or sticky. Replace grips that are cracked, hard, shiny or loose on the bar, because a grip that slips is a loss of control. Rubber grips gain a sticky film from sweat and sun, which you can clean with warm soapy water, but once the rubber turns tacky it is time for a new pair.',
        'Check lock-on bolts every few rides, since vibration loosens them, and look for a bar end plug that has fallen out. After a crash, inspect the grip, the lever and the bar, because a bent lever or a twisted grip can hide damage. If you ride in Queensland heat, keep the bike in the shade, as sun hardens rubber and softens glue.',
        'When you buy new grips, keep the old ones until the new pair is fitted, so you can compare diameter and length. It is also a good moment to check your brake levers and cable ends, since you already have the cockpit apart.',
      ],
    },
    {
      h: 'Queensland rules: hands on the handlebars',
      p: [
        'The Queensland Government\'s [bicycle rules page](https://www.qld.gov.au/transport/safety/rules/wheeled-devices/bicycle) says you must keep at least one hand on the handlebars and have at least one working brake every time you ride. Good grips help you keep that control, particularly in the wet, when a worn grip can slip.',
        'That rule is a reminder to check your grips as part of a pre-ride check. A grip that spins, cracks or leaves the bar bare is a safety problem, not a style issue. If you carry a load or a phone, make sure it does not stop you holding the bar with at least one hand and reaching the brake.',
      ],
    },
    {
      h: 'Common mistakes with handlebar grips',
      ul: [
        '**Buying the wrong diameter.** Check your bar first.',
        '**Skipping the lock ring on a hard ride.** A slip-on grip can spin.',
        '**Over-tightening the clamp.** It can crack a plastic lever or crush a bar.',
        '**Leaving the bar end open.** Fit a plug.',
        '**Ignoring a worn grip.** Replace it before it slips.',
        '**Forgetting the throttle.** A twist throttle is part of the grip.',
      ],
    },
  ],
  faq: [
    { q: 'Which handlebar grips do you sell?', a: 'We list the 79Bike Handlebar Grips at $28.95, an off-road item for 79Bike models, and the Fatboy Handlebar at $109 for Fatboy models. Our product pages show names and prices only, so message us with your bike to confirm fit.' },
    { q: 'Are lock-on grips better than slip-on grips?', a: 'Lock-on grips use a clamp, so they do not spin, which suits mountain bikes and e-bikes. Slip-on grips are cheaper and lighter but rely on friction or glue. For hard riding or off-road, choose lock-on.' },
    { q: 'How do I know what size grip I need?', a: 'Check the diameter of your handlebar and the length available between the brake lever and the bar end, then choose a grip made for that bar. Thickness is a comfort choice, and larger hands often prefer a thicker grip.' },
    { q: 'Can I change the grips on an e-bike with a twist throttle?', a: 'The twist throttle forms part of the right-hand grip, so you cannot simply swap it. You can change the left grip freely, or switch to a thumb throttle. Ask us which throttle suits your bike.' },
    { q: 'Do I have to keep a hand on the handlebars in Queensland?', a: 'Yes. The Queensland Government says you must keep at least one hand on the handlebars and have at least one working brake every time you ride. Good grips help you keep that control.' },
  ],
  keywords: { primary: 'bike handlebar grips', supporting: ['mountain bike handlebars', 'handlebars for bikes', 'bicycle handlebars', 'mtb handlebar', 'bike bar grips'] },
  words: 0,
}
