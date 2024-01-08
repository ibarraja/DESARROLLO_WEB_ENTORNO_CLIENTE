import {toppings} from "./data.js";

document.addEventListener('DOMContentLoaded',setup);

function setup(_){
    fillTableCheckbox(toppings);

}

function fillTableCheckbox(topps){
    let nTable = document.getElementById('tTableToppings');

    topps.forEach(topp => {
        let nTr = document.createElement('tr');
        let nTd = document.createElement('td');

        let nCheckbox =  document.createElement('input');
        nCheckbox.setAttribute('type','checkbox');
        nCheckbox.setAttribute('name','topping');
        nCheckbox.setAttribute('id',topp.id);
        nCheckbox.setAttribute('value',topp.price);
        nCheckbox.addEventListener('change',updateTotalPrice);


        nTd.appendChild(nCheckbox);
        nTr.appendChild(nTd);
        
        nTd = document.createElement('td');
        let nText = document.createTextNode(topp.type);
        nTd.appendChild(nText);
        nTr.appendChild(nTd);
        
        nTd = document.createElement('td');
        nText = document.createTextNode(topp.price);
        nTd.appendChild(nText);
        nTr.appendChild(nTd);

        nTable.appendChild(nTr);
        
    });
};

function updateTotalPrice() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"][name="topping"]:checked');
    let totalPrice = 0;

    // Calcula el precio total sumando los valores de los checkboxes seleccionados
    checkboxes.forEach(checkbox => {
        totalPrice += parseFloat(checkbox.value);
    });

    // Actualiza el texto del precio total en el elemento <span>
    const totalAmountElement = document.getElementById("totalAmount");
    totalAmountElement.textContent = totalPrice.toFixed(2);
}
