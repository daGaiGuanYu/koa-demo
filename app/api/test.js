import Router from '@koa/router'

export default function initTestApi() {
  const router = new Router()
  router.get('/', function(ctx) {
    ctx.response.res.end("hello, I'm ppz")
  })

  return router
}