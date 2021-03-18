import logo from "./logo.svg";
import "./App.css";
import LifeCycle from "./LifeCycle";
import { useState } from "react";

function App() {
  const [state, setstate] = useState({
    name: "Deepak Rawat",
  });
  const { name } = state;

  const changeName = (e) => {
    setstate({ name: e.target.value });
  };
  return (
    <div className="App">
      {name !== "" && <LifeCycle name={name} />}
      <input type="text" value={name} onChange={changeName} />
    </div>
  );
}

export default App;
