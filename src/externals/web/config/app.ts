import { setupRoutes } from '@/externals/web/config/routes'
import express from 'express'
import { setupMiddlewares } from '@/externals/web/config/middlware'

const app = express()
setupMiddlewares(app)
setupRoutes(app)
export { app }
