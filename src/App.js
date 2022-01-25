import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import "./App.css";
import ErrorFallback from "./components/ErrorFallback";
import Loading from "./components/Loading/Loading";
// import StateWise from "./components/State/StateWise";
import Total from "./components/Total/Total";
// import Map from "./components/map/Map";
const Map = React.lazy(() => import("./components/map/Map"));
const StateWise = React.lazy(() => import("./components/State/StateWise"));

function App() {
  return (
    <div className="App">
      <header>
        <h1>COVID 19 Dashboard , India</h1>
      </header>
      <main>
        <Total />
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<Loading message="Fetching Data" />}>
            <main className="mainContent">
              <StateWise />
              <Map />
            </main>
          </Suspense>
        </ErrorBoundary>

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
