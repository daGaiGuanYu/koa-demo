{ simple } = require './_base'

# 取出请求体里的数据，此功能使用了 koa-bodyparser 中间件
module.exports = simple(
  prefix: '/data_in_body'

  ({ POST }) ->
    # json
    POST '/json', (ctx) ->
      console.log 'json', ctx.request.body # 自动解析 json
      ctx.respond.json ctx.request.body
)
