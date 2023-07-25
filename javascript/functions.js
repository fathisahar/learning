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