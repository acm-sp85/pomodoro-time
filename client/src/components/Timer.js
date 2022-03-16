import React, { useState } from 'react';

function Timer(props) {
  let [seconds, setSeconds] = useState(0);
  let [minutes, setMinutes] = useState(props.minutesPomodoro || 10);
  let [minutesBreak, setMinutesBreak] = useState(props.minutesBreak || 10);
  let [toggleTakingBreak, setToggleTakingBreak] = useState(true);
  let [toggle, setToggle] = useState(false);
  let [startTimer, setStartTimer] = useState();

  let countDown = () => {
    if (seconds === 0 && minutes === 0) {
      setToggleTakingBreak(!toggleTakingBreak);
      if (toggleTakingBreak) {
        console.log('taking a break');
        setMinutes((minutes = props.minutesBreak));
      } else {
        console.log('time to work');
        setMinutes((minutes = props.minutesPomodoro));
      }
    } else if (seconds === 0) {
      setSeconds((seconds = 59));
      setMinutes((minutes = minutes - 1));
    } else if (seconds > 0) {
      setSeconds((seconds = seconds - 1));
    }
  };

  const timer = () => {
    if (!toggle) {
      setToggle((toggle = !toggle));
      setStartTimer(setInterval(countDown, 1000));
    } else {
      clearInterval(startTimer);
      setToggle((toggle = !toggle));
    }
  };
  const reset = () => {
    console.log('reset');
    setSeconds(0);
    if (toggleTakingBreak) {
      setMinutes(props.minutesPomodoro || 45);
    } else {
      setMinutes(props.minutesBreak || 5);
    }
  };
  return (
    <div>
      <div className="main-container">
        <h3 className="timer-numbers">{`${minutes}:${seconds}`}</h3>

        {toggle ? (
          <p className="buttons" onClick={timer}>
            PAUSE
          </p>
        ) : (
          <div>
            <p className="buttons" onClick={timer}>
              START
            </p>
            <p className="buttons" onClick={reset}>
              RESET
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Timer;
