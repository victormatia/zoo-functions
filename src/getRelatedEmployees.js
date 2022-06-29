const data = require('../data/zoo_data');

const idManagers = [
  '9e7d4524-363c-416a-8759-8aa7e50c0992',
  'fdb2543b-5662-46a7-badc-93d960fdc0a8',
  '0e7b460e-acf4-4e17-bcb3-ee472265db83',
];

function isManager(id) {
  return idManagers.some((manager) => manager === id);
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const dependents = data.employees.filter((em) => em.managers.includes(managerId)); // filtra apenas os dependentes de managerId
  return dependents.reduce((acc, em) => { // reduz depedents para para um array contendo apenas os nomes
    acc.push(`${em.firstName} ${em.lastName}`);
    return acc;
  }, []);
}

module.exports = { isManager, getRelatedEmployees };
