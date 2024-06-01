import MongoDB from './mongodb'
import Logger from './logger'
import Cache from './caching'

export const db = new MongoDB()
export const logger = new Logger()
export const cache = new Cache()

export * from './constants'
