export class ThermomixService {

    static URL_BASE = "http://localhost:8080/controlador.php?operacion=";


    async getBooks(){
        let url = ThermomixService.URL_BASE + "obtener_libros";
        let response = await fetch(url);
        let data = await response.json();
        return data.libros;
    }

    async getDishesByBook(bookId){
        let url = ThermomixService.URL_BASE + "obtener_platos&libro=" + bookId;
        let response = await fetch(url);
        let data = await response.json();
        return data.platos;
    }

    async getRecepeeByDish(dishId){
        let url = ThermomixService.URL_BASE + "obtener_receta&plato=" + dishId;
        let respose = await fetch(url);
        let data = await respose.json();
        return data.receta;

    }

}