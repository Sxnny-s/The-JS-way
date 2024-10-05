const prompt = require('prompt-sync')();

let first = prompt('What is your first name? ');
let last = prompt('What is your last name? ');

console.log(`Hello, ${first} ${last}!`);
