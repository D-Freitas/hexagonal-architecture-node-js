import { LoginDTO } from '@/adapters/inbound/dtos'

export interface CreateUserUseCase {
  execute: (user: LoginDTO) => Promise<LoginDTO>
}
