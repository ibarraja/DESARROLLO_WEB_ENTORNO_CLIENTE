'use strict'
function fillRadio(types){
    types.forEach(type => {
        const nDiv = document.getElementById('tDivTypeOfStreet');
        
        const nInput = document.createElement('input');
        nInput.setAttribute('type','radio');
        nInput.setAttribute('name','typeOfStreet');
        nInput.setAttribute('value',type.shortName);
        nInput.setAttribute('id',type.shortName);
        
        const nLabel = document.createElement('label');
        nLabel.setAttribute('for', type.shortName);
    
    
        let nText = document.createTextNode(`${type.longName}`);
        
        nLabel.appendChild(nText);
        nDiv.appendChild(nInput);
        nDiv.appendChild(nLabel);
        
    });

}
//// Primera forma. A mi sí me funciona:
// fillRadio(typesOfStreet.sort(function(type1,type2){
//     return type1.longName > type2.longName;
// }));


//// Segunda forma de hacerlo:
// fillRadio(typesOfStreet.sort(function(type1,type2){
//     // return type1.longName.localeCompare(type2.longName);
//     return type1.longName.localeCompare(type2.longName) * -1;
// }));

    
//Tercera forma de hacerlo:
const orderByLongName = (type1,type2) => type1.longName.localeCompare(type2.longName);
fillRadio(typesOfStreet.sort(orderByLongName));


