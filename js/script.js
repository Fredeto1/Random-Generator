/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/

let quotes = [
  {quote: 'The world ain\'t all sunshine and rainbows. It\'s a very mean and nasty place, and I don\'t care how tough you are,' +
          'it will beat you to your knees and keep you there permanently if you let it. You, me, or nobody is gonna hit as hard' +
          'as life. But it ain\'t about how hard you hit. It\s about how hard you can get hit and keep moving forward; how much' +
          'you can take and keep moving forward. That\'s how winning is done!', 
    source: 'Sylvester Stallone as Rocky Ballboa',
    citation: 'Rocky Ballboa',
    year: '2006',
  },
  {quote: 'Going in one more round when you don’t think you can. That’s what makes all the difference in your life.',
    source: 'Sylvester Stallone as Rocky Ballboa',
    citation: 'Rocky IV',
    year: '1985'
  },
 {quote: 'Every champion was once a contender who refused to give up.',
    source: 'Sylvester Stallone as Rocky Ballboa',
    citation: 'Rocky Ballboa',
    year: '2006'
  },
{quote: 'If this is something you wanna do, and if this is something you gotta do, then you do it. Fighters fight.',
    source: 'Sylvester Stallone as Rocky Ballboa',
    citation: 'Rocky Ballboa',
    year: '2006'
  },
{quote: 'Never cruel or cowardly. Never give up, never give in.',
    source: 'The Doctor',
    citation: 'The Day of the Doctor',
    year: '2013'
  },
  {quote: 'We\'re all stories in the end. Just make it a good one, eh?',
   source: 'The Doctor',
   citation: 'Doctor Who, Season 5-The Big Bang',
   year: '2010'
  },
  {quote: 'Some people live more in twenty years than others do in eighty. It\'s not the time that matters, it\'s the person.',
   source: 'The Doctor',
   citation: 'Doctor Who, Season 3-The Lazarus Project',
   year: '2007'
  },
  {quote: 'Logic is the beginning, not the end, of wisdom.',
   source: 'Spock',
   citation: 'Star Trek IV',
   year: '1991'
  },
  {quote: 'Our species can only survive if we have obstacles to overcome. You remove those obstacles. Without them to strengthen us,' +
          'we will weaken and die.',
   source: 'Captain Kirk',
   citation: 'Star Trek- Metamorphosis',
   year: '1967'
  },
  {quote: 'Do. Or do not. There is no try.',
   source: 'Yoda',
   citation: 'The Empire Strikes Back',
   year: '1980'
  }
];

function getRandomQuote () {
  let randomNumber = Math.floor(Math.random()*quotes.length);
  return quotes [randomNumber];
};


console.log(getRandomQuote);

/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

function printQuote () {
    let randomQuote = getRandomQuote ();
    let htmlString = '';
    htmlString += '<p class= "quote">' + randomQuote.quote + '</p>';
    htmlString += '<p class= "source">' + randomQuote.source;
  

    if (randomQuote.citation) {
      htmlString += '<span class= "citation">' + randomQuote.citation + '</span>';
    }
    if (randomQuote.year) {
      htmlString += '<span class= "year">' + randomQuote.year + '</span>';
    }
    htmlString += "</p>";
    document.getElementById ("quote-box").innerHTML = htmlString;
}

printQuote ();

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);



// Remember to delete the comments that came with this file, and replace them with your own code comments.

