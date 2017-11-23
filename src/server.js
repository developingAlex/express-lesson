const express = require('express')

const server = express()

server.get('/', (req, res) => {
  res.json({ message: 'This is home' })
})
server.get('/about', (req, res) => {
  res.json({ message: 'This is about' })
})
server.use('/', [
  require('./routes/tickets'), 
  require('./routes/animals')
]) //the '/' part just declares that there is not going to be a prefix to the routes mentioned by ticketsRouter...
//we don't need to mention ./routes/tickets.js because express expects it to be .js, it's implied.
server.listen(8001, () => {
  console.log('Started at http://localhost:8001');
})