const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  const callback = (em) => em.firstName === employeeName || em.lastName === employeeName; // verifica se o nome passado como parâmetro para getEmployeeByName é igual ao primeiro ou último nome do colaborador procurado.
  return data.employees.find(callback);
}

module.exports = getEmployeeByName;
