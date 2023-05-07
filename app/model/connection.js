const Knex = require('knex')
const Path = require('path')
const log = require('../common/log.js')

module.exports = function getConnection() {
  const dbPath = Path.join(__dirname, '_.db')
  log.info('connecting db:', dbPath)
  return new Knex({
    client: 'better-sqlite3',
    connection: {
      filename: dbPath
    }
  })
}