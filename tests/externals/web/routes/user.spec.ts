import { app } from '@/externals/web/config/app'
import request from 'supertest'

describe('User Routes', () => {
  describe('POST /user/create', () => {
    it('should return 200 with valid data', async () => {
      const { status } = await request(app).post('/api/user/create')
      expect(status).toBe(200)
    })
  })
})
