import React from 'react';
import './App.css';
import Lottery from './Lottery';

function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery maxNum={30} numBalls={5} />
    </div>
  );
}

export default App;
