import { useEffect } from 'react';

function Settings(props) {
  const click = () => {
    console.log('clicked');
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleKeyDown = (e) => {
    console.log('get me out');
    if (e.key === 'Escape') {
      props.setShowModal(!props.showModal);
    }
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
