const gridContainerElement = document.querySelector(`[data-js-grid-container]`);
const gridSizeSliderElement = document.querySelector(`[data-js-slider]`);
const gridSizeDisplayElement = document.querySelector(`[data-js-size-display]`);
const randomButtonElement = document.querySelector(`[data-js-random-button]`);
const resetButtonElement = document.querySelector(`[data-js-reset-button]`);
const colorPickElement = document.querySelector(`[data-js-color-pick]`);

const DEFAULT_GRID_SIZE = 16;
const gridSizeMapping = {
  0: 16,
  25: 32,
  50: 64,
  75: 128,
  100: 256,
};
let isRandomEnabled = false;
let currentGridSize;

const stateClasses = {
  isRainbowBackground: 'rainbow-background',
};

const removeGridSquares = () => gridContainerElement.replaceChildren();

//Fist initial of grid
createGridSquares();

function createGridSquares(gridValue = DEFAULT_GRID_SIZE) {
  for (let i = 1; i <= gridValue * gridValue; i++) {
    const gridCell = document.createElement('div');
    gridCell.classList.add('ceil', 'square');
    //! Take this flex solution from this author https://github.com/emberavenge/etch-a-sketch
    gridCell.style.setProperty('--columns', gridValue);
    gridContainerElement.appendChild(gridCell);
  }
}

gridContainerElement.addEventListener('mouseover', ({ target }) => {
  const ceil = target.closest('.ceil');
  if (!ceil) return;

  const hexValue = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  const selectedColor = colorPickElement.value;

  ceil.style.background = isRandomEnabled ? hexValue : selectedColor;
});

gridSizeSliderElement.addEventListener('change', ({ target }) => {
  const selectedGridSize = gridSizeMapping[target.value];
  currentGridSize = selectedGridSize;
  removeGridSquares();
  createGridSquares(selectedGridSize);
  gridSizeDisplayElement.innerHTML = `${selectedGridSize}x${selectedGridSize}`;
});

randomButtonElement.addEventListener('click', () => {
  randomButtonElement.classList.toggle(stateClasses.isRainbowBackground);
  isRandomEnabled = !isRandomEnabled;
});

resetButtonElement.addEventListener('click', () => {
  removeGridSquares();
  createGridSquares(currentGridSize);
});
