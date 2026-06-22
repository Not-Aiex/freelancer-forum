/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

function makeFreelancer() {
  const namesIndex = Math.floor(Math.random() * NAMES.length);
  const occupationsIndex = Math.floor(Math.random() * OCCUPATIONS.length);
  const wage =
    Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min) + PRICE_RANGE.min;
  const freelancer = {
    name: NAMES[namesIndex],
    occupation: OCCUPATIONS[occupationsIndex],
    rate: wage,
  };
  return freelancer;
}
