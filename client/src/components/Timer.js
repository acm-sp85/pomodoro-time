import React, { useState } from 'react';

function Timer() {
  let [seconds, setSeconds] = useState(2);
  let [minutes, setMinutes] = useState(1);
  let countDown = () => {
    if (seconds > 0 && minutes >= 0) {
      console.log(seconds);
      setSeconds((seconds = seconds - 1));
    } else if (minutes >= 1) {
      setSeconds((seconds = 59));
      setMinutes((minutes = minutes - 1));
    }
  };
  return (
    <div>
      <div className="main-container">
        <h3 className="timer-numbers">{`${minutes}:${seconds}`}</h3>
        <p
          className="start-button"
          onClick={() => {
            setInterval(countDown, 1000);
          }}
        >
          START
        </p>
      </div>
    </div>
  );
}

export default Timer;
