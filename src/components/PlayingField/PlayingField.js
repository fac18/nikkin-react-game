import React from "react";
import Player from "../Player/Player";
import "../PlayingField/PlayingField.css";
import "../LandingPage/LandingPage.css";

const PlayingField = props => {
  return (
    <main className="playingField">
      <Player playing={props.playing} userData={props.userData} />
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
