const initModel = require('../model')

module.exports = function makeModelMiddleware() {
  const model = initModel()
  return function modelMiddleware(ctx, next) {
    if(ctx.knex)
      throw Error('ctx.knex is already defined')
    ctx.knex = model
    return next()
  }
}
