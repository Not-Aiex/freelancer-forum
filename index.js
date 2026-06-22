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
  const wage = Math.round(
    Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min) + PRICE_RANGE.min,
  );
  const freelancer = {
    name: NAMES[namesIndex],
    occupation: OCCUPATIONS[occupationsIndex],
    rate: wage,
  };
  return freelancer;
}

const freelancers = [];
for (let i = 0; i < NUM_FREELANCERS; i++) {
  freelancers.push(makeFreelancer());
}

function averageRate() {
  const sum = freelancers.reduce(
    (accumulator, currentValue) => accumulator + currentValue.rate,
    0,
  );
  return sum / NUM_FREELANCERS;
}

let avgRate = averageRate();
console.log(freelancers);
console.log(avgRate);
