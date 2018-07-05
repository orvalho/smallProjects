'use strict';
window.addEventListener('load', main);

function main() {
  const WORDS = ["dream", "create", "inspire"];
  const SPEED_WRITE = 300;
  const SPEED_CHANGE_WORD = 200;
  const wordsLength = WORDS.length;
  let i = 0; // index of letter in a word
  let j = 0; // index of word in an array of words
  // select an element to write text to
  const element = document.querySelector('#element');

  typeWriter();

  function typeWriter() {
    // write a word one letter at a time
    if(i < WORDS[j].length) {
      element.textContent += WORDS[j].charAt(i);
      i++;
      setTimeout(typeWriter, SPEED_WRITE);
    }
    // go to next word
    else if (j < wordsLength - 1) {
      element.textContent = ""; // clear
      j++; // next word
      i = 0; // reset i
      setTimeout(typeWriter, SPEED_CHANGE_WORD);
    }
  }
}
