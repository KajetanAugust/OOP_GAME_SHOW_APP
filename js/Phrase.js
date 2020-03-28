/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

//////////////////
// Phrase CLASS //
//////////////////

class Phrase { //Phrase class
    constructor(phrase) { //constructor
        this.phrase = phrase.toLowerCase();
    }

    ///////////////////////////////
    // addPhraseToDisplay METHOD //
    ///////////////////////////////

    addPhraseToDisplay() {
        const phraseToProcess = this.phrase.split(''); //phrase is assigned to the phraseToProcess
        for (let i = 0; i < phraseToProcess.length; i++) { //loops through the letters
            const li = document.createElement('li'); //creating li elements
            li.textContent = phraseToProcess[i]; //adding letters to the li elements
            if (phraseToProcess[i] !== ' ') { //checking if character is a letter or space
                li.className = 'hide letter'; //letters get the class of letter
            } else {
                li.className = 'hide space'; //spaces get the class of space
            }
            phraseUl.appendChild(li); //letters in li are appended to ul
        }
    }

    ////////////////////////
    // checkLetter METHOD //
    ////////////////////////

    checkLetter(letter) {
        const chosenPhrase = this.phrase; //choosing phrase
        if (chosenPhrase.includes(letter)) { //if phrase includes letter
            return true //returning true
        } else {
            return false //returning false
        }
    }

    //////////////////////////////
    // showMatchedLetter METHOD //
    //////////////////////////////

    showMatchedLetter(letter) {
        const phraseLetters = document.querySelectorAll('.letter'); //getting all the letters
        for (let i = 0; i < phraseLetters.length; i++) { //looping through the letters
            if (letter === phraseLetters[i].textContent) { //if letter is equal to the letter in li
                phraseLetters[i].className = 'letter show'; //the letter is shown
            }
        }
    }

}