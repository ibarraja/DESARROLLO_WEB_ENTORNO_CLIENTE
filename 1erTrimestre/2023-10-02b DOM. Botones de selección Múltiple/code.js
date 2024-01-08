import {datosEmpresa as employees} from "./datos_empresa.js";

function getCategories(){
    const categoriesWithRepeated = employees.map(employee => employee.categoria);
    return Array.from(new Set(categoriesWithRepeated));

}

fillCategoriesContainer(){
    const categoriesContainer = employees
}
console.log(getCategories(employees))