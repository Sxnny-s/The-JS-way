// Write a program that continues to ask the user for a number until the entered number is less than or equal to 100

let prompt = require('prompt-sync')();

let number = 1000

while(number > 100 || number < 50){
     number = Number(prompt('Enter a number: '))
}