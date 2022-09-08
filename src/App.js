import "./App.css";
import useMyToggle from "use-mytoggle";

function App() {
  const [isOn, setIsOn] = useMyToggle(true);
  return (
    <div className="App">
      <button onClick={() => setIsOn((isOn) => !isOn)}>
        Is active {`${isOn}`}
      </button>
    </div>
  );
}

export default App;
