export interface CacheRepository {
  set: (key: string, value: string, ttl: number) => Promise<void>
  get: (key: string) => Promise<string | null>
}
