import { JwtService } from '@/domain/ports/outbound'
import { JwtService } from '@/domain/services/jwt.service'

export const makeJwtService = (): JwtService => {
  return new JwtService()
}
