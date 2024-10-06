// Write a program that plays "neither yes, nor no" with the user. Specifically, the program asks the user to enter text until either "yes" or "no" is typed, which ends the game.
let prompt = require('prompt-sync')();

let text = '';

while (text != 'yes' && text != 'no') {
    text = prompt('Enter Text: ')
}

