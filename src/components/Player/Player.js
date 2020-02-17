import React, { useEffect, useState } from "react";
import "./Player.css";

const Player = props => {
  const [playerPosition, setPlayerPosition] = useState(0);

  // commented-out code retained for reference
  // would use the imageRef and set playerPosition in a useEffect,
  // however we are updating 'top' position using inline style in img tag

  // const imageRef = useRef(null);

  // useEffect(() => {
  //   imageRef.current.style.top = `${playerPosition}px`;
  // }, [playerPosition]);

  useEffect(() => {
    const updatePlayerPosition = () => {
      setPlayerPosition(position => position + 10);
    };
    const playerFall = setInterval(() => {
      updatePlayerPosition();
      console.log(
        `inside playerFall setinterval, playerPosition is: ${playerPosition}`
      );
    }, 1000 / 15);
    return () => {
      clearInterval(playerFall);
    };
  }, []);

  useEffect(() => {
    const handleClickEvent = () => {
      if (props.playing) {
        setPlayerPosition(playerPosition => playerPosition - 100);
      }
    };
    window.addEventListener("click", handleClickEvent);

    return () => {
      window.removeEventListener("click", handleClickEvent);
    };
  }, []);

  // could use 'transform' instead of 'top' for better performance
  // transform does not affect layout

  return (
    <div className="user-image-container">
      <img
        style={{ top: playerPosition }}
        // ref={imageRef}
        className="user-image"
        src={props.userData.avatar_url}
        alt="player avatar"
      />
    </div>
  );
};

export default Player;
