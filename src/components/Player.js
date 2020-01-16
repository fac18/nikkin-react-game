import React from "react";
import "./Player.css";

const Player = ({ githubAvatar }) => (
  <div>
    <img src={githubAvatar} alt="player" />
  </div>
);

export default Player;
