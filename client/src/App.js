import './App.css';
import Timer from './components/Timer.js';
import React, { useState } from 'react';
import Settings from './components/Settings';

function App() {
  let [minutes, setMinutes] = useState('50');
  let [showModal, setShowModal] = useState(false);
  return (
    <div>
      {/* <h1 style={{ 'text-align': 'center' }} className="title">POMODORO TIME</h1> */}
      <Timer minutes={minutes} />
      <p onClick={() => setShowModal(!showModal)} className="buttons">
        SETTINGS
      </p>
      {showModal ? (
        <div className="modal main-container">
          <Settings />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
