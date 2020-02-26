import React, {useState, useEffect} from 'react';
import './App.css';

function Counter2(props){
  const [counter, setCounter] = useState(0);
  const [title, setTitle] = useState('');

  useEffect(() => {
    function updateScroll(){
      setTitle(window.scrollY);
    }
    const timer = setInterval(() => {}, 1000);
    window.addEventListener('scroll', updateScroll);

    return () => {
      window.removeEventListener('scroll', updateScroll);
      clearInterval(timer);
    }
  }, [])

  return (
    <>
      <br /><br />
      <input type="text" value={title} onChange={(event)=>setTitle(event.target.value)} />
      {title}
      <button onClick={()=> setCounter(counter + 1)} >Função: {counter}</button>
      <br /><br />
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
