# Arrow Functions Exercise

## ES5 Map Callback => ES2015 Arrow Functions Shorthand

```
function double(arr) {
  return arr.map(function(val) {
    return val * 2;
  });
}
```

#### Refactor the above code to use two arrow functions. Turn it into a one-liner.

```
// my solution
const doubleDemo = (arr) => arr.map((val) => val * 2);

// solution given. Without parenthesis
const double = arr => arr.map(val => val * 2);
```

---

## Refactor the following function to use arrow functions

```
function squareAndFindEvens(numbers){
  var squares = numbers.map(function(num){
    return num ** 2;
  });
  var evens = squares.filter(function(square){
    return square % 2 === 0;
  });
  return evens;
}
```

#### Replace ALL functions above with arrow functions.

```
const squareAndFindEvens = (numbers) =>
  numbers.map((num) => num ** 2).filter((num) => num % 2 === 0);
```

##### Help from Google:

To convert the function to an arrow function, you would write it as:

`(array) => array.map(num => num * num).filter(num => num % 2 === 0);. `

Explanation:

`(array) =>`:

This defines the arrow function that takes a single parameter called "array".

`array.map(num => num * num)`:

This part iterates through each number in the array using the `map` method, and for each number (`num`), it squares it by multiplying it by itself (`num * num`).

`.filter(num => num % 2 === 0)`:

Then, the result of the `map` is passed to the `filter` method, which keeps only the numbers that are even (i.e., where the remainder when divided by 2 is 0).
