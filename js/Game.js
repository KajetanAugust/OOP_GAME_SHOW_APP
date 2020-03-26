/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase('right out of the gate'),
            new Phrase('raining cats and dogs'),
            new Phrase('shot in the dark'),
            new Phrase('under the weather'),
            new Phrase('go for broke'),
            new Phrase('quick and dirty'),
            new Phrase('greased lightning'),
            new Phrase('in a pickle'),
            new Phrase('keep your shirt on'),
            new Phrase('back to square one'),
            new Phrase('hands down'),
            new Phrase('wild goose chase'),
            new Phrase('talk the talk'),
            new Phrase('right off the bat'),
            new Phrase('on the ropes'),
            new Phrase('cut the mustard'),
            new Phrase('know the ropes'),
            new Phrase('easy as pie'),
            new Phrase('lovey dovey'),
            new Phrase('elephant in the room'),
            new Phrase('son of a gun'),
            new Phrase('a piece of cake'),
            new Phrase('under your nose'),
            new Phrase('eat my hat')
        ];
        this.activePhrase = null;
    }

    getRandomPhrase(){
        return this.phrases[Math.floor(Math.random() * this.phrases.length )]
    }

    startGame() {
        document.getElementById('overlay').style.display='none';
        const randomPhrase = game.getRandomPhrase();
        this.activePhrase = randomPhrase;
        randomPhrase.addPhraseToDisplay();
    }

    checkForWin() {
        const phraseLetters = document.querySelectorAll('.letter');
        const guessedLetters = document.querySelectorAll('.show');
        if(phraseLetters.length === guessedLetters.length) {
            return true;
        } else {
            return false;
        }

    }

    removeLife() {
        const phraseLetters = document.querySelectorAll('.letter');
        for( let i = 0; i < phraseLetters.length; i++ ) {
            if(letter === phraseLetters[i].textContent) {
                phraseLetters[i].className = 'letter show';
            }
        }
    }

    gameOver() {

    }


    handleInteraction() {

    }
}

