log = require '@ppzp/log'

module.exports = (ctx, next) ->
  log.debug ctx.method, ctx.path
  await next()
  log.debug 'finish', ctx.method, ctx.path
