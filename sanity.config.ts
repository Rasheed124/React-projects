/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\admin\[[...index]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schema'
import Navbar from './components/studio/Navbar'
import Logo from './components/studio/Logo'

export default defineConfig({
  basePath: '/admin',
  name: 'Rasheed_Dashboard',
  title: 'RASHEED DASHBOARD',

  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,

    studio: {
    components: {
      logo: Logo,
      navbar: Navbar
    }
  },

  plugins: [
    deskTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
})
