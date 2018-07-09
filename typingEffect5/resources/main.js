'use strict';

const main = () => {
  const WORDS = ["believe", "imagine", "encourage"];
  const SPEED_WRITE = 100;
  let i = 0; // index of letter in a word
  let j = 0; // index of word in an array of words

  // select an element to write text to
  const element = document.querySelector('#element');

  const typeWriter = () => {
    // write a word one letter at a time
    if(i < WORDS[j].length) {
      element.textContent += WORDS[j].charAt(i);
      i++;
      setTimeout(typeWriter, SPEED_WRITE);
    }
  };

  typeWriter();
};

window.addEventListener('load', main);
