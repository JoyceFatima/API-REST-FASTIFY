import { knex as setupKnex, Knex } from 'knex'
import { env } from './env/env'

export const config: Knex.Config = {
  client: 'mysql',
  connection: {
    filename: env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const knex = setupKnex(config)
