import { closeSpinner } from "../spinner.lib.js";

export class AuthenticationService {

    async validateUser(username, password) {
        const url = 'http://10.88.74.4:3002/api/validate_user';

        let response;
        try {
            response = await fetch(url, {
                method: 'post',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
        } catch (error) {
            throw new Error(`Cannot validate user: ${error}`);
        }

        // Comprueba si el fetch fue correcto
        if (!response.ok) {
            alert(`No se ha podido autentficar al usuario: Cannot validate user: [${response.status} ${response.statusText}]`)
            closeSpinner();
            throw new Error(`No se ha podidio autentificar al usuario: Cannot validate user: [${response.status} ${response.statusText}]`);
        }

        // Comprueba si estoy recibiendo JSON
        let data;
        try {
            data = await response.json();
        } catch (error) {
            closeSpinner();
            throw new Error(`Cannot validate user: ${error}`);
        }

        // Comprueba si el data es correcto
        if (!data.ok) {
            closeSpinner();
            throw new Error(`Cannot validate user: ${data.message}`);
        }
        closeSpinner();
        return data.accessToken;
    }

    

}