import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'projectGallery',
    title: 'Projects Gallery',
    type: 'document',
    fields: [

   defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
        name: 'image',
        title: 'Image',
        type: 'image',
          options: {
            hotspot: true,
        },
    }),

    defineField({
      name: 'video',
      title: 'Video',
      type: 'mux.video',
    }),

  
      
    ],
})