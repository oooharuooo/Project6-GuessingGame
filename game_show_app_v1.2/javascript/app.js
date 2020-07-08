const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const btnReset = document.querySelector('.btn__reset');
const missed = 0;
const phrases = ['JAVASCRIPT','FUNCTION','OBJECT','ARRAY','LOOP'];
let listPhrase;

// return a random phrase from an array
const getRandomPhraseAsArray = arr => {
    let randomNumber = Math.floor(Math.random() * phrases.length) ;
    for(let i = 0; i < arr.length; i++){
        return arr[randomNumber];
    }
};
const randomLetter = getRandomPhraseAsArray(phrases).split('');

// adds the letters of a string to display
// const displayPhrases = arr => {
const a = function() {
    const ulPhrase = document.querySelector('#phrase ul'); 
     for (let value of randomLetter) {
        listPhrase = document.createElement('li');
        listPhrase.textContent = value;
        listPhrase.className = 'letter'
        ulPhrase.appendChild(listPhrase);      
    } 
}
a();
const letter = document.querySelectorAll('.letter')

for(let i = 0; i < letter.length; i++) {
    // const letters = letter[i].textContent;
    // console.log(letters)
    
    qwerty.addEventListener('click', e => {
        if(e.target.tagName === 'BUTTON'){
            letter[i].style.color = 'red';
        e.target.style.display = 'none';}
    });
}

// }
// const displayPhrase = displayPhrases(randomLetter);

// check if a letter is in the Phrase
const checkLetter = button => {
   

};
// check if the game has been won or lost
const checkWin = () => {

};

const display = document.querySelector('#overlay');
    display.style.display = 'none';
// listen for the start game button to be pressed
// btnReset.addEventListener('click',() => {
    
// })

// listen for the onscreen keyboard to be clicked
