
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'writingPost',
    title: 'Writing Post',
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
        name: 'image',
        title: 'Image',
        type: 'image',
          options: {
            hotspot: true,
        },
    }),

      
    ],
})

