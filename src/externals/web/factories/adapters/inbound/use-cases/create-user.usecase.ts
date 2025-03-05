import { CreateUserUseCase } from '@/adapters/inbound/use-cases'
import { CreateUserUseCase } from '@/domain/ports/inbound'
import { makeUserRepository } from '@/externals/web/factories/adapters/outbound'
import { makeHashService } from '@/externals/web/factories/domain/services'

export const makeCreateUserUseCase = (): CreateUserUseCase => {
  return new CreateUserUseCase(
    makeUserRepository(),
    makeHashService()
  )
}
