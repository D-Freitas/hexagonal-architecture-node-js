import * as jwt from 'jsonwebtoken'
import { JwtService } from '@/domain/ports/outbound/services'

export class JsonWebTokenService implements JwtService {
  private readonly secretKey = process.env.JWT_SECRET || 'default_secret'
  private readonly expiresIn = '1h'

  async generateToken(payload: Record<string, unknown>): Promise<string> {
    return jwt.sign(payload, this.secretKey, { expiresIn: this.expiresIn })
  }

  async verifyToken(token: string): Promise<Record<string, unknown>> {
    return new Promise((resolve, reject) => {
      jwt.verify(token, this.secretKey, (err, decoded) => {
        if (err) {
          reject(err)
        } else {
          resolve(decoded as Record<string, unknown>)
        }
      })
    })
  }
}
