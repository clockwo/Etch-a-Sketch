const screenPainter = document.querySelector('.screen__painter');
const inputRange = document.querySelector('input');
const currentGrid = document.querySelector('.current-grid');

window.addEventListener('load', () => {
  createGrid();
});

function clearGrid() {
  const ceils = document.querySelectorAll('.ceil');

  [...ceils].forEach((ceil) => ceil.remove());
}

function createGrid(gridValue = 16) {
  for (let i = 1; i <= gridValue * gridValue; i++) {
    const newSquare = document.createElement('div');
    newSquare.className = 'ceil';
    newSquare.classList.add('square');

    //! Take this flex solution from this author https://github.com/emberavenge/etch-a-sketch
    newSquare.style.flex = `1 calc(100% / ${gridValue})`;
    screenPainter.appendChild(newSquare);
  }
}

inputRange.addEventListener('change', (e) => {
  const values = {
    0: 16,
    25: 32,
    50: 64,
    75: 128,
    100: 256,
  };
  clearGrid();
  createGrid(values[e.target.value]);
  currentGrid.innerHTML = `${values[e.target.value]}x${values[e.target.value]}`;
});
