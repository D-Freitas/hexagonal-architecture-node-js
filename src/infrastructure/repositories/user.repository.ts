import { promises } from 'fs'
import { SaveUserAdapterPort } from '@/domain/ports/outbound'

export class UserRepository implements SaveUserAdapterPort {
  async save (input: SaveUserAdapterPort.Input): Promise<SaveUserAdapterPort.Output> {
    await promises.appendFile('db/users.txt', `${JSON.stringify(input)}\n`)
    const output = { ...input }
    return output
  }
}
