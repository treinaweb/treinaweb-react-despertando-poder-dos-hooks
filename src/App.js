import React, {useState} from 'react';
import './App.css';

function Counter2(props){
  const [counter, setCounter] = useState(0);

  return (
    <button onClick={()=> setCounter(counter + 1)} >Função: {counter}</button>
  )
}

function App() {
  return (
    <div className="App">
      <Counter2 />
    </div>
  );
}

export default App;
