// Blog post written to the blog-post rule (see ~/.claude/skills/blog-post/SKILL.md).
// Keywords: volume / KD / intent from Semrush AU Keyword Magic (27-28 Oct 2026), recorded in docs/used-keywords.csv.
// Sources opened 27 Oct 2026: Queensland Government electric bicycle rules page and the helmets-and-equipment page.
// Product pages publish no motor, battery or frame-size figures, so the post claims only names, brands and prices.
export const meta = {
  id: 'e-bike-step-thru',
  slug: 'e-bike-step-thru',
  url: '/blog/e-bike-step-thru/',
  title: 'E Bike Step Thru: How to Choose a Step-Through Electric Bike',
  seoTitle: 'E Bike Step Thru: How to Choose a Step-Through Bike',
  excerpt: 'Choosing an e bike step thru? Compare step-through electric bikes from $1,199, learn who they suit, frame strength, fit and the Queensland e-bike rules.',
  category: 'Buying Guides',
  date: '2026-10-28',
  readTime: '10 min',
  focus: 'e bike step thru',
  secondary: ['ebike step through', 'step thru ebike', 'step through ebikes', 'electric step thru bikes', 'step through bikes'],
  tags: ['step through frame bike', 'step through electric bicycle', 'e bike step through', 'ebikes step through', 'step thru bicycles', 'step thru bike', 'step thru bikes', 'step thru electric bicycle', 'step thru electric bike', 'ladies e bike'],
  image: {
    file: 'blog/e-bike-step-thru.webp',
    alt: 'Folding step-through, Mamba Savannah and NCM Milano, an e bike step thru range',
    query: 'e bike step thru',
    credit: null,
  },
  related: [
    { href: '/shop/folding-e-bikes/folding-step-through-e-bike-white/', name: 'Folding Step-Through E-Bike White', price: 1199, note: 'The lowest-priced step-through in this guide.' },
    { href: '/shop/commuter-and-urban-e-bikes/mamba-savannah-26-step-through-commuter/', name: 'Mamba Savannah 26" Step-Through Commuter', price: 1899, note: 'A 26 inch step-through commuter.' },
    { href: '/shop/commuter-and-urban-e-bikes/ncm-milano-step-through-trekking-e-bike/', name: 'NCM Milano Step-Through Trekking E-Bike', price: 1999, note: 'A step-through trekking e-bike.' },
    { href: '/shop/fat-tyre-and-scrambler-e-bikes/aventon-aventure-2-step-through-electric-bike/', name: 'Aventon Aventure.2 Step Through Electric Bike', price: 2999, note: 'A step-through fat-tyre e-bike.' },
    { href: '/shop/commuter-and-urban-e-bikes/', name: 'All commuter and urban e-bikes', note: 'City and commuter e-bikes.' },
  ],
  links: {
    to: [
      ['/shop/commuter-and-urban-e-bikes/', 'commuter and urban e-bikes'],
      ['/blog/e-bike-women/', 'e bike women buying guide'],
      ['/blog/commuter-e-bikes/', 'commuter e-bikes guide'],
      ['/blog/fat-tyre-e-bikes/', 'fat tyre e-bikes guide'],
    ],
    from: [
      ['/shop/commuter-and-urban-e-bikes/', 'e bike step thru buying guide'],
      ['/shop/commuter-and-urban-e-bikes/mamba-savannah-26-step-through-commuter/', 'how to choose a step through ebike'],
      ['/shop/commuter-and-urban-e-bikes/ncm-milano-step-through-trekking-e-bike/', 'step thru ebike: what to check'],
    ],
  },
  kind: 'post',
}

export const body = {
  hook: 'An e bike step thru has a low or open frame so you step through instead of swinging a leg over. It suits anyone who wants an easy mount, as long as the frame is strong enough for you and your load.',
  intro: [
    'An e bike step thru, also called a step-through or step-thru electric bike, has no high top tube, so you can step through the frame and sit down. That makes getting on and off easier, especially with a load, in a skirt or work clothes, or with stiff hips and knees. This guide explains who a step through ebike suits, how the frame compares with a standard one, what to check on strength and fit and what the Queensland rules say about e-bikes.',
    'We compare four step-through e-bikes in our range from $1,199 to $2,999, cover folding, commuter and fat-tyre designs, and answer the common questions. Prices are current Torque E-Bikes prices. Step-through frames are for everyone, not only for women or older riders.',
  ],
  sections: [
    {
      h: 'Step through ebikes in our range and their prices',
      p: [
        'Our range includes step-through e-bikes in several categories. Product pages publish the brand and price but not motor, battery or frame-size figures, so ask us for the maker\'s specifications and the right size for you before you order. For women\'s fit advice, see our [e bike women guide](/blog/e-bike-women/).',
      ],
      table: {
        head: ['E-bike', 'Category', 'Price', 'Style'],
        rows: [
          ['[Folding Step-Through E-Bike White](/shop/folding-e-bikes/folding-step-through-e-bike-white/)', 'Folding', '$1,199', 'Folding step-through'],
          ['[Mamba Savannah 26" Step-Through Commuter](/shop/commuter-and-urban-e-bikes/mamba-savannah-26-step-through-commuter/)', 'Commuter', '$1,899', '26 inch commuter'],
          ['[NCM Milano Step-Through Trekking E-Bike](/shop/commuter-and-urban-e-bikes/ncm-milano-step-through-trekking-e-bike/)', 'Commuter', '$1,999', 'Trekking'],
          ['[Aventon Aventure.2 Step Through Electric Bike](/shop/fat-tyre-and-scrambler-e-bikes/aventon-aventure-2-step-through-electric-bike/)', 'Fat tyre', '$2,999', 'Fat-tyre step-through'],
        ],
      },
    },
    {
      h: 'Who a step through frame bike suits',
      ul: [
        '**Riders with limited flexibility.** Stiff hips, knees or a back problem make lifting a leg over a bar awkward. A step-through avoids that.',
        '**Shorter riders.** A low frame has a lower standover height, so you can put your feet flat on the ground.',
        '**Commuters in work clothes.** A step-through lets you mount in a skirt, a suit or a dress without fuss.',
        '**Anyone loading the bike.** With a child seat, panniers or a basket, a low frame is easier to get on and off.',
        '**Frequent stop-start riders.** Delivery riders and shoppers mount and dismount many times, and an easy step helps.',
        '**Everyone else.** A step-through is not for a particular group. If you like the look and the easy mount, it is a fine choice.',
      ],
      img: { file: 'blog/e-bike-step-thru-mamba-savannah.webp', alt: 'Mamba Savannah 26 inch step-through commuter e-bike', w: 720, h: 540 },
    },
    {
      h: 'Step through electric bicycle vs standard frame: strength and ride',
      p: [
        'A traditional diamond frame has a top tube that braces the front and rear triangles and makes the frame stiff. A step-through lowers or removes the top tube, so makers reinforce the frame elsewhere, often with a thicker down tube or a strong gusset. Modern step-through e-bikes are built to carry the rider, the battery and a load, but check the maker\'s weight limit.',
        'The ride is a little different. A step-through frame can flex slightly under hard pedalling or on rough ground, which matters more for sporty riding than for relaxed commuting. For most riders, the difference is small and the easy mount is worth it.',
        'Check the maximum rider weight and the carrying capacity before you buy, especially if you plan to carry heavy loads or a passenger seat. Queensland says passengers can only be carried if the bike was made to carry them.',
      ],
    },
    {
      h: 'Step-through styles: folding, commuter, trekking and fat tyre',
      ul: [
        '**Folding step-through.** Compact and easy to store. The folding step-through at $1,199 suits small spaces and short trips. See our [folding electric bikes guide](/blog/folding-electric-bikes/).',
        '**Commuter step-through.** Upright position, mudguards and racks on many models. The Mamba Savannah is a 26 inch commuter at $1,899. See our [commuter e-bikes guide](/blog/commuter-e-bikes/).',
        '**Trekking step-through.** Built for longer rides and mixed surfaces, usually with lights and a rack. The NCM Milano at $1,999 is an example.',
        '**Fat-tyre step-through.** Wide tyres give grip and comfort on sand and gravel. The Aventon Aventure.2 at $2,999 is the fat-tyre option; see our [fat tyre e-bikes guide](/blog/fat-tyre-e-bikes/).',
        '**Mid-drive step-through.** Some step-through models use a mid-drive motor. Our [mid drive ebike guide](/blog/mid-drive-ebike/) explains the difference from hub motors.',
      ],
    },
    {
      h: 'How to check the fit of a step thru electric bike',
      p: [
        'A step-through bike still needs to fit. Check these points when you test one:',
      ],
      ul: [
        '**Standover height.** You should stand with both feet flat on the ground and a little clearance at the frame.',
        '**Saddle height.** With the ball of your foot on the lowest pedal, your knee should be slightly bent.',
        '**Reach and posture.** An upright position, relaxed shoulders and a comfortable reach to the bars.',
        '**Brake levers.** You should reach them easily with your fingertips; many have a reach adjustment.',
        '**Weight.** Check that you can lift or wheel the bike where you need to.',
        '**Saddle comfort.** A wider saddle suits upright riding. Our [bike seat cover guide](/blog/bike-seat-cover/) covers comfort upgrades.',
        '**Test ride.** If possible, ride it up a slope and around a corner to feel the assist and handling.',
      ],
    },
    {
      h: 'Queensland rules for e-bikes: power, assist and equipment',
      p: [
        'The Queensland Government\'s [electric bicycle rules page](https://www.qld.gov.au/transport/safety/rules/wheeled-devices/electric-bicycle-rules) says a legal e-bike has a motor with a maximum continuous rated power output of 250 watts, is pedal powered with motor assistance up to 25 km/h and may use a throttle only up to 6 km/h. It says e-bikes must meet EN 15194 and display a compliance label, and that passengers can only be carried if the bike was made to carry them.',
        'The [helmets and equipment page](https://www.qld.gov.au/transport/public/bicycle-riding/safety/helmets-and-equipment) says bicycle riders must wear an approved helmet, and a bicycle needs a working brake and a bell, with a white front light, a red rear light and a red rear reflector at night.',
        'Rules differ by state. Check your own road authority and ask us to confirm the legal status of any bike before you order. Our [off-road vs street legal guide](/blog/off-road-vs-street-legal-australia/) explains the categories.',
      ],
    },
    {
      h: 'Accessories that suit a step-through e-bike',
      ul: [
        '**Panniers or a basket.** A step-through makes loading easy. See our [bike panniers guide](/blog/bike-panniers/) and [bicycle basket guide](/blog/bicycle-basket/).',
        '**Lights.** Front and rear lights for dusk. See our [bicycle light guide](/blog/bicycle-light/).',
        '**Lock.** A chain or folding lock. See our [bike chain padlock guide](/blog/bike-chain-padlock/).',
        '**Helmet and gloves.** Protect your head and hands. See our [bicycle gloves guide](/blog/bicycle-gloves/).',
        '**Mudguards and kickstand.** Handy for commuting; see our [seats, saddles, kickstands and mudguards guide](/blog/e-bike-seats-saddles-kickstands-and-mudguards/).',
        '**Child seat.** If the bike is made to carry a passenger, see our [child bike seat guide](/blog/child-bike-seat/).',
      ],
    },
    {
      h: 'Looking after a step-through e-bike',
      p: [
        'Charge the battery on a hard surface and follow the safety advice in our [lithium battery guide](/blog/electric-moto-maintenance-lithium-safety/). Keep the chain clean and lubed, check the tyre pressure weekly and inspect the brakes regularly. Tighten the bolts after the first few rides and check them every month.',
        'Check the frame around the welds and the down tube for cracks, especially if you carry heavy loads. Clean the bike after wet rides and store it indoors or under a cover; see our [bicycle cover guide](/blog/bicycle-cover/).',
      ],
    },
    {
      h: 'Step thru ebike mistakes to avoid',
      ul: [
        '**Assuming all step-throughs are weak.** Check the maker\'s weight limit and build quality.',
        '**Ignoring size.** A step-through must still fit your height and reach.',
        '**Forgetting the legal label.** Look for EN 15194 labelling for road use.',
        '**Overloading.** Stay within the weight limit, including a passenger seat.',
        '**Skipping safety kit.** Helmet, lights and a lock matter.',
        '**Buying without a test.** Ride it or send us your height and inseam.',
      ],
    },
    {
      h: "Mounting, parking and loading a step-through e-bike",
      p: [
        "Step through the frame with your foot on the pedal side and settle onto the saddle. Do not lean the bike heavily as you mount, because a loaded e-bike is heavy and can tip. Squeeze the brakes as you get on, and get your balance before you start.",
        "Parking is easier on a flat spot with a kickstand, and a heavy bike should be stood on firm ground. Lock the bike to a fixed object, and take the battery with you if it is removable. Our [bike chain padlock guide](/blog/bike-chain-padlock/) explains locking.",
        "When you load a basket or panniers, put heavy items low and balanced. A step-through frame makes it easy to step in with a loaded bike, but do not hang bags on the handlebar. See our [bike panniers guide](/blog/bike-panniers/).",
      ],
    },
    {
      h: "Choosing the size of a step-through frame",
      p: [
        "Step-through frames often come in one or two sizes, so check the size chart against your height. A low frame helps shorter riders, but a frame that is too small cramps tall riders. Raise the saddle and bars within the limits of the post and stem, and check the reach.",
        "If you are between sizes, choose the one that gives a comfortable reach and a safe standover. A stem or saddle change can fix small differences. Send us your height and inseam and we will suggest a size for the model you are considering.",
      ],
    },
    {
      h: 'Which e bike step thru should you buy?',
      p: [
        'For a compact, low-priced option, the [folding step-through e-bike at $1,199](/shop/folding-e-bikes/folding-step-through-e-bike-white/) is the entry. For a commuter, the [Mamba Savannah 26" at $1,899](/shop/commuter-and-urban-e-bikes/mamba-savannah-26-step-through-commuter/) is the pick, and the [NCM Milano trekking e-bike at $1,999](/shop/commuter-and-urban-e-bikes/ncm-milano-step-through-trekking-e-bike/) suits longer rides. For wide tyres, look at the [Aventon Aventure.2 step through at $2,999](/shop/fat-tyre-and-scrambler-e-bikes/aventon-aventure-2-step-through-electric-bike/).',
        'Send us your height, inseam, trip plans and budget and we will help you choose a size. You can also browse the full [commuter and urban e-bikes range](/shop/commuter-and-urban-e-bikes/).',
      ],
    },
  ],
  faq: [
    { q: 'What is a step-thru e-bike?', a: 'An e-bike with a low or open frame, so you step through it rather than lifting a leg over a top tube. It suits anyone who wants an easy mount, not only women or older riders.' },
    { q: 'Are step-through e-bikes strong enough?', a: 'Modern step-through frames are reinforced to carry the rider, the battery and a load. Check the maker\'s weight limit and the carrying capacity, especially if you plan to carry heavy loads.' },
    { q: 'Do step through e-bikes ride differently?', a: 'Slightly. A step-through frame can flex a little under hard pedalling, which matters more for sporty riding. For commuting and relaxed riding, the difference is small and the easy mount is the benefit.' },
    { q: 'Are step-through e-bikes legal on roads in Queensland?', a: 'If they meet the e-bike rules: 250W continuous motor power, assistance up to 25 km/h, a throttle only up to 6 km/h and an EN 15194 label. Frame shape does not matter. Ask us to confirm any bike before you order.' },
    { q: 'What size step-through do I need?', a: 'It depends on your height and inseam. Check standover height, saddle height and reach, and use the maker\'s size chart. Send us your measurements and we will help.' },
    { q: 'Can I fit a child seat to a step-through e-bike?', a: 'Only if the bike was made to carry a passenger and the seat suits the frame and rack. Queensland says passengers can only be carried if the bike was made to carry them. Ask us about fit.' },
  ],
  keywords: { primary: 'e bike step thru', supporting: ['ebike step through', 'step thru ebike', 'step through ebikes', 'electric step thru bikes', 'step through bikes'] },
  words: 0,
}
