import { timer } from 'rxjs';

const timer$ = timer(2,2000);
timer$.subscribe(console.log);
