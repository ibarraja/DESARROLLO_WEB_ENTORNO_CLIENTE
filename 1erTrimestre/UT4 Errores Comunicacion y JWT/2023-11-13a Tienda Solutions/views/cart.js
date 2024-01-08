document.addEventListener('DOMContentLoaded',setup);

function setup(e){
    retrieveAndRenderTable();
}

function retrieveAndRenderTable(){
    // Retrieve table
    let nTable = document.querySelector('#tTablBodyCart');
    
    // Retrieve cart
    let cart = JSON.parse(window.sessionStorage.getItem('cart'));

    // Render table
    if(cart){
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
}