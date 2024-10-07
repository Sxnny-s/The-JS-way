// Musketeers
// Write a program that:

// Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
// Shows each array element using a for loop.
// Adds the "D'Artagnan" value to the array.
// Shows each array element using the forEach() method.
// Remove poor Aramis.
// Shows each array element using a for-of loop.

let musketeers = ['']

function answer (){
    musketeers.push('Athos')
    musketeers.push('Porthos')
    musketeers.push('Aramis')

    for (let i = 0; i < musketeers.length; i++) {
        const element = musketeers[i];
        console.log(element)
    }

    musketeers.push("D'Artagnan")

    musketeers.forEach(element => {
        console.log(element)
    })

    musketeers.splice(3,1)

    for (const element of musketeers) {
        console.log(element)
    }

}

answer()