'use strict';
window.addEventListener('load', main);

function main() {
  const TEXT = "dream";
  const SPEED_WRITE = 200;
  const textLength = TEXT.length;
  let i = 0;
  // select an element to write text to
  const element = document.querySelector('#element');

  typeWriter();

  function typeWriter() {
    // write text one letter at a time
    if(i < textLength) {
      element.textContent += TEXT.charAt(i);
      i++;
      setTimeout(typeWriter, SPEED_WRITE);
    }
  }
}
