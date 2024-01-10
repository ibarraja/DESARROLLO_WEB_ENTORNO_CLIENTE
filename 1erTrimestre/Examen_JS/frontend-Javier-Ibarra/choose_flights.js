import { FlightsServices } from "./services/FlightsServices.js";
import { closeSpinner, openSpinner } from "./spinner.lib.js";
document.addEventListener('DOMContentLoaded', setup);

function setup(_) {
    renderUsername();
    renderDepartureAirport();
    renderDestinyAirport();
    retrieveAndRenderFlights();
}

function renderUsername() {
    let token = window.sessionStorage.getItem('token');

    //Checking token existance
    if (token === null) {
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
    nDiv.textContent = tokenDecodificado.firstname + ' ' + tokenDecodificado.lastname;
}


async function renderDepartureAirport() {
    openSpinner();

    let token = window.sessionStorage.getItem('token');
    let airportId = window.sessionStorage.getItem('airport');

    let service = new FlightsServices();
    let airportInfo = await service.getAirportById(token, airportId);

    console.log(airportInfo);

    let nDiv = document.querySelector('#tDivDeparture');
    nDiv.textContent = airportInfo.longname;
}

async function renderDestinyAirport(){
    openSpinner();
    const params = new URLSearchParams(window.location.search);
    const airportId = params.get('destination_airport');
    
    let token = window.sessionStorage.getItem('token');

    let service = new FlightsServices();
    let airportInfo = await service.getAirportById(token, airportId);

    console.log(airportInfo);

    let nDiv = document.querySelector('#tDivDestiny');
    nDiv.textContent = airportInfo.longname;
}


async function retrieveAndRenderFlights(){
    openSpinner();
    let token = window.sessionStorage.getItem('token');


    const params = new URLSearchParams(window.location.search);
    
    let idDeparture = params.get('origin_airport');
    let idArrival = params.get('destination_airport');

    let service = new FlightsServices();
    let flights = await service.getFlightsInfo(token, idDeparture, idArrival);


    console.table(flights);
    //render Flights info
    let nTable = document.querySelector('#tTblFlights');
    
    flights.forEach(flight => {
        let nTr = document.createElement('Tr');
        nTable.appendChild(nTr);

        let nTduuid = document.createElement('td');
        nTr.appendChild(nTduuid);
        nTduuid.textContent = flight.flightCode;


        let nTdOrigin = document.createElement('td');
        nTr.appendChild(nTdOrigin);
        nTdOrigin.textContent = flight.datetime;

        let nTdPrice = document.createElement('td');
        nTr.appendChild(nTdPrice);
        nTdPrice.textContent = flight.flightPrice;

        let nTdPriceSuitcase = document.createElement('td');
        nTr.appendChild(nTdPriceSuitcase);
        nTdPriceSuitcase.textContent = flight.suitcasePrice;

        let nButton = document.createElement('button');
        nButton.textContent = '+';

        let nTdBut = document.createElement('td');
        nTr.appendChild(nTdBut);
        nTdBut.textContent = nButton;

    });
}

