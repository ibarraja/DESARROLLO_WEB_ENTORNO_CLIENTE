//En este repositorio vamos a hacer todo lo que tenga que ver con intercambio de información de la base de datos

import { datosEmpresa as employees } from "./datos_empresa.js";

export class PeopleRepository {

    getHairColors() {
        const colors = employees.map(employee => employee.colorPelo);
        //  .map(function(employee){
        //     return employee.colorPelo;
        //  })

        const set = new Set(colors);
        return Array.from(set);

    } 

    getPeopleByHairColor(color){
        employees.forEach(employee =>{
            
        })
    }

}
