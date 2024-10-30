function sing() {
  if (true) {
    var song = "Goodbye Yellow Brick Road";
    console.log(song); //var is scoped to the function
  }
  console.log(song); //we have access to song here too
}

//let can be redefined but not redeclared within the same scope

// Let variables are block scoped
// scoped to the current code block. not the function like var.
// basically within {} and any inside of that parent block.
// will also be scoped within a function if not within it's own code block

if (true) {
  let color = "teal";
  console.log(color);
  if (true) {
    console.log(color); // this will work because it is within the same code block. All child blocks will have access to the let variable
  }
}
// console.log(color);  //THIS WILL NOT WORK!

// let val cannot be reused in the same scope.
// variables are not added to the window like var is

// **********************
// For Loop Example:
// **********************

// Using VAR...
// var i = 'hello';
// for (var i = 0; i <= 3; i++) {
// 	console.log(i);
// } //i will persist outside this loop
// console.log(i); // 4... would continue i++
// confusing. throughout your code i would need to be constantly redefine. That is so dumb

// Using LET...
// i will only exist in the code block.
let i = "hello";
for (let i = 0; i <= 3; i++) {
  console.log(i);
} //the loop's i variable only exist IN THE LOOP
console.log(i); //'hello'

let mood = "fantastic";
function getMood(num) {
  let mood = "meh";
  if (num < 3) {
    let mood = "bad :("; // this new declaration of mood exists only within this code block. even if the num is less than 3. would have to say mood = bad. not a redeclaration
    console.log(mood);
  }
  return mood;
}
getMood(2); //"meh"

// CONST is also block-scoped
// const keyword prevents a variable from ever being reassigned or redeclared within the same block scoped
const PI = 3.14159; //this const is not the same as...
if (true) {
  const PI = 4.561234; // ...this const
  console.log(PI);
}
console.log(PI);

// for primitive values the value will not/cannot change.
// for reference types, const will point to the same reference number even if the contents change.

// ex. const myCats = [];
// ex. const myCats = [this, that, whatever]
// ex const myCats = []; cannot do this.
// works the same for an object

// *********************
// VARIABLE HOISTING!
// *********************

// This will print undefined...wtf?
// with var the variables are hoisted to the top.
// var chickens;

console.log(chickens); //undefined
var chickens = ["butters", "nancy", "junior", "tilda", "stevie chicks"];
//The declaration is run BEFORE anything else.

// let and const are not hoisted.
// need to declare variables before initialization
// let can be initialized let bird; // undefined
// const needs to be initialized and declared value const bird; // error
// let and const DO NOT work this way.
// This code results in an error:

// console.log(chickens);
// const chickens = [ 'butters', 'nancy', 'junior', 'tilda', 'stevie chicks' ];
// console.log(chickens);

// ********* which should i use?

// never use var

// always start with const
// if your realize that you need to update the value, then switch variable to let
// usually you don't want things to change

// some companies don't allow var or let. Prefer only const.
