import logo from './logo.svg';
import './App.css';
import { quotes } from "./quotes"

// source: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}
let clicks = 0

function onWindowClick() {
  clicks += 1
  if(clicks % 3 == 0){
    window.open("gabor", "_blank")
  }
}

// async function openQuotes() {
//   await new Promise(r => setTimeout(r, 1000)).then(() => {window.open("gabor", "_blank")})
// }

function App() {
  return (
    <div className="App">
      {shuffle(quotes).map(line => (
        <p>{line}</p>
      )
      )}


      {
        window.addEventListener("click", onWindowClick)
      }

    </div>
  );
}

export default App;
