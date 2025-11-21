import { type SchemaTypeDefinition } from 'sanity'
import bloggPost from './bloggPost'
import otherEntry from './otherEntry' // Importerer den oppdaterte filen

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [bloggPost, otherEntry],
}