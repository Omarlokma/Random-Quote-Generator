const Quotes = [
    { quote: "The best way to predict the future is to invent it.", author: "Alan Kay" },
    { quote: "So many books, so little time.", author: "Frank Zappa" },
    { quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein" },
    { quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { quote: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" },
    { quote: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { quote: "A friend is someone who knows all about you and still loves you.", author: "Elbert Hubbard" },
    { quote: "Stay hungry, stay foolish.", author: "Steve Jobs" },
    { quote: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" }
];

let availableQuotes = [...Quotes];
const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const btn = document.getElementById("new-quote");

btn.addEventListener("click", () => {
    if (availableQuotes.length === 0) {
        console.log("Refilling the deck...");
        availableQuotes = [...Quotes];
    }
    const randomIndex = Math.floor(Math.random() * availableQuotes.length);

    const selectedQuote = availableQuotes.splice(randomIndex, 1)[0];

    quoteElement.innerText = `"${selectedQuote.quote}"`;
    authorElement.innerText = `- ${selectedQuote.author}`;
});