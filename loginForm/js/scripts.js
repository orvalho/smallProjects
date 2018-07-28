'use strict';

window.addEventListener('load', () => {
  const openModalLoginButton = document.getElementById('openModalLoginButton');
  const modal = document.getElementById('modal');

  // open modal login
  const openModalLogin = () => {
    modal.style.display = 'block';
    openModalLoginButton.style.display = 'none';
  };
  openModalLoginButton.addEventListener('click', openModalLogin);
});
