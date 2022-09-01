const path = require('path')
const express = require('express')
const cors = require('cors')

const entries = require('./routes/entries')
const dreams = require('./routes/dreams')
const study = require('./routes/study')
const practice = require('./routes/practice')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(cors('*'))
server.use('/entries', entries)
server.use('/dreams', dreams)
server.use('/study', study)
server.use('/practice', practice)
server.use('/*', (req, res) => res.sendStatus(404))

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

module.exports = server
