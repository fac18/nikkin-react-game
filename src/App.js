import React from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage';
import GameHeader from './components/GameHeader';

function App() {
  return (
    <div className='background'>
      <GameHeader />
      <section>
        <LandingPage />
      </section>
    </div>
  );
}

export default App;
