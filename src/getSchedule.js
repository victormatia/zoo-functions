const data = require('../data/zoo_data');

function arrangeSchedule() { // Filtra todos os animais por dia
  return {
    onlyTues: data.species.filter((specie) => specie.availability.includes('Tuesday')),
    onlyWed: data.species.filter((specie) => specie.availability.includes('Wednesday')),
    onlyThu: data.species.filter((specie) => specie.availability.includes('Thursday')),
    onlyFri: data.species.filter((specie) => specie.availability.includes('Friday')),
    onlySat: data.species.filter((specie) => specie.availability.includes('Saturday')),
    onlySun: data.species.filter((specie) => specie.availability.includes('Sunday')),
  };
}

const { onlyTues, onlyWed, onlyThu, onlyFri, onlySat, onlySun } = arrangeSchedule();

const { Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday } = data.hours;

const schedule = {
  Tuesday: {
    officeHour: `Open from ${Tuesday.open}am until ${Tuesday.close}pm`,
    exhibition: onlyTues.map((animal) => animal.name), // retorna o nome dos animais do dia
  },
  Wednesday: {
    officeHour: `Open from ${Wednesday.open}am until ${Wednesday.close}pm`,
    exhibition: onlyWed.map((animal) => animal.name),
  },
  Thursday: {
    officeHour: `Open from ${Thursday.open}am until ${Thursday.close}pm`,
    exhibition: onlyThu.map((animal) => animal.name),
  },
  Friday: {
    officeHour: `Open from ${Friday.open}am until ${Friday.close}pm`,
    exhibition: onlyFri.map((animal) => animal.name),
  },
  Saturday: {
    officeHour: `Open from ${Saturday.open}am until ${Saturday.close}pm`,
    exhibition: onlySat.map((animal) => animal.name),
  },
  Sunday: {
    officeHour: `Open from ${Sunday.open}am until ${Sunday.close}pm`,
    exhibition: onlySun.map((animal) => animal.name),
  },
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
};

const getAllAnimals = () => data.species.map((specie) => specie.name); // retorna um array com todas as especies de animais do zoo

const getAnimal = (animal) => data.species.find((e) => e.name === animal); // Encontra um animal específico

const getDay = (day) => ({ [day]: schedule[day] }); // Retorna o cronograma de um dia específico

function verifyParameters(param) { // verifica se scheduleTarget é um parâmetro válido
  if (Object.keys(schedule).includes(param)) return getDay(param);
  if (getAllAnimals().includes(param)) return getAnimal(param).availability;
  return schedule;
}

function getSchedule(scheduleTarget) { // Retorna o melhor cronograma para o parâmetro passado
  if (!scheduleTarget) return schedule;
  return verifyParameters(scheduleTarget);
}

module.exports = getSchedule;
