
let animals = [
  {
    id: 1,
    name: 'Meercat',
    count: 27
  },
  {
    id: 2,
    name: 'White Rhinocerous',
    count: 1
  },
  {
    id: 3,
    name: 'Peacocks',
    count: 14
  },
  {
    id: 4,
    name: 'Giraffe',
    count: 4
  },
  {
    id: 5,
    name: 'Tasmanian Tiger',
    count: 0
  },{
    id: 6,
    name: 'Paper Wasp',
    count: 6482
  }
]

let nextId = 7

function find(id){
  id = parseInt(id, 10) //the 10 means base 10: decimal
  let foundAnimal = null
  animals.forEach((animal) => {
    if (animal.id === id){
      foundAnimal = animal
      // break
    }
  })
  return foundAnimal
}

function create(attributes){
  //create the new animal
  const newAnimal = Object.assign({}, attributes, {id: nextId}) //object.assign means the first argument is the starting object, in our case empty of attributes, then what follows is the objects whose attributes you want to add to the first argument object.
  //increment the id counter
  nextId += 1
  //add the animal to our 'zoo'
  animals.push(newAnimal)
  //send back the newly created animal
  return newAnimal
}

function destroy(id){
  id = parseInt(id, 10)
  //iterate through the animals array and make a copy of it but leave out the one that is referred to by id.
  let newAnimals = []
  animals.forEach(animal => {
    if (animal.id !== id){
      newAnimals.push(animal)
    }
  });
  animals = newAnimals
}

function update(id, attributes){
  id = parseInt(id, 10)
  animalToUpdate = find(id)
  Object.assign(animalToUpdate, attributes)
}

function all(){
  return animals
}


module.exports = {
  all,
  find,
  create,
  destroy,
  update
}