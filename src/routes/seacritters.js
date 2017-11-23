const express = require('express')

const router = express.Router()

const Critter = require('../models/seacritter')

router.get('/seacritters', (req, res) => {
  res.json(Critter.all())
})

router.get('/seacritters/:id', (req, res) => {
  const id = req.params['id']
  let critter = Critter.find(id)
  if (critter){ //is not null
    res.json(critter)
  }
  else{
    res.status(404)
    res.json({"message":`couldn't find any sea critter with the id '${id}'`})
  }
})

router.post('/seacritters', (req, res) => {
  newCritter = Critter.create(req.body)
  res.status(201)
  res.json(newCritter)
})

router.delete('/seacritters/:id', (req, res) => {
  critterId = req.params['id']
  critterToDestroy = Critter.find(critterId) 
  if (critterToDestroy) {
    Critter.destroy(critterId)
    res.status(200).json(critterToDestroy)
  }
  else{
    res.status(404).json({"Message":`No critter found with id '${critterId}'`})
  }
})

router.patch('/seacritters/:id', (req, res) => {
  critterId = req.params['id']
  critterToUpdate = Critter.find(critterId)
  if (critterToUpdate){
    Critter.update(critterId, req.body)
    res.status(200).json(critterToUpdate)
  }
  else{
    res.status(404).json({"Message":`couldn't find any critter with the id ${critterId}`})
  }
})


module.exports = router