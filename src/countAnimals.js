const data = require('../data/zoo_data');

function countAnimals(animal) {
  const animals = data.species.reduce((acc, curr) => { // cria um obj contendo nome e quantidade dos animais
    acc[curr.name] = curr.residents.length;
    return acc;
  }, {});
  if (animal === undefined) return animals;
  if (animal.sex === undefined) return animals[animal.specie];
  const selectedAnimal = data.species.find((specie) => specie.name === animal.specie); // retorna o animal selecionado
  return selectedAnimal.residents.filter((a) => a.sex === animal.sex).length; // retorna o tamanho de residents com apenas o sexo selecionado
}

module.exports = countAnimals;

console.log(countAnimals({ specie: 'lions', sex: 'male' }));
