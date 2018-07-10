'use strict';

const main = () => {
  const WORDS = ["joy", "trust", "patience"];
  const wordsLength = WORDS.length;

  const SPEED_WRITE = 150;
  const SPEED_WRITE_NEXT_WORD = 200;

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
    // write next word
    else if (j < wordsLength - 1) {
      j++; // go to next word
      i = 0; // reset i
      setTimeout(typeWriter, SPEED_WRITE_NEXT_WORD);
    }
  };

  typeWriter();
};

window.addEventListener('load', main);
