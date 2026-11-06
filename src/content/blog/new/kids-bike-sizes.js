// Blog post written to the blog-post rule (see ~/.claude/skills/blog-post/SKILL.md).
// Keywords: volume / KD / intent from Semrush AU Keyword Magic (6 Nov 2026), recorded in docs/used-keywords.csv and docs/blog-plan-batches-2026-11-06.html.
// Sources opened 6 Nov 2026: Bicycle Queensland "Bike sizing guide" PDF (wheel size, age and height table; standover and weight advice); Queensland Government electric bicycle rules page; ACCC bicycle helmets mandatory standard page.
// Product facts: VelectriX Hurricane 24" per the PedL supplier listing (250 W rear hub, 8.7 Ah / 313 Wh battery, 80 mm fork, hydraulic discs, about 30 km, 3 hour recharge). Gobike and ACE-S pages publish name and price only, so no specification is quoted for them.
// Companion to /blog/childs-electric-bike/: that post covers rules and motor questions; this one is the size chart.
export const meta = {
  id: 'kids-bike-sizes',
  slug: 'kids-bike-sizes',
  url: '/blog/kids-bike-sizes/',
  title: 'Kids Bike Sizes: 12, 16, 20 and 24 Inch Electric Options',
  seoTitle: 'Kids Bike Sizes: 12, 16, 20 and 24 Inch Electric Options',
  excerpt: 'Choosing a kids bike? Use the 12, 16, 20 and 24 inch size guide by age and height, check standover and weight, and see electric options from $949.',
  category: 'Buying Guides',
  date: '2026-11-06',
  readTime: '9 min',
  focus: 'kids bike',
  secondary: ['bike for kids', 'girls bikes', 'boys bike', 'kids bike 24', 'kids bike with training wheels'],
  tags: ['kiddies bikes', 'childs bicycle', 'childrens 20 inch bikes', 'kid bike', 'kids 16 inch bike', 'ebike for kids', 'buy kids bike', 'polygon 24 inch bike', 'kids bike pedals', 'kids bike lights'],
  image: {
    file: 'blog/kids-bike-sizes.webp',
    alt: 'Kids bike sizes: Gobike 12 inch, Gobike 16 inch and VelectriX Hurricane 24 inch electric kids bikes',
    query: 'kids bike',
    credit: null,
  },
  related: [
    { href: '/shop/kids-electric-dirt-and-balance-bikes/gobike-12-ebike-for-kids/', name: 'Gobike 12" Ebike for Kids', price: 949, note: 'A 12 inch bike for the youngest riders.' },
    { href: '/shop/kids-electric-dirt-and-balance-bikes/gobike-16-electric-bike-for-kids/', name: 'Gobike 16" Electric Bike for Kids', price: 1329, note: 'A 16 inch bike for growing riders.' },
    { href: '/shop/kids-electric-dirt-and-balance-bikes/gobike-20-electric-bike-for-kids-and-teens/', name: 'Gobike 20" Electric Bike for Kids & Teens', price: 2279, note: 'A 20 inch bike for older kids.' },
    { href: '/shop/kids-and-youth-e-bikes/velectrix-hurricane-24-kids-e-bike/', name: 'VelectriX Hurricane 24" Kids E-Bike', price: 949, note: 'A 24 inch bike with front suspension.' },
    { href: '/shop/kids-and-youth-e-bikes/', name: 'All kids and youth e-bikes', note: 'Nine kids and youth e-bikes.' },
  ],
  links: {
    to: [
      ['/shop/kids-and-youth-e-bikes/', 'kids and youth e-bikes'],
      ['/shop/kids-electric-dirt-and-balance-bikes/', 'kids electric dirt and balance bikes'],
      ['/blog/childs-electric-bike/', 'childs electric bike guide'],
      ['/blog/childs-helmet/', 'childs helmet guide'],
    ],
    from: [
      ['/shop/kids-and-youth-e-bikes/', 'kids bike size guide'],
      ['/shop/kids-and-youth-e-bikes/velectrix-hurricane-24-kids-e-bike/', 'kids bike 24 inch: size check'],
      ['/shop/kids-electric-dirt-and-balance-bikes/gobike-16-electric-bike-for-kids/', 'bike for kids: choosing the right size'],
    ],
  },
  kind: 'post',
}

export const body = {
  hook: 'Choose a kids bike by height and inside leg, not age: 12 inch suits about ages 2 to 3, 16 inch ages 4 to 6, 20 inch ages 6 to 8 and 24 inch ages 7 to 9. Fit matters more than a bike to grow into.',
  intro: [
    'A kids bike that fits builds confidence, and one that is too big does the opposite. Parents often buy a size up so the bike lasts longer, but a bike that is too tall or too heavy is harder to start, stop and steer, and it makes falls worse. With an electric kids bike, weight and speed make correct sizing even more important.',
    'This guide gives the wheel size, age and height ranges published by Bicycle Queensland, explains the standover and reach checks you can do at home, shows how weight changes the picture for e-bikes, and lists the electric kids bikes in our range by size. Prices are in Australian dollars as listed on 6 November 2026.',
  ],
  sections: [
    {
      h: 'Kids bike size chart by wheel size, age and height',
      p: [
        'Bicycle Queensland\'s [bike sizing guide](https://bq.org.au/wp-content/uploads/2022/04/BQ-Buying-a-childs-bike-2-2.pdf), supported by the Queensland Government, gives a rough guide by wheel size. It stresses that this is only a rough guide and that there are several other variables to consider. The table below summarises it, with the electric options we stock at each size.',
      ],
      table: {
        head: ['Wheel size', 'Typical age', 'Typical height', 'Our options'],
        rows: [
          ['12 inch', '2 to 3', '85 to 100 cm', 'Gobike 12" $949'],
          ['14 inch', '3 to 4', '95 to 110 cm', 'Ask us about availability'],
          ['16 inch', '4 to 6', '100 to 120 cm', 'Gobike 16" $1,329, DHZ 16" balance bike $759'],
          ['20 inch', '6 to 8', '100 to 130 cm', 'Gobike 20" $2,279, ACE-S 19" $1,299'],
          ['24 inch', '7 to 9', '115 to 135 cm', 'VelectriX Hurricane 24" $949, Gobike 24" $3,229'],
          ['26 inch', '9 to 11', '130 to 145 cm', 'Ask us about 26 inch options'],
        ],
      },
    },
    {
      h: 'How to check a kids bike fits',
      p: [
        'Bicycle Queensland\'s simple test is whether the child can comfortably stand over the bike with both feet flat on the ground and easily reach the handlebars from a seated position. Do the standover test in the shop or at home with the bike on level ground, and check that the child can reach and squeeze the brake levers with one or two fingers.',
      ],
      ul: [
        '**Standover.** Both feet flat on the ground with a small gap between the child and the top tube.',
        '**Reach.** Arms slightly bent holding the bars, no stretching and no cramping.',
        '**Seat height.** With the seat set correctly, the knee should have a slight bend at the bottom of the pedal stroke.',
        '**Brake reach.** Small hands must be able to pull the levers firmly.',
        '**Weight.** Lift the bike; a bike that is too heavy for the child is hard to handle and park.',
      ],
    },
    {
      h: 'Why weight matters more on an electric kids bike',
      p: [
        'Bicycle Queensland warns that it is hard for a beginner to get comfortable with a bike that is over half their weight, and that if the bike is too heavy it will cause more serious injuries in a fall. An electric bike adds a motor and a battery, so it is heavier than a regular bike of the same size. That makes it important to choose the smallest bike the child can ride comfortably, not the biggest.',
        'Ask us for the weight of any electric kids bike you are considering, because the listings do not always publish it. Compare it with your child\'s weight, and think about whether they can lift it, lean it on a wall and wheel it into the garage. Our [childs electric bike guide](/blog/childs-electric-bike/) covers motor power, speed limits and the Queensland rules for young riders.',
      ],
    },
    {
      h: 'Electric kids bikes at 12 and 16 inch',
      img: { file: 'blog/kids-bike-sizes-gobike-16-electric-bike-for-kids.webp', alt: 'Gobike 16 inch electric bike for kids, sized for ages 4 to 6', w: 720, h: 540 },
      p: [
        'The [Gobike 12" Ebike for Kids](/shop/kids-electric-dirt-and-balance-bikes/gobike-12-ebike-for-kids/) is $949 and the [Gobike 16" Electric Bike for Kids](/shop/kids-electric-dirt-and-balance-bikes/gobike-16-electric-bike-for-kids/) is $1,329. The product pages publish the name and price but not the motor rating, speed limit or weight, so ask the team on WhatsApp for those before you order. We confirm details with you before you pay.',
        'For a child who is still learning to balance, an electric balance bike can be a gentler start. The [DHZ 16" Electric Balance Bike](/shop/kids-electric-dirt-and-balance-bikes/dhz-16-electric-balance-bike-removable-battery-brushless-motor/) is $759. Supervise young riders at all times, use a safe enclosed area and make sure they wear a correctly sized helmet.',
      ],
    },
    {
      h: 'Electric kids bikes at 19 and 20 inch',
      p: [
        'The [ACE-S 19 Youth Electric Bike](/shop/kids-and-youth-e-bikes/ace-s-19-youth-electric-bike/) is $1,299 and the [Gobike 20" Electric Bike for Kids & Teens](/shop/kids-electric-dirt-and-balance-bikes/gobike-20-electric-bike-for-kids-and-teens/) is $2,279. These suit children in the middle of the size range who have outgrown a 16 inch bike.',
        'At this size, check the stand-over height and the reach carefully. Children of the same age vary a lot, and a tall seven-year-old may fit a 24 inch bike while a small eight-year-old still suits a 20 inch. Choose by height, not age.',
      ],
    },
    {
      h: 'Electric kids bikes at 24 inch and above',
      img: { file: 'blog/kids-bike-sizes-velectrix-hurricane-24-kids-e-bike.webp', alt: 'VelectriX Hurricane 24 inch kids e-bike with front suspension', w: 720, h: 540 },
      p: [
        'The [VelectriX Hurricane 24" Kids E-Bike](/shop/kids-and-youth-e-bikes/velectrix-hurricane-24-kids-e-bike/) is $949. The supplier describes a 250 W rear hub motor, an integrated 8.7 Ah (313 Wh) lithium-ion battery, 80 mm travel front suspension forks, Kenda 24-inch tyres, front and rear hydraulic disc brakes, up to about 30 km of assistance and a three-hour recharge. The supplier\'s figures are claims, and real range depends on rider weight, terrain and assist level.',
        'Older children and teens can look at the [Gobike 24" Electric Bike for Teens](/shop/kids-electric-dirt-and-balance-bikes/gobike-24-electric-bike-for-teens/) at $3,229 or the Woom UP 5 at $4,199 and UP 6 at $4,399. These cost more, and a teen close to adult size may be better served by a small-frame adult e-bike, so ask us before you buy.',
      ],
    },
    {
      h: 'Queensland rules for kids on e-bikes and helmets',
      p: [
        'The Queensland Government\'s [electric bicycle rules](https://www.qld.gov.au/transport/safety/rules/wheeled-devices/electric-bicycle-rules) say a legal e-bike has a motor of no more than 250 watts, pedal assistance up to 25 km/h and an EN 15194 compliance label. The page also sets age and licence requirements that apply from 31 August 2026 on public paths and roads, with exemptions such as supervised young riders and recreational areas with low pedestrian traffic. Check the page for the exact current wording before you ride.',
        'Every rider must wear an approved helmet. The ACCC\'s [bicycle helmets mandatory standard page](https://www.productsafety.gov.au/business/search-mandatory-standards/bicycle-helmets-mandatory-standard) says helmets worn when riding a bicycle, including an electronic bicycle, must meet the standard when supplied in Australia. Our [childs helmet guide](/blog/childs-helmet/) explains how to size and fit one.',
      ],
    },
    {
      h: 'Buy to fit now, not to grow into',
      p: [
        'It is tempting to buy a bigger bike so it lasts, but a child who cannot reach the pedals or brakes properly will ride badly and lose confidence. Buy the size that fits now, and plan to pass it on, resell it or move up in a year or two. A good e-bike holds its value better than a cheap one.',
        'If you are between sizes, choose the smaller one for a nervous or younger rider and the larger one for a confident, tall child. Raise the seat and handlebars as they grow, and recheck the fit every few months.',
      ],
    },
    {
      h: 'Balance bikes, training wheels and learning to ride',
      p: [
        'Many children learn to ride faster on a balance bike than with training wheels, because they learn to balance first and add pedalling later. A kids bike with training wheels props the bike up so the child never learns to lean, which can delay the moment they ride without them. If you do use training wheels, raise them gradually so the child feels the bike lean.',
        'An electric balance bike adds a motor, so it needs more supervision. Start in a flat, enclosed space, keep the speed setting low and make sure the child can stop and put their feet down confidently before you let them go further. Girls and boys follow the same sizing guide; choose the bike by fit and by the child\'s preference for colour and style rather than by label.',
      ],
    },
    {
      h: 'When to size up to the next kids bike',
      ul: [
        '**The knees hit the handlebars.** The bike is now too small for the child.',
        '**The seat is at its highest setting.** There is no room left to adjust.',
        '**The child stands on tiptoes to pedal.** The saddle cannot go any higher, or the frame is too short.',
        '**Their arms feel cramped.** The reach is too short.',
        '**They stop wanting to ride.** A bike that no longer fits is often the reason.',
        '**Plan a hand-me-down.** A good bike can pass to a younger sibling or be sold to fund the next size.',
      ],
    },
    {
      h: 'Mistakes to avoid when buying a kids bike',
      ul: [
        '**Buying by age alone.** Height and inside leg decide fit.',
        '**Buying too big to grow into.** It makes riding harder and falls worse.',
        '**Ignoring weight.** A heavy e-bike is hard for a small child to handle.',
        '**Skipping the helmet.** Buy a correctly sized, approved helmet with the bike.',
        '**Forgetting supervision.** Young riders need an adult nearby, especially on an e-bike.',
      ],
    },
  ],
  faq: [
    { q: 'What size bike does my child need?', a: 'Choose by height and inside leg. Bicycle Queensland gives a rough guide: 12 inch for ages 2 to 3, 16 inch for ages 4 to 6, 20 inch for ages 6 to 8, 24 inch for ages 7 to 9 and 26 inch for ages 9 to 11. Test standover and reach before buying.' },
    { q: 'How do I check a kids bike fits?', a: 'The child should stand over the bike with both feet flat on the ground and reach the handlebars comfortably from the seat. They should reach and squeeze the brakes with one or two fingers, and the bike should not feel too heavy to handle.' },
    { q: 'What electric kids bikes do you sell?', a: 'We list nine kids and youth e-bikes plus kids electric dirt and balance bikes, from the VelectriX Hurricane 24" at $949 to the Woom UP 6 at $4,399, including Gobike 12, 16, 20 and 24 inch models. Message us for motor, speed and weight details before you order.' },
    { q: 'Does a child need a helmet on an electric bike?', a: 'Yes. Every rider must wear an approved helmet that meets the mandatory Australian standard, with the label inside. Choose the right size for the child\'s head, fit it level and fasten the strap, and replace it after a crash.' },
    { q: 'Should I buy a bigger bike so my child grows into it?', a: 'No. Bicycle Queensland advises that a bike that is too big or too heavy does more harm than good. Buy the size that fits now, check weight and reach, and move up when the child outgrows it.' },
    { q: 'Do girls and boys need different kids bike sizes?', a: 'No. Girls bikes and boys bikes follow the same wheel-size guide, and the right size depends on height, inside leg and reach, not on gender. Pick the bike that fits and that your child likes the look of, then check the brakes, weight and helmet before you ride.' },
  ],
  keywords: { primary: 'kids bike', supporting: ['bike for kids', 'girls bikes', 'boys bike', 'kids bike 24', 'kids bike with training wheels'] },
  words: 0,
}
