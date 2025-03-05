import { UserRepository } from '@/adapters/outbound/repositories'

export const makeUserRepository = (): UserRepository => {
  return new UserRepository()
}
