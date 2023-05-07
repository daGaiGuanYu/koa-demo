const Koa = require('koa')
const BodyParser = require('koa-bodyparser')

const initRouter = require('./router.js')
const log = require('../common/log.js')
const { server: serverConfig } = require('../config.js')

async function main() {
  log.info('nybl server starting')
  const app = new Koa()

  // support json, form, test. for multipart use @koa/multer
  app.use(BodyParser())

  initRouter(app)

  app.listen(serverConfig.port, function() {
    log.info('nybl server started on', serverConfig.port)
  })
}

main()