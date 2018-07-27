'use strict';

const progressBar = () => {

  const outer = document.getElementById('outer');
  const inner = document.getElementById('inner');
  let percentValue = 0;
  let deg = 0;
  const SPEED = 10;
  const pinkVeryLight = '#FFE2F0';
  const pinkDark = '#EA3788';

  const frame = () => {
    if(percentValue < 100) {
      percentValue++;

      if(percentValue < 50) {
        deg = percentValue / 100 * 360 + 90;
        outer.style.backgroundImage = `linear-gradient(${deg}deg, transparent 50%, ${pinkVeryLight} 50%),
        linear-gradient(90deg, ${pinkVeryLight} 50%, transparent 50%)`;
      }

      else if (percentValue === 50) {
        outer.style.backgroundImage = `linear-gradient(90deg, ${pinkVeryLight} 50%, transparent 50%)`;
      }

      else if (percentValue === 100) {
        outer.style.backgroundImage = `none`;
      }

      else if (percentValue > 50) {
        deg = percentValue / 100 * 360 - 90;
        outer.style.backgroundImage = `linear-gradient(${deg}deg, transparent 50%, ${pinkDark} 50%),
       linear-gradient(90deg, ${pinkVeryLight} 50%, transparent 50%)`;
      }

      inner.textContent = `${percentValue}%`;
   }
   setTimeout(frame, SPEED);
 };
 frame();
};

window.addEventListener('load', progressBar);
