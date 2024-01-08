'use strict'

const brands =[
    { key: 'duc', name: 'Ducati'},
    { key: 'hon', name: 'Honda'},
    { key: 'suz', name: 'Suzuki'},
    { key: 'kaw', name: 'Kawasaki'},
    { key: 'der', name: 'Derbi'},
    { key: 'bul', name: 'Bultaco'},
    { key: 'hdv', name: 'Harley-Davidson'},
    { key: 'bmw', name: 'BMW'},
    { key: 'pia', name: 'Piaggio'},
    { key: 'ind', name: 'Indian'},
    { key: 'kym', name: 'Kymco'},
];
//FORMA ALTERNATIVA DE HACER EL BUCLE
// for (const brand of brands){
//     const nSelect = document.getElementById('tSelBikeBrands');
//     const nOption = document.createElement('option');
//     nOption.setAttribute('value',brand.key);
//     nSelect.appendChild(nOption);
//     let nText = document.createTextNode(brand.name);
//     nOption.appendChild(nText);
// }

brands.forEach(brand => {
        const nSelect = document.getElementById('tSelBikeBrands'); //Obtenemos el elemento donde queremos meter el código
        const nOption = document.createElement('option');          //Creamos el elemento que queremos ir recogiendo
        
        nOption.setAttribute('value',brand.key);    //Asignamos el atributo value a <option> y asignamos la key correspondiente
        nSelect.appendChild(nOption);               //Añadimos <option> en el padre <select>
        
        let nText = document.createTextNode(brand.name); //Asignamos el nombre de la marca a una cadena de texto
        nOption.appendChild(nText);                      //Añadimos la cadena de texto en el <option>
});
