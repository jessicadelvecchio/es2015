// ************************
// SHORTHAND PROPERTY NAMES
// ************************d
// function makePerson(first, last, age) {
// 	return {
// 		first   : first,
// 		last    : last,
// 		age     : age,
// 		isAlive : true
// 	};
// }

function makePerson(first, last, age) {
  return {
    first,
    last,
    age,
    isAlive: true,
  };
}

// const mathStuff = {
// 	x      : 200,
// 	add    : function(a, b) {
// 		return a + b;
// 	},
// 	square : function(a) {
// 		return a * a;
// 	}
// };

const mathStuff = {
  x: 200,
  add(a, b) {
    //! do not use arrow functions here / shorthand doesn't work here
    return a + b;
  },
  square(a) {
    return a * a;
  },
  multiply: (a, b) => {
    //! need to use a function declaration/ don't use AF here
    return a * b;
  },
};

//** computed  property names */
// 'periwinkle' '9c88ff'
// 'bright ube' 'D6A2E8'

// const color = {
// 	periwinkle : '9c88ff',
// 	'9c88ff'   : 'periwinkle'
// };

// function makeColor(name, hex) {
// 	const color = {};
// 	color[name] = hex;
// 	color[hex] = name;
// 	return color;
// }
function makeColor(name, hex) {
  // creating an object literal
  return {
    // returns an obj
    [name]: hex, // uses arg to set key and values
    [hex]: name,
  };
}

const mystery = {
  [6 + 7]: "thirteen",
};

const obj = {};
obj[6 + 7] = "thirteen";
