import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'homeBanner',
    title: 'Home Banner',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'address',
            title: 'Address',
            type: 'string',
        }),
        defineField({
            name: 'skills',
            title: 'Skills',
            type: 'string',
        }),
        defineField({
            name: 'handleText',
            title: 'Handle Text',
            type: 'string',
        }),
       defineField({
            name: 'handle',
            title: 'Handle',
            type: 'slug',
        }),
        defineField({
            name: 'bannerImage',
            title: 'Banner Image',
            type: 'image',
            options: {
                hotspot: true,
            },
             fields: [
                {
                    name: "alt",
                    title: "Alt",
                    type: "string",
                }
            ]
        }),
    ],
})
