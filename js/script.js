document
  .getElementById("loadQuote")
  .addEventListener("click", printQuote, false);

function printQuote() {
  {
    // Entered "" where no data was available to avoid error: prior to refactoring for if/else statement

    // var quotes is always constant meaning each section continuously is grouped together
    // so the quote will always have the same source, citation, and year.citation
    // Added channel as an additional tag

    var quotes = [
      {
        quote: "Be yourself; everyone else is already taken.",
        source: "Oscar Wilde",
        citation: "",
        year: "",
        channel: ""
      },
      {
        quote:
          "There is literally no one in the whole world I don't hate right now.",
        source: "Toby Ziegler",
        citation: "The West Wing",
        year: "",
        channel: "NBC"
      },
      {
        quote: "Those who dare fail miserably can achieve greatly.",
        source: "JFK",
        citation: "",
        year: "",
        channel: ""
      },
      {
        quote:
          "Put some alcohol in your mouth to block the words from coming out.",
        source: "Ron Swanson",
        citation: "Parks and Rec",
        year: "",
        channel: "NBC"
      },
      {
        quote: "We should all start to live before we get too old.",
        source: "Marilyn Monroe",
        citation: "",
        year: 1951,
        channel: ""
      }
    ];
    var randomNum = Math.floor(Math.random() * 5);

    var color = ["#9EEAB5", "#22557E", "#EF819D", "#EFC381", "#B91C49"];

    // generates a random number, assigns it to a variable, then uses it to return a random object from the quotes array

    // created randomNum2 to make sure the colors are also random and not fixed

    var randomNum2 = Math.floor(Math.random() * color.length);

    // Math.random selects a random number between 0 and 1, which is why we multiply
    // by five in this case. Floor rounds it down to the closest integer.

    var randomQuote = quotes[randomNum].quote;

    var randomSource = quotes[randomNum].source;

    var randomCitation = quotes[randomNum].citation;

    var randomYear = quotes[randomNum].year;

    var randomChannel = quotes[randomNum].channel;

    var randomColor = color[randomNum2];

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
      finalQuote += "<span class='citation'>" + randomCitation + "</span>";
    } else {
      finalQuote += "";
    }

    if (randomYear) {
      finalQuote += "<span class='year'>" + randomYear + "</span>";
    } else {
      finalQuote += "";
    }

    if (randomChannel) {
      finalQuote += "<span class='year'>" + randomChannel + "</span>";
    } else {
      finalQuote += "";
    }

    // added additional if/else to accomodate the new tag
    finalQuote += "</p>";

    setInterval(quotes, 30000);

    console.log(setInterval);

    // += means add to the end of//
    //span in line css script (it stays in the same line)//

    document.getElementById("quote-box").innerHTML = finalQuote;

    // added background id in the index and then grabbed it in getElementById - so comment -- found
    // solution by google change bacground with js: https://www.w3schools.com/jsref/prop_style_background.asp

    document.getElementById("background").style.backgroundColor = randomColor;

    // initially used data.quotes data pulled in the right order because I had it as a variable - I removed
    // data as variable too simplify.
  }
}
