import { adaptExpressCreateUserRoute as adapt } from '@/externals/web/adapters'
import { makeCreateUserController } from '@/externals/web/factories/adapters/inbound/controllers'

import { Router } from 'express'

export default (router: Router): void => {
  router.post('/user/create', adapt(makeCreateUserController()))
}
