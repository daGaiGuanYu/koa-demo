class Respond {
  #responded = false
  constructor(ctx) {
    this.ctx = ctx
  }
  get responded() {
    return this.#responded
  }

  #markResponded() {
    if(this.#responded)
      throw Error('already responded')
    this.#responded = true
  }
  json(data) {
    this.#markResponded()
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