const gridContainer = document.querySelector('.screen__painter');
const gridSizeSlider = document.querySelector('.range-input');
const gridSizeDisplay = document.querySelector('.current-grid');
const randomBtn = document.querySelector('.random-btn');
const resetBtn = document.querySelector('.reset-btn');

const DEFAULT_GRID_SIZE = 16;
let isRandomEnabled = false;
let currentGridSize;

window.addEventListener('load', () => {
  createGridSquares();
});

function removeGridSquares() {
  const ceils = document.querySelectorAll('.ceil');

  [...ceils].forEach((ceil) => ceil.remove());
}

function getColor() {
  const color = document.querySelector('.colorPick');
  return color.value;
}

function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createGridSquares(gridValue = DEFAULT_GRID_SIZE) {
  for (let i = 1; i <= gridValue * gridValue; i++) {
    const gridCell = document.createElement('div');
    gridCell.className = 'ceil';
    gridCell.classList.add('square');

    gridCell.addEventListener('mouseover', (e) => {
      if (isRandomEnabled) {
        gridCell.style.background = `${getRandomColor()}`;
      } else {
        gridCell.style.background = `${getColor()}`;
      }
    });

    //! Take this flex solution from this author https://github.com/emberavenge/etch-a-sketch
    gridCell.style.flex = `1 calc(100% / ${gridValue})`;
    gridContainer.appendChild(gridCell);
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
  currentGridSize = selectedGridSize;
  removeGridSquares();
  createGridSquares(selectedGridSize);
  gridSizeDisplay.innerHTML = `${selectedGridSize}x${selectedGridSize}`;
});

randomBtn.addEventListener('click', (e) => {
  if (isRandomEnabled) {
    isRandomEnabled = false;
    randomBtn.classList.remove('rainbowBG');
  } else {
    isRandomEnabled = true;
    randomBtn.classList.add('rainbowBG');
  }
});

resetBtn.addEventListener('click', (e) => {
  removeGridSquares();
  createGridSquares(currentGridSize);
});
