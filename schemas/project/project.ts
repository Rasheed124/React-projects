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
            name: 'projectsDetails',
            title: 'Project Details',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'project' } }],
        }),
      
    ],
})