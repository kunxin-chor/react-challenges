import { useState } from 'react';
import './App.css';

function App() {
  const [speed, setSpeed] = useState(1);

  return (
    <div className="app">
      <h1>Traffic Light</h1>
      <div className="traffic-light">
        <div className="light red" style={{opacity:1}}></div>
        <div className="light orange"></div>
        <div className="light green"></div>
      </div>
      <div>Time Left for Current Color: 0s </div>
      <div className="controls">
        <button className="pedestrian-request-button">
          Pedestrian Request
        </button>
      </div>
    </div>
  )
}

export default App
