import React from 'react';
import logo from './logo.svg';
import './App.css';
import GameHeader from './components/GameHeader';
import LandingPage from './components/LandingPage';

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
