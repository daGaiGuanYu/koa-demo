const init_model = require('../model')

module.exports = function make_model_middleware() {
  const model = init_model()
  return function model_middleware(ctx, next) {
    if(ctx.knex)
      throw Error('ctx.knex is already defined')
    ctx.knex = model
    return next()
  }
}
