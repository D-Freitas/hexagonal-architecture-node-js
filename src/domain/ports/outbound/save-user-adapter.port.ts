export interface SaveUserAdapterPort {
  save: (input: SaveUserAdapterPort.Input) => Promise<SaveUserAdapterPort.Output>
}

export namespace SaveUserAdapterPort {
  export type Input = {
    firstName: string
    lastName: string
    userName: string
    age: number
  }
  export type Output = {
    firstName: string
    lastName: string
    userName: string
    age: number
  }
}
