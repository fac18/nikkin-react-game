import React from 'react';
import Player from './Player';

const PlayingField = props => {
  console.log('we here');

  return (
    <main className='playingField'>
      <Player
        userData={props.userData}
        playing={props.playing}
        setPlaying={props.setPlaying}
      />
    </main>
  );
};

export default PlayingField;
