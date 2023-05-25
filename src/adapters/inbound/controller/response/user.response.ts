import { User } from '@/domain/entities'

export class UserResponse {
  static fromDomain (createUserUseCase: User) {
    return createUserUseCase
  }
}
