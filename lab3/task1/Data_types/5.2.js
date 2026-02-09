alert( Math.random() ); 
alert( Math.random() ); 
alert( Math.random() ); 

let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

alert(guestList);
alert( 'I\'m the Walrus!' ); // I'm the Walrus!
let str = `Hello`;

// the first character
alert( str[0] ); // H
alert( str.at(0) ); // H

// the last character
alert( str[str.length - 1] ); // o
alert( str.at(-1) );

let st = 'As sly as a fox, as strong as an ox';

let target = 'as'; // let's look for it

let pos = 0;
while (true) {
  let foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;

  alert( `Found at ${foundPos}` );
  pos = foundPos + 1; // continue the search from the next position
}
