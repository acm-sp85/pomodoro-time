import './App.css';
import Timer from './components/Timer.js';
import React, { useState } from 'react';
import Settings from './components/Settings';

function App() {
  let [minutesPomodoro, setMinutesPomodoro] = useState(45);
  let [minutesBreak, setMinutesBreak] = useState(15);
  let [showModal, setShowModal] = useState(false);
  return (
    <div>
      {/* <h1 style={{ 'text-align': 'center' }} className="title">POMODORO TIME</h1> */}
      <Timer minutesPomodoro={minutesPomodoro} minutesBreak={minutesBreak} />
      <p onClick={() => setShowModal(!showModal)} className="buttons">
        SETTINGS
      </p>
      {showModal ? (
        <div className="modal main-container">
          <Settings setShowModal={setShowModal} showModal={showModal} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
