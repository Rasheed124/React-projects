import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'subHeading',
      title: 'Sub Heading',
      type: 'string',
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
          }
        ],
    }),
   defineField({
      name: 'shareProject',
      title: 'Share Project',
      type: 'array',
         of: [
          {  name: 'share', type: 'slug', title: 'Add Social Media Handle' }
        ],
    }),
    defineField({
      name: 'projectLink',
      title: 'Project Link',
      type: 'object',
         fields: [
          {  name: 'share', type: 'string', title: 'Add Website ' },
        ],
    }),
  ],
})
