require '@ppzp/meta'
Koa = require 'koa'
BodyParser = require 'koa-bodyparser'
KoaSession = require 'koa-session'
log = require '@ppzp/log'

{ server: server_config } = require('../config')
{ make_response_middleware } = require('../pop/middleware/response.js')
debug_middleware = require('../pop/middleware/debug')

init_router = require('./router')
make_model_middleware = require('./model')

do ->
  log.info 'nsad starting'
  app = new Koa()

  # debug
  app.use debug_middleware
  # http response: 加装 ctx.respond
  app.use make_response_middleware()
  # http request support json, form, test. for multipart use @koa/multer
  app.use BodyParser()
  # db: 加装 ctx.knex
  app.use make_model_middleware()
  # session
  app.keys = ['PPZ']
  app.use KoaSession app
  
  init_router app

  app.listen(
    server_config.port
    ->
      log.info 'nsad started on', server_config.port
  )
