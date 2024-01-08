import ProductsService from "./ProductsService.js";

document.addEventListener('DOMContentLoaded',setup);

function setup(){
    getAndRenderProducts();
}

async function getAndRenderProducts(){
    const service = new ProductsService();
    const products = await service.getProducts(); 

    renderProducts(products);
}

function renderProducts(products){
    let nTBody = document.querySelector('#tTabProducts>tbody');

    products.forEach(product => {
        let nTr = document.createElement('tr');
        nTBody.appendChild(nTr);

        let nTdName = document.createElement('td');
        nTdName.textContent = product.nombre;
        nTr.appendChild(nTdName);

        let nTdPrice = document.createElement('td');
        nTdPrice.textContent = product.precio;
        nTr.appendChild(nTdPrice);

        let nTdBut = document.createElement('td');
        let nButton = document.createElement('button');
        nButton.id = "tBut"+product.id;
        nButton.dataset.product = product.id;
        nButton.innerHTML = '+';
        nButton.addEventListener('click',addProductToCart);
        nTdBut.appendChild(nButton);

        nTr.appendChild(nTdBut);

    });
}

function addProductToCart(e){
    let cart = JSON.parse(window.localStorage.getItem('cart'));

    if(!cart){
        cart = [];
    }

    let productId = parseInt(e.target.dataset.product);

    cart.push(productId);

    window.localStorage.setItem('cart', JSON.stringify(cart));
}