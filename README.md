# word-guess-cli

A node based hangman-style game that runs in the console. Created as a homework assignment for Georgia Tech Coding Bootcamp in November 2019.

## Getting Started

### Installing

To install clone this repo
```
git clone git@github.com:jwmann13/word-guess-cli.git
```

### Prerequisites

This game uses three node packages included as dependencies in the `package.json`
To install run `npm install`

If that fails run:
```
npm install inquirer
npm install random-words
npm install chalk
```

## Features

The game is simple to run. Navigate to the `src/` folder and run `node index`

You will be presented with blanks for each letter in the word and prompted for your guess. The game indicates whether your guess is correct, incorrect, or if you have made that guess before with corresponding colors thanks to Chalk.

You are given 10 wrong guesses before the game ends and gives you the correct answer. The game also indicates the remaining letters to complet the word.

## Authors

* __Jeffrey Mann__ - all contributions

## License

This project is licensed under the MIT License

Copyright 2019 Jeffrey Mann

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.