export class ShopService {
    // static URL_BASE = "http://10.88.75.113:8080/rest/"
    static URL_BASE = "http://127.0.0.1:8080/rest/"

    async getProducts(){
        let url = ShopService.URL_BASE + 'products.php';
        let response = await fetch(url);
        let data = await response.json();
        return data.products;
    }

    async getProductsByCategory(category){
        let url = ShopService.URL_BASE + 'products.php';
        let response = await fetch(url);
        let data = await response.json();
        let productsByCategory = [];
        let products = data.products;
        products.forEach(product => {
            if(parseInt(product.category_id) ===category){
                productsByCategory.push(product);
            }
        });
        
        return productsByCategory;
    }

}