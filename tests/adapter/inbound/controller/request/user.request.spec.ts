import { User } from '@/domain/entities'
import { CreateUserRequest } from '@/adapters/inbound/controller/request'

describe('CreateUserRequest', () => {
  it('should return an domain user entity with user attributes', () => {
    const sut = new CreateUserRequest('Davi', 'Freitas', 'davi_freitas', 21)
    expect(sut.toUserDomain()).toBeInstanceOf(User)
  })
})
