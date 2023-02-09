import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Sanity Project',

  projectId: 'ze5a670s',
  dataset: 'medretur',

  plugins: [
    deskTool(),
    visionTool(),
    '@sanity/base',
    '@sanity/desk-tool',
    '@sanity/components',
    '@sanity/dashboard',
    '@sanity/default-layout',
    '@sanity/default-login',
    '@sanity/vision',
  ],

  schema: {
    types: schemaTypes,
  },
})
