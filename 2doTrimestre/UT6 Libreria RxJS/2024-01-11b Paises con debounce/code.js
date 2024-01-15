document.addEventListener("DOMContentLoaded", setup);

function setup(){
    // getCountries$().subscribe(console.log);

    setupTextbox();
}

function setupTextbox(){
    const { fromEvent } = rxjs;
    const { debounceTime } = rxjs.operators;

    const newCharacter$ = fromEvent(tTxtNameFilter, "keypress")
        .pipe(
            debounceTime(10)
        );
    newCharacter$.subscribe(console.log);
}


function getCountries$(){

    const { ajax } = rxjs.ajax;
    const { map } = rxjs.operators;
    const { mergeMap } = rxjs;

    // const { mergeMap } = rxjs.mergeMap;

    const url = "https://restcountries.com/v3.1/all";

    return ajax({ url }).pipe(
        map(({ response }) => response),
        mergeMap(countries => countries),
        map( country => country.name.official)
    );
}