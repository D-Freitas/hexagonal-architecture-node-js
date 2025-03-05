import { LoginDTO } from '@/adapters/inbound/dtos'
import { Controller, CreateUserController } from '@/adapters/inbound/controller'
import { makeCreateUserUseCase } from '@/externals/web/factories/adapters/inbound/use-cases'

export const makeCreateUserController = (): Controller<LoginDTO> => {
  return new CreateUserController(
    makeCreateUserUseCase()
  )
}
