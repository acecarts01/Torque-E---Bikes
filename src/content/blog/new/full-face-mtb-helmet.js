// Blog post written to the blog-post rule (see ~/.claude/skills/blog-post/SKILL.md).
// Keywords: volume / KD / intent from Semrush AU Keyword Magic (6 Nov 2026), recorded in docs/used-keywords.csv and docs/blog-plan-batches-2026-11-06.html.
// Sources opened 6 Nov 2026: ACCC bicycle helmets mandatory standard page (applies-to, exclusions, six accepted standards); Queensland Government helmets and equipment page.
// Product facts: Hidrop Helmet per the supplier listing (ABS shell, EPS and EPP dual core, certified to ASTM F1952, ASTM F2032, EN 1078, CPSC and AS/NZ, break-away visor, double D-ring, spectacle friendly). The listing does not say "full face", so the post says to confirm the chin-bar style with us.
export const meta = {
  id: 'full-face-mtb-helmet',
  slug: 'full-face-mtb-helmet',
  url: '/blog/full-face-mtb-helmet/',
  title: 'Full Face Helmet for Mountain Biking: Standards and Fit',
  seoTitle: 'Full Face Helmet for Mountain Biking: Standards and Fit',
  excerpt: 'Need a full face helmet for mountain biking? See what the Australian standard excludes, which standards to look for, how to fit one and the Hidrop helmet at $279.',
  category: 'Buying Guides',
  date: '2026-11-06',
  readTime: '10 min',
  focus: 'full face helmet',
  secondary: ['full face mtb bike helmet', 'helmet mtb full face', 'mountain bike helmets full face', 'full face cycle helmet', 'full face bike helmet'],
  tags: ['mountain bike full face helmet', 'full face helmets mtb', 'full face bicycle helmet', 'full face helmets', 'full face', 'mtb cycle helmet', 'helmet mtb', 'mtb bike helmet', 'mtb bicycle helmet', 'mtb helmets australia'],
  image: {
    file: 'blog/full-face-mtb-helmet.webp',
    alt: 'Full face helmet for mountain biking: Hidrop helmet in shiny black with 79Bike armour and off-road goggles',
    query: 'full face helmet mountain biking',
    credit: null,
  },
  related: [
    { href: '/shop/helmets-gloves-and-protection/hidrop-helmet-shiny-black/', name: 'Hidrop Helmet (Shiny Black)', price: 279, note: 'Listed with downhill and BMX certifications.' },
    { href: '/shop/helmets-gloves-and-protection/79bike-off-road-goggles/', name: '79Bike Off-Road Goggles', price: 119, note: 'Eye protection that suits a full face helmet.' },
    { href: '/shop/helmets-gloves-and-protection/79bike-protective-armour/', name: '79Bike Protective Armour', price: 189, note: 'Body protection for faster riding.' },
    { href: '/shop/helmets-gloves-and-protection/', name: 'All helmets, gloves and protection', note: 'Helmets, goggles and armour.' },
  ],
  links: {
    to: [
      ['/shop/helmets-gloves-and-protection/', 'helmets, gloves and protection'],
      ['/shop/electric-mountain-bikes/', 'electric mountain bikes'],
      ['/blog/road-bike-helmet/', 'road bike helmet guide'],
      ['/blog/childs-helmet/', 'childs helmet guide'],
    ],
    from: [
      ['/shop/helmets-gloves-and-protection/', 'full face helmet for mountain biking'],
      ['/shop/helmets-gloves-and-protection/hidrop-helmet-shiny-black/', 'full face mtb bike helmet: what to check'],
      ['/shop/helmets-gloves-and-protection/79bike-off-road-goggles/', 'mountain bike helmets full face: goggle fit'],
    ],
  },
  kind: 'post',
}

export const body = {
  hook: 'A full face helmet adds chin and jaw protection to a mountain biking helmet. Check the label, the standards the maker lists, the fit and whether the helmet works with goggles before you buy.',
  intro: [
    'A full face helmet for mountain biking wraps the skull, the jaw and the chin, which is why downhill, enduro and e-MTB riders choose one. Falls at speed often land on the face, and an open helmet leaves the jaw and teeth exposed. A good full-face helmet is warmer and heavier than an open one, so the trade-off is protection against comfort.',
    'This guide explains when a full-face helmet is worth it, what Australian law says about helmets and downhill racing, which standards to look for on the label, how to fit one and what to wear with it. We link the helmet and protective gear in our range. Prices are in Australian dollars as listed on 6 November 2026.',
  ],
  sections: [
    {
      h: 'When you should wear a full face helmet',
      p: [
        'A full face helmet suits any riding where speed, jumps or rough ground make a face-first fall likely. That means bike parks, downhill and enduro trails, technical descents and riders on electric mountain bikes who reach higher speeds on steeper ground. Many riders wear an open helmet to climb and a full face on the way down, but with an e-MTB that climbs easily, some keep the full face on all day.',
        'If your riding is gentle, such as paths and easy fire trails, an approved open-face bicycle helmet is the baseline and is lighter and cooler. If you are unsure, think about the worst fall you could have on your usual trail and choose the helmet that matches it. Our [electric mountain bikes](/shop/electric-mountain-bikes/) range covers bikes from easy hardtails to long-travel trail bikes.',
      ],
    },
    {
      h: 'What Australian law says about mountain bike helmets',
      p: [
        'The ACCC\'s [bicycle helmets mandatory standard page](https://www.productsafety.gov.au/business/search-mandatory-standards/bicycle-helmets-mandatory-standard) says the standard applies to helmets worn when riding a bicycle, including electronic bicycles, and that it does not apply to helmets used for downhill mountain bicycle racing, helmets used for BMX competitive racing, toy helmets or motorcycle helmets. A helmet within the standard must comply with any one of six accepted standards, including AS/NZS 2063:2020, EN 1078, the US CPSC standard and ASTM F1447-18.',
        'In practice that means a full-face helmet sold for general mountain biking should carry one of the accepted standards, while a helmet made only for downhill racing may be excluded from the mandatory rule. The Queensland Government\'s [helmets and equipment page](https://www.qld.gov.au/transport/public/bicycle-riding/safety/helmets-and-equipment) tells riders to wear an approved helmet that is securely fitted and fastened on public roads and paths. If you ride on public paths to reach the trail, wear a helmet that meets the standard for the whole trip.',
      ],
    },
    {
      h: 'Standards on the label: AS/NZS, EN 1078, CPSC, ASTM F1952',
      p: [
        'You will see several codes on full face helmet labels. AS/NZS 2063 is the Australian and New Zealand bicycle helmet standard. EN 1078 is the European standard for pedal cyclists and CPSC is the US Consumer Product Safety Commission bicycle helmet standard, and the ACCC accepts both. ASTM F1952 is the US standard for helmets used in downhill mountain bicycle racing, and ASTM F2032 is the US standard for BMX helmets.',
        'A helmet that lists the downhill and BMX standards along with a general bicycle standard is aimed at aggressive riding but is also certified for general use, which is the useful combination. Read the actual sticker inside, because the box and the listing can be wrong, and ask the seller which standards the exact model and size meet.',
      ],
      table: {
        head: ['Code on the label', 'What it covers', 'Why it matters'],
        rows: [
          ['AS/NZS 2063', 'Australian and New Zealand bicycle helmets', 'Accepted by the mandatory standard'],
          ['EN 1078', 'European helmets for pedal cyclists', 'Accepted by the mandatory standard'],
          ['US CPSC', 'US bicycle helmet rule', 'Accepted by the mandatory standard'],
          ['ASTM F1952', 'Downhill mountain bike racing helmets', 'Signals a helmet built for aggressive riding'],
          ['ASTM F2032', 'BMX helmets', 'Signals a helmet built for jumps and impacts'],
        ],
      },
    },
    {
      h: 'The Hidrop helmet in our range',
      img: { file: 'blog/full-face-mtb-helmet-hidrop-helmet-shiny-black.webp', alt: 'Hidrop helmet in shiny black, listed with downhill and BMX certifications', w: 720, h: 540 },
      p: [
        'The [Hidrop Helmet in shiny black](/shop/helmets-gloves-and-protection/hidrop-helmet-shiny-black/) is $279. The supplier listing describes a tough ABS outer shell with a dual core of EPS and EPP foam, and lists certifications to ASTM F1952, ASTM F2032, EN 1078, CPSC and AS/NZ standards. It adds breathable cheek pads, a break-away visor designed to detach on impact, a double D-ring chin strap and a spectacle-friendly design.',
        'That is a strong list, but our product page publishes only the name, brand and price. The listing does not describe the chin-bar style, so message the team on WhatsApp to confirm the exact helmet style, the size range and the label on the helmet you will receive before you order. We confirm details with you before you pay.',
      ],
    },
    {
      h: 'How to size and fit a full face helmet',
      ul: [
        '**Measure your head.** Use a soft tape around the head just above the eyebrows and ears, and compare with the maker\'s size chart.',
        '**Expect a snug fit.** A full-face helmet should feel firm on the cheeks and not rock when you shake your head.',
        '**Check the chin gap.** The chin bar should clear your chin so you can breathe and speak, but not so far that the helmet rides up.',
        '**Fasten the double D-ring.** Tighten it so that you can fit only one or two fingers under the strap.',
        '**Try it with your goggles.** The goggle strap should sit comfortably over the helmet, and the visor should leave room for the goggles.',
        '**Wear it for a few minutes.** Look for pressure points and red marks.',
        '**Recheck after a few rides.** Pads compress and the fit changes.',
      ],
    },
    {
      h: 'Goggles, visors and glasses',
      img: { file: 'blog/full-face-mtb-helmet-79bike-off-road-goggles.webp', alt: '79Bike off-road goggles that suit a full face mtb bike helmet', w: 720, h: 540 },
      p: [
        'A full face helmet is designed to be used with goggles. The [79Bike Off-Road Goggles](/shop/helmets-gloves-and-protection/79bike-off-road-goggles/) are $119 and suit this kind of riding. Check that the frame sits comfortably under the visor and that the strap holds the goggles firmly against your face without pressing on the helmet\'s cheek pads.',
        'If you wear glasses, a spectacle-friendly helmet makes the fit more comfortable, and the Hidrop listing says it is designed for that. A break-away visor is a safety feature: it is meant to detach in an impact rather than transmit force to your neck. Do not replace it with a stronger one.',
      ],
    },
    {
      h: 'Body protection to wear with the helmet',
      p: [
        'A helmet protects your head, and the rest of your body needs protection too. Gloves, knee pads, elbow pads and a back or chest protector all reduce injury in a crash. In our range, the [79Bike Protective Armour](/shop/helmets-gloves-and-protection/79bike-protective-armour/) is $189, and our [helmets and protective gear guide](/blog/helmets-and-protective-gear-for-e-bikes/) explains what to wear.',
        'Match the kit to the riding. For easy trails, gloves and an open helmet may be enough. For fast descents and bike parks, add a full-face helmet, goggles, pads and armour. Children should wear sizes made for them; our [childs helmet guide](/blog/childs-helmet/) explains how to fit one.',
      ],
    },
    {
      h: 'Why e-MTB riders should think about a full face helmet',
      p: [
        'An electric mountain bike weighs more than a regular one and lets you reach steep, technical ground faster and more often. That means more descents, more time at speed and more opportunities to fall. A heavier bike also carries more momentum into a crash, so the rider is more likely to land hard.',
        'Many e-MTB riders keep an open helmet for gentle laps and put on a full-face helmet for steep or technical trails. Whichever you choose, wear it every ride, fit it properly and check that it carries an accepted standard. Our [mountain bikes for sale guide](/blog/mountain-bikes-for-sale/) compares the 48 electric mountain bikes in our range.',
      ],
    },
    {
      h: 'Ventilation, weight and comfort on long rides',
      p: [
        'A full face helmet is warmer than an open one, and Queensland summers make that matter. Look for large vents, a removable visor and moisture-wicking pads. Weight matters too: a heavier helmet tires your neck on long descents, so try the helmet on and move your head before you commit.',
        'If a full face helmet is too hot for the climb, carry it on your pack or bar and put it on at the top. Do not leave it behind on a trail you were not sure about. A helmet in your bag protects nothing, and the decision to wear it is usually made in the second before things go wrong.',
      ],
    },
    {
      h: 'Caring for a full face helmet',
      ul: [
        '**Replace it after any significant impact.** The foam is designed to crush once, and damage may not show.',
        '**Keep it out of hot cars and direct sun.** Heat can weaken the foam and the glues.',
        '**Clean it gently.** Use mild soap and water, and dry it in the shade.',
        '**Inspect the straps, buckle and pads.** Replace worn parts or the whole helmet.',
        '**Do not modify it.** Stickers, paint and added mounts can weaken the shell.',
      ],
    },
    {
      h: 'Mistakes to avoid when buying a full face helmet',
      ul: [
        '**Buying an unlabelled helmet.** No label means no assurance.',
        '**Choosing on looks over fit.** A loose helmet shifts in a fall.',
        '**Ignoring the goggles.** Check they fit before you commit.',
        '**Assuming downhill certification replaces the road rule.** Check the label for an accepted bicycle standard if you ride on public paths.',
        '**Reusing a helmet after a crash.** Replace it.',
      ],
    },
  ],
  faq: [
    { q: 'Do I need a full face helmet for mountain biking?', a: 'Not for easy trails, where an approved open-face bicycle helmet is the baseline. A full-face helmet is worth it for bike parks, downhill and enduro riding and fast descents, where a face-first fall is more likely and the jaw needs protection.' },
    { q: 'What standards should a full face mountain bike helmet have?', a: 'Look for an accepted bicycle standard such as AS/NZS 2063, EN 1078 or US CPSC, and for ASTM F1952 if the helmet is built for downhill riding. The ACCC lists six accepted standards, and the label inside the helmet should name the ones it meets.' },
    { q: 'Is a downhill racing helmet covered by the Australian mandatory standard?', a: 'The ACCC says the mandatory bicycle helmet standard does not apply to helmets used for downhill mountain bicycle racing, BMX competitive racing, toy helmets or motorcycle helmets. If you ride on public paths, wear a helmet that carries an accepted bicycle standard.' },
    { q: 'What does the Hidrop helmet come with?', a: 'The supplier lists an ABS shell with EPS and EPP foam, certifications to ASTM F1952, ASTM F2032, EN 1078, CPSC and AS/NZ, a break-away visor, cheek pads and a double D-ring strap. It is $279 here. Message us to confirm size and style before you order.' },
    { q: 'Can I wear glasses with a full-face helmet?', a: 'Often yes if the helmet is designed for it. The Hidrop listing says it is spectacle friendly. Try the helmet on with your glasses or goggles, and make sure the visor and cheek pads do not push the frames into your face.' },
  ],
  keywords: { primary: 'full face helmet', supporting: ['full face mtb bike helmet', 'helmet mtb full face', 'mountain bike helmets full face', 'full face cycle helmet', 'full face bike helmet'] },
  words: 0,
}
