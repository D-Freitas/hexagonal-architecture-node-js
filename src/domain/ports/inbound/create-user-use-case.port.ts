import { User } from "@/domain/entities"

export interface CreateUserUseCasePort {
  execute: (user: User) => User
}
