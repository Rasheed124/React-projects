import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'contact',
    title: 'Contact',
    type: 'document',
    fields: [
    defineField({
        name: 'title',
        title: 'Contact Page Title',
        type: 'string',
    }),
    defineField({
        name: 'heading',
        title: 'Heading',
        type: 'string',
    }),
    defineField({
        name: 'logo',
        title: 'Logo',
        type: 'string',
    }),

    defineField({
        name: 'text',
        title: 'All Reserved',
        type: 'string',
    }),

    defineField({
        name: 'mail',
        title: 'Email',
        type: 'string',
    }),


    defineField({
        name: 'infoText',
        title: 'Info Text',
        type: 'string',
    }),

     defineField({
        name: 'form',
        title: 'Form Info',
        type: 'text',
    }),

   defineField({
      name: 'socialHandle',
      title: 'Social Handles',
      type: 'array',
         of: [
          {  name: 'share', type: 'url', title: 'Add Social Media Handle' }
        ],
    }),

   defineField({
      name: 'marquee',
      title: 'Marquee Text',
      type: 'array',
         of: [
          {  name: 'marqueText', type: 'string', title: 'Add Marquee Text' }
        ],
    }),

    ],
})