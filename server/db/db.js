const config = require('./knexfile').development
// eslint-disable-next-line no-unused-vars
const connection = require('knex')(config)

function getEntries(db = connection) {
  return db('entries').select()
}

function getCards(db = connection) {
  return db('cards').select()
}

function addEntry(entry, db = connection) {
  return db('entries').insert(entry)
}

function getMeanings(db = connection) {
  return db('dreams').select()
}

function getEntry(id, db = connection) {
  return db('entries').select().where(`id`, id).first()
}

module.exports = {
  getEntries,
  addEntry,
  getEntry,
  getMeanings,
  getCards,
}
