const path = require('path')
const express = require('express')
const cors = require('cors')

const cards = require('./routes/cards')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(cors('*'))
server.use('/cards', cards)

// server.use('/*', (req, res) => res.sendStatus(404))

server.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/index.html'))
})

module.exports = server
