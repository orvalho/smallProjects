'use strict';

const main = () => {
  const WORDS = ["peace", "love", "happiness"];
  const wordsLength = WORDS.length;

  const text = document.querySelector('#text');

  let j = 0; // index of word in an array of words

  const createElement = tagName => {
    let tag = document.createElement(tagName);
    text.appendChild(tag);
  };

  for(; j < wordsLength; j++) {
    createElement('p');
  }
};

window.addEventListener('load', main);
