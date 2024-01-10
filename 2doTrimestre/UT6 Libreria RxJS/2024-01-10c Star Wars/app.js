import { ajax } from 'rxjs/ajax';
import { map, pluck } from 'rxjs';
import XMLHttpRequest from 'xhr2';

getPeople$().subscribe(console.log);

function getPeople$(){
    const url = 'https://swapi.dev/api/people';
    const people$ = ajax({ 
        url,
        createXHR: () => new XMLHttpRequest(),
        method: 'get',
        reponseType:'json',
        crossDomain: true,
        withCredentials: false,
     }).pipe(
        // map(all => all.response.results)
        pluck("response"),
        pluck("results"),
        map(people => people.map(person => person.name))

     );
    return people$;
}