import { Controller } from '@/adapters/inbound/controller'
import { LoginController } from '@/adapters/inbound/controller/login.controller'
import { LoginDTO } from '@/adapters/inbound/dtos'
import { makeAuthService } from '@/externals/web/factories/adapters/inbound/services'

export const makeLoginController = (): Controller<LoginDTO> => {
  return new LoginController(
    makeAuthService()
  )
}
