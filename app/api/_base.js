const Router = require('@koa/router')

exports.simple = function simple_router(config, init_api) {
  return function init_simple_router() {
    if(init_api === undefined) {
      init_api = config
      config = undefined
    }
    const router = new Router(config)
    init_api(router)
    return router
  }
}
