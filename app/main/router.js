const Path = require('path')
const FS = require('fs')

// 读取全部 api 目录下的文件
const apis = FS.readdirSync(Path.join(__dirname, '../api'))
  .filter(filename => filename[0] != '_')
  .map(filename => require('../api/' + filename))

module.exports = function initRouter(app) {
  for(const initApi of apis) {
    const router = initApi()
    app
      .use(router.routes())
      .use(router.allowedMethods())
  }
}
