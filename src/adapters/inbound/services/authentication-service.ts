import { AuthService } from '@/domain/ports/inbound/services'

import { HashService, JwtService } from '@/domain/ports/outbound/services'
import { CacheRepository } from '@/domain/ports/outbound/repos'

import { LoginDTO } from '@/adapters/inbound/dtos'
import { DiskUserRepository } from '@/adapters/outbound/repositories'
import { InvalidCredentialsError } from '@/adapters/inbound/errors'

export class AuthenticationService implements AuthService {
  constructor (
    private readonly userRepository: DiskUserRepository,
    private readonly cacheRepository: CacheRepository,
    private readonly hashService: HashService,
    private readonly jwtServiceAdapter: JwtService
  ) {}

  async login (dto: LoginDTO): Promise<string | InvalidCredentialsError> {
    const user = await this.userRepository.findByLogin(dto.login)
    if (!user) {
      return new InvalidCredentialsError()
    }
    const isPasswordValid = await this.verifyPassword(dto.password, user.password)
    if (!isPasswordValid) {
      return new InvalidCredentialsError()
    }

    const previousToken = await this.cacheRepository.get(`active_token:${user.id}`)
    if (previousToken) {
      const decoded = await this.jwtServiceAdapter.verifyToken(previousToken) as { exp: number }
      const ttl = decoded.exp ? decoded.exp - Math.floor(Date.now() / 1000) : 0
      if (ttl > 0) await this.cacheRepository.set(`blacklist:${previousToken}`, "invalid", ttl)
    }

    const token = await this.generateToken(user)
    await this.cacheRepository.set(`active_token:${user.id}`, token, 60 * 60 * 24)

    return token
  }

  private verifyPassword (password: string, hash: string): Promise<boolean> {
    return this.hashService.compare(password, hash)
  }

  private generateToken (user: any): Promise<string> {
    return this.jwtServiceAdapter.generateToken(user)
  }
}
