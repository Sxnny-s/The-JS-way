let prompt = require('prompt-sync')();

// Write a program that asks you for a word then shows its length, lowercase, and uppercase values.


function LLUVs(word){
    wordArray = Array.from(word)
    length = wordArray.length
    lower = []
    upper = []
    wordArray.forEach(e => {
        if(e === e.toLowerCase() ){
            lower.push(e)
        }else if(e === e.toUpperCase()){
            upper.push(e)
        }
    });

    return ['length',length,'lower',lower, 'upper',upper]

}

let x = 'QQWWeerr'
console.log(LLUVs(x))