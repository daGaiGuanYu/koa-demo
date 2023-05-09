const Router = require('@koa/router')
const { insert } = require('../service/db/insert')
const { update } = require('../service/db/update')
const { retrieve_by_id } = require('../service/db/retrieve')
const { del_by_id } = require('../service/db/del')

module.exports = function init_test_api() {
  const router = new Router()

  router.get('/', ctx => {
    ctx.respond.json("hello, I'm ppz")
  })

  router.post('/middleware/body', ctx => {
    console.log(ctx.request.body)
    ctx.respond.json(ctx.request.body)
  })

  router.get('/restful', async ({ respond, knex }) => {
    await respond.json(await knex.demo)
  })

  router.get('/restful/:id', async ({ params, respond, knex }) => {
    await respond.json(await retrieve_by_id(knex.demo, params.id))
  })

  router.post('/restful', async ({ request, respond, knex }) => {
    await respond.json(
      await insert(knex.demo, request.body)
    )
  })

  router.post('/restful/:id', async ({ request, params, respond, knex }) => {
    await respond.json(
      await update(knex.demo, params.id, request.body)
    )
  })

  router.delete('/restful/:id', async ({ params, respond, knex }) => {
    await respond.json(
      await del_by_id(knex.demo, params.id)
    )
  })

  return router
}