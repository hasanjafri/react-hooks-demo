import { useState } from 'react';

import logo from './logo.svg';
import './App.css';

import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [count, setCount] = useLocalStorage('count', 0);
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Count: {count}
        </p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
