//The following is an array of 10 quotes.
let quotes = [
  {
    quote: 'But it ain\'t about how hard you hit. It\s about how hard you can get hit and keep moving forward; how much ' +
      'you can take and keep moving forward. That\'s how winning is done!',
    source: 'Rocky Ballboa',
  },
  {
    quote: 'Going in one more round when you don’t think you can. That’s what makes all the difference in your life.',
    source: 'Rocky',
    citation: 'Rocky IV',
    year: '1985'
  },
  {
    quote: 'Every champion was once a contender who refused to give up.',
    source: 'Sylvester Stallone'
  },
  {
    quote: 'If this is something you wanna do, and if this is something you gotta do, then you do it. Fighters fight.',
    source: 'Sylvester Stallone as Rocky Ballboa',
    citation: 'Rocky Ballboa',
    year: '2006'
  },
  {
    quote: 'Never cruel or cowardly. Never give up, never give in.',
    source: 'The Doctor',
  },
  {
    quote: 'We\'re all stories in the end. Just make it a good one, eh?',
    source: 'The Doctor',
  },
  {
    quote: 'Some people live more in twenty years than others do in eighty. It\'s not the time that matters, it\'s the person.',
    source: 'The Doctor',
  },
  {
    quote: 'Logic is the beginning, not the end, of wisdom.',
    source: 'Spock',
    citation: 'Star Trek IV',
    year: '1991'
  },
  {
    quote: 'Our species can only survive if we have obstacles to overcome. You remove those obstacles. Without them to strengthen us,' +
      'we will weaken and die.',
    source: 'Captain Kirk'
  },
  {
    quote: 'Do. Or do not. There is no try.',
    source: 'Yoda',
    citation: 'The Empire Strikes Back',
    year: '1980'
  }
];

//The following function generates a random number and converts it to a random quote.
function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
};

//The following function concatenates the properties of the array into a string.
function printQuote() {
  let randomQuote = getRandomQuote();
  let htmlString = '';
  htmlString += '<p class= "quote">' + randomQuote.quote + '</p>';
  htmlString += '<p class= "source">' + randomQuote.source;

//The following condtional statment checks for the citation and year properties and if present adds them to the string
  if (randomQuote.citation) {
    htmlString += '<span class= "citation">' + randomQuote.citation + '</span>';
  }
  if (randomQuote.year) {
    htmlString += '<span class= "year">' + randomQuote.year + '</span>';
  }
  htmlString += "</p>";

//The following method loads the string to the HTML page
  document.getElementById("quote-box").innerHTML = htmlString;
}
printQuote();

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);



