import './App.css';
import GitHubUser from './GitHubUser';
import React, { useState } from "react";

function App() {
  const [login, setLogin] = useState(null);
  let loginInput
  const onClick = (params) =>
  {
    setLogin(loginInput);
  }
  const onChange = (e) => {
    loginInput = e.target.value;
  }

  return (
    <div className="App">
      <div>
        <input inputMode='input' value={loginInput} onChange={onChange}></input>
        <button onClick={onClick}>Apply</button>
        <button onClick={() => {localStorage.clear()}}>Clear</button>
      </div>
      <GitHubUser login={login} />
    </div>
  );
}

export default App;