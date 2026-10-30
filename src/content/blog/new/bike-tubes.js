// Blog post written to the blog-post rule (see ~/.claude/skills/blog-post/SKILL.md).
// Keywords: volume / KD / intent from Semrush AU Keyword Magic (29 Oct 2026), KD 28 or lower, recorded in docs/used-keywords.csv.
// "cycle tube" (1.3K) has the highest volume but is an awkward phrase for a title, so "bike tubes" (1.0K) leads and "cycle tube" is the first secondary. "mtb tube" is left unused.
// Topic source: competitor parts blogs (Ampd Bros "ebike parts Australia: tyres, batteries and accessories in stock", 99 Bikes tools and maintenance). Our existing tyres and tubes guide covers e-bike tyres; this post targets the tube-size searches.
// Competitor review 29 Oct 2026 (retailer category pages and Park Tool): weaknesses are lists of tubes with no sizing method, no valve-hole matching, no warning that a tube that is too narrow thins and punctures, no fat-tyre and e-bike notes, no link between sizes and the wheels we stock. Plan: Park Tool fit rules, a sizing walk-through, valve and rim-depth table, items we stock.
// Sources opened 29 Oct 2026: Park Tool "Tire, Wheel and Inner Tube Fit Standards" (ETRTO bead seat diameter, tube width, Schrader about 8 mm and Presta about 6 mm, 60 mm and 80 mm stems for deep rims), Park Tool "Tire and Tube Removal and Installation" (levers, pinching, inspection, inflate and check with a gauge).
// Product pages publish only names and prices. The 79Bike inner tube is for 79Bike wheels and is listed off-road and private property use only; the post does not claim its size.
export const meta = {
  id: 'bike-tubes',
  slug: 'bike-tubes',
  url: '/blog/bike-tubes/',
  title: 'Bike Tubes: How to Choose the Right Inner Tube Size',
  seoTitle: 'Bike Tubes: How to Choose the Right Inner Tube Size',
  excerpt: "Buying bike tubes? Learn to read tyre sizes, match the valve to your rim, choose width and length, and see the 79Bike inner tube at $38.95.",
  category: 'Buying Guides',
  date: '2026-10-29',
  readTime: '10 min',
  focus: 'bike tubes',
  secondary: ['cycle tube', 'bike inner tube', 'bike tyre tube', 'bicycle tube', 'bike inner tubes'],
  tags: ['bicycle tyre tube', 'inner tubes', 'inner tube bike', 'bikes inner tube', 'bike tyre tubes', 'bicycle inner tubes', 'tubes bicycle', 'bike tire tube', 'inner tube for a bicycle', 'inner tubing bike'],
  image: {
    file: 'blog/bike-tubes.webp',
    alt: '79Bike inner tube, 79Bike tyre and Lezyne lever kit, bike tubes and tools for a tyre change',
    query: 'bike tubes',
    credit: null,
  },
  related: [
    { href: '/shop/wheels-tyres-and-tubes/79bike-inner-tube/', name: '79Bike Inner Tube', price: 38.95, note: 'A spare tube for 79Bike wheels.' },
    { href: '/shop/wheels-tyres-and-tubes/79bike-tyre/', name: '79Bike Tyre', price: 179, note: 'A replacement tyre.' },
    { href: '/shop/care-tools-and-hydration/lezyne-lever-kit-light-grey/', name: 'Lezyne Lever Kit Light Grey', price: 18.95, note: 'Levers for the tyre change.' },
    { href: '/shop/wheels-tyres-and-tubes/', name: 'All wheels, tyres and tubes', note: 'Tyres, tubes and wheels.' },
  ],
  links: {
    to: [
      ['/shop/wheels-tyres-and-tubes/', 'wheels, tyres and tubes'],
      ['/blog/e-bike-tyres-and-tubes/', 'e-bike tyres and tubes guide'],
      ['/blog/bike-puncture-repair-kit/', 'bike puncture repair kit guide'],
      ['/blog/bike-tool-kit/', 'bike tool kit guide'],
    ],
    from: [
      ['/shop/wheels-tyres-and-tubes/', 'bike tubes buying guide'],
      ['/shop/wheels-tyres-and-tubes/79bike-inner-tube/', 'bike inner tube: how to size one'],
      ['/shop/wheels-tyres-and-tubes/79bike-tyre/', 'bicycle tube and tyre match'],
    ],
  },
  kind: 'post',
}

export const body = {
  hook: 'The right bike tubes match three things: the tyre size, the tube width and the valve hole in your rim. Read the numbers on the tyre sidewall before you buy, and carry one spare.',
  intro: [
    'Bike tubes, also called inner tubes, are the air-holding bags inside a standard tyre. Choosing one is simple once you know three checks: the bead seat diameter, the tyre width and the valve type. Buy the wrong size and the tube bulges, thins or will not seat.',
    'This guide explains how to read tyre sizes, how Park Tool says to match a tube to a tyre, how to choose a valve, what changes on fat-tyre and e-bike wheels and which tubes, tyres and tools we stock. Prices are current Torque E-Bikes prices. For puncture repair, see our [bike puncture repair kit guide](/blog/bike-puncture-repair-kit/).',
  ],
  sections: [
    {
      h: 'Bike tubes: the three checks before you buy',
      p: [
        'Every correct tube passes the same three checks. Do them in order, and write the numbers down before you shop.',
      ],
      table: {
        head: ['Check', 'What to look for', 'Where to find it'],
        rows: [
          ['Diameter', 'The tyre and rim share the same bead seat diameter', 'Tyre sidewall, such as 622'],
          ['Width', 'The tube width suits the tyre width', 'Tyre sidewall, such as 40 mm or 4.0 in'],
          ['Valve', 'The valve type fits the rim hole and the stem is long enough', 'Rim, or the old tube'],
          ['Wheel type', 'A tube suits a tube-and-tyre wheel, not a tubeless one', 'Tyre and rim markings, or ask the dealer'],
        ],
      },
    },
    {
      h: 'How to read the size on the tyre',
      p: [
        'Park Tool\'s [guide to tire, wheel and inner tube fit standards](https://www.parktool.com/en-us/blog/repair-help/tire-wheel-and-inner-tube-fit-standards) says that in the ISO/ETRTO system the larger number is always the bead seat diameter, so a 622 tyre fits a 622 rim. Tyres and rims with the same bead seat number fit one another, whatever older names such as 700c are printed beside them.',
        'The same guide says the tube should closely match the tyre\'s bead diameter, and notes that tubes sized for an ISO 630 tyre also fit an ISO 622 tyre. In practice, check the tyre sidewall for the ETRTO pair, such as 40-622, then buy a tube marked for that diameter and for a width range that includes the 40.',
      ],
    },
    {
      h: 'Width: too narrow thins, too wide bulges',
      p: [
        'Park Tool says the tube should match the tyre width. A tube that is too narrow stretches and thins, which makes it puncture easily, and a tube that is too wide may not seat properly or may bulge out and blow out. Most tubes list a range of tyre widths they suit, so pick the one where your tyre sits comfortably in the middle.',
        'If your tyre width falls between two sizes of tube, ask the dealer. A slightly wide tube is usually easier to live with than a narrow one, but the safest answer is the tube the maker marks for your tyre.',
      ],
      img: { file: 'blog/bike-tubes-79bike.webp', alt: '79Bike inner tube, a spare bike tube for 79Bike wheels', w: 720, h: 540 },
    },
    {
      h: 'Valves: Presta, Schrader and stem length',
      ul: [
        '**Schrader.** Park Tool says these are about 8 mm wide, common on cars and many bikes, and have an internal spring.',
        '**Presta.** About 6 mm wide, common on higher-end road and mountain bikes, and the locknut must be loosened before inflation.',
        '**Match the rim hole.** The valve must suit the hole in the rim. Do not force a wide valve into a narrow hole.',
        '**Check the stem length.** Deep or tall rims need longer valve stems, such as 60 mm or 80 mm, according to Park Tool. A short stem will not clear the rim.',
        '**Extenders.** Extenders exist, but Park Tool warns that if the Presta locknut cannot be closed, the valve may leak.',
        '**Know your pump.** Check that your pump head fits the valve type. See our [bike pump guide](/blog/bike-pump/).',
      ],
    },
    {
      h: 'Fat-tyre, e-bike and motorbike-style wheels',
      p: [
        'Fat-tyre e-bikes use wide tubes, and the size is printed on the tyre, such as a 20 in wheel with a wide 4 in tyre. We list fat-bike wheel assemblies and a 79Bike inner tube, and wheel sizes differ by model. Our product pages publish only the name and price, so give us your tyre size and ask whether the tube we list fits before you order. Our [fat tyre e-bikes guide](/blog/fat-tyre-e-bikes/) covers the category.',
        'E-bike wheels are heavier and a rear hub motor adds a cable and weight. Removing the wheel takes longer, so carry the right spanner and read the manual. Our [e-bike tyres and tubes guide](/blog/e-bike-tyres-and-tubes/) explains puncture protection on heavy bikes.',
        'Tubeless wheels do not use a tube. If you are unsure which system you have, check the tyre and rim markings or ask the dealer.',
      ],
    },
    {
      h: 'Changing a tube: what Park Tool says',
      p: [
        'Park Tool\'s [tire and tube removal and installation guide](https://www.parktool.com/en-us/blog/repair-help/tire-and-tube-removal-and-installation) says to fully deflate the tube, push one bead toward the rim centre and work tyre levers under the bead in short sections, avoiding screwdrivers and knives. It says to check both the tyre and the tube for embedded debris and to inspect the rim strip for tears and protruding spokes.',
        'For installation, it says to align the valve straight toward the hub, seat one bead at a time by hand and use levers only as a last resort so you do not pinch the tube. Inflate slightly, check that the bead seat line sits evenly above the rim, then inflate to full pressure and check with a gauge. Our [Lezyne Lever Kit at $18.95](/shop/care-tools-and-hydration/lezyne-lever-kit-light-grey/) covers the levers.',
      ],
    },
    {
      h: 'Bike tubes and tyres we stock',
      p: [
        'We stock a tube, a tyre and levers. Product pages publish the name, brand and price only. The tube and tyre are for 79Bike wheels and are listed for off-road and private property use only, so check fit with us before you order for another bike.',
      ],
      table: {
        head: ['Item', 'Brand', 'Price', 'Use'],
        rows: [
          ['[79Bike Inner Tube](/shop/wheels-tyres-and-tubes/79bike-inner-tube/)', '79Bike', '$38.95', 'Spare inner tube'],
          ['[79Bike Tyre](/shop/wheels-tyres-and-tubes/79bike-tyre/)', '79Bike', '$179', 'Replacement tyre'],
          ['[Lezyne Lever Kit Light Grey](/shop/care-tools-and-hydration/lezyne-lever-kit-light-grey/)', 'Lezyne', '$18.95', 'Tyre levers'],
        ],
      },
    },
    {
      h: 'How many tubes to carry and keep',
      ul: [
        '**One spare on every ride.** A spare is the fastest roadside fix.',
        '**Two on long trips.** A second flat is common on rough roads.',
        '**A spare at home.** Keep one in the right size so a flat does not stop your commute.',
        '**Store tubes flat and cool.** Keep them out of sun and away from sharp objects.',
        '**Patch the old tube at home.** See our [bike tool kit guide](/blog/bike-tool-kit/).',
        '**Replace tubes that have many patches.** A tube with several patches is a risk on a long ride.',
      ],
    },
    {
      h: 'If the tyre markings are worn or unclear',
      p: [
        'Old tyres lose their printing, and some markings are hard to read. Check both sidewalls, because the size is often printed twice in different forms. If the markings are gone, measure the tyre width with a ruler when it is inflated and check the rim for markings, and ask the dealer to confirm the size before you buy a tube.',
        'You can also take the old tube or the tyre to a bike shop and compare the sizes in person. A tube that is the wrong size costs more than the few minutes it takes to check.',
      ],
    },
    {
      h: 'Buying tubes for more than one bike',
      ul: [
        '**Keep a size list.** Write the tyre size and valve type for each bike.',
        '**Choose a common valve where you can.** If your bikes use the same valve, one pump and one style of tube is simpler.',
        '**Buy spares in the sizes you use most.** One or two of each is enough.',
        '**Label them.** A marker on the box saves guessing later.',
        '**Check e-bike and fat-tyre sizes separately.** They use different tubes from road and commuter bikes.',
        '**Ask us about our range.** Our tube listing is for 79Bike wheels, so check fit before you order for another bike.',
      ],
    },
    {
      h: 'When to replace the tyre as well as the tube',
      p: [
        'A new tube in a bad tyre will fail again. Replace the tyre if the tread is worn flat, the sidewall is cracked or cut, or a large cut lets the tube bulge through. Park Tool says large shredded holes usually come from blowouts and are typically not repairable, and a damaged casing needs attention as well as a new tube.',
        'Check the inside of the tyre every time you change a tube, and replace the tyre in pairs if both are old. Our [79Bike Tyre at $179](/shop/wheels-tyres-and-tubes/79bike-tyre/) is the replacement we stock for 79Bike wheels.',
      ],
    },
    {
      h: 'Bike tubes mistakes to avoid',
      ul: [
        '**Buying by the old name only.** Use the ETRTO numbers, not just labels such as 700c.',
        '**Ignoring the width.** A narrow tube thins and a wide one bulges.',
        '**Forgetting the valve.** Check the rim hole and the stem length.',
        '**Pinching the tube.** Seat the bead by hand and use levers last.',
        '**Skipping the rim check.** A sharp spoke end or bad rim strip causes repeat flats.',
        '**Using a tube in a tubeless setup.** Know your wheel system.',
      ],
    },
    {
      h: 'Which bike tubes should you buy?',
      p: [
        'Read the tyre sidewall, note the ETRTO size and width, check the valve on your rim and buy a matching tube. For 79Bike wheels, the [79Bike Inner Tube at $38.95](/shop/wheels-tyres-and-tubes/79bike-inner-tube/) is the tube we stock, and the [79Bike Tyre at $179](/shop/wheels-tyres-and-tubes/79bike-tyre/) is the replacement tyre. Browse the full [wheels, tyres and tubes range](/shop/wheels-tyres-and-tubes/).',
        'Send us your tyre size and bike, and we will tell you whether our tube fits. All orders ship Australia-wide with dangerous-goods certified dispatch.',
      ],
    },
  ],
  faq: [
    { q: 'How do I know what size inner tube I need?', a: 'Read the size printed on the tyre sidewall. Park Tool says the larger ISO/ETRTO number is the bead seat diameter, so match that number and a width range that includes your tyre width, then check the valve.' },
    { q: 'What happens if the tube is the wrong width?', a: 'Park Tool says a tube that is too narrow thins and punctures easily, and one that is too wide may not seat properly or may bulge and blow out. Choose a tube marked for your tyre width.' },
    { q: 'What is the difference between Presta and Schrader valves?', a: 'Schrader valves are about 8 mm wide and common on cars and many bikes. Presta valves are about 6 mm wide, common on higher-end bikes, and need the locknut loosened before inflating. The valve must fit the rim hole.' },
    { q: 'Do deep rims need special tubes?', a: 'They need a longer valve stem. Park Tool says deep or tall rims need stems such as 60 mm or 80 mm, and extenders are available but the locknut must still close.' },
    { q: 'Can I use a tube in a tubeless tyre?', a: 'Only if the wheel and tyre allow it. Tubeless wheels are set up without a tube, so check the markings or ask the dealer before you fit one.' },
    { q: 'Do you sell bike tubes?', a: 'We stock a 79Bike inner tube at $38.95, a 79Bike tyre at $179 and a Lezyne lever kit at $18.95. Send us your tyre size to check fit.' },
  ],
  keywords: { primary: 'bike tubes', supporting: ['cycle tube', 'bike inner tube', 'bike tyre tube', 'bicycle tube', 'bike inner tubes'] },
  words: 0,
}
