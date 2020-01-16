import React from 'react';
import './Player.css';

const Player = props => {
  console.log(`userData is ${props.userData}`);

  if (props.playing === true) {
    console.log('WE PLAYING!');
    // React.useEffect();
  }

  return (
    <div className='user-image-container'>
      <img
        className='user-image'
        src={props.userData.avatar_url}
        alt='player avatar'
      />
    </div>
  );
};

export default Player;
