import { vehicles } from "./data.js";

document.addEventListener('DOMContentLoaded', setup);


function setup(_) {
    let nSel = document.getElementById('tSelVehicles');
    nSel.addEventListener('change', showVehicle);
    fillSelectVehicles(vehicles);
}

function fillSelectVehicles(){
    const nSel = document.getElementById('tSelVehicles');

    vehicles.forEach(vehicle => {
        const nOpt = document.createElement('option');
        nOpt.setAttribute('value', vehicle.key);
        const nText = document.createTextNode(vehicle.model)
        
        nOpt.appendChild(nText);
        nSel.appendChild(nOpt);
    });
}

function showVehicle(e){
    // let nSel = docuemnt.getElementById('tSelVehicles');
    let nSelect = e.target;
    let key = nSelect.value; // La propiedad Value, almacena la key del coche que busco.
    
    let vehicle = vehicles.find(vehicle => vehicle.key === key);
    
    
    let path = `./photos/${vehicle.photo}`;
    let nImg = document.getElementById('tImgVehicle');
    nImg.setAttribute('src',path);

}