import './App.css';

function App() {

  let count = 0;
  let saveEl = document.getElementById("save-el")
  let countEl = document.getElementById("count-el")

  function increment() {
    count += 1 //   count = count + 1;
    countEl.innerHTML = count
    // OR  document.getElementById("count-el").innerHTML = count
  }

  function save() {
    let countStr = count + " - ";
    // saveEl = saveEl.innerHTML + countStr
    saveEl.innerHTML += countStr
    countEl.textContent = 0
    count = 0
  }

  console.log("Let's count people on the subway!")




  return (
    <div className="App">
      <h1>People entered:</h1>
      <h2 id="count-el">0</h2>
      <button id="increment-btn" onClick={() => increment()}>INCREMENT</button>
      <button id="save-btn" onClick={() => save()}>SAVE</button>
      <p id="save-el">Previous entries: </p>

    </div>

  );
}

export default App;
