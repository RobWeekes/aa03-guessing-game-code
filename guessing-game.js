// import the readline module into our file
const readline = require("readline");

// create an interface where we can talk to the user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

// random number generator, from num1 to num2
let randomInRange = function(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    let range = num2 - num1;
    console.log(num1);
    console.log(num2);
    console.log(range);
    let randNum = Math.random();
    console.log(randNum);   // decimal between 0 and 1
    let random = num1 + Math.round(range * randNum);
    console.log(typeof random);
    let secretNumber = random;
    console.log(secretNumber); // integer in user specified range
    return secretNumber;
}
// randomInRange(28, 68); // generates #'s from x to y incl. (for testing num generator)

// let secretNumber = randomInRange(0, 100);  // testing hard #'s
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
        // if (typeof minNum == "number") {
        if (minNum.length > 0) {
        }

        rl.question('Enter a max number: ', (maxNum) => {
            // if (typeof maxNum == "number") {
            if (maxNum.length > 0) {
                rl.close(); //closes interface
                console.log(`I'm thinking of a number between ${minNum} and ${maxNum}...`);
                console.log(minNum);
                console.log(maxNum);
                randomInRange(minNum, maxNum);
            }
        });
    });
}

askRange();
