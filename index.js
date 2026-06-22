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

function FreelancerCard(freelancer) {
  const card = document.createElement("div");
  card.classList.add("table");
  card.innerHTML = `
    <p>${freelancer.name}: ${freelancer.occupation}</p>
    <p>$${freelancer.rate}
    `;
  return card;
}

function FreelancerCards() {
  const cards = document.createElement("div");
  cards.classList.add("tables");
  const allFreelancers = freelancers.map(FreelancerCard);
  cards.replaceChildren(...allFreelancers);
  return cards;
}

function AverageRate() {
  const card = document.createElement("div");
  card.classList.add("average");
  card.innerHTML = `
    <p>The average rate is: $${avgRate}</p>
    `;
  return card;
}

function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
    <h1>Freelancers and rates</h1>
    <AverageRate></AverageRate>
    <FreelancerCards></FreelancerCards>
  `;
  $app
    .querySelector("FreelancerCards")
    .replaceWith(FreelancerCards(freelancers));
  $app.querySelector("AverageRate").replaceWith(AverageRate());
}
render();
