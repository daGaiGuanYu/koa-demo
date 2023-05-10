{ simple } = require './_base'

# 一个 hello_world 的简化版本
module.exports = simple ({ GET }) ->
  GET '/hello2', (ctx) ->
    ctx.respond.str("hello, I'm ppz, too")
