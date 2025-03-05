export interface ListUsersUseCase {
  execute: () => Promise<ListUsersUseCase.Output>
}

export namespace ListUsersUseCase {
  type User = {
    id: string
    login: string
    password: string
  }
  export type Output = User[] | Error
}
