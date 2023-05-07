const Path = require('path')
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

exports.development = {
  client: 'better-sqlite3',
  connection: {
    filename: Path.join(__dirname, '_.db')
  }
}
