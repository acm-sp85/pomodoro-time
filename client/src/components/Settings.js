import React from 'react';

function Settings() {
  const click = () => {
    console.log('clicked');
  };
  return (
    <div>
      <p className="buttons-inverted" onClick={click}>
        POMODORO DURATION
      </p>
      <p className="buttons-inverted" onClick={click}>
        BREAK DURATION
      </p>
      <p className="buttons-inverted" onClick={click}>
        AUTOSTART
      </p>
      <p className="buttons-inverted" onClick={click}>
        SOUND
      </p>
      <p className="buttons-inverted" onClick={click}>
        PRESETS
      </p>
    </div>
  );
}

export default Settings;
