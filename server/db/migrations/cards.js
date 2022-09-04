exports.up = (knex) => {
  return knex.schema.createTable('Cards', (table) => {
    table.increments().primary()
    table.string('name')
    table.string('suit')
    table.string('value')
    table.string('image')
    table.string('type')
    table.text('upright')
    table.text('reversed')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('Cards')
}
