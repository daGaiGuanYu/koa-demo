Path = require 'path'

module.exports =
  development:
    server:
      port: 3000
    database:
      client: 'better-sqlite3'
      connection:
        filename: Path.join __dirname, 'database/db.sqlite3'
