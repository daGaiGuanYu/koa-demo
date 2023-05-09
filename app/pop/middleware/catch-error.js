class PpzError extends Error {
  constructor(msg, msg2user, code) {
    super(msg)
    this.msg2user = msg2user
    this.code = code
  }
}
