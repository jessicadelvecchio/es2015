// ! extracting information from objects

// const teaOrder = {
// 	variety     : 'oolong',
// 	teaName     : 'winter sprout',
// 	origin      : 'taiwan',
// 	price       : 12.99,
// 	hasCaffeine : true,
// 	quantity    : 3
// };

//  * previously, this is how to access data from an object
//  * this doesn't change/mutate the original object
//  * const price = teaOrder.price;
//  * const quantity = teaOrder.quantity;
//  * const teaName = teaOrder.teaName;

//  * this is how your destruct
//  * can use const or let
//  * destructures into individual values into indiv variables
//  * set = to data obj we are getting info from
//  * none of this will mutate the original data structure

//  * can use the rest property doing this
//  * ...others, will gather all other information that wasn't explicitly called out
// const { price, quantity, ...others } = teaOrder;

// **** defaults with destructuring ****

// * this sets a default value
// * if it doesn't exist in the obj then this will be the default unless otherwise specified within the obj
// * this also renames the key value
// const { brewTemp: temp = 175 } = teaOrder;

// **** renaming with destructuring ****
// const { teaName: tea } = teaOrder;

// **** defaults and functions using destructuring ****
// function checkout(tea) {
// 	const { quantity = 1, price } = tea; // * sets the quantity to 1 if not specified otherwise
// 	return quantity * price; // * takes the properties of the obj and uses them in function
// }

// checkout(teaOrder);

// const order1 = {
// 	variety     : 'green',
// 	teaName     : 'silver needle',
// 	origin      : 'taiwan',
// 	price       : 12.99,
// 	hasCaffeine : true
// };

// ! extracting information from objects

//* you can apply the same concept to arrays
//* destrucuring is done with position/index rather than obj keys
//* use []

// const students = [
// 	{ name: 'Drake', gpa: 4.6 },
// 	{ name: 'Henrietta', gpa: 4.4 },
// 	{ name: 'Tung', gpa: 4.0 },
// 	{ name: 'Harry', gpa: 3.8 },
// 	{ name: 'Ant', gpa: 3.2 }
// ];

// const [ topStudent, secondBest, ,fourth ] = students; //* based on place in arr
//* can skip using ,, but not recommended
//* > Drake, Henrietta, Harry

// const [ first, ...losers ] = students;
// * > using rest, first person, then new array w all the others
// * can name the variables whatever you want, it all has to do with the index

// ! deconstructing functions, using properties from obj

const order2 = {
  variety: "green",
  teaName: "silver needle",
  origin: "taiwan",
  price: 12.99,
  hasCaffeine: true,
};

// * accessing only the properties that we need.
// * pass in the obj you need and then only the pieces that we want will be extracted
// * can also set a default if the property doesn't exist
function getTotal({ quantity: qty = 1, price }) {
  return qty * price;
}

const longJumpResults = ["Tammy", "Jessica", "Violet"];
const swimMeetResults = ["Japan", "France", "Chile"];

// * same thing with arrays
// * remember that everything is done by position/index in the array
function awardMedals([gold, silver, bronze]) {
  // * can name these whatever you want
  return {
    gold,
    silver,
    bronze,
  };
}

// ! deconstructing nested data structures

const metadata = {
  title: "Scratchpad",
  translations: [
    {
      locale: "de",
      localization_tags: [],
      last_edit: "2014-04-14T08:43:37",
      url: "/de/docs/Tools/Scratchpad",
      title: "JavaScript-Umgebung",
    },
  ],
  url: "/en-US/docs/Tools/Scratchpad",
};

const movie = {
  Title: "Amadeus",
  Year: "1984",
  Rated: {
    rating: "R",
    advisory: "Rated R for brief nudity",
  },
  Released: "19 Sep 1984",
  Runtime: "160 min",
  Genres: ["Biography", "Drama", "History", "Music"],
  Director: "Milos Forman",
  Writer:
    "Peter Shaffer (original stage play), Peter Shaffer (original screenplay)",
  Actors: "F. Murray Abraham, Tom Hulce, Elizabeth Berridge, Roy Dotrice",
  Plot: "Antonio Salieri believes that Wolfgang Amadeus Mozart's music is divine and miraculous. He wishes he was himself as good a musician as Mozart so that he can praise the Lord through composing. He began his career as a devout man who believes his success and talent as a composer are God's rewards for his piety. He's also content as the respected, financially well-off, court composer of Austrian Emperor Joseph II. But he's shocked to learn that Mozart is such a vulgar creature, and can't understand why God favored Mozart to be his instrument. Salieri's envy has made him an enemy of God whose greatness was evident in Mozart. He is ready to take revenge against God and Mozart for his own musical mediocrity.",
  Language: "English, Italian, Latin, German",
  Versions: [
    { version: "Original Release", runtime: 161 },
    { version: "Director's Cut", runtime: 180 },
  ],
  Country: "USA, France, Czechoslovakia, Italy",
  Awards: "Won 8 Oscars. Another 33 wins & 14 nominations.",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BNWJlNzUzNGMtYTAwMS00ZjI2LWFmNWQtODcxNWUxODA5YmU1XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
  Ratings: [
    { Source: "Internet Movie Database", Value: "8.3/10" },
    { Source: "Rotten Tomatoes", Value: "93%" },
    { Source: "Metacritic", Value: "88/100" },
  ],
  imdbVotes: "346,056",
  imdbID: "tt0086879",
  Type: "movie",
  DVD: "16 Dec 1997",
  BoxOffice: "N/A",
  Production: "Warner Bros. Pictures",
  Website: "N/A",
  Response: "True",
};

// const { Rated } = movie;
// const { rating, advisory } = Rated;
const {
  Rated: { rating, advisory: note },
} = movie;
const {
  Ratings: [{ Value: imdbRating }, { Value: rtRating }, { Value: metaRating }],
  Versions: [{ runtime: originalRunTime }, { runtime: directorsCutRunTime }],
} = movie;

// **************************************
// SWAPPING VARIABLES USING DESTRUCTURING
// **************************************

let delicious = "Mayonnaise"; //THIS IS WRONG! MAYO IS NASTY!
let disgusting = "Whipped Cream";

// let temp = delicious;
// delicious = disgusting;
// disgusting = temp;

// let both = [ delicious, disgusting ];
// [ disgusting, delicious ] = both;

// Swaps the variables in one line!
[disgusting, delicious] = [delicious, disgusting];
