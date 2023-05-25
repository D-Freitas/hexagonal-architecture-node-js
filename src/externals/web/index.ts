import './config/module-alias'
import { env } from '@/externals/web/config/env'

import 'reflect-metadata'

(async () => {
  const { app } = await import('@/externals/web/config/app')
  app.listen(env.port, () => console.log(`Server running at http://localhost:${env.port}`))
})()
