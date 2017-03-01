// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var quotes = [ {
  quote:'I am great' ,
  citation:'Liam Piam' ,
  year: '2017',
  tags: [ "Humor", "Narccissism"],
  displayed: false
} ,
{
  quote: 'No I\'m the best' ,
  source: 'The Divine Wisdom of Zeus' ,
  citation: 'Zeus' ,
  year: '500 BC',
  tags: [ "Delusion", "Drunkenness"],
  displayed: false
} ,
{
  quote:'You\'re both special' ,
  citation: 'Mum' ,
  year: '2017',
  tags: [ "Diplomacy", "Fairness"],
  displayed: false
}


];

// Gets random quote
function getRandomQuote() {
  var counter = 0
  for (x = 0; x < quotes.length; x++ ) {
    if (quotes[x].displayed == true ){
      counter += 1;
    }


    }

    if (counter >= quotes.length){

      for (x = 0; x < quotes.length; x++ ){
        quotes[x].displayed = false;

      }

    }

  var i = Math.floor( Math.random() * quotes.length);


var found = false;

while (found == false){

  if (quotes[i].displayed == false){
    found = true;

  } else {

    i = Math.floor( Math.random() * quotes.length);
  }
}
  quotes[i].displayed=true;
  console.log(quotes[i]);
  return quotes[i];

};

function printQuote() {
  //Change background color randomly
  var colors = [ '#4286f4', '#41f4b2', '#b541f4', '#d0f441', '#41f4d9' ];
  var i = Math.floor( Math.random() * colors.length);
  var randomColor = colors[i];
  document.getElementById('body').style.backgroundColor = randomColor;


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

  console.log(quotes);
};

console.log(quotes);

window.setInterval(printQuote, 30000);
