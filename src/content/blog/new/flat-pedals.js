// Blog post written to the blog-post rule (see ~/.claude/skills/blog-post/SKILL.md).
// Keywords: volume / KD / intent from Semrush AU Keyword Magic (27 Oct 2026), recorded in docs/used-keywords.csv.
// Sources opened 27 Oct 2026: Park Tool pedal installation and removal guide, and OneUp Components aluminium pedal service instructions (one maker's service advice).
// Product pages publish no weights, pin counts or platform sizes, so the post claims only names, brands, prices and the Small/Large wording in the Stamp names.
export const meta = {
  id: 'flat-pedals',
  slug: 'flat-pedals',
  url: '/blog/flat-pedals/',
  title: 'Flat Pedals: How to Choose MTB Platform Pedals',
  seoTitle: 'Flat Pedals: How to Choose MTB Platform Pedals',
  excerpt: 'Choosing flat pedals? Compare Crankbrothers Stamp 1 and orange flat pedals from $55, learn size, grip and fitting, with Park Tool torque and thread advice.',
  category: 'Buying Guides',
  date: '2026-10-27',
  readTime: '9 min',
  focus: 'flat pedals',
  secondary: ['mountain bike platform pedals', 'mtb platform pedals', 'mtb bike pedal', 'mtb pedals flat', 'mountain bike pedal'],
  tags: ['bike mtb pedals', 'mtb pedal', 'mtb cycle pedals', 'pedals for a mountain bike', 'pedals mtb', 'metal bike pedals', 'flat pedal mtb', 'mtb pedals flats', 'best platform pedals for mountain biking', 'bike pedals mtb'],
  image: {
    file: 'blog/flat-pedals.webp',
    alt: 'Crankbrothers Stamp 1 and orange flat pedals for mountain bikes',
    query: 'flat pedals',
    credit: null,
  },
  related: [
    { href: '/shop/controls-grips-and-pedals/flat-pedals-orange/', name: 'Flat Pedals Orange', price: 55, note: 'The lowest-priced flat pedals in our range.' },
    { href: '/shop/controls-grips-and-pedals/crankbrothers-pedal-stamp-1-large-gen-2-black/', name: 'Crankbrothers Pedal Stamp 1 Large GEN 2 Black', price: 84.95, note: 'The large Stamp 1 in black.' },
    { href: '/shop/controls-grips-and-pedals/crankbrothers-pedal-stamp-1-small-gen-2-orange/', name: 'Crankbrothers Pedal Stamp 1 Small GEN 2 Orange', price: 84.95, note: 'The small Stamp 1 in orange.' },
    { href: '/shop/controls-grips-and-pedals/', name: 'All controls, grips and pedals', note: 'Grips, pedals, throttles and displays.' },
  ],
  links: {
    to: [
      ['/shop/controls-grips-and-pedals/', 'controls, grips and pedals'],
      ['/blog/e-bike-grips-pedals-and-handlebar-controls/', 'e-bike grips, pedals and handlebar controls guide'],
      ['/blog/electric-mountain-bike-buying-guide/', 'electric mountain bike buying guide'],
      ['/blog/bicycle-gloves/', 'bicycle gloves buying guide'],
    ],
    from: [
      ['/shop/controls-grips-and-pedals/', 'flat pedals buying guide'],
      ['/shop/controls-grips-and-pedals/crankbrothers-pedal-stamp-1-large-gen-2-black/', 'how to choose flat pedals'],
      ['/shop/controls-grips-and-pedals/flat-pedals-orange/', 'mountain bike platform pedals: what to check'],
    ],
  },
  kind: 'post',
}

export const body = {
  hook: 'Flat pedals give you a wide, grippy platform you can step on and off in any shoe. Choose the size to match your feet, the grip to match your shoes and keep the bearings serviced.',
  intro: [
    'Flat pedals, also called platform pedals, are the simplest way to connect your feet to a mountain bike or e-bike. You do not clip in, so you can put a foot down in a hurry, ride in everyday shoes and shift your feet on rough trails. This guide helps you choose the right size, platform and pins, fit pedals correctly using Park Tool\'s advice and look after them.',
    'We compare the flat pedals in our range from $55, explain how foot size, shoes and riding style affect the choice, and cover installation, threads, servicing and common mistakes. Prices are current Torque E-Bikes prices.',
  ],
  sections: [
    {
      h: 'Flat pedals in our range and their prices',
      p: [
        'Our [controls, grips and pedals](/shop/controls-grips-and-pedals/) range includes three flat pedal options from Crankbrothers. Product pages publish the brand and price but not weight, platform dimensions or pin count, so ask us for the maker\'s specifications before you order.',
      ],
      table: {
        head: ['Pedal', 'Brand', 'Price', 'Notes'],
        rows: [
          ['[Flat Pedals Orange](/shop/controls-grips-and-pedals/flat-pedals-orange/)', 'Crankbrothers', '$55', 'Orange flat pedals'],
          ['[Crankbrothers Pedal Stamp 1 Small GEN 2 Orange](/shop/controls-grips-and-pedals/crankbrothers-pedal-stamp-1-small-gen-2-orange/)', 'Crankbrothers', '$84.95', 'Stamp 1, small size'],
          ['[Crankbrothers Pedal Stamp 1 Large GEN 2 Black](/shop/controls-grips-and-pedals/crankbrothers-pedal-stamp-1-large-gen-2-black/)', 'Crankbrothers', '$84.95', 'Stamp 1, large size'],
        ],
      },
    },
    {
      h: 'Why riders choose flat pedals for mountain biking',
      p: [
        'On a technical trail you want to be able to take a foot off and put it down without thinking. Flat pedals let you do that, and because your feet are free, you learn to ride by balance and technique rather than by pulling up on the pedals. Many riders on e-mountain bikes also choose them because the motor does the climbing, so they do not need the extra pedalling efficiency a clip-in system offers.',
        'They are also practical. You can ride in trainers or skate shoes, stop at a cafe without walking in cleats and lend your bike to a friend without adjusting anything. For commuting and trail riding, a good flat pedal is the simplest system.',
        'Clip-in pedals have a place for riders who want a fixed foot position and extra pedalling efficiency, but they take practice and are less forgiving at low speed. For most e-bike riders, flats are the easier start.',
      ],
    },
    {
      h: 'Choosing mountain bike platform pedals: size, shape and pins',
      ul: [
        '**Platform size.** A larger platform supports more of the foot and feels stable, while a smaller one is lighter and neater. Match the size to your shoe size. The Stamp 1 comes in Small and Large, so check the maker\'s size guide, which links each size to shoe sizes.',
        '**Thickness and profile.** A thin, concave platform keeps your foot closer to the axle and feels planted. A thick, flat one can feel higher and less secure.',
        '**Pins.** Metal pins grip the shoe sole. More pins and longer pins mean more grip, and also more risk of shin scrapes if you slip. Replaceable pins can be changed when they wear or bend.',
        '**Material.** Aluminium pedals last and are stiffer. Nylon or composite pedals are lighter on the wallet and softer on the shins, but may flex or wear faster.',
        '**Bearings.** Sealed bearings or bushings keep the pedal spinning smoothly. Ask the maker how they are serviced.',
        '**Colour.** Orange and black are the options in our range. Colour is a style choice, but a bright pedal is easier to spot when you clip a rock.',
      ],
      img: { file: 'blog/flat-pedals-stamp-1-small-orange.webp', alt: 'Crankbrothers Stamp 1 small GEN 2 orange mountain bike pedal', w: 720, h: 540 },
    },
    {
      h: 'Small or large: matching a flat pedal to your shoes',
      p: [
        'A pedal that is too small leaves your foot hanging off the edge, and one that is too large can catch rocks and feel clumsy. The Stamp 1 is sold in Small and Large; the maker publishes a size guide, so check which suits your shoe size. Riders on the borderline can choose by preference: a bigger platform for more support or a smaller one for clearance.',
        'Your shoes matter as much as the pedals. A flat-soled shoe with a soft, grippy rubber compound works best with pins. A hard, smooth sole slips. If you ride in everyday trainers, expect less grip than with shoes made for flat pedals, and take care in the wet.',
        'Position your foot so the ball of your foot sits over the axle. If you are not sure, ask a bike shop for help with the position.',
      ],
    },
    {
      h: 'Fitting pedals the right way: threads, grease and torque',
      p: [
        'Park Tool\'s [pedal installation and removal guide](https://www.parktool.com/en-us/blog/repair-help/pedal-installation-and-removal) explains the part most people get wrong. The right pedal has a right-hand thread and the left pedal has a left-hand thread, so you loosen the right pedal counterclockwise and the left pedal clockwise. Pedals are often stamped L or R, and if not, the thread slope rises toward the tightening direction.',
        'It says to grease the threads heavily, using Polylube or anti-seize compound, thread each pedal in by hand first, then snug it with the wrench. Park Tool targets about 360 inch-pounds of torque, roughly 30 pounds of force on a foot-long wrench. It adds that you should use a proper pedal wrench, not a cone wrench, and some pedals take an 8 mm hex fitting on the back of the axle.',
        'Cross-threading ruins the crank, so go slowly and stop if it binds. If the pedal will not start by hand, back it out and try again. Our [grips, pedals and handlebar controls guide](/blog/e-bike-grips-pedals-and-handlebar-controls/) covers the rest of the cockpit.',
      ],
    },
    {
      h: 'Servicing flat pedals and replacing pins',
      p: [
        'Pedals take a beating from water, mud and impacts. One maker, OneUp Components, advises in its [pedal service instructions](https://www.oneupcomponents.com/pages/aluminum-pedal-service-instructions) servicing its aluminium pedals every 50 hours of riding, or sooner if they stop spinning smoothly. That is for their pedals, so check the interval for yours with the maker.',
        'A basic service means removing the pedal, cleaning the old grease off the axle and bearings and re-greasing with a waterproof grease. Do not mix up parts between pedals, and expect reverse threads on some parts.',
        'Check the pins after every few rides. A bent or missing pin reduces grip and can catch your shin. If the pedal has replaceable pins, swap them as a set. Look at the platform for cracks and the axle for play, and replace the pedal if it is damaged.',
      ],
    },
    {
      h: 'Flat pedals on e-bikes and heavier bikes',
      p: [
        'An e-bike is heavier and often faster uphill, so your feet carry more load through the pedals. Choose a stout platform and check the pedal\'s rating with the maker. Check the thread size matches your crank, since most adult cranks take a standard 9/16-inch thread but not all.',
        'Pedal strikes on rocks are more likely on a bike with a motor and a low bottom bracket. A thin platform and a concave profile help, and a bright colour reminds you where the pedal sits.',
        'Our [electric mountain bike buying guide](/blog/electric-mountain-bike-buying-guide/) covers choosing the bike, and a good pair of [bicycle gloves](/blog/bicycle-gloves/) completes the cockpit.',
      ],
    },
    {
      h: 'Flat pedal mistakes to avoid',
      ul: [
        '**Mixing up left and right.** Cross-threading ruins a crank.',
        '**Skipping the grease.** Dry threads seize.',
        '**Wearing shoes with hard, smooth soles.** They slip off pins.',
        '**Buying the wrong size.** Check the shoe-size guide.',
        '**Ignoring worn pins.** They reduce grip and can bend.',
        '**Never servicing.** Bearings need grease and checks.',
      ],
    },
    {
      h: "Flat pedals or clip-in pedals: how to decide",
      p: [
        "Flat pedals suit riders who value confidence and simplicity. You can put a foot down in a heartbeat, wear any shoes and ride on a mix of trail and road without changing footwear. They are the usual choice for beginners, for commuters who stop often and for riders who like to move their feet on technical ground.",
        "Clip-in pedals lock the shoe to the pedal with a cleat. They hold your foot in place on rough descents and let you pull up as well as push down. They take practice to unclip and need special shoes, which makes them less convenient for casual riding.",
        "If you are unsure, start with flats. Many riders stay with them for good, and those who move to clip-ins often keep a flat pair on a second bike. Skill on flat pedals carries over to every other type.",
      ],
    },
    {
      h: "Shoes that work with flat pedals",
      ul: [
        "**Soft rubber soles.** A soft, sticky rubber compound grips the pins best.",
        "**Flat, stiff-enough soles.** A flat sole spreads weight across the platform. Very soft, floppy soles can feel unsupported on long rides.",
        "**No deep lugs.** Deep tread blocks can sit on top of the pins and reduce grip. A shallow, flat tread works better.",
        "**Good fit.** The shoe should hold your foot without sliding around inside.",
        "**Weather.** Wet pedals and wet soles are slippery, so slow down and take care.",
      ],
    },
    {
      h: 'Which flat pedals should you buy?',
      p: [
        'For a low-cost pedal upgrade, the [Crankbrothers flat pedals in orange at $55](/shop/controls-grips-and-pedals/flat-pedals-orange/) are the entry option. For a well-known trail pedal, choose the [Stamp 1 Small in orange at $84.95](/shop/controls-grips-and-pedals/crankbrothers-pedal-stamp-1-small-gen-2-orange/) or the [Stamp 1 Large in black at $84.95](/shop/controls-grips-and-pedals/crankbrothers-pedal-stamp-1-large-gen-2-black/), depending on your shoe size.',
        'Send us your shoe size and bike and we will help you pick. You can also browse the full [pedals, grips and controls range](/shop/controls-grips-and-pedals/).',
      ],
    },
  ],
  faq: [
    { q: 'Are flat pedals good for mountain biking?', a: 'Yes. They let you put a foot down quickly, work with everyday shoes and suit technical trails. Many e-mountain bike riders prefer them because the motor handles the climbing.' },
    { q: 'What size flat pedals do I need?', a: 'Match the platform to your shoe size. The Stamp 1 comes in Small and Large, and the maker publishes a shoe-size guide. Riders between sizes can choose by preference.' },
    { q: 'How tight should I fit my pedals?', a: 'Park Tool targets about 360 inch-pounds of torque, roughly 30 pounds of force on a foot-long wrench, after greasing the threads and starting each pedal by hand. Check your pedal maker\'s figure too.' },
    { q: 'Which way do pedal threads go?', a: 'The right pedal has a right-hand thread and the left pedal has a left-hand thread. Loosen the right pedal counterclockwise and the left clockwise. Look for L and R stamps on the axles.' },
    { q: 'How often should I service flat pedals?', a: 'It depends on the pedal. One maker advises every 50 riding hours or sooner if they stop spinning smoothly. Check your maker\'s guidance, and inspect the pins regularly.' },
    { q: 'Can I use flat pedals on an electric bike?', a: 'Yes, if the thread size matches your crank. Choose a strong platform and check the pedal\'s rating, since e-bikes are heavier. Ask us to confirm fit for your model.' },
  ],
  keywords: { primary: 'flat pedals', supporting: ['mountain bike platform pedals', 'mtb platform pedals', 'mtb bike pedal', 'mtb pedals flat', 'mountain bike pedal'] },
  words: 0,
}
