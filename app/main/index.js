const Koa = require('koa')
const BodyParser = require('koa-bodyparser')

const log = require('../common/log.js')
const { server: serverConfig } = require('../config.js')
const { makeResponseMiddleware } = require('../middleware/response.js')

const initRouter = require('./router.js')

async function main() {
  log.info('nybl server starting')
  const app = new Koa()

  // http response
  app.use(makeResponseMiddleware())
  // http request support json, form, test. for multipart use @koa/multer
  app.use(BodyParser())

  initRouter(app)

  app.listen(serverConfig.port, function() {
    log.info('nybl server started on', serverConfig.port)
  })
}

main()