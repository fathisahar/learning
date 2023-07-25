//function syntax and calling it 
function sayThanks(){
    console.log('Thank you for your purchase! We appreciate your business.');
}
  
sayThanks();

//parameters and arguments, within the () when calling/making the function
function sayThanks(name) {
    console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
}

sayThanks('Cole');

/* 
default parameters:
    By using a default parameter, we account for situations when an argument isn’t passed into a function that is expecting an argument.
*/

//EXAMPLE 1 
function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
}
   
//EXAMPLE 2
function greeting (name = 'stranger') {
    console.log(`Hello, ${name}!`)
}
   
greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!

//return
function monitorCount(rows, columns){
    return rows * columns;
  }
  
const numOfMonitors = monitorCount(5,4);
console.log(numOfMonitors)


//function expressions
const plantNeedsWater = function(day){
    if (day == 'Wednesday'){
        return true;
    } else {
        return false;
    }
};
  
plantNeedsWater('Tuesday');
  
console.log(plantNeedsWater('Tuesday'));

//arrow functions
const plantNeedsWater2 = (day) => {
    if (day === 'Wednesday') {
        return true;
    } else {
        return false;
    }
};

const rectangleArea = (width, height) => {
    let area = width * height;
    return area;
};

const functionName1 = () => {};
const functionName2 = paramOne => {};
const functionName3 = (paramOne, paramTwo) => {};

//for one line, implicit return
const plantNeedsWater3 = day => day === 'Wednesday' ? true : false;