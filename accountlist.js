// Account list
// Let's build upon a previous account object exercise. A bank account is still defined by:

// A name property.
// A balance property, initially set to 0.
// A credit method adding the value passed as an argument to the account balance.
// A describe method returning the account description.
// Write a program that creates three accounts: one belonging to Sean, another to Brad and the third one to Georges. These accounts are stored in an array. Next, the program credits 1000 to each account and shows its description.

const account = {
    name: 'Alex',
    balance: 0,

    credit(c){
        this.balance += c

    },

    describe(){
        return `owner: ${this.name}, balance ${this.balance}`
    }
}

class newAccounts{
    constructor(name,balance){
        this.name = name
        this.balance = balance
    }

    credit(c){
        this.balance += c

    }

    describe(){
        return `owner: ${this.name}, balance ${this.balance}`
    }


}

const Sean = new newAccounts('Sean', 1000)
const Brad = new newAccounts('Brad', 1000)
const Georges = new newAccounts('Georges',1000)


const accountsArray = [Sean,Brad,Georges]

console.log(Sean.describe()); 
console.log(Brad.describe());  
console.log(Georges.describe());  


// console.log(account.describe())

// account.credit(250)
// account.credit(-80)

// console.log(account.describe())

