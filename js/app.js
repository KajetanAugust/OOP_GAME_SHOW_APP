/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const startButton = document.getElementById('btn__reset');
const keyboard = document.getElementById('qwerty');
const phraseUl = document.querySelector('#phrase ul');
const resetButton = document.querySelector('#overlay button');
let phrase = document.getElementById('phrase');
const ul = phrase.querySelector('ul');
const qwertyLetters = document.getElementsByTagName('button');
const startScreen = document.getElementById('overlay');

////////////////////////////////
// startButton EVENT LISTENER //
////////////////////////////////

startButton.addEventListener('click', () => {
    game = new Game(); //setting game to new Game
    game.startGame(); //calling startGame on game

});

////////////////////////////////////
// screen keyboard EVENT LISTENER //
////////////////////////////////////

keyboard.addEventListener('click', (e) => { //event listener listens for clicks
    let click = e.target; //getting event target
    if (click.tagName === 'BUTTON') { //if statement checks if click was on the button
        game.handleInteraction(click) //passing target to handle interactions
    }
});

//////////////////////////////////////
// physical keyboard EVENT LISTENER //
//////////////////////////////////////

document.addEventListener('keydown', (event) => { //event listener listens key presses
    let click = event.key; //getting event key value
    const qwertyLetters = document.querySelectorAll('#qwerty button'); //selecting all the onscreen buttons
    for(let i = 0; i< qwertyLetters.length; i++) { //looping through the buttons
        if(click === qwertyLetters[i].textContent) { //checking if pressed key has the same value as one of onscreen buttons
            game.handleInteraction(qwertyLetters[i]); //passing the onscreen button to handleInteraction
        }
    }

});

////////////////////////////////
// resetButton EVENT LISTENER //
////////////////////////////////

resetButton.addEventListener('click', (e) => {
    let oldPhrase = document.querySelectorAll('ul li'); //old phrase is selected

    for (let i = 0; i < oldPhrase.length; i += 1) { //looping through the old phrase
        ul.removeChild(oldPhrase[i]); //removing all the letters
    }
    const hearts = document.querySelectorAll('.tries'); //getting the hearts
    for (let i = 0; i < hearts.length; i++) { //looping through the hearts
        hearts[i].innerHTML = `<img src="images/liveHeart.png" height="35px" width="30px">`; //resetting hearts
        game.missed -= 1;//resetting missed counter
    }

    for (let i = 0; qwertyLetters.length > i; i++) {  //reseting keyboard
        qwertyLetters[i].removeAttribute('class'); //removing class
        qwertyLetters[i].removeAttribute('disabled') //removing disabled attribute
    }
    startScreen.setAttribute('class', 'start'); //start screen gets class 'start'
    startScreen.style.display = 'none'; // if the startButton is clicked it changes the display of startScreen to none
    e.preventDefault();
    game = new Game(); //sets new game
    game.startGame(); //starts new game
});