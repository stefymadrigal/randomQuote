document.getElementById('loadQuote').addEventListener("click", printQuote, false);

function printQuote() {

  {

    // Entered "" where no data was available to avoid error: prior to refactoring for if/else statement

    // var quotes is always constant meaning each section continuously is grouped together
    // so the quote will always have the same source, citation, and year.citation

    var quotes = [{
        quote: "Be yourself; everyone else is already taken.",
        source: "Oscar Wilde",
        citation: "",
        year: "",
      },
      {
        quote: "There is literally no one in the whole world I don't hate right now.",
        source: "Toby Ziegler",
        citation: "The West Wing",
        year: "",

      },
      {
        quote: "Those who dare fail miserably can achieve greatly.",
        source: "JFK",
        citation: "",
        year: "",

      },
      {
        quote: "Put some alcohol in your mouth to block the words from coming out.",
        source: "Ron Swanson",
        citation: "Parks and Rec",
        year: "",

      },
      {
        quote: "We should all start to live before we get too old.",
        source: "Marilyn Monroe",
        citation: "",
        year: 1951,
      }
    ];

    // Math.floor is like a calculator to round down.

    // Math.random selects a random number between 0 and 1, which is why we multiply
    // by five in this case. Floor rounds it down to the closest integer.

    var randomNum = Math.floor(Math.random() * 5);

    console.log(randomNum)

    var randomQuote = quotes[randomNum].quote

    console.log(randomQuote)

    var randomSource = quotes[randomNum].source

    console.log(randomSource)

    var randomCitation = quotes[randomNum].citation

    console.log(randomCitation)

    var randomYear = quotes[randomNum].year

    console.log(randomYear)

    /* write console.log after each so that when testing it I can see and 
    the quote, citation, year, and source in the console */

    // finalQuote is a new variable because at the end we just want to call one 
    // variable and not multiple. The variable at the above is constant but 
    // the bottom variable is dynamic to the random variable.

    finalQuote = "<p class='quote'>" + randomQuote + "</p>";
    finalQuote += "<p class='source'>" + randomSource;

    // if else logic : randomCitation has value (or true) print +- citation 
    // else fill in with empty space


    if (randomCitation) {
      finalQuote += "<span class='citation'>" + randomCitation + "</span>"
    } else {
      finalQuote += '';
    }

    if (randomYear) {
      finalQuote += "<span class='year'>" + randomYear + "</span>";
    } else {
      finalQuote += '';
    }

    finalQuote += "</p>"
    // += means add to the end of//
    //span in line css script (it stays in the same line)//


    document.getElementById("quote-box").innerHTML = finalQuote;

    console.log(finalQuote)

    // initially used data.quotes data pulled in the right order because I had it as a variable - I removed
    // data as variable too simplify.
  };

}