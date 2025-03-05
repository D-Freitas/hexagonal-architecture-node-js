export interface FindUserRepository {
  findByLogin: (input: FindUserRepository.Input) => Promise<FindUserRepository.Output>
}

export namespace FindUserRepository {
  export type Input = string
  export type Output = {
    id: string
    login: string
    password: string
  }
}
