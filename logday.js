// Write a program that accepts a day name from the user, then shows the name of the following day. Incorrect inputs must be taken into account.


let prompt = require('prompt-sync')();

let input = prompt('Enter a day of the week ')

 switch (input) {
    case 'monday':
        console.log('monday')
        break;
    case 'tuesday':
        console.log('tuesday')
        break;
    case 'wednesday':
        console.log('wednesday')
        break;
    case 'thursday':
        console.log('thursday')
        break;
    case 'friday':
        console.log('friday')
        break;
    case 'saturday':
        console.log('saturday')
        break;
    case 'sunday':
        console.log('sunday')
        break;
    default:
        console.log('Enter a day')
 }

