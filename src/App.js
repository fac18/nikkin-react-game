import React from 'react';
// import logo from './logo.svg';
import './App.css';
import GameHeader from './components/GameHeader';
import LandingPage from './components/LandingPage';
import PlayingField from './components/PlayingField';

function App() {
  const [gamePage, setGamePage] = React.useState('LandingPage');
  const [userData, setUserData] = React.useState(null);
  const [playing, setPlaying] = React.useState(false);

  return (
    <div className='background'>
      <GameHeader />
      <section>
        {gamePage === 'LandingPage' && (
          <LandingPage
            setGamePage={setGamePage}
            userData={userData}
            setUserData={setUserData}
            playing={playing}
            setPlaying={setPlaying}
          />
        )}
        {gamePage === 'PlayingField' && (
          <PlayingField
            setGamePage={setGamePage}
            userData={userData}
            playing={playing}
            setPlaying={setPlaying}
          />
        )}
      </section>
    </div>
  );
}

export default App;
