class Respond {
  #responded = false
  constructor(ctx) {
    this.ctx = ctx
  }
  get responded() {
    return this.#responded
  }

  #mark_responded() {
    if(this.#responded)
      throw Error('already responded')
    this.#responded = true
  }
  json(data) {
    this.#mark_responded()
    this.ctx.body = JSON.stringify(data)
  }
  str(msg) {
    this.#mark_responded()
    this.ctx.body = msg
  }
  _() {
    this.#mark_responded()
    this.ctx.res.end()
  }
}

function make_response_middleware(_Respond = Respond) {
  return async function response_middleware(ctx, next) {
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
  make_response_middleware
}