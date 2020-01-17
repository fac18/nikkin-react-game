import React from 'react';
import Player from './Player';
import './PlayingField.css';
import './LandingPage.css';

const PlayingField = props => {
  console.log('we in playingfield component');

  return (
    <main className='playingField'>
      <Player playing={props.playing} userData={props.userData} />
      <button
        className='exit-btn'
        onClick={event => {
          event.preventDefault();
          props.setGamePage('LandingPage');
        }}
      >
        Exit Game
      </button>
    </main>
  );
};

export default PlayingField;
