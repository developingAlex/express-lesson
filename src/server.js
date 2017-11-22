const express = require('express')

const server = express()

const ticketsRouter = require('./routes/tickets') //we don't need to mention ./routes/tickets.js because express expects it to be .js, it's implied.


server.get('/', (req, res) => {
  res.json({ message: 'This is home' })
})
server.get('/about', (req, res) => {
  res.json({ message: 'This is about' })
})
server.use('/', ticketsRouter)

server.listen(8001, () => {
  console.log('Startd at http://localhost:8001');
})