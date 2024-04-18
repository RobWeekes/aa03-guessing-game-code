// import the readline module into our file
const readline = require("readline");

// create an interface where we can talk to the user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

// random number generator, from num1 to num2
let randomInRange = function(num1, num2) {
    let range = num2 - num1;
    // console.log(range);
    let random = num1 + Math.round(range * Math.random());
    // console.log(random);
    return random;
}
// randomInRange(15, 20);   // generates #'s from 15-20 incl.


let secretNumber = randomInRange(0, 100);
// console.log(secretNumber);
// const secretNumber = 12;   // testing hard #

function checkGuess(num) {

    if(num > Number(secretNumber)) {
        console.log('Too high.');
        return false;
    }

    if(num < Number(secretNumber)) {
        console.log('Too low.');
        return false;
    }

    if(num == Number(secretNumber)) {
        console.log('You win!');
        return true;
    }
}

function askGuess() {
    rl.question('Enter a guess ', (answer) => {
        checkGuess(answer); //invoke checkGuess function
        if (answer != Number(secretNumber)) {
            askGuess();
        }
        if (answer == Number(secretNumber)) {
            rl.close(); //closes interface
        }
      });
}

// start the game
// askGuess();

function askRange() {
    //asking user for min
    rl.question('Enter a min number: ', (minNum) => {
        if (typeof minNum == "number") {
            console.log(minNum);
        }

        rl.question('Enter a max number: ', (maxNum) => {
            if (typeof maxNum == "number") {
                console.log(maxNum);
            }
        });
    });
}

askRange()
