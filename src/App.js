import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./components/LandingPage";
import Player from "./components/Player.js";

function App() {
  return (
    <div className="background">
      <header className="App-header"></header>
      <section>
        <LandingPage />
        <Player url={playerAvatar} />
      </section>
    </div>
  );
}

export default App;
