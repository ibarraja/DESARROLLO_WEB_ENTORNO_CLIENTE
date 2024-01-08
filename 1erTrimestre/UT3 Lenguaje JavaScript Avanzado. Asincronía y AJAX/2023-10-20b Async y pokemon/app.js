// fetch('https://pokeaapi.co/api/v2/pokemon')
//     .then(response => response.json())
//     .then(data => console.log(data.count))
//     .catch(console.error);

// const response = await fetch('https://pokeapi.co/api/v2/pokemon');
// const data = await response.json();
// let quantity = data.count;
// console.log(quantity);

async function getPokemons(){
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
    const data = await response.json();
    let pokemons = data.results;
    return pokemons;
    
}

// const pokemons = await getPokemons();
// console.log(pokemons);

async function getPokemonsById(id){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const data = await response.json();
    return data;
}

const pokemon = await getPokemonsById(2);
console.log(pokemon.name, pokemon.stats, pokemon.weight);