/**
 * Prioritized keywords for Torque E-Bikes
 * Focused on high-intent technical and regional (AU) search terms.
 */

export const KEYWORDS = {
  primary: 'electric dirt bike australia',
  secondary: [
    'high-torque e-moto kits',
    '72V sur-ron battery upgrade australia',
    'electric motocross conversion brisbane',
    'off-road electric bikes queensland',
    'high discharge lithium battery systems',
    'street legal e-bike kits australia',
    'performance electric motorcycle parts',
    'diy electric dirt bike build',
    'talaria performance upgrades australia',
    'high power e-bike motors'
  ],
  regional: [
    'brisbane',
    'queensland',
    'australia-wide delivery',
    'gold coast e-moto'
  ]
}

export const KEYWORD_STRING = [KEYWORDS.primary, ...KEYWORDS.secondary].join(', ')
