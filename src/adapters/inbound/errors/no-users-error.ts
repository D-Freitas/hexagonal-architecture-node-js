export class NoUsersError extends Error {
  constructor() {
    super('Nenhum usuário encontrado')
    this.name = 'NoUsersError'
  }
}
