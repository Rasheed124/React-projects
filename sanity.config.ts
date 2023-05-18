/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...index]]\page.tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from './sanity/env'
import { schema } from './sanity/schema'
import { myTheme } from './theme'
import NavbarStudio from './components/NavbarStudio'
import Logo from './components/Logo'

export default defineConfig({
  basePath: '/studio',
  name: "RASHEED_CONTENT_STUDIO",
  title: "Rasheed Content Studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  studio: {
    components: {
      logo: Logo,
      navbar: NavbarStudio,
    }
  },
  theme: myTheme,

  plugins: [
    deskTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
