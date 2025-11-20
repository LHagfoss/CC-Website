import { DocumentTextIcon } from '@sanity/icons'
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'reserchEntry', // Beholder navnet ditt, selv om det er en skrivefeil :)
  title: 'ReserchInnlegg',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Tittel',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    // --- NYTT FELT START ---
    defineField({
      name: 'language',
      title: 'Språk',
      type: 'string',
      // Gjør det til et påkrevd felt
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: 'Norsk', value: 'no' },
          { title: 'Engelsk', value: 'en' }
        ],
        layout: 'radio', // Viser som radioknapper
        direction: 'horizontal', // Viser dem side-om-side
      },
      // Setter 'Norsk' som standardvalg for nye innlegg
      initialValue: 'no',
    }),
    // --- NYTT FELT SLUTT ---

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