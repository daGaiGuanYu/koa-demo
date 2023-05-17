require '@ppzp/meta'
Koa = require 'koa'
BodyParser = require 'koa-bodyparser'
KoaSession = require 'koa-session'
log = require '@ppzp/log'

Config = require('../config')
{ make_response_middleware } = require('../pop/middleware/response')
debug_middleware = require('../pop/middleware/debug')

init_router = require('./router')
make_model_middleware = require('./model')

do ->
  log.info 'nsad starting'
  log.info 'Config:', JSON.stringify Config
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
    Config.development.server.port
    ->
      log.info 'nsad started on', Config.development.server.port
  )
