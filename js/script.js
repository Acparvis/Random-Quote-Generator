// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var quotes = [ {
  quote:'I am great' ,
  citation:'Liam Piam' ,
  year: '2017'
} ,
{
  quote: 'No I\'m the best' ,
  source: 'The Divine Wisdom of Zeus' ,
  citation: 'Zeus' ,
  year: '500 BC'
} ,
{
  quote:'You\'re both special' ,
  citation: 'Mum' ,
  year: '2017'
}


];
// Gets random quote
function getRandomQuote() {
  var i = Math.floor( Math.random() * quotes.length);
  return quotes[i];

};

function printQuote() {

  // Builds object string
  var quoteObject = getRandomQuote();


  // Test if we can get the source
  var result = '' ;
  if (quoteObject.source === undefined) {
    result = 'Unknown';
  } else {
    result = quoteObject.source;
  }

  // Building output strings
  var quoteString =  '<p class="quote"> ' + quoteObject.quote + '</p>';
  var sourceString = '<p class="source">' + result;
  var citationString =  '<span class="citation">' + quoteObject.citation + '</span>';
  var yearString =  '<span class="year">' + quoteObject.year + '</span></p>';

  document.getElementById('quote-box').innerHTML = quoteString + sourceString + citationString + yearString ;
};
