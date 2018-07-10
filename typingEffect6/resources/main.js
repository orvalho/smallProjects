'use strict';

const main = () => {
  const WORDS = ["joy", "trust", "patience"];
  const wordsLength = WORDS.length;

  const SPEED_WRITE = 150;
  const SPEED_WRITE_NEXT_WORD = 200;
  const SPEED_DELETE = 100;
  const SPEED_DELETE_NEXT_WORD = 200;
  const SPEED_RESET = 100;
  
  let j = 0; // index of word in an array of words, while writing
  let i = 0; // index of letter in a word, while writing
  let m = wordsLength - 1; // index of word in an array of words, while deleting
  let k = WORDS[m].length - 1; // index of letter in a word, while deleting

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
    // delete a word one letter at a time
    else if(k >= 0) {
      tags[m].textContent = tags[m].textContent.slice(0, k);
      k--;
      setTimeout(typeWriter, SPEED_DELETE);
    }
    // delete next word
    else if (m > 0) {
      m--; // go to next word
      k = WORDS[m].length - 1; // reset k
      setTimeout(typeWriter, SPEED_DELETE_NEXT_WORD);
    }
    // reset and loop forever
    else {
      i = 0; // reset i
      j = 0; // reset j
      m = wordsLength - 1; // reset m
      k = WORDS[m].length - 1; // reset k
      setTimeout(typeWriter, SPEED_RESET);
    }
  };

  typeWriter();
};

window.addEventListener('load', main);
