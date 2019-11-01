const inquirer = require('inquirer');
const Word = require('./word');

let toBeGuessed = new Word('apple');
let counter = 0;

function promptGuess() {
    if (counter < toBeGuessed.characters.length) {
        inquirer.prompt([{
            name: 'guess',
            message: 'Your guess?'
        }]).then(answer => {            
            console.log(toBeGuessed.checkGuess(answer.guess));
            counter++;
            promptGuess();
        })
    } else console.log(toBeGuessed.displayWord());
    
}

promptGuess();
// console.log(toBeGuessed, toBeGuessed.checkGuess('p'));