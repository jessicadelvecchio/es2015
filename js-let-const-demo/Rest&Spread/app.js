// creating copies of nested data structures
// spread works well with single level arrays/objects

// spread does not create a deep clone/nested items

// spread will created a copy array with a different reference number
// but each nested item will have the SAME original reference number
// changing one will change the other

// deep clones are difficult. beyond the scope of what is covered right now

const shoppingCart = [
  {
    name: "honey orchid",
    quantity: 2,
    price: 13.5,
  },
  {
    name: "african solstice",
    quantity: 4,
    price: 25.99,
  },
];

const cartCopy = [...shoppingCart];
