var inquirer = require('inquirer');
var prompt = require('prompt');
var word = require('./word.js');
var letter = require('./letter.js');



console.log("Welcome to Hangman Game!");
console.log("Enter letters to guess the Hangman solution.")


var gameStart = function(){
    var guesses = 6;
    
    word();
    letter();
    Ask.userGuess();
}
// create a prompt for continuing or exiting the game, user choice
// include counters for number of guesses (guesses--) and print it to console, update each time the user guesses a letter
//when guesses reaches 0, end the game
//  using indexOf, and includes within if/else statements, replace the underscores with the appropriate letters
var Ask = {
     userGuess: function(){
         inquirer.prompt([
            {
            type: 'input',
            name: 'input',
            message: 'Please choose a letter.',
                validate: function (value) {
                        var pass = value.match(/^[a-zA-Z]$/);
                        if (cpuChoice.includes(value)) {
                            console.log("match!")
                            } else if (pass){
                                return true;
                            } else {
                            return 'Please type a single valid letter:';
                            }
                            }  
            }
        ])

    }
}

var Check = {
    checkAnswer: function (){
        console.log(letter.value);
    }
    
}


gameStart();
   