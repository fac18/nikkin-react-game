import React from "react";
import Player from "./Player";
import "./PlayingField.css";
import "./LandingPage.css";

const PlayingField = props => {
  return (
    <main className="playingField">
      <Player userData={props.userData} />
      <button
        className="exit-btn"
        onClick={event => {
          event.preventDefault();
          props.setGamePage("LandingPage");
        }}
      >
        Exit Game
      </button>
    </main>
  );
};

export default PlayingField;
