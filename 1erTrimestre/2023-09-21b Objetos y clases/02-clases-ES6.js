'use strict';
class Person{
    constructor(firstname, lastname){
        this._firstname = firstname;
        this._lastname = lastname;
    }

    get firstname(){
        return this._firstname;
    }
    get lastname(){
        return this._firstname;
    }

    set firstname(value){
        this._firstname = value;
    }
    set lastname(value){
        this._lastname = value;
    }

    get age(){
        return this._age;
    }
    set age(value){
        if (typeof(value) !== 'number'){
            throw new Error (`Value ${value} is not an age`);
        }
        if(value < 0 || value > 130){ //Exception imposible ages
            throw new Error(`Value ${value} is not a proper age.`);
        }
        this._age = value;
    }
    
    fullname(){  //metodo, no necesita ninguna palabra reservada.
        return `${this._firstname} ${this._lastname}`;
    }
}

console.clear();
const person = new Person('Adrian','García');
console.log(person);

console.log(person.firstname) //Cuando invocamos al getter no se pone paréntesis - es como si fuese una propiedad, en vez de un método

person.lastname = 'Ibarra' //Con los setters lo mismo, sin paréntesis.
console.log(person);

try{
    person.age = 'hola';
    console.log(person.age)
}catch(error){
    console.log(`EXCEPTION: ${error.message}`);
}
try{
    person.age = -25;
    console.log(person.age)
}catch(error){
    console.log(`EXCEPTION: ${error.message}`);
}
try{
    person.age = 25;
    console.log(person.age)
}catch(error){
    console.log(`EXCEPTION: ${error.message}`);
}

console.log(person.fullname());