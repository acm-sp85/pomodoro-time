import './App.css';
import Timer from './components/Timer.js';
import React, { useState, useEffect } from 'react';
import Settings from './components/Settings';

function App() {
  let [minutesPomodoro, setMinutesPomodoro] = useState(50);
  let [minutesBreak, setMinutesBreak] = useState(10);
  let [showModal, setShowModal] = useState(false);
  let [soundNumber, setSoundNumber] = useState(0);

  useEffect(() => {
    console.log('loading up the timmer component');
  }, [minutesPomodoro, minutesBreak]);

  const stopTimer = () => {
    console.log('stopping the timer');
  };

  return (
    <div>
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
            stopTimer={stopTimer}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
