import { User } from '@/domain/entities'
import { CreateUserResponse } from '@/adapters/inbound/controller/response'

describe('CreateUserRequest', () => {
  it('should return an domain user entity with user attributes', () => {
    const sut = new CreateUserResponse('Davi', 'Freitas', 'davi_freitas', 21)
    expect(sut.toUserDomain()).toBeInstanceOf(User)
  })
})
