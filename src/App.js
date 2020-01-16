import React from 'react';
// import logo from './logo.svg';
import './App.css';
import GameHeader from './components/GameHeader';
import LandingPage from './components/LandingPage';
import PlayingField from './components/PlayingField';

function App() {
  const [gamePage, setGamePage] = React.useState('LandingPage');
  const [userData, setUserData] = React.useState(null);

  return (
    <div className='background'>
      <GameHeader />
      <section>
        {gamePage === 'LandingPage' && (
          <LandingPage
            setGamePage={setGamePage}
            userData={userData}
            setUserData={setUserData}
          />
        )}
        {gamePage === 'PlayingField' && <PlayingField userData={userData} />}
      </section>
    </div>
  );
}

export default App;
