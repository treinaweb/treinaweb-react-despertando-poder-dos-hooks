import React from 'react';
import './App.css';
import useLocalStorage from './data/hooks/useLocalStorage';

function App() {
  const [counter, setCounter] = useLocalStorage('counter', 1);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)} >{counter}</button>
    </div>
  );
}

export default App;
