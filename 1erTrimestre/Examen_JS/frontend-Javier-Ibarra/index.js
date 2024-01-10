import { AuthenticationService } from "./services/AuthenticationService.js";
import { openSpinner,closeSpinner } from "./spinner.lib.js";
document.addEventListener('DOMContentLoaded', setup);

function setup(_){
    let nButton = document.querySelector('#tButValidate');
    nButton.addEventListener('click', validateUser);
}

async function validateUser(){
    openSpinner();
    //Getting the username and the password
    let username = document.querySelector('#tTxtUsername').value;
    let password = document.querySelector('#tPasPassword').value;

    //Initializing the service

    let service = new AuthenticationService();
    let token = await service.validateUser(username, password);
    
    try{
        window.sessionStorage.setItem('token', token);
        alert('todoOk');
        window.location.href = './choose_origin_airport.htm';
    }catch (error){
        alert(error);
    }
}