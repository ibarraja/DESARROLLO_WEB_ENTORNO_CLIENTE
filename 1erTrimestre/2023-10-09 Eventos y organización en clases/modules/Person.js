class Person{
    constructor(firstname, lastname){
        this._firstname = firstname;
        this._lastname = lastname;

        // * this._hairColor = undefined;
        // *: not really needed, we can do a DTO: Data Transfer Object

    }

    get firstname() {
        return this._firstname;
    }
    set firstname(value) {
        this._firstname = value;
    }
    
    get lastname() {
        return this._lastname;
    }

    set lastname(value) {
        this._lastname = value
    }
    
    get hairColor() {
        return this._hairColor;
    }
    
    set hairColor(value) {
        this._hairColor = value;
    }
    
    
    fullname () {
        return `${this._firstname} ${this._lastname}`;
    }
}

const person = new Person ('Ramón','Ramírez');
console.log(person.firstname);
console.log(person.fullname());

person.firstname = 'Verónica';
console.log(person.firstname);


