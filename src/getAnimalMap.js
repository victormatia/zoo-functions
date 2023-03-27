// REFATORAR!!!!

const data = require('../data/zoo_data');

const allRegions = ['NE', 'NW', 'SE', 'SW'];

const getAnimalByRegion = (region) => { // retorna um array contendo o nome de todas as espécies de uma região
  const animalsSelecteds = data.species.filter((specie) => specie.location === region); // utilizar a função da linha 23
  const nameAnimals = animalsSelecteds.map((animal) => animal.name);
  return nameAnimals;
};

const organizeAnimalsByRegions = () => {
  const obj = {};
  allRegions.forEach((region) => {
    obj[region] = getAnimalByRegion(region);
  });
  return obj;
};

const allNamesBySpecie = ({ residents }) => residents.map((resident) => resident.name); // retorna um array NÃO ORDENADO com o nome de todos os animais da uma determinada espécie.

const filterByRegion = (region) => data.species.filter((specie) => specie.location === region);

const organizeAnimalsByRegionsAndNames = () => { // retorna um obj de arrays que organiza todos os animais por região onde cada tipo de animal recebe um array NÃO ORDENADO contendo todos os nomes dos animais de mesmo tipo.
  const obj = {};
  allRegions.forEach((region) => {
    const animals = filterByRegion(region);
    obj[region] = animals.reduce((acc, animal) => {
      const obj2 = {};
      obj2[animal.name] = allNamesBySpecie(animal);
      acc.push(obj2);
      return acc;
    }, []);
  });
  return obj;
};

const allNamesBySpecieSorted = ({ residents }) => residents.map((resident) => resident.name).sort(); // retorna um array ORDENADO com o nome de todos os animais da uma determinada espécie.

const sortedNames = () => { // retorna um obj de arrays que organiza todos os animais por região onde cada tipo de animal recebe um array ORDENADO contendo todos os nomes dos animais de mesmo tipo.
  const obj = {};
  allRegions.forEach((region) => {
    const animals = filterByRegion(region);
    obj[region] = animals.reduce((acc, animal) => {
      const obj2 = {};
      obj2[animal.name] = allNamesBySpecieSorted(animal);
      acc.push(obj2);
      return acc;
    }, []);
  });
  return obj;
};

const testFilterSex = ({ residents }, sex) => residents.reduce((acc, resident) => { // retorna um array NÃO ORDENADO com apenas os nomes dos animais que possuem o mesmo sexo do parâmetro
  if (resident.sex === sex) {
    acc.push(resident.name);
  }
  return acc;
}, []); // ok

const testFilterSexSorted = ({ residents }, sex) => residents.reduce((acc, curr) => { // retorna um array ORDENADO com apenas os nomes dos animais que possuem o mesmo sexo do parâmetro
  if (curr.sex === sex) {
    acc.push(curr.name);
  }
  return acc;
}, []).sort(); // ok

const sexNames = (sex) => { // retorna um obj de arrays que organiza todos os animais por região onde cada tipo de animal recebe apenas os nomes NÃO ORDENADOS dos animais do mesmo tipo de um sexo específico.
  const obj = {};
  allRegions.forEach((region) => {
    const animals = filterByRegion(region);
    obj[region] = animals.reduce((acc, animal) => {
      const obj2 = {};
      obj2[animal.name] = testFilterSex(animal, sex);
      acc.push(obj2);
      return acc;
    }, []);
  });
  return obj;
};

const sexNamesSorted = (sex) => { // retorna um obj de arrays que organiza todos os animais por região onde cada tipo de animal recebe apenas os nomes ORDENADOS dos animais do mesmo tipo de um sexo específico.
  const obj = {};
  allRegions.forEach((region) => {
    const animals = filterByRegion(region);
    obj[region] = animals.reduce((acc, animal) => {
      const obj2 = {};
      obj2[animal.name] = testFilterSexSorted(animal, sex);
      acc.push(obj2);
      return acc;
    }, []);
  });
  return obj;
};

const verifyParameters = (options) => {
  const { includeNames, sorted, sex } = options;
  if (sex === 'female') return sexNames(sex);
  if (sex === 'male') return sexNames(sex);
  if (sorted) return sortedNames();
  if (includeNames) return organizeAnimalsByRegionsAndNames();
};

function getAnimalMap(options) { // Função principal
  if (!options || !options.includeNames) return organizeAnimalsByRegions();
  if (Object.keys(options).length >= 3) return sexNamesSorted(options.sex);
  return verifyParameters(options);
}

module.exports = getAnimalMap;
