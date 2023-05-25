import { User } from '@/domain/entities'

export class CreateUserResponse {
  constructor (
    private readonly firstName: string,
    private readonly lastName: string,
    private readonly userName: string,
    private readonly age: number
  ) {}

  toUserDomain () {
    return new User(this.firstName, this.lastName, this.userName, this.age)
  }
}
