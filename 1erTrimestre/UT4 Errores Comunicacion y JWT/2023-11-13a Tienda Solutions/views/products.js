import { ShopService } from "../services/ShopService.js";

document.addEventListener('DOMContentLoaded',setup);

function setup(){
    let category = getCategoryIdFromUrl();
    retrieveAndRenderProducts(category);
    // setUpShowCart();
    recreateCart();
    locationCart();
}

function locationCart(){
    let nCart = document.querySelector('#tDivCartButton');
    nCart.addEventListener('click',_ => window.location = './cart.htm');

}

async function retrieveAndRenderProducts(category){
    if(!category){
        let service = new ShopService();
        let products = await service.getProducts();
        renderProducts(products);
    } else {
        let service = new ShopService();
        let products = await service.getProductsByCategory(category);
        renderProducts(products);
    }
    

}

function renderProducts(products){
    // Render products
    let nTbody = document.querySelector('.tTbody');

    products.forEach(product => {
        let nTr = document.createElement('tr');
        nTr.dataset.idProduct = product.product_id;
        nTr.title = product.description;
        nTbody.appendChild(nTr);

        let nTdName = document.createElement('td');
        nTdName.textContent=product.product_name;
        nTr.appendChild(nTdName);

        let nTdPrice = document.createElement('td');
        nTdPrice.textContent=product.list_price;
        nTdPrice.id = 'tTdPrecio'
        nTr.appendChild(nTdPrice);

        let nTdAdd = document.createElement('td');
        nTdAdd.textContent = '+';
        nTdAdd.dataset.id = product.product_id;
        nTdAdd.dataset.name = product.product_name;
        nTdAdd.dataset.price = product.list_price;
        nTdAdd.addEventListener('click', addProductToCart);
        nTr.appendChild(nTdAdd);

    });
}

function getCategoryIdFromUrl() {
    let params = new URLSearchParams(window.location.search);
    let category = parseInt(params.get('category'));
    return category;
}

function addProductToCart(e){
    let productId = parseInt(e.target.dataset.id);
    let productName = e.target.dataset.name;
    let productPrice = parseFloat(e.target.dataset.price);
    
    
    let cart = JSON.parse(window.sessionStorage.getItem('cart'));
    if (!cart){
        cart = [];
    }

    cart.push({
        id: productId, 
        name: productName, 
        price: productPrice
    });

    window.sessionStorage.setItem('cart',JSON.stringify(cart));
    
    recreateCart();
}

function recreateCart(){

    //Recuperamos la cesta de sessionStorage
    let cart = JSON.parse(window.sessionStorage.getItem('cart'));
    
    if(cart){
        let nTable = document.querySelector('#tTblBodyCart')
        nTable.innerHTML = '';

        cart.forEach(product => {
            let nTr = document.createElement('tr');
            nTable.appendChild(nTr);

            let nTdName = document.createElement('td');
            nTdName.textContent = product.name;
            nTr.appendChild(nTdName);

            let nTdPrice = document.createElement('td');
            nTdPrice.textContent = product.price;
            nTr.appendChild(nTdPrice);
        })
    }

    document.querySelector
}