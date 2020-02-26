import React, {useState, useEffect} from 'react';
import './App.css';

function Counter2(props){
  const [counter, setCounter] = useState(0);
  const [title, setTitle] = useState('');

  useEffect(() => {
    setInterval(() => {
      console.log(1111);
      setCounter(counter => counter + 1);
    }, 2000) 
  }, [])

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
