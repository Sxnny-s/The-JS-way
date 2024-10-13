let prompt = require('prompt-sync')();

// Write a program that asks you for a word then shows its length, lowercase, and uppercase values.


function LLUVs(word){
    wordArray = Array.from(word)
    length = wordArray.length
    lower = []
    upper = []
    vowels = []
    backwards = wordArray.reverse().join('')
    palindrome = undefined;

    if(word === backwards){
        palindrome = true
    }else{
        palindrome = false
    }



    wordArray.forEach(e => {
        if(e === e.toLowerCase() ){
            lower.push(e)
        }else if(e === e.toUpperCase()){
            upper.push(e)
        }if(/[aeiou]/i.test(e)){
            vowels.push(e)
        }
    });

    return ['length',length,'lower',lower, 'upper',upper,'vowels',vowels,'backwards',backwards,'palindrome',palindrome]

}

let x = 'dad'
console.log(LLUVs(x))