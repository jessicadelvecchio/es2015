// copy arrays and objects
// rest to gather remaining arguments in an array
// works in arrow functions
// syntax is ... for both but they have a differnt meaning and function

// the rest operator is the last parameter defined in a function and will evaluate to an arra of all additional aruments passed in
// similar to the arguments obj except it will convert whatever parameters into an array

// you can name the arg whatever you want and then that arg is accessible througout the rest of your function

function sum(...nums) {
  // syntax for rest
  return nums.reduce((sum, n) => sum + n);
}

const sumAll = (...values) => {
  // works in arrow functions
  if (!values.length) return undefined;
  return values.reduce((sum, n) => sum + n);
};

function makeFamily(parent1, parent2, ...kids) {
  // can use rest to collect the rest of the arguments
  return {
    parents: [parent1, parent2],
    children: kids.length ? kids : 0,
  };
}
const filterByType = (type, ...vals) => {
  return vals.filter((v) => typeof v === type);
};
