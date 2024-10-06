let prompt = require('prompt-sync')();

// Write a program that asks the user for a number, then shows the multiplication table for this number.When you are done, improve the program so it only accepts numbers between 2 and 9 (use the previous exercise as a blueprint).

let number = 100

while(number < 2 || number > 9 ) {
    number = Number(prompt('Enter a number: '))
}

function timesTable(number){
    for(i=0;i<=12;i++){
        console.log(number * i)
    }
}

timesTable(number)