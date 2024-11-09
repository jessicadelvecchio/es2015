// sets do not have key val pairs
// all values in a set are unique
// any data type is allowed

// removing dup values
// uniqueness is required
// efficient checking if an item is in a collection, better than arrays

// **To create an empty Set:
new Set();

// **You can also pass in an iterable (like an array):
// can only pass in one iterable
// set will seperate each val and only keep unique values
const bannedHashTags = new Set(["nofilter", "justsaying", "winning", "yolo"]);

// ** To add to a Set:
// if something is already in the set, will ignore, will only add unique values
// can chain adds
bannedHashTags.add("bestlife").add("selfie");

// ** check if a value is a set
// returns boolean value
bannedHashTags.has("yolo"); // true
bannedHashTags.has("tbt"); // false

// ** .delete() and .clear()
// delete single value
// clear entire set

// ** using a set within a function
// sets and arrays work similarly
// but sets ensure no duplicates
// sets are more efficient, fast at adding new values and checking values within an arr

function filterHashTags(tags) {
  const bannedHashTags = ["nofilter", "justsaying", "winning", "yolo"];
  return tags.filter((tag) => !bannedHashTags.has(tag));
}

// returns any tags not inside of a set
const susansTags = ["happymonday", "yolo", "winning", "sunset"];
filterHashTags(susansTags); //[ 'happymonday', 'sunset' ];

// ** Removing duplicates using a Set:
const ages = [45, 42, 21, 23, 24, 98, 2, 4, 4, 12, 3, 12, 45];
[...new Set(ages)]; //create a new Set and then spread it back into an Array

// ** Iterating Sets:
for (let tag of bannedHashTags) {
  console.log("STOP USING:", tag);
}

// using arrow functions

// bannedHashTags.forEach((tag) => console.log('STOP USING:', tag));
