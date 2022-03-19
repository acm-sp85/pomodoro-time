import './App.css';
import Timer from './components/Timer.js';
import React, { useState } from 'react';
import Settings from './components/Settings';

function App() {
  let [minutesPomodoro, setMinutesPomodoro] = useState(1);
  let [minutesBreak, setMinutesBreak] = useState(1);
  let [showModal, setShowModal] = useState(false);
  let [soundNumber, setSoundNumber] = useState(0);
  return (
    <div>
      {/* <h1 style={{ 'text-align': 'center' }} className="title">POMODORO TIME</h1> */}
      <Timer
        minutesPomodoro={minutesPomodoro}
        minutesBreak={minutesBreak}
        soundNumber={soundNumber}
      />
      <p onClick={() => setShowModal(!showModal)} className="buttons">
        SETTINGS
      </p>
      {showModal ? (
        <div className="modal main-container">
          <Settings
            setShowModal={setShowModal}
            showModal={showModal}
            minutesPomodoro={minutesPomodoro}
            minutesBreak={minutesBreak}
            soundNumber={soundNumber}
            setMinutesPomodoro={setMinutesPomodoro}
            setMinutesBreak={setMinutesBreak}
            setSoundNumber={setSoundNumber}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
