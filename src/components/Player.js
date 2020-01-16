import React from "react";

const Player = ({ githubObject }) => {
  return (
    <div>
      <img src={githubObject.avatar_url} />
    </div>
  );
};

export default Player;
