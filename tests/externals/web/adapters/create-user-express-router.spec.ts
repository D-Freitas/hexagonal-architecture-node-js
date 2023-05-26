import { adaptExpressCreateUserRoute } from '@/externals/web/adapters'
import { Controller } from '@/adapters/inbound/controller'
import { CreateUserRequest } from '@/adapters/inbound/controller/request'

import { Request, RequestHandler, Response, NextFunction } from 'express'
import { getMockReq, getMockRes } from '@jest-mock/express'
import { mock, MockProxy } from 'jest-mock-extended'

describe('CreateUserExpressRouter', () => {
  let req: Request
  let res: Response
  let next: NextFunction
  let controller: MockProxy<Controller<CreateUserRequest>>
  let sut: RequestHandler

  beforeAll(() => {
    req = getMockReq({ body: { firstName: 'any_first_name', lastName: 'any_last_name', userName: 'any_user_name', age: '21' } })
    res = getMockRes().res
    next = getMockRes().next
    controller = mock()
    controller.execute.mockResolvedValue({
      statusCode: 200,
      data: { data: 'any_data' }
    })
  })

  beforeEach(() => {
    sut = adaptExpressCreateUserRoute(controller)
  })

  it('should call execute method with correct request', async () => {
    await sut(req, res, next)
    expect(controller.execute).toHaveBeenCalledWith({ firstName: 'any_first_name', lastName: 'any_last_name', userName: 'any_user_name', age: '21' })
    expect(controller.execute).toHaveBeenCalledTimes(1)
  })

  it('should call execute with empty request', async () => {
    const req = getMockReq()

    await sut(req, res, next)
    
    expect(controller.execute).toHaveBeenCalledWith({})
  })

  it('should respond with 200 and valid data', async () => {
    await sut(req, res, next)

    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.status).toHaveBeenCalledTimes(1)
    expect(res.json).toHaveBeenCalledWith({ data: 'any_data' })
    expect(res.json).toHaveBeenCalledTimes(1)
  })
})
