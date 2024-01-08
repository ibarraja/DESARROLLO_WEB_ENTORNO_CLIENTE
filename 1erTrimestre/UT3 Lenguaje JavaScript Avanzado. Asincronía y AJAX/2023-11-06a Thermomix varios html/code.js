import { ThermomixService } from "./services/ThemomixService.js";
// Si en ThermomixService exportamos la clase como default, no harían falta las
// llaves de la línea 1


export async function retrieveAndRenderBooks(){
    let service = new ThermomixService();
    let books = await service.getBooks();

    let nUl = document.querySelector('#tUlBooks');

    books.forEach(book => {
        let nLi = document.createElement('li');
        nLi.dataset.clave = book.clave;
        nLi.textContent = book.titulo;
        nLi.addEventListener('click',goToPageBooks)

        nUl.appendChild(nLi);
    });
}

function goToPageBooks(e){
    let bookId = e.target.dataset.clave;
    window.location = `./dishes.htm?book=${bookId}`;
}

function getBookIdFromUrl(){
    let params = new URLSearchParams(window.location.search);
    let bookId = parseInt(params.get('book'));
    return bookId;
}

export async function retrieveAndRenderDishes(){
    let bookId = getBookIdFromUrl();
    
    let service = new ThermomixService();
    let dishes = await service.getDishesByBook(bookId);

    let nUl = document.querySelector('#tUlDishes');

    dishes.forEach(dish => {
        let nLi = document.createElement('li');
        nLi.dataset.clave = dish.clave;
        nLi.textContent = dish.nombre;
        nLi.addEventListener('click',goToPageRecepee);

        nUl.appendChild(nLi);
    })
}

function goToPageRecepee(e){
    let dishId = e.target.dataset.clave;
    window.location = './recipee.htm?dish=' + dishId;
}

function getDishIdFromUrl(){
    let params = new URLSearchParams(window.location.search);
    let dishId = parseInt(params.get('dish'));
    return dishId;
}

export async function retrieveAndRenderRecipee(){
    let dishId = getDishIdFromUrl();

    let service = new ThermomixService();
    let recipee = await service.getRecepeeByDish(dishId);

    let nPar = document.querySelector('#tParRecipee');
    nPar.textContent = recipee;
}