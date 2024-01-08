'use strict'
console.clear();

let person ={
    firstname: 'Javier',
    lastname:  'Ibarra',
    age:       28,
    eyes:      'green',
    height:    1.75,
    weight:    98,
}

//---------------------spread de objetos--------------------//
const newPerson= {
    id:1,
    dni: 3400000000,
    ...person,
    address: 'Calle',
    nationality: 'Spain',
}

console.log(person);

console.log(newPerson);


// --------------- deconstruccion y rest ---------------//
let { id, eyes, ...otras }= newPerson;
console.log(id, eyes, otras);