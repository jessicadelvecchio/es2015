# let and const exercise

#### In this exercise, you’ll refactor some ES5 code into ES2015.

```
var PI = 3.14;
PI = 42; // stop me from doing this!

```

answer:

```
const PI = 3.14; // const prevents a variable from being reassigned or redeclared

```

## **Quiz**

#### What is the difference between **_var_** and **_let_**?

Var is function-scoped and can be redefined and redeclared at any time.

Let is block-scoped and can be redefined but NOT redeclared within the same scope.

#### What is the difference between **var** and **_const_**?

Var is function-scoped and can be redefined and redeclared at any time.

Const is block-scoped and canNOT be reassigned or redeclared.

#### What is the difference between **let** and **const**?

Let can be redefined but NOT redeclared within the same scope.

Const canNOT be reassigned or redeclared.

#### What is hoisting?

Hoisting refers to the way that JavaScript is compiled and read by a browser.

Variable using `var` read and declared first. Calling these variables before they are assigned will show `undefined`.

Variables using `let` and `const` are not hoisted. These variables need to be declcared before initialization. Calling variables before they are assigned will result in and error.
