let Letter = require('./letter');

class Word {
    constructor(_word) {
        this.word = _word;
        this.characters = [];

    }

    parseWord() {
        this.characters.push(new Letter(this.word.split('')))
        
    }
}

module.exports = Word;