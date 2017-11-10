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
    
    // module.exports = Word;

//  var cpuChoice = wordToGuess[Math.floor(Math.random()*wordToGuess.length)].toLowerCase();
//  // Check that it's working
//  console.log(cpuChoice);
 

//   
    

    // function Word(word){
    //     console.log("WORD running!");
    //     this.getWord();
    //     this.word = word;
    //         this.getWord = function(obj){
    //             //Have the computer randomly select one of these words and put it into a variable
    //             var cpuChoice = wordToGuess[Math.floor(Math.random()*wordToGuess.length)].toLowerCase();
    //             console.log(cpuChoice);
    //             //Print this variable to the console, but replace each character with an "_"
    //                 for (i=0; i < cpuChoice.length; i++ ) {
    //                     blanks.push("_");
    //                     //create a new variable that holds the word, using "join" to replace the commas in the array, with spaces
    //                     wordImage = blanks.join(" ");
    //                     console.log(wordImage);   
    //                 }
                    
    //         }
    
            
    // }
    // Word();
