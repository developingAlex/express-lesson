const express = require('express')

const server = express()
const ticketsRouter = require('./routes/tickets') //we don't need to mention ./routes/tickets.js because express expects it to be .js, it's implied.
const animalsRouter = require('./routes/animals')


server.get('/', (req, res) => {
  res.json({ message: 'This is home' })
})
server.get('/about', (req, res) => {
  res.json({ message: 'This is about' })
})
server.use('/', ticketsRouter) //the '/' part just declares that there is not going to be a prefix to the routes mentioned by ticketsRouter...
server.use('/', animalsRouter)
server.listen(8001, () => {
  console.log('Started at http://localhost:8001');
})