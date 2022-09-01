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

module.exports = router
