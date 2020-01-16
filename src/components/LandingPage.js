import React from 'react';
import './LandingPage.css';
import fetchPlayer from '../utils/fetchPlayer';

const LandingPage = () => {
  const [username, setUsername] = React.useState('');
  const updateUsername = event => {
    setUsername(event.target.value);
  };
  return (
    <main className='landingPage'>
      <h1>THE GAME NAME</h1>
      <form>
        <label htmlFor='newPlayer'>New Player</label>
        <input
          type='text'
          id='newPlayer'
          placeholder='Your Github username'
          value={username}
          onChange={event => updateUsername(event)}
        />
        <button
          onClick={event => {
            event.preventDefault();
            fetchPlayer(username);
          }}
        >
          Go!
        </button>
      </form>
    </main>
  );
};

export default LandingPage;
