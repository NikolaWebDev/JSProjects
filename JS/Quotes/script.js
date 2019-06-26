const quotes = [
    {
        name: 'Stephen King',
        quote: 'Get busy living or get busy dying.'
    },
    {
        name: 'jogn F. Kennedy',
        quote: 'Those who dare to fail miserably can ahieve greatly.'
    },
    {
        name: 'Abraham Lincoln',
        quote: `I'm a success today because I had a friend who belived 
        in me and I didn't have the heart to let him down,`
    },
    {
        name: 'Leonardo Da Vinci',
        quote: `It had long since come to my attention that people of
        accomplishment rarely sat back and let things happen to them.
        They went out and happened to things.`
    },
    {
        name: 'Leo Tolstoy',
        quote: 'If you want to be happy, be.'
    }
]

// query btn, quthor, quote, event, rand, quote,author.inner, 

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', changeQuotes);

function changeQuotes(){
    let random = Math.floor(Math.random()*quotes.length);
    quote.innerHTML = quotes[random].quote;
    quoteAuthor.innerHTML = quotes[random].name;
}