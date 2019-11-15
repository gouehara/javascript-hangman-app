const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('Cat food', 2)

puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage

window.addEventListener('keypress', function (e) {
      const guess = String.fromCharCode(e.charCode)
      game1.makeGuess(guess)
      puzzleEl.textContent = game1.puzzle
      guessesEl.textContent = game1.statusMessage
})

const request = new XMLHttpRequest();

request.addEventListener('readystatechange', (e) => {
      if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText);
            console.log(data);
      } else if (e.target.readyState === 4) {
            console.log('an error has taken place');
      }
});

request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3')
request.send()

const countryCode = 'JP';
const countryRequest = new XMLHttpRequest();

countryRequest.addEventListener('readystatechange', e => {
      if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            const country = data.find(country => country.alpha2Code === countryCode)
            console.log(country.name);
      } else if (e.target.responseText === 4) {
            console.log('an error has taken place');
      }
})

countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
countryRequest.send()