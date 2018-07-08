'use strict';

const main = () => {
  const WORDS = ["peace", "love", "happiness"];
  const wordsLength = WORDS.length;

  const text = document.querySelector('#text');

  let j = 0; // index of word in an array of words
  let i = 0; // index of letter in a word

  const createElement = tagName => {
    let tag = document.createElement(tagName);
    text.appendChild(tag);
  };

  for(; j < wordsLength; j++) {
    createElement('p');
  }

  const getLongestWordLength = () => {
    let longestWordLength = 0;
    for(let n = 0; n < wordsLength; n++) {
      if(WORDS[n].length > longestWordLength) {
        longestWordLength = WORDS[n].length;
      }
    }
    return longestWordLength;
  };

  const tags = document.querySelectorAll('#text p');

  const typeWriter = () => {
    const SPEED_WRITE = 300;
    j = 0; // reset j
    // write a word one letter at a time
    if(i < getLongestWordLength()) {
      for(; j < wordsLength; j++){
        if(i < WORDS[j].length){
          tags[j].textContent += WORDS[j].charAt(i);
        }
      }
      j = 0; // reset j
      i++;
      setTimeout(typeWriter, SPEED_WRITE);
    }




  };

  typeWriter();
};

window.addEventListener('load', main);
