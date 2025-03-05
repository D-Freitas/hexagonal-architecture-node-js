import { NoUsersError } from "@/adapters/inbound/errors"

export interface User {
  id: string
  login: string
  password: string
}

export interface ListUsersRepository {
  listUsers: () => Promise<ListUsersRepository.Output>
}

export namespace ListUsersRepository {
  export type Output = User[] | NoUsersError
}
