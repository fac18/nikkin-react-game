import React from 'react';
import Player from './Player';

const PlayingField = props => {
  console.log('we here');

  return (
    <main className='playingField'>
      <Player userData={props.userData} />
    </main>
  );
};

export default PlayingField;
