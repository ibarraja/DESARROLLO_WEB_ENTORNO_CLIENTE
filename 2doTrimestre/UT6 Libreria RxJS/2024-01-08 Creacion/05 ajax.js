import {ajax} from 'rxjs/ajax';
import {map,mergeMap,take} from 'rxjs/operators';
import XMLHttpRequest from 'xhr2';

const url = 'https://pokeapi.co/api/v2/pokemon/';

const extractData = todo => todo.response.results;
const extractNames = pokemon => pokemon.name;


const pokemons$ = ajax({
    url: url,
    createXHR: () => new XMLHttpRequest(),
    method: 'get',
    responseType: 'json',
    crossDomain: true,
    withCredentials: false
}).pipe(
    map(extractData),
    mergeMap(pokemons => pokemons),
    take(5),
    map(extractNames)
);

pokemons$.subscribe(console.log);
