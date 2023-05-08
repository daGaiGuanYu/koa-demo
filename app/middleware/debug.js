const log = require('../common/log')

module.exports = async function debugMiddleware(ctx, next) {
  log.debug('received request', ctx.method, ctx.path)
  await next()
  log.debug('finish', ctx.method, ctx.path)
}
