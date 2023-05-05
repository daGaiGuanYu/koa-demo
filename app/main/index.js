import Koa from 'koa'
import initRouter from './router.js'
import log from '../common/log.js'
import { server as serverConfig } from '../config.js'

async function main() {
  log.info('nybl server starting')
  const app = new Koa()
  initRouter(app)

  app.listen(serverConfig.port, function() {
    log.info('nybl server started on', serverConfig.port)
  })
}

main()