import React from 'react';
import './App.css';
import Lottery from './Lottery';

function App() {
  return (
    <div className="App">
      <Lottery title="Loto" />
      <Lottery maxNum={30} numBalls={5} title="Mini Daily" />
    </div>
  );
}

export default App;
