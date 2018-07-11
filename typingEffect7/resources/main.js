'use strict';

const main = () => {

  const WORD = "sunshine";
  const MISTAKE = "rmz";
  const MISTAKE_AT = 4; // index
  const wordWithMistake = WORD.slice(0, MISTAKE_AT) + MISTAKE;
  const wordWithMistakeLength = wordWithMistake.length;

  let i = 0; // index of letter in a word with mistake, while writting

  const SPEED_WRITE = 200;

  // select an element to write text to
  const element = document.querySelector('#element');

  const typeWriter = () => {
    // write a word with mistake one letter at a time
    if(i < wordWithMistakeLength) {
      element.textContent += wordWithMistake.charAt(i);
      i++;
      setTimeout(typeWriter, SPEED_WRITE);
    }
  };

  typeWriter();
};

window.addEventListener('load', main);
