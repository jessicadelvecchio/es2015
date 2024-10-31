// spread with objects
// ojects are not iterable

// cannot spread an object into an array
// [...] does not work
// {...} does work, will be a new reference

// can use spread inside a new object
// copying pieces into a new source

const tea = {
  type: "oolong",
  name: "winter sprout",
  origin: "taiwan",
};

// const tea2 = { ...tea }; this will copy the object

const teaData = {
  steepTime: "30s",
  brewTemp: 175,
  origin: "japan",
};

const teaTin = { ...tea, price: 22.99 }; // copying the tea obj and adding a new property

// const newTea = { ...tea, name: 'golden frost' }; this will update
// can also change properties using spread
// need to add the changes/updates at the end of any spread.
// would be overridden otherwise
const newTea = { name: "golden frost", ...tea }; // this will not update

const fullTea = { ...tea, ...teaData }; // origin is now japan
// the order matters. Whatever is added last is going to be the updated/changed value

// spread with arrays into objects
const colors = ["red", "orange", "blue"]; // uses the indices into a new objects
const dummyObj = { ...colors, ..."CAT" }; // colors will be gone. String will show as a primitive value, indiv letters separated
