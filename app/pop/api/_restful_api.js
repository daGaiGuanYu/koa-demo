const Router = require('@koa/router')
const { retrieve_by_id, insert, update, del_by_id } = require('../service/db')

exports.get_all = function(router, table_name) { // 一次性获取**所有**数据
  router.get('/', async ({ respond, knex }) => {
    respond.json(await knex[table_name])
  })
}

exports.get_by_id = function(router, table_name) {
  router.get('/:id', async ({ params, respond, knex }) => {
    respond.json(await retrieve_by_id(knex[table_name], params.id))
  })
}

exports.create = function(router, table_name) {
  router.post('/', async ({ request, respond, knex }) => {
    respond.str(
      await insert(knex[table_name], request.body)
    )
  })
}

exports.update = function(router, table_name) {
  router.post('/:id', async ({ request, params, respond, knex }) => {
    respond.str(
      await update(knex[table_name], params.id, request.body)
    )
  })
}

exports.del = function(router, table_name) {
  router.delete('/:id', async ({ params, respond, knex }) => {
    respond.str(
      await del_by_id(knex[table_name], params.id)
    )
  })
}

exports.get = function(router, table_name) {
  exports.get_all(router, table_name)
  exports.get_by_id(router, table_name)
}

exports.all = function(router, table_name) {
  exports.get_all(router, table_name)
  exports.get_by_id(router, table_name)
  exports.create(router, table_name)
  exports.update(router, table_name)
  exports.del(router, table_name)
}

exports.simple = function simple_restful(table_name) {
  return function SimpleRouter() {
    const router = new Router({
      prefix: '/' + table_name
    })
    exports.all(router, table_name)
    return router
  }
}