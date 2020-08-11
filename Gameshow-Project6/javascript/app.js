const qwerty = document.querySelector('#qwerty');
const display = document.querySelector('#overlay');
const btnReset = document.querySelector('.btn__reset');
const ol = document.querySelector('#scoreboard ol');
const h1 = document.createElement('h1');
const phrases = [
    'JAVASCRIPT IS FUN',
    'LOOP IS FUN',
    'OBJECT IS FUN',
    'ARRAY IS FUN',
    'CODING IS NOT FUN',
];


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
    //White Space Remove
        listPhrase.textContent === ' ' ? listPhrase.className = 'space': null;
    // Append list    
        ulPhrase.appendChild(listPhrase);
    } 
    return ulPhrase.children;
}
const displayPhrase = displayPhrases(randomLetter);
const lists = Array.from(displayPhrase);
let listPhrase = lists.map(list => list.textContent);


// check if a letter is in the Phrase
const checkLetter = button => {
    const li = document.querySelectorAll('.letter');
    for (let value of li) {
        const valueOfLi = value.textContent.toUpperCase()
        if(button.includes(valueOfLi))
            value.classList.add('show');
    }
};

const liLetter = document.querySelectorAll('.letter')
// check if the game has been won or lost
const checkWin = () => {
    const liShow = document.querySelectorAll('.show')
    //When player lose the Game
        if(!ol.childElementCount) {
            WinOrLose('lose','You Lose!');
        }   
    //When player win the Game
        else if(liLetter.length === liShow.length) {
            WinOrLose('win','You Win!');
        }
};


// listen for the start game button to be pressed
btnReset.addEventListener('click',(e) => {
    display.style.display = 'none';
    // Play Again Button
    e.target.textContent === 'Click Here to Play Again?' ? location.reload() : null; 
})

// listen for the onscreen keyboard to be clicked
qwerty.addEventListener('click', e => {
    const button = e.target;
    button.disabled = true;
    if(button.tagName === 'BUTTON'){
      const selection = button.textContent.toUpperCase();
      //The correct button
      if(listPhrase.includes(selection)) {
        button.className = 'chosen';
        checkLetter(selection);
    // Add Shaking transition to the answer
         const liShow = document.querySelectorAll('.show')
         for (let value of liShow) {
                value.classList.add('shaking')
         }
        checkWin();  
      }//The Wrong button
      else {
          button.className = 'lose';
          ol.lastElementChild.remove();
          checkWin()
      };
    }
});

//Refactoring Game Condition
const WinOrLose = (condition,textCondition) => {
    display.style.display = '';
    display.className = condition;
    btnReset.textContent = 'Click Here to Play Again?';
    h1.textContent = textCondition;
    display.appendChild(h1);
}
