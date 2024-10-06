// Write a program that accepts a month number (between 1 and 12), then shows the number of days of that month. Leap years are excluded. Incorrect inputs must be taken into account

let prompt = require('prompt-sync')();

let month = Number(prompt('Enter a number 1-12 ')) 

switch (month){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log(31)
        break
    case 2:
        console.log(28)
        break
    case 4:
    case 6:
    case 9:
    case 11:
        console.log(30)
        break
    default:
        console.log('Invalid entry')

}