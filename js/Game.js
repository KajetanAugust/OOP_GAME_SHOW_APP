/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


////////////////
// Game CLASS //
////////////////

class Game { //Game class
    constructor() { //constructor for the game class
        this.missed = 0; //missed variable initialized to 0
        this.phrases = [ //array with film phrases
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
        this.activePhrase = null; //activePhrase initialized to null
    }

    ////////////////////////////
    // getRandomPhrase METHOD //
    ////////////////////////////

    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)] //drawing random phrase from array using Math.random
    }

    //////////////////////
    // startGame METHOD //
    //////////////////////

    startGame() {
        document.getElementById('overlay').style.display = 'none'; //hiding overlay
        const randomPhrase = game.getRandomPhrase(); //getting random phrase
        this.activePhrase = randomPhrase; //setting activePhrase to random phrase
        randomPhrase.addPhraseToDisplay(); //calling addPhraseToDisplay on randomPhrase
    }

    ////////////////////////
    // checkForWin METHOD //
    ////////////////////////

    checkForWin() {
        const phraseLetters = document.querySelectorAll('.letter'); //getting all the letters from the phrase
        const guessedLetters = document.querySelectorAll('.show'); //getting all the shown letters from the phrase
        if (phraseLetters.length === guessedLetters.length) { // checking if the length of both is equal
            return true; //if it is, returning true
        } else {
            return false; //if no returning false
        }

    }

    ///////////////////////
    // removeLife METHOD //
    ///////////////////////

    removeLife() {
        const hearts = document.querySelectorAll('.tries'); //getting hearts
        this.missed++; //one point is added to missed variable
        hearts[this.missed - 1].innerHTML = `<img src="images/lostHeart.png" height="35px" width="30px">`; //one heart is lost
        if (this.missed === 5) { //if missed is equal 5
            this.gameOver(false); //passing false to the gameOver method
        }
    }

    /////////////////////
    // gameOver METHOD //
    /////////////////////

    gameOver(gameWon) {
        const startButton = document.querySelector('#overlay button'); //getting the reset button
        const startScreen = document.getElementById('overlay'); //getting the overlay
        const header = document.querySelector('h2'); //getting the header

        if (gameWon === false) {   // if the all hearts are lost the you loose screen is displayed
            startScreen.setAttribute('class', 'lose'); //setting class to lose
            header.textContent = 'Sorry, try again!'; //changing text to Sorry, try again
            startButton.textContent = 'Try Again!'; //changing the button content to Try Again
            startScreen.style.display = ''; //showing the screen
        }
        if (gameWon === true) { // if all letters in a phrase are shown 'You Won!' screen is displayed
            startScreen.setAttribute('class', 'win'); //setting class to win
            header.textContent = 'Congratulations, you won!'; //changing text to You Won!
            startButton.textContent = 'Play Again!'; //changing the button content to Play Again
            startScreen.style.display = ''; //showing the screen
        }
    }

    //////////////////////////////
    // handleInteraction METHOD //
    //////////////////////////////

    handleInteraction(button) {
        if (button.disabled === false) { //checking if button is disabled
            button.disabled = true; //setting button to disabled
            const letterCheck = this.activePhrase.checkLetter(button.textContent); //passing clicked button to checkLetter
            if (!letterCheck) { //checking if letterCheck returns false
                button.className = 'wrong'; //setting button class to wrong
                this.removeLife(); //removing life
            }
            if (letterCheck) { //checking if letterCheck returns true
                button.className = 'chosen'; //setting button class to chosen
                this.activePhrase.showMatchedLetter(button.textContent); //calling showMatchedLetter on activePhrase and passing it the button
                const win = this.checkForWin(); //getting checkForWin
                if (win) { //if the game is won passing true to gameOver
                    this.gameOver(true);
                }
            }
        }
    }
}

