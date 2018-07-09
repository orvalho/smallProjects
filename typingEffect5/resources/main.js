'use strict';

const main = () => {
  const WORDS = ["believe", "imagine", "encourage"];
  const wordsLength = WORDS.length;
  const SPEED_WRITE = 100;
  const SPEED_DELETE = 150;
  const SPEED_CHANGE_WORD = 50;
  let i = 0; // index of letter in a word, while writting the word
  let j = 0; // index of word in an array of words
  let k = WORDS[j].length - 1; // index of letter in a word, while deleting the word

  // select an element to write text to
  const element = document.querySelector('#element');

  const typeWriter = () => {
    // write a word one letter at a time
    if(i < WORDS[j].length) {
      element.textContent += WORDS[j].charAt(i);
      i++;
      setTimeout(typeWriter, SPEED_WRITE);
    }
    // delete word one letter at a time
    else if(k >= 0) {
      element.textContent = element.textContent.slice(0, k);
      k--;
      setTimeout(typeWriter, SPEED_DELETE);
    }
    // go to next word
    else if (j < wordsLength - 1) {
      j++; // next word
      i = 0; // reset i
      k = WORDS[j].length - 1; // reset k
      setTimeout(typeWriter, SPEED_CHANGE_WORD);
    }
  };

  typeWriter();
};

window.addEventListener('load', main);
