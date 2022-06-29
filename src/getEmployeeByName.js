const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  const callback = (em) => em.firstName === employeeName || em.lastName === employeeName;
  return data.employees.find(callback);
}

module.exports = getEmployeeByName;
