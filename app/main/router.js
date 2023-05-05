import initTestApi from '../api/test.js'

export default function initRouter(app) {
  for(const initApi of [
    initTestApi
  ]) {
    const router = initApi()
    app
      .use(router.routes())
      .use(router.allowedMethods())
  }
}
