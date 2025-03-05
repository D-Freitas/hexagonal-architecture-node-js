import { CreateUserUseCase } from '@/domain/ports/inbound/usecases'

import { HttpResponse, ok } from  '@/adapters/inbound/controller/helpers'
import { Controller } from '@/adapters/inbound/controller'
import { LoginDTO } from '@/adapters/inbound/dtos'

export class CreateUserController implements Controller<LoginDTO> {
  constructor (
    private readonly createUserUseCase: CreateUserUseCase
  ) {}

  async execute (userData: LoginDTO): Promise<HttpResponse> {
    await this.createUserUseCase.execute(userData)
    return ok({
      message: 'User created successfully',
    })
  }
}
