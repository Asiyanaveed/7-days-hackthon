import { type SchemaTypeDefinition } from 'sanity'
import landingPage from './landingPageSections/landingPage'
import hero from './landingPageSections/hero'
import cardSection from './landingPageSections/cardSection'
import gearUp from './landingPageSections/gearUp'
import doNotMiss from './landingPageSections/doNotMiss'
import theEssential from './landingPageSections/theEssential'
import  { productSchema } from './product'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    landingPage, 
       hero, 
       cardSection, 
       gearUp,
       doNotMiss, 
       theEssential,

     productSchema
  ],
}
