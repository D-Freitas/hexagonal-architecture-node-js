import { UserRepository } from '@/adapters/outbound/repositories'
import { SaveUserAdapterPort } from '@/domain/ports/outbound'

export const makeUserRepository = (): SaveUserAdapterPort => {
  return new UserRepository()
}
