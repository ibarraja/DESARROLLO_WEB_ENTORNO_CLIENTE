import ThermomixService from "./services/ThermonixService.js";

document.addEventListener('DOMContentLoaded', setup);

async function setup(){
    let service = new ThermomixService;
    let books = await service.getBooks();
    renderBooks(books);

    let nSelect = document.querySelector('#tSelBooks');
    nSelect.addEventListener('change',renderDishesByBookId);
}

function renderBooks(books) {
    let nSelect = document.querySelector('#tSelBooks');

    books.forEach(({clave, titulo}) => {
        let nOption = document.createElement('option');
        nOption.setAttribute('value', clave);
        nOption.textContent = titulo;

        nSelect.appendChild(nOption);   
    });
}

async function renderDishesByBookId(e){
    let bookId = e.target.value;

    let service = new ThermomixService();
    let dishes = await service.getDishes(bookId);

    let nTable = document.querySelector("#tTblPlates");

    nTable.innerHTML = '';

    dishes.forEach(({clave, nombre, foto}) =>{
        let nTr = document.createElement('tr');
        nTr.dataset.id = clave;
        nTable.appendChild(nTr);
        
        let nTdImg = document.createElement('td');
        let nImg = document.createElement('img');
        nImg.src = `http://localhost/thermomix/fotos/${foto}`;
        nImg.alt = 'imagen_' + foto;
        nImg.dataset.id = clave;
        nTdImg.appendChild(nImg);
        nTdImg.addEventListener('click',renderRecipeByDishId)
        nTr.appendChild(nTdImg);

        let nTdText = document.createElement('td');
        nTdText.textContent = nombre;

        nTr.appendChild(nTdText);
        
        nTable.appendChild(nTr);
    })
}

async function renderRecipeByDishId(e){
    let nTd = e.target;
    let dishId = nTd.dataset.id;

    
    let service = new ThermomixService();
    let recipe = await service.getRecipeeByDishId(dishId);

    let nDiv = document.querySelector('.recipe');
    let nPar = document.createElement('p');

    nDiv.innerHTML = '';
    
    nPar.textContent = recipe;
    nDiv.appendChild(nPar);

}