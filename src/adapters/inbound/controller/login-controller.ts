import { badRequest, HttpResponse, ok } from  '@/adapters/inbound/controller/helpers'
import { Controller } from '@/adapters/inbound/controller'
import { LoginDTO } from '@/adapters/inbound/dtos'
import { AuthService } from '@/domain/ports/inbound/services'
import { InvalidCredentialsError } from '@/adapters/inbound/errors'

export class LoginController implements Controller<LoginDTO> {
  constructor (
    private readonly authService: AuthService
  ) {}

  async execute (login: LoginDTO): Promise<HttpResponse> {
    const result = await this.authService.login(login)
    if (result instanceof InvalidCredentialsError) {
      return badRequest(result.message)
    }
    return ok(result)
  }
}
