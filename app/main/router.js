const Path = require('path')
const FS = require('fs')
const restful_api = require('../common/restful_api')
const log = require('../common/log')

// 读取全部 api 目录下的文件
const apis = FS.readdirSync(Path.join(__dirname, '../api'))
  .filter(filename => filename[0] != '_')
  .map(filename => {
    const init_api = require('../api/' + filename)
    if(init_api instanceof Function) {
      log.info('new api', filename)
      return init_api
    } else {
      log.info('new simple api', filename)
      return restful_api.simple(filename.split('.')[0])
    }
  })

module.exports = function init_router(app) {
  for(const init_api of apis) {
    const router = init_api()
    app
      .use(router.routes())
      .use(router.allowedMethods())
  }
}
