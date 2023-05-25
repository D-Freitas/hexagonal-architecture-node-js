import { Controller, UserController } from '@/adapters/inbound/controller'
import { CreateUserRequest } from '@/adapters/inbound/controller/request'
import { makeCreateUserUseCase } from '@/externals/web/factories/domain/use-cases'

export const makeCreateUserController = (): Controller<CreateUserRequest> => {
  return new UserController(makeCreateUserUseCase())
}
