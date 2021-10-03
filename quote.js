const quotes = [
    {
        quotes: "That which does not kill us makes us stronger.",
        author: "Friedrich Nietzche",
    },
    {
        quotes: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
    },
    {
        quotes: "Life is what happens when you're busy making other plans.",
        author: "John Lennon",
    },
    {
        quotes: "The world is a book and those who do not travel read only one page.",
        author: "Saint Augustine",
    },
    {
        quotes: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller",
    },
    {
        quotes: "To Travel is to Live",
        author: "Hans Christian Andersen",
    },
    {
        quotes: "Only a life lived for others is a life worthwhile.",
        author: "Albert Einstein",
    },
    {
        quotes: "You only live once, but if you do it right, once is enough.",
        author: "Mae West",
    },
    {
        quotes: "Never go on trips with anyone you do not love.",
        author: "Ernest Hemmingway",
    },
    {
        quotes: "We wander for distraction, but we travel for fulfilment.",
        author: "Hilaire Belloc", 
    },
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuotes.quotes;
author.innerText = todaysQuotes.author;