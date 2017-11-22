const express = require('express')

const server = express()

server.get('/', (req, res) => {
  res.json({ message: 'This is home' })
})
server.get('/about', (req, res) => {
  res.json({ message: 'This is about' })
})

server.listen(8001, () => {
  console.log('Startd at http://localhost:8001');
})