// ** map basics

// finding the size is easy, no more loops or object.keys
// keys can be any data type

// maps are like objects. in objects all keys are turned into strings
// IN MAPS keys can be any data type, objects, functions, booleans, etc

// how do we make them?
// must use `new`

const myMap = new Map(); // create an empty map
myMap.set(7, "seven"); // add key/value pairs to the map using set (key, value) data types will stay the same, will NOT be changed to strings
myMap.set("7", "seven string");

const empty = [];
//myMap.set([], "empty array"); // an empty arr or obj will be undefined because it is pointing to a reference number, not the arr/obj itself. to set a key/value as a obj/arr need to first save as a variable
myMap.set(empty, "empty array"); // this will have empty arr as key

myMap.get(); // to get information/key values from a map. cannot use myMap[key] will be undefined.

// when using map can only get keys/values if the data type is correct. unlike objs which convert all keys and values to strings.

// const myMap = new Map();
// myMap.set(7, 'seven');
// myMap.set('7', 'seven string');

// const empty = [];
// myMap.set(empty, 'empty array!');
// myMap.set(true, 'TRUEEEE!');

// myMap.get(7);

// ** using functions in a map

// const add = (x, y) => x + y;
// const mult = (x, y) => x * y;

// const funcCalls = new Map();
// funcCalls.set(add, 0); // storing functions as keys with init val of 0
// funcCalls.set(mult, 0);

// funcCalls.set(add, 1); // later these can update and using .get() will show change
// funcCalls.set(mult, 9);

// ** using methods with maps
// not that many but already: .set(), .get()

// ** creating a map without using new Map()

// pass in an arr with sub arrays that contain [key, val]

const bandData = [
  // arr of arr
  [3, "3 Doors Down"], // [key, value]
  ["three", "Three Dog Night"],
  ["nine", "Nine Inch Nails"],
  ["four", "The Four Seasons"],
  [41, "Sum 41"],
];

// save map in variable, still using new Map(arrName)
const bandMap = new Map(bandData);

// ** adding key/val pair by using set. Can chain set calls together
// will mutate bandMap
bandMap.set(182, "Blink-182").set("twenty", "Matchbox Twenty");

// ** checking if a map contains something
//bandMap.has(9); // false
//bandMap.has("nine"); // true

// ** delete()
//bandMap.delete("twenty"); // delete that key/val pair

// ** clear()
//bandMap.clear(); // clears map entirely

// ** .keys(), .values()
// shows all keys or values
// can iterate through these
// can use spread to create an arr
//[...bandMap.keys()]

// ** looping with maps, iterating
// maps are in added order

// ** maps have size, not length
bandMap.size;

// ** forEach

// bandMap.forEach((val, key) => { // val first, then key
// 	console.log(key + '=>' + val);
// });

// ** for of

for (let [key, value] of bandMap) {
  // key first, then val
  // use destructuring to iterate through key val
  console.log(key, "=", value);
}

// ** can change a map back to an arr using the spread operator
[...bandMap];
