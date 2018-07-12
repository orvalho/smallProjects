'use strict';

const progressBar = () => {

  const percent = document.getElementById('percent');
  const outer = document.getElementById('outer');
  const inner = document.getElementById('inner');

  const outerWidth = outer.offsetWidth;
  let innerWidth = 0;
  let percentValue = 0;

  const SPEED = 1;

  const frame = () => {
    if(innerWidth < outerWidth) {
      innerWidth++;
      inner.style.width = `${innerWidth / outerWidth * 100}%`;
      percentValue = Math.round(innerWidth / outerWidth * 100);
      percent.textContent = `${percentValue}%`;
      setTimeout(frame, SPEED);
    }
  };

  frame();
};

window.addEventListener('load', progressBar);
