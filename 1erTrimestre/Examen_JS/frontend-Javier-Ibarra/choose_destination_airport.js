import { FlightsServices } from "./services/FlightsServices.js";
import { closeSpinner, openSpinner } from "./spinner.lib.js";

document.addEventListener('DOMContentLoaded',setup);

function setup(_){
    renderUsername();
    renderDepartureAirport();
    renderDestinyAirports();
    selectAirtportAndRedirect();
}


function renderUsername(){
    let token = window.sessionStorage.getItem('token');

    //Checking token existance
    if (token === null){
        alert('ERROR: no hay usuario registrado. Redirigiendo a index.htm');
        window.location = './index.htm';
    }

    //Decode token
    const parseJwt = token => {
        try {
            return JSON.parse(atob(token.split('.')[1]));
        } catch (error) {
            throw new Error(`Problem decoding token "${token}": ${error.message}.`);
        }
    }
    const tokenDecodificado = parseJwt(token);
    // console.log(tokenDecodificado);

    let nDiv = document.querySelector('#tDivUsername');
    nDiv.textContent = tokenDecodificado.firstname +' '+ tokenDecodificado.lastname;
}

async function renderDepartureAirport(){
    openSpinner();

    let token = window.sessionStorage.getItem('token');
    let airportId = window.sessionStorage.getItem('airport');

    let service = new FlightsServices();
    let airportInfo = await service.getAirportById(token, airportId);

    console.log(airportInfo);

    let nDiv = document.querySelector('#tDivDepartureAirport');
    nDiv.textContent = airportInfo.longname;

}

async function renderDestinyAirports(){
    openSpinner();
    let token = window.sessionStorage.getItem('token');

    //Get the id from departure Airport (URL)
    const params = new URLSearchParams(window.location.search);
    const airportId = params.get('origin_airport');

    //Retrieve data from FlightsServices

    let service = new FlightsServices();
    let airports = await service.getAirportsDestinationsFromDepartureAirport(token, airportId);

    console.table(airports);

    //Render Airports
    let nSel = document.querySelector('#tSelAirports');
    nSel.size = airports.length;

    airports.forEach(async airportId => {
        openSpinner();
        let airportInfo = await service.getAirportById(token, airportId);

        let nOpt = document.createElement('option');
        nSel.appendChild(nOpt);
        nOpt.textContent = `${airportInfo.commonname} (${airportInfo.codename})`;
        nOpt.value = airportId;
    });



}

function selectAirtportAndRedirect(){
    let nSelect = document.querySelector('#tSelAirports')

    let nBut = document.querySelector('#tButSelectAirport');
    nBut.addEventListener('click', _ =>{
        let idDestinationAirport = nSelect.value;
        
        //Session Storage
        let idOriginAirport = window.sessionStorage.getItem('airport');

        //Redirectioning
        window.location.href = './choose_flights.htm?origin_airport=' + idOriginAirport + '&destination_airport='+idDestinationAirport;
    })
}