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

var Ask = {
     userGuess: function(){
         inquirer.prompt([
            {
            type: 'input',
            name: 'input',
            message: 'Please choose a letter.',
                validate: function (value) {
                        var pass = value.match(/^[a-zA-Z]$/);
                        if (pass && cpuChoice.includes(value)) {
                            console.log("match!")
                            } else {
                            return 'Please type a single valid letter:';
                            }
                            }  
            }
        ])

    },
        checkAnswer: function(){
            console.log(Ask.inquirer.message);
            // if (cpuChoice.includes(value)){
            //     console.log("match!")
            // }

        }
}

var Check = {
    checkAnswer: function (){
        console.log(letter.value);
    }
    
}


gameStart();
   