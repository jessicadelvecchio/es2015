# Rest / Spread Operator Exercises

Conclusion: still getting used to refactoring into arrow functions but feeling more confident using rest and spread. 

### Refactor this to use the rest operator & an arrow function:

```
function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function(num) {
    return num % 2 === 0
  });
}
```

##### My solution:
```
function filterOdds(...nums) {
  return nums.filter((num) => num % 2 !== 0);
}

// const filterOutOdds = (...args) => args.filter(v => v % 2 === 0)
```

---

### findMin
##### Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.

##### Make sure to do this using the rest and spread operator.

##### Expected output:
```
findMin(1,4,12,-3) // -3
findMin(1,-1) // -1
findMin(3,1) // 1
```

##### My solution:
```
function findMin(...nums) {
  return Math.min(...nums);
}

// const findMin = (...args) => Math.min(...args)
```

---


### mergeObjects
##### Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

##### Expected output:
```
mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}
```

##### My solution:
```
function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

// const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})
```

---



### doubleAndReturnArgs
##### Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.

##### Expected output:
```
doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
doubleAndReturnArgs([2],10,4) // [2, 20, 8]
```

##### My solution: INCORRECT
```
function doubleAndReturnArgs(arr, ...rest) {
  return [arr, ...(rest * 2)];
}
```

##### Solution given:
Need to use map to iterate through the additional args given. Cannot just muliply them all by 2. Also need to use spread `...arr` to include given arr to the new arr
```
const doubleAndReturnArgs = (arr, ...args) => [
  ...arr,
  ...args.map((v) => v * 2),
];
```

---

### Slice and Dice!
##### For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!

##### Make sure that you are always returning a new array or object and not modifying the existing inputs.


##### My solution:

###### Remove a random element in the items array and return a new array without that item.

```
const removeRandom = items => {
  let idx = Math.floor(Math.random() * items.length);
  return [...items.slice(0, idx), ...items.slice(idx + 1)];
}
```

###### Return a new array with every item in array1 and array2.

```
const extend = (array1, array2) => [...array1, ...array2];
```
###### Return a new object with all the keys and values from obj and a new key/value pair.

```
const addKeyVal = (obj, key, val) => {
    return {...obj, [key]: val}
}
```

###### Return a new object with a key removed.
##### My solution: INCORRECT
```
const removeKey = (obj, key) => {
  return { key, ...obj };
}
```

##### Solution given:
Need to assign the obj with the key removed,`return obj`.
Also, the key to remove should be set to `undefined`
```
const removeKey = (obj, key) => {
    ({ [key]: undefined, ...obj } = obj);
    return obj;
};

```

###### Combine two objects and return a new object.
```
const combine = (obj1, obj2) => {
    return {...obj1, ...obj2};
} 
```

###### Return a new object with a modified key and value.
```
const update = (obj, key, val) => {
    return {...obj, [key]: val}
}
```