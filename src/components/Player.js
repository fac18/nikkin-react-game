import React from 'react';
import './Player.css';

const Player = props => {
  console.log(`userData is ${props.userData}`);

  const [playerPosition, setPlayerPosition] = React.useState(0);

  React.useEffect(() => {
    // declaring Player outside of useEffect gives error, why?
    const player = document.getElementById('player');
    // declaring playerFall outside of the IF statement so it can be accessed in the return function
    let playerFall;
    if (props.playing === true) {
      console.log('WE PLAYING YO');
      // why didn't updatePlayerPosition function work outside of useEffect?
      // it gets re-declared each time the Player component is rendered
      const updatePlayerPosition = num =>
        setPlayerPosition(playerPosition + num);
      playerFall = setInterval(() => {
        console.log('inside playerFall setinterval');
        updatePlayerPosition(1);
        player.style.top = `${playerPosition}px`;
        console.log(playerPosition);
      }, 1000 / 60);
    }
    return () => {
      clearInterval(playerFall);
    };
  }, [playerPosition, props.playing]);

  React.useEffect(() => {
    const player = document.getElementById('player');
    if (props.playing === true) {
      const updatePlayerPosition = num =>
        setPlayerPosition(playerPosition + num);
      window.addEventListener('click', () => {
        console.log('we in windows event listener');
        updatePlayerPosition(-100);
        player.style.top = `${playerPosition}px`;
      });
    }
    // return () => {
    //   window.removeEventListener('click', () => {});
    // };
  }, [playerPosition, props.playing]);

  return (
    <div className='user-image-container'>
      <img
        id='player'
        className='user-image'
        src={props.userData.avatar_url}
        alt='player avatar'
      />
    </div>
  );
};

export default Player;
