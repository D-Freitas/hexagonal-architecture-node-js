import { CreateUserRequest } from '@/adapters/inbound/controller/request'
import { Controller } from '@/adapters/inbound/controller'

import { RequestHandler } from 'express'

type Adapter = (controller: Controller<CreateUserRequest>) => RequestHandler

export const adaptExpressCreateUserRoute: Adapter = controller => async (req, res) => {
  const requestData = req.body as { firstName: string, lastName: string, userName: string, age: number }
  const request = new CreateUserRequest(requestData.firstName, requestData.lastName, requestData.userName, requestData.age)
  const { statusCode, data } = await controller.execute(request)
  const json = [200, 204].includes(statusCode) ? data : { error: data.message }
  res.status(statusCode).json(json)
}
