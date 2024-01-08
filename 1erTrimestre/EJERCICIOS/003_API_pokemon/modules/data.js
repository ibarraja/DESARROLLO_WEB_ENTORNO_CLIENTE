document.addEventListener('DOMContentLoaded',setup);
function setup(){
fetch('https://pokeapi.co/api/v2/pokemon')		
	.then(response => response.json())
	.then(data => fill20FirstPokemons(data.pokemon));
}


function fill20FirstPokemons(pokemonData) {
    // Select the container element where you want to display the Pokemon data
    const pokemonContainer = document.getElementById('pokemon-container');

    // Loop through the first 20 Pokemon entries in the data
    for (let i = 0; i < 20; i++) {
        const pokemon = pokemonData.results[i]; // Get the current Pokemon data

        // Create a new div element to display the Pokemon name
        const pokemonDiv = document.createElement('div');
        pokemonDiv.textContent = pokemon.name; // Set the text content to the Pokemon's name

        // Append the Pokemon div to the container
        pokemonContainer.appendChild(pokemonDiv);
    }
}