const prompt = require('prompt-sync')();

let celsius = prompt('Enter a temperature in celsius ')
let fahrenheit = celsius * (9/5) + 32
console.log(fahrenheit)