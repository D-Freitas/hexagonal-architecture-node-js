import { CreateUserUseCasePort } from '@/domain/ports/inbound'
import { CreateUserUseCase } from '@/domain/use-cases'
import { UserRepository } from '@/adapters/outbound/repositories'

export const makeCreateUserUseCase = (): CreateUserUseCasePort => {
  return new CreateUserUseCase(new UserRepository())
}
