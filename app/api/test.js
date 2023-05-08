const Router = require('@koa/router')
const { insert } = require('../service/db/insert')

module.exports = function initTestApi() {
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

  router.post('/restful', async ({ request, respond, knex }) => {
    await respond.json(
      await insert(knex.demo, request.body)
    )
  })

  return router
}