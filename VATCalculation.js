const prompt = require('prompt-sync')();

let price = prompt('Enter a pre VAT amount ')
let VATadded = Number(price) * 1.206
console.log(VATadded)