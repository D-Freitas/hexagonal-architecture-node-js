import { HashService } from '@/domain/ports/outbound'
import { HashService } from '@/domain/services/hash.service'

export const makeHashService = (): HashService => {
  return new HashService()
}
