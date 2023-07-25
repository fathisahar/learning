/*
follows if and if else syntax. 

comparison operators:
 ===, !==, >, <, >=, <=

 logical operators:
 && (and), || (or), ! (not)

 */

 let mood = 'sleepy';
 let tirednessLevel = 6;
 
 if (mood === 'sleepy' && tirednessLevel > 8){
   console.log('time to sleep');
 } else {
   console.log('not bed time yet');
 }

 /*
 falsy:
    false, 0, '', null, undefined, NaN
*/

let tool = 'marker';

// short circuit evaluation to assign a value
let writingUtensil = tool || 'pen';

//if tool is empty, then pen will be assigned. If both are truthy, then first value of the || will be assigned
console.log(`The ${writingUtensil} is mightier than the sword.`);


/* 
ternary operator: 
    condition before the ?
    Two expressions after ? separated by a colon :
    If the condition evaluates to true, the first expression executes
    If the condition evaluates to false, the second expression executes
*/

let isLocked = false;
isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

let isCorrect = true;
isCorrect ? console.log('Correct!') : console.log('Incorrect!');

let favoritePhrase = 'Love That!';
favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");

//switch statement

let athleteFinalPosition = 'first place';
switch (athleteFinalPosition) {
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.');
    break;
}