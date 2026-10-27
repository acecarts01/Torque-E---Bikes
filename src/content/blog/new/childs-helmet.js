// Blog post written to the blog-post rule (see ~/.claude/skills/blog-post/SKILL.md).
// Keywords: volume / KD / intent from Semrush AU Keyword Magic (27 Oct 2026), recorded in docs/used-keywords.csv.
// Sources opened 27 Oct 2026: Queensland Government bicycle road rules page (approved helmet, AS/NZS 2063 sticker, child in a trailer) and the ACCC bicycle helmets mandatory standard page (opened in a browser on 27 Oct 2026).
// Only one kids helmet is stocked, so the post links it plus two kids e-bikes; product pages publish no sizes, so the post claims only names, brands and prices.
export const meta = {
  id: 'childs-helmet',
  slug: 'childs-helmet',
  url: '/blog/childs-helmet/',
  title: 'Childs Helmet: How to Choose a Kids Bike Helmet in Australia',
  seoTitle: 'Childs Helmet: How to Choose a Kids Bike Helmet in Australia',
  excerpt: 'Choosing a childs helmet? See how to fit a kids bike helmet, what the mandatory standard and Queensland rules say, and the Abus Smiley 3.0 Ace LED at $109.',
  category: 'Buying Guides',
  date: '2026-10-27',
  readTime: '9 min',
  focus: 'childs helmet',
  secondary: ['kids bike helmets', 'childrens mountain bike helmet', 'bike helmet kids', 'childrens bike helmets', 'girls bike helmet'],
  tags: ['kids mountain bike helmet', 'boys bike helmet', 'kids bicycle helmet', 'bike helmets for kids', 'kids helmet bike', 'childs mtb helmet', 'youth bicycle helmet', 'childrens bike helmet', 'youth bike helmet', 'bike helmet junior'],
  image: {
    file: 'blog/childs-helmet.webp',
    alt: 'Abus Smiley 3.0 Ace LED childs helmet in royal blue with kids e-bikes',
    query: 'childs helmet',
    credit: null,
  },
  related: [
    { href: '/shop/helmets-gloves-and-protection/abus-smiley-3-0-ace-led-kids-helmet-royal-blue/', name: 'Abus Smiley 3.0 Ace LED Kids Helmet Royal Blue', price: 109, note: 'A kids helmet with a built-in LED light.' },
    { href: '/shop/kids-and-youth-e-bikes/velectrix-hurricane-24-kids-e-bike/', name: 'VelectriX Hurricane 24\" Kids E-Bike', price: 949, note: 'A kids e-bike to pair with a helmet.' },
    { href: '/shop/kids-and-youth-e-bikes/ace-s-19-youth-electric-bike/', name: 'ACE-S 19 Youth Electric Bike', price: 1299, note: 'A youth e-bike to pair with a helmet.' },
    { href: '/shop/helmets-gloves-and-protection/', name: 'All helmets, gloves and protection', note: 'Helmets, gloves, goggles and armour.' },
  ],
  links: {
    to: [
      ['/shop/helmets-gloves-and-protection/', 'helmets, gloves and protection'],
      ['/blog/helmets-and-protective-gear-for-e-bikes/', 'helmets and protective gear guide'],
      ['/blog/childs-electric-bike/', 'childs electric bike guide'],
      ['/blog/kids-electric-dirt-bikes/', 'kids electric dirt bikes guide'],
    ],
    from: [
      ['/shop/helmets-gloves-and-protection/', 'childs helmet buying guide'],
      ['/shop/helmets-gloves-and-protection/abus-smiley-3-0-ace-led-kids-helmet-royal-blue/', 'how to choose a childs helmet'],
      ['/shop/kids-and-youth-e-bikes/', 'kids bike helmets: what to check'],
    ],
  },
  kind: 'post',
}

export const body = {
  hook: 'A childs helmet protects only when it is an approved model, the right size, level on the head and fastened every time. Check the label, fit it properly and replace it after a knock.',
  intro: [
    'A childs helmet is the most important piece of gear for a young rider on a scooter, bike or e-bike. It also has to be the right one: an approved helmet, sized to the child\'s head, adjusted properly and worn on every ride. This guide explains how to choose and fit a kids bike helmet, what the Australian mandatory standard and the Queensland rules say and how to look after a helmet.',
    'We cover the Abus Smiley 3.0 Ace LED kids helmet in our range at $109, a fitting routine you can do at home, the signs it is time to replace a helmet and the questions parents ask most. Prices are current Torque E-Bikes prices.',
  ],
  sections: [
    {
      h: 'Childs helmet in our range and kids bikes to pair it with',
      p: [
        'Our [helmets, gloves and protection](/shop/helmets-gloves-and-protection/) range includes a kids helmet with a built-in LED. Product pages publish the brand and price but not sizes, so ask us for the size range before you order. Buy the helmet when you buy the bike, and choose the bike with our [childs electric bike guide](/blog/childs-electric-bike/).',
      ],
      table: {
        head: ['Product', 'Price', 'Notes'],
        rows: [
          ['[Abus Smiley 3.0 Ace LED Kids Helmet Royal Blue](/shop/helmets-gloves-and-protection/abus-smiley-3-0-ace-led-kids-helmet-royal-blue/)', '$109', 'Kids helmet with LED'],
          ['[VelectriX Hurricane 24" Kids E-Bike](/shop/kids-and-youth-e-bikes/velectrix-hurricane-24-kids-e-bike/)', '$949', 'Kids e-bike'],
          ['[ACE-S 19 Youth Electric Bike](/shop/kids-and-youth-e-bikes/ace-s-19-youth-electric-bike/)', '$1,299', 'Youth e-bike'],
        ],
      },
    },
    {
      h: 'What makes a kids bike helmet safe: the Australian standard',
      p: [
        'The ACCC\'s [bicycle helmets mandatory standard page](https://www.productsafety.gov.au/business/search-mandatory-standards/bicycle-helmets-mandatory-standard) explains that helmets worn when riding a bicycle, including an electronic bicycle, must meet the mandatory standard when supplied in Australia. It also says the standard does not apply to motorcycle helmets or toy helmets, so a child\'s costume or toy helmet is not a bicycle helmet.',
        'The Queensland Government\'s [bicycle road rules page](https://www.qld.gov.au/transport/safety/rules/wheeled-devices/bicycle) says riders must wear an approved bicycle or motorbike helmet that is securely fitted and fastened. It says to look for a sticker showing the helmet meets a listed standard such as AS/NZS 2063, and that any passenger must also wear an approved helmet. Check the label inside every helmet you buy, new or second-hand.',
        'State and territory road laws specify the type of helmet allowed on public roads, so check your own road authority. Our [helmets and protective gear guide](/blog/helmets-and-protective-gear-for-e-bikes/) covers adult helmets and other protective gear.',
      ],
    },
    {
      h: 'Sizing a kids bike helmet: measure, try and adjust',
      p: [
        'Do not buy a helmet for the child to grow into. A loose helmet shifts in a fall and leaves the forehead or the back of the head exposed. Measure and try before you buy:',
      ],
      ul: [
        '**Measure the head.** Use a soft tape around the head, just above the eyebrows and ears. Compare with the maker\'s size chart.',
        '**Check the size range.** Kids helmets come in sizes such as small and medium, and many have a dial or sizing pads to fine-tune the fit.',
        '**Try it on.** The helmet should sit level, low on the forehead, about two finger-widths above the eyebrows, and not tilt back.',
        '**Test the shake.** With the straps loose, the helmet should feel snug and not slide when the child shakes their head.',
        '**Check the side straps.** They should form a V under each ear and meet just below the ear.',
        '**Check the chin strap.** When fastened, you should fit one or two fingers between the strap and the chin, no more.',
        '**Look for pressure points.** Ask the child to wear it for a few minutes and check for red marks.',
      ],
      img: { file: 'blog/childs-helmet-abus-smiley.webp', alt: 'Abus Smiley 3.0 Ace LED kids helmet in royal blue', w: 720, h: 540 },
    },
    {
      h: 'Kids mountain bike helmets, youth sizes and boys and girls styles',
      p: [
        '**Kids mountain bike helmets** usually have more rear coverage and a peak. They suit off-road riding, but a road-style kids helmet is fine for paths and streets. Choose the style that suits where your child rides, and check that it carries the right standard label.',
        '**Youth bicycle helmets** are for older kids whose heads are between kids and adult sizes. Check the size chart rather than the age on the box, because heads vary.',
        '**Boys and girls helmets** differ in colour and graphics, not in protection. Colour and character designs help children wear their helmet without a fuss, so let them choose from the approved range.',
        '**Electric bikes and fast riding.** A child on a youth e-bike travels faster, so choose a helmet with good coverage and check that it carries the right label. Our [kids electric dirt bikes guide](/blog/kids-electric-dirt-bikes/) covers off-road riding gear.',
      ],
    },
    {
      h: 'Features worth paying for: LED lights, visors and ventilation',
      ul: [
        '**Built-in LED.** The Abus Smiley 3.0 Ace in our range carries an LED, which helps other road users see a child at dusk. It is an extra, not a substitute for bike lights and reflectors.',
        '**Adjustment system.** A rear dial makes it quick to adjust the fit as the child grows or changes hair length.',
        '**Ventilation.** Vents keep a child cooler, which matters in an Australian summer and means they leave the helmet on.',
        '**Visor.** A small peak shades the eyes and helps in light rain.',
        '**Weight.** A lighter helmet is more comfortable for small necks.',
        '**Easy buckles.** Look for a buckle a child can handle with a little practice, and one that does not pinch the skin.',
      ],
    },
    {
      h: 'Helmets, kids in trailers and passengers',
      p: [
        'The Queensland bicycle road rules page says you can tow a child in a bicycle trailer if you are 16 or older, the child is under 10 and wears an approved helmet that is securely fitted and fastened, and the trailer can safely carry the child. It also says any passenger on a bicycle must wear an approved helmet. If a child rides as a passenger, the bike must have been made to carry one, which is the rule in the Queensland [electric bicycle rules](https://www.qld.gov.au/transport/safety/rules/wheeled-devices/electric-bicycle-rules) as well.',
        'Our [bicycle trailers guide](/blog/bicycle-trailers/) covers carrying children and cargo behind a bike.',
      ],
    },
    {
      h: 'When to replace a childs helmet',
      ul: [
        '**After a significant impact.** A helmet that has taken a knock may be damaged inside even if it looks fine. Replace it.',
        '**When it no longer fits.** A child grows quickly, so re-check every few months.',
        '**When the shell is cracked or the foam is crushed.** Look and feel for dents.',
        '**When straps are frayed or the buckle is damaged.** The retention system must work.',
        '**When it is old and worn.** Check the manufacturer\'s guidance on replacement.',
        '**When it is second-hand with an unknown history.** You cannot tell whether it has been in a crash.',
      ],
    },
    {
      h: 'Looking after a kids bike helmet',
      p: [
        'Clean it with mild soap and water and let it air dry. Avoid solvents, stickers that might attack the shell and hot places such as a car parcel shelf in summer. Do not hang it by the straps on a hook where it can drop.',
        'Store it in a cool, dry spot and teach the child to put it on straight and fasten it every time, before the bike moves. A helmet in the bag does nothing.',
      ],
    },
    {
      h: 'Kids helmet mistakes to avoid',
      ul: [
        '**Buying a helmet to grow into.** It must fit now.',
        '**Wearing it tilted back.** The forehead must be covered.',
        '**Leaving the straps loose.** Adjust them each time.',
        '**Using a toy or skate helmet for a bike.** Check the standard label.',
        '**Passing on a crashed helmet.** Replace it.',
        '**Skipping it for a short ride.** Most falls happen close to home.',
      ],
    },
    {
      h: "Teaching children to wear a helmet every ride",
      p: [
        "Children copy what they see, so wear your own helmet whenever you ride. Make it part of getting ready: shoes on, helmet on, straps checked, then the bike comes out. If the helmet is always the first step, it stops being a negotiation.",
        "Let your child help choose it. A helmet in a colour or design they like is more likely to be worn, and the approved range includes many designs. Praise them for fastening it properly and show them how to check the fit in a mirror.",
        "Explain why in simple words. A helmet protects the head if they fall, just like a seatbelt in the car. For older children, point out that professional riders wear them. Be consistent: no helmet, no ride.",
      ],
    },
    {
      h: "A five-minute helmet fit check you can do at home",
      ul: [
        "Put the helmet on the child with the straps undone and check it sits level, with the front low on the forehead.",
        "Tighten the dial or add the sizing pads until it feels snug and does not move when the head shakes.",
        "Adjust the side straps so they form a V under each ear.",
        "Fasten the chin strap and check you can fit only one or two fingers underneath.",
        "Ask the child to look up and down and shake their head. The helmet should stay put.",
        "Check again after a few weeks, because hair, growth and use all change the fit.",
      ],
    },
    {
      h: 'Which childs helmet should you buy?',
      p: [
        'In our range, the [Abus Smiley 3.0 Ace LED kids helmet in royal blue at $109](/shop/helmets-gloves-and-protection/abus-smiley-3-0-ace-led-kids-helmet-royal-blue/) is the kids helmet, with an LED for visibility. Ask us for the size range and send your child\'s head measurement, and we will help you check the fit.',
        'If you are buying a bike as well, look at the [Velectrix Hurricane 24 kids e-bike](/shop/kids-and-youth-e-bikes/velectrix-hurricane-24-kids-e-bike/) or the [Ace S 19 youth electric bike](/shop/kids-and-youth-e-bikes/ace-s-19-youth-electric-bike/). You can browse the full [helmets, gloves and protection range](/shop/helmets-gloves-and-protection/) too.',
      ],
    },
  ],
  faq: [
    { q: 'What helmet standard does a kids bike helmet need in Australia?', a: 'The ACCC says helmets worn when riding a bicycle must meet the mandatory standard when supplied. Queensland says to look for a sticker showing the helmet meets a listed standard such as AS/NZS 2063. Check the label inside.' },
    { q: 'How should a childs helmet fit?', a: 'Level on the head, about two finger-widths above the eyebrows, snug without being tight, with straps forming a V under the ears and room for one or two fingers under the chin strap.' },
    { q: 'Can my child wear a second-hand helmet?', a: 'Only if you know its history and it carries the right standard label. A helmet that has been in a crash may be damaged inside, so replace it. A new one avoids the doubt.' },
    { q: 'When should I replace my child\'s helmet?', a: 'After any significant impact, when it no longer fits, when the shell or foam is damaged or when straps and buckles wear. Check the maker\'s guidance on age.' },
    { q: 'Does my child need a helmet in a bike trailer?', a: 'Queensland says a child towed in a bicycle trailer must be under 10 and wear an approved helmet that is securely fitted and fastened, and the rider must be 16 or older.' },
    { q: 'Is an LED on a kids helmet enough as a bike light?', a: 'No. An LED helps visibility, but the bike needs its own white front light, red rear light and reflector at night. Use the LED as an extra.' },
  ],
  keywords: { primary: 'childs helmet', supporting: ['kids bike helmets', 'childrens mountain bike helmet', 'bike helmet kids', 'childrens bike helmets', 'girls bike helmet'] },
  words: 0,
}
