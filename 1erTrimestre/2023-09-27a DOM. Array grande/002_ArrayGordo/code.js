'use strict';

//A function that returns an ordered list of all the employees
function getEmployeesNames(employees){
    const nOl = document.getElementById('tOlEmployees'); //Guardamos en la varible la etiqueta del HTML
    for (const empleado of employees){
        let nLi = document.createElement('li');
        nOl.appendChild(nLi);
        
        let nText = document.createTextNode(`${empleado.nombre} ${empleado.apellido}`);
        nLi.appendChild(nText);
    }
}
getEmployeesNames(datosEmpresa)


//--------------------------------------------------------------------------------//


//A function that returns options of all the categories of employees 
function fillCategoriesDropdown(employees) {
    const nSel = document.getElementById('tSelCategories');

    const uniqueCategories = [];

    for (const employee of employees){
        if(!uniqueCategories.includes(employee.categoria)){
            uniqueCategories.push(employee.categoria);
        } 
    }
    
    for (const categorie of uniqueCategories){
        let nOption = document.createElement('option');
        nSel.appendChild(nOption);
    
        let nText = document.createTextNode(categorie);
        nOption.appendChild(nText);

    }
}
fillCategoriesDropdown(datosEmpresa);


//--------------------------------------------------------------------------------//

// A function that returns a table with the information of the Employees by categories, number of workers and average year salary
function getTable(employees){
    
    const uniqueCategories = [];
    //Obtaining the categories
    for (const employee of employees){
        if(!uniqueCategories.includes(employee.categoria)){
            uniqueCategories.push(employee.categoria);
        } 
    }

    // Obatain the number of employees of each categorie
    const numberOfWorkers = [];
    for(let i = 0; i < uniqueCategories.length; i++){
        let workers = 0;
        for (const employee of employees){
            if(employee.categoria === uniqueCategories[i]){
                numberOfWorkers[i] = workers++;
            }
        }
    }

    // Obtaining the average income of each categorie
    const averageIncomesDraft = [];
    for(let i = 0; i < uniqueCategories.length; i++){
        let income = 0;
        for (const employee of employees){
            if(employee.categoria === uniqueCategories[i]){
                income = income + employee.salarioBruto;
                averageIncomesDraft[i] = income/numberOfWorkers[i];
            }
        }
    }
    // two decimals round salary - ChatGPT
    const averageIncomes = averageIncomesDraft.map(function(elemento){
        return parseFloat(elemento.toFixed(2));
    })
    
    // Filling table
    const nTable = document.getElementById('tTablEmployees');
    for (let i = 0; i < uniqueCategories.length; i++){
        
        let nTr = document.createElement('tr');
        nTable.appendChild(nTr);

        let nTd = document.createElement('td');
        nTr.appendChild(nTd);

        let nText = document.createTextNode(uniqueCategories[i]);
        nTd.appendChild(nText);

        nTd = document.createElement('td');
        nTr.appendChild(nTd);

        nText = document.createTextNode(numberOfWorkers[i]);
        nTd.appendChild(nText);

        nTd = document.createElement('td');
        nTr.appendChild(nTd);

        nText = document.createTextNode(averageIncomes[i]);
        nTd.appendChild(nText);
        
    }
   
}
getTable(datosEmpresa);