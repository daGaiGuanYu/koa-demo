const { simple } = require('./_base')

// 取出请求里的数据
module.exports = simple(
  {
    prefix: '/data_in_request'
  },
  router => {
    // 取路径参数（用问号隔开的那种）
    // GET /data_in_request/query?name=ppz&year=3
    router.get('/query', ctx => {
      console.log('query', ctx.request.query)
      ctx.respond.json(ctx.request.query)
    })
    
    // 取路径参数（在路径里的那种）
    // GET /data_in_request/params/ccz/2
    router.get('/params/:name/:year', ctx => {
      console.log('params', ctx.request.params)
      ctx.respond.json(ctx.request.params)
    })
  }
)
