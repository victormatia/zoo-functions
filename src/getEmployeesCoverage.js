const data = require('../data/zoo_data');

const getAnimals = (animals) => { // retorna um array com as informações dos animais passados como parâmetro
  const selectedAnimals = animals.map((animal) => data.species.find((spec) => spec.id === animal));
  return selectedAnimals;
};

const getInfoEmployess = () => data.employees.reduce((acc, employee) => {
  const newObj = {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: getAnimals(employee.responsibleFor).map((animal) => animal.name), // retorna um array com apenas o nome dos animais
    locations: getAnimals(employee.responsibleFor).map((animal) => animal.location), // retorna um array com apenas a localização dos animais
  };
  acc.push(newObj);
  return acc;
}, []);

const verifyId = (fun, id, obj) => {
  const isTrue = fun().some((employee) => employee.id === id);
  if (isTrue === false) {
    throw new Error('Informações inválidas');
  }
  return fun().find((employee) => employee.id === obj.id);
};

function getEmployeesCoverage(obj) {
  if (!obj) return getInfoEmployess();
  const getInfoAccordName = (employee) => employee.fullName.includes(obj.name);
  if (Object.keys(obj).includes('name')) return getInfoEmployess().find(getInfoAccordName);
  if (Object.keys(obj).includes('id')) return verifyId(getInfoEmployess, obj.id, obj);
}

module.exports = getEmployeesCoverage;
