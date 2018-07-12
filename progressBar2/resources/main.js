'use strict';

const progressBar = () => {

  const outer = document.getElementById('outer');
  const inner = document.getElementById('inner');

  const outerWidth = outer.offsetWidth;
  let innerWidth = 0;
  let percentValue = 0;

  const SPEED = 1;

  const frame = () => {
    if(innerWidth < outerWidth) {
      innerWidth++;
      percentValue = Math.round(innerWidth / outerWidth * 100);
      // increase width of progress bar in steps (every 10%)
      if(percentValue % 10 === 0) {
        inner.style.width = `${percentValue}%`;
        inner.textContent = `${percentValue}%`;
      }
      // change progress bar background color
      switch(percentValue) {
        case 0:
        inner.style.background = '#D0DE41';
        break;
        case 40:
        inner.style.background = '#ABCF47';
        break;
        case 80:
        inner.style.background = '#89C64D';
      }
      setTimeout(frame, SPEED);
    }
  };

  frame();
};

window.addEventListener('load', progressBar);
