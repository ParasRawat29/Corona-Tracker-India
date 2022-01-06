import "./App.css";
import StateWise from "./components/State/StateWise";
import Total from "./components/Total";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Covid -19 Tracker | India</h1>
      </header>
      <main>
        <Total />
        <StateWise />
      </main>
    </div>
  );
}

export default App;
