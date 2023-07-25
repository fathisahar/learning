
//creation and accessing elements
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
var listItem = famousSayings[0];

//mutable
let groceryList = ['bread', 'tomatoes', 'milk'];
groceryList[1] = 'avocados';

//length
const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length)

//push pop
const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push('here', 'bye');
chores.pop();

//shift, unshift, slice, indexOf
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList.shift();
groceryList.unshift('popcorn');
console.log(groceryList.slice(1, 4));
const pastaIndex = groceryList.indexOf('pasta');

numberClusters = [[1,2], [3,4], [5,6]];
const target = numberClusters[2][1]; //prints 6
