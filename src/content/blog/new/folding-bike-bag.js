// Blog post written to the blog-post rule (see ~/.claude/skills/blog-post/SKILL.md).
// Keywords: volume / KD / intent from Semrush AU Keyword Magic (29 Oct 2026), KD 28 or lower, recorded in docs/used-keywords.csv.
// Topic source: competitor and search-result guides on carrying folding bikes (Bobbin Bikes, Brompton, Downtube, Ivanhoe Cycles). Higher-volume variants such as "bike in a bag folding bike" are awkward phrases and are kept as tags.
// Competitor review 29 Oct 2026: weaknesses are overseas rules, no Australian transport sources, thin advice for e-bike folders (weight and battery), no sizing checklist. Plan: TransLink bag-size rule, battery and weight advice, honest note that we stock folding e-bikes but not bags.
// Sources opened 29 Oct 2026: TransLink cycling and walking page (folding bikes allowed on any service in a bag no bigger than 90 x 70 x 36 cm), Queensland Government bicycle road rules page.
// Product pages publish only names and prices. We stock folding e-bikes but no folding bike bags; the post says so and links the bikes.
export const meta = {
  id: 'folding-bike-bag',
  slug: 'folding-bike-bag',
  url: '/blog/folding-bike-bag/',
  title: 'Folding Bike Bag: Size, Fit and Rules for Trains',
  seoTitle: 'Folding Bike Bag: Size, Fit and Rules for Trains',
  excerpt: 'Need a folding bike bag? See the 90 x 70 x 36 cm TransLink limit, how to size a carry bag, what folded e-bikes weigh on your back and which folding e-bikes we stock.',
  category: 'Buying Guides',
  date: '2026-10-29',
  readTime: '10 min',
  focus: 'folding bike bag',
  secondary: ['folding bicycle carry bag', 'collapsible bike bag', 'folding bike storage bag', 'bike bag for folding bike', 'fold up bike in a bag'],
  tags: ['bike in a bag folding bike', 'cycling travel bag', 'foldable bike bags', 'bags for a bike', 'bike rack pack bag', 'seat bag for bike', 'shoulder bag bike', 'bike pack bag', 'bike bag for flying', 'case for bike travel'],
  image: {
    file: 'blog/folding-bike-bag.webp',
    alt: 'SmartMotion, Vamos Doblez and Foo F1 folding e-bikes that a folding bike bag is sized for',
    query: 'folding bike bag',
    credit: null,
  },
  related: [
    { href: '/shop/folding-e-bikes/foo-f1-folding-e-bike/', name: 'Foo F1 Folding E-Bike', price: 1499, note: 'A folding e-bike.' },
    { href: '/shop/folding-e-bikes/smartmotion-folding-step-through-e-bike/', name: 'SmartMotion Folding Step-Through E-Bike', price: 1899, note: 'A folding step-through e-bike.' },
    { href: '/shop/folding-e-bikes/vamos-doblez-folding-e-bike-2025/', name: 'Vamos Doblez Folding E-Bike (2025)', price: 2659, note: 'A 2025 folding e-bike.' },
    { href: '/shop/folding-e-bikes/pedal-derby-electric-folding-bike/', name: 'Pedal Derby Electric Folding Bike', price: 1519, note: 'An electric folding bike.' },
    { href: '/shop/folding-e-bikes/', name: 'All folding e-bikes', note: 'Folding e-bikes from $1,069.' },
  ],
  links: {
    to: [
      ['/shop/folding-e-bikes/', 'folding e-bikes'],
      ['/blog/folding-electric-bikes/', 'folding electric bikes guide'],
      ['/blog/bike-panniers/', 'bike panniers buying guide'],
      ['/blog/e-bike-batteries/', 'e-bike batteries guide'],
    ],
    from: [
      ['/shop/folding-e-bikes/', 'folding bike bag guide'],
      ['/shop/folding-e-bikes/foo-f1-folding-e-bike/', 'bike bag for folding bike: sizing'],
      ['/shop/folding-e-bikes/vamos-doblez-folding-e-bike-2025/', 'fold up bike in a bag'],
    ],
  },
  kind: 'post',
}

export const body = {
  hook: 'A folding bike bag turns a bike into luggage. Measure the folded bike, check the 90 x 70 x 36 cm TransLink limit and remember that an e-bike is heavier to carry than it looks.',
  intro: [
    'A folding bike bag is a carry or travel bag sized to hold a folded bike, so you can take it onto a train, into an office or into a car boot without a fuss. The right bag depends on the folded size of your bike, the rules of the service you travel on and how far you must carry it. Get the size wrong and the bag will not close, or it will be refused.',
    'This guide covers the Queensland train limit, how to measure a folded bike, bag types, the extra weight of an e-bike, the other bags that work with a folding bike and the folding e-bikes we stock. Prices are current Torque E-Bikes prices. For our full range, see [folding e-bikes](/shop/folding-e-bikes/).',
  ],
  sections: [
    {
      h: 'The TransLink rule: 90 x 70 x 36 cm',
      p: [
        'TransLink\'s [cycling and walking page](https://translink.com.au/travel-with-us/cycling-and-walking) says a folding bike is allowed on any service if it is carried in a bag no bigger than 90 cm x 70 cm x 36 cm. Standard bikes are allowed on trains too, but only in the first or last carriage of six-car trains, with no more than two people carrying bikes or e-scooters in that carriage at once. The page says bikes are not allowed on bus, tram or railbus services.',
        'That makes a folding bike bag a practical pass. If your folded bike fits inside 90 x 70 x 36 cm and the bag is sized to match, you are not limited to bike-friendly carriages. Rules in other states differ, so check Transport for NSW, Public Transport Victoria or your local operator before you travel.',
        'The TransLink page does not mention e-bikes, so do not assume an e-bike is treated like a pedal folding bike. If you ride a folding e-bike, ask the operator about batteries and e-bikes before you rely on the bag.',
      ],
    },
    {
      h: 'Folding bike bag types compared',
      p: [
        'Bags range from a simple fabric cover to a padded travel case. Pick the lightest one that protects the bike for your type of trip.',
      ],
      table: {
        head: ['Bag type', 'Protection', 'Carry', 'Best for'],
        rows: [
          ['Fabric carry bag', 'Light; stops grease and scratches', 'Handles and a shoulder strap', 'Trains and short walks'],
          ['Padded transit bag', 'Padding around the frame and wheels', 'Handles and straps', 'Car boots and storage'],
          ['Wheeled travel case', 'Padded, sometimes with a hard base', 'Wheels and a handle', 'Longer trips'],
          ['Frame cover or sleeve', 'Keeps grease off clothes', 'Carry by the bike', 'Short hops'],
        ],
      },
    },
    {
      h: 'How to size a bag for your folding bike',
      ul: [
        '**Fold the bike first.** Measure the length, height and width of the folded bike at its largest points, including pedals, handlebars and the saddle.',
        '**Add room for padding.** Allow a few centimetres on each side so the bag closes without strain.',
        '**Check the maker\'s inner dimensions.** Outer sizes can be bigger than the inside space.',
        '**Compare with the rule.** If you want to use the bag on TransLink, the bag must be no bigger than 90 x 70 x 36 cm.',
        '**Think about wheels.** Some bikes fold with the wheels in line, others with the wheels side by side. This changes the shape of the load.',
        '**Check the zip and handles.** A stiff zip or a weak handle is a daily annoyance.',
        '**Try it before you travel.** Pack the bike at home so you learn the fold and the fit.',
      ],
      img: { file: 'blog/folding-bike-bag-foo-f1.webp', alt: 'Foo F1 folding e-bike, a folding bike that needs a measured carry bag', w: 720, h: 540 },
    },
    {
      h: 'Carrying a folding e-bike: weight and battery',
      p: [
        'A pedal folding bike is light enough to carry, but a folding e-bike is heavier because of the motor and battery. Our product pages do not publish bike weights, so check the maker\'s specification before you choose a bag and plan a carry. If the bike is too heavy to lift comfortably, a wheeled case or a bag with wheels is a better choice than a shoulder-strap bag.',
        'You can often reduce the weight by removing the battery for the carry, if the bike allows it. Never carry a battery in an unprotected bag. Lithium batteries are classed as Class 9 dangerous goods for transport, and our [e-bike batteries guide](/blog/e-bike-batteries/) explains how to handle and store them safely.',
        'Operators also set their own rules on batteries. Check them before you board with a folded e-bike, because the bag size is only one of the rules that can apply.',
      ],
    },
    {
      h: 'Other bags that suit a folding bike',
      p: [
        'A bag for the bike is one part of the set. Folding bikes have small frames and often limited space, so the right extra bags make daily use easier.',
      ],
      ul: [
        '**A seat bag for bike tools.** A small bag under the saddle holds a spare tube and tyre levers. See our [bike tool kit guide](/blog/bike-tool-kit/).',
        '**A rack pack bag.** A bag that sits on a rear rack carries a laptop or a change of clothes. See our [bike panniers buying guide](/blog/bike-panniers/).',
        '**A shoulder bag.** A shoulder bag bike riders use for a short ride works for light loads only, because weight on one shoulder makes steering harder.',
        '**A bike pack bag for the handlebar.** A small bag keeps a phone and keys within reach, but too much weight on the bars changes the steering.',
        '**A travel case for flying.** If you fly with the bike, check the airline\'s rules for bike bags and sizes before you book. A bike bag for flying may count as checked baggage, and each airline sets its own fee and size limits.',
      ],
    },
    {
      h: 'Folding e-bikes we stock',
      p: [
        'We do not sell folding bike bags, so measure your bike and buy a bag from a specialist. We do stock folding e-bikes, and their folded size and weight are published by each maker. Ask us for the folded dimensions of any model before you order a bag.',
      ],
      table: {
        head: ['Folding e-bike', 'Price', 'Type'],
        rows: [
          ['[Foo F1 Folding E-Bike](/shop/folding-e-bikes/foo-f1-folding-e-bike/)', '$1,499', 'Folding e-bike'],
          ['[SmartMotion Folding Step-Through E-Bike](/shop/folding-e-bikes/smartmotion-folding-step-through-e-bike/)', '$1,899', 'Step-through folding e-bike'],
          ['[Pedal Derby Electric Folding Bike](/shop/folding-e-bikes/pedal-derby-electric-folding-bike/)', '$1,519', 'Electric folding bike'],
          ['[Vamos Doblez Folding E-Bike (2025)](/shop/folding-e-bikes/vamos-doblez-folding-e-bike-2025/)', '$2,659', '2025 folding e-bike'],
        ],
      },
    },
    {
      h: 'Packing a folding bike into its bag',
      ul: [
        '**Fold it fully and secure the latches.** A half-folded bike swings and tears the bag.',
        '**Turn the handlebars so nothing sticks out.** Check the pedals and the saddle.',
        '**Wrap loose parts.** Put cable ends, the chain and the derailleur against the frame side so they do not catch fabric.',
        '**Keep the dirty side inside.** Put the chain side to the outside of the bike, away from clothes.',
        '**Lift with your legs.** Lift the bag by the handles close to your body and keep it from banging into people.',
        '**Do not overpack.** Tools and spare clothes add weight to the carry and can damage the bike inside.',
        '**Keep a lock handy.** If you leave the bag unattended, use a lock. See our [how to lock an e-bike](/blog/how-to-lock-an-e-bike/) guide.',
      ],
    },
    {
      h: 'Once the bike is out of the bag',
      p: [
        'A folding bike is a normal bicycle once it is unfolded, so the usual road rules apply. The Queensland Government\'s [bicycle road rules page](https://www.qld.gov.au/transport/safety/rules/wheeled-devices/bicycle) says that at night or in poor visibility you need a white front light visible from 200 metres, a red rear light visible from 200 metres and a red reflector visible from 50 metres when a vehicle\'s headlights shine on it. Check that your lights and reflectors still sit clear of the fold after you unfold the bike, because a hinge or a bag strap can cover them.',
        'Small wheels and a short wheelbase make a folding bike twitchy at speed, so take the first few metres gently after unpacking. Check the folding latch is closed and the handlebar post is tight before you ride, because a loose hinge is the most common folding bike fault.',
      ],
    },
    {
      h: 'Storing a folding bike at home or at work',
      ul: [
        '**Keep it folded in the bag.** A folded bike in a bag takes the space of a suitcase and stays clean.',
        '**Store it upright or on its side as the maker allows.** Some hinges are happier under load in one position.',
        '**Keep the bag dry.** A wet bag in a cupboard grows mould and rusts the chain.',
        '**Charge a folding e-bike in a safe place.** Follow the charger maker\'s advice and do not leave a battery charging in a closed bag.',
        '**Put a tag on the bag.** A name and phone number help if it is left on a train.',
      ],
    },
    {
      h: 'Folding bike bag mistakes to avoid',
      ul: [
        '**Buying before measuring.** Measure the folded bike first.',
        '**Ignoring the train limit.** The bag must be no bigger than 90 x 70 x 36 cm for TransLink.',
        '**Forgetting the weight.** A bag with wheels is better for a heavy folding e-bike.',
        '**Packing a battery loose.** Follow the maker and the operator\'s advice.',
        '**Skipping padding.** A thin cover scratches the frame in a crowded carriage.',
        '**Assuming all states are the same.** Rules differ, so check before you travel.',
      ],
    },
    {
      h: 'Which folding bike bag should you choose?',
      p: [
        'For daily train trips, pick a light fabric carry bag that fits your folded bike and stays within 90 x 70 x 36 cm. For car boots and storage, a padded transit bag protects the bike. For longer trips and a heavy e-bike, choose a wheeled case. If you do not yet own a folding bike, start with a [folding e-bike](/shop/folding-e-bikes/) and read our [folding electric bikes guide](/blog/folding-electric-bikes/).',
        'Tell us the model you ride and where you travel, and we will give you the folded size from the maker so you can buy the right bag. All orders ship Australia-wide with dangerous-goods certified dispatch.',
      ],
    },
  ],
  faq: [
    { q: 'What size folding bike bag does TransLink allow?', a: 'TransLink says a folding bike is allowed on any service if it is carried in a bag no bigger than 90 cm x 70 cm x 36 cm. Check the page before travel, because rules can change and other states have their own limits.' },
    { q: 'Do I need a bag for a folding bike on a train?', a: 'In Queensland, a bag within the size limit lets you travel on any service. Without one, a standard bike is restricted to the first or last carriage of six-car trains. Rules in other states differ, so check with the operator.' },
    { q: 'How do I measure a folding bike for a bag?', a: 'Fold the bike fully and measure its length, height and width at the largest points, including pedals and saddle. Add a few centimetres for padding and check the inner size of the bag, not just the outer size.' },
    { q: 'Can I carry a folding e-bike in a bag?', a: 'Yes if the size and weight suit, but e-bikes are heavier than pedal folders and batteries have their own rules. Check the maker\'s weight, remove the battery if the bike allows it and follow the operator\'s battery rules.' },
    { q: 'Do you sell folding bike bags?', a: 'No. We stock folding e-bikes from $1,069 and can give you the maker\'s folded size so you can buy a bag from a specialist.' },
    { q: 'Can I take a folding bike on a plane?', a: 'Often yes as checked baggage, but each airline sets its own size, weight and fee rules. Check the airline before you book and choose a padded case for the trip.' },
  ],
  keywords: { primary: 'folding bike bag', supporting: ['folding bicycle carry bag', 'collapsible bike bag', 'folding bike storage bag', 'bike bag for folding bike', 'fold up bike in a bag'] },
  words: 0,
}
