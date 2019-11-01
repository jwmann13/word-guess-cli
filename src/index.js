const inquirer = require('inquirer');
const Word = require('./word');
const randomWord = require('random-words')

let toBeGuessed = new Word(randomWord());

function promptGuess(_word) {
    if (_word instanceof Word) {
        if (!_word.guessed) {
            inquirer.prompt([{
                name: 'guess',
                message: 'Your guess?'
            }]).then(answer => {
                console.log(_word.checkGuess(answer.guess), _word.guessed);
                promptGuess(_word);
            })
        } else console.log(`${_word.displayWord().replace(/\s/g, '')} is the correct answer`);
    }
}

console.log(toBeGuessed.displayWord())
promptGuess(toBeGuessed);