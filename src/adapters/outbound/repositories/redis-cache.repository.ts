import { CacheRepository } from '@/domain/ports/outbound/repos'
import Redis from 'ioredis'

export class RedisCacheRepository implements CacheRepository {
  private client: Redis

  constructor () {
    this.client = new Redis({
      host: '127.0.0.1',
      port: 6379
    })
    this.client.on('connect', () => console.log('🔌 Conectado ao Redis'))
    this.client.on('error', (err) => console.error('❌ Erro no Redis:', err))
  }

  async set(key: string, value: string, ttl = 3600) {
    await this.client.set(key, value, 'EX', ttl)
  }

  async get(key: string) {
    const data = await this.client.get(key)
    return data
  }
}
