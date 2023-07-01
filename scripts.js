// Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: `"Sometimes, we have to look beyond what we want and do what's best."`,
    person: `Piccolo`
}, {
    quote: `"Push through the pain, giving up hurts more."`,
    person: `Vegeta`
}, {
    quote: `"I do not fear this new challenge. Rather like a true warrior, I will rise to meet it."`,
    person: `Vegeta`
}, {
    quote: `"Let's give it everything we've got!"`,
    person: `Goku`
},
{
    quote: `"It is no sin to fight for what is right."`,
    person: `Android 16`
}, {
    quote: `"One thing I learned from my father, is to never give up, even when the odds are stacked against you."`,
    person: `Gohan`
}, {
    quote: `"No! I can't just be here and do nothing, I'm going down there! Got it!? I'm done waiting."`,
    person: `Gohan`
}, {
    quote: `"I doubt I need an introduction, but just in case, I am the mighty Frieza and yes, all the horrible stories you've heard are true."`,
    person: `Frieza`
}, {
    quote: `"Before you begin your pathetic struggle to survive, I should warn you. Your chance of winning is nonexistent."`,
    person: `Frieza`
}, {
    quote: `"Enemies can grow stronger too. I can never relent in my training."`,
    person: `Future Trunks`
}, {
    quote: `"Your resistance is the cause of your pain."`,
    person: `Cell`
},];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})