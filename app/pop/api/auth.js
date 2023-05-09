const { simple } = require('./_base')

module.exports = simple(
  {
    prefix: '/auth'
  },
  router => {
    router.post('/login', ctx => {
      const { username, passwd } = ctx.request.body
      if(username == 'ppz' && passwd == '0523') {
        ctx.session.user = { username }
        return ctx.respond._()
      } else {
        ctx.respond.str('login failed')
      }
    })
  }
)
