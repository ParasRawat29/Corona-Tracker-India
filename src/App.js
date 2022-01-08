import "./App.css";
import StateWise from "./components/State/StateWise";
import Total from "./components/Total/Total";

function App() {
  return (
    <div className="App">
      <header>
        <h1>COVID 19 Dashboard , India</h1>
      </header>
      <main>
        <Total />

        <StateWise />
        <div className="footer">
          <h5>
            Created By <span>Paras Rawat</span>
            <a
              href="https://github.com/ParasRawat29/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-github"></i>
            </a>
          </h5>
        </div>
      </main>
    </div>
  );
}

export default App;
