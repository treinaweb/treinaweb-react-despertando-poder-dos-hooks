import React, {useState, useEffect, useRef} from 'react';
import './App.css';

function Counter2(props){
  const [counter, setCounter] = useState(0);
  const counterRef = useRef(0);
  const [title, setTitle] = useState('');

  useEffect(() => {
    setInterval(() => {
    	console.log(counterRef);
    }, 1000)
  }, [])

  useEffect(() => {
    counterRef.current = counter;
  }, [counter])

  return (
    <>
      <input type="text" value={title} onChange={(event)=>setTitle(event.target.value)} />
      {title}
      <button onClick={()=> setCounter(counter + 1)} >Função: {counter}</button>
    </>
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
