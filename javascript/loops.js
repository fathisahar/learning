//for loop
for (let i = 5; i < 11; i++){
    console.log(i);
}

//through arrays
for (let i = 0; i < vacationSpots.length; i++){
    console.log('I would love to visit ' + vacationSpots[i]);
}

//while loops
const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard = [];

while (currentCard !== 'spade'){
    currentCard = cards[Math.floor(Math.random() * 4)];
    console.log(currentCard);
}

//do while
let cupsOfSugarNeeded = 1;
let cupsAdded = 0;

do {
  cupsAdded+=1;
} while (cupsAdded < cupsOfSugarNeeded) 