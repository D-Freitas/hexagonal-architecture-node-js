import { CreateUserUseCasePort } from '@/domain/ports/inbound'
import { SaveUserAdapterPort } from '@/domain/ports/outbound'
import { User } from '@/domain/entities'

export class CreateUserUseCase implements CreateUserUseCasePort {
  constructor (
    private readonly userRepository: SaveUserAdapterPort
  ) {}

  async execute (user: User): Promise<User> {
    const output = await this.userRepository.save({
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      age: user.age
    })
    const userData = new User(output.firstName, output.lastName, output.username, output.age)
    return userData
  }
}
