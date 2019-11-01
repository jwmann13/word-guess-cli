const inquirer = require('inquirer');
const Word = require('./word');

let toBeGuessed = new Word('apple');

// inquirer.prompt([

// ])

console.log(toBeGuessed.word, toBeGuessed.characters);