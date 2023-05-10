{ simple } = require './_base'

# 创建 router 对象的参数
module.exports = simple(
  prefix: '/hello3'
  
  ({ GET }) ->
    GET (ctx) ->
      ctx.respond.str("hello, I'm ppz, too, too")
)
