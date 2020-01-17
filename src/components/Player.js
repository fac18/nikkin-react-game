import React from "react";
import "./Player.css";

const Player = ({ userData }) => {
  return (
    <div className="user-image-container">
      <img
        className="user-image"
        src={userData.avatar_url}
        alt="player avatar"
      />
    </div>
  );
};

export default Player;
