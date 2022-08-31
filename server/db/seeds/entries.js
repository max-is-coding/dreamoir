exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('Entries')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('Entries').insert([
        {
          id: 1,
          date_posted: new Date(Date.now()),
          entry: 'Great blog',
        },
      ])
    })
}
