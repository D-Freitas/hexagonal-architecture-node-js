export interface JwtService {
  generateToken(payload: Record<string, unknown>): Promise<string>
  verifyToken(token: string): Promise<Record<string, unknown>>
}
