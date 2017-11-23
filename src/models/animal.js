
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
  },
]
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

function all(){
  return animals
}

module.exports = {
  all,
  find
}