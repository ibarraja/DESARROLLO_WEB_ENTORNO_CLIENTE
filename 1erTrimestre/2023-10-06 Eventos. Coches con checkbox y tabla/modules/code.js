import {vehicles} from "./data.js";

document.addEventListener('DOMContentLoaded',setup);

function setup(_){
    fillCheckBox(vehicles);
}

function fillCheckBox(v){
    let nDiv = document.getElementById('tDivVehicles');

    v.forEach(vehicle => {
        let nInp = document.createElement('input');
        nInp.setAttribute('type','checkbox');
        nInp.setAttribute('name',vehicle.key);
        nInp.setAttribute('id',vehicle.id);
        nInp.setAttribute('value',vehicle.model);
        nInp.addEventListener('change',addVehicleToTable);
    
        let nLabl = document.createElement('label');
        nLabl.setAttribute('for',vehicle.id);
        let nText = document.createTextNode(vehicle.model);
        
        let nBr = document.createElement('br');

        nLabl.appendChild(nText);
        nDiv.appendChild(nInp);
        nDiv.appendChild(nLabl);
        nDiv.appendChild(nBr);
        
    });
}

function addVehicleToTable(e){
    let nCheckbox = e.target;
    let carId = nCheckbox.value;
    
    let vehicle = vehicles.find(vehicle => vehicle.model === carId);

    //Busco tbody, creo tr
    let nTbd = document.getElementById('tTbdCars');
    let nTr = document.createElement('tr');
    
    // Creo el texto del modelo y el td. Uno el texto al td, y el td al tr
    let nText = document.createTextNode(vehicle.model);
    let nTdM = document.createElement('td');
    nTdM.appendChild(nText);
    nTr.appendChild(nTdM);
    
    // Buscamos y guardamos la imagen.
    let path = `./assets/photos/${vehicle.photo}`;
    let nImg = document.createElement('img');
    nImg.setAttribute('src',path);
    nImg.setAttribute('alt',vehicle.model);
    
    //Creo el Td. Uno la imagen al td. Uno el td al tr
    let nTdI = document.createElement('td');
    nTdI.appendChild(nImg);
    nTr.appendChild(nTdI);
    
    //Uno el tr al tbody
    nTbd.appendChild(nTr);
    
}