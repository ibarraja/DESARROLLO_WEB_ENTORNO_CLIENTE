import { closeSpinner } from "../spinner.lib.js";

export class FlightsServices {

    async getAirpots(token) {
        const url = 'http://10.88.74.4:3001/api/airports';

        // Comprueba si el servidor está encendido
        let response;
        try {
            const headers = new Headers();
            headers.append('Authorization', `Bearer ${token}`);
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
        
            response = await fetch(url, { 
                method: 'get', 
                headers 
            });
        } catch (error) {
            throw new Error(`Cannot retrieve series: ${error}`);
        }
        
        // Comprueba si el fetch fue correcto
        if (!response.ok) {
            closeSpinner();
            alert(`No se han podido recuperar los aeropuertos. Cannot retrieve airports: [${response.status} ${response.statusText}]. Por favor, refresque la pantalla.`);
            throw new Error(`Cannot retrieve airports: [${response.status} ${response.statusText}]`);
        }
        
        // Comprueba si estoy recibiendo JSON
        let data;
        try {
            data = await response.json();
        } catch (error) {
            closeSpinner();
            alert('ERROR: error al recibir JSON -> getAirports');
            throw new Error(`Cannot retrieve series: ${error}`);
        }
        
        // Comprueba si el data es correcto
        if (!data.ok) {
            closeSpinner();
            alert('ERROR: error en recibir el data -> getAirports');
            throw new Error(`Cannot retrieve series: ${data.message}`);
        }
        
        closeSpinner();
        return data.outcome.airports;
    }

    async getAirportById(token, id){
        const url = 'http://10.88.74.4:3001/api/airport/'+id;

        // Comprueba si el servidor está encendido
        let response;
        try {
            const headers = new Headers();
            headers.append('Authorization', `Bearer ${token}`);
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
        
            response = await fetch(url, { 
                method: 'get', 
                headers 
            });
        } catch (error) {
            throw new Error(`Cannot retrieve series: ${error}`);
        }
        
        // Comprueba si el fetch fue correcto
        if (!response.ok) {
            closeSpinner();
            alert(`No se han podido recuperar la información del aeropuerto. Cannot retrieve airports: [${response.status} ${response.statusText}]. Por favor, refresque la pantalla.`);
            throw new Error(`Cannot retrieve airports: [${response.status} ${response.statusText}]`);
        }
        
        // Comprueba si estoy recibiendo JSON
        let data;
        try {
            data = await response.json();
        } catch (error) {
            closeSpinner();
            alert('ERROR: error al recibir JSON -> getAirportById');
            throw new Error(`Cannot retrieve series: ${error}`);
        }
        
        // Comprueba si el data es correcto
        if (!data.ok) {
            closeSpinner();
            alert('ERROR: error en recibir el data -> getAirportById');
            throw new Error(`Cannot retrieve series: ${data.message}`);
        }
        
        closeSpinner();
        return data.outcome.airport;
    }

    async getAirportsDestinationsFromDepartureAirport(token,id){
        const url = 'http://10.88.74.4:3001/api/destination_airports/origin_airport/'+id;

        // Comprueba si el servidor está encendido
        let response;
        try {
            const headers = new Headers();
            headers.append('Authorization', `Bearer ${token}`);
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
        
            response = await fetch(url, { 
                method: 'get', 
                headers 
            });
        } catch (error) {
            throw new Error(`Cannot retrieve series: ${error}`);
        }
        
        // Comprueba si el fetch fue correcto
        if (!response.ok) {
            closeSpinner();
            alert(`No se han podido recuperar los aeropuertos. Cannot retrieve airports: [${response.status} ${response.statusText}]. Por favor, refresque la pantalla.`);
            throw new Error(`Cannot retrieve airports: [${response.status} ${response.statusText}]`);
        }
        
        // Comprueba si estoy recibiendo JSON
        let data;
        try {
            data = await response.json();
        } catch (error) {
            closeSpinner();
            alert('ERROR: error al recibir JSON -> getAirportsDestinationsFromDepartureAirport');
            throw new Error(`Cannot retrieve series: ${error}`);
        }
        
        // Comprueba si el data es correcto
        if (!data.ok) {
            closeSpinner();
            alert('ERROR: error en recibir el data -> getAirportsDestinationsFromDepartureAirport');
            throw new Error(`Cannot retrieve series: ${data.message}`);
        }
        
        closeSpinner();
        return data.outcome.airports; 
    }

    async getFlightsInfo(token,idDeparture,idArrival){
        const url = 'http://10.88.74.4:3001/api/flights/origin_airport/'+idDeparture+'/destination_airport/'+idArrival;

        // Comprueba si el servidor está encendido
        let response;
        try {
            const headers = new Headers();
            headers.append('Authorization', `Bearer ${token}`);
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
        
            response = await fetch(url, { 
                method: 'get', 
                headers 
            });
        } catch (error) {
            throw new Error(`Cannot retrieve series: ${error}`);
        }
        
        // Comprueba si el fetch fue correcto
        if (!response.ok) {
            closeSpinner();
            alert(`No se han podido recuperar los aeropuertos. Cannot retrieve airports: [${response.status} ${response.statusText}]. Por favor, refresque la pantalla.`);
            throw new Error(`Cannot retrieve airports: [${response.status} ${response.statusText}]`);
        }
        
        // Comprueba si estoy recibiendo JSON
        let data;
        try {
            data = await response.json();
        } catch (error) {
            closeSpinner();
            alert('ERROR: error al recibir JSON -> getAirportsDestinationsFromDepartureAirport');
            throw new Error(`Cannot retrieve series: ${error}`);
        }
        
        // Comprueba si el data es correcto
        if (!data.ok) {
            closeSpinner();
            alert('ERROR: error en recibir el data -> getAirportsDestinationsFromDepartureAirport');
            throw new Error(`Cannot retrieve series: ${data.message}`);
        }
        
        closeSpinner();
        return data.outcome.flights;         
    }

}

