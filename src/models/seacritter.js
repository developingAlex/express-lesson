let critters = [
  {
    id: 1, 
    name: 'Starfish',
    count: 3
  },{
    id: 2, 
    name: 'Seahorse',
    count: 201
  },{
    id: 3,
    name: 'Sea Cucumber',
    count: 31
  },{
    id: 4,
    name: 'Cone Shell',
    count: 16
  },{
    id: 5,
    name: 'Lion fish',
    count: 23
  }
]

let nextId = 6

function all(){
  return critters;
}

function find(id){
  id = parseInt(id, 10)
  let foundCritter = null
  critters.forEach((critter) => {
    if (critter.id === id){
      foundCritter = critter
    }
  })
  return foundCritter
}

function create(attributes){
  const newCritter = Object.assign({}, attributes, {'id': nextId})
  nextId  += 1
  critters.push(newCritter)
  return newCritter
}

function destroy(critterId){
  id = parseInt(critterId, 10)
  let foundCritter = find(id)
  if (foundCritter){
    critters.splice(critters.indexOf(foundCritter), 1)
  }
  return foundCritter
}

// function update
module.exports = {
  all,
  find,
  create,
  destroy
}