import React from "react";
import "./Player.css";

const Player = ({ userData }) => (
  <div>
    <img src={userData.avatar_url} alt="player" />
  </div>
);

export default Player;
