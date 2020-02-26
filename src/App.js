import React, {useState, useEffect, useRef, createRef} from 'react';
import './App.css';

function Counter2(props){
  const [counter, setCounter] = useState(0);
  const [title, setTitle] = useState('');
  const defaultRef = createRef();
  const hookRef = useRef();

  useEffect(() => {
    console.log("EFFECT")
    console.log("DEFAULT", defaultRef);
    console.log("HOOK", hookRef);
  }, [])

  console.log("DEFAULT", defaultRef);
  console.log("HOOK", hookRef);

  return (
    <>
      <input type="text" value={title} onChange={(event)=>setTitle(event.target.value)} />
      {title}
      <button onClick={()=> setCounter(counter + 1)} >Função: {counter}</button>
      <div ref={defaultRef} />
      <div ref={hookRef} />
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
