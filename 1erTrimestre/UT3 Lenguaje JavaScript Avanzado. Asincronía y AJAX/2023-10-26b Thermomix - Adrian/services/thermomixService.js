export default class ThermomixService {
    static URL_BASE = 'http://localhost/thermomix/controlador.php?operacion=';

    async getBooks(){
        let url = `${ThermomixService.URL_BASE}obtener_libros`;
        let response = await fetch(url);
        let data = await response.json();
        return data.libros;
    }

    async getPlatesByBookId(bookId){
        let url =`${ThermomixService.URL_BASE}obtener_platos&libro=${bookId}`;
        let response = await fetch(url);
        let data = await response.json();
        return data.platos;
    }

    async getRecipeByPlateId(plateId){
        let url = `${ThermomixService.URL_BASE}obtener_receta&plato=${plateId}`;
        let response = await fetch(url);
        let data = await response.json();
        return data.receta;
    }
    
}

