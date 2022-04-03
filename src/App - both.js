import "./App.css";
import Monsters from "./components/Monsters.js";

function App() {
  let myArray = ["aliens", "dinosaurs", "ninjas", "pirates", "unicorns", "wizards", "zombies"];
  let monsters = ["Godzilla", "Mothra", "King Ghidorah", "King Kong"];

  return (
    <div className='App'>
      {/* Map Method */}
      {myArray.map((thing) => (
        <div>I am {thing}</div>
      ))}

      {/* Passing an Array Down through Props */}
      <Monsters monsters={monsters} />
    </div>
  );
}

export default App;
