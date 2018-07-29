window.addEventListener('load', () => {
  // select content
  const main = document.querySelector('.main');

  // hide content
  main.style.display = 'none';

  // an array to put in dynamically created divs
  const divs = [];

  // create divs w/ classes named spinner-i
  for(let i = 8; i > 0; i--) {  // 8 classes for 8 spinners
    let div = document.createElement('div');
    divs.push(div);
    div.classList.add(`spinner-${i}`);
    document.body.prepend(div);
  }

  // mimic server request
  setTimeout( () => {
    // show content
    main.style.display = 'block';
    // remove spinner-i classes from divs
    divs.forEach(div => {
      div.classList = '';
    });
  }, 3000);
});
