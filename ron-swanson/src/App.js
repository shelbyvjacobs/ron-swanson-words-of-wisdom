import React from 'react';
import './App.css';
import Slider from './Slider.js'

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Words of Wisdom</h1>
        <span className="with">with </span><h2>Ron Swanson</h2> 
      </div>
        <Slider />
    </div>
  );
}

export default App;
