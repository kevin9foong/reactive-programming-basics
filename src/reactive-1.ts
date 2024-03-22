import { fromEvent } from 'rxjs';
import { buffer, debounceTime, filter } from 'rxjs/operators';

const btn = document.getElementById("btn-1");
// by convention, end with $ to indicate that it is an Observable/Stream
const btnClick$ = fromEvent(btn!, 'click'); // create Observable based on click events
// declarative approach using reactive
// can compose with stream operators
btnClick$.subscribe(() => {
    console.log("button clicked");
});

// logic is not exactly the same as imperative approach
// waits every 5s to emit an event -> prints to console only if 2 clicks exactly during that 5s interval.
btnClick$.pipe(
  buffer(btnClick$.pipe(debounceTime(5000))),
  filter(clickArray => clickArray.length === 2)
).subscribe(() => {
  console.log('Two clicks in less than 5 seconds');
});

// cons of reactive approach is that it can be hard to implement complex logic and similarly hard to understand/debug

console.log("Script loaded - reactive-1");