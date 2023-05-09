const Knex = require('knex')
const connection = require('./knexfile').development

module.exports = function init_model() {
  return new Proxy(Knex(connection), { // 允许任意的 table name
    get(knex, table_name) {
      // 复杂的 db 逻辑，在 service 里做
      return knex(table_name)
    }
  })
}
