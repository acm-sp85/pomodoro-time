import React, { useState } from 'react';

function Timer(props) {
  let [seconds, setSeconds] = useState(props.seconds || '00');
  let [minutes, setMinutes] = useState(props.minutes || '25');
  let [toggle, setToggle] = useState(false);
  let [startTimer, setStartTimer] = useState();
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
    setSeconds(props.seconds || '00');
    setMinutes(props.minutes || '25');
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
