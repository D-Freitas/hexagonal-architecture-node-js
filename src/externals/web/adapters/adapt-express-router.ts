import { Controller, CreateUserController, LoginController } from '@/adapters/inbound/controller'
import { CreateUerDTO, LoginDTO } from '@/adapters/inbound/dtos'

import { RequestHandler } from 'express'

export const adaptExpressRoute = <T>(controller: Controller<T>): RequestHandler => (
  async (req, res) => {
    if (controller instanceof CreateUserController) {
      const requestData = req.body as { login: string, password: string }
      const dto = new CreateUerDTO(requestData.login, requestData.password)
      const { statusCode, data } = await controller.execute(dto)
      const json = [200, 204].includes(statusCode) ? data : { error: data.message }
      res.status(statusCode).json(json)
      return
    }
    if (controller instanceof LoginController) {
      const requestData = req.body as { login: string, password: string }
      const dto = new LoginDTO(requestData.login, requestData.password)
      const { statusCode, data } = await controller.execute(dto)
      const json = [200, 204].includes(statusCode) ? data : { error: data.message }
      res.status(statusCode).json(json)
      return
    }
  }
)
