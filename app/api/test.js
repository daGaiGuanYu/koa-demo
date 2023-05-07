const Router = require('@koa/router')

module.exports = function initTestApi() {
  const router = new Router()
  router.get('/', ctx => {
    ctx.body = "hello, I'm ppz"
  })

  router.post('/koa-bodyparser', ctx => {
    console.log(ctx.request.body)
    ctx.body = 'koa-bodyparser'
  })
  return router
}