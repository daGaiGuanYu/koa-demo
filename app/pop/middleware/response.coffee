class Respond
  constructor: (@ctx) ->
    @_responded = false # read only

  __mark_responded: ->
    if @_responded
      throw Error 'already responded'
    @_responded = true
  
  json: (data) ->
    @__mark_responded()
    @ctx.body = JSON.stringify data
  
  str: (msg) ->
    @__mark_responded()
    @ctx.body = msg
  
  _: ->
    @__mark_responded()
    @ctx.body = ''

make_response_middleware = (_Respond = Respond) -> (ctx, next) ->
  unless ctx.respond == undefined
    throw Error 'ctx.respond already exists'
  ctx.respond = new _Respond ctx
  await next()
  unless ctx.respond._responded # 确保有响应
    throw Error 'no response'

module.exports = {
  Respond
  make_response_middleware
}