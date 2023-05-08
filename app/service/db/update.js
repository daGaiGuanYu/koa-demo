function update_updated_at(record) {
  record.updated_at = new Date()
}

exports.update = async function simpleUpdate(table, id, record) {
  update_updated_at(record)
  await table.where('id', id).update(record)
}
