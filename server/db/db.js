const config = require('./knexfile').development
// eslint-disable-next-line no-unused-vars
const connection = require('knex')(config)

function getCards(db = connection) {
  return db('cards').select()
}

module.exports = {
  getCards,
}
