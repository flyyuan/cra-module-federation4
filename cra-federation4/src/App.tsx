import React, { lazy, Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";

const Title = lazy(() => import("website2/Title").then((mod) => mod.default));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Suspense fallback={<div>loading</div>}>
          <Title />
        </Suspense>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
