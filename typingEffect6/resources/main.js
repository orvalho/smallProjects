'use strict';

const main = () => {
  const WORDS = ["joy", "trust", "patience"];
  const wordsLength = WORDS.length;

  let j = 0; // index of word in an array of words, while writing

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
};

window.addEventListener('load', main);
