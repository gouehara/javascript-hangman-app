const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let game1
window.addEventListener('keypress', function (e) {
      const guess = String.fromCharCode(e.charCode)
      game1.makeGuess(guess)
      render();
})

const render = () => {
      puzzleEl.textContent = game1.puzzle
      guessesEl.textContent = game1.statusMessage
};

const startGame = async () => {
      const puzzle = await getPuzzle(2);
      game1 = new Hangman(puzzle, 5)
      render();
};

document.querySelector('#reset').addEventListener('click', startGame);

startGame();

getPuzzle(5).then(data=> {
      console.log(data);
}).catch(error => {
      console.log(error);
})

// getCountry('JP').then(data => {
//       console.log(data.currencies[0].symbol);
// }).catch(error => {
//       console.log(error);
// })

// getCurrentCountry().then(data => {
//       console.log(data);
// })

// getLocation().then(data => data.country
// ).then(data => getCountry(data)
// ).then(data => {
//       console.log(data.name);
// }).catch(error => {
//       console.log(error)
// })

// fetch('http://puzzle.mead.io/puzzle?wordCount', {}).then(response => {
//       if (response.status === 200) {
//             return response.json();
//       } else {
//             throw new Error('unable to fetch the puzzle')
//       }
// }).then(data => {
//       console.log(data.puzzle);
// }).catch(error => {
//       console.log(error);
// })