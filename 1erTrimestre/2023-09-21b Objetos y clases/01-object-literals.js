'use strict'
console.clear();

const person = {
    //Propiedades
    firstname: 'Javier',
    lastname:  'Ibarra',
    
    //Métodos
    fullname1(){
        return `My name is ${this.firstname} ${this.lastname}`
    },

    //Una funcion es una first class citizen
    //podemos guardarlas en una propiedad del objeto:
    fullname2: function(){
        return `My name is ${this.firstname} ${this.lastname}`;
    },
    //Esto no funciona, no coje el 'this.', podriamos hacerlo poniendo 'person.firstname', aunque eso sería trampa, según Adolfo.
    fullname3: () => `My name is ${this.firstname} ${this.lastname}`,


}

//console.log(person);
console.log(person.firstname);
console.log(person.lastname);
console.log(person.fullname1());
console.log(person.fullname2());

/*JS permite acceder a las propiedades con corchetes y entrecomillados*/
console.log(person["firstname"]);
console.log(person["lastname"]);
/*JS permite acceder a los métodos con corchetes y entrecomillados, \!/paréntesis fuera de corchetes*/
console.log(person["fullname3"]());