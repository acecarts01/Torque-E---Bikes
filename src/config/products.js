// src/config/products.js
// The product catalogue lives in its own module so that only the pages and server code that need it load it.
// Client components should receive the few products they need as props (or from an API route), not import this.
import { CATALOG_PRODUCTS } from './catalog-products.generated.js'
export const PRODUCTS = CATALOG_PRODUCTS
