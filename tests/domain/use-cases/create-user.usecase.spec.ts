import { CreateUserUseCase } from "@/domain/use-cases"
import { SaveUserAdapterPort } from '@/domain/ports/outbound'
import { User } from '@/domain/entities'

describe('CreateUserUseCase', () => {
  class UserRepositorySpy implements SaveUserAdapterPort {
    async save (input: SaveUserAdapterPort.Input): Promise<SaveUserAdapterPort.Output> {
      return {
        firstName: input.firstName,
        lastName: input.lastName,
        username: input.username,
        age: input.age
      }
    }
  }

  const makeSut = (): CreateUserUseCase => {
    const sut = new CreateUserUseCase(new UserRepositorySpy())
    return sut
  }

  it('should return user data if user is saved', async () => {
    const sut = makeSut()
    const user = new User('Davi', 'Freitas', 'davi_freitas', 21)
    expect(await sut.execute(user)).toEqual({
      firstName: 'Davi',
      lastName: 'Freitas',
      username: 'davi_freitas',
      age: 21
    })
  })
})
