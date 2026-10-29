// Blog post written to the blog-post rule (see ~/.claude/skills/blog-post/SKILL.md).
// Keywords: volume / KD / intent from Semrush AU Keyword Magic (29 Oct 2026), KD 28 or lower, recorded in docs/used-keywords.csv. "cycling sunglasses" and "cycling glasses" show about 1.3K searches each; the lower KD (14) leads.
// Competitor review 29 Oct 2026 (retailer category pages and cycling magazines): weaknesses are brand lists with no Australian standard, no lens category explanation, no note that sports eyewear can sit outside the mandatory sunglasses standard, no night and twilight advice. Plan: ACCC mandatory standard and ARPANSA advice, lens category table, fit-with-helmet checklist, honest note that we stock helmets and goggles but not sunglasses.
// Sources opened 29 Oct 2026 (in a browser): ACCC Product Safety "Sunglasses and fashion spectacles mandatory standard" (UV 280 to 400 nm, lens categories 0 to 4, category 4 not for driving or road use, labelling, eye protectors for sport not covered), ARPANSA "Sun protection using sunglasses" (wrap-around recommended, tint colour does not decide UV protection, categories 2 and 3 for everyday use, not recommended at twilight, mandatory since 1 July 2019, label should refer to AS/NZS 1067.1).
// Product pages publish only names and prices. We do not sell sunglasses; the post says so and links the helmets and goggles we stock.
export const meta = {
  id: 'cycling-sunglasses',
  slug: 'cycling-sunglasses',
  url: '/blog/cycling-sunglasses/',
  title: 'Cycling Sunglasses: UV Standards and Lens Categories',
  seoTitle: 'Cycling Sunglasses: UV Standards and Lens Categories',
  excerpt: 'Choosing cycling sunglasses? Learn the Australian lens categories 0 to 4, why tint colour is not UV protection, fit with a helmet, and the helmets and goggles we stock.',
  category: 'Buying Guides',
  date: '2026-10-29',
  readTime: '10 min',
  focus: 'cycling sunglasses',
  secondary: ['cycling glasses', 'sunglasses for bike', 'bike spectacles', 'bike riding spectacles', 'cycling shades'],
  tags: ['cycling spectacles', 'cycling eyewear', 'eyewear cycling', 'sunglasses for cycling', 'bike glasses', 'bicycle spectacles', 'cyclist eyewear', 'glasses for bicycle', 'bike riding glasses', 'bike sunglasses'],
  image: {
    file: 'blog/cycling-sunglasses.webp',
    alt: 'Abus Macator helmet, Livall smart helmet and 79Bike off-road goggles, eye and head protection to pair with cycling sunglasses',
    query: 'cycling sunglasses',
    credit: null,
  },
  related: [
    { href: '/shop/helmets-gloves-and-protection/abus-macator-helmet/', name: 'Abus Macator Helmet', price: 93.95, note: 'The lowest-priced helmet we list.' },
    { href: '/shop/helmets-gloves-and-protection/livall-bh60se-smart-helmet/', name: 'Livall BH60SE Smart Helmet', price: 169, note: 'A smart helmet.' },
    { href: '/shop/helmets-gloves-and-protection/79bike-off-road-goggles/', name: '79Bike Off-Road Goggles', price: 119, note: 'Goggles for off-road use.' },
    { href: '/shop/helmets-gloves-and-protection/', name: 'All helmets, gloves and protection', note: 'Helmets, gloves and armour.' },
  ],
  links: {
    to: [
      ['/shop/helmets-gloves-and-protection/', 'helmets, gloves and protection'],
      ['/blog/helmets-and-protective-gear-for-e-bikes/', 'helmets and protective gear for e-bikes guide'],
      ['/blog/motorbike-goggles/', 'motorbike goggles buying guide'],
      ['/blog/bicycle-gloves/', 'bicycle gloves buying guide'],
    ],
    from: [
      ['/shop/helmets-gloves-and-protection/', 'cycling sunglasses buying guide'],
      ['/shop/helmets-gloves-and-protection/abus-macator-helmet/', 'sunglasses for bike riders: fit with a helmet'],
      ['/shop/helmets-gloves-and-protection/79bike-off-road-goggles/', 'cycling glasses or goggles'],
    ],
  },
  kind: 'post',
}

export const body = {
  hook: 'Cycling sunglasses protect your eyes from UV, wind and flying grit. Check the lens category and the label, choose wrap-around frames that fit under your helmet and swap to clear lenses at dusk.',
  intro: [
    'Cycling sunglasses are sunglasses built for riding: they wrap around the eyes, sit securely under a helmet and keep out wind, dust and insects. The most important feature is not the brand or the colour. It is the UV protection, which is set by the lens material and checked against the Australian standard.',
    'This guide explains the Australian lens categories, what the label should say, how tint and polarisation work, how to fit glasses with a helmet, what to wear at dusk and which helmets and goggles we stock. Prices are current Torque E-Bikes prices. We do not sell sunglasses, so the guide helps you buy them well, and for head and eye protection see our [helmets and protective gear for e-bikes guide](/blog/helmets-and-protective-gear-for-e-bikes/).',
  ],
  sections: [
    {
      h: 'Lens categories: what 0 to 4 mean',
      p: [
        'The ACCC Product Safety page on the [sunglasses and fashion spectacles mandatory standard](https://www.productsafety.gov.au/business/search-mandatory-standards/sunglasses-and-fashion-spectacles-mandatory-standard) says there are five lens categories. Check the category printed on the label before you buy.',
      ],
      table: {
        head: ['Category', 'What it is', 'Glare reduction', 'Use'],
        rows: [
          ['0', 'Fashion spectacles', 'Very low', 'Not sunglasses; little or no UV protection'],
          ['1', 'Fashion spectacles', 'Limited', 'Not sunglasses; some UV protection; not for night driving'],
          ['2', 'Sunglasses', 'Medium', 'Good UV protection; suits mixed light'],
          ['3', 'Sunglasses', 'High', 'Good UV protection; suits bright days'],
          ['4', 'Special purpose sunglasses', 'Very high', 'Not suitable for driving and road use'],
        ],
      },
    },
    {
      h: 'What ARPANSA says about UV, tint and wrap-around frames',
      p: [
        'ARPANSA\'s page on [sun protection using sunglasses](https://www.arpansa.gov.au/understanding-radiation/radiation-sources/more-radiation-sources/sun-protection-sunglasses) says long-term overexposure to solar UV can cause eye damage such as cataracts, and that sunglasses that comply with the Australian standard give substantial protection and are recommended for children and adults, particularly the wrap-around type that protect from the sides. It adds that the UV-absorbing property of the lens material provides the protection, not the colour or tint, so dark lenses are not necessarily more protective than lightly tinted ones.',
        'The page also notes that UV is reflected from water, white sand, concrete and buildings, that the summer noon level can be more than three times the winter level, and that polarised lenses reduce glare and eyestrain. Category 2 and 3 are recommended for everyday use, and category 4 for very high glare such as at sea or on snowfields.',
        'For a rider, the takeaway is simple: buy wrap-around frames with a compliant label, and do not pay extra for a dark tint on the assumption that it protects more.',
      ],
    },
    {
      h: 'The label: what to look for',
      ul: [
        '**Sunglasses or special purpose sunglasses.** ARPANSA says to check that the glasses are labelled this way and not as fashion spectacles.',
        '**A reference to AS/NZS 1067.1.** The label should say the glasses comply with this standard.',
        '**Lens category number.** The label should show the category, a description and driving suitability.',
        '**Manufacturer or supplier.** The label should name who made or supplied them.',
        '**A driving warning if it applies.** Glasses not suitable for driving must say so.',
        '**Mandatory since 1 July 2019.** ARPANSA says all sunglasses and fashion spectacles sold in Australia must be tested and labelled to the standard.',
      ],
    },
    {
      h: 'A gap to know about: sports eyewear',
      p: [
        'The ACCC page says the mandatory standard does not apply to prescription and ready-made spectacles, safety glasses and goggles for protection against optical radiation other than the sun, or eye protectors for sport. Some eyewear sold for cycling may therefore be sold as sports eye protection rather than as sunglasses and may not carry a lens category label.',
        'That does not mean it is poor, but it does mean you cannot assume UV protection from the word cycling on the box. Look for a sunglasses label with a category, or ask the seller for the UV protection information in writing. If you wear prescription lenses, ask your optometrist about prescription sports eyewear.',
      ],
      img: { file: 'blog/cycling-sunglasses-helmet.webp', alt: 'Abus Macator helmet, a helmet that cycling sunglasses must fit under', w: 720, h: 540 },
    },
    {
      h: 'Fit with a helmet: the checklist',
      ul: [
        '**Wear them together.** Try the glasses with your helmet on. Arms that are too thick press on your temples under the straps.',
        '**Check the helmet peak and vents.** The glasses should not hit the peak or catch on vents when you look down.',
        '**Check the nose pads.** They should hold the glasses without slipping when you sweat.',
        '**Check the coverage.** Wrap-around lenses protect the sides, and a lens that sits close to the face keeps out wind and grit.',
        '**Check the view.** Look at the road, the dashboard of a bike computer and over your shoulder to make sure frames do not block your view.',
        '**Check ventilation.** Fogged lenses are dangerous, so look for vents or coatings that help.',
        '**Check the weight.** Light glasses stay comfortable on a long ride.',
      ],
    },
    {
      h: 'Dusk, night and tunnels',
      p: [
        'ARPANSA says sunglasses are not recommended for driving at night, in twilight or under dull light, and the same common sense applies to riding. A dark lens at dusk reduces what you can see on a path, and a category 4 lens is not suitable for road use. If you ride at dusk, take sunglasses off or use a clear or lightly tinted lens.',
        'Many riders carry clear glasses for dawn, dusk and night rides, and some choose frames with interchangeable lenses. Check what the maker supplies. Whatever you wear at night, use lights that meet the rules. See our [bicycle light buying guide](/blog/bicycle-light/).',
      ],
    },
    {
      h: 'Cycling sunglasses or goggles?',
      p: [
        'Cycling sunglasses suit road, commuter and path riding at normal speeds. Goggles suit dusty, muddy, fast off-road riding on motorbikes and e-motos because they seal around the eyes. We stock the [79Bike Off-Road Goggles at $119](/shop/helmets-gloves-and-protection/79bike-off-road-goggles/), listed for off-road and private property use. See our [motorbike goggles buying guide](/blog/motorbike-goggles/) for how to choose.',
        'If you ride a high-powered electric dirt bike off-road, goggles are the right choice, and the Queensland Government\'s motorcycle safety advice recommends shatterproof goggles that meet AS 1609 for motorbike riders. For a commute on a standard e-bike, sunglasses with a compliant label are usually enough.',
      ],
    },
    {
      h: 'Helmets and protection we stock',
      p: [
        'We do not sell cycling sunglasses. We stock helmets and goggles, and product pages publish the name, brand and price only, so check fit and the standard marking with us before you order.',
      ],
      table: {
        head: ['Item', 'Brand', 'Price', 'Use'],
        rows: [
          ['[Abus Macator Helmet](/shop/helmets-gloves-and-protection/abus-macator-helmet/)', 'Abus', '$93.95', 'Helmet'],
          ['[Livall BH60SE Smart Helmet](/shop/helmets-gloves-and-protection/livall-bh60se-smart-helmet/)', 'Livall', '$169', 'Smart helmet'],
          ['[79Bike Off-Road Goggles](/shop/helmets-gloves-and-protection/79bike-off-road-goggles/)', '79Bike', '$119', 'Off-road goggles'],
        ],
      },
    },
    {
      h: 'Lens features riders ask about',
      ul: [
        '**Polarised lenses.** ARPANSA says polarised lenses are popular because they reduce glare from reflective surfaces and ease eyestrain. They can make some screens hard to read, so check your bike computer.',
        '**Photochromic lenses.** These darken in bright light and lighten in shade. ARPANSA says photochromic lenses sold in Australia must be tested and labelled to the sunglasses standard, so check the category on the label.',
        '**Impact resistance.** ARPANSA notes that plastic lenses such as polycarbonate are light and impact resistant, which helps on trails and rough roads.',
        '**Interchangeable lenses.** Some frames come with several lenses. Check what the maker supplies and whether each lens carries a category.',
        '**Anti-fog and vents.** These matter on slow climbs and in humid weather.',
        '**Hydrophobic coatings.** They shed water and sweat, but they do not replace UV protection.',
      ],
    },
    {
      h: 'Prescription and bifocal needs',
      p: [
        'The ACCC page says the mandatory sunglasses standard does not apply to prescription spectacles, so prescription sports eyewear is a separate purchase. If you need a prescription or bifocal lens for riding, ask your optometrist about prescription cycling glasses, clip-in lens inserts or contact lenses, and ask for UV protection to be included.',
        'Never ride without your usual vision correction. If you wear glasses already, check that a sunglasses frame fits over them or choose a pair with a prescription insert.',
      ],
    },
    {
      h: 'Looking after your glasses',
      ul: [
        '**Rinse before wiping.** Grit scratches lenses when you wipe a dry lens.',
        '**Use a soft cloth.** Avoid your shirt, which can hold dust.',
        '**Store them in a case.** Do not leave them on the dashboard in the sun.',
        '**Replace scratched lenses.** Scratches scatter light and make glare worse.',
        '**Check the label after replacing lenses.** Aftermarket lenses may not carry a category.',
        '**Keep a spare pair.** Glasses break on trails and in bags.',
      ],
    },
    {
      h: 'Cycling sunglasses mistakes to avoid',
      ul: [
        '**Buying by tint.** UV protection comes from the lens material, not the colour.',
        '**Ignoring the label.** Look for the category and the standard reference.',
        '**Wearing category 4 on the road.** The ACCC says it is not suitable for driving and road use.',
        '**Skipping the helmet fit test.** Try both together.',
        '**Wearing dark lenses at dusk.** Switch to clear or take them off.',
        '**Assuming sports eyewear has a UV rating.** Ask for the protection details.',
      ],
    },
    {
      h: 'Which cycling sunglasses should you buy?',
      p: [
        'Choose wrap-around sunglasses labelled category 2 or 3 and compliant with AS/NZS 1067.1, check them with your helmet and carry clear lenses for dusk. To complete the set, look at the [Abus Macator Helmet at $93.95](/shop/helmets-gloves-and-protection/abus-macator-helmet/) and, for off-road riding, the [79Bike Off-Road Goggles at $119](/shop/helmets-gloves-and-protection/79bike-off-road-goggles/). Browse the full [helmets, gloves and protection range](/shop/helmets-gloves-and-protection/).',
        'Tell us how and where you ride, and we will suggest the right head and eye protection. All orders ship Australia-wide with dangerous-goods certified dispatch.',
      ],
    },
  ],
  faq: [
    { q: 'What lens category should cycling sunglasses be?', a: 'ARPANSA recommends category 2 and 3 sunglasses for everyday use, and category 4 only for very high glare such as at sea or on snowfields. The ACCC says category 4 is not suitable for driving and road use.' },
    { q: 'Do darker lenses protect more from UV?', a: 'No. ARPANSA says the UV protection comes from the lens material, not the colour or tint, so dark tinted lenses are not necessarily more protective than lightly tinted ones.' },
    { q: 'Are cycling glasses covered by the Australian sunglasses standard?', a: 'Sunglasses sold in Australia must be tested and labelled to AS/NZS 1067.1, but the ACCC says the mandatory standard does not apply to eye protectors for sport. Check for a sunglasses label with a category.' },
    { q: 'Should I wear sunglasses at dusk?', a: 'ARPANSA says sunglasses are not recommended in twilight or under dull light. Use clear or lightly tinted lenses at dusk and night and use lights that meet the rules.' },
    { q: 'How do I check that sunglasses fit under a helmet?', a: 'Try them on with the helmet and straps fitted. Check the arms, the peak and vents, the nose pads and your view down and over your shoulder, and make sure they do not slip.' },
    { q: 'Do you sell cycling sunglasses?', a: 'No. We stock helmets from $93.95 and the 79Bike Off-Road Goggles at $119. Buy sunglasses from a specialist and check the label.' },
  ],
  keywords: { primary: 'cycling sunglasses', supporting: ['cycling glasses', 'sunglasses for bike', 'bike spectacles', 'bike riding spectacles', 'cycling shades'] },
  words: 0,
}
