// import the readline module into our file
const readline = require("readline");

// create an interface where we can talk to the user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

const secretNumber = 12;    // Later we will program this variable to be assigned at random

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


askGuess();
