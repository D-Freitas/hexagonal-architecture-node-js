import { ListUsersRepository } from '@/domain/ports/outbound/repos'
import { NoUsersError } from '@/adapters/inbound/errors'
import { ListUsersUseCase } from '@/domain/ports/inbound/usecases'

export class ListUsers implements ListUsersUseCase {
  constructor (
    private readonly userRepository: ListUsersRepository
  ) {}

  async execute (): Promise<ListUsersUseCase.Output> {
    const users = this.userRepository.listUsers()
    if (Array.isArray(users) && users.length === 0) {
      return new NoUsersError()
    }
    return users
  }
}
