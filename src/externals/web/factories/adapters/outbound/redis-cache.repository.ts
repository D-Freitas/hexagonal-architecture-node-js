import { RedisCacheRepository } from '@/adapters/outbound/repositories'

export const makeRedisCacheRepository = (): RedisCacheRepository => {
  return new RedisCacheRepository()
}
