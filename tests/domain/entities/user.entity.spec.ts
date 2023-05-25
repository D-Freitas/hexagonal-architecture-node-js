import { User } from "@/domain/entities"

describe('UserEntity', () => {
  it('should return an object with user attributes', () => {
    const sut = new User('Davi', 'Freitas', 'davi_freitas', 21)
    expect(sut).toEqual({
      firstName: 'Davi',
      lastName: 'Freitas',
      username: 'davi_freitas',
      age: 21
    })
  })
})
