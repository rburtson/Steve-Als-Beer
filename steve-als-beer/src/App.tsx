import React from "react";
import "./App.css";
import BubbleEffect from "./Components/BubbleEffect.tsx"

function App() {
  const lastUpdate = process.env.REACT_APP_LAST_UPDATE || "Not available";
  
  return (
    <div className="App" style={{ textAlign: "center" }}>
      <header className="App-header">
        <BubbleEffect />
        <a href="https://www.angelfire.com/pa/beerandweather/beerecipes.html"><h1>Welcome<br />to<br />Steve and Al's Brewhaus!</h1></a>
        <div>Currently being Recreated by: Ryan Burtson</div>
        <div>(updated: {lastUpdate})</div>
      </header>
    </div>
  );
}

export default App;
