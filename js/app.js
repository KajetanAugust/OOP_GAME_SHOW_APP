/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game;
const startButton = document.getElementById('btn__reset');
const keyboard = document.getElementById('qwerty');
const phraseUl = document.querySelector('#phrase ul');
const resetButton = document.querySelector('#overlay button');
const hearts = document.querySelectorAll('.tries');
let phrase = document.getElementById('phrase');
const ul = phrase.querySelector('ul');
const qwertyLetters = document.getElementsByTagName('button');
const startScreen = document.getElementById('overlay');


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


resetButton.addEventListener('click',(e)=>{
    let oldPhrase = document.querySelectorAll('ul li'); //old phrase is selected
    for (let i=0; i<oldPhrase.length; i+=1) { //loop loops through the old phrase and removes all the letters
        ul.removeChild(oldPhrase[i]);
    }
    // addPhraseToDisplay(); //the new phrase is added to the display
    for( let i = 0; this.missed > 0; i++){ //reseting hearts and missed counter
        this.missed -= 1;
        hearts[missed].innerHTML = '<img src="../images/liveHeart.png" height="35px" width="30px">';
    };
    for(let i = 0; qwertyLetters.length > i; i++){  //reseting keyboard
        qwertyLetters[i].removeAttribute('class');
        qwertyLetters[i].removeAttribute('disabled')
    }
    startScreen.setAttribute('class', 'start') //start screen gets class 'start'
    startScreen.style.display = 'none'; // if the startButton is clicked it changes the display of startScreen to none
    e.preventDefault();
    game = new Game(); //sets new game
    game.startGame(); //starts new game
});