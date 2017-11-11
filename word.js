var inquirer = require('inquirer');
var prompt = require('prompt');
// We need an empty array for our for loop
var blanks = [];

 function Word (word)  {
    this.word = word;
    var words = ["Jaws", "Alien", "Predator"];
    cpuChoice = words[Math.floor(Math.random()*words.length)].toLowerCase();
    console.log(cpuChoice); 
}
module.exports = Word;
    
