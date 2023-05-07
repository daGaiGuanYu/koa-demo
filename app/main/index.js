const Koa = require('koa')
const initRouter = require('./router.js')
const log = require('../common/log.js')
const { server: serverConfig } = require('../config.js')

async function main() {
  log.info('nybl server starting')
  const app = new Koa()
  initRouter(app)

  app.listen(serverConfig.port, function() {
    log.info('nybl server started on', serverConfig.port)
  })
}

main()