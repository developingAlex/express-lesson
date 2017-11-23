const express = require('express')

const Animal = require('../models/animal')
const router = express.Router()

router.get('/animals', (req,res) => {
  res.json(Animal.all())
})

router.get('/animals/:id', (req, res) => {
  const id = req.params['id']
  let animal = Animal.find(id)
  if (animal !== null){
    res.json(animal)
  }
  else{
    res.status(404) //status is the express way of writeHead (which doesn't work in this case "Error: Can't set headers after they are sent.")
    res.json({"message":`no animal found with id ${id}`})
  }
})

module.exports = router // to allow this to be used externally by the other files.