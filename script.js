const screenPainter = document.querySelector('.screen__painter');

const width = screenPainter.getBoundingClientRect().width;
const GRID_VALUE = 128;

// console.log(Math.floor(width / GRID_VALUE));

for (let i = 1; i <= GRID_VALUE * GRID_VALUE; i++) {
  const newSquare = document.createElement('div');
  newSquare.classList.add('square');
  if (i % GRID_VALUE === 0) {
    newSquare.style.background = 'red';
  }
  newSquare.style.width = `${Math.round(width / GRID_VALUE)}px`;
  // newSquare.style.width = `${width / GRID_VALUE}px`;
  screenPainter.appendChild(newSquare);
}
