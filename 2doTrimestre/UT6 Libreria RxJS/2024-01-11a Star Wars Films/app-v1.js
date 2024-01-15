import { concatMap, map, mergeMap } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import XMLHttpRequest from 'xhr2';

const url = "https://swapi.dev/api/people/1";

const films$ = ajax({ 
    url,
    createXHR: () => new XMLHttpRequest()
}).pipe(
    map(({response}) => response.films),
    mergeMap(films => films),
    concatMap( url => 
        ajax({
            url,
            createXHR: () => new XMLHttpRequest()
        }).pipe(
            map(({response}) => response.title)
        )
    )
);

//flatMap, mergeMap, concatMap, ...

const subscription = films$.subscribe(console.log)