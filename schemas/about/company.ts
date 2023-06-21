import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'company',
    title: 'About Companys',
    type: 'document',
    fields: [

   defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    
    defineField({
      name: 'slug',
      title: 'Slug',
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