/* I want:

1 - An array with the weight of each pokemon
2 - The pokemon with id 147
3 - An array of pokemon that have a spawn_chance of less that 0.10 
4 - The pokemon that weighs "35.0 kg"
5 - An array of pokemon that "Not in Eggs"
6 - An array of image urls for all pokemon
7 - How heavy are all pokemon together?
8 - How tall are all pokemon together?
9 - You can hatch eggs by walking around. Some eggs hatch after 2km, some after 5km and som after 10km
    -> How far do you have to walk to hatch one of each pokemon eggs?

 */

const pokemons = require('./pokemons');
// console.log(pokemons);
// console.log(`List all pokemons ${pokemons}`);

// 1 - An array with the weight of each pokemon
const weights = pokemons.map((pokemon) => pokemon.weight);
// console.log(weights);
// console.log(`list all pokemon\s weights ${weights}`);

// 2 - The pokemon with id 147
const pokemon147 = pokemons.filter((pokemon) => pokemon.id === 147);
// console.log(pokemon147);
// console.log(`pokemon147 is: ${pokemon147}`);

// 3 - An array of pokemon that have a spawn_chance of less that 0.10 
const sc10 = pokemons.filter((pokemon) => pokemon.spawn_chance < 0.1);
// console.log(sc10)

// 4 - The pokemon that weighs "35.0 kg"
const weight35 = pokemons.filter((pokemon) => pokemon.weight === '35.0 kg');
// console.log(weight35);

// 5 - An array of pokemon that "Not in Eggs"
const notInEggs = pokemons.filter((pokemon) => pokemon.egg === 'Not in Eggs');
// console.log(notInEggs);

// 6 - An array of image urls for all pokemon
const imgURLs = pokemons.map((pokemon) => pokemon.img);
// console.log(imgURLs);

// 7 - How heavy are all pokemon together?
const totalWeight = pokemons.reduce((totalSum, currentPokemon) => totalSum + parseFloat(currentPokemon.weight), 0)
// console.log(`The total weight of adding one of each pokemons is: ${totalWeight} kg`);

// 8 - How tall are all pokemon together?
const sumHeight = pokemons.reduce((totalHeight, pokemon) => totalHeight + parseFloat(pokemon.height), 0);
// console.log(`The total height of adding each pokemon's individual height is: ${sumHeight} m`);

// 9 - You can hatch eggs by walking around. Some eggs hatch after 2km, some after 5km and som after 10km
//     -> How far do you have to walk to hatch one of each pokemon eggs?
const hatchingDistance = pokemons.reduce((distance, pokemon) => {
  if (!isNaN(parseFloat(pokemon.egg))) {
    return distance + parseFloat(pokemon.egg)
  }
  return distance
}, 0)

console.log(`HatchingDistance is: ${hatchingDistance} km`)

/* // Alternative solution
const hD1 = pokemons
  .filter(pokemon => pokemon.egg.includes('km'))
  .reduce((distance, pokemon) => {
    return distance + parseInt(pokemon.egg)
  }, 0)

console.log(hD1) */


// 10 - Heaviest pokemon

const heaviestPokemon = pokemons.reduce((heaviest, current) => {
  // console.log('HEAVIEST:', heaviest, 'CURRENT', current)
  if (parseFloat(current.weight) > parseFloat(heaviest.weight)) {
    return current;
  } else {
    return heaviest;
  }
})

console.log(heaviestPokemon)