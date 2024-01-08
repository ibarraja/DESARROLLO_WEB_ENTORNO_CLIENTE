import ThermomixService from "./services/thermomixService.js";

document.addEventListener('DOMContentLoaded', setup);

async function setup(){
    let service = new ThermomixService();
    let books = await service.getBooks();
    renderBooks(books);

    let nSelect = document.querySelector('#tSelBooks');
    nSelect.addEventListener('change', renderPlatesByBookId);

    
}

function renderBooks(books){
    let nSelect = document.querySelector('#tSelBooks')

    for (let {clave, titulo} of books) {
        let nOption = document.createElement('option');
        nOption.setAttribute('value', clave);
        nOption.textContent = titulo;
        nSelect.appendChild(nOption);
    }
}

async function renderPlatesByBookId(e){
    let nSelect = e.target;
    let bookId = nSelect.value;

    let service = new ThermomixService();
    let plates = await service.getPlatesByBookId(bookId);

    let nTable = document.querySelector('#tTblPlates');


    for (let {clave, nombre, foto} of plates) {
        let nTr = document.createElement('tr');
        nTable.appendChild(nTr);

        let nTdImage = document.createElement('td');
        let nImg = document.createElement('img');
        nImg.setAttribute('src', `http://localhost/thermomix/fotos/${foto}`);
        nImg.setAttribute('alt', clave);
        nImg.addEventListener('click', renderRecipeByPlateId);
        nTdImage.appendChild(nImg);
        nTr.appendChild(nTdImage)

        let nTdName = document.createElement('td');
        nTdName.textContent = nombre;
        nTr.appendChild(nTdName);
    }
}

async function renderRecipeByPlateId(e){
    let nImage = e.target;
    let plateId = nImage.alt;

    let service = new ThermomixService();
    let recipe = await service.getRecipeByPlateId(plateId);

    let nDiv = document.querySelector('.recipe');
    let nPar = document.createElement('p');
    nPar.textContent = recipe;
    nDiv.appendChild(nPar);


}