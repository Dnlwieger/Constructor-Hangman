var inquirer = require('inquirer');
var prompt = require('prompt');
var word = require('./word.js');
//create an empty array for the underscores
var blanks = [];

function Letter (letter) {
    this.letter = letter;
    for (i=0; i < cpuChoice.length; i++ ) {
            blanks.push("_");
            //create a new variable that holds the word, using "join" to replace the commas in the array, with spaces
            wordImage = blanks.join(" ");   
        }
        console.log(wordImage);
}

module.exports = Letter;

