document.addEventListener('DOMContentLoaded', () => {
  const numberGrid = document.getElementById('number-grid');
  const maxNumber = 300; // Máximo de números na grade
  let low = 1;
  let high = maxNumber;
  let correctNumber = Math.floor(Math.random() * maxNumber) + 1; // Número a ser adivinhado

  function setupGrid() {
      for (let i = 1; i <= maxNumber; i++) {
          const cell = document.createElement('div');
          cell.textContent = i;
          cell.id = 'num-' + i;
          cell.className = 'number-cell';
          cell.addEventListener('click', () => makeGuess(i));
          numberGrid.appendChild(cell);
      }
  }

  function makeGuess(guess) {
      if (guess === correctNumber) {
          alert('Parabéns! Você acertou o número ' + guess);
          window.location.reload();
      } else if (guess < correctNumber) {
          low = guess + 1;
      } else {
          high = guess - 1;
      }
      updateGrid();
  }

  function updateGrid() {
      for (let i = 1; i < low; i++) {
          document.getElementById('num-' + i).classList.add('discarded');
      }
      for (let i = high + 1; i <= maxNumber; i++) {
          document.getElementById('num-' + i).classList.add('discarded');
      }
  }

  setupGrid();
});
