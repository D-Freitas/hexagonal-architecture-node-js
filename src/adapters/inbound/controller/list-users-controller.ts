import { badRequest, HttpResponse, ok } from  '@/adapters/inbound/controller/helpers'
import { Controller } from '@/adapters/inbound/controller'
import { LoginDTO } from '@/adapters/inbound/dtos'
import { ListUsersUseCase } from '@/domain/ports/inbound/usecases'
import { NoUsersError } from '@/adapters/inbound/errors'

export class ListUsersController implements Controller<LoginDTO> {
  constructor (
    private readonly listUsersUseCase: ListUsersUseCase
  ) {}

  async execute (): Promise<HttpResponse> {
    const users = this.listUsersUseCase.execute()
    if (users instanceof NoUsersError) {
      return badRequest(users.message)
    }
    return ok(users)
  }
}
