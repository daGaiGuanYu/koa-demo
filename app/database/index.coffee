Knex = require 'knex'
Config = require '../config'
log = require '@ppzp/log'

do ->
  knex = Knex Config.development.database

  await knex.schema.createTable 'demo', (table) ->
    table.uuid('id').primary()
    table.string('name')
    table.timestamp('birthday')
    table.timestamps()

  log.info 'done'