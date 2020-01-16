import React from "react";
import Player from "./Player";
import "./PlayingField.css";
import "./LandingPage.css";

const PlayingField = props => {
  console.log("we here");

  return (
<<<<<<< HEAD
    <main className='playingField'>
      <Player
        userData={props.userData}
        playing={props.playing}
        setPlaying={props.setPlaying}
      />
=======
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
>>>>>>> master
    </main>
  );
};

export default PlayingField;
