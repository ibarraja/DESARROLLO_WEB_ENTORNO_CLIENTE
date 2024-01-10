import { FlightsServices } from "./services/FlightsServices.js";
import { openSpinner } from "./spinner.lib.js";

document.addEventListener('DOMContentLoaded',setup);

function setup(_) {
    renderUsername();

    retrieveAndRenderAirpots();

    selectAirtportAndRedirect();
}

function renderUsername(){
    let token = window.sessionStorage.getItem('token');

    if (token === null){
        alert('ERROR: no hay usuario registrado. Redirigiendo a index.htm');
        window.location = './index.htm';
    }

    //DecodeToken()
    const parseJwt = token => {
        try {
            return JSON.parse(atob(token.split('.')[1]));
        } catch (error) {
            throw new Error(`Problem decoding token "${token}": ${error.message}.`);
        }
    }
    const tokenDecodificado = parseJwt(token);
    console.log(tokenDecodificado);

    let nDiv = document.querySelector('#tDivUsername');
    nDiv.textContent = tokenDecodificado.firstname +' '+ tokenDecodificado.lastname;
}

async function retrieveAndRenderAirpots(){
    openSpinner();
    let token = window.sessionStorage.getItem('token');

    let nSel = document.querySelector('#tSelAirports');

    //Retrieving Airpots
    let service = new FlightsServices();
    let airports = await service.getAirpots(token);

    //Render Airpots
    console.table(airports);
    // alert("tabla creada");

    airports.forEach(airport => {
        let nOption = document.createElement('option');
        nSel.appendChild(nOption);
        nOption.textContent = `${airport.commonname} (${airport.codename})`;
        nOption.value = airport.uuid;
    });
}

function selectAirtportAndRedirect(){
    let nSelect = document.querySelector('#tSelAirports')

    let nBut = document.querySelector('#tButSelectAirport');
    nBut.addEventListener('click', _ =>{
        let idAirport = nSelect.value;
        alert(idAirport);
        
        //Session Storage
        window.sessionStorage.setItem('airport',idAirport);

        //Redirectioning
        window.location.href = './choose_destination_airport.htm?origin_airport=' + idAirport;
    })
}