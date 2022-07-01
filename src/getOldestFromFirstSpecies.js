const data = require('../data/zoo_data');

const { species, employees } = data;

const findEmployee = (id) => employees.find((employee) => employee.id === id);

const getFirstAnimal = (employee) => species.find((spec) => spec.id === employee.responsibleFor[0]);

const findOldestAnimal = (animals) => {
  const olderAge = animals.residents.reduce((acc, curr) => Math.max(acc, curr.age), 0);
  return animals.residents.find((animal) => animal.age === olderAge);
};

function getOldestFromFirstSpecies(id) {
  const selectedAnimals = getFirstAnimal(findEmployee(id));
  return Object.values(findOldestAnimal(selectedAnimals));
}

module.exports = getOldestFromFirstSpecies;
