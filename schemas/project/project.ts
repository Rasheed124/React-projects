import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'projects',
    title: 'Projects',
    type: 'document',
    fields: [
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string',
        }),

    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'shortdescription',
      title: 'Short Description',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'skillsTitle',
      title: 'Skills Title',
      type: 'array',
         of: [
          {  name: 'addSkills', type: 'string', title: 'Add Skills Required' }
        ],
    }),
    defineField({
      name: 'keyResult',
      title: 'Key Result',
      type: 'array',
         of: [
          {  name: 'addResult', type: 'text', title: 'Add key Result' }
        ],
    }),

    defineField({
       name: 'testimonials',
      title: 'Testimonials',
      type: 'text',
    }),
    defineField({
      name: 'projectImage',
      title: 'projectImage',
      type: 'array',
      of: [
          {  
              name: 'image', 
              type: 'image', title: 'Add images Required',
              options: {
                hotspot: true,
            }, 
          },

        ],
    }),
   defineField({
      name: 'shareProject',
      title: 'Share Project',
      type: 'array',
         of: [
          {  name: 'share', type: 'url', title: 'Add Social Media Handle' }
        ],
    }),
    defineField({
      name: 'projectLink',
      title: 'Project Link',
      type: 'object',
         fields: [
          {  name: 'share', type: 'url', title: 'Add Website ' },
        ],
    }),
      
    ],
})