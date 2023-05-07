const initTestApi = require('../api/test.js')

module.exports = function initRouter(app) {
  for(const initApi of [
    initTestApi
  ]) {
    const router = initApi()
    app
      .use(router.routes())
      .use(router.allowedMethods())
  }
}
