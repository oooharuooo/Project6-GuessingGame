const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const btnReset = document.querySelector('.btn__reset');
const missed = 0;
const phrases = ['JAVASCRIPT','FUNCTION','OBJECT','ARRAY','LOOP'];
const buttons = document.querySelectorAll('.keyrow button')



// return a random phrase from an array
const getRandomPhraseAsArray = arr => {
    let randomNumber = Math.floor(Math.random() * phrases.length) ;
    for(let i = 0; i < arr.length; i++){
        return arr[randomNumber];
    }
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
let list = lists.map(list => list.textContent)


// check if a letter is in the Phrase
const checkLetter = button => {
   

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
      if(list.includes(button.textContent.toUpperCase())){
        lists.map(list => list.classList.add('show'))
      };
    e.target.style.display = 'none';}
});
