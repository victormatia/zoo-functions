const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const selectedAnimal = data.species.find((specie) => specie.name === animal); // retorna obj de animal selecionado.
  const allAnimals = selectedAnimal.residents; // retorna um array com todos os animais da especie desejada.
  return allAnimals.every((e) => e.age >= age); // verifica se as idades são maiores ou iguais a age
}

module.exports = getAnimalsOlderThan;
