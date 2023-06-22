import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'contentWriting',
    title: 'Content Writing',
    type: 'document',
    fields: [


    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'subTitle',
      title: 'Sub Title',
      type: 'string',
    }),

    defineField({
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [{ type: 'reference', to: { type: 'contentPost' } }],
    }),


      
    ],
})