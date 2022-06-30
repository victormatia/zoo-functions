const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const onlyChilds = entrants.filter((entrant) => entrant.age < 18).length;
  const onlyAdults = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
  const onlySeniors = entrants.filter((entrant) => entrant.age >= 50).length;
  return { adult: onlyAdults, child: onlyChilds, senior: onlySeniors };
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.entries(entrants).length === 0) return 0;
  const { adult, child, senior } = countEntrants(entrants);
  const amount = {
    adults: 49.99 * adult,
    childs: 20.99 * child,
    seniors: 24.99 * senior,
  };
  return amount.adults + amount.childs + amount.seniors;
}

module.exports = { calculateEntry, countEntrants };
