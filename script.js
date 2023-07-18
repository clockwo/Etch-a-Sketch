const gridContainer = document.querySelector('.screen__painter');
const gridSizeSlider = document.querySelector('input');
const gridSizeDisplay = document.querySelector('.current-grid');

const DEFAULT_GRID_SIZE = 16;

window.addEventListener('load', () => {
  createGridSquares();
});

function removeGridSquares() {
  const ceils = document.querySelectorAll('.ceil');

  [...ceils].forEach((ceil) => ceil.remove());
}

function createGridSquares(gridValue = DEFAULT_GRID_SIZE) {
  for (let i = 1; i <= gridValue * gridValue; i++) {
    const newSquare = document.createElement('div');
    newSquare.className = 'ceil';
    newSquare.classList.add('square');

    //! Take this flex solution from this author https://github.com/emberavenge/etch-a-sketch
    newSquare.style.flex = `1 calc(100% / ${gridValue})`;
    gridContainer.appendChild(newSquare);
  }
}

gridSizeSlider.addEventListener('change', (e) => {
  const gridSizeMapping = {
    0: 16,
    25: 32,
    50: 64,
    75: 128,
    100: 256,
  };
  const selectedGridSize = gridSizeMapping[e.target.value];
  removeGridSquares();
  createGridSquares(selectedGridSize);
  gridSizeDisplay.innerHTML = `${selectedGridSize}x${selectedGridSize}`;
});
