import "./App.css";
import Monsters from "./components/Monsters.js";

function App() {
  let names = ["Godzilla", "Mothra", "King Ghidorah", "King Kong"];
  let monstersIncNames = ["Skully", "Mike"];
  return (
    <div className='App'>
      {/* Passing an Array Down through Props */}
      <Monsters names={names} />

      <Monsters names={monstersIncNames} />
    </div>
  );
}

export default App;
