// Metadata patches for the refreshed posts (light: safe for client bundles). Bodies live in body-index.js (server only).
import { meta as conversionKits } from './e-bike-conversion-kits-explained.js'
import { meta as talariaX3 } from './talaria-x3-mx3-and-mx4.js'
import { meta as bestElectricBikesInAustralia } from './best-electric-bikes-in-australia.js'
import { meta as howToChooseAnEBike } from './how-to-choose-an-e-bike.js'
import { meta as surRonModelsExplained } from './sur-ron-models-explained.js'
import { meta as electricMountainBikeBuyingGuide } from './electric-mountain-bike-buying-guide.js'

export const REFRESH_META = {
  'e-bike-conversion-kits-explained': conversionKits,
  'talaria-x3-mx3-and-mx4': talariaX3,
  'best-electric-bikes-in-australia': bestElectricBikesInAustralia,
  'how-to-choose-an-e-bike': howToChooseAnEBike,
  'sur-ron-models-explained': surRonModelsExplained,
  'electric-mountain-bike-buying-guide': electricMountainBikeBuyingGuide,
}
