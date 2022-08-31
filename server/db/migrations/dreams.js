exports.up = (knex) => {
  return knex.schema.createTable('Dreams', (table) => {
    table.increments().primary()
    table.string('keyword')
    table.string('meaning')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('Dreams')
}
