const log = require('../common/log')

module.exports = async function debugMiddleware(ctx, next) {
  log.debug(ctx.method, ctx.path)
  await next()
  log.debug('finish', ctx.method, ctx.path)
}
