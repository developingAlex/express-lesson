const express = require('express')

const server = express()

server.listen(8001, () => {
  console.log('Startd at http://localhost:8001');
})