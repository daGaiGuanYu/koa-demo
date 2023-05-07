class Respond {
  constructor(ctx) {
    this.ctx = ctx
    this.responded = false
  }
  json(data) {
    this.responded = true
    this.ctx.body = JSON.stringify(data)
  }
}

function makeResponseMiddleware(_Respond = Respond) {
  return async function responseMiddleware(ctx, next) {
    if(ctx.respond !== undefined)
      throw Error('ctx.respond already exists')
    ctx.respond = new _Respond(ctx)
    await next()
    if(!ctx.respond.responded) { // 确保有响应
      throw Error('no response')
    }
  }
}

module.exports = {
  Respond,
  makeResponseMiddleware
}