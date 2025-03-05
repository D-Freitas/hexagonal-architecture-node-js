import { LoginDTO } from "@/adapters/inbound/dtos"

export interface AuthService {
  login: (dto: LoginDTO) => Promise<string | Error>
}
