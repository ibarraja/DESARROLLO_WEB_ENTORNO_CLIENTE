'use strict';
console.clear();
const watches = [
    'Casio',
    'Rolex',
    'Seiko',
    'Timex',
    'Longines',
    'Tudor',
];

console.table(watches)

//---------------- Spread --> '...' ----------------//
console.log(... watches); //Descompone el array en sus elementos. Que hacer con esos elementos? concatenar esos elementos dentro de otros arrays, por ejemplo.


//Con un segundo array segundo array
const moreWatches = [
    'Orient',
    'IWC',
    'Swatch',
    'Omega',
];

const allWatches = [...watches, ...moreWatches]; //Lo junta en un solo array.
console.table(allWatches);


//---------------- Rest --> '...' ----------------// resto.
const [watch1, watch2, ...finalWatches] = watches; //Aqui se hacen dos cosas, un rest y una deconstrucción del array watches.

console.log(watch1); //El primer elemento del array
console.log(watch2); //El segundo elemento del array
console.log(finalWatches); //Nuevo array creado a partir del array Watches sin los dos primeros elementos.