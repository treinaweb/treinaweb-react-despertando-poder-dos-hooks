import React, {useState, useEffect, createRef} from 'react';
import './App.css';

function Counter2(props){
  const [counter, setCounter] = useState(0);
  const button = createRef();

  console.log(111, button)
  useEffect(() => {
    console.log(3333, button)
  })

  console.log(2222, button)

  return (
    <button ref={button} onClick={()=> setCounter(counter + 1)} >Função: {counter}</button>
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
