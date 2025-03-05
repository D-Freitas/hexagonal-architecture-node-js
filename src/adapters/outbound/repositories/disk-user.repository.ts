import { appendFile, readFile } from 'fs/promises'
import { SaveUserRepository, FindUserRepository, ListUsersRepository } from '@/domain/ports/outbound/repos'
import { randomUUID } from 'crypto'

export class DiskUserRepository
  implements
  SaveUserRepository,
  FindUserRepository,
  ListUsersRepository {
  async save(input: SaveUserRepository.Input): Promise<SaveUserRepository.Output> {
    await appendFile('db/users.txt', `${JSON.stringify({ id: randomUUID(), ...input })}\n`)
    const output = { ...input }
    return output
  }

  async findByLogin(input: FindUserRepository.Input): Promise<FindUserRepository.Output> {
    const data = await readFile('db/users.txt', 'utf-8')
    const users = data.split('\n').filter(Boolean).map(data => JSON.parse(data))
    return users.find(user => user.login === input)
  }

  async listUsers(): Promise<ListUsersRepository.Output> {
    const data = await readFile('db/users.txt', 'utf-8')
    const users = data.split('\n').filter(Boolean).map(data => JSON.parse(data))
    return users
  }
}
