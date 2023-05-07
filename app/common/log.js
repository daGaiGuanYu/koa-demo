const { now } = require('./utils.js')

module.exports = {
  info() {
    console.log(`[info ${now()}]`, ...arguments)
  },
//   warn() { // 如果一件事做得不好，应直接判定为 error
//     console.log(`[warn ${new Date()}]`, ...arguments)
//   },
  error() {
    console.log(`[error ${now()}]`, ...arguments)
  }
}
