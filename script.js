'use strict';
// working with strings
const airline = 'Tap air Ethiopia';
const plane = 'A770'
console.log(plane[0]);
console.log(plane[0]);
console.log(plane[0]);
console.log(airline.length);
console.log('B737'.length);
console.log(airline.indexOf('i'));
console.log(airline.lastIndexOf('i'));
//case sensetive
console.log(airline.indexOf('Ethiopia'));
// where extraction starts
console.log(airline.slice(4));
console.log(airline.slice(5, 7));
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
console.log(airline.slice(-2));
console.log(airline.slice(2, -2));
console.log(new String('edu'))
const checkMiddleSeat = function(seat) {
    const mySeat = seat.slice(-1);
    if (mySeat === 'B' || mySeat === 'E') {
        console.log('you are not lucky');
    } else {
        console.log('you are lucky')
    }

}
checkMiddleSeat('11B');
checkMiddleSeat('11c');