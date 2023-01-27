import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {customStructure} from './deskStructure'

export default defineConfig({
  name: 'default',
  title: import.meta.env.SANITY_STUDIO_PROJECT_TITLE,
  basePath: '/',
  projectId: import.meta.env.SANITY_STUDIO_PROJECT_ID,
  dataset: 'production',
  plugins: [
    deskTool({
      structure: customStructure,
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
})
