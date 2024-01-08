import { datosEmpresa as employees } from "./datos_empresa.js";
console.clear();
function showManagerQuantity() {
    // // Sin modo flecha
    // employees.filter(function(employee){
    //     return employee.categoria === 'gerente';
    // })

    // //Modo flecha
    // employees.filter(employee => employee.categoria === 'gerente')

    // // Modo sin deconstruir
    // const isManager = employee => employee.categoria === 'gerente';

    // Modo deconsruido
    const isManager = ({categoria: category}) => category === 'gerente';


    const quantity = employees.filter(isManager).length;
    

    console.log(quantity);

}

console.log("showManagerQuantity():")
showManagerQuantity();


function showSortedBondeDevelopersFullname(){
    const isDeveloper = employees.filter(employee => employee.categoria ==='informatico');

    const isBlonde = employees.filter(employee => employee.colorPelo === 'rubio');

    const people = employees
    .filter(employee => employee.categoria === 'informatico')
    .filter(employee => employee.colorPelo === 'rubio')
    .map(employee => `${employee.apellido}, ${employee.nombre}`)
    .sort();

    console.table(people);

}
console.log("showSortedBondeDevelopersFullname():")
showSortedBondeDevelopersFullname();