import { AuthService } from '@/adapters/inbound/services'
import { AuthService } from '@/domain/ports/inbound'
import { makeUserRepository, makeRedisCacheRepository } from '@/externals/web/factories/adapters/outbound'
import { makeHashService, makeJwtService } from '@/externals/web/factories/domain/services'

export const makeAuthService = (): AuthService => {
  return new AuthService(
    makeUserRepository(),
    makeRedisCacheRepository(),
    makeHashService(),
    makeJwtService()
  )
}