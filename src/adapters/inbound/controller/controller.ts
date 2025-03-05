import { HttpResponse } from '@/adapters/inbound/controller/helpers'

export interface Controller<T> {
  execute (request: T): Promise<HttpResponse>
}
