import { HttpResponse } from '@/adapters/inbound/controller/response/helpers'

export interface Controller<T> {
  execute (request: T): Promise<HttpResponse>
}
