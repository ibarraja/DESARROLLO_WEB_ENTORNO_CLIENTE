'use strict'
console.clear();


const watches = [
    'Casio',
    'Rolex',
    'Seiko',
    'Timex',
    'Longines',
    'Tudor',
];


//---------------- Deconstrucción de Arrays-----------------//
//Escribir en una linea lo que antes haciamos en dos:
// const w1 = watches[0]; //Si quiero coger el primer elemento
// const w2 = watches[1]; //Si quiero coger el segundo elemento
// const w3 = watches[2]; //Si quiero coger el tercer elemento

// const[w1, w2, w3] = watches //Si quiero coger el primer, el segundo elemento...
// console.log(w1);
// console.log(w2);
// console.log(w3);


//--------------- Deconstruccion de Objetos --------------//

let person ={
    firstname: 'Javier',
    lastname:  'Ibarra',
    age:       28,
    eyes:      'green',
    height:    1.75,
    weight:    98,
}

//sin deconstruccion
// const height =person.height;
// const weight =person.weight;

//con deconstruccion
let { height, weight } = person;

console.log(height, weight);
