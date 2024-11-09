// *******Maps and Sets Exercise*******

///// **Quick Question #1**
//What does the following code return?

new Set([1, 1, 2, 2, 3, 4]); // [1,2,3,4]

///// **Quick Question #2**
// What does the following code return?

[...new Set("referee")].join(""); // [ref]

///// **Quick Questions #3**
// What does the Map ***m*** look like after running the following code?

let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);

//0: {Array(3) => true}
//1: {Array(3) => false}

///// **hasDuplicate**
// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

// my solution, incorrect
// function hasDuplicate(arr) {
//   if (arr.filter((val) => !arr.has(val))) {
//     return true;
//   } else {
//     return false;
//   }
// }

// hasDuplicate([1, 3, 2, 1]); // true
// hasDuplicate([1, 5, -1, 4]); // false

// ? why does this work? It is comparing the size/length of the arr/set and not the actual values within

const hasDuplicate = (arr) => new Set(arr).size !== arr.length;

// **vowelCount**
// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

// define what a vowel is
// return true if is vowel
function isVowel(char) {
  return "aeiou".includes(char);
}

// accepts a str
function vowelCount(str) {
  // create a new map
  const vowelMap = new Map();

  // loop through each char of str
  for (let char of str) {
    // change all chars to be lower case
    let lowerCaseChar = char.toLowerCase();

    // if the char is vowel
    if (isVowel(lowerCaseChar)) {
      // if there is more than one of a certain vowel
      // add to map, vowel (key) and get the existing vowel count, add 1
      vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1); // setting key

      //if there is only one of that vowel
    } else {
      vowelMap.set(lowerCaseChar, 1);
    }
  }
  // return the map afterwards
  return vowelMap;
}

//vowelCount("awesome"); // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
//vowelCount("Colt"); // Map { 'o' => 1 }

// [Solution](https://lessons.springboard.com/Solution-785cba9d3554495f9787e49fcedd6c2f?pvs=21)
