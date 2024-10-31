// use spread during execution of a function
// max (...)

// Spread With Function Calls...
const nums = [4, 5, 88, 123, 0.92, 34];
Math.max(nums); //NaN this is trying to get the max of the entire array compared to something else
Math.max(...nums); //123 spread will take each element to compare

const filterByType = (type, ...vals) => {
  // rest
  return vals.filter((v) => typeof v === type);
};

const things = [23, 45, true, false, 0, "hello", "goodbye", undefined];

filterByType("number", ...things); // spread will take each element to compare

console.log(..."HELLO"); // spread will take each element
console.log("H", "E", "L", "L", "O");
