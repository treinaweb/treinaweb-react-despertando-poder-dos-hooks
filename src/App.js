import React, {useState} from 'react';
import './App.css';
import useUndo from './data/hooks/useUndo';

function App() {
  const [counter, setCounter] = useState(0);
  const prevValue = useUndo(counter);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)} >{counter}</button>
      <div>Valor Anterior: {prevValue}</div>
      <button onClick={() => setCounter(prevValue)} >Voltar</button>
    </div>
  );
}

export default App;
