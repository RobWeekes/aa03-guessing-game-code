// import the readline module into our file
const readline = require("readline");

// create an interface where we can talk to the user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

let secretNumber;
let numAttempts = 5;

// random number generator, from num1 to num2
let randomInRange = function(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    let range = num2 - num1;
    let randNum = Math.random();
    //console.log(randNum);   // decimal between 0 and 1
    let random = num1 + Math.round(range * randNum);
    //console.log(typeof random);
    secretNumber = random;
    //console.log(secretNumber); // integer in user specified range
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
    numAttempts--;
    rl.question('Enter a guess: ', (answer) => {
        //console.log('Enter a guess: ');
        checkGuess(answer); //invoke checkGuess function
        if (answer != Number(secretNumber)) {
            setTimeout(askGuess, 10);
            //askGuess();
        }
        if (numAttempts === 0) {
            console.log('Sorry! You lose!');
            rl.close();
        } else
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
        //minNum = Number(minNum);
        // if (typeof minNum == "number") {
        //edgecase, account for users inputting non-numbers?
        if (minNum.length > 0) {
        }

        rl.question('Enter a max number: ', (maxNum) => {
            //maxNum = Number(maxNum);
            // if (typeof maxNum == "number") {
            if (maxNum.length > 0) {
                //rl.close(); //closes interface
                console.log(`I'm thinking of a number between ${minNum} and ${maxNum}...`);
                randomInRange(minNum, maxNum);
                askGuess();
            }
        });
    });
}

askRange();
