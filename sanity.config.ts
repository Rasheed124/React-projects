import { defineConfig } from 'sanity'

import {muxInput} from 'sanity-plugin-mux-input'

import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'



// Customize Files
import Logo from './components/studio/Logo'
import Navbar from './components/studio/Navbar'
import { myTheme } from './theme'
import { defaultDocumentNode } from './components/studio/defaultDocumentNode'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!

export default defineConfig({
  base: '/admin',
  name: 'Durodola_Admin_Dashboard',
  title: 'Durodola Admin Dashboard',

  projectId,
  dataset,
  apiVersion,


  plugins: [
    deskTool({ defaultDocumentNode: defaultDocumentNode }), visionTool() , muxInput()
  
  ],

  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: Logo,
      navbar: Navbar
    }
  },

  theme: myTheme
})
