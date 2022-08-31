exports.up = (knex) => {
  return knex.schema.createTable('Entries', (table) => {
    table.increments().primary()
    table.date('date_posted')
    table.string('entry')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('Entries')
}
