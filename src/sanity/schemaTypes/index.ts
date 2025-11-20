import { type SchemaTypeDefinition } from 'sanity'
import blogPost from './blogPost'
import otherEntry from './otherEntry'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogPost, otherEntry],
}
