import Knex from 'knex'
import Path from 'path'
import log from '../common/log.js'

export default function getConnection() {
  const dbPath = Path.join(import.meta.url, '../_.db')
  log.info('connecting db:', dbPath)
  return new Knex({
    client: 'better-sqlite3',
    connection: {
      filename: dbPath
    }
  })
}