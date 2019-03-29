const pokemons2 = require('./pokemons');

// const ashWithPokemonNames = {
//     name: ash.name,
//     pokemonNames: ash.pokemonIds.map(pokemonId => {
//         const pokemon = pokemons.find(pokemon => pokemon.id === pokemonId)
//         return pokemon.name
//     })
// }
// console.log(ashWithPokemonNames)

const trainers = [
    { id: 1, name: 'Brock', pokemonIds: [74, 95] },
    { id: 2, name: 'Sabrina', pokemonIds: [64, 122, 49, 65] },
    { id: 3, name: 'Koga', pokemonIds: [109, 110, 109, 89] },
    { id: 4, name: 'Giovanni', pokemonIds: [112, 51, 31, 34, 113] },
    { id: 5, name: 'Blaine', pokemonIds: [58, 77, 78, 59] },
    { id: 6, name: 'Lt. Surge', pokemonIds: [100, 25, 26] },
    { id: 7, name: 'Erika', pokemonIds: [71, 114, 44] },
    { id: 8, name: 'Misty', pokemonIds: [120, 121] },
]

const gyms = [
    { id: 1, city: 'Saffron City', gymLeaderId: 2 },
    { id: 2, city: 'Fuchsia City', gymLeaderId: 3 },
    { id: 3, city: 'Cinnabar Island', gymLeaderId: 5 },
    { id: 4, city: 'Celadon City ', gymLeaderId: 7 },
    { id: 5, city: 'Cerulean City', gymLeaderId: 8 },
    { id: 6, city: 'Vermilion City', gymLeaderId: 6 },
    { id: 7, city: 'Pewter City', gymLeaderId: 1 },
    { id: 8, city: 'Viridian City', gymLeaderId: 4 },
]

// We want the pokemon names of Each Gym leader

const trainerPokemon = trainers.map((trainer) => {
    const leaderPoke = trainer.pokemonIds.map((names) => {
        const pokeName = pokemons2.find((pokemons) => {
            if (pokemons.id === names) {
                return true
            }
        }
        ).name
        return pokeName
    }
    )
    return leaderPoke
})

// console.log(trainerPokemon)



// Long way
/* const leaderNames = gyms.map((leaderID) => {
    const gymLeaderIDs = leaderID.gymLeaderId
    const trainerName = trainers.find((trainer) => {
        if (trainer.id === gymLeaderIDs) {
            return trainer.name
        }
    })
    return trainerName.name
})

console.log(leaderNames) */

// Refactored

const leaderNames = gyms.map((leaderID) => {
    const trainerName = trainers.find((trainer) => trainer.id === leaderID.gymLeaderId)
    return trainerName.name
})

/* // Even shorter
const leaderNames = gyms.map(
    (leaderID) => trainers.find(
        (trainer) => trainer.id === leaderID.gymLeaderId).name)
 */
// console.log(leaderNames)

// We want an Array of Gymleader name + city
// [ 'Brock is the gymleader of Pewter City', 'Sabrina is the ...' ]

const leadersGyms = gyms.map((leaderGym) => {
    // console.log(leaderGym)
    const leaderInfo = trainers.find((trainer) => trainer.id === leaderGym.gymLeaderId)
    return [`${leaderInfo.name} is the gym leader of ${leaderGym.city}`]
})

// console.log(leadersGyms)

// For each city we want to know which pokemon you have to defeat
const pokemonsToDefeat = gyms.map((leaderGym) => {
    
    // find city
    const gym = leaderGym.city;
    
    // link city to trainers
    const trainersInfo = trainers.find((trainer) => {
        if (trainer.id === leaderGym.gymLeaderId) {
            return true
        }
    });
    
    // trainers name
    const trainerName = trainersInfo.name;

    // pokemon names
    const pokemonNames = trainersInfo.pokemonIds.map((pokemonID) => {
        const poke = pokemons2.find((pokemonName) => {
           if(pokemonName.id === pokemonID){
               return true
           }
        })
        return poke.name;
    })
    console.log(`In ${gym} you have to fight against ${trainerName} and his pokemons: ${pokemonNames}`)
})