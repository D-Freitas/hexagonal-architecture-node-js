export type HttpResponse<T = any> = {
  statusCode: number
  data: T
}

export const ok = <T = any> (data: T): HttpResponse<T> => ({
  statusCode: 200,
  data
})

export const badRequest = <T = any> (data: T): HttpResponse<T> => ({
  statusCode: 400,
  data
})
