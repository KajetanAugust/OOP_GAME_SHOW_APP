/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */


const phraseLi = document.querySelectorAll('ul li'); //all phrase letters are selected


class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {
        const phraseToProcess = this.phrase.split('');// getRandomPhraseAsArray function is called and assigned to the const
        for (let i = 0; i < phraseToProcess.length; i++) { //loops through the letters and creates li elements
            const li = document.createElement('li');
            li.textContent = phraseToProcess[i];
            if (phraseToProcess[i] !== ' ') {
                li.className = 'hide letter'; //letters get the class of letter
            } else {
                li.className = 'hide space'; // spaces get the class of space
            }
            phraseUl.appendChild(li); //letters in li are appended to ul
        }
    }

    checkLetter(letter) {
        const chosenPhrase = this.phrase;
        if (chosenPhrase.includes(letter)) {
            return true
        } else {
            return false
        }
    }


    showMatchedLetter(letter) {
        const phraseLetters = document.querySelectorAll('.letter');
        for (let i = 0; i < phraseLetters.length; i++) {
            if (letter === phraseLetters[i].textContent) {
                phraseLetters[i].className = 'letter show';
            }
        }
    }

}