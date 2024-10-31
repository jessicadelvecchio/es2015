// *** arrow functions
// are shorthand for fn expressions
// cannot be named and they only work as fn expressions
// are ideal for shortening callbacks

// can only be used as shorthand for anonymous fn expressions
// must put parenths around parameters if there are 0 or 2+ parameters
// return statement is implied if you leave out curly braces
// they do not make their own this

// babel is a compiler. It transpile our code to browser compatible js
// we will later use it as a command tool

// doesn't work for IE.. but they can't do anything anyways

// * arrow fns do not work here
// FUNCTION DECLARATION
// function greet() {
// 	console.log('HI!');
// }

// * AF do work here
// FUNCTION EXPRESSION
// const add = function(x, y) {
// 	return x + y;
// };

// Arrow functions only work as function expressions:
const add = (x, y) => {
  return x + y;
};

// * AF do work here
// FUNCTION EXPRESSION (passed as arg to map)
// array.map(function(x){
// 	return x * 2
// }

// AF rewrite
// array
//   .map((x) => {
//     return x * 2;
//   })

[
  // Using a regular function expression:
  (2, 3, 6, 78, 99, 104, 23),
].reduce(function (max, currNum) {
  return Math.max(max, currNum);
});

// Using an arrow function expression:
[2, 3, 6, 78, 99, 104, 23].reduce((max, currNum) => {
  return Math.max(max, currNum);
});

// *****************************
// ARROW FUNCTION "SHORTCUTS"
// *****************************

// [ 1, 2, 3, 4, 5 ].forEach(n => { //with one param, can use no parenthesis. Most say that best practice is to use them tho
// 	console.log(n * 10);
// });

// const greet = () => { // no param need parenths
// 	console.log('HELLO!!!');
// };

// ** AF have an implicit return if you leave out the curly braces. Don't have to use the return keyword. one expression return only

[1, 2, 3, 4, 5, 6].filter(function (num) {
  return num % 2 === 0;
});

// AF rewrite
[1, 2, 3, 4, 5, 6].filter((num) => num % 2 === 0);

// const double = (n) => {
// 	return n * 2;
// };

// same function ^^
const double = (n) => n * 2;

// cannot use AF implicit return
[1, 5, 7, 9, 10, 12, 13, 15].map((n) => {
  if (n % 2 === 0) {
    return "even";
  }
  return "odd";
});

// cannot use AF implicit return breaks JS
// [ 1, 5, 7, 9, 10, 12, 13, 15 ].map((n) =>
// 	if (n % 2 === 0) {
// 		 'even';
// 	}
// 	 'odd';
// );

// AF implicit return rewrite
[1, 5, 7, 9, 10, 12, 13, 15].map((n) => (n % 2 === 0 ? "even" : "odd"));

function squareAndFindEvens(numbers) {
  var squares = numbers.map(function (num) {
    return num ** 2;
  });
  var evens = squares.filter(function (square) {
    return square % 2 === 0;
  });
  return evens;
}
const squareAndFindEvens = (numbers) =>
  numbers.map((num) => num ** 2).filter((num) => num % 2 === 0);

const dailyRainTotals = [
  [1.2, 0.35, 2.2],
  [1.7, 0.6, 0.1],
  [2.5, 0.9, 1.5],
];
// dailyRainTotals.map((hourlyRainTotals) => {
// 	return hourlyRainTotals.reduce((sum, inchesOfRain) => {
// 		return sum + inchesOfRain;
// 	});
// });

// AF IR rewrite. Same as the above fn
dailyRainTotals.map((hourlyRainTotals) =>
  hourlyRainTotals.reduce((sum, inchesOfRain) => sum + inchesOfRain)
);

// **********************
// Arrow Function Gotchas
// **********************
// const makeMath = (num) => {
// 	return {
// 		square : num * num,
// 		double : num * 2
// 	};
// };

// USE PARENS TO IMPLICITLY RETURN AN OBJECT:
const makeMath = (num) => ({
  // without parenths, js things that the curly braces are from an function, not an obj literal
  square: num * num,
  double: num * 2,
});

// THE KEYWORD 'THIS' BEHAVES DIFFERENTLY!

// AF do not have their own this context. If your fn uses the keyword this, be wary.
// you should NOT be using AF: in an obj method, when you need your own keyword this

const cat = {
  name: "Bubs",
  eat: function () {
    console.log(this);
    return `${this.name} chows down`;
  },
  meow: () => {
    // will not work.
    console.log(this);
    return `${this.name} says MEOW!!!`;
  },
};
