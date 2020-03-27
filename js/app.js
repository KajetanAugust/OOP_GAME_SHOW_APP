/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game;
const startButton = document.getElementById('btn__reset');
const keyboard = document.getElementById('qwerty');
const phraseUl = document.querySelector('#phrase ul');
const logPhrase = (phrase) => {
    console.log(`Phrase - phrase: `, phrase.phrase);
};


startButton.addEventListener('click', () => {
    game = new Game();
    game.startGame();

});

keyboard.addEventListener('click', (e) => { //event listener listens for clicks
    let click = e.target;
    if (click.tagName === 'BUTTON') { //if statement checks if click was on the button
        game.handleInteraction(click)
    }

});
// game.activePhrase.checkLetter('a');
// game.activePhrase.showMatchedLetter('a');