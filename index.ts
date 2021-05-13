console.clear();
import { BehaviorSubject, Subject } from 'rxjs';

const subject = new Subject<Number>();

//czyli tutaj ustalam sobie jakie bedzie zachowanie jesli wartosc dla subject sie zmieni
subject.subscribe(nieWiem);

//zmieniam wartosc przez co on ogarnia zeby wykonac akcje z subscribe
subject.next(456);

subject.next(399);

//jak zrobie unsubscribe to potem jakbym zmienial wartosc to i tak nie bedzie dzialac
subject.unsubscribe();
subject.next(400);

function nieWiem(poka) {
  console.log('Się wartość dla subject zmieniła wiec robie akcje');
  console.log(poka);
  var xD = 10 + poka;
  console.log(xD);
  console.log(poka);
}
