import * as bcrypt from 'bcrypt'
import { HashService } from '@/domain/ports/outbound/services'

export class BcryptHashService implements HashService {
  private readonly saltRounds = 10

  hash(password: string): Promise<string> {
    return bcrypt.hash(password, this.saltRounds)
  }

  compare(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash)
  }
}
