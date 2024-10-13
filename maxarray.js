// Array maximum
// Write a program that creates the following array, then calculates and shows the array's maximum value.

const values = [3, 11, 7, 2, 9, 10, 200, 1222];
let max;

const maximum = values.reduce((a,c) => {
    if(c > a){
        max = c
    }else{
        max = a
    }
    return max
})

console.log(maximum)


const max2 = values.reduce((a,c) =>{
    return c > a ? c : a
})

console.log(max2)