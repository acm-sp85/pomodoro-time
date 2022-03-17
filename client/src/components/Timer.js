import React, { useState } from 'react';
import { Howl, Howler } from 'howler';
import Bell from '../audioclips/bell-01.mp3';

function Timer(props) {
  let [seconds, setSeconds] = useState(0);
  let [minutes, setMinutes] = useState(props.minutesPomodoro || 10);
  let [minutesBreak, setMinutesBreak] = useState(props.minutesBreak || 10);
  let [toggleTakingBreak, setToggleTakingBreak] = useState(true);
  let [toggle, setToggle] = useState(false);
  let [startTimer, setStartTimer] = useState();
  const { Howl, Howler } = require('howler');
  const audioClips = [Bell];

  //COUNTDOWN LOGIC
  let countDown = () => {
    if (seconds === 0 && minutes === 0) {
      setToggleTakingBreak(!toggleTakingBreak);
      if (toggleTakingBreak) {
        console.log('taking a break');
        playSound(audioClips);

        setMinutes((minutes = props.minutesBreak));
      } else {
        console.log('time to work');
        playSound(audioClips);
        setMinutes((minutes = props.minutesPomodoro));
      }
    } else if (seconds === 0) {
      setSeconds((seconds = 59));
      setMinutes((minutes = minutes - 1));
    } else if (seconds > 0) {
      setSeconds((seconds = seconds - 1));
    }
  };

  //START-PAUSE action
  const timer = () => {
    if (!toggle) {
      setToggle((toggle = !toggle));
      setStartTimer(setInterval(countDown, 1000));
    } else {
      clearInterval(startTimer);
      setToggle((toggle = !toggle));
    }
  };

  //RESET BUTTON
  const reset = () => {
    setSeconds(0);
    if (toggleTakingBreak) {
      setMinutes(props.minutesPomodoro || 45);
    } else {
      setMinutes(props.minutesBreak || 5);
    }
  };
  //AUDIO EFFECT PLAYER
  const playSound = (src) => {
    const sound = new Howl({
      src,
    });

    sound.play();
  };

  Howler.volume(0.5);
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
