import {interval} from 'rxjs';

const interval$ = interval(1000);

interval$.subscribe(console.log);