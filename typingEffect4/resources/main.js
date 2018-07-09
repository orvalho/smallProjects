'use strict';

const main = () => {
  const TEXT = "positive";
  const textLength = TEXT.length;
  const SPEED_START = 800;
  const SPEED_DELETE = 200;
  const SPEED_RESET = 400;
  let i = textLength - 1; // index of letter in a word

  // select an element and write text to it
  const element = document.querySelector('#element');
  element.textContent = TEXT;

  const typeWriter = () => {
    // delete text one letter at a time
    if(i >= 0) {
      element.textContent = TEXT.slice(0, i);
      i--;
      setTimeout(typeWriter, SPEED_DELETE);
    }
    // reset and loop forever
    else {
      element.textContent = TEXT; // reset
      i = textLength - 1; // reset
      setTimeout(typeWriter, SPEED_RESET);
    }
  };

  setTimeout(typeWriter, SPEED_START);
};

window.addEventListener('load', main);
