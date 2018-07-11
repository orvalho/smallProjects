'use strict';

const main = () => {

  const WORD = "sunshine";
  const wordLength = WORD.length;
  const MISTAKE = "rmz";
  const MISTAKE_AT = 4; // index
  const wordWithMistake = WORD.slice(0, MISTAKE_AT) + MISTAKE;
  const wordWithMistakeLength = wordWithMistake.length;
  const wordCorrectPartLength = WORD.slice(0, MISTAKE_AT).length;

  let i = 0; // index of letter in a word with mistake, while writting
  let k = wordWithMistakeLength - 1; // index of letter in a word with mistake, while deleting
  let j = MISTAKE_AT; // index of letter in a word after deleting mistake, while writting

  const SPEED_WRITE = 200;
  const SPEED_DELETE = 500;
  const SPEED_RESET = 300;
  
  // select an element to write text to
  const element = document.querySelector('#element');

  const typeWriter = () => {
    // write a word with mistake one letter at a time
    if(i < wordWithMistakeLength) {
      element.textContent += wordWithMistake.charAt(i);
      i++;
      setTimeout(typeWriter, SPEED_WRITE);
    }
    // delete mistake one letter at a time
    else if(k >= wordCorrectPartLength) {
      element.textContent = element.textContent.slice(0, k);
      k--;
      setTimeout(typeWriter, SPEED_DELETE);
    }
    // write the rest of the word one letter at a time
    else if(j < wordLength) {
      element.textContent += WORD.charAt(j);
      j++;
      setTimeout(typeWriter, SPEED_WRITE);
    }
    // reset and loop forever
    else {
      element.textContent = ""; // clear
      i = 0; // reset i
      k = wordWithMistakeLength - 1; // reset k
      j = MISTAKE_AT; // reset j
      setTimeout(typeWriter, SPEED_RESET);
    }
  };

  typeWriter();
};

window.addEventListener('load', main);
