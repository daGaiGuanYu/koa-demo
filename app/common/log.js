export default {
  info() {
    console.log(`[info ${new Date()}]`, ...arguments)
  },
//   warn() { // 如果一件事做得不好，应直接判定为 error
//     console.log(`[warn ${new Date()}]`, ...arguments)
//   },
  error() {
    console.log(`[error ${new Date()}]`, ...arguments)
  }
}
