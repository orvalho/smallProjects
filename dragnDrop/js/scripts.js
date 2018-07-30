// select elements
const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// add fill listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// drag functions for fill
function dragStart() {
  this.classList.add('hold');
  setTimeout(() => {
    this.classList.remove('fill');
    this.classList.remove('hold');
    this.classList.add('invisible');
  });
}

function dragEnd() {
  this.classList.remove('invisible');
  this.classList.add('fill');
}

// loop through empties and add listeners
empties.forEach(empty => {
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', Drop);
});

// drag functions for empties
function dragEnter(e) {
  e.preventDefault();
  this.classList.add('hover');
}

function dragOver(e) {
  e.preventDefault();
}

function dragLeave() {
  this.classList.remove('hover');
}

function Drop() {
  this.classList.remove('hover');
  this.append(fill);
}
