const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const btnReset = document.querySelector('.btn__reset');
const missed = 0;
const phrases = ['JAVASCRIPT','FUNCTION','OBJECT','ARRAY','LOOP'];
const buttons = Array.from(document.querySelectorAll('.keyrow button'))
const b = buttons.map(button => button.textContent.toUpperCase())


// return a random phrase from an array
const getRandomPhraseAsArray = arr => {
    let randomNumber = Math.floor(Math.random() * phrases.length);
    for (let value of arr) return arr[randomNumber];
};
const randomLetter = getRandomPhraseAsArray(phrases).split('');

// adds the letters of a string to display
const displayPhrases = arr => {
    const ulPhrase = document.querySelector('#phrase ul'); 
     for (let value of randomLetter) {
        const listPhrase = document.createElement('li');
        listPhrase.textContent = value;
        listPhrase.className = 'letter';
        ulPhrase.appendChild(listPhrase);
    } 
    return ulPhrase.children
}
const displayPhrase = displayPhrases(randomLetter);
const lists = Array.from(displayPhrase)
let listPhrase = lists.map(list => list.textContent)


// check if a letter is in the Phrase
const checkLetter = button => {
    const li = document.querySelectorAll('.letter');
    for (let value of li) {
        if(button.includes(value.textContent.toUpperCase()))
            value.classList.add('show');
    }
};

// check if the game has been won or lost
const checkWin = () => {

};



// listen for the start game button to be pressed
btnReset.addEventListener('click',() => {
    const display = document.querySelector('#overlay');
    display.style.display = 'none';
})

// listen for the onscreen keyboard to be clicked
qwerty.addEventListener('click', e => {
    const button = e.target
    if(button.tagName === 'BUTTON'){
      if(listPhrase.includes(button.textContent.toUpperCase())) {
        button.className = 'chosen';
        checkLetter(b);
      };
    }
});
