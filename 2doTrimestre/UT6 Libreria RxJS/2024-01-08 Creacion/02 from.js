import {from} from 'rxjs'

const numbers$ = from([10,20,30])

numbers$.subscribe(console.log)

numbers$.subscribe(number => console.log(number*2));