import React from "react";
import "./LandingPage.css";
import fetchPlayer from "../utils/fetchPlayer";
import Player from "./Player";
// import App from '../App';

const LandingPage = props => {
  const [username, setUsername] = React.useState("");
  const updateUsername = event => {
    setUsername(event.target.value);
  };

  return (
    <main className="landingPage">
      <form className="usernameForm">
        <label className="new-player-label" htmlFor="newPlayer">
          New Player:{" "}
        </label>
        <input
          type="text"
          id="newPlayer"
          placeholder="Enter Github username"
          value={username}
          onChange={event => updateUsername(event)}
        />
        <button
          className="find-me-btn"
          onClick={event => {
            event.preventDefault();
            fetchPlayer(username).then(data => props.setUserData(data));
          }}
        >
          Find me
        </button>
        {props.userData ? <Player userData={props.userData} /> : null}
        {props.userData ? (
          <button
            className="play-btn"
            onClick={event => {
              event.preventDefault();
              props.setGamePage("PlayingField");
            }}
          >
            Play!
          </button>
        ) : null}
      </form>
    </main>
  );
};

export default LandingPage;
