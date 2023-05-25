import { setupRoutes } from '@/externals/web/config/routes'
import express from 'express'

const app = express()
setupRoutes(app)
export { app }
