// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
let quotes = [
  {quote: 'quote 1.', source: 'billy', citation: 'c1', year: '1900'},
  {quote: 'quote 2.', source: 'gary', citation: 'c2', year: '520'},
  {quote: 'quote 3.', source: 'ralph', citation: 'c3', year: '1776'},
  {quote: 'quote 4.', source: 'john', citation: 'c4', year: '1984'},
  {quote: 'quote 5.', source: 'ron', citation: 'c5', year: '2001'},
];

// Create the getRandomQuuote function and name it getRandomQuote
function getRandomQuote(array) {
  let randomQuote = Math.floor(Math.random() * array.length);
  let source = array[randomQuote];
  return source;
}

// Create the printQuote funtion and name it printQuote
function printQuote() {
  let fetchQ = getRandomQuote(quotes);
  let placeText = " ";
  if (fetchQ.citation === undefined || fetchQ.year === undefined) {
    placeText += '<p class="quote">' + fetchQ.quote + '</p>' + '<p class="source">' + fetchQ.source;
  } else {
    placeText += '<p class="quote">' + fetchQ.quote + '</p>' + '<p class="source">' + fetchQ.source + '<span class="citation">' + fetchQ.citation + '</span>' + '<span class="year">' + fetchQ.year + '</span>' + '</p>';
  }

/* Below is an alternative route but I still couldn't get it working.
  let placeText = '<p class="quote"> ' + fetchQ.quote + ' </p>';
  placeText += '<p class="source"> ' + fetchQ.source;

  if (fetchQ.hasOwnProperty("citation")) {
    placeText += '<span class="citation"> ' + fetchQ.citation + ' </span>';
  }
  if (fetchQ.hasOwnProperty("year")) {
    placeText += '<span class="year"> ' + fetchQ.year + ' </span>';
  }
  placeText += '</p>';*/

  document.getElementById('quote-box').innerHTML = placeText;


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
