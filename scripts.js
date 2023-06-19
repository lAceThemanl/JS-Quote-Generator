// Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: `"Only execution matters."`,
    person: `Unknown`
}, {
    quote: `"You teach people how to treat you by what you allow, what you stop, and what you reinforce."`,
    person: `Tom Bilyeu`
}, {
    quote: `"To care for those who once cared for us is one of the highest honors."`,
    person: `Tia Walker`
}, {
    quote: `"I don't speak to be understood, I speak to understand."`,
    person: `Unknown`
},
{
    quote: `"Your actions, not your words, reveal what's important to you."`,
    person: `Unknown`
}, {
    quote: `"The best way to predict the future, is to create it."`,
    person: `Abraham Lincoln`
}, {
    quote: `"Think twice before you speak, because your words and influence will plant the seed of either success or failure in the mind of another."`,
    person: `Napoleon Hill`
}, {
    quote: `"Identity and values drive behavior."`,
    person: `Tom Bilyeu`
}, {
    quote: `"Don't try to change human behavior, try to leverage behavior already there."`,
    person: `Tom Bilyeu`
}, {
    quote: `"Quit labeling your inner states as good or bad or positive or negative, and start thinking of them as useful or not useful for any given situation."`,
    person: `Unknown`
}, {
    quote: `"Be awesome!"`,
    person: `Me`
},];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})