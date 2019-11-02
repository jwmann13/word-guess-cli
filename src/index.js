const inquirer = require('inquirer');
const Word = require('./word');
const randomWord = require('random-words');
const chalk = require('chalk');
let bold = chalk.bold;

let toBeGuessed = new Word(randomWord());
// let toBeGuessed = new Word('apple');


function promptGuess(_word) {
    if (_word instanceof Word) {
        if (!_word.gameDone) {
            inquirer.prompt([{
                name: 'guess',
                message: 'Your guess?'
            }]).then(answer => {
                console.log(`${bold(_word.checkGuess(answer.guess))}\nYou have ${_word.lettersLeft} correct guesses left to win\nYou have ${_word.score} wrong guesses left to lose`);
                promptGuess(_word);
            })
        } else console.log(`${bold(_word.displayWord().replace(/\s/g, ''))} is the correct answer`);
    }
}

console.log(`${chalk.bold(toBeGuessed.displayWord())}\nYou have ${toBeGuessed.lettersLeft} correct guesses left to win\nYou have ${toBeGuessed.score} wrong guesses left to lose`)
promptGuess(toBeGuessed);