const express = require('express')

const router = express.Router()

let animals = [
  {
    name: 'Meercat',
    count: 27
  },
  {
    name: 'White Rhinocerous',
    count: 1
  },
  {
    name: 'Peacocks',
    count: 14
  },
  {
    name: 'Giraffe',
    count: 4
  },
  {
    name: 'Tasmanian Tiger',
    count: 0
  },
]



router.get('/animals', (req,res) => {
  res.json(animals)
})

module.exports = router // to allow this to be used externally by the other files.