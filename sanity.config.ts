import { defineConfig } from 'sanity'
import { visionTool } from '@sanity/vision'
import { structureTool } from 'sanity/structure'
import { apiVersion, dataset, projectId } from './sanity/env'
import { schema } from './sanity/schemaTypes'
import { structure } from './sanity/structure'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  roleBasedAccess: {
    grants: [
      {
        role: 'editor',
        permissions: ['read', 'create', 'update', 'delete'],
      },
      {
        role: 'admin',
        permissions: ['read', 'create', 'update', 'delete'],
      }
    ]
  }
})
