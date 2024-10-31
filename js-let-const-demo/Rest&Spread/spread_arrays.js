// working w arrays

const palette = ["lavender berry", "sunflower yellow", "orchid orange"];

// when making a copy ie:
// const paletteCopy = palette;
// both variables will be pointing to the same reference number.
// any change to one will effect the other

// using spread will create an entirely new array with a different ref num
// same as const paletteCopy = palette.slice();

// spread takes each indv val of an existing array and then adds each val to a new array

// can add new vals, copy an array at the same time
const paletteCopy = ["sky blue", ...palette, "grass green"];

const greenTeas = ["snow jasmine", "fragrant leaf"];
const oolongTeas = ["honey orchid", "winter sprout"];
const herbalTeas = ["african solstice", "marshmallowroot"];
const coffees = ["guatemala red cat", "snow leopard blend"];

// combine multiple arrays in to a new one
const allTeas = [...greenTeas, ...oolongTeas, ...herbalTeas];

// add multiple arrays together and add anything else you want/need
const withCaffeine = [...greenTeas, ...oolongTeas, ...coffees, "Earl Grey"];

const vowels = "aeiou";
const vowelArr = [...vowels, "sometimes y"];
