/**
 * format date
 * @param {Date} date 
 * @returns {string}
 */
exports.formatDate = function(date) {
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}

exports.now = function() {
  return exports.formatDate(new Date())
}
