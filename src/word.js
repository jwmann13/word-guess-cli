const Letter = require('./letter');

class Word {
    constructor(_word) {
        this.characters = this.parseWord(_word);
        this.guessed = this.wholeWordGuessed();
    }

    parseWord(word) {
        let letterArray = [];
        for (const letter of word) {
            letterArray.push(new Letter(letter))
        }

        return letterArray;
    }

    wholeWordGuessed() {
        return this.characters.every(letter => letter.guessed);
    }

    displayWord() {
        let toBeDisplayed = '';
        this.characters.forEach((letter) => {
            if (letter.guessed) {
                toBeDisplayed += letter.letter + ' ';
            } else {
                toBeDisplayed += '_ ';
            }
        });
        this.guessed = this.wholeWordGuessed();
        return toBeDisplayed;
    }

    checkGuess(guess) {
        this.characters.forEach(letter => {
            letter.checkGuess(guess);
        })
        return this.displayWord();
    }
}

module.exports = Word;