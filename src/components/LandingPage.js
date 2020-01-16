import React from "react";
import "./LandingPage.css";
import fetchPlayer from "../utils/fetchPlayer";
import Player from "./Player";

const LandingPage = () => {
  const [username, setUsername] = React.useState("");
  const updateUsername = event => {
    setUsername(event.target.value);
  };
  const [userData, setUserData] = React.useState(null);

  return (
    <main className="landingPage">
      <form className="usernameForm">
        <label htmlFor="newPlayer">New Player</label>
        <input
          type="text"
          id="newPlayer"
          placeholder="Your Github username"
          value={username}
          onChange={event => updateUsername(event)}
        />
        <button
          onClick={event => {
            event.preventDefault();
            fetchPlayer(username).then(data => setUserData(data));
          }}
        >
          Go!
        </button>
        {userData ? <Player userData={userData} /> : null}
      </form>
    </main>
  );
};

export default LandingPage;
