import { UserRepository } from "@/adapters/outbound/repositories"

describe('UserRepository', () => {
  it('should save user data to a txt file', async () => {
    const sut = new UserRepository()
    const output = await sut.save({ firstName: 'Davi', lastName: 'Freitas', userName: 'davi_freitas', age: 21 })
    expect(output).toEqual({ firstName: 'Davi', lastName: 'Freitas', userName: 'davi_freitas', age: 21 })
  })
})
