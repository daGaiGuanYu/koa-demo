const Path = require('path')
const FS = require('fs')
const restfulApi = require('../common/restful_api')
const log = require('../common/log')

// 读取全部 api 目录下的文件
const apis = FS.readdirSync(Path.join(__dirname, '../api'))
  .filter(filename => filename[0] != '_')
  .map(filename => {
    const initApi = require('../api/' + filename)
    if(initApi instanceof Function) {
      log.info('new api', filename)
      return initApi
    } else {
      log.info('new simple api', filename)
      return restfulApi.simple(filename.split('.')[0])
    }
  })

module.exports = function initRouter(app) {
  for(const initApi of apis) {
    const router = initApi()
    app
      .use(router.routes())
      .use(router.allowedMethods())
  }
}
