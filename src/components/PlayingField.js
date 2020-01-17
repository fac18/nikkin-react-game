import React from "react";
import Player from "./Player";
import "./PlayingField.css";
import "./LandingPage.css";

const PlayingField = props => {
  console.log("we here");
  // const [userPosition, setUserPosition] = React.useState(0);
  const userPositionYRef = React.useRef(0);
  const playerImageRef = React.useRef();
  const playingFieldWindowRef = React.useRef();
  // const updatedPosition = () => (setUserPosition(userPosition + 1);
  // console.log("userPosition: ", userPosition);
  console.log("1. userPositionYRef.current: ", userPositionYRef.current);

  React.useEffect(() => {
    const timerId = setInterval(() => {
      if (
        userPositionYRef.current > 300 //playingFieldWindowRef.current.innerHeight
      ) {
        return;
      }
      userPositionYRef.current++;
      playerImageRef.current.style.top = userPositionYRef.current + "px";
      console.log("2. userPositionYRef.current: ", userPositionYRef.current);
    }, 1000 / 60); // 60fps
    return () => {
      clearInterval(timerId); // Remember to clear intervals otherwise they will not end!
    };
  }, []);

  return (
    <main className="playingField" ref={playingFieldWindowRef}>
      <Player userData={props.userData} playerImageRef={playerImageRef} />
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
