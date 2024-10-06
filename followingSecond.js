// Write a program that asks for a time under the form of three information (hours, minutes, seconds). The program calculates and shows the time one second after. Incorrect inputs must be taken into account

let prompt = require('prompt-sync')();

let hour = prompt('Enter hours: ')
let minute = prompt('Enter minute: ')
let second = prompt('Enter second: ')

function addSecond(hour,minute,second){
    hour = Number(hour)
    minute = Number(minute)
    second = Number(second)

    if(second < 59){
        second++
    }else if (second == 59){
        second = 0
        if(minute < 59){
            minute++
        }else if (minute == 59){
            minute = 0
        }if(hour < 23){
            hour++
        }else if (hour == 23){
            hour = 0
            minute = 0
            second = 0
        }
    }
    console.log(`${hour}h${minute}m${second}s`)
}

addSecond(hour,minute,second)
