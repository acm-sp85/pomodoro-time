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

  const handleChange = () => {
    console.log('holas');
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
        <select>
          <option value="bell">Bell</option>
          <option value="whoops">Whoops</option>
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
