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
    if (e.key === 'Escape') {
      props.setShowModal(!props.showModal);
    }
  };

  const handleChange = (e) => {
    console.log(parseInt(e.target.value));
    props.setSoundNumber(e.target.value);
  };

  return (
    <div>
      <form>
        <label className="buttons-inverted">POMODORO DURATION</label>
        <input
          name="minutesPomodoro"
          value={props.minutesPomodoro}
          onChange={(e) => props.setMinutesPomodoro(parseInt(e.target.value))}
        ></input>
        <br />
        <label className="buttons-inverted ">BREAK DURATION</label>
        <input
          name="minutesBreak"
          value={props.minutesBreak}
          onChange={(e) => props.setMinutesBreak(parseInt(e.target.value))}
        ></input>
        <br />
        <label className="buttons-inverted">AUTOSTART</label>
        <input type="checkbox"></input>
        <br />
        <label className="buttons-inverted">SOUND</label>
        <select onChange={handleChange} defaultValue={props.soundNumber}>
          <option value="0">Bell</option>
          <option value="1">Gong</option>
          <option value="2">Duck</option>
        </select>
        <br />
        <label className="buttons-inverted">PRESETS</label>
        <select>
          <option value="long">Long Break</option>
          <option value="short">Short Break</option>
        </select>
        <br />
      </form>
    </div>
  );
}

export default Settings;
