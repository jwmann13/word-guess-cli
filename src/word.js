let Letter = require('./letter');

class Word {
    constructor(_word) {
        this.characters = this.parseWord(_word);
    }

    parseWord(word) {
        let letterArray = [];
        for (const letter of word) {
            letterArray.push(new Letter(letter))
        }

        return letterArray;
    }

    displayWord() {
        let toBeDisplayed = '';
        this.characters.forEach((letter) => {
            if (letter.guessed) {
                toBeDisplayed += letter.letter + ' ';
            } else {
                toBeDisplayed += '_ ';
            }
        })
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