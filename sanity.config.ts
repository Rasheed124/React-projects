/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...index]]\page.tsx` route
 */

import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works

import schemas from './sanity/schemas'
// import { myTheme } from './theme'
// import NavbarStudio from './components/NavbarStudio'
// import Logo from './components/Logo'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!

export default defineConfig({
    basePath: '/admin',
    name: "RASHEED_PORTFOLIO_STUDIO",
    title: "Rasheed Content Studio",
    projectId,
    apiVersion,
    dataset,
    // Add and edit the content schema in the './sanity/schema' folder
    schema: { types: schemas },

    plugins: [
        deskTool(),
    ],
})
