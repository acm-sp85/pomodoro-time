import React, { useState } from 'react';

function Timer() {
  let [seconds, setSeconds] = useState(11);
  let [minutes, setMinutes] = useState(10);
  let [toggle, setToggle] = useState(false);
  let countDown = () => {
    if (seconds > 0 && minutes >= 0) {
      if (seconds <= 10) {
        setSeconds((seconds = '0' + (seconds - 1)));
      } else {
        setSeconds((seconds = seconds - 1));
      }
    } else if (minutes >= 1 && toggle) {
      if (minutes <= 10) {
        setSeconds((seconds = 59));
        setMinutes((minutes = '0' + (minutes - 1)));
      } else {
        setSeconds((seconds = 59));
        setMinutes((minutes = minutes - 1));
      }
    } else {
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
            setToggle((toggle = !toggle));
          }}
        >
          {toggle ? 'STOP' : 'START'}
        </p>
      </div>
    </div>
  );
}

export default Timer;
