const secretNumber = 12;    // Later we will program this variable to be assigned at random

function checkGuess(num) {

    if(num > secretNumber) {
        console.log('Too high.');
        return false;
    }

    if(num < secretNumber) {
        console.log('Too low.');
        return false;
    }

    if(num === secretNumber) {
        console.log('Correct!');
        return true;
    }
}

// console.log(checkGuess(7));
// console.log(checkGuess(1));
// console.log(checkGuess(-4));
// console.log(checkGuess(17));
// console.log(checkGuess(543757));
// console.log(checkGuess(12));
