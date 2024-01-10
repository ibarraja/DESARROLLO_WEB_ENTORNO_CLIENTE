import { from, map, filter } from "rxjs";

const numbers$ = from ([56, 23, 76, 36, 39]).pipe(
    //transform the numbers into negative numbers
    map(num => num * -1), 
    //filter those numbers which module is 0
    filter(num => num % 2 === 0)
);

numbers$.subscribe({
    next: number => console.log(number),
    error: error => console.error(error),
    complete: () => console.log('Ya se ha terminado la secuencia de números')
});