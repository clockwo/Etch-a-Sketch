const screenPainter = document.querySelector('.screen__painter');

for (let i = 0; i < 100; i++) {
  const newSquare = document.createElement('div');
  newSquare.classList.add('square');
  screenPainter.appendChild(newSquare);
}
