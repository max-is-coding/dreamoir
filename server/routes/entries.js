const express = require('express')
// const { Routes } = require('react-router-dom')

// eslint-disable-next-line no-unused-vars
const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getEntries()
    .then((entries) => {
      res.json(entries)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('Server error')
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  db.getEntry(id)
    .then((entry) => {
      res.json(entry)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('Server error')
    })
})

router.post('/', (req, res) => {
  const entry = {
    ...req.body,
    date_created: new Date(Date.now()),
  }
  db.addEntry(entry)
    .then((ids) => {
      const newEntryId = ids[0]
      return db.getEntry(newEntryId)
    })
    .then((newEntry) => {
      res.json(newEntry)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('Server error')
    })
})

module.exports = router
