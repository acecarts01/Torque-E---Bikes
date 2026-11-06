// Blog post written to the blog-post rule (see ~/.claude/skills/blog-post/SKILL.md).
// Keywords: volume / KD / intent from Semrush AU Keyword Magic (6 Nov 2026), recorded in docs/used-keywords.csv and docs/blog-plan-batches-2026-11-06.html.
// Sources opened 6 Nov 2026: Queensland Government motorcycle safety gear page (AS/NZS 1698 or ECE 22.05 / 22.06 helmets incl. quad bikes and off-road vehicles; visors and goggles AS 1609; gloves, boots, back protection); ACCC bicycle helmets mandatory standard page (excludes motorcycle helmets and downhill racing helmets).
// The Hidrop helmet is listed by its supplier with bicycle-related certifications (ASTM F1952, F2032, EN 1078, CPSC, AS/NZ), not a motorcycle standard, so the post does not present it as a motocross helmet. We do not stock motocross helmets, gloves or boots.
export const meta = {
  id: 'dirt-bike-helmet',
  slug: 'dirt-bike-helmet',
  url: '/blog/dirt-bike-helmet/',
  title: 'Dirt Bike Helmets: How to Choose a Motocross Helmet',
  seoTitle: 'Dirt Bike Helmets: How to Choose a Motocross Helmet',
  excerpt: 'Choosing dirt bike helmets? See which standards apply in Queensland, how to fit a motocross helmet, why a bicycle helmet is not the same and the gear we stock.',
  category: 'Buying Guides',
  date: '2026-11-06',
  readTime: '9 min',
  focus: 'dirt bike helmets',
  secondary: ['helmets motorcycle helmets', 'dirt bike helmet', 'dirtbike helmet', 'motocross motorcycle helmets', 'motocross helmet'],
  tags: ['helm mx', 'motocross helmets', 'motor bike helmet', 'moto helmets australia', 'helmets motorcycle', 'dirtbike helmets', 'mx helmet', 'mx helmets', 'motor bike helmets', 'moto helmet'],
  image: {
    file: 'blog/dirt-bike-helmet.webp',
    alt: 'Dirt bike helmets guide: 79Bike protective armour, riding apparel set and off-road goggles to wear with a motocross helmet',
    query: 'dirt bike helmets',
    credit: null,
  },
  related: [
    { href: '/shop/helmets-gloves-and-protection/79bike-off-road-goggles/', name: '79Bike Off-Road Goggles', price: 119, note: 'Goggles for a motocross helmet.' },
    { href: '/shop/helmets-gloves-and-protection/79bike-protective-armour/', name: '79Bike Protective Armour', price: 189, note: 'Body protection for faster riding.' },
    { href: '/shop/helmets-gloves-and-protection/79bike-quick-dry-riding-apparel-set/', name: '79Bike Quick-Dry Riding Apparel Set', price: 179, note: 'A riding apparel set.' },
    { href: '/shop/helmets-gloves-and-protection/hidrop-helmet-shiny-black/', name: 'Hidrop Helmet (Shiny Black)', price: 279, note: 'A bicycle-certified helmet, not a motocross helmet.' },
    { href: '/shop/helmets-gloves-and-protection/', name: 'All helmets, gloves and protection', note: 'Helmets, goggles and armour.' },
  ],
  links: {
    to: [
      ['/shop/helmets-gloves-and-protection/', 'helmets, gloves and protection'],
      ['/shop/electric-dirt-bikes/', 'electric dirt bikes'],
      ['/blog/dirt-bikes-for-sale/', 'dirt bikes for sale'],
      ['/blog/helmets-and-protective-gear-for-e-bikes/', 'helmets and protective gear guide'],
    ],
    from: [
      ['/shop/helmets-gloves-and-protection/', 'dirt bike helmets'],
      ['/shop/helmets-gloves-and-protection/79bike-off-road-goggles/', 'dirt bike helmet: goggle fit'],
      ['/shop/electric-dirt-bikes/sur-ron-light-bee-x/', 'motocross helmet: what to wear'],
    ],
  },
  kind: 'post',
}

export const body = {
  hook: 'For an electric dirt bike, wear a motocross helmet that meets a motorcycle standard, not a bicycle helmet. Queensland points to AS/NZS 1698 or ECE 22.05 and 22.06, so check the label, fit it snug and add goggles and body protection.',
  intro: [
    'Dirt bike helmets are not bicycle helmets, and the difference matters. A dirt bike, including an electric one, is a motorcycle-class machine that can reach much higher speeds than a pedal bike, and the helmet has to be built and tested for that. A motocross helmet adds a chin bar, a peak and a stronger shell, and it carries a motorcycle standard on the label.',
    'This guide explains what Queensland says about helmet standards, how motocross, open-face and adventure helmets differ, how to fit one, what to wear with it and what we stock. We sell electric dirt bikes for off-road and private property use, and we are honest that we do not stock motocross helmets. Prices are in Australian dollars as listed on 6 November 2026.',
  ],
  sections: [
    {
      h: 'Which standard should dirt bike helmets meet?',
      p: [
        'The Queensland Government\'s [motorcycle safety gear page](https://www.qld.gov.au/transport/safety/road-safety/motorcycle-safety/safety-gear) says riders and passengers on a motorcycle, quad bike or utility off-road vehicle must wear a helmet that complies with the Australian standards AS/NZS 1698 or AS 1698, and it also accepts the UN ECE standard, ECE 22.05 or 22.06, when riding. The rule is written for road use, but it names off-road vehicles too, and it is the sensible baseline for any dirt bike helmet.',
        'Our electric dirt bikes are sold for off-road and private property use only. On your own land the road rules may not apply, but the physics do, so buy a helmet that meets a motorcycle standard. Look for the sticker or label and keep the proof of the standard with the helmet.',
      ],
    },
    {
      h: 'Bicycle helmet versus motocross helmet',
      img: { file: 'blog/dirt-bike-helmet-hidrop-helmet-shiny-black.webp', alt: 'Hidrop helmet certified to bicycle standards, not a motocross helmet', w: 720, h: 540 },
      p: [
        'The ACCC\'s [bicycle helmets mandatory standard page](https://www.productsafety.gov.au/business/search-mandatory-standards/bicycle-helmets-mandatory-standard) says the standard does not apply to motorcycle helmets or to helmets used for downhill mountain bicycle racing. Bicycle helmets are tested for bicycle speeds, so they are not a substitute for a motorcycle helmet on a motorised bike, even a light electric one.',
        'That includes our own Hidrop Helmet at $279. The supplier lists certifications to ASTM F1952, ASTM F2032, EN 1078, CPSC and AS/NZ standards, which are bicycle-related, so it suits mountain biking and e-bike riding, and we do not recommend it as a motocross helmet. Our [full face helmet guide](/blog/full-face-mtb-helmet/) covers it in that role.',
      ],
      table: {
        head: ['Helmet', 'Standards to look for', 'Best for', 'Do not use for'],
        rows: [
          ['Motocross helmet', 'AS/NZS 1698 or ECE 22.05 / 22.06', 'Electric dirt bikes, motocross, off-road riding', 'Nothing in this guide; it is the right helmet'],
          ['Full-face bicycle helmet', 'AS/NZS 2063, EN 1078, CPSC, ASTM F1952', 'Mountain biking and e-bikes', 'Dirt bikes and motorcycles'],
          ['Open-face bicycle helmet', 'AS/NZS 2063, EN 1078, CPSC', 'Commuting and trail riding', 'Dirt bikes and motorcycles'],
        ],
      },
    },
    {
      h: 'Types of motocross helmet and what they offer',
      p: [
        'A classic motocross helmet has a full chin bar, a peak that shades the eyes and sheds roost and a large eye port for goggles. Vents keep air moving, and the shell is shaped for riding in a crouched position. An adventure helmet adds a visor and a wider field of view for mixed riding, and an open-face helmet gives less protection and is not what we would suggest for fast off-road riding.',
        'For an electric dirt bike, a motocross-style full-face helmet is the usual choice because it protects the chin and jaw, which take many of the hits in a fall. Electric bikes are quiet and accelerate hard, so riders often go faster than they expect. Choose the helmet for the speed, not for the bike\'s size.',
      ],
    },
    {
      h: 'How to size and fit a dirt bike helmet',
      ul: [
        '**Measure your head.** Use a soft tape around the head above the eyebrows and ears, and compare with the maker\'s size chart.',
        '**Expect a snug fit.** A motocross helmet should feel firm on the cheeks and not rock when you shake your head.',
        '**Check the chin bar.** It should clear your chin so you can breathe and speak.',
        '**Fasten the strap.** Use the double D-ring or buckle so only a finger or two fits under the strap.',
        '**Try it with goggles.** The strap should sit over the helmet, and the eye port should leave room for the frame.',
        '**Wear it for a few minutes.** Look for pressure points and red marks.',
        '**Recheck as it breaks in.** Pads compress and the fit changes.',
      ],
    },
    {
      h: 'Goggles, visors and eye protection',
      img: { file: 'blog/dirt-bike-helmet-79bike-off-road-goggles.webp', alt: '79Bike off-road goggles to wear with dirt bike helmets', w: 720, h: 540 },
      p: [
        'The Queensland page advises using a clear visor or goggles at night and making sure they are shatterproof without scratches. It adds that if your helmet meets an Australian standard, your visor or goggles must be approved to the Australian Standard AS 1609. Check the label on any eye protection you buy to wear with a motorcycle helmet.',
        'In our range, the [79Bike Off-Road Goggles](/shop/helmets-gloves-and-protection/79bike-off-road-goggles/) are $119. The product page publishes the name and price only, so confirm the lens details and any standard marking with us before you order, and check they fit your helmet.',
      ],
    },
    {
      h: 'The rest of the kit: gloves, boots and body protection',
      p: [
        'The Queensland page lists the rest of the kit: gauntlet-style gloves with a strengthened palm and knuckle protection, leather boots with zip or hook-and-loop fastenings, abrasion-resistant jackets and pants secured at the wrists, waist and ankles, and back and kidney protection, with dual-density foam recommended for the spine. That is road-rider advice, and it applies equally to off-road riding.',
        'In our range, the [79Bike Protective Armour](/shop/helmets-gloves-and-protection/79bike-protective-armour/) is $189 and the [79Bike Quick-Dry Riding Apparel Set](/shop/helmets-gloves-and-protection/79bike-quick-dry-riding-apparel-set/) is $179. We do not stock motocross gloves or boots, so buy those from a motorcycle gear supplier and check the fit.',
      ],
    },
    {
      h: 'What an electric dirt bike changes about helmet choice',
      p: [
        'An electric dirt bike is quiet, so you hear less of the bike and more of everything around you, and the instant torque can surprise a new rider. Neither changes the helmet standard, but they change how you use it. A well-fitting helmet with good ventilation keeps you comfortable on a long session, and a quiet bike means you can hear shouts and other riders better if the helmet does not muffle sound too much.',
        'Electric bikes also tempt riders into faster, longer sessions because there is no fuel to run out of, only a battery. Take breaks, drink water and let the helmet air out. Heat builds quickly inside a full-face helmet in a Queensland summer, so ride early or late and stop when you feel dizzy or overheated.',
      ],
    },
    {
      h: 'Ventilation, weight and comfort on hot days',
      p: [
        'A heavier helmet tires your neck on long sessions, and a poorly ventilated one is miserable in the heat. Look for large vents at the front and extraction at the rear, a removable liner you can wash and a weight you can live with. Try the helmet on and move your head up and down as you would in the riding position, and think about how it will feel after an hour, not a minute.',
        'Replace worn pads, which compress and let the helmet loosen, and keep a second liner if you ride often. A clean, dry liner is more comfortable and lasts longer. Our [helmets and protective gear guide](/blog/helmets-and-protective-gear-for-e-bikes/) compares the wider range of protective gear.',
      ],
    },
    {
      h: 'Checklist before you buy dirt bike helmets',
      ul: [
        '**Standard label.** AS/NZS 1698 or ECE 22.05 or 22.06 on a sticker inside.',
        '**Head measurement and size chart.** Choose the size for your head shape.',
        '**Try it with goggles.** Make sure the eye port and strap work together.',
        '**Ventilation and weight.** Think about a long session in summer.',
        '**Condition and age.** Never buy a used helmet of unknown history.',
        '**Return and fit advice.** Ask about sizing help before you order online.',
      ],
    },
    {
      h: 'Dirt bike helmets for kids',
      p: [
        'Children need a helmet that fits their head now, with the right standard and a proper chin bar. A helmet that is too large moves in a fall, and a bicycle helmet is not the right choice for a motorised bike. Supervise young riders at all times, keep them in a safe, enclosed area and match the bike to the child; our [dirt bikes for sale guide](/blog/dirt-bikes-for-sale/) explains sizing.',
        'For general head-fitting advice, see our [childs helmet guide](/blog/childs-helmet/). When in doubt about a youth motocross helmet, ask a motorcycle gear specialist to fit it, and check the size range and standard on the label before you buy.',
      ],
    },
    {
      h: 'Caring for a dirt bike helmet',
      ul: [
        '**Replace it after any significant impact.** The foam is designed to crush once, and damage may not show.',
        '**Keep it out of hot cars and direct sun.** Heat weakens the foam and glues.',
        '**Clean it gently.** Mild soap and water, and dry it in the shade.',
        '**Inspect the strap, buckle and pads.** Replace worn parts or the helmet.',
        '**Do not modify it.** Stickers, paint and mounts can weaken the shell.',
      ],
    },
    {
      h: 'Mistakes to avoid when buying a motocross helmet',
      ul: [
        '**Using a bicycle helmet on a dirt bike.** It is not designed for motorised speeds.',
        '**Buying an unlabelled helmet.** No label means no assurance.',
        '**Choosing on graphics over fit.** A loose helmet shifts in a fall.',
        '**Ignoring the goggles.** Check they fit and are shatterproof.',
        '**Reusing a helmet after a crash.** Replace it.',
      ],
    },
  ],
  faq: [
    { q: 'What standard should a dirt bike helmet meet?', a: 'The Queensland Government says riders of motorcycles, quad bikes and off-road vehicles must wear a helmet complying with AS/NZS 1698 or AS 1698, and accepts ECE 22.05 or 22.06. Look for the label inside the helmet, and keep it with the helmet.' },
    { q: 'Can I wear a bicycle helmet on an electric dirt bike?', a: 'No. Bicycle helmets are tested for bicycle speeds, and the ACCC says the bicycle helmet standard does not apply to motorcycle helmets. Wear a motocross helmet that meets a motorcycle standard on any electric dirt bike.' },
    { q: 'Do you sell motocross helmets?', a: 'No. We stock the Hidrop bicycle-certified helmet, off-road goggles, protective armour and a riding apparel set, but not motocross helmets, gloves or boots. Buy a motocross helmet from a motorcycle gear supplier and check the standard and fit.' },
    { q: 'Do I need goggles with a dirt bike helmet?', a: 'Yes, for a motocross helmet with an open eye port. Queensland advises shatterproof, scratch-free eye protection and says goggles must be approved to AS 1609 if the helmet meets an Australian standard. Check the label and the fit with the helmet.' },
    { q: 'When should I replace a dirt bike helmet?', a: 'After any significant impact, when the shell or foam is damaged, when the strap or buckle wears and when it no longer fits. A helmet that has taken a knock can be damaged inside even if it looks fine.' },
  ],
  keywords: { primary: 'dirt bike helmets', supporting: ['helmets motorcycle helmets', 'dirt bike helmet', 'dirtbike helmet', 'motocross motorcycle helmets', 'motocross helmet'] },
  words: 0,
}
