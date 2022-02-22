import React, { useState } from 'react';

function Timer(props) {
  let [seconds, setSeconds] = useState(0);
  let [minutes, setMinutes] = useState(props.minutes || 0);
  let [secondsBreak, setSecondsBreak] = useState(0);
  let [minutesBreak, setMinutesBreak] = useState(props.minutesBreak);
  let [toggleBreak, setToggleBreak] = useState(false);
  let [toggle, setToggle] = useState(false);
  let [startTimer, setStartTimer] = useState();

  let countDownPomodoro = () => {
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
    } else if (minutes == 0 && seconds == 0 && toggle && toggleBreak) {
      setToggleBreak((toggleBreak = !toggleBreak));
      setMinutes(props.minutes || '15');
      setSeconds(59);
      // setToggle((toggle = !toggle));
      console.log('time for a break');

      // setStartTimer(setInterval(countDownPomodoro, 1000));
    } else if (minutes == 0 && seconds == 0 && toggle) {
      setToggleBreak((toggleBreak = !toggleBreak));
      setSeconds(59);
      setMinutes(props.minutesBreak || '15');
    }
  };

  // let countDownBreak = () => {
  //   console.log('pedro');
  //   if (seconds > 0 && minutes >= 0) {
  //     if (seconds <= 10) {
  //       setSeconds((seconds = '0' + (seconds - 1)));
  //     } else {
  //       setSeconds((seconds = seconds - 1));
  //     }
  //   } else if (minutes >= 1 && toggle) {
  //     if (minutes <= 10) {
  //       setSeconds((seconds = 59));
  //       setMinutes((minutes = '0' + (minutes - 1)));
  //     } else {
  //       setSeconds((seconds = 59));
  //       setMinutes((minutes = minutes - 1));
  //     }
  //   } else if (minutes == 0 && seconds == 0 && toggle) {
  //     setMinutes(props.minutes || '15');
  //     clearInterval(startTimer);
  //     setToggle((toggle = !toggle));
  //     setStartTimer(setInterval(countDownPomodoro, 1000));
  //     console.log('time to work');
  //   }
  // };

  // create a new toggle for pomodoro/break, if toggle is at break start the timer for the break
  const timer = () => {
    if (!toggle) {
      setToggle((toggle = !toggle));
      setStartTimer(setInterval(countDownPomodoro, 1000));
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
