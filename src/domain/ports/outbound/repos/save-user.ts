export interface SaveUserRepository {
  save: (input: SaveUserRepository.Input) => Promise<SaveUserRepository.Output>
}

export namespace SaveUserRepository {
  export type Input = {
    login: string
    password: string
  }
  export type Output = {
    login: string
    password: string
  }
}
