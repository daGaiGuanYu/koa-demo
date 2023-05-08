const { v4: uuid } = require('uuid')

function addTimestamps(record) {
  record.created_at = new Date()
  record.updated_at = new Date()
}

function addId(record) {
  record.id = uuid()
}

exports.insert = async function(table, record) {
  addId(record)
  addTimestamps(record)
  await table.insert(record)
  return record.id
}
