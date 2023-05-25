import { CreateUserUseCasePort } from '@/domain/ports/inbound'
import { CreateUserRequest } from '@/adapters/inbound/controller/request'
import { UserResponse } from '@/adapters/inbound/controller/response'
import { HttpResponse, ok } from  '@/adapters/inbound/controller/response/helpers'
import { Controller } from '@/adapters/inbound/controller'

export class CreateUserController implements Controller<CreateUserRequest> {
  constructor (
    private readonly createUserUseCase: CreateUserUseCasePort
  ) {}

  async execute (createUserRequest: CreateUserRequest): Promise<HttpResponse> {
    const request = createUserRequest.toUserDomain()
    const output = await this.createUserUseCase.execute(request)
    return ok(UserResponse.fromDomain(output))
  }
}
