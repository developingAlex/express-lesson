const express = require('express')
const queryString = require('querystring')
const Animal = require('../models/animal')
const router = express.Router()

router.get('/animals', (req,res) => {
  if (req.query.q){
    searchKey = req.query.q
    res.json(Animal.search(searchKey))
  }
  else{

    res.json(Animal.all())
  }
})

router.get('/animals/sort', (req,res) => {
  Animal.sort()
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

router.post('/animals', (req, res) => {
  //the attributes sent through on the new animal will be accessable via the req.body
  
  // const rawData = req.body
  // const attributes = JSON.parse(rawData)
  // above two lines no longer necessary because of the server.use(bodyParser.json()) line in our server.js file.
  const attributes = req.body

  const newAnimal = Animal.create(attributes)
  res.status(201)
  res.json(newAnimal)
})

router.delete('/animals/:id', (req, res) => {
  
  const id = req.params['id']
  destroyedAnimal = Animal.find(id)
  if (destroyedAnimal){

    Animal.destroy(id)
    
    res.status(200).json(destroyedAnimal) // the response is necessary for it to work properly
  }
  else{

    res.status(404) //status is the express way of writeHead (which doesn't work in this case "Error: Can't set headers after they are sent.")
    res.json({"message":`no animal found with id ${id}`})
  }
})

router.patch('/animals/:id', (req, res) =>{
  const id = req.params['id']
  updatedAnimal = Animal.find(id)
  if (updatedAnimal !== null){

    Animal.update(id, req.body)
    res.json(updatedAnimal)
  }
  else{
    res.status(404) //status is the express way of writeHead (which doesn't work in this case "Error: Can't set headers after they are sent.")
    res.json({"message":`no animal found with id ${id}`})
  }
})
module.exports = router // to allow this to be used externally by the other files.