require('@ppzp/meta')
const Koa = require('koa')
const BodyParser = require('koa-bodyparser')
const KoaSession = require('koa-session')
const log = require('@ppzp/log')

const { server: server_config } = require('../config.js')
const { make_response_middleware } = require('../pop/middleware/response.js')
const debug_middleware = require('../pop/middleware/debug')

const init_router = require('./router.js')
const make_model_middleware = require('./model.js')

async function main() {
  log.info('ppz server starting')
  const app = new Koa()

  // debug
  app.use(debug_middleware)
  // http response: 加装 ctx.respond
  app.use(make_response_middleware())
  // http request support json, form, test. for multipart use @koa/multer
  app.use(BodyParser())
  // db: 加装 ctx.knex
  app.use(make_model_middleware())
  // session
  app.keys = ['PPZ']
  app.use(KoaSession(app))
  
  init_router(app)

  app.listen(server_config.port, function() {
    log.info('ppz server started on', server_config.port)
  })
}

main()