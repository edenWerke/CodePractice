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
console.log(airline.toLocaleLowerCase());
console.log(airline.toUpperCase());

const passenger = 'eDeN';
const passengerLower = passenger.toLowerCase()
console.log(passenger);
console.log(passengerLower);
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//compairing email
const email = 'hello@gmail.com';
const loginEmail = ' hello@gmail.Com \n';
const lowerEmail = loginEmail.toLowerCase();
const trimEmail = lowerEmail.trim();
console.log(trimEmail);
const normalizeEmail = loginEmail.toLowerCase().trim();
console.log(normalizeEmail)
const compare = function(correct, incorrect) {
    if (correct === incorrect) {
        console.log(true)
    } else {
        console.log(false)
    }
}
compare('Eden', 'Eden')
    //replacing
const priceGB = '288,97#';
const priceUS = priceGB.replace('#', '$').replace(',', '.');
console.log(priceUS);
const announcement = 'All passengers come to barding door 23.boarding door 23!'
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));
//BOOLEANS
const plane = 'Airbus A707neo';
console.log(plane.includes('A707'));
console.log(plane.includes('rf'))
if (plane.startsWith('Air') && plane.endsWith('neo')) {
    console.log('part of new air bus family')
}
//practice exerscise
const checkBaggage = function(items) {
    if (items.toLowerCase().includes('gun') || items.toLowerCase().includes('knife')) {
        console.log('you are not allowed to pass');
    } else {
        console.log('You can pass')
    }

}
checkBaggage('I have a laptop, some food and pocket of Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and Gun for protection');
