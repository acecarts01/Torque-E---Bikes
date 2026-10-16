// src/config/brand-rules.js
// Which brands get their own page. A brand needs this many products, or a dedicated guide that links to it.
// Thin brand pages (fewer products) are merged: their URLs redirect (see brand-redirects.generated.json).
export const MIN_BRAND_PRODUCTS = 5
export const KEEP_BRANDS = ['dirodi', 'flight-risk'] // each has its own guide linking to the brand page
