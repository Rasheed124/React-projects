
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'contentPost',
    title: 'Content Post',
    type: 'document',
    fields: [

  defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

  defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),

  defineField({
      name: 'url',
      title: 'Url',
      type: 'url',

    }),

    defineField({
        name: 'projectImage',
        title: 'Project Image',
        type: 'image',
          options: {
            hotspot: true,
        },
    }),

      
    ],
})

