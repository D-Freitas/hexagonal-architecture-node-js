import { CreateUserRequest } from '@/adapters/inbound/controller/request'
import { Controller } from '@/adapters/inbound/controller'

import { RequestHandler } from 'express'

type Adapter = (controller: Controller<CreateUserRequest>) => RequestHandler

export const adaptExpressRoute: Adapter = controller => async (req, res) => {
  const { statusCode, data } = await controller.execute({ ...req.body })
  const json = [200, 204].includes(statusCode) ? data : { error: 'Something went wrong.' }
  res.status(statusCode).json(json)
}
