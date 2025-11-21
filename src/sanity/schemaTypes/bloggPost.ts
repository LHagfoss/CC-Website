import { DocumentTextIcon } from '@sanity/icons'
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'bloggPost',
  title: 'Blogginnlegg',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Tittel',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    
    // --- FELT 1: LEGG TIL DENNE ---
    defineField({
      name: 'slug',
      title: 'Slug (URL-vennlig navn)',
      type: 'slug',
      options: {
        source: 'title', // Lager automatisk slug fra 'title'-feltet
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    // --- SLUTT ---

    defineField({
      name: 'language',
      title: 'Språk',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: 'Norsk', value: 'no' },
          { title: 'Engelsk', value: 'en' }
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'no',
    }),
    defineField({
      name: 'date',
      title: 'Dato',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Bilde',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'ingress',
      title: 'Ingress',
      type: 'text',
    }),
    defineField({
      name: 'content',
      title: 'Innhold',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
})