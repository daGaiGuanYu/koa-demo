const Router = require('@koa/router')

// 一个 api 就是一个“返回 router 的函数”
module.exports = function init_test_api() {
  const router = new Router()

  router.get('/', ctx => {
    ctx.respond.str("hello, I'm ppz")
  })

  return router
}