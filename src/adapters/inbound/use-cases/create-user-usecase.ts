import { CreateUserUseCase } from '@/domain/ports/inbound'
import { HashService, SaveUserAdapter } from '@/domain/ports/outbound'
import { LoginDTO } from '@/adapters/inbound/dtos'

export class CreateUserUseCase implements CreateUserUseCase {
  constructor (
    private readonly userRepository: SaveUserAdapter,
    private readonly hashService: HashService
  ) {}

  async execute (user: LoginDTO): Promise<LoginDTO> {
    const hashedUser = await this.hashPassword(user)
    return this.userRepository.save(hashedUser)
  }

  private async hashPassword (user: Readonly<LoginDTO>): Promise<LoginDTO> {
    const hashedPassword = await this.hashService.hash(user.password)
    return { ...user, password: hashedPassword }
  }
}
