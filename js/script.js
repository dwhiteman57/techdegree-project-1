// FSJS - Random Quote Generator
/*Resources Used In This Project:
  Treehouse unit 1 review videos and projects
  Mozilla Developer Network Website
  Javascript & JQuery by Don Duckett
  Elequent Javascript 2nd Edition by Marijn Haverbeke
  Additional help via Treehouse Unit 1 Slack channel
*/

// Create the array of quote objects and name it quotes
let quotes = [
  {quote: "If you can dodge a wrench you can dodge a ball.", source: "Dodgeball", citation: "Patches O'Houlihan", year: "2004"},
  {quote: "I'll be honest with you, I love his music. I really do. I'm a Michael Bolton fan.", source: "Office Space", citation: "Bob Slydell", year: "1999"},
  {quote: "Just remember, when you control the mail you control...information", source: "Seinfeld"},
  {quote: "I've lost the bleeps, I lost the sweeps and I lost the creeps.", source: "Spaceballs", year: "1987"},
  {quote: "Dozens of people spontaneously combust each year. It's just not really widely reported.", source: "Spinal Tap", citation: "David St. Hubbins", year: "1984"},
];

// Create the getRandomQuuote function and name it getRandomQuote
//The function should take in one paramerter called array
function getRandomQuote(array) {
  //Select and return a random quote object from the quotes array
  let randomQuote = Math.floor(Math.random() * array.length);
  //Created a variable to store information from the array
  let source = array[randomQuote];
  //Returns information from the array of objects
  return source;
}

// Create the printQuote funtion and name it printQuote
function printQuote() {
  //Used to call on the array of quote objects and stored in variable
  let fetchQ = getRandomQuote(quotes);
  //Create a new empty string and store it in a variable
  let placeText = " ";
  //Used an if/else statement to handle various quote properties that may or may not exist. Concatenated strings using provided HTML template
  if (fetchQ.citation === undefined || fetchQ.year === undefined) {
    placeText += '<p class="quote">' + fetchQ.quote + '</p>' + '<p class="source">' + fetchQ.source;
  } else {
    placeText += '<p class="quote">' + fetchQ.quote + '</p>' + '<p class="source">' + fetchQ.source + '<span class="citation">' + fetchQ.citation + '</span>' + '<span class="year">' + fetchQ.year + '</span>' + '</p>';
  }
  //printQuote function should display the completed HTML string to the page using the below method
  document.getElementById('quote-box').innerHTML = placeText;
}

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
