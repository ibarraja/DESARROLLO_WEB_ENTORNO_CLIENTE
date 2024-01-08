export default class ProductsService {
    _products = [
        {id: 1, nombre: 'Mouse Logitech', precio: 17.95},
        {id: 2, nombre: 'Monitor Samsung', precio: 185.50},
        {id: 3, nombre: 'Teclado Logitech', precio: 18.95},
        {id: 4, nombre: 'Webcam Logitech', precio: 75.95},
        {id: 5, nombre: 'Pendrive 2TB Kingston', precio: 8.95},
    ];

    async getProducts(){
        return this._products;
    }

    async getProductById(id){
        return this._products.find(product => product.id === id);
    }
}