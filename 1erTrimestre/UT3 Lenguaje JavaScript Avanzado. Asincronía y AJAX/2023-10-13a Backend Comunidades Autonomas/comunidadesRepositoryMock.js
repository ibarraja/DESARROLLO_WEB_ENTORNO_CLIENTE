class ComunidadesRepositoryMock {
    static _comunidades = [
        { id: 'mu', nombre: 'Región de Murcia' },
        { id: 'va', nombre: 'Comunitat Valenciana' },
        { id: 'ga', nombre: 'Galicia' },
        { id: 'ma', nombre: 'Comunidad de Madrid' },
        { id: 'ex', nombre: 'Extremadura' },
    ]

    recuperarComunidades(){
        return ComunidadesRepositoryMock._comunidades;
    }
}
