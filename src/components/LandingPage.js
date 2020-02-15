import React from "react";
import "./LandingPage.css";
import fetchPlayer from "../utils/fetchPlayer";

const LandingPage = props => {
  const [username, setUsername] = React.useState("");
  const updateUsername = event => {
    setUsername(event.target.value);
  };

  return (
    <main className="landingPage">
      <form className="usernameForm">
        <label className="new-player-label" htmlFor="newPlayer">
          New Player:
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
        {/* {props.userData ? <Player userData={props.userData} /> : null} */}
        {props.userData ? (
          <>
            <div className="user-image-container">
              {/* set style inside img, get rid of playerPosition state in the useEffects and don't need to have it as dependencies */}
              {/* should use transform instead of top, better performance */}
              <img
                className="user-image"
                src={props.userData.avatar_url}
                alt="player avatar"
              />
            </div>
            <button
              className="play-btn"
              onClick={event => {
                event.preventDefault();
                props.setPlaying(true);
                props.setGamePage("PlayingField");
              }}
            >
              Play!
            </button>
          </>
        ) : null}
      </form>
    </main>
  );
};

export default LandingPage;
