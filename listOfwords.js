// Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, except "stop".

let prompt = require('prompt-sync')();
let wordBank = []

let word = ''

function list(){

    while(word != 'stop'){
        word = prompt('Enter a word ')
        wordBank.push(word)   
    }
    console.log(wordBank)

}

list()