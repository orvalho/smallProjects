'use strict';

const main = () => {
  const WORDS = ["joy", "trust", "patience"];
  const wordsLength = WORDS.length;

  const SPEED_WRITE = 150;

  let j = 0; // index of word in an array of words, while writing
  let i = 0; // index of letter in a word, while writing

  const text = document.querySelector('#text');

  const createElement = tagName => {
    let tag = document.createElement(tagName);
    text.appendChild(tag);
  };

  for(; j < wordsLength; j++) {
    createElement('p');
  }
  j = 0; // reset j

  const tags = document.querySelectorAll('#text p');

  const typeWriter = () => {
    // write a word one letter at a time
    if(i < WORDS[j].length) {
      tags[j].textContent += WORDS[j].charAt(i);
      i++;
      setTimeout(typeWriter, SPEED_WRITE);
    }
  };

  typeWriter();
};

window.addEventListener('load', main);
