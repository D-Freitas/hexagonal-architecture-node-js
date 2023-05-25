import { UserController } from '@/adapters/inbound/controller'
import { CreateUserRequest } from '@/adapters/inbound/controller/request'
import { UserResponse } from '@/adapters/inbound/controller/response'
import { ok } from '@/adapters/inbound/controller/response/helpers'
import { User } from '@/domain/entities'
import { CreateUserUseCasePort } from '@/domain/ports/inbound'

describe('UserController', () => {
  class CreateUserUseCaseSpy implements CreateUserUseCasePort {
    execute (user: User): Promise<User> {
      return new Promise(resolve => resolve(user))
    }
  }

  const makeSut = (): UserController => {
    const sut = new UserController(new CreateUserUseCaseSpy())
    return sut
  }

  it('should return 200 if data if returns', async () => {
    const sut = makeSut()

    const user = new User('Davi', 'Freitas', 'davi_freitas', 21)
    const request = new CreateUserRequest('Davi', 'Freitas', 'davi_freitas', 21)
    const response = ok(UserResponse.fromDomain(user))
    
    expect(await sut.execute(request)).toEqual(response)
  })
})