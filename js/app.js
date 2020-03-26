/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game;
const startButton = document.getElementById('btn__reset');

const phraseUl = document.querySelector('#phrase ul');
const logPhrase = (phrase) => {
    console.log(`Phrase - phrase: `, phrase.phrase);
};




startButton.addEventListener('click', () => {
    game = new Game();
    game.startGame();

});

// game.activePhrase.checkLetter('a');
// game.activePhrase.showMatchedLetter('a');