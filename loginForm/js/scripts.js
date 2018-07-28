'use strict';

window.addEventListener('load', () => {
  const openModalLoginButton = document.getElementById('openModalLoginButton');
  const closeModalLoginButton = document.getElementById('closeModalLoginButton');
  const modal = document.getElementById('modal');

  // open modal login
  const openModalLogin = () => {
    modal.style.display = 'block';
    openModalLoginButton.style.display = 'none';
  };
  openModalLoginButton.addEventListener('click', openModalLogin);

  // close modal login when user clicks close button
  const closeModalLogin = () => {
    modal.style.display = 'none';
    openModalLoginButton.style.display = 'block';
  };
  closeModalLoginButton.addEventListener('click', closeModalLogin);

  // close modal login when user clicks anywhere outside of the form
  document.addEventListener('click', (e) => {
    if(e.target === modal) {
      modal.style.display = 'none';
      openModalLoginButton.style.display = 'block';
    }
  });
});
